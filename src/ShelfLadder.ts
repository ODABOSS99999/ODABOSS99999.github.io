/** Travel completes before opening the selected shelf item. A newer selection replaces the old one. */
export class ShelfLadder {
 x=-6.02;
 target=-6.02;
 private trip:{from:number;start:number;duration:number;destination:string|null}|null=null;
 constructor(private arrive:(destination:string)=>void){}
 move(destination:string|null,target:number,now:number,motion:boolean){
  this.target=target;
  if(!motion){this.trip=null;this.x=target;if(destination)this.arrive(destination);return;}
  this.trip={from:this.x,start:now,duration:Math.min(1400,Math.max(650,Math.abs(target-this.x)*170)),destination};
 }
 update(now:number,motion:boolean){
  if(!this.trip)return;
  const trip=this.trip,p=motion?Math.min(1,(now-trip.start)/trip.duration):1;
  const held=p===1?1:Math.floor(p*24)/24,ease=held*held*(3-2*held);
  this.x=trip.from+(this.target-trip.from)*ease;
  if(p===1){this.trip=null;this.x=this.target;if(trip.destination)this.arrive(trip.destination);}
 }
 get moving(){return this.trip!==null;}
}
