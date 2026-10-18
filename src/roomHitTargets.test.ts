import * as T from 'three';
import {describe,expect,it} from 'vitest';
import {makeHitTargets,opaqueAt,pickRoomItem} from './roomHitTargets';
describe('stable room hover targets',()=>{
 it('keeps hover at the resting object pose while decorative animation moves the art',()=>{const group=new T.Group(),mesh=new T.Mesh(new T.PlaneGeometry(),new T.MeshBasicMaterial());group.position.x=2;group.add(mesh);group.updateMatrixWorld(true);const hits=makeHitTargets(new Map([['photography',group]]));group.position.x=3;group.updateMatrixWorld(true);expect(new T.Vector3().setFromMatrixPosition(hits.targets[0].matrixWorld).x).toBe(2);});
 it('exposes the rocket and Game Boy through one semantic target',()=>{const group=new T.Group();for(let i=0;i<2;i++)group.add(new T.Mesh(new T.PlaneGeometry(),new T.MeshBasicMaterial()));group.updateMatrixWorld(true);expect(makeHitTargets(new Map([['engineering',group]])).targets.map(t=>t.userData.id)).toEqual(['engineering','engineering']);});
 it('does not capture transparent pixels around an illustrated item',()=>{const canvas=document.createElement('canvas');canvas.width=2;canvas.height=1;const texture=new T.Texture(canvas);texture.userData.hitPixels=new Uint8ClampedArray([0,0,0,0,255,255,255,255]);expect(opaqueAt(texture,new T.Vector2(.1,.5))).toBe(false);expect(opaqueAt(texture,new T.Vector2(.9,.5))).toBe(true);});
 it('lets hover pass through the transparent turntable lid',()=>{const group=new T.Group();group.add(new T.Mesh(new T.BoxGeometry(),new T.MeshBasicMaterial({transparent:true,opacity:.13})));group.updateMatrixWorld(true);expect(makeHitTargets(new Map([['record',group]])).targets).toHaveLength(0);});
});

 describe('visible scene picking',()=>{
  it('tracks resized camera projections, moving objects and newly loaded geometry',()=>{
   const scene=new T.Scene(),group=new T.Group();scene.add(group);
   const items=new Map([['photography',group]]),camera=new T.PerspectiveCamera(57,1,.1,100),ray=new T.Raycaster();camera.position.z=6;
   const mesh=new T.Mesh(new T.BoxGeometry(),new T.MeshBasicMaterial());group.add(mesh);
   for(const aspect of [0.46,0.75,1,1.78,2.4]){
    camera.aspect=aspect;camera.updateProjectionMatrix();camera.updateMatrixWorld();group.position.x=aspect/2;scene.updateMatrixWorld(true);
    const projected=group.position.clone().project(camera);ray.setFromCamera(new T.Vector2(projected.x,projected.y),camera);
    expect(pickRoomItem(ray,scene,items)?.id).toBe('photography');
   }
  });
  it('blocks selections through furniture and ignores hidden objects',()=>{
   const scene=new T.Scene(),group=new T.Group(),material=new T.MeshBasicMaterial();group.add(new T.Mesh(new T.BoxGeometry(),material));scene.add(group);
   const blocker=new T.Mesh(new T.BoxGeometry(),material);blocker.position.z=2;scene.add(blocker);scene.updateMatrixWorld(true);
   const ray=new T.Raycaster(new T.Vector3(0,0,6),new T.Vector3(0,0,-1)),items=new Map([['about',group]]);
   expect(pickRoomItem(ray,scene,items)).toBeNull();blocker.visible=false;
   expect(pickRoomItem(ray,scene,items)?.id).toBe('about');group.visible=false;expect(pickRoomItem(ray,scene,items)).toBeNull();
  });
 });
