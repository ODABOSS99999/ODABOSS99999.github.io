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
  // Square, sixteen-pixel wooden rim and recessed leather backing.
  const size=Math.max(w,h)+.14,pixel=size/16;
  const oak=mat('#a77b43'),edge=mat('#614323'),lightOak=mat('#c49a5e'),grain=mat('#896033'),leather=mat('#79452f');
  const pivot=new T.Group();pivot.position.set(x,bottom,.12);pivot.rotation.y=yaw;g.add(pivot);
  const f=new T.Group();f.rotation.x=-.16;pivot.add(f);f.position.y=size/2;
  box(f,0,0,-.045,size,size,.09,edge);
  box(f,0,0,.008,size-2*pixel,size-2*pixel,.025,leather);
  for(const side of [-1,1]){
   box(f,side*(size-pixel)/2,0,.035,pixel,size,.10,oak);
   box(f,0,side*(size-pixel)/2,.035,size-2*pixel,pixel,.10,oak);
   box(f,side*(size/2-pixel*1.15),0,.087,pixel*.3,size-2*pixel,.008,side<0?lightOak:edge);
   box(f,0,side*(size/2-pixel*1.15),.087,size-2*pixel,pixel*.3,.008,side>0?lightOak:edge);
   for(let i=0;i<8;i++){
    const along=(-6.5+i*1.8)*pixel;
    box(f,along,side*(size-pixel)/2,.089,pixel*(i%3===0?1.4:.7),pixel*.4,.008,i%2?grain:lightOak);
    box(f,side*(size-pixel)/2,along,.089,pixel*.4,pixel*(i%3===0?1.4:.7),.008,i%2?lightOak:grain);
   }
  }
  f.userData.photoScale=(size-5*pixel)/Math.max(w,h);
  const hinge=v(0,h*.25,-.08),foot=v(0,-size/2,-.36);
  const support=box(f,0,0,0,w*.32,hinge.distanceTo(foot),.035,walnut);
  support.position.copy(hinge).add(foot).multiplyScalar(.5);support.quaternion.setFromUnitVectors(v(0,1,0),hinge.clone().sub(foot).normalize());
  rod(f,v(-.09,h*.25,-.085),v(.09,h*.25,-.085),.02,brass);
  rod(f,v(0,-h*.3,-.08),v(0,-h*.3,-.28),.012,black);
  // Resolve the actual tilted geometry against the shelf, including the easel foot.
  pivot.updateWorldMatrix(true,true);const bounds=new T.Box3().setFromObject(f);
  f.position.y+=g.position.y+bottom-bounds.min.y;
  const mounts=(g.userData.photoMounts??=[]) as T.Group[];mounts.push(f);
 }
 // Mirrorless-camera proportions: wider, but about two thirds the handheld's height.
 const camera=group('photography',-5.02,3.62,-4.22);
 const graphite=mat('#59635e',.3,.46),rubber=mat('#29352f',0,.92),lensMetal=mat('#87928a',.7,.32);
 const lensCoating=mat('#386a75',.4,.19),opticDark=mat('#101e26',.25,.22);
 rounded(camera,0,-.1,0,1.3,.73,.4,graphite,.075);
 rounded(camera,.48,-.12,.065,.32,.77,.54,rubber,.095);
 rounded(camera,-.45,-.12,.215,.27,.55,.025,rubber,.035);
 box(camera,0,-.45,.015,1.28,.045,.38,rubber);
 // Stepped viewfinder housing and a recessed eyepiece, with physical top controls.
 rounded(camera,-.045,.28,-.04,.39,.22,.35,graphite,.035);
 box(camera,-.045,.325,-.225,.21,.095,.035,rubber);
 box(camera,-.045,.325,-.247,.15,.055,.008,glass);
 box(camera,-.045,.402,-.025,.18,.014,.16,lensMetal);
 for(const x of [-.49,.36]){cyl(camera,x,.3,-.045,.095,.095,.055,rubber,32);cyl(camera,x,.331,-.045,.079,.079,.008,lensMetal,32);}
 const shutter=cyl(camera,.51,.291,.18,.062,.062,.032,silver,24);shutter.rotation.x=.1;
 box(camera,.36,.18,.218,.12,.045,.012,ivory);
 ball(camera,.35,.08,.222,.017,red);
 // Lens mount, matte barrel, knurled focus ring and a thin protective rim.
 const lensPart=(z:number,r:number,depth:number,material:T.Material)=>{const part=cyl(camera,-.07,-.08,z,r,r,depth,material,48);part.rotation.x=Math.PI/2;return part;};
 lensPart(.225,.294,.045,lensMetal);lensPart(.365,.277,.26,rubber);
 lensPart(.34,.287,.11,graphite);lensPart(.488,.267,.13,graphite);
 for(let i=0;i<40;i++){const angle=i*Math.PI/20;const ridge=box(camera,-.07+Math.sin(angle)*.286,-.08+Math.cos(angle)*.286,.35,.012,.012,.09,rubber);ridge.rotation.z=-angle;}
 lensPart(.557,.277,.026,rubber);lensPart(.574,.254,.012,lensMetal);
 lensPart(.583,.231,.009,lensCoating);lensPart(.591,.172,.008,opticDark);
 lensPart(.598,.083,.006,black);
 // Small off-center reflections read as coated glass without a glowing target.
 const reflection=ball(camera,-.17,.025,.601,.046,silver);reflection.scale.set(.6,1,.09);reflection.rotation.z=-.45;
 const blueReflection=ball(camera,.015,-.15,.601,.067,lensCoating);blueReflection.scale.set(1,.26,.06);blueReflection.rotation.z=-.4;
 for(const x of [-.67,.66]){const lug=mesh(camera,new T.TorusGeometry(.034,.011,8,16),lensMetal,x,.15,-.015);lug.rotation.y=Math.PI/2;}
 const cameraBody=new T.Group();cameraBody.name='camera-body';cameraBody.rotation.y=.24;cameraBody.scale.setScalar(.64);
 for(const child of [...camera.children])cameraBody.add(child);camera.add(cameraBody);
 camera.updateWorldMatrix(true,true);
 cameraBody.position.y=3.62-new T.Box3().setFromObject(cameraBody).min.y;
 // Two display levels use the height of the bay; all gear shares Photography's hit target.
 cameraBody.position.x=-.46;
 const displayWood=mat('#795638');
 box(camera,0,.75,-.02,2.12,.055,.53,displayWood);
 for(const x of [-.97,.97])box(camera,x,.36,-.21,.045,.72,.07,brass);
 const digicam=new T.Group();digicam.name='compact-digicam';camera.add(digicam);
 digicam.position.set(-.48,.96,.03);digicam.rotation.y=.12;
 rounded(digicam,0,0,0,.69,.35,.19,silver,.035);
 rounded(digicam,.265,0,.045,.11,.32,.14,graphite,.025);
 box(digicam,-.22,.105,.103,.16,.065,.016,ivory);
 box(digicam,.12,.105,.103,.075,.045,.016,opticDark);
 cyl(digicam,.21,.19,0,.035,.035,.025,lensMetal,20);
 for(const [z,r,d,m] of [[.12,.125,.06,graphite],[.158,.104,.02,lensMetal],[.172,.085,.012,lensCoating],[.181,.052,.008,opticDark]] as const){
  const ring=cyl(digicam,-.04,-.025,z,r,r,d,m,32);ring.rotation.x=Math.PI/2;
 }
 const standingLens=(x:number,bottom:number,height:number,radius:number,pale=false)=>{
  const g=new T.Group();g.name='upright-lens';g.position.set(x,bottom,.04);camera.add(g);
  const shell=pale?ivory:graphite;
  cyl(g,0,height/2,0,radius*.9,radius,height,shell,32);
  for(const y of [.08,height*.48,height-.07])cyl(g,0,y,0,radius*1.025,radius*1.025,.065,rubber,32);
  cyl(g,0,.025,0,radius*1.04,radius*1.04,.04,lensMetal,32);
  cyl(g,0,height+.009,0,radius*.91,radius*.91,.025,rubber,32);
  cyl(g,0,height+.024,0,radius*.75,radius*.75,.009,lensCoating,32);
  box(g,0,height*.7,radius*.94,.09,.035,.012,ivory);
 };
 standingLens(.30,0,.62,.19,true);
 standingLens(.78,0,.43,.17);
 standingLens(.28,.78,.34,.16);
 standingLens(.76,.78,.51,.18);
 camera.userData.highlightObjects=camera.children.filter(child=>child instanceof T.Group);
 const books=group('about',-2.6,3.62,-4.1);
 frame(books,0,0,.93,.93,-.07);
 const favorites=group('favorites',-.17,2.02,-4.1);
 frame(favorites,-.4,0,.601,.7,.09);frame(favorites,.4,0,.538,.49,-.12);
 // A printed front page: clean column gutters and a quiet center fold.
 const news=group('published',-5.02,2.61,-3.98);news.rotation.set(-.1,0,-.025);
 for(let page=3;page>=0;page--)box(news,page*.007,-.07-page*.005,-page*.009,1.53,1.12,.012,page%2?ivory:paper);
 const newsCanvas=document.createElement('canvas');newsCanvas.width=1536;newsCanvas.height=1120;
 const print=newsCanvas.getContext('2d');
 // Keep the paper model usable when canvas drawing is unavailable.
 if(print){
 print.fillStyle='#e6dcc3';print.fillRect(0,0,1536,1120);
 // Deterministic fine fibers keep the stock tactile without noisy animation.
 for(let i=0;i<5500;i++){const x=(i*719)%1536,y=(i*397)%1120;print.fillStyle=i%2?'rgba(89,65,35,.035)':'rgba(255,255,255,.12)';print.fillRect(x,y,1+i%3,1);}
 const rule=(x:number,y:number,w:number,h=2)=>{print.fillStyle='#394038';print.fillRect(x,y,w,h);};
 const type=(text:string,x:number,y:number,size:number,bold=false)=>{print.fillStyle='#29372f';print.font=`${bold?'bold ':''}${size}px Georgia, serif`;print.fillText(text,x,y);};
 rule(76,70,1384,5);type('THE McGOWEN',204,215,132,true);type('PHOTOGRAPHY  /  ENGINEERING  /  CREATIVE WORK',310,273,28);
 rule(76,306,1384,6);rule(76,320,1384);
 type('PUBLISHED WORK',76,425,82,true);type('Photography & selected credits',80,479,35);
 rule(76,513,1384,3);
 // An ink camera engraving, deliberately an illustration rather than a portfolio image.
 print.fillStyle='#c5c7b2';print.fillRect(76,550,858,310);
 print.strokeStyle='#536050';print.lineWidth=2;
 for(let i=0;i<34;i++){print.beginPath();print.moveTo(76,560+i*9);print.lineTo(934,560+i*9);print.stroke();}
 print.fillStyle='#344339';print.fillRect(288,622,420,173);print.fillRect(370,591,116,42);
 print.fillStyle='#adb39b';print.fillRect(310,646,72,105);print.fillRect(620,642,55,25);
 for(const [r,c] of [[105,'#d8d5bb'],[91,'#344339'],[72,'#929d86'],[59,'#344339'],[34,'#657662']] as const){print.beginPath();print.arc(506,710,r,0,Math.PI*2);print.fillStyle=c;print.fill();}
 rule(76,881,858);type('SELECTED PHOTOGRAPHY',76,918,26,true);
 const column=(x:number,y:number,w:number,rows:number)=>{for(let row=0;row<rows;row++){const width=row===rows-1?w*.61:w-((row*17)%4)*7;rule(x,y+row*16,width,3);}};
 type('IN PRINT',989,583,37,true);rule(989,606,471,3);column(989,634,216,13);column(1244,634,216,13);
 rule(989,865,471);type('SELECTED CREDITS',989,909,28,true);
 column(76,955,252,5);column(378,955,252,5);column(682,955,252,5);column(989,943,216,6);column(1244,943,216,6);
 rule(76,1060,1384,3);
 const fold=print.createLinearGradient(748,0,788,0);fold.addColorStop(0,'rgba(80,65,40,0)');fold.addColorStop(.48,'rgba(80,65,40,.06)');fold.addColorStop(.52,'rgba(255,255,255,.15)');fold.addColorStop(1,'rgba(80,65,40,0)');print.fillStyle=fold;print.fillRect(748,0,40,1120);
 const newsTexture=new T.CanvasTexture(newsCanvas);newsTexture.colorSpace=T.SRGBColorSpace;newsTexture.anisotropy=8;resources.textures.push(newsTexture);
 const newsPrint=new T.MeshStandardMaterial({map:newsTexture,roughness:1});resources.materials.push(newsPrint);
 mesh(news,new T.PlaneGeometry(1.53,1.12),newsPrint,0,-.07,.009);
 }
 const engineering=group('engineering',-2.6,2.61,-3.98),rocket=new T.Group();engineering.add(rocket);rocket.position.set(-.5,-.03,0);
 cyl(rocket,0,-.05,0,.17,.17,.86,ivory);cyl(rocket,0,.48,0,0,.17,.24,red);cyl(rocket,0,-.51,0,.15,.12,.12,brass);
 for(let i=0;i<3;i++){const fin=box(rocket,Math.cos(i*2.094)*.18,-.36,Math.sin(i*2.094)*.18,.12,.36,.19,red);fin.rotation.y=-i*2.094;fin.rotation.z=i===0?-.3:0;}
 const port=cyl(rocket,0,.12,.173,.09,.09,.025,brass);port.rotation.x=Math.PI/2;const window=cyl(rocket,0,.12,.19,.064,.064,.015,glass);window.rotation.x=Math.PI/2;
 const device=new T.Group();device.name='handheld-body';engineering.add(device);device.position.set(.43,-.07,.02);device.rotation.z=-.06;rounded(device,0,0,0,.58,.98,.18,ivory);rounded(device,0,.18,.107,.46,.36,.025,dark,.025);box(device,0,.18,.127,.32,.23,.015,green);box(device,-.14,-.19,.13,.19,.055,.025,black);box(device,-.14,-.19,.13,.055,.19,.025,black);for(const [x,y] of [[.14,-.17],[.22,-.27]]){const b=cyl(device,x,y,.14,.045,.045,.028,red);b.rotation.x=Math.PI/2;}for(let i=0;i<4;i++)box(device,.1+i*.035,-.39,.12,.015,.09,.01,dark);
 // A readable lit LCD with a tiny moving pixel scene, rather than a blank slab.
 const lcd=new T.MeshBasicMaterial({color:'#9eae6a'}),pixel=new T.MeshBasicMaterial({color:'#344d37'});resources.materials.push(lcd,pixel);
 const screen=box(device,0,.18,.14,.32,.23,.006,lcd);screen.name='handheld-screen';
 const game=new T.Group();game.name='handheld-game';device.add(game);
 for(let i=0;i<8;i++)box(game,-.14+i*.04,.085,.146,.034,.014,.004,pixel);
 const player=new T.Group();player.name='handheld-player';game.add(player);
 for(const [x,y,w,h] of [[0,0,.024,.024],[0,-.025,.04,.027],[-.018,-.047,.014,.02],[.018,-.047,.014,.02]])box(player,x,y,.147,w,h,.004,pixel);
 player.position.set(-.08,.16,0);
 for(let i=0;i<3;i++)box(game,.02+i*.038,.235+(i%2)*.018,.147,.018,.018,.004,pixel);
 const power=box(device,-.205,.18,.13,.014,.014,.008,red);power.name='handheld-power';
 engineering.userData.updateScreen=(time:number,motion:boolean)=>{const step=motion?Math.floor(time/350)%8:0;player.position.x=-.08+step*.021;player.position.y=.16+(motion&&step%4===2?.025:0);};
 const phone=group('contact',3.05,1.7,-1.93);rounded(phone,0,-.27,0,1,.29,.63,dark,.12);const dial=cyl(phone,0,-.08,.1,.25,.25,.045,brass,40);dial.rotation.x=.28;for(let i=0;i<10;i++){const a=i*Math.PI/5;cyl(phone,Math.sin(a)*.18,-.047,.1+Math.cos(a)*.18,.038,.038,.013,black,12);}for(const x of [-.37,.37])cyl(phone,x,.02,-.12,.045,.065,.3,brass);
 const receiver=group('receiver',3.05,1.7,-1.93);rod(receiver,v(-.35,.21,-.12),v(.35,.21,-.12),.075,dark);for(const x of [-.4,.4]){const ear=ball(receiver,x,.12,-.12,.145,dark);ear.scale.set(1,1,.9);cyl(receiver,x,.005,-.12,.12,.13,.04,brass);}const cordPoints=Array.from({length:81},(_,i)=>v(.45+.04*Math.sin(i*.9),.1-i*.008,-.1+.04*Math.cos(i*.9)));mesh(phone,new T.TubeGeometry(new T.CatmullRomCurve3(cordPoints),100,.016,6,false),black);
 const butler=group('butler',3.85,2.03,-2.95);const torso=cyl(butler,0,-.35,0,.33,.44,1.22,dark);torso.scale.z=.65;box(butler,0,-.24,.23,.29,.73,.03,ivory);for(const x of [-1,1]){rod(butler,v(x*.31,.1,0),v(x*.49,-.65,.12),.115,dark);ball(butler,x*.49,-.68,.12,.12,ivory);const bow=mesh(butler,new T.ConeGeometry(.1,.15,3),red,x*.073,.02,.28);bow.rotation.z=x*Math.PI/2;}cyl(butler,0,.32,0,.115,.13,.24,skin);const head=ball(butler,0,.66,0,.28,skin);head.scale.y=1.25;const hair=ball(butler,0,.84,-.04,.28,silver);hair.scale.set(1,.65,.85);for(const x of [-.1,.1])ball(butler,x,.68,.252,.025,black);const nose=ball(butler,0,.59,.275,.045,skin);nose.scale.y=1.4;rod(butler,v(-.08,.48,.25),v(.08,.48,.25),.012,dark);
 const lamp=group('lamp',6.05,1.8,-1.4);cyl(lamp,0,-.49,0,.27,.32,.065,brass);cyl(lamp,0,-.14,0,.027,.04,.7,brass);const shadeMaterial=mat('#d6c49a');shadeMaterial.side=T.DoubleSide;mesh(lamp,new T.CylinderGeometry(.27,.49,.52,40,1,true),shadeMaterial,0,.37,0);for(const y of [.11,.63]){const rim=mesh(lamp,new T.TorusGeometry(y===.11?.49:.27,.015,8,40),brass,0,y,0);rim.rotation.x=Math.PI/2;}const glow=mat('#fff0c4');glow.emissive=new T.Color('#ffc679');glow.emissiveIntensity=1.5;ball(lamp,0,.29,0,.095,glow);rod(lamp,v(.13,.2,0),v(.13,-.03,0),.008,brass);ball(lamp,.13,-.045,0,.024,brass);lamp.userData.switchPosition=v(.13,-.045,0);lamp.userData.bulb=glow;
 // The table stays in place when the lamp reacts to hover or selection.
 const table=new T.Group();scene.add(table);table.position.set(6.05,0,-1.4);cyl(table,0,1.22,0,.39,.39,.12,walnut,40);cyl(table,0,1.285,0,.38,.38,.015,brass,40);cyl(table,0,.67,0,.075,.12,1.05,walnut);for(let i=0;i<3;i++){const a=i*Math.PI*2/3;rod(table,v(0,.29,0),v(Math.cos(a)*.33,.08,Math.sin(a)*.33),.06,walnut);}
 const ladder=group('ladder',-6.02,2.48,-3.28);for(const x of [-.33,.33]){const rail=box(ladder,x,0,0,.065,4.65,.12,walnut);rail.rotation.x=-.085;box(ladder,x,0,.07,.018,4.65,.012,brass);const wheel=cyl(ladder,x,-2.35,.19,.105,.105,.07,black,20);wheel.rotation.z=Math.PI/2;const hub=cyl(ladder,x,-2.35,.19,.035,.035,.08,brass);hub.rotation.z=Math.PI/2;rod(ladder,v(x,2.22,-.18),v(x,2.43,-.23),.035,brass);}
 for(let i=0;i<10;i++){const y=-2.1+i*.45;box(ladder,0,y,-y*.085,.64,.065,.21,walnut);box(ladder,0,y+.037,-y*.085+.06,.58,.009,.055,brass);}
 return items;
}
