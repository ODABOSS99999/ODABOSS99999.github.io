import * as T from 'three';
import {describe,expect,it} from 'vitest';
import {createSpiralElevator,createTurntable} from './luxuryRoom';
describe('working turntable',()=>{
 it('spins the platter and lowers the arm while playing, then returns the arm when paused',()=>{
  const scene=new T.Scene(),resources={geometries:[] as T.BufferGeometry[],materials:[] as T.Material[]};
  const player=createTurntable(scene,resources),platter=player.body.getObjectByName('record-platter')!,arm=player.body.getObjectByName('record-tonearm')!;
  player.update(0,false,true);const restingArm=arm.rotation.y;
  for(let t=16;t<=2000;t+=16)player.update(t,true,true);
  expect(platter.rotation.y).toBeLessThan(-1);expect(arm.rotation.y).toBeLessThan(restingArm-.5);
  for(let t=2016;t<=5000;t+=16)player.update(t,false,true);
  expect(arm.rotation.y).toBeCloseTo(restingArm,2);
  const stopped=platter.rotation.y;player.update(5016,false,true);expect(Math.abs(platter.rotation.y-stopped)).toBeLessThan(.001);
  resources.geometries.forEach(g=>g.dispose());resources.materials.forEach(m=>m.dispose());
 });

 it('builds a full-height stair around a gently moving elevator car',()=>{
  const tower=createSpiralElevator(new T.Scene(),{geometries:[],materials:[]});
  const steps=tower.tower.children.filter(child=>child.name==='spiral-stair-step');
  const shaft=tower.tower.getObjectByName('elevator-shaft')!;
  expect(steps).toHaveLength(38);
  expect(shaft.position.y).toBeCloseTo(3.98);
  const start=tower.car.position.y;
  tower.update(8000,true);
  expect(tower.car.position.y).not.toBeCloseTo(start,2);
  expect(tower.car.position.y).toBeGreaterThan(.6);
  tower.update(8000,false);
  expect(tower.car.position.y).toBeCloseTo(.6);
 });
 it('keeps the disc still when reduced motion is requested',()=>{
  const player=createTurntable(new T.Scene(),{geometries:[],materials:[]}),platter=player.body.getObjectByName('record-platter')!;
  player.update(0,true,false);player.update(1000,true,false);expect(platter.rotation.y).toBe(0);
 });
});
