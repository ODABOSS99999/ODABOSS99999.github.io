import type {InstagramPost} from './instagram';
import {partnershipReviews} from './instagramPartnershipReviews';
export type LedgerPoint={date:string;count:number};
export function classifyPartnership(post:Pick<InstagramPost,'caption'> & {id?:string}):{kind:'partnership'|'personal'|'unreviewed';reason:string}{
 if(post.id&&partnershipReviews[post.id])return {...partnershipReviews[post.id],reason:'AI-reviewed: '+partnershipReviews[post.id].reason};
 const c=post.caption.toLowerCase();
 if(/waterway|market\s*street|noob\s*(vs|versus)\s*pro|camera\s*swap|safierninja|car go vroom/.test(c))return {kind:'personal',reason:'Personal / friends / casual car photography'};
 if(/concert|ellaboh|ella boh|blurrytour|hound tour|hey,? nothing|kencarson|xperimenting|themanthemyth|live.?music/.test(c))return {kind:'partnership',reason:'Concert / artist photography'};
 if(/product\s*(shoot|photo|work)|commercialphotography|productphotography|shot for|twistedpendant|air\s*force|airforce|usaf|mercuryutd|utdmercury|photojournalism/.test(c))return {kind:'partnership',reason:'Product / organization / editorial photography'};
 if(/wildlife|naturephotography|squirrel|🐿|🐦|🌹|nightphotography|life recently|my camera|studying|meow|first camera|creative shots|noob vs pro/.test(c))return {kind:'personal',reason:'Personal / nature / travel photography'};
 return {kind:'unreviewed',reason:'Caption does not establish the subject; review needed'};
}
export function cumulativePosts(posts:Pick<InstagramPost,'id'|'timestamp'>[]):LedgerPoint[]{
 const seen=new Set<string>(),days=new Map<string,number>();
 for(const p of posts){if(seen.has(p.id)||!Number.isFinite(Date.parse(p.timestamp)))continue;seen.add(p.id);const d=p.timestamp.slice(0,10);days.set(d,(days.get(d)||0)+1);}
 let total=0;return [...days].sort(([a],[b])=>a.localeCompare(b)).map(([date,n])=>({date,count:total+=n}));
}

