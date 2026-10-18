import * as T from 'three';
import {describe,expect,it} from 'vitest';
import {createRoomObjects} from './roomObjects3D';
const setup=()=>createRoomObjects(new T.Scene(),{geometries:[],materials:[],textures:[]});
describe('shelf models',()=>{
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
  const cameraSize=new T.Box3().setFromObject(camera).getSize(new T.Vector3());
  const handheldSize=new T.Box3().setFromObject(items.get('engineering')!.getObjectByName('handheld-body')!).getSize(new T.Vector3());
  expect(cameraSize.y/handheldSize.y).toBeGreaterThan(.5);
  expect(cameraSize.y/handheldSize.y).toBeLessThan(.75);
  expect(cameraSize.x/handheldSize.x).toBeGreaterThan(1.3);
  expect(cameraSize.x/handheldSize.x).toBeLessThan(1.8);
  expect(camera.getObjectByName('camera-body')!.rotation.y).toBeGreaterThan(0);
  expect(new T.Box3().setFromObject(camera).min.y).toBeCloseTo(3.62,3);
 });
});

