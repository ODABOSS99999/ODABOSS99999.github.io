import type {LedgerPoint} from './instagramLedger';

// Preserve observations, never infer totals from gross follows or fill missing dates.
export function mergeFollowerHistory(through:string,...sources:LedgerPoint[][]):LedgerPoint[]{
 const points=new Map<number,LedgerPoint>();
 const end=Date.parse(through);
 for(const source of sources)for(const point of source){
  const time=Date.parse(point.date);
  if(Number.isFinite(time)&&time<=end&&Number.isSafeInteger(point.count)&&point.count>=0)
   points.set(time,{date:new Date(time).toISOString(),count:point.count});
 }
 return [...points.entries()].sort(([a],[b])=>a-b).map(([,point])=>point);
}

export type FollowerChartPoint=LedgerPoint&{source?:'export'|'total'|'live'};

// Keep the two measurements intact: export records are not profile totals.
// Once profile observations begin, they take precedence over export records.
export function combinedFollowerHistory(through:string,exported:LedgerPoint[],totals:LedgerPoint[],liveAt?:string):FollowerChartPoint[]{
 const recorded=mergeFollowerHistory(through,totals);
 const first=recorded.length?Date.parse(recorded[0].date):Infinity;
 const history:FollowerChartPoint[]=mergeFollowerHistory(through,exported)
  .filter(point=>Date.parse(point.date)<first).map(point=>({...point,source:'export'}));
 return [...history,...recorded.map(point=>({...point,source:liveAt&&Date.parse(point.date)===Date.parse(liveAt)?'live' as const:'total' as const}))];
}
