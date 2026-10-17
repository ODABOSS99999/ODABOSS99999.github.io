import { useEffect, useRef, useState } from 'react';
import { destinations } from './content';
import type { SectionId } from './content';
import type { createRoom } from './room3d';
export default function Scene(props:{navigate:(id:SectionId)=>void;toggleLamp:()=>void;toggleAudio:()=>void;playing:boolean;motion:boolean;lighting:string}){
 const host=useRef<HTMLDivElement>(null),api=useRef<ReturnType<typeof createRoom>|null>(null),latest=useRef(props);latest.current=props;
 const [hover,setHover]=useState<string|null>(null),[fallback,setFallback]=useState(false),[ready,setReady]=useState(false);
 const actions=[...destinations.map(d=>({id:d.id,label:d.title,tip:d.id==='contact'?'Butler · Contact':d.id==='photography'?'Camera · Photography':d.id==='about'?'Books · About me':d.id==='published'?'Newspaper · Published work':'Rocket · Engineering'})),{id:'lamp',label:'Lamp switch: toggle Lamplight and Darkroom',tip:'Desk lamp · Switch light'},{id:'record',label:props.playing?'Mute room ambience':'Play room ambience',tip:props.playing?'Record player · Pause':'Record player · Play'}];
 const activate=(id:string)=>{if(id==='lamp')latest.current.toggleLamp();else if(id==='record')latest.current.toggleAudio();else latest.current.navigate(id as SectionId);};
 useEffect(()=>{let disposed=false;if(!window.WebGLRenderingContext){setFallback(true);return;}import('./room3d').then(({createRoom})=>{if(disposed||!host.current)return;try{api.current=createRoom(host.current,()=>latest.current,setHover,activate);setReady(true);}catch{setFallback(true);}}).catch(()=>setFallback(true));return()=>{disposed=true;api.current?.dispose();api.current=null;};},[]);
 return <section className="room-game" aria-label="Interactive 3D library"><div className="room-canvas" ref={host}/>{!ready&&!fallback&&<p className="room-loading" role="status">Opening the study…</p>}
 <div className="room-guide"><span>THE STUDY / 01</span><span>Drag to look · Scroll to zoom · Click to explore</span><button onClick={()=>api.current?.reset()} aria-label="Reset room view">↺</button></div>
 {hover&&<div className="room-tooltip" role="status">{actions.find(a=>a.id===hover)?.tip}<span>↗</span></div>}
 <div className={fallback?'room-fallback':'room-keyboard'} aria-label="Room objects">{fallback&&<p>3D is unavailable in this browser. Explore the collection below.</p>}{actions.map(a=><button key={a.id} id={`object-${a.id}`} aria-label={a.label} aria-pressed={a.id==='record'?props.playing:undefined} onFocus={()=>{api.current?.focus(a.id);setHover(a.id);}} onBlur={()=>{api.current?.focus(null);setHover(null);}} onClick={()=>activate(a.id)}>{a.tip}</button>)}</div>
 </section>;
}
