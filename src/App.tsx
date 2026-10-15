import { lazy, Suspense, useCallback, useEffect, useRef, useState } from 'react';
import type { MouseEvent } from 'react';
import Scene from './Scene';
import { destinations } from './content';
import type { SectionId } from './content';
import { readPreferences, savePreferences, routeFromPath } from './preferences';
import type { Lighting } from './preferences';
import { RoomAudio } from './audio';
import { ContentBoundary } from './ContentBoundary';
const Sections=lazy(()=>import('./Sections'));
export default function App(){
  const [route,setRoute]=useState(()=>routeFromPath(location.pathname));
  const [prefs,setPrefs]=useState(readPreferences);
  const [playing,setPlaying]=useState(false);
  const [audioError,setAudioError]=useState('');
  const [settings,setSettings]=useState(false),[menu,setMenu]=useState(false);
  const audio=useRef<RoomAudio|null>(null), audioIntent=useRef(false),audioGeneration=useRef(0);
  const lastObject=useRef('photography');
  const scrollPositions=useRef<Record<string,number>>({});
  const currentRoute=useRef(route), restoring=useRef(true);
  const settingsTrigger=useRef<HTMLButtonElement>(null), menuTrigger=useRef<HTMLButtonElement>(null);
  const previousRoute=useRef(route);
  const known=destinations.some(d=>d.id===route);
  useEffect(()=>{
    const original=history.scrollRestoration;history.scrollRestoration='manual';
    const scroll=()=>{if(!restoring.current)scrollPositions.current[currentRoute.current]=window.scrollY;};
    const handler=()=>{scroll();restoring.current=true;setMenu(false);setSettings(false);setRoute(routeFromPath(location.pathname));};
    window.addEventListener('popstate',handler);window.addEventListener('scroll',scroll,{passive:true});
    return()=>{history.scrollRestoration=original;window.removeEventListener('popstate',handler);window.removeEventListener('scroll',scroll);};
  },[]);
  const restorePosition=useCallback(()=>{window.scrollTo(0,scrollPositions.current[route]||0);restoring.current=false;},[route]);
  useEffect(()=>{savePreferences(prefs);},[prefs]);
  useEffect(()=>{
    const title=destinations.find(d=>d.id===route)?.title;
    document.title=title?`${title} — The McGowen Library`:'The McGowen Library — McGowen Media';
    const was=previousRoute.current;previousRoute.current=route;currentRoute.current=route;
    if(route!=='library'&&known)return;
    const frame=requestAnimationFrame(()=>{restorePosition();if(route==='library'&&was!=='library')document.getElementById(`object-${lastObject.current}`)?.focus({preventScroll:true});});
    return()=>cancelAnimationFrame(frame);
  },[route,known,restorePosition]);
  useEffect(()=>{
    const visibility=()=>{if(document.hidden){void audio.current?.pause();}else if(audioIntent.current){void audio.current?.start(prefs.volume).catch(()=>{audioIntent.current=false;setPlaying(false);setAudioError('Room audio is unavailable.');});}};
    document.addEventListener('visibilitychange',visibility);return()=>document.removeEventListener('visibilitychange',visibility);
  },[prefs.volume]);
  useEffect(()=>{audio.current?.volume(playing?prefs.volume:0);},[prefs.volume,playing]);
  useEffect(()=>()=>{audioGeneration.current++;audioIntent.current=false;void audio.current?.dispose();audio.current=null;},[]);
  useEffect(()=>{const escape=(e:KeyboardEvent)=>{if(e.key==='Escape'){if(menu)menuTrigger.current?.focus();if(settings)settingsTrigger.current?.focus();setMenu(false);setSettings(false);}};document.addEventListener('keydown',escape);return()=>document.removeEventListener('keydown',escape);},[menu,settings]);
  function navigate(id:SectionId|'library'){
    if(!restoring.current)scrollPositions.current[route]=window.scrollY;
    if(route==='library'&&id!=='library')lastObject.current=id;
    if(route!==id){restoring.current=true;history.pushState({},'',id==='library'?'/':`/${id}`);setRoute(id);}
    setMenu(false);setSettings(false);
  }
  function link(e:MouseEvent<HTMLAnchorElement>,id:SectionId|'library'){if(e.button||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;e.preventDefault();navigate(id);}
  function lighting(value:Lighting){setPrefs(p=>({...p,lighting:value}));}
  async function toggleAudio(){
    const next=!audioIntent.current;audioIntent.current=next;const generation=++audioGeneration.current;setAudioError('');
    setPrefs(p=>({...p,muted:!next}));
    if(!next){setPlaying(false);await audio.current?.pause();return;}
    try{if(!audio.current)audio.current=new RoomAudio();await audio.current.start(prefs.volume);if(generation!==audioGeneration.current){if(!audioIntent.current)await audio.current.pause();return;}if(document.hidden)await audio.current.pause();setPlaying(true);}catch{if(generation===audioGeneration.current){audioIntent.current=false;setPlaying(false);setPrefs(p=>({...p,muted:true}));setAudioError('Room audio is unavailable in this browser.');}}
  }
  return <div className={`app ${route==='library'?'is-library':'is-section'} ${prefs.motion?'':'motion-off'}`} data-lighting={prefs.lighting}>
    <a className="skip-link" href="#main">Skip to content</a>
    <header className="site-header"><a href="/" onClick={e=>link(e,'library')} className="site-name" aria-label="McGowen Media — library home">McGowen Media</a>
      <div className="header-center">THE PERSONAL COLLECTION</div><div className="header-controls">
      <button className="audio-shortcut" aria-label={playing?'Mute room ambience':'Play room ambience'} onClick={()=>void toggleAudio()} aria-pressed={playing}><span aria-hidden="true">{playing?'◖))':'◖×'}</span><span>{playing?'Sound on':'Sound off'}</span></button>
      <div className="control-wrap"><button ref={settingsTrigger} className={`settings-toggle ${settings?'active':''}`} aria-label="Room settings" aria-expanded={settings} aria-controls="room-settings" onClick={()=>{setSettings(!settings);setMenu(false);}}><span aria-hidden="true">☼</span><span>Room</span></button>
      {settings&&<div id="room-settings" className="settings-panel"><span className="eyebrow">SET THE ATMOSPHERE</span><fieldset><legend>Lighting</legend><div className="lighting-options">{(['daylight','lamplight','darkroom'] as Lighting[]).map(mode=><button key={mode} aria-pressed={prefs.lighting===mode} onClick={()=>lighting(mode)}><span className={`mode-dot ${mode}`}/>{mode[0].toUpperCase()+mode.slice(1)}</button>)}</div></fieldset><div className="setting-row"><label htmlFor="volume">Ambient volume</label><output htmlFor="volume">{Math.round(prefs.volume*100)}%</output></div><input id="volume" type="range" min="0" max="1" step=".01" value={prefs.volume} onChange={e=>setPrefs(p=>({...p,volume:Number(e.target.value)}))}/><button className="setting-action" onClick={()=>void toggleAudio()}>{playing?'Mute ambience':'Play ambience'} <span>{playing?'Ⅱ':'▷'}</span></button><label className="motion-setting"><input type="checkbox" checked={prefs.motion} onChange={e=>setPrefs(p=>({...p,motion:e.target.checked}))}/>Subtle room movement</label><p>Sound begins only when you press play.</p></div>}</div>
      <div className="control-wrap"><button ref={menuTrigger} className="menu-toggle" onClick={()=>{setMenu(!menu);setSettings(false);}} aria-expanded={menu} aria-controls="library-menu">Index <span aria-hidden="true">{menu?'−':'+'}</span></button>{menu&&<nav id="library-menu" className="menu-panel" aria-label="Library index"><a href="/" aria-current={route==='library'?'page':undefined} onClick={e=>link(e,'library')}><span>00</span>The library <span>↗</span></a>{destinations.map(d=><a href={`/${d.id}`} key={d.id} aria-current={route===d.id?'page':undefined} onClick={e=>link(e,d.id)}><span>{d.number}</span>{d.title}<span>↗</span></a>)}</nav>}</div>
    </div></header>
    <main id="main" tabIndex={-1}>{route==='library'?<>
      <div className="library-intro"><div><p className="eyebrow"><span className="little-rule"/> WELCOME. TAKE YOUR TIME.</p><h1>The McGowen <em>Library.</em></h1><p className="intro-copy">A place for photographs, curious ideas,<br className="desktop-break"/> and things made with care.</p></div><div className="intro-aside"><p>A small world.<br/>A closer look.</p></div></div>
      <Scene navigate={navigate} toggleLamp={()=>lighting(prefs.lighting==='darkroom'?'lamplight':'darkroom')} toggleAudio={()=>void toggleAudio()} playing={playing} motion={prefs.motion} lighting={prefs.lighting}/>
    </>:known?<ContentBoundary key={route} onHome={()=>navigate('library')}><Suspense fallback={<div className="section-loading" role="status">Opening the collection…</div>}><SectionFocus onReady={restorePosition}/><Sections key={route} section={route as SectionId} navigate={navigate}/></Suspense></ContentBoundary>:<div className="not-found"><p className="eyebrow">AN UNMARKED SHELF</p><h1>A little lost?</h1><p>This page isn’t part of the collection.</p><button className="text-link" onClick={()=>navigate('library')}>Return to the library ↗</button></div>}</main>
    <footer className="site-footer"><span>McGowen Media</span><div>{route==='library'?<span className="library-status"><span/>YOU’RE IN THE LIBRARY</span>:<a className="exit-sign" href="/" onClick={e=>link(e,'library')} aria-label="Return to library">EXIT <span aria-hidden="true">↗</span></a>}</div><span className="lighting-status"><span className={`mode-dot ${prefs.lighting}`}/>{prefs.lighting[0].toUpperCase()+prefs.lighting.slice(1)}</span></footer>
    {audioError&&<p className="audio-error" role="status">{audioError}</p>}
  </div>;
}
function SectionFocus({onReady}:{onReady:()=>void}){useEffect(()=>{const frame=requestAnimationFrame(()=>{onReady();document.getElementById('section-title')?.focus({preventScroll:true});});return()=>cancelAnimationFrame(frame);},[onReady]);return null;}




