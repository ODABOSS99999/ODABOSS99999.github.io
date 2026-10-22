import * as T from 'three';
import { blendLight } from './roomLighting';
import type { LightingWeights } from './roomLighting';

export type RoomResources={geometries:T.BufferGeometry[];materials:T.Material[]};
export function addLuxuryDetails(scene:T.Scene,resources:RoomResources){
 const {geometries,materials}=resources;
 function mat(color:string,metalness=0,roughness=.65){const m=new T.MeshStandardMaterial({color,metalness,roughness});materials.push(m);return m;}
 const thread=mat('#a9905e',0,.98);
 const gold=mat('#b99a58',.7,.28),ivory=mat('#d8cfb4'),plaster=mat('#bfb79f'),walnut=mat('#39291f'),velvet=mat('#243a32');
 function mesh(geo:T.BufferGeometry,m:T.Material,x:number,y:number,z:number,parent:T.Object3D=scene){geometries.push(geo);const o=new T.Mesh(geo,m);o.position.set(x,y,z);parent.add(o);return o;}
 function box(x:number,y:number,z:number,w:number,h:number,d:number,m:T.Material){return mesh(new T.BoxGeometry(w,h,d),m,x,y,z);}
 function ring(x:number,y:number,z:number,r:number,tube:number,m:T.Material,parent:T.Object3D=scene){const o=mesh(new T.TorusGeometry(r,tube,6,64),m,x,y,z,parent);o.rotation.x=Math.PI/2;return o;}
 function rod(a:T.Vector3,b:T.Vector3,r:number,m:T.Material,parent:T.Object3D=scene){const d=b.clone().sub(a),o=mesh(new T.CylinderGeometry(r,r,d.length(),8),m,0,0,0,parent);o.position.copy(a).add(b).multiplyScalar(.5);o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize());return o;}
 // A coffered plaster ceiling, layered crown molding, and brass panel inlays.
 box(0,6.04,4,14,.16,18,ivory);
 for(const y of [5.64,5.78,5.91]){const ledge=(y-5.5)*.52;box(0,y,-4.88+ledge,14,.09,.12+ledge,plaster);box(-6.9+ledge,y,4,.12+ledge,.09,18,plaster);box(6.9-ledge,y,4,.12+ledge,.09,18,plaster);}
 box(0,5.61,-4.66,14,.025,.035,gold);
 for(const x of [-5,-2,1,4])box(x,5.91,4,.12,.16,17.5,plaster);
 for(const z of [-3,0,3,6,9,12])box(0,5.91,z,13.5,.16,.12,plaster);
 for(const x of [-5,-2,1,4])for(const z of [-3,0,3,6,9]){box(x+1.43,5.94,z+1.44,2.65,.025,.025,gold);box(x+.1,5.94,z+1.4,.025,.025,2.65,gold);}
 // Build each wall in local coordinates so rails and closed panel frames share
 // the same heights and profile, including where the walls meet at the corners.
 function wainscot(length:number,x:number,z:number,rotation:number){
  const wall=new T.Group();wall.position.set(x,0,z);wall.rotation.y=rotation;scene.add(wall);
  const trim=(u:number,y:number,depth:number,w:number,h:number,d:number,m:T.Material)=>mesh(new T.BoxGeometry(w,h,d),m,u,y,depth,wall);
  trim(0,.18,0,length,.22,.12,walnut);
  trim(0,.35,.015,length,.07,.1,walnut);
  trim(0,1.65,.015,length,.07,.1,walnut);
  trim(0,1.78,.025,length,.035,.08,gold);
  const count=Math.round(length/1.15),pitch=length/count;
  for(let i=0;i<count;i++){
   const center=-length/2+(i+.5)*pitch,width=pitch-.18;
   for(const u of [center-width/2,center+width/2])trim(u,.995,.04,.025,1.145,.05,gold);
   for(const y of [.435,1.555])trim(center,y,.04,width,.025,.05,gold);
  }
 }
 wainscot(13.8,0,-4.84,0);
 wainscot(17.84,-6.84,4.08,Math.PI/2);
 wainscot(17.84,6.84,4.08,-Math.PI/2);
 // Minecraft-inspired night sky, built from crisp square geometry.
 const sky=new T.MeshBasicMaterial({color:'#101a39'});materials.push(sky);
 box(4.3,4.12,-4.71,3.45,2.16,.1,walnut);box(4.3,4.12,-4.64,3.2,1.94,.035,sky);
 const pixelMaterial=(color:string)=>{const m=new T.MeshBasicMaterial({color});materials.push(m);return m;};
 const moonPalette=['#eeeee5','#d7d9d1','#b5bbb6','#959f9c'].map(pixelMaterial);
 const moonPixels=['11111111','10000001','10022001','10233001','10022001','12000111','12200121','11111111'];
 const pixel=.065;
 moonPixels.forEach((row,y)=>[...row].forEach((shade,x)=>{
  box(5.04+(x-3.5)*pixel,4.63+(3.5-y)*pixel,-4.58,pixel,pixel,.012,moonPalette[Number(shade)]);
 }));
 const star=pixelMaterial('#c9d6e5');
 for(const [x,y,size] of [[2.89,4.9,.022],[3.17,4.55,.03],[3.48,4.99,.025],[3.76,4.69,.018],[4.04,4.88,.025],[4.49,4.96,.018],[4.62,4.47,.024],[5.51,4.95,.024],[5.75,4.49,.02],[3.56,4.27,.022],[4.41,4.29,.018]])box(x,y,-4.61,size,size,.008,star);
 const cloud=pixelMaterial('#29364e');
 for(const [x,y,w,h] of [[3.28,4.09,.78,.11],[3.51,4.2,.44,.11],[5.38,3.94,.92,.1],[5.62,4.04,.44,.1]])box(x,y,-4.6,w,h,.012,cloud);
 const hills=pixelMaterial('#142b2c');
 for(const [x,height] of [[2.9,.22],[3.3,.34],[3.7,.28],[4.1,.4],[4.5,.3],[4.9,.22],[5.3,.35],[5.7,.26]])box(x,3.15+height/2,-4.57,.4,height,.02,hills);
 for(const x of [2.7,4.3,5.9])box(x,4.12,-4.51,.065,2,.07,gold);box(4.3,4.12,-4.5,3.2,.065,.07,gold);
 box(4.3,5.32,-4.35,3.8,.065,.08,gold);
 const drapes=[new T.Group(),new T.Group()];drapes.forEach((g,i)=>{scene.add(g);g.position.set(i?6.04:2.56,4.02,-4.34);for(let j=0;j<8;j++){const fold=mesh(new T.CylinderGeometry(.075,.09,2.48,8),velvet,(i?-1:1)*j*.075,0,Math.sin(j)*.035,g);fold.scale.z=.7;}});
 const daySky=new T.Color('#1b2c50'),nightSky=new T.Color('#080d20');
 // Ornamental rug border and central woven medallion.
 for(const x of [-3.15,3.15])box(x,.035,4,.04,.006,10.3,thread);
 for(const z of [-1.15,9.15])box(0,.035,z,6.3,.006,.04,thread);
 for(let i=0;i<19;i++)for(const z of [-1,9]){const o=box(-2.9+i*.32,.039,z,.075,.005,.075,thread);o.rotation.y=Math.PI/4;}
 const medallion=ring(0,.033,4,1,.018,thread);medallion.scale.set(1,1.4,.08);
 for(let i=0;i<12;i++){const a=i*Math.PI/6;const petal=ring(Math.cos(a)*.5,.034,4+Math.sin(a)*.7,.18,.01,thread);petal.scale.set(.8,1.3,.08);}
 // A chandelier with curved brass arms, candle bulbs, and faceted crystal drops.
 const chandelier=new T.Group();chandelier.position.set(.75,0,-1.4);scene.add(chandelier);
 const cx=.75,cz=-1.4;ring(cx,5.92,cz,.65,.055,plaster);ring(cx,5.90,cz,.43,.02,gold);
 rod(new T.Vector3(0,5.92,0),new T.Vector3(0,5.08,0),.025,gold,chandelier);
 ring(0,4.78,0,.78,.035,gold,chandelier);ring(0,4.49,0,.45,.027,gold,chandelier);
 const glow=new T.MeshStandardMaterial({color:'#fff1c7',emissive:'#ffd691',emissiveIntensity:2.3,roughness:.4});materials.push(glow);
 const crystal=new T.MeshPhysicalMaterial({color:'#e6e8d8',metalness:.12,roughness:.12,transparent:true,opacity:.65});materials.push(crystal);
 for(let i=0;i<8;i++){
  const a=i*Math.PI/4,dx=Math.cos(a),dz=Math.sin(a);
  const points=[new T.Vector3(0,5.05,0),new T.Vector3(dx*.4,4.7,dz*.4),new T.Vector3(dx*.94,4.74,dz*.94),new T.Vector3(dx*1.05,5,dz*1.05)];
  mesh(new T.TubeGeometry(new T.CatmullRomCurve3(points),16,.026,6,false),gold,0,0,0,chandelier);
  mesh(new T.CylinderGeometry(.12,.075,.04,16),gold,dx*1.05,5,dz*1.05,chandelier);
  mesh(new T.CylinderGeometry(.034,.041,.2,10),ivory,dx*1.05,5.12,dz*1.05,chandelier);
  const flame=mesh(new T.SphereGeometry(.06,10,8),glow,dx*1.05,5.26,dz*1.05,chandelier);flame.scale.y=1.7;
  rod(new T.Vector3(dx*.76,4.78,dz*.76),new T.Vector3(dx*.76,4.5,dz*.76),.008,gold,chandelier);
  const drop=mesh(new T.OctahedronGeometry(.09),crystal,dx*.76,4.45,dz*.76,chandelier);drop.scale.y=1.8;
 }
 const pendant=mesh(new T.OctahedronGeometry(.16),crystal,0,4.28,0,chandelier);pendant.scale.y=1.8;
 const light=new T.PointLight('#ffdb9a',14,15,2);light.position.set(cx,4.9,cz);scene.add(light);
 return {update:(weights:LightingWeights)=>{sky.color.copy(nightSky).lerp(daySky,weights.daylight);drapes.forEach(g=>{g.scale.x=1+weights.darkroom*2.05;});light.intensity=blendLight(weights,7,14,2);glow.emissiveIntensity=blendLight(weights,1.2,2.3,.35);}};
}

