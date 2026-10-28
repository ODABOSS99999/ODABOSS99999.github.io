import { useEffect, useRef } from 'react';
import { destinations, owner, photos, projects } from './content';
import type { SectionId } from './content';
import Gallery from './Gallery';
import PublishedWork from './PublishedWork';
import ExitSign from './ExitSign';
import InstagramFeed from './InstagramFeed';
import EngineeringMentions from './EngineeringMentions';
import MusicShelf from './MusicShelf';
import ContactCard from './ContactCard';
export default function Sections({ section, navigate }: { section: SectionId; navigate: (id: SectionId|'library')=>void }) {
  const panel=useRef<HTMLDialogElement>(null);
  useEffect(()=>{const el=panel.current;el?.showModal();const before=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{el?.close();document.body.style.overflow=before;};},[]);
  const meta=destinations.find(d=>d.id===section)!;
  const gallery = section==='favorites' ? photos.filter(p=>p.favorite) : photos;

  return <dialog ref={panel} className={`collection-panel${section==='contact' ? ' contact-card-panel' : ''}`} aria-labelledby="section-title" onCancel={e=>{e.preventDefault();navigate('library');}}><article className={`section-page section-${section}`}><div className="section-exit-rail">{section==='contact'?<button className="contact-card-close" aria-label="Exit Contact and return to library" onClick={()=>navigate('library')}>×</button>:<ExitSign className="section-exit" label={`Exit ${meta.title} and return to library`} onExit={()=>navigate('library')}/> }</div><div className="section-heading"><h1 tabIndex={-1} id="section-title">{section==='contact' ? 'Contact card' : meta.title}<span className="serif-dot">.</span></h1></div>

    {section==='photography'&&<><InstagramFeed mode="portfolio"/><section id="favorite-posts" className="portfolio-favorites"><h2>Personal Favorites</h2><InstagramFeed mode="favorites"/></section><InstagramFeed mode="latest"/></>}
    {section==='favorites'&&<InstagramFeed mode="favorites"/>}
    {section==='about'&&owner.biography.length>0&&<div className="about-layout">
      <details className="about-topics"><summary>Jump to a topic</summary>
        <nav className="about-index" aria-label="About me topics">{owner.biography.map((p,i)=><button key={p.heading} onClick={()=>{const topic=panel.current?.querySelector<HTMLElement>(`#about-topic-${i}`);topic?.focus({preventScroll:true});topic?.scrollIntoView({block:'start'});}}>{p.heading}</button>)}</nav>
      </details>
      <div className="biography">{owner.biography.map((p,i)=><section key={p.heading} id={`about-topic-${i}`} tabIndex={-1} aria-labelledby={`about-heading-${i}`}>
        {i===0&&<figure className="about-profile-frame"><img src="/instagram/profile.jpg" width="150" height="150" alt="Owen McGowan"/></figure>}
        {p.heading&&<h2 id={`about-heading-${i}`}>{p.heading}</h2>}<p>{p.text}</p>
        {p.heading==='At UT Dallas'&&<a className="mercury-profile" href="https://utdmercury.com/staff_name/owen-mcgowan/" target="_blank" rel="noreferrer"><span className="eyebrow">THE UTD MERCURY · STAFF PROFILE</span><span className="mercury-profile-title">Owen McGowan, Photographer <span aria-hidden="true">↗</span></span><span className="mercury-profile-excerpt">“Owen McGowan is a freshman at UTD from The Woodlands, Texas.”</span></a>}
        {p.items&&<ul className="about-clubs">{p.items.map(item=><li key={item.name}><h3>{item.name}</h3><p>{item.detail}</p></li>)}</ul>}
      </section>)}</div>
    </div>}
    {(section==='photography'||section==='favorites')&&gallery.length>0&&<Gallery items={gallery} intimate={section==='favorites'}/>}
    {section==='published'&&<PublishedWork/>}
    {section==='music'&&<MusicShelf/>}
    {section==='engineering'&&<details className="about-topics project-topics"><summary>Explore all {projects.length} projects</summary><nav className="about-index" aria-label="Project index">{projects.map(p=><button key={p.id} onClick={()=>{const project=panel.current?.querySelector<HTMLElement>(`#project-${p.id}`);project?.focus({preventScroll:true});project?.scrollIntoView({block:'start'});}}>{p.title}</button>)}</nav></details>}
    {section==='engineering'&&projects.map(p=><section className="project" tabIndex={-1} id={`project-${p.id}`} key={p.id}><header className="project-heading">{p.logo&&<a className="project-logo" href={p.url} target="_blank" rel="noreferrer" aria-label={`Visit ${p.title}`}><img src={p.logo.src} width={p.logo.width} height={p.logo.height} alt={p.logo.alt} loading="lazy"/></a>}<h2>{p.title}</h2></header><p>{p.overview}</p>{p.role&&<><h3>My role</h3><p>{p.role}</p></>}{p.process&&<><h3>Process</h3><p>{p.process}</p></>}{p.tools&&<><h3>Tools</h3><p>{p.tools.join(' · ')}</p></>}{p.challenges&&<><h3>Challenges</h3><p>{p.challenges}</p></>}{p.outcomes&&<><h3>Outcomes</h3><p>{p.outcomes}</p></>}{p.url&&<a className="text-link" href={p.url} target="_blank" rel="noreferrer">View project ↗</a>}{p.images&&<Gallery items={p.images}/>}<EngineeringMentions projectId={p.id}/></section>)}
    {section==='contact'&&<ContactCard navigate={navigate}/> }
    {section!=='contact'&&<div className="section-footer"><button className="text-link" onClick={()=>navigate(destinations[(destinations.findIndex(d=>d.id===section)+1)%destinations.length].id)}>Explore {destinations[(destinations.findIndex(d=>d.id===section)+1)%destinations.length].title} ↗</button></div>}
  </article></dialog>;
}
