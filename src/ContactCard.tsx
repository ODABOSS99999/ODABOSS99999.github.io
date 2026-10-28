import { useState } from 'react';
import { owner } from './content';
import type { SectionId } from './content';


const vcard = ['BEGIN:VCARD','VERSION:3.0','N:McGowan;Owen;;;','FN:Owen McGowan',`ORG:${owner.brand}`,`TEL;TYPE=CELL:${owner.phone}`,`EMAIL:${owner.email}`,'URL:https://mcgowen.works',...owner.social.map(s=>`URL:${s.url}`),'END:VCARD',''].join('\r\n');

export default function ContactCard({ navigate }: { navigate: (id: SectionId|'library')=>void }) {
  const [status,setStatus]=useState('');
  const [delivery,setDelivery]=useState(0);
  async function copyEmail(){
    try { await navigator.clipboard.writeText(owner.email); setStatus('Email copied.'); }
    catch { setStatus('Select the email address to copy it, or tap it to open your mail app.'); }
  }
  return <div className="calling-card">
    <div className="calling-card-top"><a href="/photography" onClick={e=>{e.preventDefault();navigate('photography');}} className="calling-brand">{owner.brand}</a></div>
    <div className="calling-card-body">
      <div className="calling-identity">
        <a className="calling-portrait" href="/about" onClick={e=>{e.preventDefault();navigate('about');}} aria-label="About Owen McGowan"><img src="/instagram/profile.jpg" width="96" height="96" alt="Owen McGowan"/></a>
        <a className="calling-name" href="/about" onClick={e=>{e.preventDefault();navigate('about');}}>Owen<br/> McGowan</a>
        <p className="calling-slogan">Made with curiosity.<br/> Captured with care.</p>
      </div>
      <address className="calling-details">
        <a href={`mailto:${owner.email}`}><span>Email</span><strong>{owner.email}</strong></a>
        <a href={`tel:${owner.phone}`}><span>Phone</span><strong>{owner.phoneDisplay}</strong></a>
        {owner.social.map(s=><a key={s.url} href={s.url} target="_blank" rel="noreferrer"><span>{s.label}</span><strong>{s.handle}<i aria-hidden="true">↗</i></strong></a>)}
        <a href="https://mcgowen.works"><span>Website</span><strong>mcgowen.works<i aria-hidden="true">↗</i></strong></a>
      </address>
    </div>
    <div className="calling-actions"><a download="Owen-McGowan.vcf" href={`data:text/vcard;charset=utf-8,${encodeURIComponent(vcard)}`}>Save contact <span aria-hidden="true">↓</span></a><button onClick={copyEmail}>Copy email</button></div>
    {status&&<p className="calling-status" role="status">{status}</p>}
    <div className="calling-delivery">
      <button className="calling-butler" onClick={()=>setDelivery(n=>n+1)} aria-label="Replay the butler’s paper airplane delivery">
        <svg viewBox="0 0 60 66" aria-hidden="true"><path d="M10 65V49Q11 37 30 37T50 49V65" fill="#253e35"/><path d="m20 38 10 24 10-24" fill="#faf6e9"/><ellipse cx="30" cy="23" rx="13" ry="16" fill="#d6aa85"/><path d="M17 22Q10 5 29 5Q48 4 43 22L38 14Q22 18 19 13Z" fill="#dad6cb"/><path d="M26 29q4 3 8 0" fill="none" stroke="#253e35" strokeWidth="1.5"/><circle cx="25" cy="22" r="1.5"/><circle cx="35" cy="22" r="1.5"/><path d="m23 40 7 4-7 4zm14 0-7 4 7 4z" fill="#915a41"/><path className="butler-arm" d="m43 51 11-7" stroke="#253e35" strokeWidth="8" strokeLinecap="round"/><circle cx="54" cy="44" r="4" fill="#faf6e9"/></svg>
      </button>
      <span className="calling-delivery-note">At your service.</span>
      <div className="calling-flight" key={delivery} aria-hidden="true"><svg viewBox="0 0 70 40"><path d="M2 8 67 3 29 36 25 20Z" fill="#fffdf4" stroke="#254237" strokeWidth="2" strokeLinejoin="round"/><path d="m25 20 42-17-34 23-4 10" fill="#d4c6a7" stroke="#254237" strokeWidth="1.5"/></svg><span/></div>
    </div>
  </div>;
}
