import { useState } from 'react';
import { destinations, owner, photos, projects, publications } from './content';
import type { SectionId } from './content';
import Gallery from './Gallery';
import SectionImages from './SectionImages';
import ExitSign from './ExitSign';
import InstagramFeed from './InstagramFeed';
import { ObjectArt } from './Objects';
export default function Sections({ section, navigate }: { section: SectionId; navigate: (id: SectionId|'library')=>void }) {
  const meta=destinations.find(d=>d.id===section)!;
  const [copy,setCopy]=useState('');
  const gallery = section==='favorites' ? photos.filter(p=>p.favorite) : photos;

  async function copyEmail(){try{await navigator.clipboard.writeText(owner.email);setCopy('Email copied');}catch{setCopy('Copy unavailable. Select the email address above or open your email app.');}}
  return <article className={`section-page section-${section}`}><div className="section-heading"><ExitSign className="section-exit" label={`Exit ${meta.title} and return to library`} onExit={()=>navigate('library')}/><p className="eyebrow">THE McGOWEN LIBRARY <span> / {meta.number}</span></p><h1 tabIndex={-1} id="section-title">{meta.title}<span className="serif-dot">.</span></h1><p className="section-deck">{meta.subtitle}.</p></div>

    {section==='photography'&&<><InstagramFeed mode="latest"/><InstagramFeed mode="portfolio"/><section id="favorite-posts" className="portfolio-favorites"><p className="eyebrow">WITHIN THE COLLECTION</p><h2>Personal Favorites</h2><InstagramFeed mode="favorites"/></section></>}
    {section==='favorites'&&<InstagramFeed mode="favorites"/>}
    {(section==='about'||section==='published'||section==='engineering')&&<SectionImages section={section}/>}
    {section==='about'&&owner.biography.length>0&&<div className="biography">{owner.biography.map((p,i)=><section key={i}>{p.heading&&<h2>{p.heading}</h2>}<p>{p.text}</p></section>)}</div>}
    {(section==='photography'||section==='favorites')&&gallery.length>0&&<Gallery items={gallery} intimate={section==='favorites'}/>}
    {section==='published'&&publications.length>0&&<div className="publication-list">{publications.map((p,i)=><a key={p.url} href={p.url} target="_blank" rel="noreferrer"><span className="eyebrow">{String(i+1).padStart(2,'0')}</span><div><p>{p.publication}{p.date&&` · ${p.date}`}</p><h2>{p.title}</h2><span>{p.role}</span></div><span className="source-link">Read at {new URL(p.url).hostname} ↗</span></a>)}</div>}
    {section==='engineering'&&projects.map(p=><section className="project" key={p.id}><h2>{p.title}</h2><p>{p.overview}</p>{p.role&&<><h3>My role</h3><p>{p.role}</p></>}{p.process&&<><h3>Process</h3><p>{p.process}</p></>}{p.tools&&<><h3>Tools</h3><p>{p.tools.join(' · ')}</p></>}{p.challenges&&<><h3>Challenges</h3><p>{p.challenges}</p></>}{p.outcomes&&<><h3>Outcomes</h3><p>{p.outcomes}</p></>}{p.images&&<Gallery items={p.images}/>}</section>)}
    {section==='contact'&&<div className="contact-layout"><div className="contact-letter"><ObjectArt kind="letter"/><span>A NOTE AWAY.</span></div><div className="contact-copy"><h2>Let’s make<br/><em>something meaningful.</em></h2><p>Have something in mind? I’d love to hear it.</p><a className="email-link" href={`mailto:${owner.email}`}>{owner.email}<span aria-hidden="true">↗</span></a><button className="text-link copy-email" onClick={copyEmail}>Copy email <span aria-hidden="true">⧉</span></button><p className="copy-status" role="status">{copy}</p><div className="contact-details"><div><span className="eyebrow">A CONVERSATION</span><a href={`tel:${owner.phone}`}>{owner.phoneDisplay}</a></div>{owner.social.map(s=><div key={s.url}><span className="eyebrow">{s.label}</span><a href={s.url} target="_blank" rel="noreferrer">{s.handle} ↗</a></div>)}</div></div></div>}
    {section==='contact'&&<SectionImages section="contact"/>}
    <div className="section-footer"><span>THERE’S ALWAYS ANOTHER SHELF.</span><button className="text-link" onClick={()=>navigate(destinations[(destinations.findIndex(d=>d.id===section)+1)%destinations.length].id)}>Explore {destinations[(destinations.findIndex(d=>d.id===section)+1)%destinations.length].title} ↗</button></div>
  </article>;
}
