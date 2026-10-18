import type {Photo} from './content';
import PhotoMetrics from './PhotoMetrics';
import ExportAlbum from './ExportAlbum';
import './postDetails.css';

export default function PostDetails({photo,hideSource=false}:{photo:Photo;hideSource?:boolean}){
 const instagram=photo.sourceUrl?.startsWith('https://www.instagram.com/');
 const mentions=[...new Set(Array.from((photo.caption||'').matchAll(/(?:^|[^\w@])@([a-zA-Z0-9_]+(?:\.[a-zA-Z0-9_]+)*)/g),match=>match[1].toLowerCase()))].filter(handle=>handle!=='mcgowen_media');
 return <div className="post-details">
  <ExportAlbum key={photo.sourceUrl} permalink={photo.sourceUrl}/>
  <PhotoMetrics permalink={photo.sourceUrl}/>
  <div className="post-caption-text" tabIndex={0} role="region" aria-label="Post caption"><p className="photo-caption">{photo.caption||(instagram?'Caption unavailable for this saved post.':'')}</p></div>
  {!!mentions.length&&<div className="post-mentions" aria-label="Accounts mentioned in caption"><span>Mentioned</span>{mentions.map(handle=><a key={handle} href={`https://www.instagram.com/${handle}/`} target="_blank" rel="noreferrer">@{handle}</a>)}</div>}
  {photo.credit&&<small>{photo.credit}</small>}
  {photo.sourceUrl&&!hideSource&&<a className="photo-source" href={photo.sourceUrl} target="_blank" rel="noreferrer">{photo.sourceLabel||'View original source'} ↗</a>}
 </div>;
}
