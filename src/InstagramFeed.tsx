import { useEffect, useState } from 'react';
import Gallery from './Gallery';
import type { Photo } from './content';
import { instagramPortfolioUrl, selectInstagramPosts, validateSnapshot } from './instagram';
import type { InstagramSnapshot } from './instagram';
export default function InstagramFeed({mode='latest'}:{mode?:'latest'|'portfolio'|'favorites'}){
  const [snapshot,setSnapshot]=useState<InstagramSnapshot|null>(null),[loading,setLoading]=useState(true);
  useEffect(()=>{const controller=new AbortController();let live=true;fetch('/instagram/feed.json',{signal:controller.signal}).then(r=>{if(!r.ok)throw new Error('Snapshot unavailable');return r.json();}).then(validateSnapshot).then(data=>{if(live)setSnapshot(data);}).catch(()=>{/* Keep the profile link usable if a snapshot cannot load. */}).finally(()=>{if(live)setLoading(false);});return()=>{live=false;controller.abort();};},[]);
  const posts=selectInstagramPosts(snapshot?.posts||[],mode);
  const items:Photo[]=posts.map(p=>({id:`ig-${p.id}`,src:p.image.src,width:p.image.width,height:p.image.height,alt:`Instagram ${p.mediaType==='VIDEO'||p.mediaType==='REEL'?'reel cover':p.mediaType==='CAROUSEL_ALBUM'?'carousel cover':'photograph'} from @mcgowen_media, ${new Date(p.timestamp).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})}`,caption:p.caption,sourceUrl:p.permalink,sourceLabel:p.mediaType==='VIDEO'||p.mediaType==='REEL'?'Watch reel on Instagram':p.mediaType==='CAROUSEL_ALBUM'?'View full carousel on Instagram':'View post on Instagram'}));
  return <section className={`instagram-feed instagram-${mode}`} aria-label={mode==='latest'?'Latest Instagram post':mode==='portfolio'?'Instagram portfolio':'Favorite and pinned Instagram posts'}>
    {mode==='latest'&&<div className="instagram-heading"><div><p className="eyebrow">A NOTE FROM THE PRESENT</p><h2>Latest from <em>Instagram.</em></h2></div><a className="text-link" href="https://www.instagram.com/mcgowen_media/" target="_blank" rel="noreferrer">@mcgowen_media ↗</a></div>}
    {loading?<p className="instagram-loading" role="status">Opening the photographs…</p>:items.length?<><Gallery items={items} intimate={mode==='favorites'}/>{snapshot&&<p className="instagram-sync-note">Updated {new Date(snapshot.fetchedAt).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})} · {mode==='latest'?'Most recent post in the collection':'Selected photographs and post covers'}.</p>}</>:<div className="instagram-empty"><p>{mode==='portfolio'?'The collection continues on Instagram.':mode==='favorites'?'A selection worth a closer look.':'More from the studio, out in the world.'}</p><a className="text-link" href={mode==='portfolio'?instagramPortfolioUrl:'https://www.instagram.com/mcgowen_media/'} target="_blank" rel="noreferrer">{mode==='portfolio'?'Open the Instagram portfolio':'Visit @mcgowen_media'} ↗</a></div>}
  </section>;
}
