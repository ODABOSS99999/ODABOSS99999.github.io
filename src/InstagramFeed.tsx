import './instagram.css';
import Gallery from './Gallery';
import { instagramPortfolioUrl, instagramSelection } from './instagram';
import { useInstagramSnapshot } from './instagramMedia';
import { selectInstagramPhotos } from './instagram-curated';
export default function InstagramFeed({mode='latest'}:{mode?:'latest'|'portfolio'|'favorites'}){
  const {snapshot,loading}=useInstagramSnapshot();
  const items=selectInstagramPhotos(snapshot?.posts||[],mode);
  if(mode==='latest'&&items.some(item=>selectInstagramPhotos(snapshot?.posts||[],'portfolio').some(photo=>photo.sourceUrl===item.sourceUrl)))return null;
  if(mode==='latest'&&items.some(item=>selectInstagramPhotos(snapshot?.posts||[],'portfolio').some(photo=>photo.sourceUrl===item.sourceUrl)))return null;
  const recent=mode==='portfolio'&&instagramSelection.portfolioMode==='recent';
  return <section className={`instagram-feed instagram-${mode}`} aria-label={mode==='latest'?'Latest Instagram post':mode==='portfolio'?'Instagram portfolio':'Favorite and pinned Instagram posts'}>
    {mode==='latest'&&<div className="instagram-heading"><div><p className="eyebrow">A NOTE FROM THE PRESENT</p><h2>Latest from <em>Instagram.</em></h2></div><a className="text-link" href="https://www.instagram.com/mcgowen_media/" target="_blank" rel="noreferrer">@mcgowen_media ↗</a></div>}
    {loading?<p className="instagram-loading" role="status">Opening the photographs…</p>:items.length?<><Gallery items={items} intimate={mode==='favorites'}/>{snapshot&&<p className="instagram-sync-note">Images imported {new Date(snapshot.fetchedAt).toLocaleDateString('en-US',{month:'long',day:'numeric',year:'numeric'})} · {mode==='latest'?'Most recent post in the collection':recent?'Most recent Instagram posts':'Selected photographs and post covers'}. Counts show their last check; promoted or cross-posted totals can differ.</p>}</>:<div className="instagram-empty"><p>{mode==='portfolio'?'The collection continues on Instagram.':mode==='favorites'?'A selection worth a closer look.':'More from the studio, out in the world.'}</p><a className="text-link" href={mode==='portfolio'&&!recent?instagramPortfolioUrl:'https://www.instagram.com/mcgowen_media/'} target="_blank" rel="noreferrer">{mode==='portfolio'&&!recent?'Open the Instagram portfolio':'Visit @mcgowen_media'} ↗</a></div>}
  </section>;
}
