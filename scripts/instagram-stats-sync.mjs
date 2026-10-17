import {readFile,writeFile,rename} from 'node:fs/promises';
import {resolve} from 'node:path';
import {pathToFileURL} from 'node:url';
import {ACCOUNT_ID,boundedFetch} from './instagram-sync.mjs';
export function normalizeFollowerGains(payload,previous=[],today=new Date().toISOString().slice(0,10)){
 if(!payload||(payload.status!==undefined&&payload.status!=='done')||payload.error||payload.errors||payload.partial||payload.truncated||payload.next||payload.has_more||!Array.isArray(payload.data)||!payload.data.length)throw Error('Incomplete follower gains');
 const valid=p=>p&&/^\d{4}-\d{2}-\d{2}$/.test(p.date)&&Number.isFinite(Date.parse(p.date))&&new Date(p.date).toISOString().slice(0,10)===p.date&&p.date<today&&Number.isSafeInteger(p.count)&&p.count>=0;
 if(!Array.isArray(previous)||previous.some(p=>!valid(p)))throw Error('Invalid saved follower gains');
 const days=new Set(),history=new Map(previous.map(p=>[p.date,p]));
 for(const row of payload.data){const p={date:row.date,count:row.follower_count_1d};if(!valid(p)||days.has(p.date))throw Error('Invalid daily follower gains');days.add(p.date);history.set(p.date,p);}
 return [...history.values()].sort((a,b)=>a.date.localeCompare(b.date));
}
export function normalizeStats(profile,previous={},feed={posts:[]}){
 if(profile?.status!=='done'||profile.error||profile.partial||profile.truncated||profile.next||profile.has_more||!Array.isArray(profile.data)||profile.data.length!==1)throw Error('Incomplete stats');
 const p=profile.data[0],valid=n=>Number.isSafeInteger(n)&&n>=0;
 if(p.username!=='mcgowen_media'||!valid(p.followers_count)||!valid(p.media_count))throw Error('Invalid profile');
 const d=new Date(/Z$|[+-]\d\d:\d\d$/.test(p.data_fetched_at)?p.data_fetched_at:p.data_fetched_at+'Z');if(!Number.isFinite(d.valueOf()))throw Error('Invalid time');
 const checkedAt=d.toISOString();if(previous.checkedAt&&Date.parse(previous.checkedAt)>d.valueOf())throw Error('Older profile response');
 const history=new Map((previous.followerHistory||[]).map(point=>[point.date,point]));
 if(previous.checkedAt&&valid(previous.followers))history.set(previous.checkedAt,{date:previous.checkedAt,count:previous.followers});
 history.set(checkedAt,{date:checkedAt,count:p.followers_count});
 const tracked=new Map((previous.trackedPosts||[]).map(post=>[post.id,post]));
 for(const post of feed.posts||[])tracked.set(post.id,{id:post.id,timestamp:post.timestamp,caption:post.caption,permalink:post.permalink});
 return {version:2,account:'mcgowen_media',checkedAt,followers:p.followers_count,posts:p.media_count,...(previous.followerGains?{followerGains:previous.followerGains}:{}),followerHistory:[...history.values()].sort((a,b)=>a.date.localeCompare(b.date)),trackedPosts:[...tracked.values()].sort((a,b)=>a.timestamp.localeCompare(b.timestamp))};
}
export async function syncStats(){
 const key=process.env.WINDSOR_API_KEY;if(!key)throw Error('Missing credential');
 const u=new URL('https://connectors.windsor.ai/instagram');u.search=new URLSearchParams({api_key:key,fields:'username,followers_count,media_count,data_fetched_at',date_preset:'last_1dT',select_accounts:ACCOUNT_ID}).toString();
 const profile=JSON.parse((await boundedFetch(u,{maxBytes:1024*1024})).toString());if(profile.status===undefined&&Array.isArray(profile.data))profile.status='done';
 const file=resolve('public/instagram/stats.json');const previous=JSON.parse(await readFile(file,'utf8')),feed=JSON.parse(await readFile(resolve('public/instagram/feed.json'),'utf8'));
 // Save the independently verified profile even if the archive request fails.
 const latest=normalizeStats(profile,previous,feed);
 // Keep daily new-follow records separate from total followers, beyond the API's rolling window.
 const gainsUrl=new URL('https://connectors.windsor.ai/instagram');gainsUrl.search=new URLSearchParams({api_key:key,fields:'date,follower_count_1d',date_from:new Date(Date.now()-30*86400000).toISOString().slice(0,10),date_to:new Date(Date.now()-86400000).toISOString().slice(0,10),select_accounts:ACCOUNT_ID}).toString();
 try{const payload=JSON.parse((await boundedFetch(gainsUrl,{maxBytes:1024*1024})).toString());latest.followerGains=normalizeFollowerGains(payload,previous.followerGains||[]);}
 catch{console.warn('Daily new-follower refresh unavailable; last verified daily records retained.');}
 await writeFile(file+'.tmp',JSON.stringify(latest,null,2)+'\n');await rename(file+'.tmp',file);
 // Fetch metadata independently of the rolling image feed, retaining the full archive.
 const historyUrl=new URL('https://connectors.windsor.ai/instagram');historyUrl.search=new URLSearchParams({api_key:key,fields:'media_id,media_caption,media_permalink,timestamp',date_from:'2010-01-01',date_to:new Date().toISOString().slice(0,10),select_accounts:ACCOUNT_ID}).toString();
 const archive=JSON.parse((await boundedFetch(historyUrl,{maxBytes:10*1024*1024})).toString());
 if(archive.error||archive.partial||archive.truncated||archive.next||archive.has_more||archive.status&&archive.status!=='done'||!Array.isArray(archive.data)||!archive.data.length)throw Error('Incomplete post archive');
 const posts=archive.data.map(p=>{if(!/^\d{5,40}$/.test(String(p.media_id))||!Number.isFinite(Date.parse(p.timestamp))||!/^https:\/\/www\.instagram\.com\/(p|reel)\/[\w-]+\/$/.test(p.media_permalink)||p.media_caption!=null&&typeof p.media_caption!=='string')throw Error('Invalid archive post');return {id:String(p.media_id),caption:p.media_caption??'',timestamp:new Date(p.timestamp).toISOString(),permalink:p.media_permalink};});
 const stats=normalizeStats(profile,latest,{posts:[...feed.posts,...posts]});await writeFile(file+'.tmp',JSON.stringify(stats,null,2)+'\n');await rename(file+'.tmp',file);
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href)syncStats().catch(()=>{console.error('Instagram stats or archive refresh failed; last verified data retained.');process.exitCode=1;});
