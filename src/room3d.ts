import * as T from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
export type RoomState = {playing:boolean;motion:boolean;lighting:string};
export function createRoom(host:HTMLElement, state:()=>RoomState, hover:(id:string|null)=>void, activate:(id:string)=>void){
 const renderer=new T.WebGLRenderer({antialias:true,alpha:false});renderer.setPixelRatio(Math.min(devicePixelRatio,1.7));renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFShadowMap;renderer.outputColorSpace=T.SRGBColorSpace;renderer.toneMapping=T.ACESFilmicToneMapping;host.appendChild(renderer.domElement);
 const scene=new T.Scene();scene.background=new T.Color('#171c19');scene.fog=new T.Fog('#171c19',22,42);
 const camera=new T.PerspectiveCamera(42,1,.1,80);camera.position.set(10,8,13);
 const controls=new OrbitControls(camera,renderer.domElement);controls.target.set(0,1.5,0);controls.enablePan=false;controls.minDistance=8;controls.maxDistance=38;controls.minPolarAngle=.5;controls.maxPolarAngle=1.38;controls.minAzimuthAngle=-.65;controls.maxAzimuthAngle=1.15;controls.enableDamping=true;controls.update();controls.saveState();
 const mats: T.MeshStandardMaterial[]=[];
 const material=(c:string,metal=0)=>{const m=new T.MeshStandardMaterial({color:c,roughness:metal?.35:.78,metalness:metal});mats.push(m);return m;};
 const walnut=material('#583828'),edge=material('#291f18'),brass=material('#bd9750',.7),cream=material('#eee1bc'),green=material('#30493e'),black=material('#151918'),red=material('#773e36'),skin=material('#bc8b69');
 const mesh=(g:T.BufferGeometry,m:T.Material,x:number,y:number,z:number,p:T.Object3D=scene)=>{const o=new T.Mesh(g,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;p.add(o);return o;};
 const box=(x:number,y:number,z:number,w:number,h:number,d:number,m:T.Material,p:T.Object3D=scene)=>mesh(new T.BoxGeometry(w,h,d),m,x,y,z,p);
 const cyl=(x:number,y:number,z:number,r:number,h:number,m:T.Material,p:T.Object3D=scene,top=r)=>mesh(new T.CylinderGeometry(top,r,h,32),m,x,y,z,p);
 const ball=(x:number,y:number,z:number,r:number,m:T.Material,p:T.Object3D=scene)=>mesh(new T.SphereGeometry(r,24,16),m,x,y,z,p);
 const objects=new Map<string,T.Group>();
 const item=(id:string,x:number,y:number,z:number)=>{const g=new T.Group();g.position.set(x,y,z);g.userData.id=id;scene.add(g);objects.set(id,g);return g;};
 box(0,-.22,0,13,.4,10,edge);for(let i=0;i<26;i++)box(-6.25+i*.5,0,0,.48,.06,10,i%3===0?edge:walnut);
 box(0,2.6,-4.8,13,5.3,.22,green);box(-6.4,2.6,0,.22,5.3,9.8,green);
 for(let i=0;i<9;i++){box(-6+i*1.5,1,-4.62,.045,1.9,.08,brass);box(-6+i*1.5,.14,-4.58,1.4,.09,.09,walnut);}box(0,2,-4.62,13,.12,.12,walnut);box(0,5.1,-4.6,13,.18,.22,brass);
 box(0,.055,1,7.2,.035,4.8,red);for(const x of [-3.35,3.35])box(x,.08,1,.06,.02,4.4,brass);for(const z of [-1.2,3.2])box(0,.08,z,6.7,.02,.06,brass);
 // Tall library cabinet and individually modeled volumes.
 box(-3.5,2,-4.15,4.4,4,.55,edge);for(const x of [-5.7,-1.3])box(x,2,-3.7,.14,4.2,.95,walnut);
 for(let row=0;row<4;row++){const y=.3+row*1.02;box(-3.5,y,-3.7,4.5,.13,1,walnut);for(let j=0;j<15;j++){const colors=[green,red,cream,walnut];const h=.48+((j*7+row*3)%5)*.07;const b=box(-5.45+j*.275,y+h/2+.08,-3.68,.19,h,.52,colors[(j+row)%4]);if(j%6===0)b.rotation.z=.14;box(-5.45+j*.275,y+.2,-3.405,.15,.025,.014,brass);}}
 // Window with mullions and curtains.
 const glass=material('#7caaa0');glass.emissive.set('#7caaa0');glass.emissiveIntensity=.35;
 box(-6.22,3.25,.1,.1,2.5,3.1,edge);box(-6.14,3.25,.1,.06,2.25,2.85,glass);for(const z of [-1.4,.1,1.6])box(-6.05,3.25,z,.13,2.5,.08,cream);box(-6.05,3.25,.1,.13,.08,3.1,cream);
 for(const z of [-1.85,2.05])for(let n=0;n<5;n++)cyl(-6+n*.06,2.8,z+n*.1,.13,3.7,green);
 const table=(x:number,z:number,w:number,d:number,h:number)=>{box(x,h,z,w,.16,d,walnut);box(x,h-.15,z,w,.15,d,edge);for(const a of [-1,1])for(const b of [-1,1])box(x+a*(w/2-.16),h/2,z+b*(d/2-.15),.12,h,.12,walnut);};
 table(2,-1.65,3.6,1.55,1.35);box(2,1,-1.72,1.2,.5,1.2,walnut);for(const x of [1.7,2.3])ball(x,1,-1.06,.035,brass);
 table(-3,1.6,1.8,1.35,1.05);
 // Upholstered reading chair.
 box(-.6,.72,2.6,1.5,.38,1.3,green);box(-.6,1.35,3.15,1.5,1.4,.3,green);for(const x of [-1.4,.2])box(x,1,2.6,.22,.6,1.5,walnut);for(const x of [-1.15,-.05])for(const z of [2.1,3])box(x,.3,z,.12,.6,.12,brass);
 const cameraObj=item('photography',-4.55,2.46,-3.08);box(0,0,0,.7,.43,.36,black,cameraObj);box(-.17,.26,0,.26,.14,.26,black,cameraObj);const lens=cyl(.1,0,.28,.2,.3,brass,cameraObj);lens.rotation.x=Math.PI/2;const lensGlass=cyl(.1,0,.45,.15,.03,black,cameraObj);lensGlass.rotation.x=Math.PI/2;
 const books=item('about',-2.3,1.5,-3.05);for(let i=0;i<3;i++){box(0,i*.13,0,.8,.11,.5,i===1?cream:red,books);}
 const paper=item('published',2.6,1.47,-1.3);box(0,0,0,.75,.025,.6,cream,paper);for(let i=0;i<5;i++)box(0,.016,-.19+i*.08,.6,.008,.015,black,paper);
 const rocket=item('engineering',-2.1,3.5,-3.1);cyl(0,0,0,.15,.6,cream,rocket);cyl(0,.4,0,.15,.25,brass,rocket,0);for(const x of [-.18,.18])box(x,-.22,0,.12,.3,.18,red,rocket);cyl(0,-.42,0,.25,.08,brass,rocket);
 const lamp=item('lamp',3.1,1.5,-1.95);cyl(0,0,0,.27,.08,brass,lamp);cyl(0,.4,0,.035,.8,brass,lamp);const shade=material('#e6c77e');cyl(0,.86,0,.43,.43,shade,lamp,.23);const bulb=new T.PointLight('#ffc66d',20,7,2);bulb.position.set(3.1,2.23,-1.95);bulb.castShadow=true;scene.add(bulb);
 // Butler: tailored coat, waistcoat, bow tie, gloved hands and a telephone receiver.
 const butler=item('contact',4.5,0,.1);for(const x of [-.19,.19]){box(x,.13,.12,.31,.2,.55,black,butler);box(x,.65,0,.23,1,.28,black,butler);}cyl(0,1.44,0,.39,.9,black,butler,.31);box(0,1.55,.31,.32,.64,.05,cream,butler);for(let i=0;i<3;i++)ball(0,1.35+i*.16,.35,.025,brass,butler);ball(0,2.18,0,.28,skin,butler);const hair=ball(0,2.3,-.07,.245,cream,butler);hair.scale.set(1,.65,1);for(const x of [-.1,.1])ball(x,2.22,.25,.025,black,butler);box(0,1.89,.3,.26,.09,.09,black,butler);box(-.43,1.46,0,.18,.8,.2,black,butler);ball(-.43,1.04,0,.13,cream,butler);const arm=box(.44,1.62,.07,.19,.65,.2,black,butler);arm.rotation.z=-.55;ball(.62,1.95,.14,.13,cream,butler);box(.66,2.14,.15,.1,.42,.12,black,butler);for(const y of [1.94,2.34])ball(.63,y,.16,.12,black,butler);
 const record=item('record',-3,1.18,1.6);box(0,0,0,1.38,.2,.94,walnut,record);box(0,.11,0,1.3,.025,.86,black,record);const disc=new T.Group();disc.position.set(-.16,.15,0);record.add(disc);cyl(0,0,0,.36,.025,black,disc);for(const r of [.2,.26,.32]){const groove=mesh(new T.TorusGeometry(r,.0025,4,64),brass,0,.018,0,disc);groove.rotation.x=Math.PI/2;}cyl(0,.02,0,.1,.012,red,disc);box(.045,.03,0,.04,.005,.09,cream,disc);cyl(0,.035,0,.018,.05,brass,disc);
 const tonearm=new T.Group();tonearm.position.set(.46,.2,-.27);record.add(tonearm);cyl(0,0,0,.065,.1,brass,tonearm);box(0,.07,.25,.035,.035,.5,brass,tonearm);box(0,.045,.49,.08,.06,.12,cream,tonearm);ball(.48,.17,.3,.045,brass,record);
 const ambient=new T.HemisphereLight('#e6e3c9','#322219',2);scene.add(ambient);const sun=new T.DirectionalLight('#ffdfac',3);sun.position.set(-3,8,5);sun.castShadow=true;sun.shadow.mapSize.set(2048,2048);Object.assign(sun.shadow.camera,{left:-9,right:9,top:9,bottom:-9});sun.shadow.bias=-.001;scene.add(sun);
 const ray=new T.Raycaster(),pointer=new T.Vector2();let current:string|null=null,down=[0,0],dragging=false,focused:string|null=null;
 function highlight(id:string|null){current=id;hover(id);renderer.domElement.style.cursor=id?'pointer':'grab';}
 function pick(e:PointerEvent){const r=renderer.domElement.getBoundingClientRect();pointer.set((e.clientX-r.left)/r.width*2-1,-(e.clientY-r.top)/r.height*2+1);ray.setFromCamera(pointer,camera);const hits=ray.intersectObjects([...objects.values()],true);let o:T.Object3D|undefined=hits[0]?.object;while(o&&!o.userData.id)o=o.parent||undefined;return o?.userData.id||null;}
 const move=(e:PointerEvent)=>{if(e.buttons&&Math.hypot(e.clientX-down[0],e.clientY-down[1])>5)dragging=true;highlight(dragging?null:pick(e));};const press=(e:PointerEvent)=>{down=[e.clientX,e.clientY];dragging=false;};const release=(e:PointerEvent)=>{const id=pick(e);if(!dragging&&id)activate(id);dragging=false;};const leave=()=>highlight(null);
 renderer.domElement.addEventListener('pointermove',move);renderer.domElement.addEventListener('pointerdown',press);renderer.domElement.addEventListener('pointerup',release);renderer.domElement.addEventListener('pointerleave',leave);
 const resize=()=>{const w=host.clientWidth,h=host.clientHeight;renderer.setSize(w,h);camera.aspect=w/h;camera.fov=w<600?55:42;const distance=w<600?29:18;camera.position.copy(controls.target).add(new T.Vector3(10,6.5,13).normalize().multiplyScalar(distance));camera.updateProjectionMatrix();controls.update();controls.saveState();};const observer=new ResizeObserver(resize);observer.observe(host);resize();let last=0;
 renderer.setAnimationLoop((time)=>{if(document.hidden)return;const s=state(),dt=Math.min((time-last)/1000,.05);last=time;controls.enableDamping=s.motion;controls.update();if(s.playing&&s.motion&&!matchMedia('(prefers-reduced-motion: reduce)').matches)disc.rotation.y-=dt*3.49;tonearm.rotation.y=s.playing?.48:0;const day=s.lighting==='daylight',dark=s.lighting==='darkroom';ambient.intensity=day?2.5:dark?.65:1.3;sun.intensity=day?3.5:dark?.4:1.4;bulb.intensity=dark?0:20;shade.emissive.set(dark?'#000000':'#d69530');shade.emissiveIntensity=dark?0:.5;
 objects.forEach((g,id)=>g.traverse(o=>{if(o instanceof T.Mesh){if(!o.userData.ownMaterial){o.material=o.material.clone();o.userData.ownMaterial=true;}o.material.emissive.set(id===(focused||current)?'#b28c35':'#000000');o.material.emissiveIntensity=id===(focused||current)?.45:0;}}));renderer.render(scene,camera);});
 return {focus:(id:string|null)=>{focused=id;hover(id);},reset:()=>controls.reset(),dispose:()=>{renderer.setAnimationLoop(null);observer.disconnect();controls.dispose();scene.traverse(o=>{if(o instanceof T.Mesh){o.geometry.dispose();o.material.dispose();}});mats.forEach(m=>m.dispose());renderer.dispose();renderer.domElement.remove();}};
}



