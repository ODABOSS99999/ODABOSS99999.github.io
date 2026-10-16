import * as T from 'three';
import { renderToStaticMarkup } from 'react-dom/server';
import { createElement } from 'react';
import { ObjectArt } from './Objects2D';
import type { ObjectKind } from './Objects2D';
import { addLuxuryDetails, createTurntable } from './luxuryRoom';
import { ShelfLadder } from './ShelfLadder';
import { loadInstagramSnapshot } from './instagramMedia';
import { makeHitTargets,opaqueAt } from './roomHitTargets';
import { blendLight, createLightingTransition } from './roomLighting';
import type { LightingWeights } from './roomLighting';
type State={motion:boolean;playing:boolean;lighting:string};
const svg=(body:string,w=320,h=240)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">${body}</svg>`;
export function createPaperRoom(host:HTMLElement,state:()=>State,hover:(id:string|null)=>void,activate:(id:string)=>void,announce:(message:string)=>void=()=>{}){
 const renderer=new T.WebGLRenderer({antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,1.6));renderer.outputColorSpace=T.SRGBColorSpace;renderer.setClearColor('#252d28');host.appendChild(renderer.domElement);
 const scene=new T.Scene(),camera=new T.PerspectiveCamera(57,1,.1,60);camera.position.set(0,1.65,6.8);
 const textures:T.Texture[]=[],materials:T.Material[]=[],geometries:T.BufferGeometry[]=[],paperTints:T.MeshBasicMaterial[]=[];
 const texture=(markup:string)=>{const canvas=document.createElement('canvas');canvas.width=640;canvas.height=480;const tex=new T.CanvasTexture(canvas);tex.colorSpace=T.SRGBColorSpace;textures.push(tex);const img=new Image();img.onload=()=>{if(disposed)return;canvas.getContext('2d')!.drawImage(img,0,0,640,480);tex.userData.hitPixels=canvas.getContext('2d')!.getImageData(0,0,canvas.width,canvas.height).data;tex.needsUpdate=true;};img.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(markup)}`;return tex;};
 const material=(color:string)=>{const m=new T.MeshLambertMaterial({color});materials.push(m);return m;};
 const wood=material('#68452f'),edge=material('#30251f'),wall=material('#354b40'),paper=material('#c9ba95'),ink=material('#303e36'),rug=material('#77534d');
 function box(x:number,y:number,z:number,w:number,h:number,d:number,m:T.Material,parent:T.Object3D=scene){const geo=new T.BoxGeometry(w,h,d);geometries.push(geo);const mesh=new T.Mesh(geo,m);mesh.position.set(x,y,z);parent.add(mesh);return mesh;}
 const items=new Map<string,T.Group>(),base=new Map<string,T.Vector3>();
 function card(id:string,markup:string,x:number,y:number,z:number,w:number,h:number){const g=new T.Group();g.position.set(x,y,z);g.userData.id=id;g.userData.paper=true;const m=new T.MeshBasicMaterial({map:texture(markup),transparent:true,side:T.DoubleSide,depthWrite:false});materials.push(m);if(id!=='exit')paperTints.push(m);const geo=new T.PlaneGeometry(w,h);geometries.push(geo);const mesh=new T.Mesh(geo,m);g.add(mesh);scene.add(g);items.set(id,g);base.set(id,g.position.clone());return g;}
 function art(kind:ObjectKind){return renderToStaticMarkup(createElement(ObjectArt,{kind})).replace('<svg ','<svg xmlns="http://www.w3.org/2000/svg" ').replace('<defs>','<filter id="paint-edge"><feTurbulence type="fractalNoise" baseFrequency=".06" numOctaves="2" seed="6"/><feDisplacementMap in="SourceGraphic" scale="1.3"/></filter><style>.phone-ring{opacity:0}svg>g{filter:url(#paint-edge)}linearGradient stop{stop-color:#b4a17e}linearGradient[id$="black"] stop{stop-color:#34443e}linearGradient[id$="wood"] stop{stop-color:#8c674b}linearGradient[id$="paper"] stop{stop-color:#ded1b1}radialGradient stop{stop-color:#537d7b}</style><defs>');}
 // Full room, seen at seated eye height; no orbiting dollhouse camera.
 box(0,-.12,0,14,.2,28,wood);box(0,3,-5,14,6,.18,wall);box(-7,3,4,.18,6,18,wall);box(7,3,4,.18,6,18,wall);
 for(let x=-7;x<7;x+=.7)box(x,.001,0,.018,.008,27,edge);
 box(0,.012,1,7,.018,5,rug);for(const x of [-3.3,3.3])box(x,.025,1,.045,.012,4.6,paper);
 const luxury=addLuxuryDetails(scene,{geometries,materials});
 // Shelf bays reserve their entire interior for the featured object.
 const shelfX=-2.6,shelfZ=-4.55,shelfW=7.2;
 box(shelfX,2.65,shelfZ-.2,shelfW,5.1,.2,edge);
 for(const x of [-6.25,-3.8,-1.4,1.05])box(x,2.65,shelfZ+.15,.13,5.2,.75,wood);
 const levels=[.35,1.95,3.55,5.15];for(const y of levels){box(shelfX,y,shelfZ+.1,7.4,.14,.85,wood);box(shelfX,y+.055,shelfZ+.54,7.4,.035,.035,paper);}
 const place=(id:string,kind:ObjectKind,x:number,shelf:number)=>card(id,art(kind),x,shelf+.07+.7-.11,-3.98,1.85,1.4);
 place('photography','camera',-5.02,3.55);place('about','books',-2.6,3.55);place('favorites','frames',-.17,3.55);
 place('published','paper',-5.02,1.95);const rocket=place('engineering','rocket',-3.12,1.95);rocket.scale.x=.78;
 const device=card('device',svg('<g stroke="#34443e" stroke-width="5" stroke-linejoin="round"><path d="M92 16h138v177q0 29-31 29H92z" fill="#c7bca3"/><path d="M108 35h105v85H108z" fill="#536055"/><path d="M122 48h76v57h-76z" fill="#9da77a"/><path d="M116 157h37m-19-18v37" stroke-width="12"/><circle cx="191" cy="154" r="10" fill="#875345"/><circle cx="211" cy="177" r="10" fill="#875345"/><path d="M157 201h19m9 0h19"/></g>'),-2.13,2.61,-3.97,1.65,1.35);
 // One Engineering target contains both illustrated objects.
 const engineering=new T.Group();engineering.position.set(-2.6,2.61,-3.98);engineering.userData.id='engineering';engineering.userData.paper=true;scene.add(engineering);scene.updateMatrixWorld(true);engineering.attach(rocket);engineering.attach(device);items.set('engineering',engineering);base.set('engineering',engineering.position.clone());items.delete('device');base.delete('device');
 // Books live only in the bottom row, never behind the objects.
 const bookRow=new T.Group();bookRow.userData.id='shelf-books';scene.add(bookRow);items.set('shelf-books',bookRow);base.set('shelf-books',bookRow.position.clone());
 for(let bay=0;bay<3;bay++)for(let j=0;j<7;j++){const x=-5.93+bay*2.43+j*.28;const h=.7+(j%3)*.15;box(x,.43+h/2,-4.36,.21,h,.4,[ink,rug,paper][j%3],bookRow);box(x,.63,-4.145,.17,.025,.015,paper,bookRow);}
 // The desk is a single grouping: butler behind it, phone and lamp on top.
 const deskY=1.16;box(3.8,deskY,-2.2,3.7,.16,1.5,wood);box(3.8,.85,-2.2,3.4,.5,1.3,edge);for(const x of [2.2,5.4])for(const z of [-2.8,-1.6])box(x,.55,z,.13,1.1,.13,wood);
 const butler=svg(`<g stroke="#273b36" stroke-width="3" stroke-linejoin="round"><path d="M77 310l15-131q45-24 90 0l22 131" fill="#33433e"/><path d="M116 173l22 62 26-62" fill="#d9d4b6"/><path d="M134 185l-17-9v20l20-8 19 8v-20z" fill="#7d5148"/><path d="M96 191l-19 88 30 7m73-95 21 88-29 7" fill="#33433e"/><ellipse cx="137" cy="117" rx="37" ry="49" fill="#caa58a"/><path d="M102 122q-20-68 38-66 52 0 30 69l-8-31q-25 13-51-1z" fill="#c5cebe"/><circle cx="124" cy="117" r="4" fill="#263931"/><circle cx="150" cy="117" r="4" fill="#263931"/><path d="M129 144q10 6 19-1m-11-27-5 17h9" fill="none"/><ellipse cx="94" cy="286" rx="18" ry="12" fill="#e4dfc7"/><ellipse cx="182" cy="286" rx="18" ry="12" fill="#e4dfc7"/></g>`,280,320);
 card('butler',butler,3.85,2.03,-2.95,1.65,2.6);
 let phoneSvg=art('phone');const receiverMatch=phoneSvg.match(/<g class="phone-receiver">[\s\S]*?<\/g>/);const receiverMarkup=receiverMatch?.[0]||'';phoneSvg=phoneSvg.replace(receiverMarkup,'');
 card('contact',phoneSvg,3.05,deskY+.08+.46-.065,-1.93,1.22,.92);
 const receiver=card('receiver',svg(receiverMarkup),3.05,deskY+.08+.46-.065,-1.91,1.22,.92);
 card('letter',art('letter'),4.02,deskY+.38,-1.38,.85,.64);
 card('lamp',art('lamp'),4.95,deskY+.08+.64,-2.17,1.65,1.28);
 // Tuck the listening table against the left wall, clear of the shelf and ladder.
 const listeningCorner=new T.Group();listeningCorner.position.set(-5.7,0,-1.8);listeningCorner.scale.setScalar(.8);scene.add(listeningCorner);
 box(0,.77,0,2,.14,1.3,wood,listeningCorner);for(const x of [-.8,.8])box(x,.38,0,.12,.76,1,edge,listeningCorner);
 const turntable=createTurntable(scene,{geometries,materials});listeningCorner.add(turntable.body);turntable.body.position.set(0,1,0);items.set('record',turntable.body);base.set('record',turntable.body.position.clone());
 const notes=card('notes',svg('<g fill="#e4d3a4" font-family="Georgia" font-size="66"><text x="55" y="110">♪</text><text x="180" y="65">♫</text></g>'),0,2.02,.04,1.6,1.2);listeningCorner.add(notes);notes.visible=false;
 // Hand-painted exit sign and a rolling ladder in front of the shelf rail.
 box(3.8,3.9,-4.85,2.5,.06,.08,paper);
 const exit=card('exit',svg('<path d="M25 65l270-4 2 110-271 4z" fill="#416453" stroke="#c5cfac" stroke-width="5"/><text x="52" y="141" fill="#e2e9c0" font-family="sans-serif" font-size="58" letter-spacing="8">EXIT ↗</text>'),3.8,4.3,-4.65,1.85,1.38);
 box(-2.6,4.95,-3.5,7.5,.055,.06,paper);
 const ladderSvg=svg(`<g stroke-linecap="round"><path d="M55 12L20 370M94 12l14 358" stroke="#382e28" stroke-width="14"/><path d="M55 12L20 370M94 12l14 358" stroke="#bc9269" stroke-width="8"/>${Array.from({length:9},(_,i)=>`<path d="M${52-i*3} ${42+i*36}h${44+i*4}" stroke="#cdb486" stroke-width="8"/>`).join('')}<circle cx="23" cy="375" r="8" fill="#303c34"/><circle cx="108" cy="375" r="8" fill="#303c34"/></g>`,130,390);
 const ladder=card('ladder',ladderSvg,-6.02,2.48,-3.28,.85,4.95);let ladderRight=false,pickup=0,pickupDone=false;
 const shelfLadder=new ShelfLadder(id=>{host.removeAttribute('aria-busy');announce('Opening the selected collection.');activate(id);});

 function photoInFrame(id:string,src:string,x:number,y:number,w:number,h:number,angle:number){
  const canvas=document.createElement('canvas');canvas.width=512;canvas.height=Math.round(512*h/w);const context=canvas.getContext('2d')!;context.fillStyle='#d8cead';context.fillRect(0,0,canvas.width,canvas.height);
  const tex=new T.CanvasTexture(canvas);tex.colorSpace=T.SRGBColorSpace;textures.push(tex);
  const m=new T.MeshBasicMaterial({map:tex,side:T.DoubleSide});materials.push(m);const geometry=new T.PlaneGeometry(w,h);geometries.push(geometry);const photo=new T.Mesh(geometry,m);photo.position.set(x,y,.015);photo.rotation.z=angle;items.get(id)?.add(photo);
  const image=new Image();image.onload=()=>{if(disposed)return;const scale=Math.min(canvas.width/image.width,canvas.height/image.height),iw=image.width*scale,ih=image.height*scale;context.drawImage(image,(canvas.width-iw)/2,(canvas.height-ih)/2,iw,ih);tex.userData.hitPixels=context.getImageData(0,0,canvas.width,canvas.height).data;tex.needsUpdate=true;};image.src=src;
 }
 loadInstagramSnapshot().then(snapshot=>{if(disposed)return;const source=(id:string)=>snapshot.posts.find(p=>p.id===id)?.image.src;const first=source('18151133245558753'),second=source('18117687656072162'),life=source('18119889931954458');if(first)photoInFrame('favorites',first,-.386,-.006,.601,.7,Math.PI/45);if(second)photoInFrame('favorites',second,.4,-.177,.538,.49,-Math.PI/45);if(life)photoInFrame('about',life,.367,-.133,.272,.455,-Math.PI/22.5);}).catch(()=>{});
 const ambient=new T.HemisphereLight('#eee3c8','#3b2920',2.4);scene.add(ambient);const sun=new T.DirectionalLight('#ffe0ad',1.4);sun.position.set(-4,7,5);scene.add(sun);
 const ray=new T.Raycaster(),pointer=new T.Vector2();let focus:string|null=null,over:string|null=null,yaw=0,pitch=.055,down:{x:number;y:number;yaw:number;pitch:number}|null=null,moved=false,disposed=false;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const lighting=createLightingTransition(state().lighting);
 const palette=(day:string,lamp:string,dark:string)=>[new T.Color(day),new T.Color(lamp),new T.Color(dark)] as const;
 const ambientColors=palette('#eee3c8','#eee3c8','#ff3730'),sunColors=palette('#ffe0ad','#ffe0ad','#ff241c'),paperColors=palette('#ffffff','#ffe8c5','#e56e63'),backgroundColors=palette('#889381','#394238','#292329');
 const paperColor=new T.Color(),backgroundColor=new T.Color();
 const blendColor=(out:T.Color,colors:readonly T.Color[],weights:LightingWeights)=>out.setRGB(blendLight(weights,colors[0].r,colors[1].r,colors[2].r),blendLight(weights,colors[0].g,colors[1].g,colors[2].g),blendLight(weights,colors[0].b,colors[1].b,colors[2].b));
 const aliases=(id:string)=>id==='receiver'||id==='butler'||id==='letter'?'contact':id==='device'?'engineering':id==='vinyl'?'record':id==='shelf-books'?'about':id;
 scene.updateMatrixWorld(true);
 const hitTargets=makeHitTargets(items);
 function pick(e:PointerEvent){
  const r=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);ray.setFromCamera(pointer,camera);scene.updateMatrixWorld(true);hitTargets.updateMoving();
  for(const hit of ray.intersectObjects(hitTargets.targets,false)){
   const mesh=hit.object as T.Mesh,mat=mesh.material as T.MeshBasicMaterial;
   if(!opaqueAt(mat.map||undefined,hit.uv))continue;
   return{id:mesh.userData.id as string,x:hit.point.x};
  }
  return null;
 }
 const setHover=(id:string|null)=>{if(id===over)return;over=id;hover(over?aliases(over):null);renderer.domElement.style.cursor=over?'pointer':'grab';};
 const shelfItems=new Set(['photography','about','favorites','published','engineering','shelf-books']);
 function action(raw:string,hitX?:number){
  const id=aliases(raw),motion=state().motion&&!reduced.matches;
  if(raw==='ladder'){ladderRight=!ladderRight;shelfLadder.move(null,ladderRight?.72:-6.02,performance.now(),motion);return;}
  if(shelfItems.has(raw)){
   const x=raw==='shelf-books'?(hitX??-2.6):(base.get(raw)?.x??-2.6);let target=T.MathUtils.clamp(x-.85,-6.02,.72);
   if(Math.abs(target-shelfLadder.x)<.2)target=T.MathUtils.clamp(x+.65,-6.02,.72);
   host.setAttribute('aria-busy','true');announce('The ladder is moving to your selection.');shelfLadder.move(id,target,performance.now(),motion);return;
  }
  if(id==='contact'&&motion){if(!pickup)pickup=performance.now();return;}activate(id);
 }
 const press=(e:PointerEvent)=>{if(e.button!==0)return;down={x:e.clientX,y:e.clientY,yaw,pitch};moved=false;renderer.domElement.setPointerCapture(e.pointerId);};
 const move=(e:PointerEvent)=>{if(down){const dx=e.clientX-down.x,dy=e.clientY-down.y;if(Math.abs(dx)+Math.abs(dy)>6){moved=true;setHover(null);renderer.domElement.style.cursor='grabbing';}yaw=T.MathUtils.clamp(down.yaw-dx*.0018,-.46,.46);pitch=T.MathUtils.clamp(down.pitch+dy*.0015,-.18,.3);}else{focus=null;setHover(pick(e)?.id||null);}};
 const release=(e:PointerEvent)=>{if(down&&!moved){const hit=pick(e);if(hit)action(hit.id,hit.x);}down=null;};
 const leave=()=>{setHover(null);};const cancel=()=>{down=null;};
 renderer.domElement.addEventListener('pointerdown',press);renderer.domElement.addEventListener('pointermove',move);renderer.domElement.addEventListener('pointerup',release);renderer.domElement.addEventListener('pointerleave',leave);renderer.domElement.addEventListener('pointercancel',cancel);
 const resize=()=>{const w=host.clientWidth,h=host.clientHeight;renderer.setSize(w,h);camera.aspect=w/h;camera.fov=w<700?80:57;camera.position.z=w<700?12:6.8;listeningCorner.position.x=w<700?-4.7:-5.7;listeningCorner.scale.setScalar(w<700?.65:.8);camera.updateProjectionMatrix();};const observer=new ResizeObserver(resize);observer.observe(host);resize();
 renderer.setAnimationLoop(time=>{if(disposed||document.hidden)return;const s=state(),motion=s.motion&&!reduced.matches,t=time/1000;camera.lookAt(camera.position.x+Math.sin(yaw)*10,camera.position.y+Math.sin(pitch)*10,camera.position.z-Math.cos(yaw)*10);
  const active=over||focus;items.forEach((g,id)=>{g.position.copy(base.get(id)!);g.rotation.set(0,0,0);if(motion&&active===id&&!['ladder','receiver','contact','record','shelf-books'].includes(id)){const held=Math.floor(t*10)/10;g.rotation.z=Math.sin(held*7)*.025;g.position.y+=.035;if(id==='about')g.rotation.z=Math.sin(held*5)*.045;if(id==='published')g.rotation.x=Math.sin(held*8)*.07;else g.rotation.x=0;if(id==='engineering')g.position.y+=Math.max(0,Math.sin(held*5))*.1;}});
  shelfLadder.update(performance.now(),motion);ladder.position.x=shelfLadder.x;host.dataset.ladderState=shelfLadder.moving?'moving':'idle';host.dataset.ladderX=shelfLadder.x.toFixed(3);
  if(motion)exit.rotation.z=Math.sin(Math.floor(t*8)/8)*.025;
  turntable.update(time,s.playing,motion);
  notes.visible=s.playing;notes.position.y=2.02+(motion?(t%2)*.15:0);
  if(pickup){const p=Math.min((performance.now()-pickup)/650,1);receiver.position.y+=p*.4;receiver.rotation.z=p*.28;if(p===1&&!pickupDone){pickupDone=true;activate('contact');}}
  else if(motion&&(active==='contact'||active==='butler'||active==='receiver'))receiver.rotation.z=Math.sin(t*22)*.025;
  const light=lighting.update(s.lighting,time,motion);blendColor(ambient.color,ambientColors,light);blendColor(sun.color,sunColors,light);ambient.intensity=blendLight(light,2.8,1.8,.7);sun.intensity=blendLight(light,1.6,1,.3);
  // Tint only the illustrated cards; actual photographs retain their source colors.
  blendColor(paperColor,paperColors,light);paperTints.forEach(material=>material.color.copy(paperColor));renderer.setClearColor(blendColor(backgroundColor,backgroundColors,light));luxury.update(light);renderer.render(scene,camera);
 });
 return{activate:action,focus:(id:string|null)=>{focus=id;if(id){over=null;hover(id);}},look:(delta:number)=>{yaw=T.MathUtils.clamp(yaw+delta,-.46,.46);},reset:()=>{yaw=0;pitch=.055;},dispose:()=>{disposed=true;renderer.setAnimationLoop(null);observer.disconnect();renderer.domElement.removeEventListener('pointerdown',press);renderer.domElement.removeEventListener('pointermove',move);renderer.domElement.removeEventListener('pointerup',release);renderer.domElement.removeEventListener('pointerleave',leave);renderer.domElement.removeEventListener('pointercancel',cancel);textures.forEach(t=>t.dispose());materials.forEach(m=>m.dispose());geometries.forEach(g=>g.dispose());renderer.dispose();renderer.domElement.remove();}};
}
