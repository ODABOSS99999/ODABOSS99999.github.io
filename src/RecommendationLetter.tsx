import { useEffect, useRef } from 'react';
import ExitSign from './ExitSign';
import { recommendations } from './recommendations';
import './recommendationLetter.css';

export default function RecommendationLetter({ onClose }: { onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const el = dialog.current;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    el?.showModal();
    return () => { el?.close(); document.body.style.overflow = overflow; };
  }, []);
  return <dialog ref={dialog} className="recommendation-letter" aria-labelledby="recommendation-title" onKeyDown={event => {
    if (event.key === 'Tab') { event.preventDefault(); dialog.current?.querySelector('button')?.focus(); }
  }} onCancel={event => { event.preventDefault(); onClose(); }}>
    <header><p>MCGOWEN MEDIA</p><ExitSign onExit={onClose} label="Close recommendation letter" autoFocus /></header>
    <article><h2 id="recommendation-title">Letters of recommendation</h2>
      {recommendations.map(item => <figure key={item.name}>
        {item.rating && <p className="recommendation-rating" aria-label="Rated 5 out of 5">{item.rating}</p>}
        {item.quote ? <blockquote>“{item.text}”</blockquote> : <p className="recommendation-summary">{item.text}</p>}
        <figcaption><strong>{item.name}</strong><span>{item.brand}</span></figcaption>
      </figure>)}
    </article>
  </dialog>;
}
