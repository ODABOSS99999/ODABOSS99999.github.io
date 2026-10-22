import { useEffect, useState } from 'react';
import { validateMetrics } from './instagramMetrics';
import { validateSnapshot } from './instagram';
import { liveFeedUrl, liveFeedHeaders, validateLiveFeed } from './instagramLiveFeed';
import type { InstagramPost, InstagramSnapshot } from './instagram';
import type { Photo } from './content';
import type { MetricsSnapshot } from './instagramMetrics';
let request:Promise<InstagramSnapshot>|null=null,cachedAt=0,snapshotPending=false;
let liveRequest:Promise<InstagramSnapshot>|null=null;
function loadLiveSnapshot(url:string){
 if(!liveRequest)liveRequest=fetch(url,{headers:liveFeedHeaders(),cache:'no-store',signal:AbortSignal.timeout(35000)}).then(response=>{if(!response.ok)throw Error('Latest post unavailable');return response.json();}).then(validateLiveFeed).finally(()=>{liveRequest=null;});
 return liveRequest;
}
let lastMetrics:MetricsSnapshot|null=null;
export function loadInstagramSnapshot(force=false){
 if(request&&snapshotPending)return request;
 if(force||!request||Date.now()-cachedAt>60000){snapshotPending=true;cachedAt=Date.now();const refreshQuery=`?refresh=${cachedAt}`;request=Promise.all([
  fetch(`/instagram/feed.json${refreshQuery}`,{cache:'no-store',signal:AbortSignal.timeout(10000)}).then(r=>{if(!r.ok)throw new Error('Instagram images unavailable');return r.json();}).then(validateSnapshot),
  fetch(`/instagram/metrics.json${refreshQuery}`,{cache:'no-store',signal:AbortSignal.timeout(10000)}).then(r=>{if(!r.ok)throw new Error('Metrics unavailable');return r.json();}).then(validateMetrics).then(metrics=>{lastMetrics=metrics;return metrics;}).catch(()=>lastMetrics),
 ]).then(([snapshot,metrics])=>{const byId=new Map(metrics?.posts.map(p=>[p.id,p])||[]);return {...snapshot,posts:snapshot.posts.map(post=>{const m=byId.get(post.id);return {...post,image:{...post.image,src:`${post.image.src}?v=${encodeURIComponent(snapshot.fetchedAt)}`},metrics:m&&m.permalink===post.permalink?m:undefined};})};}).catch(e=>{request=null;throw e;}).finally(()=>{snapshotPending=false;});}
 return request;
}
export function useInstagramSnapshot({refreshOnMount=false}:{refreshOnMount?:boolean}={}){
 const [snapshot,setSnapshot]=useState<InstagramSnapshot|null>(null),[loading,setLoading]=useState(true),[error,setError]=useState(false);
 useEffect(()=>{
  let live=true,sequence=0;
  const refresh=async(force=false)=>{
   if(document.hidden&&!force)return;
   const attempt=++sequence;
   let saved:InstagramSnapshot|null=null,failed=false;
   try{saved=await loadInstagramSnapshot(force);}catch{failed=true;}
   if(live&&attempt===sequence&&saved){setSnapshot(saved);setLoading(false);}
   if(refreshOnMount){
    try{
     const url=liveFeedUrl();
     if(url){
      const latest=await loadLiveSnapshot(url);
      const posts=new Map(saved?.posts.map(post=>[post.id,post])||[]);
      latest.posts.forEach(post=>posts.set(post.id,post));
      saved={...latest,posts:[...posts.values()].sort((a,b)=>Date.parse(b.timestamp)-Date.parse(a.timestamp))};
      failed=false;
     }
    }catch{failed=true;}
   }
   if(live&&attempt===sequence){if(saved)setSnapshot(saved);setError(failed);setLoading(false);}
  };
  void refresh(refreshOnMount);
  const poll=()=>{void refresh();};
  const interval=setInterval(poll,300000);
  document.addEventListener('visibilitychange',poll);
  return()=>{live=false;clearInterval(interval);document.removeEventListener('visibilitychange',poll);};
 },[refreshOnMount]);
 return {snapshot,loading,error};
}
export function instagramPhoto(p:InstagramPost):Photo{
 const date=new Date(p.timestamp).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});
 return{metrics:p.metrics,id:`ig-${p.id}`,src:p.image.src,width:p.image.width,height:p.image.height,alt:`${p.mediaType==='IMAGE'?'Photograph':p.mediaType==='CAROUSEL_ALBUM'?'Carousel cover':'Video cover'} from @mcgowen_media, ${date}`,caption:p.caption,sourceUrl:p.permalink,sourceLabel:p.mediaType==='VIDEO'||p.mediaType==='REEL'?'Watch reel on Instagram':p.mediaType==='CAROUSEL_ALBUM'?'View full carousel on Instagram':'View post on Instagram'};
}
export const sectionImageIds={
 about:['18119889931954458','18221320804356544','18111604349466809'],
 engineering:['17883850254502684','17994026724028663','18105631976166091','18133367926647764'],
 contact:['18221320804356544'],
};
