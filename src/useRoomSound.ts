import { useEffect, useRef, useState } from 'react';
import { RoomAudio } from './audio';

/** Default-on sound retries on a real gesture if the browser blocks audible autoplay. */
export function useRoomSound(muted:boolean,volume:number,setMuted:(muted:boolean)=>void){
 const [playing,setPlaying]=useState(false),[error,setError]=useState('');
 const audio=useRef<RoomAudio|null>(null),generation=useRef(0),intent=useRef(!muted);
 const latest=useRef({muted,volume,playing,setMuted});latest.current={muted,volume,playing,setMuted};
 const start=useRef<()=>Promise<void>>(async()=>{});
 start.current=async()=>{
  if(latest.current.muted||document.hidden)return;
  intent.current=true;const current=++generation.current;
  try{
   const instance=audio.current??(audio.current=new RoomAudio());await instance.start(latest.current.volume);
   if(current!==generation.current)return;
   if(document.hidden||!intent.current){await instance.pause();return;}
   setPlaying(true);setError('');
  }catch(e){
   if(current!==generation.current)return;
   setPlaying(false);
   if(!(e instanceof DOMException&&e.name==='NotAllowedError'))setError('Room audio is unavailable in this browser.');
  }
 };
 useEffect(()=>{
  const gesture=(e:Event)=>{if(e.target instanceof Element&&e.target.closest('[data-audio-toggle]'))return;if(!latest.current.muted&&!latest.current.playing)void start.current();};
  const visibility=()=>{if(document.hidden){generation.current++;setPlaying(false);void audio.current?.pause();}else if(intent.current&&!latest.current.muted)void start.current();};
  document.addEventListener('pointerdown',gesture);document.addEventListener('keydown',gesture);document.addEventListener('visibilitychange',visibility);
  return()=>{generation.current++;intent.current=false;document.removeEventListener('pointerdown',gesture);document.removeEventListener('keydown',gesture);document.removeEventListener('visibilitychange',visibility);void audio.current?.dispose();audio.current=null;};
 },[]);
 useEffect(()=>{intent.current=!muted;if(muted){generation.current++;setPlaying(false);void audio.current?.pause();}else void start.current();},[muted]);
 useEffect(()=>{audio.current?.volume(muted?0:volume);},[volume,muted]);
 function toggle(){const next=!latest.current.muted;setError('');if(next){intent.current=false;generation.current++;setPlaying(false);}latest.current.setMuted(next);}
 function effect(kind:'ring'|'pickup'|'whoosh'){if(!latest.current.muted&&!document.hidden)audio.current?.effect(kind);}
 return{playing,error,toggle,effect};
}
