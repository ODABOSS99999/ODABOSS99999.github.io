import {useEffect,useRef,useState} from 'react';
import {classifyPartnership,cumulativePosts,monthlyPosts,type LedgerPoint} from './instagramLedger';
import './instagramStats.css';
import ExitSign from './ExitSign';
type TrackedPost={id:string;caption:string;timestamp:string;permalink:string};
export type Stats={version:2;account:string;checkedAt:string;followers:number;posts:number;followerHistory:LedgerPoint[];trackedPosts:TrackedPost[]};
export async function loadStats(signal?:AbortSignal):Promise<Stats>{
 const r=await fetch('/instagram/stats.json',{cache:'no-store',signal});if(!r.ok)throw Error('Unavailable');const s=await r.json();
 const valid=(n:unknown)=>Number.isSafeInteger(n)&&Number(n)>=0;
 if(s.version!==2||s.account!=='mcgowen_media'||!Number.isFinite(Date.parse(s.checkedAt))||![s.followers,s.posts].every(valid)||!Array.isArray(s.followerHistory)||s.followerHistory.some((p:LedgerPoint)=>!Number.isFinite(Date.parse(p.date))||!valid(p.count))||!Array.isArray(s.trackedPosts)||s.trackedPosts.some((p:TrackedPost)=>typeof p.id!=='string'||typeof p.caption!=='string'||!Number.isFinite(Date.parse(p.timestamp))||!/^https:\/\/www\.instagram\.com\/(p|reel)\/[\w-]+\/$/.test(p.permalink)))throw Error('Invalid stats');
 return s;
}
export function LineChart({points,label}:{points:LedgerPoint[];label:string}){
 const [selected,setSelected]=useState<number|null>(null);const p=points[Math.min(selected??points.length-1,points.length-1)];
 if(!points.length)return <p>No dated records yet.</p>;
 if(points.length===1)return <div className="ledger-single"><output aria-live="polite"><strong>{points[0].count.toLocaleString()}</strong>{' '}<span>{label.toLowerCase()} recorded {new Date(points[0].date.length===10?points[0].date+'T12:00:00':points[0].date).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'})}</span></output><p>A trend appears after the next recorded total.</p></div>;
 const low=Math.max(0,Math.min(...points.map(p=>p.count))-(label==='Followers'?10:0)),high=Math.max(low+1,...points.map(p=>p.count));
 const start=Date.parse(points[0].date),span=Math.max(1,Date.parse(points.at(-1)!.date)-start);
 const x=(p:LedgerPoint)=>points.length===1?322:50+(Date.parse(p.date)-start)/span*535,y=(n:number)=>150-(n-low)/(high-low)*120;
 return <div className="ledger-chart"><output aria-live="polite">{p.count.toLocaleString()} {label.toLowerCase()} · {new Date(p.date.length===10?p.date+'T12:00:00':p.date).toLocaleDateString(undefined,{month:'short',day:'numeric',year:'numeric'})}</output><svg viewBox="0 0 610 180" role="img" aria-label={`${label} over time line graph. ${points.length} recorded dates.`}>
 {[0,.5,1].map(n=><g key={n}><path d={`M50 ${150-n*120}H585`} stroke="currentColor" opacity=".15"/><text x="2" y={154-n*120} fontSize="11" fill="currentColor">{Math.round(low+(high-low)*n).toLocaleString()}</text></g>)}
 {points.length>1&&<path d={points.map((point,i)=>`${i?'L':'M'}${x(point)},${y(point.count)}`).join(' ')} fill="none" stroke="currentColor" strokeWidth="2.5"/>}
 <circle cx={x(p)} cy={y(p.count)} r="5" fill="currentColor"/>
 </svg><div className="stats-dates"><span>{points[0].date.slice(0,10)}</span><span>{points.at(-1)!.date.slice(0,10)}</span></div>
 {points.length>1&&<input className="ledger-scrubber" type="range" min="0" max={points.length-1} value={Math.min(selected??points.length-1,points.length-1)} onChange={e=>setSelected(Number(e.target.value))} aria-label={`Explore ${label.toLowerCase()} by date`}/>}
 <details><summary>View dated totals</summary><table><thead><tr><th>Date</th><th>{label}</th></tr></thead><tbody>{points.map(p=><tr key={p.date}><td>{p.date.slice(0,10)}</td><td>{p.count.toLocaleString()}</td></tr>)}</tbody></table></details></div>;
}
export default function InstagramStats({open,onClose}:{open:boolean;onClose:()=>void}){
 const dialog=useRef<HTMLDialogElement>(null);const [stats,setStats]=useState<Stats|null>(null),[error,setError]=useState(false);
 const [monthly,setMonthly]=useState(true);
 const [metric,setMetric]=useState<'followers'|'posts'|'partnerships'>('posts');
 useEffect(()=>{const c=new AbortController();async function refresh(){try{setStats(await loadStats(c.signal));setError(false);}catch{if(!c.signal.aborted)setError(true);}}void refresh();const timer=setInterval(()=>void refresh(),300000);const visible=()=>{if(!document.hidden)void refresh();};document.addEventListener('visibilitychange',visible);return()=>{c.abort();clearInterval(timer);document.removeEventListener('visibilitychange',visible);};},[]);
 useEffect(()=>{if(open)dialog.current?.showModal();else dialog.current?.close();},[open]);
 const classified=stats?.trackedPosts.map(post=>({...post,...classifyPartnership(post)}))??[];const partnerships=classified.filter(p=>p.kind==='partnership');const unreviewed=classified.filter(p=>p.kind==='unreviewed').length;
 return <dialog ref={dialog} className="instagram-stats" onCancel={onClose} onClose={onClose} aria-labelledby="stats-title">
 <div className="ledger-top"><p className="eyebrow">@MCGOWEN_MEDIA</p><ExitSign onExit={onClose} label="Close Instagram statistics"/></div><h2 id="stats-title">The social ledger.</h2>
 {stats?<><div className="ledger-metrics" role="group" aria-label="Choose a statistic">{([{id:'followers',label:'Followers',value:stats.followers},{id:'posts',label:'Posts',value:stats.posts},{id:'partnerships',label:'Partnerships*',value:partnerships.length}] as const).map(item=><button key={item.id} aria-pressed={metric===item.id} onClick={()=>setMetric(item.id)}><span>{item.label}</span><strong>{item.value.toLocaleString()}</strong></button>)}</div>
 <section className="ledger-active-chart" aria-label={`${metric} history`}><h3>{metric==='followers'?'Followers over time':metric==='posts'?'Posts over time':'Partnership posts over time'}</h3><p>{metric==='followers'?'All recorded follower totals are public below. Instagram provides no historical backfill; earlier totals need an imported record.':`${metric==='posts'?'All dated posts returned by Instagram':'Identified partnership posts across the full archive'} · ${stats.trackedPosts.length.toLocaleString()} archived posts since ${stats.trackedPosts[0]?.timestamp.slice(0,7)}. Archived posts may differ from the current profile total.`}</p>{metric!=='followers'&&<div role="group" aria-label="Chart period"><button aria-pressed={monthly} onClick={()=>setMonthly(true)}>Posts per month</button><button aria-pressed={!monthly} onClick={()=>setMonthly(false)}>Cumulative</button></div>}<LineChart key={metric+String(monthly)} points={metric==='followers'?stats.followerHistory:(monthly?monthlyPosts(metric==='posts'?stats.trackedPosts:partnerships,stats.checkedAt):cumulativePosts(metric==='posts'?stats.trackedPosts:partnerships))} label={metric==='followers'?'Followers':metric==='posts'?'Posts':'Partnership posts'}/></section>
 <details><summary>How partnership posts are counted</summary><p>*The original 50 posts use AI-reviewed captions and covers; the expanded all-time archive uses caption rules, using your definition: artist, concert, product, organization and editorial work count. Personal, friends and casual car posts do not. This does not imply payment, endorsement or Instagram co-authorship. Caption-based classifications are approximate until reviewed. Counts cover the dated archive; {unreviewed} ambiguous captions are excluded pending review.</p><table><thead><tr><th>Post</th><th>Classification</th></tr></thead><tbody>{classified.map(p=><tr key={p.id}><td><a href={p.permalink} target="_blank" rel="noreferrer">{p.timestamp.slice(0,10)} · {p.caption.slice(0,65)||'Untitled post'}</a></td><td>{p.kind==='partnership'?'Counted':p.kind==='personal'?'Excluded':'Needs review'}<br/>{p.reason}</td></tr>)}</tbody></table></details>
 <p className="stats-note">{error?'Refresh unavailable · ':''}{Date.now()-Date.parse(stats.checkedAt)>86400000?'Older snapshot · ':''}Source checked {new Date(stats.checkedAt).toLocaleString()}. Daily source refresh configured; this panel checks for updates every five minutes.</p></>:<p role="status">{error?'Instagram statistics are unavailable.':'Opening the ledger…'}</p>}
 </dialog>;
}

