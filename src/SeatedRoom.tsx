import InstagramStats from './InstagramStats';
import { useEffect, useRef, useState } from 'react';
import { owner, destinations } from './content';
import type { SectionId } from './content';
import type { createPaperRoom } from './paperRoom';
type Props={navigate:(id:SectionId)=>void;toggleLamp:()=>void;toggleAudio:()=>void;openIndex:()=>void;playing:boolean;soundEnabled?:boolean;motion:boolean;lighting?:string};
export default function SeatedRoom(props:Props){
 const host=useRef<HTMLDivElement>(null),api=useRef<ReturnType<typeof createPaperRoom>|null>(null),latest=useRef(props);latest.current=props;
 const [ready,setReady]=useState(false),[failed,setFailed]=useState(false),[over,setOver]=useState<string|null>(null),[objectsOpen,setObjectsOpen]=useState(false),[announcement,setAnnouncement]=useState('');
 const [statsOpen,setStatsOpen]=useState(false);
 const objectsTrigger=useRef<HTMLButtonElement>(null);
 useEffect(()=>{if(!objectsOpen)return;const close=(e:KeyboardEvent)=>{if(e.key==='Escape'){setObjectsOpen(false);objectsTrigger.current?.focus();}};document.addEventListener('keydown',close);return()=>document.removeEventListener('keydown',close);},[objectsOpen]);
 const objectNames:Record<SectionId,string>={photography:'Camera: portfolio and galleries',about:'Books / portrait: About Me, experience and skills',favorites:'Framed prints: favorite photographs and personal notes',published:'Newspaper: published work and photography credits',engineering:'Engineering · rocket & Game Boy',contact:'Contact · pick up the phone'};
 const actions:{id:string;label:string;tip?:string}[]=[...destinations.map(d=>({id:d.id,label:d.title,tip:objectNames[d.id]})),{id:'lamp',label:'Lamp switch: toggle Lamplight and Darkroom'},{id:'record',label:(props.soundEnabled??props.playing)?'Mute room ambience':'Play room ambience'},{id:'stats',label:'Instagram statistics: followers, posts and growth'},{id:'ladder',label:'Roll the library ladder'}];
 function activate(id:string){setObjectsOpen(false);if(id==='stats'){setStatsOpen(true);return;}if(id==='lamp')latest.current.toggleLamp();else if(id==='record')latest.current.toggleAudio();else if(id!=='ladder')latest.current.navigate(id==='device'?'engineering':id as SectionId);}
 useEffect(()=>{
  const container=host.current;let cancelled=false,unavailable=false;
  if(!container)return;
  const dispose=()=>{const room=api.current;api.current=null;room?.dispose();};
  const fail=()=>{if(cancelled||unavailable)return;unavailable=true;dispose();container.removeAttribute('aria-busy');setReady(false);setFailed(true);setOver(null);setAnnouncement('');};
  const contextLost=(event:Event)=>{event.preventDefault();fail();};
  // Context-loss events do not bubble. Capture also covers a lazily created canvas.
  container.addEventListener('webglcontextlost',contextLost,true);
  if(!window.WebGLRenderingContext)fail();
  else import('./paperRoom').then(({createPaperRoom})=>{
   if(cancelled||unavailable)return;
   try{
    const room=createPaperRoom(container,()=>({...latest.current,lighting:latest.current.lighting||'lamplight'}),setOver,activate,setAnnouncement);
    if(cancelled||unavailable){room.dispose();return;}
    api.current=room;setReady(true);
   }catch{fail();}
  }).catch(fail);
  return()=>{cancelled=true;container.removeEventListener('webglcontextlost',contextLost,true);dispose();};
 },[]);
 return <section className="seated-room" aria-label="Hand illustrated room from a reading chair">
  <InstagramStats open={statsOpen} onClose={()=>setStatsOpen(false)}/><div ref={host} className="seated-canvas"/>
  {!ready&&!failed&&<p className="room-loading" role="status">Taking a seat…</p>}
  {failed&&<p className="room-loading" role="status">The illustrated room is unavailable. Use the object list to explore.</p>}
  <span className="sr-only" role="status">{announcement}</span>
  {over&&<span className="seated-tooltip" role="status">{actions.find(a=>a.id===over)?.tip||actions.find(a=>a.id===over)?.label}</span>}
  <div className="mobile-room-intro"><p>McGowen Media</p><span>The library</span></div>
  <nav className="mobile-room-links" aria-label="Explore McGowen Media">
  <div className="mobile-contact"><a className="mobile-photography" href="/photography" onClick={e=>{e.preventDefault();props.navigate('photography');}}>Photography <span aria-hidden="true">↗</span></a><a className="mobile-contact-link" href="/contact" onClick={e=>{e.preventDefault();props.navigate('contact');}}><svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true"><path d="M8 5h5l2 7-3 2c2 4 3 5 7 7l2-3 7 2v5c0 2-2 3-4 3C13 27 5 19 5 9c0-2 1-4 3-4Z"/></svg><span>Get in touch<small>{owner.phoneDisplay}</small></span><span aria-hidden="true">↗</span></a></div>
  <div className="seated-controls"><button disabled={!ready} aria-label="Look left" onClick={()=>api.current?.look(-.13)}>←</button><button disabled={!ready} aria-label="Reset room view" onClick={()=>api.current?.reset()}>From the chair</button><button disabled={!ready} aria-label="Look right" onClick={()=>api.current?.look(.13)}>→</button><button id="room-objects-trigger" ref={objectsTrigger} aria-expanded={objectsOpen||failed} aria-controls="seated-objects" onClick={()=>setObjectsOpen(v=>!v)}>Objects</button></div>
  </nav>
  <div id="seated-objects" className={objectsOpen||failed?'seated-object-list':'seated-object-list visually-hidden-controls'} aria-label="Room objects" onFocusCapture={event=>{if(!objectsOpen&&!failed){event.stopPropagation();objectsTrigger.current?.focus({preventScroll:true});}}}>{actions.map(a=><button id={`object-${a.id}`} key={a.id} aria-label={a.label} aria-pressed={a.id==='record'?(props.soundEnabled??props.playing):a.id==='lamp'?props.lighting==='darkroom':undefined} onFocus={()=>{api.current?.focus(a.id);setOver(a.id);}} onBlur={()=>{api.current?.focus(null);setOver(null);}} onClick={()=>api.current?api.current.activate(a.id):activate(a.id)}>{a.tip||a.label}</button>)}</div>
 </section>;
}

