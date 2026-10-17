import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import Scene from './SeatedRoom';
import Sections from './Sections';
import { destinations } from './content';
import type { SectionId } from './content';
import { readPreferences, savePreferences, routeFromPath } from './preferences';
import type { Lighting } from './preferences';
import { useRoomSound } from './useRoomSound';
import { ContentBoundary } from './ContentBoundary';

const Darkroom=lazy(()=>import('./Darkroom'));
export default function App(){
  const [route,setRoute]=useState(()=>routeFromPath(location.pathname));
  const [prefs,setPrefs]=useState(readPreferences);
  const {playing,error:audioError,toggle:toggleAudio}=useRoomSound(prefs.muted,prefs.volume,muted=>setPrefs(p=>({...p,muted})));
  const [scannerOpen,setScannerOpen]=useState(false);
  useEffect(()=>{
    setScannerOpen(false);
    if(route!=='library'||prefs.lighting!=='darkroom')return;
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const timer=window.setTimeout(()=>setScannerOpen(true),prefs.motion&&!reduced?1100:0);
    return()=>window.clearTimeout(timer);
  },[route,prefs.lighting,prefs.motion]);
  const lastObject=useRef('photography');
  const scrollPositions=useRef<Record<string,number>>({});
  const currentRoute=useRef(route), restoring=useRef(true);

  const previousRoute=useRef(route);
  const known=destinations.some(d=>d.id===route);
  useEffect(()=>{
    const original=history.scrollRestoration;history.scrollRestoration='manual';
    const scroll=()=>{if(!restoring.current)scrollPositions.current[currentRoute.current]=document.querySelector<HTMLDialogElement>('.collection-panel')?.scrollTop??window.scrollY;};
    const handler=()=>{scroll();restoring.current=true;setRoute(routeFromPath(location.pathname));};
    window.addEventListener('popstate',handler);document.addEventListener('scroll',scroll,{passive:true,capture:true});
    return()=>{history.scrollRestoration=original;window.removeEventListener('popstate',handler);document.removeEventListener('scroll',scroll,true);};
  },[]);
  const restorePosition=useCallback(()=>{const top=scrollPositions.current[route]||0;const panel=document.querySelector<HTMLDialogElement>('.collection-panel');if(panel){panel.scrollTop=top;window.scrollTo(0,0);}else window.scrollTo(0,top);restoring.current=false;},[route]);
  useEffect(()=>{savePreferences(prefs);},[prefs]);
  useEffect(()=>{
    const title=destinations.find(d=>d.id===route)?.title;
    document.title=title?`${title} — The McGowen Library`:'The McGowen Library — McGowen Media';
    const was=previousRoute.current;previousRoute.current=route;currentRoute.current=route;
    if(route!=='library'&&known)return;
    const frame=requestAnimationFrame(()=>{restorePosition();if(route==='library'&&was!=='library')document.getElementById(`object-${lastObject.current}`)?.focus({preventScroll:true});});
    return()=>cancelAnimationFrame(frame);
  },[route,known,restorePosition]);
  function navigate(id:SectionId|'library'){
    if(!restoring.current)scrollPositions.current[route]=document.querySelector<HTMLDialogElement>('.collection-panel')?.scrollTop??window.scrollY;
    if(route==='library'&&id!=='library')lastObject.current=id;
    if(route!==id){restoring.current=true;history.pushState({},'',id==='library'?'/':`/${id}`);setRoute(id);}

  }
  function lighting(value:Lighting){setPrefs(p=>({...p,lighting:value}));}
  return <div className={`app is-library ${route==='library'?'':'is-section'} ${prefs.motion?'':'motion-off'}`} data-lighting={prefs.lighting}>
    <a className="skip-link" href="#main">Skip to content</a>
    <main id="main" tabIndex={-1}><>
      <h1 className="sr-only">Explore the library</h1>
      {route==='library'&&prefs.lighting==='darkroom'&&scannerOpen&&<ContentBoundary onHome={()=>lighting('lamplight')}><Suspense fallback={<p role="status">Opening the darkroom…</p>}><Darkroom onClose={()=>{lighting('lamplight');window.scrollTo(0,0);}}/></Suspense></ContentBoundary>}
      <Scene openIndex={()=>{}} navigate={navigate} toggleLamp={()=>lighting(prefs.lighting==='darkroom'?'lamplight':'darkroom')} toggleAudio={()=>void toggleAudio()} playing={playing} soundEnabled={!prefs.muted} motion={prefs.motion} lighting={prefs.lighting}/>
    </>{route==='library'?null:known?<ContentBoundary key={route} onHome={()=>navigate('library')}><Suspense fallback={<div className="section-loading" role="status">Opening the collection…</div>}><SectionFocus onReady={restorePosition}/><Sections key={route} section={route as SectionId} navigate={navigate}/></Suspense></ContentBoundary>:<MissingCollection onHome={()=>navigate('library')}/>}</main>
    {audioError&&<p className="audio-error" role="status">{audioError}</p>}
  </div>;
}
function MissingCollection({onHome}:{onHome:()=>void}){
  const panel=useRef<HTMLDialogElement>(null);
  const heading=useRef<HTMLHeadingElement>(null);
  useEffect(()=>{
    const el=panel.current;el?.showModal();heading.current?.focus({preventScroll:true});
    const before=document.body.style.overflow;document.body.style.overflow='hidden';
    return()=>{el?.close();document.body.style.overflow=before;};
  },[]);
  return <dialog ref={panel} className="collection-panel" aria-labelledby="missing-collection-title" aria-describedby="missing-collection-description" onCancel={e=>{e.preventDefault();onHome();}}><article className="section-page"><div className="section-heading"><p className="eyebrow">AN UNMARKED SHELF</p><h1 ref={heading} tabIndex={-1} id="missing-collection-title">A little lost?</h1><p id="missing-collection-description">This page isn’t part of the collection.</p></div><button className="text-link" onClick={onHome}>Return to the library</button></article></dialog>;
}
function SectionFocus({onReady}:{onReady:()=>void}){useEffect(()=>{const frame=requestAnimationFrame(()=>{onReady();document.getElementById('section-title')?.focus({preventScroll:true});});return()=>cancelAnimationFrame(frame);},[onReady]);return null;}
