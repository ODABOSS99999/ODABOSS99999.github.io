import * as T from 'three';
import {describe,expect,it} from 'vitest';
import {createRoomObjects} from './roomObjects3D';
import {createFireplace} from './Fireplace';
import {shelfLadderBounds} from './ShelfLadder';
const setup=()=>createRoomObjects(new T.Scene(),{geometries:[],materials:[],textures:[]});
describe('shelf models',()=>{
 it('grounds the ladder wheels and keeps them clear of the hearth throughout travel',()=>{
  const scene=new T.Scene(),resources={geometries:[],materials:[],textures:[]};
  const ladder=createRoomObjects(scene,resources).get('ladder')!,fireplace=createFireplace(scene,resources).body;
  const wheels=ladder.children.filter(child=>child.name==='ladder-wheel');
  expect(wheels).toHaveLength(2);
  fireplace.updateWorldMatrix(true,true);
  const hearth=fireplace.children.filter(child=>child instanceof T.Mesh&&child.position.y<.22);
  expect(hearth).toHaveLength(2);
  for(const x of [shelfLadderBounds.min,shelfLadderBounds.max]){
   ladder.position.x=x;ladder.updateWorldMatrix(true,true);
   for(const wheel of wheels){
    const bounds=new T.Box3().setFromObject(wheel);
    expect(bounds.min.y).toBeCloseTo(-.02,6);
    const axle=new T.Vector3(0,1,0).applyQuaternion(wheel.quaternion);
    expect(Math.abs(axle.z)).toBeCloseTo(1,6);
    for(const stone of hearth)expect(bounds.min.x).toBeGreaterThan(new T.Box3().setFromObject(stone).max.x);
   }
  }
 });
 it('rests both portrait frames and their easels directly on their shelves',()=>{
  const items=setup();
  for(const [id,height] of [['about',3.62],['favorites',2.02]] as const){
   const group=items.get(id)!;group.updateWorldMatrix(true,true);
   for(const mount of group.userData.photoMounts as T.Group[])expect(new T.Box3().setFromObject(mount).min.y).toBeCloseTo(height,6);
  }
 });
 it('shows a lit pixel game and freezes it for reduced motion',()=>{
  const engineering=setup().get('engineering')!,screen=engineering.getObjectByName('handheld-screen') as T.Mesh,player=engineering.getObjectByName('handheld-player')!;
  expect(screen.material).toBeInstanceOf(T.MeshBasicMaterial);
  engineering.userData.updateScreen(0,true);const start=player.position.clone();
  engineering.userData.updateScreen(700,true);expect(player.position.equals(start)).toBe(false);
  engineering.userData.updateScreen(700,false);expect(player.position.equals(start)).toBe(true);
  engineering.userData.updateScreen(9000,false);expect(player.position.equals(start)).toBe(true);
 });
 it('keeps the inward-facing camera grounded',()=>{
  const items=setup(),camera=items.get('photography')!;camera.updateWorldMatrix(true,true);
  const cameraSize=new T.Box3().setFromObject(camera.getObjectByName('camera-body')!).getSize(new T.Vector3());
  const handheldSize=new T.Box3().setFromObject(items.get('engineering')!.getObjectByName('handheld-body')!).getSize(new T.Vector3());
  expect(cameraSize.y/handheldSize.y).toBeGreaterThan(.5);
  expect(cameraSize.y/handheldSize.y).toBeLessThan(.75);
  expect(cameraSize.x/handheldSize.x).toBeGreaterThan(1.3);
  expect(cameraSize.x/handheldSize.x).toBeLessThan(1.8);
  expect(camera.getObjectByName('camera-body')!.rotation.y).toBeGreaterThan(0);
  expect(new T.Box3().setFromObject(camera).min.y).toBeCloseTo(3.62,3);
 });
});

