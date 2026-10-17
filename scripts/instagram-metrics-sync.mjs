import {readFile,writeFile,mkdir,rename} from 'node:fs/promises';
import {resolve,join} from 'node:path';
import {pathToFileURL} from 'node:url';
import {ACCOUNT,ACCOUNT_ID,boundedFetch,validatedUrl} from './instagram-sync.mjs';
export const METRIC_FIELDS=['media_id','media_permalink','media_like_count','media_comments_count','media_views','data_fetched_at'];
export function metricsUrl(key,archive=true){if(!key)throw new Error('Missing Windsor credential');const u=new URL('https://connectors.windsor.ai/instagram');u.search=new URLSearchParams({api_key:key,fields:METRIC_FIELDS.join(','),...(archive?{date_from:'2010-01-01',date_to:new Date().toISOString().slice(0,10)}:{date_preset:'last_30dT'}),select_accounts:ACCOUNT_ID}).toString();return u;}
const count=v=>{if(v===null||v===undefined||v==='')return null;const n=Number(v);if(!Number.isSafeInteger(n)||n<0)throw new Error('Invalid engagement count');return n;};
function utc(v){if(typeof v!=='string')throw new Error('Missing source fetch time');const date=new Date(/[zZ]$|[+-]\d\d:\d\d$/.test(v)?v:`${v}Z`);if(!Number.isFinite(date.valueOf()))throw new Error('Invalid source fetch time');return date.toISOString();}
export function normalizeMetrics(payload,now=new Date()){
 if(!payload||(payload.status!==undefined&&payload.status!=='done')||payload.error||payload.errors||payload.partial||payload.truncated||payload.next||payload.has_more||!Array.isArray(payload.data)||!payload.data.length||payload.data.length>1000)throw new Error('Incomplete metric response');
 const rows=new Map();for(const row of payload.data){const id=String(row.media_id??'');if(!/^\d{5,40}$/.test(id))throw new Error('Invalid media identifier');const checkedAt=utc(row.data_fetched_at);if(Date.parse(checkedAt)>now.valueOf()+300000)throw new Error('Future source fetch time');const p={id,permalink:validatedUrl(row.media_permalink,'permalink'),likes:count(row.media_like_count),comments:count(row.media_comments_count),views:count(row.media_views),checkedAt};if(rows.has(id)&&JSON.stringify(rows.get(id))!==JSON.stringify(p))throw new Error('Conflicting metric rows');rows.set(id,p);}
 return {version:1,account:ACCOUNT,source:'Windsor.ai / Instagram',scope:'instagram-organic-media',fetchedAt:now.toISOString(),posts:[...rows.values()]};
}
export async function syncMetrics({input,output=resolve('public/instagram'),key=process.env.WINDSOR_API_KEY,fetchImpl=fetch,now=new Date()}={}){
 let payload,next;
 if(input){payload=JSON.parse(await readFile(input,'utf8'));next=normalizeMetrics(payload,now);}
 else{
  try{payload=JSON.parse((await boundedFetch(metricsUrl(key),{fetchImpl,maxBytes:5*1024*1024,timeoutMs:120000})).toString('utf8'));next=normalizeMetrics(payload,now);}
  catch{console.warn('Full engagement archive unavailable; refreshing recent posts and retaining older dated counts.');payload=JSON.parse((await boundedFetch(metricsUrl(key,false),{fetchImpl,maxBytes:5*1024*1024})).toString('utf8'));next=normalizeMetrics(payload,now);}
 }
 const file=join(output,'metrics.json');let previous;
 try{previous=JSON.parse(await readFile(file,'utf8'));}catch(e){if(e.code!=='ENOENT')throw new Error('Previous metrics unreadable');}
 if(previous&&(previous.version!==1||previous.account!==ACCOUNT||!Array.isArray(previous.posts)))throw new Error('Previous metrics invalid');
 const merged=new Map((previous?.posts||[]).map(p=>[p.id,p]));for(const p of next.posts){const old=merged.get(p.id);if(old&&Date.parse(old.checkedAt)>Date.parse(p.checkedAt))continue;merged.set(p.id,p);}next.posts=[...merged.values()];
 await mkdir(output,{recursive:true});await writeFile(`${file}.tmp`,JSON.stringify(next,null,2)+'\n');await rename(`${file}.tmp`,file);return {posts:next.posts.length,refreshed:payload.data.length};
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href){try{const args=process.argv.slice(2);if(args.length&&(args.length!==2||args[0]!=='--input'))throw new Error('Invalid arguments');const result=await syncMetrics({input:args[1]});console.log(`Instagram engagement refreshed: ${result.refreshed} posts.`);}catch(error){const reasons=new Set(['Incomplete metric response','Missing source fetch time','Invalid source fetch time','Future source fetch time','Invalid media identifier','Invalid engagement count','Conflicting metric rows','Remote request failed','Previous metrics unreadable','Previous metrics invalid']);const reason=reasons.has(error?.message)?` ${error.message}.`:'';console.error(`Instagram engagement refresh failed; last checked counts retained.${reason} Check the private Windsor configuration.`);process.exitCode=1;}}
