import { useEffect, useRef, useState } from 'react';
import ExitSign from './ExitSign';
import type { Photo } from './content';
export function Image({ photo, ...props }: { photo: Photo; className?: string; loading?: 'lazy' | 'eager' }) {
  const [failed,setFailed] = useState(false);
  return failed ? <div className="image-missing" role="img" aria-label={`${photo.alt} — image unavailable`}>Image unavailable</div> : <img {...props} src={photo.src} width={photo.width} height={photo.height} alt={photo.alt} onError={()=>setFailed(true)}/>;
}
export default function Gallery({ items, intimate = false }: { items: Photo[]; intimate?: boolean }) {
  const [active,setActive] = useState<number|null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const origin = useRef<HTMLButtonElement|null>(null);
  const start = useRef<{x:number;y:number}|null>(null);
  const change = (delta:number) => setActive(n=>n===null ? n : (n+delta+items.length)%items.length);
  useEffect(()=>{
    const el=dialog.current;
    if(active===null || !el)return;
    if(!el.open) el.showModal();
    const before=document.body.style.overflow;document.body.style.overflow='hidden';
    return ()=>{ if(el.open)el.close();document.body.style.overflow=before;origin.current?.focus(); };
  },[active===null]); // The modal remains mounted while changing images.
  useEffect(()=>{
    if(active===null||items.length<2)return;
    const preload = [-1,1].map(delta=>{const img=new window.Image();img.src=items[(active+delta+items.length)%items.length].src;return img;});
    return ()=>{preload.forEach(img=>{img.src='';});};
  },[active,items]);
  return <><div className={`gallery ${intimate?'intimate':''}`}>{items.map((photo,i)=><figure key={photo.id}>
    <button aria-label={`View ${photo.alt}`} onClick={e=>{origin.current=e.currentTarget;setActive(i);}}><Image photo={photo} loading="lazy"/></button>
    {(photo.caption||photo.credit||photo.note||photo.sourceUrl)&&<figcaption><span className="photo-caption">{photo.caption}</span>{photo.credit&&<small>{photo.credit}</small>}{intimate&&photo.note&&<p>{photo.note}</p>}{photo.sourceUrl&&<a className="photo-source" href={photo.sourceUrl} target="_blank" rel="noreferrer">{photo.sourceLabel||'View original source'} ↗</a>}</figcaption>}
  </figure>)}</div>
  <dialog className="image-viewer" ref={dialog} aria-label="Photograph viewer" onCancel={e=>{e.preventDefault();setActive(null);}} onClick={e=>{if(e.target===e.currentTarget)setActive(null);}} onKeyDown={e=>{if(e.key==='Tab'){const controls=[...e.currentTarget.querySelectorAll<HTMLElement>('button:not([disabled]),a[href]')];const first=controls[0],last=controls[controls.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last?.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first?.focus();}}if(e.key==='ArrowRight'){e.preventDefault();change(1);}if(e.key==='ArrowLeft'){e.preventDefault();change(-1);}}}>
    {active!==null&&<><div className="viewer-top"><span aria-live="polite">{active+1} / {items.length}</span><ExitSign autoFocus onExit={()=>setActive(null)} label="Close photograph viewer"/></div>
    <figure className="viewer-image" onTouchStart={e=>{start.current={x:e.touches[0].clientX,y:e.touches[0].clientY};}} onTouchEnd={e=>{const p=start.current;start.current=null;if(!p)return;const dx=e.changedTouches[0].clientX-p.x,dy=e.changedTouches[0].clientY-p.y;if(Math.abs(dx)>70&&Math.abs(dx)>Math.abs(dy)*1.5)change(dx<0?1:-1);}}>
      <Image key={items[active].id} photo={items[active]} loading="eager"/>
      <figcaption><span className="photo-caption">{items[active].caption}</span>{items[active].credit&&<small>{items[active].credit}</small>}{items[active].sourceUrl&&<a className="photo-source" href={items[active].sourceUrl} target="_blank" rel="noreferrer">{items[active].sourceLabel||'View original source'} ↗</a>}</figcaption>
    </figure><div className="viewer-bottom"><button onClick={()=>change(-1)} disabled={items.length<2} aria-label="Previous photograph">← Previous</button><span>Use arrow keys to explore</span><button onClick={()=>change(1)} disabled={items.length<2} aria-label="Next photograph">Next →</button></div></>}
  </dialog></>;
}
