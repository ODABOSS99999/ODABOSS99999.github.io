import { publications } from './content';
import Gallery from './Gallery';

export default function PublishedWork() {
  return <>
    <div className="published-stories">{publications.map((p, i) => <article className="published-story" key={p.url} aria-labelledby={`publication-${i}`}>
      <header>
        <p className="published-meta">{p.publication}{p.date && ` · ${p.date}`}</p>
        <h2 id={`publication-${i}`}><a href={p.url} target="_blank" rel="noreferrer">{p.title}</a></h2>
        <p className="published-credit">{p.role}</p>
      </header>
      {!!p.images?.length && <Gallery captionOnly items={p.images.map(photo => ({ ...photo, caption: photo.cutline?.trim() || photo.caption }))}/>}
      <a className="text-link published-source" href={p.url} target="_blank" rel="noreferrer">{new URL(p.url).hostname === 'www.instagram.com' ? 'View on Instagram' : 'View article'} ↗</a>
    </article>)}</div>
    <a className="text-link" href="https://utdmercury.com/staff_name/owen-mcgowan/" target="_blank" rel="noreferrer">Explore my Mercury archive ↗</a>
  </>;
}
