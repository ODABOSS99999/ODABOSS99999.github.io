import { useEffect, useRef, useState } from 'react';
import type { CSSProperties, PointerEvent } from 'react';
import { destinations } from './content';
import type { SectionId } from './content';
import { ObjectArt } from './Objects2D';
import type { ObjectKind } from './Objects2D';
const kinds: ObjectKind[] = ['camera','books','frames','paper','rocket','phone'];
type Props = { navigate:(id:SectionId)=>void; toggleLamp:()=>void; toggleAudio:()=>void; openIndex:()=>void; playing:boolean; motion:boolean; lighting?:string };
export default function Scene2D({navigate,toggleLamp,toggleAudio,openIndex,playing,motion}:Props) {
  const [ladderRight,setLadderRight]=useState(false),[pickingUp,setPickingUp]=useState(false);
  const [view,setView]=useState({x:0,y:0});
  const timer=useRef<ReturnType<typeof setTimeout>|null>(null);
  const drag=useRef<{x:number;y:number;vx:number;vy:number}|null>(null);
  const suppressClick=useRef(false);
  useEffect(()=>()=>{if(timer.current)clearTimeout(timer.current);},[]);
  function open(id:SectionId){
    if(pickingUp||suppressClick.current)return;
    if(id!=='contact'||!motion||matchMedia('(prefers-reduced-motion: reduce)').matches){navigate(id);return;}
    setPickingUp(true);timer.current=setTimeout(()=>navigate(id),650);
  }
  function move(e:PointerEvent<HTMLDivElement>){
    if(!drag.current)return;
    const dx=e.clientX-drag.current.x,dy=e.clientY-drag.current.y;
    if(Math.abs(dx)+Math.abs(dy)>5)suppressClick.current=true;
    setView({x:Math.max(-9,Math.min(9,drag.current.vx-dy*.045)),y:Math.max(-15,Math.min(15,drag.current.vy+dx*.065))});
  }
  return <div className="scene-wrap illustrated-world">
    <svg width="0" height="0" className="texture-defs" aria-hidden="true"><defs><filter id="paper-edges" x="-5%" y="-5%" width="110%" height="110%"><feTurbulence type="fractalNoise" baseFrequency=".045" numOctaves="3" seed="8" result="grain"/><feDisplacementMap in="SourceGraphic" in2="grain" scale="1.7" xChannelSelector="R" yChannelSelector="G"/></filter></defs></svg>
    <div className="view-toolbar"><div><button aria-label="Look left" onClick={()=>setView(v=>({...v,y:Math.max(-15,v.y-5)}))}>←</button><button aria-label="Reset room view" onClick={()=>setView({x:0,y:0})}>Reset view</button><button aria-label="Look right" onClick={()=>setView(v=>({...v,y:Math.min(15,v.y+5)}))}>→</button></div></div>
    <div className="perspective-viewport" onPointerDown={e=>{if(e.pointerType!=='mouse'||e.button!==0||!motion||matchMedia('(prefers-reduced-motion: reduce)').matches)return;suppressClick.current=false;drag.current={x:e.clientX,y:e.clientY,vx:view.x,vy:view.y};}} onPointerMove={move} onPointerUp={()=>{drag.current=null;}} onPointerLeave={()=>{drag.current=null;}} onClickCapture={e=>{if(suppressClick.current){e.preventDefault();e.stopPropagation();suppressClick.current=false;}}}>
      <div className="scene-stage" style={{'--view-x':`${view.x}deg`,'--view-y':`${view.y}deg`} as CSSProperties}>
        <div className="room" aria-label="Explore the illustrated library">
          <div className="room-back"/><div className="window-light"/><div className="cabinet-lines"/>
          <div className="room-side side-left"/><div className="room-side side-right"/><div className="room-floor"/>
          
          <div className="shelf shelf-top"/><div className="shelf shelf-bottom"/><div className="desk"/>
          <div className="room-objects">{destinations.map((d,i)=><button id={`object-${d.id}`} key={d.id} className={`scene-object object-${d.id}${d.id==='contact'&&pickingUp?' picking-up':''}`} onClick={()=>open(d.id)} aria-label={d.title} aria-busy={d.id==='contact'&&pickingUp} style={{'--object-index':i} as CSSProperties}>
            <span className="art-holder"><ObjectArt kind={kinds[i]}/></span><span className="object-label"><span>{d.number}</span> {d.title}<span className="label-arrow">↗</span></span>{d.id==='photography'&&<span className="camera-flash" aria-hidden="true"/>}
          </button>)}</div>
          <div className="lamp-pool"/>
          <button className="scene-object object-lamp" onClick={toggleLamp} aria-label="Lamp switch: toggle Lamplight and Darkroom"><span className="art-holder"><ObjectArt kind="lamp"/></span><span className="object-label">Switch the light<span className="label-arrow">↗</span></span></button>
          <button className="scene-object object-record" onClick={toggleAudio} aria-label={playing?'Mute room ambience':'Play room ambience'} aria-pressed={playing}><span className="art-holder"><ObjectArt kind="record" playing={playing}/></span><span className={`sound-notes ${playing?'is-playing':''}`} aria-hidden="true"><i>♪</i><i>♫</i><i>♪</i></span><span className="object-label">{playing?'Sound on · tap to mute':'A little atmosphere'}<span className="label-arrow">{playing?'Ⅱ':'▷'}</span></span></button>
          <div className="dust-motes" aria-hidden="true">{Array.from({length:8},(_,i)=><i key={i} style={{'--i':i} as CSSProperties}/>)}</div>
          <div className="cabinet-foot left"/><div className="cabinet-foot right"/>
        </div>
        <div className="ladder-track"><button className={`library-ladder ${ladderRight?'at-right':''}`} aria-label="Roll the library ladder" aria-pressed={ladderRight} onClick={()=>setLadderRight(v=>!v)}><svg viewBox="0 0 100 380" aria-hidden="true"><g className="ladder-drawing" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M37 14L9 357M78 14l13 343" stroke="#352b27" strokeWidth="13"/><path d="M37 14L9 357M78 14l13 343" stroke="#bc9169" strokeWidth="7"/>{Array.from({length:9},(_,i)=><path key={i} d={`M${35-i*2.7} ${42+i*36}l${44+i*4} 1`} stroke="#d0ae7c" strokeWidth="8"/>)}<path d="M37 15Q35 2 47 6M78 15Q77 2 88 6" stroke="#b0b6a0" strokeWidth="6"/><circle cx="13" cy="365" r="8" fill="#34372f" stroke="#ceb18a" strokeWidth="3"/><circle cx="88" cy="365" r="8" fill="#34372f" stroke="#ceb18a" strokeWidth="3"/></g></svg><span className="ladder-hint">Give me a push ↔</span></button></div>
        <button className="room-exit exit-sign" onClick={openIndex} aria-label="Exit the room: open the site index"><span>EXIT</span><span aria-hidden="true">↗</span></button>
      </div>
    </div>

    <span className="sr-only" role="status">{pickingUp?'Picking up the receiver. Opening contact.':''}</span>
  </div>;
}
