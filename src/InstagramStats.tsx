import {useEffect,useRef,useState} from 'react';
export type Stats={version:1;account:string;checkedAt:string;followers:number;posts:number;collabs:number|null;growth:{date:string;count:number|null}[]};
export async function loadStats(signal?:AbortSignal):Promise<Stats>{
 const r=await fetch('/instagram/stats.json',{cache:'no-store',signal});if(!r.ok)throw Error('Unavailable');const s=await r.json();
 if(s.version!==1||s.account!=='mcgowen_media'||!Number.isFinite(Date.parse(s.checkedAt))||![s.followers,s.posts].every(n=>Number.isSafeInteger(n)&&n>=0)||s.collabs!==null||!Array.isArray(s.growth)||s.growth.some((p:{date:string;count:number|null})=>!/^\d{4}-\d{2}-\d{2}$/.test(p.date)||p.count!==null&&(!Number.isSafeInteger(p.count)||p.count<0)))throw Error('Invalid stats');
 return s;
}
export default function InstagramStats({open,onClose}:{open:boolean;onClose:()=>void}){
 const dialog=useRef<HTMLDialogElement>(null);const [stats,setStats]=useState<Stats|null>(null),[error,setError]=useState(false);
 useEffect(()=>{const c=new AbortController();async function refresh(){try{setStats(await loadStats(c.signal));setError(false);}catch{if(!c.signal.aborted)setError(true);}}void refresh();const timer=setInterval(()=>void refresh(),300000);const visible=()=>{if(!document.hidden)void refresh();};document.addEventListener('visibilitychange',visible);return()=>{c.abort();clearInterval(timer);document.removeEventListener('visibilitychange',visible);};},[]);
 useEffect(()=>{if(open)dialog.current?.showModal();else dialog.current?.close();},[open]);
 const max=Math.max(1,...(stats?.growth.map(p=>p.count??0)||[]));
 return <dialog ref={dialog} className="instagram-stats" onCancel={onClose} onClose={onClose} aria-labelledby="stats-title">
 <button className="stats-close" onClick={onClose} aria-label="Close Instagram statistics">Close ×</button><p className="eyebrow">THE SOCIAL LEDGER / @MCGOWEN_MEDIA</p><h2 id="stats-title">A growing collection.</h2>
 {stats?<><dl className="stats-totals">{[['Followers',stats.followers],['Posts',stats.posts],['Collaborations',stats.collabs]].map(([label,value])=><div key={label}><dt>{label}</dt><dd>{value===null?'—':Number(value).toLocaleString()}</dd></div>)}</dl>
 <h3>Daily new followers</h3><p>New follows, excluding unfollows · {stats.growth.length} reported days</p>
 <svg viewBox="0 0 600 180" role="img" aria-label="Daily new followers bar chart">{[0,.5,1].map(n=><g key={n}><path d={`M30 ${145-n*120}H595`} stroke="currentColor" opacity=".15"/><text x="2" y={149-n*120} fontSize="10" fill="currentColor">{Math.round(max*n)}</text></g>)}{stats.growth.map((p,i)=><rect key={p.date} x={34+i*560/stats.growth.length} y={145-(p.count??0)/max*120} width={Math.max(1,560/stats.growth.length-4)} height={(p.count??0)/max*120} fill="#927348"><title>{p.date}: {p.count??'unavailable'} new followers</title></rect>)}</svg>
 <div className="stats-dates"><span>{stats.growth[0]?.date}</span><span>{stats.growth.at(-1)?.date}</span></div>
 <details><summary>View daily counts</summary><table><thead><tr><th>Date</th><th>New followers</th></tr></thead><tbody>{stats.growth.map(p=><tr key={p.date}><td>{p.date}</td><td>{p.count??'Unavailable'}</td></tr>)}</tbody></table></details>
 <p className="stats-note">Collaborations unavailable: the Instagram connection needs Facebook Login to include co-authored posts.</p><p className="stats-note">{error?'Refresh unavailable · ':''}{Date.now()-Date.parse(stats.checkedAt)>86400000?'Older snapshot · ':''}Source checked {new Date(stats.checkedAt).toLocaleString()}. Daily source refresh configured; this panel checks for updates every five minutes.</p></>:<p role="status">{error?'Instagram statistics are unavailable.':'Opening the ledger…'}</p>}
 </dialog>;
}
