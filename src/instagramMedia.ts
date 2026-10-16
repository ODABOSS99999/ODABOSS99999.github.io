import { useEffect, useState } from 'react';
import { validateSnapshot } from './instagram';
import type { InstagramPost, InstagramSnapshot } from './instagram';
import type { Photo } from './content';
let request:Promise<InstagramSnapshot>|null=null;
export function loadInstagramSnapshot(){
 if(!request)request=fetch('/instagram/feed.json').then(r=>{if(!r.ok)throw new Error('Instagram images unavailable');return r.json();}).then(validateSnapshot).catch(e=>{request=null;throw e;});
 return request;
}
export function useInstagramSnapshot(){
 const [snapshot,setSnapshot]=useState<InstagramSnapshot|null>(null),[loading,setLoading]=useState(true);
 useEffect(()=>{let live=true;loadInstagramSnapshot().then(s=>{if(live)setSnapshot(s);}).catch(()=>{}).finally(()=>{if(live)setLoading(false);});return()=>{live=false;};},[]);
 return {snapshot,loading};
}
export function instagramPhoto(p:InstagramPost):Photo{
 const date=new Date(p.timestamp).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'});
 return{id:`ig-${p.id}`,src:p.image.src,width:p.image.width,height:p.image.height,alt:`${p.mediaType==='IMAGE'?'Photograph':p.mediaType==='CAROUSEL_ALBUM'?'Carousel cover':'Video cover'} from @mcgowen_media, ${date}`,caption:p.caption,sourceUrl:p.permalink,sourceLabel:p.mediaType==='VIDEO'||p.mediaType==='REEL'?'Watch reel on Instagram':p.mediaType==='CAROUSEL_ALBUM'?'View full carousel on Instagram':'View post on Instagram'};
}
export const sectionImageIds={
 about:['18119889931954458','18221320804356544','18111604349466809'],
 published:['18111604349466809','17883850254502684','18339773350248090','18579922954075231'],
 engineering:['17883850254502684','17994026724028663','18105631976166091','18133367926647764'],
 contact:['18221320804356544'],
};
