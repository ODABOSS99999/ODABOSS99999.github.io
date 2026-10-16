import {readFile,writeFile,rename} from 'node:fs/promises';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
import {ACCOUNT_ID,boundedFetch} from './instagram-sync.mjs';
export function normalizeStats(profile,growth){
 for(const p of [profile,growth])if(p?.status!=='done'||p.error||p.partial||p.truncated||p.next||p.has_more||!Array.isArray(p.data)||!p.data.length)throw Error('Incomplete stats');
 if(profile.data.length!==1)throw Error('Ambiguous profile');
 const p=profile.data[0],valid=n=>Number.isSafeInteger(n)&&n>=0;
 if(p.username!=='mcgowen_media'||!valid(p.followers_count)||!valid(p.media_count))throw Error('Invalid profile');
 const time=v=>{const d=new Date(/Z$|[+-]\d\d:\d\d$/.test(v)?v:v+'Z');if(!Number.isFinite(d.valueOf()))throw Error('Invalid time');return d.toISOString();};
 const seen=new Set();const days=growth.data.map(r=>{if(!/^\d{4}-\d{2}-\d{2}$/.test(r.date)||seen.has(r.date)||r.follower_count_1d!==null&&!valid(r.follower_count_1d))throw Error('Invalid growth');seen.add(r.date);time(r.data_fetched_at);return {date:r.date,count:r.follower_count_1d};}).sort((a,b)=>a.date.localeCompare(b.date));
 return {version:1,account:'mcgowen_media',checkedAt:time(p.data_fetched_at),followers:p.followers_count,posts:p.media_count,collabs:null,growth:days};
}
export async function syncStats(){
 const key=process.env.WINDSOR_API_KEY;if(!key)throw Error('Missing credential');
 async function query(fields,date_preset){const u=new URL('https://connectors.windsor.ai/instagram');u.search=new URLSearchParams({api_key:key,fields:fields.join(','),date_preset,select_accounts:ACCOUNT_ID}).toString();const p=JSON.parse((await boundedFetch(u,{maxBytes:1024*1024})).toString());if(p.status===undefined&&Array.isArray(p.data))p.status='done';return p;}
 const [profile,growth]=await Promise.all([query(['username','followers_count','media_count','data_fetched_at'],'last_1dT'),query(['date','follower_count_1d','data_fetched_at'],'last_30d')]);
 const stats=normalizeStats(profile,growth),file=resolve('public/instagram/stats.json');
 const previous=JSON.parse(await readFile(file,'utf8'));if(Date.parse(previous.checkedAt)>Date.parse(stats.checkedAt))throw Error('Older profile response');
 await writeFile(file+'.tmp',JSON.stringify(stats,null,2)+'\n');await rename(file+'.tmp',file);
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href)syncStats().catch(()=>{console.error('Instagram stats refresh failed; previous snapshot retained.');process.exitCode=1;});
