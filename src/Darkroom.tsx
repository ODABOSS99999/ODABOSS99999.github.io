import {useEffect,useRef,useState} from 'react';
import {useInstagramSnapshot,instagramPhoto} from './instagramMedia';
import ExitSign from './ExitSign';
import './darkroom.css';

export default function Darkroom({onClose}:{onClose?:()=>void}){
 const panel=useRef<HTMLDialogElement>(null),gesture=useRef<{x:number;y:number}|null>(null),suppressClickUntil=useRef(0);
 const {snapshot,loading}=useInstagramSnapshot({refreshOnMount:true});
 const [loadedCount,setLoadedCount]=useState(5);
 const [index,setIndex]=useState(0),[scan,setScan]=useState(0),[direction,setDirection]=useState(1);
 const posts=[...(snapshot?.posts||[])].filter(post=>post.mediaType==='IMAGE'||post.mediaType==='CAROUSEL_ALBUM').sort((a,b)=>Date.parse(b.timestamp)-Date.parse(a.timestamp));
 const visibleCount=Math.min(loadedCount,posts.length);
 const current=Math.min(index,Math.max(0,visibleCount-1)),post=posts[current];
 const move=(direction:number)=>{if(direction>0&&current===visibleCount-1&&visibleCount<posts.length)setLoadedCount(count=>count+5);setDirection(direction);setIndex(Math.max(0,Math.min(posts.length-1,current+direction)));setScan(value=>value+1);};
 useEffect(()=>{const dialog=panel.current,previous=document.activeElement as HTMLElement|null;const overflow=document.body.style.overflow;document.body.style.overflow='hidden';if(dialog?.showModal)dialog.showModal();else dialog?.setAttribute('open','');dialog?.querySelector<HTMLButtonElement>('button')?.focus();return()=>{document.body.style.overflow=overflow;dialog?.close?.();previous?.focus({preventScroll:true});};},[]);
 return <dialog ref={panel} onCancel={event=>{event.preventDefault();onClose?.();}} className="darkroom-dashboard film-scanner" aria-labelledby="darkroom-title">
  <header><h2 id="darkroom-title">Fresh off the roll.</h2><div className="scanner-header-actions">{onClose&&<ExitSign onExit={onClose} label="Exit darkroom" className="darkroom-exit"/>}</div></header>
  <div className="scanner-body" role="region" aria-roledescription="carousel" aria-label="Film scanner" tabIndex={0} onKeyDown={event=>{if(event.key==='ArrowLeft'||event.key==='ArrowRight'){event.preventDefault();move(event.key==='ArrowLeft'?-1:1);}}} onPointerDown={event=>{if((event.target as HTMLElement).closest('.scanner-controls,.scanner-caption'))return;gesture.current={x:event.clientX,y:event.clientY};}} onPointerMove={event=>{const start=gesture.current;if(start&&Math.abs(event.clientX-start.x)>45&&Math.abs(event.clientX-start.x)>Math.abs(event.clientY-start.y)){event.currentTarget.setPointerCapture?.(event.pointerId);suppressClickUntil.current=Date.now()+500;}}} onPointerUp={event=>{const start=gesture.current;gesture.current=null;if(start&&Math.abs(event.clientX-start.x)>45&&Math.abs(event.clientX-start.x)>Math.abs(event.clientY-start.y)){suppressClickUntil.current=Date.now()+500;move(event.clientX<start.x?1:-1);}if(event.currentTarget.hasPointerCapture?.(event.pointerId))event.currentTarget.releasePointerCapture(event.pointerId);}} onClickCapture={event=>{if(Date.now()<suppressClickUntil.current){event.preventDefault();event.stopPropagation();}}} onPointerCancel={()=>{gesture.current=null;}}>
   <div className="scanner-viewport">
    {post?<div key={post.id} className={`film-negative ${direction<0?'film-backward':''}`}><div className="film-edge" aria-hidden="true"><span>KODAK · 35 MM</span><span>{String(current+1).padStart(2,'0')} ▷</span></div><a draggable={false} onDragStart={event=>event.preventDefault()} className="scanned-photo" href={post.permalink} target="_blank" rel="noreferrer" aria-label={`View frame ${current+1} on Instagram`}><img src={post.image.src} width={post.image.width} height={post.image.height} alt={instagramPhoto(post).alt} draggable={false}/></a><div className="film-edge" aria-hidden="true"><span>MCGOWEN</span><span>{String(current+1).padStart(2,'0')} A</span></div></div>:<p role="status">{loading?'Loading film…':'Film unavailable.'}</p>}
    {post&&<div key={scan} className="scanner-light" aria-hidden="true"/>}
   </div>
   <div className="scanner-controls"><button type="button" onClick={()=>move(-1)} disabled={!post||current===0} aria-label="Scan previous frame">←</button><span role="status" aria-live="polite" aria-atomic="true">{post?`${String(current+1).padStart(2,'0')} / ${String(visibleCount).padStart(2,'0')}`:'—'}</span><button type="button" onClick={()=>move(1)} disabled={!post||current===posts.length-1} aria-label="Scan next frame">→</button></div>
   {post&&<div key={post.id} className="scanner-caption"><time dateTime={post.timestamp}>{new Date(post.timestamp).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})}</time><div className="scanner-caption-text" tabIndex={0} role="region" aria-label="Post caption">{post.caption?<p>{post.caption}</p>:<p className="caption-empty">No caption on this post.</p>}</div></div>}
  </div>
 </dialog>;
}
