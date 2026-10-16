import { useEffect, useState } from 'react';
import { validateMetrics } from './instagramMetrics';
import { validateSnapshot } from './instagram';
import type { InstagramPost, InstagramSnapshot } from './instagram';
import type { Photo } from './content';
let request:Promise<InstagramSnapshot>|null=null,cachedAt=0;
export function loadInstagramSnapshot(){
 if(!request||Date.now()-cachedAt>60000){cachedAt=Date.now();request=Promise.all([
  fetch('/instagram/feed.json',{cache:'no-cache'}).then(r=>{if(!r.ok)throw new Error('Instagram images unavailable');return r.json();}).then(validateSnapshot),
  fetch('/instagram/metrics.json',{cache:'no-cache'}).then(r=>{if(!r.ok)throw new Error('Metrics unavailable');return r.json();}).then(validateMetrics).catch(()=>null),
 ]).then(([snapshot,metrics])=>{const byId=new Map(metrics?.posts.map(p=>[p.id,p])||[]);return {...snapshot,posts:snapshot.posts.map(post=>{const m=byId.get(post.id);return m&&m.permalink===post.permalink?{...post,metrics:m}:post;})};}).catch(e=>{request=null;throw e;});}
 return request;
}
export function useInstagramSnapshot(){
 const [snapshot,setSnapshot]=useState<InstagramSnapshot|null>(null),[loading,setLoading]=useState(true);
 useEffect(()=>{let live=true;const refresh=()=>{if(document.hidden)return;loadInstagramSnapshot().then(s=>{if(live)setSnapshot(s);}).catch(()=>{}).finally(()=>{if(live)setLoading(false);});};refresh();const interval=setInterval(refresh,300000);document.addEventListener('visibilitychange',refresh);return()=>{live=false;clearInterval(interval);document.removeEventListener('visibilitychange',refresh);};},[]);
 return {snapshot,loading};
}
export function instagramPhoto(p:InstagramPost):Photo{
 const date=new Date(p.timestamp).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});
 return{metrics:p.metrics,id:`ig-${p.id}`,src:p.image.src,width:p.image.width,height:p.image.height,alt:`${p.mediaType==='IMAGE'?'Photograph':p.mediaType==='CAROUSEL_ALBUM'?'Carousel cover':'Video cover'} from @mcgowen_media, ${date}`,caption:p.caption,sourceUrl:p.permalink,sourceLabel:p.mediaType==='VIDEO'||p.mediaType==='REEL'?'Watch reel on Instagram':p.mediaType==='CAROUSEL_ALBUM'?'View full carousel on Instagram':'View post on Instagram'};
}
export const sectionImageIds={
 about:['18119889931954458','18221320804356544','18111604349466809'],
 published:['18111604349466809','17883850254502684','18339773350248090','18579922954075231'],
 engineering:['17883850254502684','17994026724028663','18105631976166091','18133367926647764'],
 contact:['18221320804356544'],
};
