import {loadStats} from './InstagramStats';
import {classifyPartnership,cumulativePosts} from './instagramLedger';
import * as T from 'three';
import {EffectComposer} from 'three/addons/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/addons/postprocessing/RenderPass.js';
import {OutlinePass} from 'three/addons/postprocessing/OutlinePass.js';
import {OutputPass} from 'three/addons/postprocessing/OutputPass.js';
import {createRoomObjects} from './roomObjects3D';
import { addLuxuryDetails, createTurntable } from './luxuryRoom';
import { ShelfLadder } from './ShelfLadder';
import { loadInstagramSnapshot } from './instagramMedia';
import { pickRoomItem } from './roomHitTargets';
import { blendLight, createLightingTransition } from './roomLighting';
import type { LightingWeights } from './roomLighting';
type State={motion:boolean;playing:boolean;lighting:string};
const svg=(body:string,w=320,h=240)=>`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}">${body}</svg>`;
export function createPaperRoom(host:HTMLElement,state:()=>State,hover:(id:string|null)=>void,activate:(id:string)=>void,announce:(message:string)=>void=()=>{}){
 const renderer=new T.WebGLRenderer({antialias:true});renderer.setPixelRatio(Math.min(devicePixelRatio,2.5));renderer.outputColorSpace=T.SRGBColorSpace;renderer.setClearColor('#252d28');host.appendChild(renderer.domElement);
 const scene=new T.Scene(),camera=new T.PerspectiveCamera(57,1,.1,60);camera.position.set(0,1.65,6.8);
 const textures:T.Texture[]=[],materials:T.Material[]=[],geometries:T.BufferGeometry[]=[],paperTints:T.MeshBasicMaterial[]=[];
 const texture=(markup:string)=>{const canvas=document.createElement('canvas');canvas.width=1280;canvas.height=960;const tex=new T.CanvasTexture(canvas);tex.colorSpace=T.SRGBColorSpace;tex.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());textures.push(tex);const img=new Image();img.onload=()=>{if(disposed)return;canvas.getContext('2d')!.drawImage(img,0,0,1280,960);tex.userData.hitPixels=canvas.getContext('2d')!.getImageData(0,0,canvas.width,canvas.height).data;tex.needsUpdate=true;};img.src=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(markup)}`;return tex;};
 const material=(color:string)=>{const m=new T.MeshLambertMaterial({color});materials.push(m);return m;};
 const wood=material('#68452f'),edge=material('#30251f'),wall=material('#354b40'),paper=material('#c9ba95'),ink=material('#303e36'),rug=material('#77534d');
 function box(x:number,y:number,z:number,w:number,h:number,d:number,m:T.Material,parent:T.Object3D=scene){const geo=new T.BoxGeometry(w,h,d);geometries.push(geo);const mesh=new T.Mesh(geo,m);mesh.position.set(x,y,z);parent.add(mesh);return mesh;}
 const items=new Map<string,T.Group>(),base=new Map<string,T.Vector3>();
 function card(id:string,markup:string,x:number,y:number,z:number,w:number,h:number){const g=new T.Group();g.position.set(x,y,z);g.userData.id=id;g.userData.paper=true;const m=new T.MeshBasicMaterial({map:texture(markup),transparent:true,side:T.DoubleSide,depthWrite:false});materials.push(m);paperTints.push(m);const geo=new T.PlaneGeometry(w,h);geometries.push(geo);const mesh=new T.Mesh(geo,m);g.add(mesh);scene.add(g);items.set(id,g);base.set(id,g.position.clone());return g;}
 // Full room, seen at seated eye height; no orbiting dollhouse camera.
 box(0,-.12,0,14,.2,28,wood);box(0,3,-5,14,6,.18,wall);box(-7,3,4,.18,6,18,wall);box(7,3,4,.18,6,18,wall);
 for(let x=-7;x<7;x+=.7)box(x,.001,0,.018,.008,27,edge);
 box(0,.012,4,7,.018,11,rug);for(const x of [-3.3,3.3])box(x,.025,4,.045,.012,10.6,paper);
 const luxury=addLuxuryDetails(scene,{geometries,materials});
 // A little Minecraft landscape, mounted flush to the right wall.
 const painting=new T.Group();painting.name='Minecraft painting';painting.position.set(6.84,3.65,-2.6);painting.rotation.y=-Math.PI/2;scene.add(painting);
 const pixelCanvas=document.createElement('canvas');pixelCanvas.width=32;pixelCanvas.height=32;
 const pixels=pixelCanvas.getContext('2d')!;
 pixels.fillStyle='#8faeb5';pixels.fillRect(0,0,32,32);
 pixels.fillStyle='#e8d8a0';pixels.fillRect(5,4,6,6);
 pixels.fillStyle='#d8dfce';pixels.fillRect(19,5,9,2);pixels.fillRect(23,4,5,1);
 pixels.fillStyle='#536d62';pixels.fillRect(0,15,8,17);pixels.fillRect(8,19,9,13);pixels.fillRect(24,13,8,19);
 pixels.fillStyle='#79904e';pixels.fillRect(0,24,32,8);
 pixels.fillStyle='#65503b';pixels.fillRect(0,27,32,5);
 for(let row=27;row<32;row++)for(let col=0;col<32;col++){pixels.fillStyle=['#796044','#514334','#92754d'][(col*7+row*11)%3];pixels.fillRect(col,row,1,1);}
 pixels.fillStyle='#5d963e';pixels.fillRect(16,14,8,8);pixels.fillRect(17,22,6,5);pixels.fillRect(16,26,3,3);pixels.fillRect(21,26,3,3);
 pixels.fillStyle='#80ad50';pixels.fillRect(17,14,2,2);pixels.fillRect(22,18,2,2);pixels.fillRect(19,23,2,3);
 pixels.fillStyle='#263328';pixels.fillRect(17,16,2,2);pixels.fillRect(21,16,2,2);pixels.fillRect(19,18,2,1);pixels.fillRect(18,19,4,2);pixels.fillRect(18,21,1,1);pixels.fillRect(21,21,1,1);
 const pixelTexture=new T.CanvasTexture(pixelCanvas);pixelTexture.colorSpace=T.SRGBColorSpace;pixelTexture.magFilter=T.NearestFilter;pixelTexture.minFilter=T.NearestFilter;textures.push(pixelTexture);
 const paintingMaterial=new T.MeshLambertMaterial({map:pixelTexture});materials.push(paintingMaterial);
 box(0,0,0,1.9,1.9,.10,edge,painting);
 box(0,0,.061,1.68,1.68,.025,paintingMaterial,painting);
 for(const x of [-.91,.91])box(x,0,.07,.10,1.92,.12,wood,painting);
 for(const y of [-.91,.91])box(0,y,.07,1.92,.10,.12,wood,painting);
 // Shelf bays reserve their entire interior for the featured object.
 const shelfX=-2.6,shelfZ=-4.55,shelfW=7.2;
 box(shelfX,2.65,shelfZ-.2,shelfW,5.1,.2,edge);
 for(const x of [-6.25,-3.8,-1.4,1.05])box(x,2.65,shelfZ+.15,.13,5.2,.75,wood);
 const levels=[.35,1.95,3.55,5.15];for(const y of levels){box(shelfX,y,shelfZ+.1,7.4,.14,.85,wood);box(shelfX,y+.055,shelfZ+.54,7.4,.035,.035,paper);}
 const modeled=createRoomObjects(scene,{geometries,materials,textures});
 modeled.forEach((group,id)=>{items.set(id,group);base.set(id,group.position.clone());});
 const receiver=modeled.get('receiver')!;
 // A framed social ledger fills the empty middle-right shelf bay.
 const board=card('stats',svg('<rect x="8" y="8" width="304" height="224" fill="#ded3b5" stroke="#8b6945" stroke-width="12"/><text x="27" y="60" fill="#34443e" font-size="20">THE SOCIAL LEDGER</text><text x="27" y="110" fill="#34443e" font-size="15">Statistics unavailable</text>'),-.17,4.40,-4.05,2.08,1.42);
 const boardMaterial=(board.children[0] as T.Mesh).material as T.MeshBasicMaterial;
 box(0,0,-.07,2.1,1.44,.13,wood,board);for(const x of [-1.04,1.04])box(x,0,.02,.055,1.47,.14,paper,board);for(const y of [-.72,.72])box(0,y,.02,2.12,.055,.14,paper,board);
 const updateBoard=async()=>{try{const stats=await loadStats();if(disposed)return;const points=stats.archiveCurrent===true?cumulativePosts(stats.trackedPosts):[],max=Math.max(1,...points.map(p=>p.count));const start=Date.parse(points[0]?.date||stats.checkedAt),span=Math.max(1,Date.parse(points.at(-1)?.date||stats.checkedAt)-start);const bars=`<path d="${points.map((p,i)=>`${i?'L':'M'}${28+(Date.parse(p.date)-start)/span*264},${188-p.count/max*65}`).join(' ')}" fill="none" stroke="#8b6945" stroke-width="3"/>`;const partnerships=stats.archiveCurrent===true?stats.trackedPosts.filter(p=>classifyPartnership(p).kind==='partnership').length:null;const old=boardMaterial.map;boardMaterial.map=texture(svg(`<rect x="8" y="8" width="304" height="224" fill="#ded3b5" stroke="#8b6945" stroke-width="12"/><text x="27" y="42" fill="#34443e" font-family="serif" font-size="17">THE SOCIAL LEDGER</text><text x="27" y="77" fill="#34443e" font-size="27">${stats.followers.toLocaleString()} followers</text><text x="27" y="102" fill="#34443e" font-size="14">${stats.posts} posts Â· ${partnerships} partnership posts*</text>${bars}<text x="27" y="213" fill="#34443e" font-size="12">Dated post archive Â· click to explore</text>`));if(old){old.dispose();const i=textures.indexOf(old);if(i>=0)textures.splice(i,1);}boardMaterial.needsUpdate=true;}catch{if(disposed)return;const old=boardMaterial.map;boardMaterial.map=texture(svg('<rect x="8" y="8" width="304" height="224" fill="#ded3b5" stroke="#8b6945" stroke-width="12"/><text x="27" y="60" fill="#34443e" font-size="20">THE SOCIAL LEDGER</text><text x="27" y="110" fill="#34443e" font-size="15">Current statistics unavailable</text>'));if(old){old.dispose();const i=textures.indexOf(old);if(i>=0)textures.splice(i,1);}boardMaterial.needsUpdate=true;}};
 const refreshBoard=()=>{if(!document.hidden)void updateBoard();};window.addEventListener('focus',refreshBoard);document.addEventListener('visibilitychange',refreshBoard);queueMicrotask(refreshBoard);const statsTimer=setInterval(refreshBoard,60000);
 // Books live only in the bottom row, never behind the objects.
 const bookRow=new T.Group();bookRow.userData.id='shelf-books';scene.add(bookRow);items.set('shelf-books',bookRow);base.set('shelf-books',bookRow.position.clone());
 for(let bay=1;bay<3;bay++)for(let j=0;j<7;j++){const x=-5.93+bay*2.43+j*.28;const h=.7+(j%3)*.15;box(x,.43+h/2,-4.36,.21,h,.4,[ink,rug,paper][j%3],bookRow);box(x,.63,-4.145,.17,.025,.015,paper,bookRow);}
 // The desk is a single grouping: butler behind it, phone and lamp on top.
 const deskY=1.16;box(3.8,deskY,-2.2,3.7,.16,1.5,wood);box(3.8,.85,-2.2,3.4,.5,1.3,edge);for(const x of [2.2,5.4])for(const z of [-2.8,-1.6])box(x,.55,z,.13,1.1,.13,wood);
 // A dedicated record player bay, bottom left.
 const turntable=createTurntable(scene,{geometries,materials});turntable.body.position.set(-5.02,.64,-4.03);turntable.body.scale.setScalar(.9);items.set('record',turntable.body);base.set('record',turntable.body.position.clone());
 const notes=card('notes',svg('<text x="90" y="140" fill="#e4d3a4" font-size="90">&#9834;</text>'),-5.02,1.2,-3.8,1.2,.8);notes.visible=false;
 // Visible knees, shoes and chair arms make this a seated first-person view.
 const seated=new T.Group();scene.add(seated);
 const trousers=material('#41484a'),shoes=material('#302a23'),chairFabric=material('#41574a');
 function roundedPart(x:number,y:number,z:number,w:number,h:number,d:number,m:T.Material){const geo=new T.SphereGeometry(1,20,14);geometries.push(geo);const mesh=new T.Mesh(geo,m);mesh.position.set(x,y,z);mesh.scale.set(w/2,h/2,d/2);seated.add(mesh);return mesh;}
 for(const side of [-1,1]){
  // Rounded knees lead into sloping shins and separate leather shoes.
  roundedPart(side*.29,.71,-.72,.35,.32,1.8,trousers);
  roundedPart(side*.29,.73,-1.48,.34,.34,.46,trousers);
  const shin=roundedPart(side*.29,.48,-1.99,.27,.29,1.04,trousers);shin.rotation.x=-.43;
  const shoe=roundedPart(side*.3,.15,-2.62,.32,.24,.65,shoes);shoe.rotation.y=side*-.1;
  roundedPart(side*.3,.058,-2.65,.33,.065,.66,wood);
  // The upholstered arms frame the body at the edges of the view.
  roundedPart(side*.93,.9,-1.48,.25,.23,1.05,chairFabric);
  box(side*.93,.48,-1.72,.09,.77,.09,wood,seated);
 }
 // A rolling ladder in front of the shelf rail.
 box(-2.6,4.95,-3.5,7.5,.055,.06,paper);
 const ladder=modeled.get('ladder')!;let ladderRight=false,pickup=0;
 const shelfLadder=new ShelfLadder(id=>{host.removeAttribute('aria-busy');announce('Opening the selected collection.');activate(id);});

 function photoInFrame(id:string,src:string,x:number,_y:number,w:number,h:number,_angle:number){
  const canvas=document.createElement('canvas');canvas.width=1024;canvas.height=Math.round(1024*h/w);const context=canvas.getContext('2d')!;context.fillStyle='#30251f';context.fillRect(0,0,canvas.width,canvas.height);
  const tex=new T.CanvasTexture(canvas);tex.colorSpace=T.SRGBColorSpace;tex.anisotropy=Math.min(8,renderer.capabilities.getMaxAnisotropy());textures.push(tex);
  const m=new T.MeshBasicMaterial({map:tex,side:T.DoubleSide});materials.push(m);const geometry=new T.PlaneGeometry(w,h);geometries.push(geometry);const photo=new T.Mesh(geometry,m);photo.position.set(0,0,.097);const mounts=items.get(id)?.userData.photoMounts as T.Group[]|undefined;const mount=mounts?.[id==='favorites'&&x>0?1:0];(mount??items.get(id))?.add(photo);
  const image=new Image();image.onload=()=>{if(disposed)return;const scale=Math.max(canvas.width/image.width,canvas.height/image.height),iw=image.width*scale,ih=image.height*scale;context.drawImage(image,(canvas.width-iw)/2,(canvas.height-ih)/2,iw,ih);tex.userData.hitPixels=context.getImageData(0,0,canvas.width,canvas.height).data;tex.needsUpdate=true;};image.src=src;
 }
 loadInstagramSnapshot().then(snapshot=>{if(disposed)return;const source=(id:string)=>snapshot.posts.find(p=>p.id===id)?.image.src;const first=source('18151133245558753'),second=source('18117687656072162');if(first)photoInFrame('favorites',first,-.386,-.006,.601,.7,Math.PI/45);if(second)photoInFrame('favorites',second,.4,-.177,.538,.49,-Math.PI/45);}).catch(()=>{});
 photoInFrame('about','/instagram/profile.jpg',0,-.05,.93,.93,-Math.PI/45);
 const ambient=new T.HemisphereLight('#eee3c8','#3b2920',2.4);scene.add(ambient);const sun=new T.DirectionalLight('#ffe0ad',1.4);sun.position.set(-4,7,5);scene.add(sun);
 const composer=new EffectComposer(renderer);composer.renderTarget1.samples=4;composer.renderTarget2.samples=4;composer.addPass(new RenderPass(scene,camera));
 const outline=new OutlinePass(new T.Vector2(host.clientWidth,host.clientHeight),scene,camera);outline.edgeStrength=4;outline.edgeThickness=1.5;outline.edgeGlow=.3;outline.visibleEdgeColor.set('#ffdc98');outline.hiddenEdgeColor.set('#000000');composer.addPass(outline);composer.addPass(new OutputPass());
 const bulb=modeled.get('lamp')?.userData.bulb as T.MeshStandardMaterial|undefined;
 const lampLight=new T.PointLight('#ffd89c',2,7,2);lampLight.position.set(6.05,2.4,-1.4);scene.add(lampLight);
 const ray=new T.Raycaster(),pointer=new T.Vector2();let focus:string|null=null,over:string|null=null,yaw=0,pitch=-.095,down:{x:number;y:number;yaw:number;pitch:number}|null=null,moved=false,disposed=false;
 const reduced=matchMedia('(prefers-reduced-motion: reduce)');
 const lighting=createLightingTransition(state().lighting);
 const palette=(day:string,lamp:string,dark:string)=>[new T.Color(day),new T.Color(lamp),new T.Color(dark)] as const;
 const ambientColors=palette('#eee3c8','#eee3c8','#ff3730'),sunColors=palette('#ffe0ad','#ffe0ad','#ff241c'),paperColors=palette('#ffffff','#ffe8c5','#e56e63'),backgroundColors=palette('#889381','#394238','#292329');
 const paperColor=new T.Color(),backgroundColor=new T.Color();
 const blendColor=(out:T.Color,colors:readonly T.Color[],weights:LightingWeights)=>out.setRGB(blendLight(weights,colors[0].r,colors[1].r,colors[2].r),blendLight(weights,colors[0].g,colors[1].g,colors[2].g),blendLight(weights,colors[0].b,colors[1].b,colors[2].b));
 const contactTargets=new Map([...items].filter(([id])=>id!=='contact'&&id!=='receiver'));
 const aliases=(id:string)=>id==='butler'?'contact':id==='device'?'engineering':id==='vinyl'?'record':id==='shelf-books'?'about':id;
 scene.updateMatrixWorld(true);
 let lastPointer:{clientX:number;clientY:number}|null=null;
 function pick(e:{clientX:number;clientY:number}){
  const r=renderer.domElement.getBoundingClientRect();
  if(!r.width||!r.height||e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)return null;
  pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);
  camera.updateMatrixWorld();scene.updateMatrixWorld(true);ray.setFromCamera(pointer,camera);
  return pickRoomItem(ray,scene,contactTargets);
 }
 const setHover=(id:string|null)=>{if(id===over)return;over=id;hover(over?aliases(over):null);renderer.domElement.style.cursor=over?'pointer':'grab';};
 const shelfItems=new Set(['photography','about','favorites','published','engineering','stats','shelf-books']);
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
 const move=(e:PointerEvent)=>{lastPointer=e.pointerType==='touch'?null:{clientX:e.clientX,clientY:e.clientY};if(down){const dx=e.clientX-down.x,dy=e.clientY-down.y;if(Math.abs(dx)+Math.abs(dy)>6){moved=true;setHover(null);renderer.domElement.style.cursor='grabbing';}yaw=T.MathUtils.clamp(down.yaw-dx*.0018,-.46,.46);pitch=T.MathUtils.clamp(down.pitch+dy*.0015,-.18,.3);}else{focus=null;setHover(pick(e)?.id||null);}};
 const release=(e:PointerEvent)=>{if(down&&!moved){const hit=pick(e);if(hit)action(hit.id,hit.x);}down=null;};
 const leave=()=>{lastPointer=null;focus=null;setHover(null);};const cancel=()=>{down=null;leave();};
 renderer.domElement.addEventListener('pointerdown',press);renderer.domElement.addEventListener('pointermove',move);renderer.domElement.addEventListener('pointerup',release);renderer.domElement.addEventListener('pointerleave',leave);renderer.domElement.addEventListener('pointercancel',cancel);
 const resize=()=>{const w=host.clientWidth,h=host.clientHeight;renderer.setPixelRatio(Math.min(devicePixelRatio,2.5));renderer.setSize(w,h);composer.setPixelRatio(renderer.getPixelRatio());composer.setSize(w,h);camera.aspect=w/h;const portrait=w/h<.85;camera.fov=portrait?62:57;camera.position.z=portrait?Math.max(7.8,9.5/(2*Math.tan(T.MathUtils.degToRad(31))*(w/h))-5):6.8;seated.position.z=camera.position.z;seated.position.y=.12;seated.scale.x=w/h<.85?.65:1;camera.updateProjectionMatrix();};const observer=new ResizeObserver(resize);observer.observe(host);resize();
 renderer.setAnimationLoop(time=>{if(disposed||document.hidden)return;const s=state(),motion=s.motion&&!reduced.matches,t=time/1000;camera.lookAt(camera.position.x+Math.sin(yaw)*10,camera.position.y+Math.sin(pitch+(host.clientWidth/host.clientHeight<.85?.10:0))*10,camera.position.z-Math.cos(yaw)*10);
  if(lastPointer&&!down){focus=null;setHover(pick(lastPointer)?.id||null);}
  const active=over||focus;const selected=active?items.get(active):undefined;outline.selectedObjects=selected?[selected]:[];host.dataset.highlighted=active||'';
  items.forEach((g,id)=>{g.position.copy(base.get(id)!);g.rotation.set(0,0,0);});
  shelfLadder.update(performance.now(),motion);ladder.position.x=shelfLadder.x;host.dataset.ladderState=shelfLadder.moving?'moving':'idle';host.dataset.ladderX=shelfLadder.x.toFixed(3);
  turntable.update(time,s.playing,motion);
  modeled.get('engineering')?.userData.updateScreen?.(time,motion);
  notes.visible=s.playing;notes.position.y=1.2+(motion?(t%2)*.15:0);
  if(pickup){const p=Math.min((performance.now()-pickup)/650,1);receiver.position.y+=p*.4;receiver.rotation.z=p*.28;if(p===1){pickup=0;activate('contact');}}
  else if(motion&&(active==='contact'||active==='butler'||active==='receiver'))receiver.rotation.z=Math.sin(t*22)*.025;
  const light=lighting.update(s.lighting,time,motion);blendColor(ambient.color,ambientColors,light);blendColor(sun.color,sunColors,light);ambient.intensity=blendLight(light,2.8,1.8,.7);sun.intensity=blendLight(light,1.6,1,.3);
  // Tint only the illustrated cards; actual photographs retain their source colors.
  blendColor(paperColor,paperColors,light);paperTints.forEach(material=>material.color.copy(paperColor));renderer.setClearColor(blendColor(backgroundColor,backgroundColors,light));luxury.update(light);lampLight.intensity=blendLight(light,.4,3,0);if(bulb)bulb.emissiveIntensity=blendLight(light,.4,1.5,0);if(selected)composer.render();else renderer.render(scene,camera);
 });
 return{activate:action,focus:(id:string|null)=>{focus=id==='contact'?'butler':id;lastPointer=null;over=null;hover(id);},look:(delta:number)=>{yaw=T.MathUtils.clamp(yaw+delta,-.46,.46);},reset:()=>{yaw=0;pitch=-.095;},dispose:()=>{disposed=true;clearInterval(statsTimer);window.removeEventListener('focus',refreshBoard);document.removeEventListener('visibilitychange',refreshBoard);renderer.setAnimationLoop(null);observer.disconnect();renderer.domElement.removeEventListener('pointerdown',press);renderer.domElement.removeEventListener('pointermove',move);renderer.domElement.removeEventListener('pointerup',release);renderer.domElement.removeEventListener('pointerleave',leave);renderer.domElement.removeEventListener('pointercancel',cancel);textures.forEach(t=>t.dispose());materials.forEach(m=>m.dispose());geometries.forEach(g=>g.dispose());outline.dispose();composer.dispose();renderer.dispose();renderer.domElement.remove();}};
}
