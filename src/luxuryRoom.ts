import * as T from 'three';

export type RoomResources={geometries:T.BufferGeometry[];materials:T.Material[]};
export function addLuxuryDetails(scene:T.Scene,resources:RoomResources){
 const {geometries,materials}=resources;
 function mat(color:string,metalness=0,roughness=.65){const m=new T.MeshStandardMaterial({color,metalness,roughness});materials.push(m);return m;}
 const thread=mat('#a9905e',0,.98);
 const gold=mat('#b99a58',.7,.28),ivory=mat('#d8cfb4'),plaster=mat('#bfb79f'),walnut=mat('#39291f'),velvet=mat('#243a32'),glass=mat('#92a29b',.2,.2);
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
 for(const y of [.18,.35,1.65,1.78])box(0,y,-4.84,13.8,.07,.1,y===1.78?gold:walnut);
 for(let x=1.4;x<6.9;x+=1.05){box(x,.98,-4.82,.035,1.2,.06,gold);box(x+.5,.42,-4.81,.86,.025,.05,gold);box(x+.5,1.54,-4.81,.86,.025,.05,gold);}
 for(const x of [-6.85,6.85]){box(x,.25,4,.12,.22,18,walnut);box(x,1.78,4,.08,.035,18,gold);for(let z=-4;z<13;z+=1.4)box(x,.96,z,.065,1.35,.035,gold);}
 // Tall glazing and velvet drapes along the left wall.
 box(-6.86,3.65,.5,.06,2.8,2.6,walnut);box(-6.8,3.65,.5,.04,2.57,2.35,glass);
 for(const z of [-.7,.5,1.7])box(-6.75,3.65,z,.06,2.65,.055,gold);box(-6.74,3.65,.5,.055,.06,2.4,gold);
 for(const z of [-1,2])for(let i=0;i<4;i++)mesh(new T.CylinderGeometry(.11,.15,3.25,10),velvet,-6.6+i*.07,3.45,z+i*.12);
 // Ornamental rug border and central woven medallion.
 for(const x of [-3.15,3.15])box(x,.035,1,.04,.006,4.5,thread);
 for(const z of [-1.15,3.15])box(0,.035,z,6.3,.006,.04,thread);
 for(let i=0;i<19;i++)for(const z of [-1,3]){const o=box(-2.9+i*.32,.039,z,.075,.005,.075,thread);o.rotation.y=Math.PI/4;}
 const medallion=ring(0,.033,1,1,.018,thread);medallion.scale.set(1,1.4,.08);
 for(let i=0;i<12;i++){const a=i*Math.PI/6;const petal=ring(Math.cos(a)*.5,.034,1+Math.sin(a)*.7,.18,.01,thread);petal.scale.set(.8,1.3,.08);}
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
 return {update:(dark:boolean,day:boolean)=>{light.intensity=dark?2:day?7:14;glow.emissiveIntensity=dark?.35:day?1.2:2.3;}};
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
