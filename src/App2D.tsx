import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import Scene from './SeatedRoom';
import { destinations } from './content';
import type { SectionId } from './content';
import { readPreferences, savePreferences, routeFromPath } from './preferences';
import type { Lighting } from './preferences';
import { useRoomSound } from './useRoomSound';
import ExitSign from './ExitSign';
import { ContentBoundary } from './ContentBoundary';
const Sections=lazy(()=>import('./Sections'));
const Darkroom=lazy(()=>import('./Darkroom'));
export default function App(){
  const [route,setRoute]=useState(()=>routeFromPath(location.pathname));
  const [prefs,setPrefs]=useState(readPreferences);
  const {playing,error:audioError,toggle:toggleAudio}=useRoomSound(prefs.muted,prefs.volume,muted=>setPrefs(p=>({...p,muted})));
  const [settings,setSettings]=useState(false),[menu,setMenu]=useState(false);
  const lastObject=useRef('photography');
  const scrollPositions=useRef<Record<string,number>>({});
  const currentRoute=useRef(route), restoring=useRef(true);
  const settingsTrigger=useRef<HTMLButtonElement>(null), menuTrigger=useRef<HTMLButtonElement>(null);
  const previousRoute=useRef(route);
  const known=destinations.some(d=>d.id===route);
  useEffect(()=>{
    const original=history.scrollRestoration;history.scrollRestoration='manual';
    const scroll=()=>{if(!restoring.current)scrollPositions.current[currentRoute.current]=document.querySelector<HTMLDialogElement>('.collection-panel')?.scrollTop??window.scrollY;};
    const handler=()=>{scroll();restoring.current=true;setMenu(false);setSettings(false);setRoute(routeFromPath(location.pathname));};
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
  useEffect(()=>{const escape=(e:KeyboardEvent)=>{if(e.key==='Escape'){if(menu)menuTrigger.current?.focus();if(settings)settingsTrigger.current?.focus();setMenu(false);setSettings(false);}};document.addEventListener('keydown',escape);return()=>document.removeEventListener('keydown',escape);},[menu,settings]);
  function navigate(id:SectionId|'library'){
    if(!restoring.current)scrollPositions.current[route]=document.querySelector<HTMLDialogElement>('.collection-panel')?.scrollTop??window.scrollY;
    if(route==='library'&&id!=='library')lastObject.current=id;
    if(route!==id){restoring.current=true;history.pushState({},'',id==='library'?'/':`/${id}`);setRoute(id);}
    setMenu(false);setSettings(false);
  }
  function link(e:MouseEvent<HTMLAnchorElement>,id:SectionId|'library'){if(e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;e.preventDefault();navigate(id);}
  function lighting(value:Lighting){setPrefs(p=>({...p,lighting:value}));}
  return <div className={`app ${route==='library'?'is-library':'is-section'} ${prefs.motion?'':'motion-off'}`} data-lighting={prefs.lighting}>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header">{route!=='library'&&<a href="/" onClick={e=>link(e,'library')} className="site-name" aria-label="McGowen Media — library home">McGowen Media</a>}
      <div className="header-controls">
      <button className="audio-shortcut" data-audio-toggle aria-label={!prefs.muted?'Mute room ambience':'Play room ambience'} onClick={()=>void toggleAudio()} aria-pressed={!prefs.muted}><span className={`audio-meter ${playing?'is-playing':''}`} aria-hidden="true"><i/><i/><i/><i/></span><span>{!prefs.muted?'Sound on':'Sound off'}</span></button>
      <div className="control-wrap"><button ref={settingsTrigger} className={`settings-toggle ${settings?'active':''}`} aria-label="Room settings" aria-expanded={settings} aria-controls="room-settings" onClick={()=>{setSettings(!settings);setMenu(false);}}><span aria-hidden="true">☼</span><span>Room</span></button>
      {settings&&<div id="room-settings" className="settings-panel"><ExitSign className="panel-exit" label="Exit room settings" onExit={()=>{setSettings(false);settingsTrigger.current?.focus();}}/><span className="eyebrow">SET THE ATMOSPHERE</span><fieldset><legend>Lighting</legend><div className="lighting-options">{(['daylight','lamplight','darkroom'] as Lighting[]).map(mode=><button key={mode} aria-pressed={prefs.lighting===mode} onClick={()=>lighting(mode)}><span className={`mode-dot ${mode}`}/>{mode[0].toUpperCase()+mode.slice(1)}</button>)}</div></fieldset><div className="setting-row"><label htmlFor="volume">Ambient volume</label><output htmlFor="volume">{Math.round(prefs.volume*100)}%</output></div><input id="volume" type="range" min="0" max="1" step=".01" value={prefs.volume} onChange={e=>setPrefs(p=>({...p,volume:Number(e.target.value)}))}/><button className="setting-action" data-audio-toggle onClick={()=>void toggleAudio()}>{!prefs.muted?'Mute ambience':'Play ambience'} <span>{playing?'Ⅱ':'▷'}</span></button><label className="motion-setting"><input type="checkbox" checked={prefs.motion} onChange={e=>setPrefs(p=>({...p,motion:e.target.checked}))}/>Subtle room movement</label><p>Sound is on by default. Your browser may wait for your first interaction.</p></div>}</div>
      <div className="control-wrap"><button ref={menuTrigger} className="menu-toggle" onClick={()=>{setMenu(!menu);setSettings(false);}} aria-expanded={menu} aria-controls="library-menu">Index <span aria-hidden="true">{menu?'−':'+'}</span></button>{menu&&<nav id="library-menu" className="menu-panel" aria-label="Library index"><ExitSign className="panel-exit" label="Exit library index" onExit={()=>{setMenu(false);menuTrigger.current?.focus();}}/><a href="/" aria-current={route==='library'?'page':undefined} onClick={e=>link(e,'library')}><span>00</span>The library <span>↗</span></a>{destinations.map(d=><a href={`/${d.id}`} key={d.id} aria-current={route===d.id?'page':undefined} onClick={e=>link(e,d.id)}><span>{d.number}</span>{d.title}<span>↗</span></a>)}</nav>}</div>
    </div></header>
    <main id="main" tabIndex={-1}><>
      <h1 className="sr-only">Explore the library</h1>
      {route==='library'&&prefs.lighting==='darkroom'&&<ContentBoundary onHome={()=>lighting('lamplight')}><Suspense fallback={<p role="status">Opening the darkroom…</p>}><Darkroom/></Suspense></ContentBoundary>}
      <Scene openIndex={()=>{setMenu(true);setSettings(false);requestAnimationFrame(()=>document.querySelector<HTMLAnchorElement>('#library-menu a')?.focus());}} navigate={navigate} toggleLamp={()=>lighting(prefs.lighting==='darkroom'?'lamplight':'darkroom')} toggleAudio={()=>void toggleAudio()} playing={playing} soundEnabled={!prefs.muted} motion={prefs.motion} lighting={prefs.lighting}/>
    </>{route==='library'?null:known?<ContentBoundary key={route} onHome={()=>navigate('library')}><Suspense fallback={<div className="section-loading" role="status">Opening the collection…</div>}><SectionFocus onReady={restorePosition}/><Sections key={route} section={route as SectionId} navigate={navigate}/></Suspense></ContentBoundary>:<div className="not-found"><p className="eyebrow">AN UNMARKED SHELF</p><h1>A little lost?</h1><p>This page isn’t part of the collection.</p><ExitSign onExit={()=>navigate('library')} label="Return to the library"/></div>}</main>
    {route!=='library'&&<footer className="site-footer"><span>McGowen Media</span><div>{route==='library'?<span className="library-status"><span/>YOU’RE IN THE LIBRARY</span>:<a className="exit-sign" href="/" onClick={e=>link(e,'library')} aria-label="Return to library">EXIT <span aria-hidden="true">↗</span></a>}</div><span className="lighting-status"><span className={`mode-dot ${prefs.lighting}`}/>{prefs.lighting[0].toUpperCase()+prefs.lighting.slice(1)}</span></footer>}
    {audioError&&<p className="audio-error" role="status">{audioError}</p>}
  </div>;
}
function SectionFocus({onReady}:{onReady:()=>void}){useEffect(()=>{const frame=requestAnimationFrame(()=>{onReady();document.getElementById('section-title')?.focus({preventScroll:true});});return()=>cancelAnimationFrame(frame);},[onReady]);return null;}
