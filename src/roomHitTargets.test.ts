import * as T from 'three';
import {describe,expect,it} from 'vitest';
import {makeHitTargets,opaqueAt} from './roomHitTargets';
describe('stable room hover targets',()=>{
 it('keeps hover at the resting object pose while decorative animation moves the art',()=>{const group=new T.Group(),mesh=new T.Mesh(new T.PlaneGeometry(),new T.MeshBasicMaterial());group.position.x=2;group.add(mesh);group.updateMatrixWorld(true);const hits=makeHitTargets(new Map([['photography',group]]));group.position.x=3;group.updateMatrixWorld(true);expect(new T.Vector3().setFromMatrixPosition(hits.targets[0].matrixWorld).x).toBe(2);});
 it('exposes the rocket and Game Boy through one semantic target',()=>{const group=new T.Group();for(let i=0;i<2;i++)group.add(new T.Mesh(new T.PlaneGeometry(),new T.MeshBasicMaterial()));group.updateMatrixWorld(true);expect(makeHitTargets(new Map([['engineering',group]])).targets.map(t=>t.userData.id)).toEqual(['engineering','engineering']);});
 it('does not capture transparent pixels around an illustrated item',()=>{const canvas=document.createElement('canvas');canvas.width=2;canvas.height=1;const texture=new T.Texture(canvas);texture.userData.hitPixels=new Uint8ClampedArray([0,0,0,0,255,255,255,255]);expect(opaqueAt(texture,new T.Vector2(.1,.5))).toBe(false);expect(opaqueAt(texture,new T.Vector2(.9,.5))).toBe(true);});
 it('lets hover pass through the transparent turntable lid',()=>{const group=new T.Group();group.add(new T.Mesh(new T.BoxGeometry(),new T.MeshBasicMaterial({transparent:true,opacity:.13})));group.updateMatrixWorld(true);expect(makeHitTargets(new Map([['record',group]])).targets).toHaveLength(0);});
});
