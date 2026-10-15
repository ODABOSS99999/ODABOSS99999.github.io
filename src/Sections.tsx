import { useState } from 'react';
import { destinations, owner, photos, projects, publications } from './content';
import type { SectionId } from './content';
import Gallery from './Gallery';
import { ObjectArt } from './Objects';
import type { ObjectKind } from './Objects';
const kind: Record<SectionId,ObjectKind>={photography:'camera',about:'books',favorites:'frames',published:'paper',engineering:'rocket',contact:'letter'};
const empty: Record<Exclude<SectionId,'contact'>, {title:string;description:string}>={
  photography:{title:'A collection, quietly taking shape.',description:'Photographs will find their place here. Until then, there’s more to explore in the library.'},
  about:{title:'There are still pages to fill.',description:'A personal story is on its way. For now, the objects in this room offer a small introduction.'},
  favorites:{title:'Some things are worth keeping close.',description:'This is a place for a slower look. A personal selection of photographs will live here.'},
  published:{title:'The archive is being assembled.',description:'Published stories and photography will be collected here, with their original credits and sources.'},
  engineering:{title:'A space for things in the making.',description:'Projects, processes, and the ideas behind them will find a home here.'},
};
export default function Sections({ section, navigate }: { section: SectionId; navigate: (id: SectionId|'library')=>void }) {
  const meta=destinations.find(d=>d.id===section)!;
  const [copy,setCopy]=useState('');
  const gallery = section==='favorites' ? photos.filter(p=>p.favorite) : photos;
  const hasContent=section==='contact'||(section==='about'?owner.biography.length:section==='published'?publications.length:section==='engineering'?projects.length:gallery.length);
  async function copyEmail(){try{await navigator.clipboard.writeText(owner.email);setCopy('Email copied');}catch{setCopy('Copy unavailable. Select the email address above or open your email app.');}}
  return <article className={`section-page section-${section}`}><div className="section-heading"><p className="eyebrow">THE McGOWEN LIBRARY <span> / {meta.number}</span></p><h1 tabIndex={-1} id="section-title">{meta.title}<span className="serif-dot">.</span></h1><p className="section-deck">{meta.subtitle}.</p></div>
    {!hasContent&&<div className="empty-collection"><div className="empty-object"><ObjectArt kind={kind[section]}/></div><div><span className="eyebrow">A WORK IN PROGRESS</span><h2>{empty[section as Exclude<SectionId,'contact'>].title}</h2><p>{empty[section as Exclude<SectionId,'contact'>].description}</p><button className="text-link" onClick={()=>navigate('library')}>Return to the library <span>↗</span></button></div></div>}
    {section==='about'&&owner.biography.length>0&&<div className="biography">{owner.biography.map((p,i)=><section key={i}>{p.heading&&<h2>{p.heading}</h2>}<p>{p.text}</p></section>)}</div>}
    {(section==='photography'||section==='favorites')&&gallery.length>0&&<Gallery items={gallery} intimate={section==='favorites'}/>}
    {section==='published'&&publications.length>0&&<div className="publication-list">{publications.map((p,i)=><a key={p.url} href={p.url} target="_blank" rel="noreferrer"><span className="eyebrow">{String(i+1).padStart(2,'0')}</span><div><p>{p.publication}{p.date&&` · ${p.date}`}</p><h2>{p.title}</h2><span>{p.role}</span></div><span className="source-link">Read at {new URL(p.url).hostname} ↗</span></a>)}</div>}
    {section==='engineering'&&projects.map(p=><section className="project" key={p.id}><h2>{p.title}</h2><p>{p.overview}</p>{p.role&&<><h3>My role</h3><p>{p.role}</p></>}{p.process&&<><h3>Process</h3><p>{p.process}</p></>}{p.tools&&<><h3>Tools</h3><p>{p.tools.join(' · ')}</p></>}{p.challenges&&<><h3>Challenges</h3><p>{p.challenges}</p></>}{p.outcomes&&<><h3>Outcomes</h3><p>{p.outcomes}</p></>}{p.images&&<Gallery items={p.images}/>}</section>)}
    {section==='contact'&&<div className="contact-layout"><div className="contact-letter"><ObjectArt kind="letter"/><span>A NOTE AWAY.</span></div><div className="contact-copy"><h2>Let’s make<br/><em>something meaningful.</em></h2><p>Have something in mind? I’d love to hear it.</p><a className="email-link" href={`mailto:${owner.email}`}>{owner.email}<span aria-hidden="true">↗</span></a><button className="text-link copy-email" onClick={copyEmail}>Copy email <span aria-hidden="true">⧉</span></button><p className="copy-status" role="status">{copy}</p><div className="contact-details"><div><span className="eyebrow">A CONVERSATION</span><a href={`tel:${owner.phone}`}>{owner.phoneDisplay}</a></div>{owner.social.map(s=><div key={s.url}><span className="eyebrow">{s.label}</span><a href={s.url} target="_blank" rel="noreferrer">{s.handle} ↗</a></div>)}</div></div></div>}
    <div className="section-footer"><span>THERE’S ALWAYS ANOTHER SHELF.</span><button className="text-link" onClick={()=>navigate(destinations[(destinations.findIndex(d=>d.id===section)+1)%destinations.length].id)}>Explore {destinations[(destinations.findIndex(d=>d.id===section)+1)%destinations.length].title} ↗</button></div>
  </article>;
}
