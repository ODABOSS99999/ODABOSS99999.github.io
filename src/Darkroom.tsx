import {useCallback,useEffect,useRef,useState} from 'react';
import {loadInstagramSnapshot} from './instagramMedia';
import {loadStats} from './InstagramStats';
import type {Stats} from './InstagramStats';
import type {InstagramSnapshot} from './instagram';
import PhotoMetrics from './PhotoMetrics';
import './darkroom.css';

export default function Darkroom(){
 const panel=useRef<HTMLElement>(null);
 useEffect(()=>{const frame=requestAnimationFrame(()=>panel.current?.scrollIntoView?.({block:'start',behavior:'instant'}));return()=>cancelAnimationFrame(frame);},[]);
 const [feed,setFeed]=useState<InstagramSnapshot|null>(null),[stats,setStats]=useState<Stats|null>(null);
 const [busy,setBusy]=useState(true),[error,setError]=useState(false);
 const active=useRef(false),pending=useRef(false);
 const refresh=useCallback(async()=>{
  if(pending.current)return;pending.current=true;setBusy(true);
  const [posts,analytics]=await Promise.allSettled([loadInstagramSnapshot(true),loadStats()]);
  pending.current=false;if(!active.current)return;
  if(posts.status==='fulfilled')setFeed(posts.value);
  if(analytics.status==='fulfilled')setStats(analytics.value);
  setError(posts.status==='rejected'||analytics.status==='rejected');setBusy(false);
 },[]);
 useEffect(()=>{active.current=true;void refresh();const timer=setInterval(()=>{if(!document.hidden)void refresh();},300000);const visible=()=>{if(!document.hidden)void refresh();};document.addEventListener('visibilitychange',visible);return()=>{active.current=false;clearInterval(timer);document.removeEventListener('visibilitychange',visible);};},[refresh]);
 const posts=[...(feed?.posts||[])].sort((a,b)=>Date.parse(b.timestamp)-Date.parse(a.timestamp)).slice(0,6);
 const max=Math.max(1,...(stats?.growth.map(p=>p.count??0)||[]));
 const stamp=(value:string)=>`${Date.now()-Date.parse(value)>86400000?'Older snapshot · ':''}${new Date(value).toLocaleString()}`;
 return <section ref={panel} className="darkroom-dashboard" aria-labelledby="darkroom-title">
  <header><div><p className="eyebrow">THE DARKROOM / @MCGOWEN_MEDIA</p><h2 id="darkroom-title">Fresh off the roll.</h2></div><button onClick={()=>void refresh()} disabled={busy}>{busy?'Checking…':'Check for updates'}</button></header>
  <p className="darkroom-freshness">Daily automatic source sync · this panel checks published updates every five minutes. Updates follow the source’s refresh schedule.</p>
  {error&&<p role="status">Some updates are unavailable. Any previously loaded data stays visible.</p>}
  {stats?<><dl className="darkroom-totals"><div><dt>Followers</dt><dd>{stats.followers.toLocaleString()}</dd></div><div><dt>Published posts</dt><dd>{stats.posts.toLocaleString()}</dd></div></dl><p className="darkroom-freshness">Profile source checked <time dateTime={stats.checkedAt}>{stamp(stats.checkedAt)}</time></p>
  <details className="darkroom-growth"><summary>Daily new followers · {stats.growth.length} reported days</summary><p>New follows, excluding unfollows. Missing values are unavailable.</p><svg viewBox="0 0 600 100" role="img" aria-label="Daily new followers">{stats.growth.map((day,i)=><rect key={day.date} x={i*600/stats.growth.length} y={95-(day.count??0)/max*90} width={Math.max(1,600/stats.growth.length-4)} height={(day.count??0)/max*90} fill="currentColor"><title>{day.date}: {day.count??'unavailable'}</title></rect>)}</svg><table><thead><tr><th>Date</th><th>New followers</th></tr></thead><tbody>{stats.growth.map(day=><tr key={day.date}><td>{day.date}</td><td>{day.count??'Unavailable'}</td></tr>)}</tbody></table></details></>:<p role="status">{busy?'Loading account analytics…':'Account analytics unavailable.'}</p>}
  <h3>Recent posts</h3>{feed&&<p className="darkroom-freshness">Feed synced <time dateTime={feed.fetchedAt}>{stamp(feed.fetchedAt)}</time>. Engagement counts show their source timestamps; unavailable counts are omitted.</p>}
  <div className="darkroom-posts">{posts.map(post=><article key={post.id}><a href={post.permalink} target="_blank" rel="noreferrer"><img src={post.image.src} width={post.image.width} height={post.image.height} loading="lazy" alt={`Instagram ${post.mediaType==='VIDEO'||post.mediaType==='REEL'?'video cover':'post'} from ${new Date(post.timestamp).toLocaleDateString()}`}/><span>View {post.mediaType==='VIDEO'||post.mediaType==='REEL'?'reel':'post'} on Instagram ↗</span></a><time dateTime={post.timestamp}>{new Date(post.timestamp).toLocaleDateString()}</time><p>{post.caption}</p><PhotoMetrics metrics={post.metrics}/></article>)}</div>
  {!posts.length&&<p role="status">{busy?'Developing the latest posts…':'Recent posts are unavailable.'} <a href="https://www.instagram.com/mcgowen_media/" target="_blank" rel="noreferrer">Visit @mcgowen_media ↗</a></p>}
 </section>;
}
