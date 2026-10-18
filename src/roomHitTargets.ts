import * as T from 'three';
/** Hit shapes stay at their resting pose so small decorative movements cannot flicker the hover. */
export function makeHitTargets(items:Map<string,T.Group>){
 const targets:T.Mesh[]=[],moving:{source:T.Mesh;target:T.Mesh}[]=[];
 for(const [id,group] of items){if(id==='notes')continue;group.traverse(o=>{if(!(o instanceof T.Mesh))return;const mat=o.material as T.Material;if(mat.transparent&&mat.opacity<.2)return;const target=new T.Mesh(o.geometry,o.material);target.matrixAutoUpdate=false;target.matrixWorld.copy(o.matrixWorld);target.userData.id=id;targets.push(target);if(id==='ladder')moving.push({source:o,target});});}
 return{targets,updateMoving:()=>moving.forEach(({source,target})=>target.matrixWorld.copy(source.matrixWorld))};
}
export function opaqueAt(texture:T.Texture|undefined,uv:T.Vector2|undefined){
 if(!texture||!uv)return true;
 const image=texture.image;if(!(image instanceof HTMLCanvasElement))return true;
 const pixels=texture.userData.hitPixels as Uint8ClampedArray|undefined;
 if(!pixels)return false;
 const x=T.MathUtils.clamp(Math.floor(uv.x*image.width),0,image.width-1),y=T.MathUtils.clamp(Math.floor((1-uv.y)*image.height),0,image.height-1);
 return pixels[(y*image.width+x)*4+3]>=30;
}

/** Pick the nearest visible surface, including furniture that occludes an item. */
export function pickRoomItem(ray:T.Raycaster,scene:T.Scene,items:Map<string,T.Group>){
 const owners=new Map<T.Object3D,string>([...items].filter(([id])=>id!=='notes').map(([id,group])=>[group,id]));
 for(const hit of ray.intersectObjects(scene.children,true)){
  if(!(hit.object instanceof T.Mesh))continue;
  let visible=true;for(let node:T.Object3D|null=hit.object;node;node=node.parent)if(!node.visible)visible=false;
  if(!visible)continue;
  const material=Array.isArray(hit.object.material)?hit.object.material[hit.face?.materialIndex??0]:hit.object.material;
  if(!material.visible||(material.transparent&&material.opacity<.2))continue;
  const surface=material as T.MeshBasicMaterial;
  if(!opaqueAt(surface.map||undefined,hit.uv))continue;
  for(let node:T.Object3D|null=hit.object;node;node=node.parent){const id=owners.get(node);if(id)return{id,x:hit.point.x};}
  return null;
 }
 return null;
}
