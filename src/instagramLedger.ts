import type {InstagramPost} from './instagram';
import {partnershipReviews} from './instagramPartnershipReviews';
export type LedgerPoint={date:string;count:number};
export const followerRatingsPreferenceEvent='instagram-follower-ratings-change';
export function readFollowerRatingsPreference():boolean{
 try{return localStorage.getItem('instagram-include-follower-ratings')==='true';}catch{return false;}
}
export function isFollowerRating(post:Pick<InstagramPost,'caption'>):boolean{
 return /rating\s+(?:my\s+followers[’']?\s+photography|@?[\w.]+(?:[’']s|\s+s)?\s+photography)/i.test(post.caption);
}
export function monthlyPosts(posts:Pick<InstagramPost,'id'|'timestamp'>[],through:string):LedgerPoint[]{
 const totals=new Map<string,number>(),seen=new Set<string>();
 for(const p of posts){if(seen.has(p.id)||!Number.isFinite(Date.parse(p.timestamp)))continue;seen.add(p.id);const month=p.timestamp.slice(0,7);totals.set(month,(totals.get(month)||0)+1);}
 const first=[...totals.keys()].sort()[0];if(!first)return [];
 const cursor=new Date(first+'-01T12:00:00Z'),end=through.slice(0,7),points:LedgerPoint[]=[];
 while(cursor.toISOString().slice(0,7)<=end){const month=cursor.toISOString().slice(0,7);points.push({date:month+'-01',count:totals.get(month)||0});cursor.setUTCMonth(cursor.getUTCMonth()+1);}
 return points;
}
export function classifyPartnership(post:Pick<InstagramPost,'caption'> & {id?:string}):{kind:'partnership'|'personal';reason:string}{
 if(post.id&&partnershipReviews[post.id])return partnershipReviews[post.id];
 const c=post.caption.toLowerCase();
 if(/waterway|market\s*street|noob\s*(vs|versus)\s*pro|camera\s*swap|safierninja|car go vroom/.test(c))return {kind:'personal',reason:'Personal / friends / casual car photography'};
 if(/concert|ellaboh|ella boh|blurrytour|hound tour|hey,? nothing|kencarson|xperimenting|themanthemyth|live.?music/.test(c))return {kind:'partnership',reason:'Concert / artist photography'};
 if(/product\s*(shoot|photo|work)|commercialphotography|productphotography|shot for|twistedpendant|air\s*force|airforce|usaf|mercuryutd|utdmercury|photojournalism/.test(c))return {kind:'partnership',reason:'Product / organization / editorial photography'};
 if(/wildlife|naturephotography|squirrel|🐿|🐦|🌹|nightphotography|life recently|my camera|studying|meow|first camera|creative shots|noob vs pro/.test(c))return {kind:'personal',reason:'Personal / nature / travel photography'};
 return {kind:'partnership',reason:'Included by owner preference when external collaboration is uncertain; this is not confirmation of a formal partnership.'};
}
export function cumulativePosts(posts:Pick<InstagramPost,'id'|'timestamp'>[]):LedgerPoint[]{
 const seen=new Set<string>(),days=new Map<string,number>();
 for(const p of posts){if(seen.has(p.id)||!Number.isFinite(Date.parse(p.timestamp)))continue;seen.add(p.id);const d=p.timestamp.slice(0,10);days.set(d,(days.get(d)||0)+1);}
 let total=0;return [...days].sort(([a],[b])=>a.localeCompare(b)).map(([date,n])=>({date,count:total+=n}));
}

