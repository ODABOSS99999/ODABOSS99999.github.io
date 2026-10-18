import {useState} from 'react';
import archive from '../public/instagram/export-albums.json';

type Slide={src:string;width:number;height:number};
const albums=archive.albums as Record<string,Slide[]>;

export default function ExportAlbum({permalink}:{permalink?:string}){
 const slides=permalink?albums[permalink]:undefined;
 const [open,setOpen]=useState(false),[index,setIndex]=useState(0);
 if(!slides||slides.length<2)return null;
 const slide=slides[index];
 const move=(delta:number)=>setIndex(current=>(current+delta+slides.length)%slides.length);
 return <div className="export-album">
  <button className="album-toggle" aria-expanded={open} onClick={()=>setOpen(value=>!value)}>{open?'Close album':`Explore ${slides.length} photographs`}</button>
  {open&&<div className="album-explorer" role="region" aria-label="Post photographs" onKeyDown={event=>{if(event.key==='ArrowRight'||event.key==='ArrowLeft'){event.preventDefault();event.stopPropagation();move(event.key==='ArrowRight'?1:-1);}}}>
   <img key={slide.src} src={slide.src} width={slide.width} height={slide.height} alt={`Photograph ${index+1} of ${slides.length} from this Instagram post`} loading="lazy"/>
   <div className="album-controls"><button aria-label="Previous album photograph" onClick={()=>move(-1)}>←</button><span role="status">{index+1} / {slides.length}</span><button aria-label="Next album photograph" onClick={()=>move(1)}>→</button></div>
  </div>}
 </div>;
}
