import * as T from 'three';

type Resources={geometries:T.BufferGeometry[];materials:T.Material[];textures:T.Texture[]};

/** Small solid models, with their origins kept compatible with the room interactions. */
export function createRoomObjects(scene:T.Scene,resources:Resources){
 const items=new Map<string,T.Group>();
 const mat=(color:string,metalness=0,roughness=.65)=>{const m=new T.MeshStandardMaterial({color,metalness,roughness});resources.materials.push(m);return m;};
 const walnut=mat('#59402d'),dark=mat('#24362f'),brass=mat('#b99a58',.72,.3),ivory=mat('#d9ceb1'),paper=mat('#e1d6b9'),red=mat('#824b40'),green=mat('#61755b'),black=mat('#172420'),skin=mat('#bc9779'),silver=mat('#a4aaa0',.65,.32);
 const glass=mat('#365d59',.4,.18);
 function mesh(g:T.Object3D,geo:T.BufferGeometry,m:T.Material,x=0,y=0,z=0){resources.geometries.push(geo);const o=new T.Mesh(geo,m);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;g.add(o);return o;}
 const box=(g:T.Object3D,x:number,y:number,z:number,w:number,h:number,d:number,m:T.Material)=>mesh(g,new T.BoxGeometry(w,h,d),m,x,y,z);
 const cyl=(g:T.Object3D,x:number,y:number,z:number,rt:number,rb:number,h:number,m:T.Material,n=24)=>mesh(g,new T.CylinderGeometry(rt,rb,h,n),m,x,y,z);
 const ball=(g:T.Object3D,x:number,y:number,z:number,r:number,m:T.Material)=>mesh(g,new T.SphereGeometry(r,20,14),m,x,y,z);
 function rod(g:T.Object3D,a:T.Vector3,b:T.Vector3,r:number,m:T.Material){const d=b.clone().sub(a),o=cyl(g,0,0,0,r,r,d.length(),m,12);o.position.copy(a).add(b).multiplyScalar(.5);o.quaternion.setFromUnitVectors(new T.Vector3(0,1,0),d.normalize());return o;}
 const v=(x:number,y:number,z:number)=>new T.Vector3(x,y,z);
 function group(id:string,x:number,y:number,z:number){const g=new T.Group();g.userData.id=id;g.position.set(x,y,z);scene.add(g);items.set(id,g);return g;}
 function rounded(g:T.Object3D,x:number,y:number,z:number,w:number,h:number,d:number,m:T.Material,r=.055){const s=new T.Shape();s.moveTo(-w/2+r,-h/2);s.lineTo(w/2-r,-h/2);s.quadraticCurveTo(w/2,-h/2,w/2,-h/2+r);s.lineTo(w/2,h/2-r);s.quadraticCurveTo(w/2,h/2,w/2-r,h/2);s.lineTo(-w/2+r,h/2);s.quadraticCurveTo(-w/2,h/2,-w/2,h/2-r);s.lineTo(-w/2,-h/2+r);s.quadraticCurveTo(-w/2,-h/2,-w/2+r,-h/2);return mesh(g,new T.ExtrudeGeometry(s,{depth:d,bevelEnabled:true,bevelSegments:2,steps:1,bevelSize:.015,bevelThickness:.015,curveSegments:5}),m,x,y,z-d/2);}
 function frame(g:T.Object3D,x:number,bottom:number,w:number,h:number,yaw:number){
  // Bottom edge sits on the furniture; the top leans back on a hinged easel.
  const pivot=new T.Group();pivot.position.set(x,bottom,.12);pivot.rotation.y=yaw;g.add(pivot);
  const f=new T.Group();f.rotation.x=-.16;pivot.add(f);f.position.y=(h+.14)/2;
  box(f,0,0,-.045,w+.14,h+.14,.09,walnut);
  for(const side of [-1,1]){box(f,side*(w/2+.035),0,.025,.07,h+.14,.12,brass);box(f,0,side*(h/2+.035),.025,w,.07,.12,brass);box(f,side*(w/2+.003),0,.089,.012,h,.012,ivory);box(f,0,side*(h/2+.003),.089,w,.012,.012,ivory);}
  const hinge=v(0,h*.25,-.08),foot=v(0,-(h+.14)/2,-.36);
  const support=box(f,0,0,0,w*.32,hinge.distanceTo(foot),.035,walnut);
  support.position.copy(hinge).add(foot).multiplyScalar(.5);support.quaternion.setFromUnitVectors(v(0,1,0),hinge.clone().sub(foot).normalize());
  rod(f,v(-.09,h*.25,-.085),v(.09,h*.25,-.085),.02,brass);
  rod(f,v(0,-h*.3,-.08),v(0,-h*.3,-.28),.012,black);
  const mounts=(g.userData.photoMounts??=[]) as T.Group[];mounts.push(f);
 }
 const camera=group('photography',-5.02,4.108,-4.22);
 rounded(camera,0,-.1,0,1.38,.78,.43,dark);rounded(camera,.49,-.1,.055,.3,.77,.49,black,.08);
 box(camera,0,.31,0,.52,.18,.36,silver);box(camera,0,-.45,.03,1.45,.07,.46,black);
 for(const x of [-.51,.51])box(camera,x,-.08,.231,.19,.57,.018,black);
 const lens=cyl(camera,0,-.08,.4,.3,.32,.43,black,48);lens.rotation.x=Math.PI/2;
 for(const z of [.27,.46,.61]){const ring=cyl(camera,0,-.08,z,.325,.325,.035,silver,48);ring.rotation.x=Math.PI/2;}
 for(let i=0;i<40;i++){const a=i*Math.PI/20;const grip=box(camera,Math.sin(a)*.316,-.08+Math.cos(a)*.316,.4,.014,.014,.14,dark);grip.rotation.z=-a;}
 const optic=cyl(camera,0,-.08,.638,.255,.255,.012,glass,48);optic.rotation.x=Math.PI/2;
 const inner=cyl(camera,0,-.08,.648,.16,.16,.012,black,48);inner.rotation.x=Math.PI/2;
 const reflection=ball(camera,-.08,.015,.661,.035,silver);reflection.scale.set(.6,1,.15);
 cyl(camera,.46,.34,0,.13,.13,.09,brass);cyl(camera,-.46,.34,0,.11,.11,.08,silver);box(camera,0,.34,.2,.19,.09,.025,glass);
 box(camera,.51,.404,.02,.085,.022,.07,silver);ball(camera,.36,.1,.234,.025,red);
 for(const x of [-.7,.7]){const lug=mesh(camera,new T.TorusGeometry(.045,.012,8,16),silver,x,.15,0);lug.rotation.y=Math.PI/2;}
 const books=group('about',-2.6,3.655,-4.1);
 frame(books,0,0,.93,.93,-.07);
 const news=group('published',-5.02,2.61,-3.98);news.rotation.x=-.1;box(news,0,-.07,0,1.53,1.12,.055,paper);box(news,0,-.07,.032,.017,1.1,.008,ivory);box(news,0,.36,.035,1.3,.035,.01,dark);box(news,0,.22,.035,1.3,.015,.01,dark);box(news,-.37,-.04,.035,.49,.31,.012,green);
 for(let col=0;col<3;col++)for(let row=0;row<10;row++)box(news,-.48+col*.48,-.47+row*.052,.037,.35-(row%3)*.025,.009,.008,dark);
 const engineering=group('engineering',-2.6,2.61,-3.98),rocket=new T.Group();engineering.add(rocket);rocket.position.set(-.5,-.03,0);
 cyl(rocket,0,-.05,0,.17,.17,.86,ivory);cyl(rocket,0,.48,0,0,.17,.24,red);cyl(rocket,0,-.51,0,.15,.12,.12,brass);
 for(let i=0;i<3;i++){const fin=box(rocket,Math.cos(i*2.094)*.18,-.36,Math.sin(i*2.094)*.18,.12,.36,.19,red);fin.rotation.y=-i*2.094;fin.rotation.z=i===0?-.3:0;}
 const port=cyl(rocket,0,.12,.173,.09,.09,.025,brass);port.rotation.x=Math.PI/2;const window=cyl(rocket,0,.12,.19,.064,.064,.015,glass);window.rotation.x=Math.PI/2;
 const device=new T.Group();engineering.add(device);device.position.set(.43,-.07,.02);device.rotation.z=-.06;rounded(device,0,0,0,.58,.98,.18,ivory);rounded(device,0,.18,.107,.46,.36,.025,dark,.025);box(device,0,.18,.127,.32,.23,.015,green);box(device,-.14,-.19,.13,.19,.055,.025,black);box(device,-.14,-.19,.13,.055,.19,.025,black);for(const [x,y] of [[.14,-.17],[.22,-.27]]){const b=cyl(device,x,y,.14,.045,.045,.028,red);b.rotation.x=Math.PI/2;}for(let i=0;i<4;i++)box(device,.1+i*.035,-.39,.12,.015,.09,.01,dark);
 const phone=group('contact',3.05,1.7,-1.93);rounded(phone,0,-.27,0,1,.29,.63,dark,.12);const dial=cyl(phone,0,-.08,.1,.25,.25,.045,brass,40);dial.rotation.x=.28;for(let i=0;i<10;i++){const a=i*Math.PI/5;cyl(phone,Math.sin(a)*.18,-.047,.1+Math.cos(a)*.18,.038,.038,.013,black,12);}for(const x of [-.37,.37])cyl(phone,x,.02,-.12,.045,.065,.3,brass);
 const receiver=group('receiver',3.05,1.7,-1.93);rod(receiver,v(-.35,.21,-.12),v(.35,.21,-.12),.075,dark);for(const x of [-.4,.4]){const ear=ball(receiver,x,.12,-.12,.145,dark);ear.scale.set(1,1,.9);cyl(receiver,x,.005,-.12,.12,.13,.04,brass);}const cordPoints=Array.from({length:81},(_,i)=>v(.45+.04*Math.sin(i*.9),.1-i*.008,-.1+.04*Math.cos(i*.9)));mesh(phone,new T.TubeGeometry(new T.CatmullRomCurve3(cordPoints),100,.016,6,false),black);
 const letter=group('letter',4.02,1.54,-1.38);letter.rotation.x=-.65;box(letter,0,0,0,.73,.43,.035,paper);rod(letter,v(-.35,.2,.023),v(0,-.03,.023),.008,walnut);rod(letter,v(.35,.2,.023),v(0,-.03,.023),.008,walnut);const seal=cyl(letter,0,-.03,.035,.055,.055,.018,red);seal.rotation.x=Math.PI/2;
 const butler=group('butler',3.85,2.03,-2.95);const torso=cyl(butler,0,-.35,0,.33,.44,1.22,dark);torso.scale.z=.65;box(butler,0,-.24,.23,.29,.73,.03,ivory);for(const x of [-1,1]){rod(butler,v(x*.31,.1,0),v(x*.49,-.65,.12),.115,dark);ball(butler,x*.49,-.68,.12,.12,ivory);const bow=mesh(butler,new T.ConeGeometry(.1,.15,3),red,x*.073,.02,.28);bow.rotation.z=x*Math.PI/2;}cyl(butler,0,.32,0,.115,.13,.24,skin);const head=ball(butler,0,.66,0,.28,skin);head.scale.y=1.25;const hair=ball(butler,0,.84,-.04,.28,silver);hair.scale.set(1,.65,.85);for(const x of [-.1,.1])ball(butler,x,.68,.252,.025,black);const nose=ball(butler,0,.59,.275,.045,skin);nose.scale.y=1.4;rod(butler,v(-.08,.48,.25),v(.08,.48,.25),.012,dark);
 const lamp=group('lamp',6.05,1.8,-1.4);cyl(lamp,0,-.49,0,.27,.32,.065,brass);cyl(lamp,0,-.14,0,.027,.04,.7,brass);const shadeMaterial=mat('#d6c49a');shadeMaterial.side=T.DoubleSide;mesh(lamp,new T.CylinderGeometry(.27,.49,.52,40,1,true),shadeMaterial,0,.37,0);for(const y of [.11,.63]){const rim=mesh(lamp,new T.TorusGeometry(y===.11?.49:.27,.015,8,40),brass,0,y,0);rim.rotation.x=Math.PI/2;}const glow=mat('#fff0c4');glow.emissive=new T.Color('#ffc679');glow.emissiveIntensity=1.5;ball(lamp,0,.29,0,.095,glow);rod(lamp,v(.13,.2,0),v(.13,-.03,0),.008,brass);ball(lamp,.13,-.045,0,.024,brass);lamp.userData.switchPosition=v(.13,-.045,0);lamp.userData.bulb=glow;
 // The table stays in place when the lamp reacts to hover or selection.
 const table=new T.Group();scene.add(table);table.position.set(6.05,0,-1.4);cyl(table,0,1.22,0,.39,.39,.12,walnut,40);cyl(table,0,1.285,0,.38,.38,.015,brass,40);cyl(table,0,.67,0,.075,.12,1.05,walnut);for(let i=0;i<3;i++){const a=i*Math.PI*2/3;rod(table,v(0,.29,0),v(Math.cos(a)*.33,.08,Math.sin(a)*.33),.06,walnut);}
 const ladder=group('ladder',-6.02,2.48,-3.28);for(const x of [-.33,.33]){const rail=box(ladder,x,0,0,.065,4.65,.12,walnut);rail.rotation.x=-.085;box(ladder,x,0,.07,.018,4.65,.012,brass);const wheel=cyl(ladder,x,-2.35,.19,.105,.105,.07,black,20);wheel.rotation.z=Math.PI/2;const hub=cyl(ladder,x,-2.35,.19,.035,.035,.08,brass);hub.rotation.z=Math.PI/2;rod(ladder,v(x,2.22,-.18),v(x,2.43,-.23),.035,brass);}
 for(let i=0;i<10;i++){const y=-2.1+i*.45;box(ladder,0,y,-y*.085,.64,.065,.21,walnut);box(ladder,0,y+.037,-y*.085+.06,.58,.009,.055,brass);}
 return items;
}

