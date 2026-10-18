import Gallery from './Gallery';
import { instagramPhoto,sectionImageIds,useInstagramSnapshot } from './instagramMedia';
type Section=keyof typeof sectionImageIds;
export default function SectionImages({section}:{section:Section}){
 const {snapshot,loading}=useInstagramSnapshot();
 const byId=new Map(snapshot?.posts.map(p=>[p.id,p])||[]);
 const posts=sectionImageIds[section].flatMap(id=>{const p=byId.get(id);return p?[p]:[];});
 if(loading)return <p className="section-media-loading" role="status">Opening photographs…</p>;
 if(!posts.length)return <a className="text-link" href="https://www.instagram.com/mcgowen_media/" target="_blank" rel="noreferrer">View the collection on Instagram ↗</a>;
 const descriptions={
  about:{title:'Personal photographs',text:'A few pages from @mcgowen_media: everyday life, the first camera trip, and photographing Ella Boh while studying mechanical engineering.'},
  engineering:{title:'Photography experiments',text:'Behind the scenes of the image-making process: practical effects with a subwoofer and water, product lighting, and camera experiments. These photographs document the creative process; explore my hardware, rocketry, and software projects below.'},
  contact:{title:'From the collection',text:'One of the first trips with a camera, shared on @mcgowen_media.'},
 };
 return <section className={`section-instagram section-instagram-${section}`} aria-label={`${section} photographs from Instagram`}><div className="section-media-intro"><p className="eyebrow">FROM @MCGOWEN_MEDIA</p><h2>{descriptions[section].title}</h2><p>{descriptions[section].text}</p></div><Gallery items={posts.map(instagramPhoto)}/></section>;
}
