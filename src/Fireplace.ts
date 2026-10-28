import * as T from 'three';
import type { RoomResources } from './luxuryRoom';

export function createFireplace(scene:T.Scene,{geometries,materials}:RoomResources){
 const body=new T.Group();body.position.set(-6.35,0,-2);body.rotation.y=Math.PI/2;body.userData.id='fireplace';scene.add(body);
 const mat=(color:string)=>{const m=new T.MeshStandardMaterial({color,roughness:.9});materials.push(m);return m;};
 const stone=mat('#b4a58c'),trim=mat('#d2c4a7'),soot=mat('#171411'),iron=mat('#302923'),log=mat('#493021');
 const box=(x:number,y:number,z:number,w:number,h:number,d:number,m:T.Material)=>{const g=new T.BoxGeometry(w,h,d);geometries.push(g);const mesh=new T.Mesh(g,m);mesh.position.set(x,y,z);body.add(mesh);return mesh;};
 box(0,.12,.15,2.9,.24,1.2,stone);
 box(0,1.05,-.24,2.55,1.9,.18,soot);
 for(const x of [-1.08,1.08]){box(x,1.1,.03,.42,1.9,.7,stone);box(x,.3,.09,.54,.18,.82,trim);box(x,1.92,.09,.54,.15,.82,trim);}
 box(0,2.1,.05,2.6,.3,.78,stone);box(0,2.32,.1,2.92,.15,.98,trim);
 for(const y of [.65,1.08,1.51])for(const x of [-1.08,1.08])box(x,y,.386,.43,.018,.012,soot);
 for(const x of [-.53,0,.53]){const g=new T.CylinderGeometry(.12,.15,1.25,9);geometries.push(g);const mesh=new T.Mesh(g,log);mesh.rotation.z=Math.PI/2;mesh.rotation.y=x*.7;mesh.position.set(x*.5,.4,.16+x*.25);body.add(mesh);}
 const flames=new T.Group();body.add(flames);
 const outer=new T.MeshBasicMaterial({color:'#f57821',transparent:true,opacity:.85,depthWrite:false,side:T.DoubleSide});
 const inner=new T.MeshBasicMaterial({color:'#ffe29a',transparent:true,opacity:.95,depthWrite:false,side:T.DoubleSide});materials.push(outer,inner);
 const tongues:T.Group[]=[];
 for(let i=0;i<7;i++){
  const tongue=new T.Group();tongue.position.set((i-3)*.19,.43,.24+(i%2)*.08);flames.add(tongue);tongues.push(tongue);
  const shape=new T.Shape();shape.moveTo(-.14,0);shape.bezierCurveTo(-.27,.25,.04,.39,.02,.73);shape.bezierCurveTo(.26,.4,.2,.12,.14,0);shape.closePath();
  const geo=new T.ShapeGeometry(shape);geometries.push(geo);tongue.add(new T.Mesh(geo,outer));const core=new T.Mesh(geo,inner);core.scale.set(.48,.62,1);core.position.z=.015;tongue.add(core);
 }
 const embers=new T.MeshStandardMaterial({color:'#9c3920',emissive:'#ff5215',emissiveIntensity:1.5});materials.push(embers);
 box(0,.28,.22,1.6,.06,.48,embers);
 for(const x of [-.75,-.45,-.15,.15,.45,.75])box(x,.49,.56,.035,.46,.035,iron);
 box(0,.68,.56,1.65,.045,.045,iron);
 const glow=new T.PointLight('#ff9c46',5,7,2);glow.position.set(0,1,.8);body.add(glow);
 let lit=true;
 return {body,toggle:()=>{lit=!lit;return lit;},update:(time:number,motion:boolean)=>{flames.visible=lit;const t=motion?time/1000:0;glow.intensity=lit?4.5+(motion?Math.sin(t*7)*.35+Math.sin(t*11)*.2:0):0;embers.emissiveIntensity=lit?1.5:0;tongues.forEach((f,i)=>{f.scale.y=.65+(i%3)*.18+(motion?Math.sin(t*5+i*2)*.16:0);f.rotation.z=motion?Math.sin(t*3+i)*.09:0;});}};
}