export function createTurntable(scene:T.Scene,resources:RoomResources){
 const {geometries,materials}=resources;
 const body=new T.Group();body.position.set(-4.4,1,.2);body.userData.id='record';scene.add(body);
 function mat(c:string,metalness=0,roughness=.5){const m=new T.MeshStandardMaterial({color:c,metalness,roughness});materials.push(m);return m;}
 const walnut=mat('#62432d'),metal=mat('#bba779',.75,.24),black=mat('#161c19'),rubber=mat('#242925'),label=mat('#8c493e'),ivory=mat('#d0c4a5');
 function mesh(geo:T.BufferGeometry,m:T.Material,x:number,y:number,z:number,parent:T.Object3D=body){geometries.push(geo);const o=new T.Mesh(geo,m);o.position.set(x,y,z);parent.add(o);return o;}
 function box(x:number,y:number,z:number,w:number,h:number,d:number,m:T.Material,parent:T.Object3D=body){return mesh(new T.BoxGeometry(w,h,d),m,x,y,z,parent);}
 function cylinder(x:number,y:number,z:number,r:number,h:number,m:T.Material,parent:T.Object3D=body){return mesh(new T.CylinderGeometry(r,r,h,48),m,x,y,z,parent);}
 box(0,0,0,1.85,.21,1.35,walnut);box(0,.112,0,1.78,.025,1.28,black);
 for(const x of [-.72,.72])for(const z of [-.48,.48])cylinder(x,-.14,z,.085,.09,rubber);
 cylinder(-.25,.14,0,.56,.04,metal);
 const platter=new T.Group();platter.name='record-platter';platter.position.set(-.25,.171,0);body.add(platter);
 cylinder(0,0,0,.525,.022,black,platter);
 for(let r=.18;r<.5;r+=.026){const groove=mesh(new T.TorusGeometry(r,.0019,3,64),rubber,0,.013,0,platter);groove.rotation.x=Math.PI/2;}
 cylinder(0,.015,0,.145,.005,label,platter);box(.035,.019,0,.035,.002,.16,ivory,platter);cylinder(0,.033,0,.015,.04,metal,platter);
 const arm=new T.Group();arm.name='record-tonearm';arm.position.set(.62,.2,-.4);body.add(arm);cylinder(0,0,0,.075,.08,metal,arm);box(0,.07,.19,.025,.025,.38,metal,arm);const bend=box(-.105,.07,.44,.025,.025,.29,metal,arm);bend.rotation.y=-.8;box(-.21,.052,.54,.075,.035,.13,black,arm);cylinder(-.21,.015,.57,.005,.06,metal,arm);box(.015,.07,-.1,.1,.1,.13,black,arm);
 cylinder(.64,.153,.43,.065,.025,metal);box(.32,.151,.46,.17,.01,.1,ivory);
 const ledMat=new T.MeshStandardMaterial({color:'#779775',emissive:'#91ba6c',emissiveIntensity:0});materials.push(ledMat);mesh(new T.SphereGeometry(.018,8,6),ledMat,.7,.025,.684);
 const lid=new T.Group();lid.position.set(0,.13,-.67);lid.rotation.x=-1.22;body.add(lid);
 const acrylic=new T.MeshPhysicalMaterial({color:'#b7c1b4',transparent:true,opacity:.13,roughness:.15,metalness:.05,side:T.DoubleSide,depthWrite:false});materials.push(acrylic);
 box(0,0,.67,1.88,.025,1.36,acrylic,lid);for(const x of [-.94,.94])box(x,0,.67,.018,.022,1.36,metal,lid);box(0,0,1.35,1.88,.02,.018,metal,lid);
 let speed=0,cue=0,last=0;
 return{body,update:(time:number,playing:boolean,motion:boolean)=>{const dt=Math.min((time-last)/1000,.05);last=time;speed=motion?T.MathUtils.damp(speed,playing?1:0,3,dt):(playing?1:0);cue=motion?T.MathUtils.damp(cue,playing?1:0,4,dt):(playing?1:0);if(motion)platter.rotation.y-=dt*speed*Math.PI*2*33.333/60;arm.rotation.y=.2-cue*.98;arm.position.y=.2+(1-cue)*.07;ledMat.emissiveIntensity=playing?1.5:0;}};
}
