import {useEffect,useState} from 'react';
import {validateMetrics,type InstagramMetrics,type MetricsSnapshot} from './instagramMetrics';
import {assertFresh,liveHeaders,liveUrl} from './liveStatistics';

let pending:Promise<MetricsSnapshot>|undefined;
function fetchMetrics(){
 if(!pending){
  pending=(async()=>{
   const response=await fetch(liveUrl('/metrics'),{cache:'no-store',headers:liveHeaders(),signal:AbortSignal.timeout(25000)});
   if(!response.ok)throw new Error('Instagram metrics unavailable');
   const snapshot=validateMetrics(await response.json());
   assertFresh(snapshot.fetchedAt);
   return snapshot;
  })().finally(()=>{pending=undefined;});
 }
 return pending;
}

export default function PhotoMetrics({permalink}:{permalink?:string;metrics?:InstagramMetrics}){
 const [metrics,setMetrics]=useState<InstagramMetrics|null>(null);
 const [loading,setLoading]=useState(true);
 const [attempt,setAttempt]=useState(0);
 useEffect(()=>{
  let active=true;
  setMetrics(null);
  const refresh=async()=>{
   if(active)setLoading(true);
   setMetrics(previous=>{if(!previous)return null;try{assertFresh(previous.checkedAt);if(previous.views!==null)assertFresh(previous.viewsCheckedAt||previous.checkedAt);return previous;}catch{return null;}});
   try{
    const snapshot=await fetchMetrics();
    const post=snapshot.posts.find(post=>post.permalink===permalink);
    if(!post)throw new Error('Post metrics unavailable');
    {
     assertFresh(post.checkedAt);
     if(post.views!==null)assertFresh(post.viewsCheckedAt||post.checkedAt);
    }
    if(active)setMetrics(post);
   }catch{if(active)setMetrics(previous=>{try{if(previous){assertFresh(previous.checkedAt);if(previous.views!==null)assertFresh(previous.viewsCheckedAt||previous.checkedAt);}return previous;}catch{return null;}});}
   finally{if(active)setLoading(false);}
  };
  if(!permalink)return()=>{active=false;};
  void refresh();
  const interval=window.setInterval(()=>void refresh(),60000);
  const focus=()=>void refresh();
  const visible=()=>{if(document.visibilityState==='visible')void refresh();};
  window.addEventListener('focus',focus);
  document.addEventListener('visibilitychange',visible);
  return()=>{active=false;window.clearInterval(interval);window.removeEventListener('focus',focus);document.removeEventListener('visibilitychange',visible);};
 },[permalink,attempt]);
 if(!permalink?.startsWith('https://www.instagram.com/'))return null;
 if(!metrics)return <span className="post-unavailable" role="status">{loading?'Checking live engagement…':<>Live engagement unavailable <button type="button" className="metrics-retry" onClick={()=>setAttempt(value=>value+1)}>Retry</button></>}</span>;
 const date=new Date(metrics.checkedAt);
 return <span className="photo-metrics" role="group" aria-label="Live Instagram engagement counts"><span className="metrics-counts">{metrics.likes!==null?<span>♡ {metrics.likes.toLocaleString()} likes</span>:<span>Likes unavailable</span>}{metrics.comments!==null&&<span>◌ {metrics.comments.toLocaleString()} comments</span>}{metrics.views!==null&&<span>↗ {metrics.views.toLocaleString()} views</span>}</span><time dateTime={metrics.checkedAt}>Last checked {date.toLocaleString('en-US',{month:'short',day:'numeric',hour:'numeric',minute:'2-digit',timeZoneName:'short'})}</time></span>;
}
