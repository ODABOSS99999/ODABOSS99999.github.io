import {afterEach,describe,expect,it,vi} from 'vitest';
import {RoomAudio} from './audio';

function fixture(){
 const parameter=()=>({value:0,cancelScheduledValues:vi.fn(),setTargetAtTime:vi.fn(function(this:{value:number},value:number){this.value=value;}),setValueAtTime:vi.fn(),linearRampToValueAtTime:vi.fn(),exponentialRampToValueAtTime:vi.fn()});
 const node=()=>({connect:vi.fn(),disconnect:vi.fn()});
 const source=()=>({...node(),start:vi.fn(),stop:vi.fn(),onended:null as null|(()=>void),frequency:parameter(),loop:false});
 const gains:ReturnType<typeof gain>[]=[],sources:ReturnType<typeof source>[]=[],tones:ReturnType<typeof source>[]=[],filters:ReturnType<typeof filter>[]=[],buffers:Float32Array[]=[];
 function gain(){return {...node(),gain:parameter()};}
 function filter(){return {...node(),frequency:parameter(),Q:parameter(),type:''};}
 const context={state:'suspended',currentTime:10,sampleRate:8000,destination:{},
  createGain:vi.fn(()=>{const value=gain();gains.push(value);return value;}),
  createOscillator:vi.fn(()=>{const value=source();tones.push(value);return value;}),
  createBufferSource:vi.fn(()=>{const value=source();sources.push(value);return value;}),
  createBiquadFilter:vi.fn(()=>{const value=filter();filters.push(value);return value;}),
  createBuffer:vi.fn((_channels:number,length:number)=>{const samples=new Float32Array(length);buffers.push(samples);return {getChannelData:()=>samples};}),
  resume:vi.fn(async()=>{context.state='running';}),suspend:vi.fn(async()=>{context.state='suspended';}),close:vi.fn(async()=>{context.state='closed';})};
 const construct=vi.fn(function(){return context;});vi.stubGlobal('AudioContext',construct);
 return {audio:new RoomAudio(),context,construct,gains,sources,tones,filters,buffers};
}
afterEach(()=>vi.unstubAllGlobals());
describe('room music loop',()=>{
 it('starts a full, audible original melody-and-chord loop after audio is unlocked',async()=>{
  const f=fixture();await f.audio.start(.5);
  const music=f.sources[0]!,samples=f.buffers[0]!;
  expect(music.loop).toBe(true);expect(music.start).toHaveBeenCalledOnce();
  expect(samples).toHaveLength(102400);
  expect(samples[0]).toBe(0);
  expect(samples.reduce((peak,sample)=>Math.max(peak,sample),0)).toBeGreaterThan(.2);
  expect(samples.reduce((trough,sample)=>Math.min(trough,sample),0)).toBeLessThan(-.2);
  expect(Math.abs(samples[samples.length-1]!)).toBeLessThan(.001);
  expect(f.context.resume).toHaveBeenCalledOnce();
  expect(f.gains[0]!.gain.setTargetAtTime).toHaveBeenCalledWith(.5,10,.08);
  await f.audio.dispose();
 });
});
describe('room sound effects',()=>{
 it('does not unlock audio and produces no effects while suspended or muted',async()=>{
  const f=fixture();f.audio.effect('ring');expect(f.construct).not.toHaveBeenCalled();
  await f.audio.start(.5);await f.audio.pause();
  const before=f.context.createGain.mock.calls.length;
  for(const effect of ['ring','pickup','whoosh'] as const)f.audio.effect(effect);
  expect(f.context.createGain).toHaveBeenCalledTimes(before);expect(f.context.resume).toHaveBeenCalledTimes(1);
  await f.audio.start(0);
  for(const effect of ['ring','pickup','whoosh'] as const)f.audio.effect(effect);
  expect(f.context.createGain).toHaveBeenCalledTimes(before);
  await f.audio.dispose();
 });
 it('limits repeated rings to one per two seconds without suppressing pickup',async()=>{
  const f=fixture();await f.audio.start(.5);const before=f.tones.length;
  f.audio.effect('ring');expect(f.tones.length-before).toBe(2);
  f.context.currentTime=11.99;f.audio.effect('ring');expect(f.tones.length-before).toBe(2);
  const sources=f.sources.length;f.audio.effect('pickup');expect(f.sources.length).toBe(sources+1);
  f.context.currentTime=12;f.audio.effect('ring');expect(f.tones.length-before).toBe(4);
  await f.audio.dispose();
 });
 it('routes whoosh through volume control and stops and disconnects its temporary nodes',async()=>{
  const f=fixture();await f.audio.start(.5);f.audio.effect('whoosh');
  const source=f.sources.at(-1)!,filter=f.filters.at(-1)!,envelope=f.gains.at(-1)!;
  expect(envelope.connect).toHaveBeenCalledWith(f.gains[0]);
  expect(source.start).toHaveBeenCalledWith(10);expect(source.stop).toHaveBeenCalledWith(10.55);
  expect(source.connect).toHaveBeenCalledWith(filter);expect(filter.connect).toHaveBeenCalledWith(envelope);
  source.onended!();
  for(const part of [source,filter,envelope])expect(part.disconnect).toHaveBeenCalledOnce();
  await f.audio.dispose();
 });
});
