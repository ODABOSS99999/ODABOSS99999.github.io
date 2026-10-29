// Keep the left wheel clear of the fireplace hearth, including its outer tread.
export const shelfLadderBounds={min:-5.35,max:1.9} as const;

/** Travel completes before opening the selected shelf item. A newer selection replaces the old one. */
export class ShelfLadder {
 x:number=shelfLadderBounds.max;
 target:number=shelfLadderBounds.max;
 private trip:{from:number;start:number;duration:number;destination:string|null}|null=null;
 constructor(private arrive:(destination:string)=>void){}
 move(destination:string|null,target:number,now:number,motion:boolean){
  target=Math.min(shelfLadderBounds.max,Math.max(shelfLadderBounds.min,target));
  this.target=target;
  if(!motion){this.trip=null;this.x=target;if(destination)this.arrive(destination);return;}
  this.trip={from:this.x,start:now,duration:Math.min(1400,Math.max(650,Math.abs(target-this.x)*170)),destination};
 }
 update(now:number,motion:boolean){
  if(!this.trip)return;
  const trip=this.trip,p=motion?Math.max(0,Math.min(1,(now-trip.start)/trip.duration)):1;
  const ease=p*p*(3-2*p);
  this.x=trip.from+(this.target-trip.from)*ease;
  if(p===1){this.trip=null;this.x=this.target;if(trip.destination)this.arrive(trip.destination);}
 }
 get moving(){return this.trip!==null;}
}
