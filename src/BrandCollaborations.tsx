import { brandCollaborations } from './brandRecords';
import './brandCollaborations.css';

export default function BrandCollaborations() {
  const list = (start: number, end?: number) => <ul className="brand-list">{brandCollaborations.slice(start, end).map(brand => <li key={brand.name}>{brand.url ? <a href={brand.url} target="_blank" rel="noreferrer" aria-label={`${brand.name}: view posted work on Instagram`}><span>{brand.name}</span><span aria-hidden="true">↗</span></a> : <span className="brand-name">{brand.name}</span>}</li>)}</ul>;
  return <section className="brand-collaborations" aria-label="Brands I’ve worked with"><h2>Brands I’ve worked with</h2>{list(0, 4)}<details><summary>Explore more brands</summary>{list(4)}</details></section>;
}

