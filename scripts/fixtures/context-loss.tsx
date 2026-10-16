// Local verification entry only; Vite's production entry does not reference this file.
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from '/src/App2D';
import '/src/illustrated.css';

// Keep this manual failure check quiet without changing the site's defaults.
try {
  const saved = JSON.parse(localStorage.getItem('mcgowen-library') || '{}');
  localStorage.setItem('mcgowen-library', JSON.stringify({...saved, volume:0, muted:true, soundDefaultVersion:2}));
} catch { /* A fresh verification origin normally allows local storage. */ }
// App uses pathname routing; this fixture must initially display the actual room.
history.replaceState({}, '', '/');

function Harness() {
  const [status, setStatus] = useState('Wait for the room to appear, then simulate a real WebGL context loss.');
  function loseContext() {
    const canvas = document.querySelector<HTMLCanvasElement>('.seated-canvas canvas');
    if (!canvas) { setStatus('No initialized room canvas is available.'); return; }
    const context = canvas.getContext('webgl2') || canvas.getContext('webgl');
    const extension = context?.getExtension('WEBGL_lose_context');
    if (!extension) { setStatus('WEBGL_lose_context is unavailable in this browser.'); return; }
    canvas.addEventListener('webglcontextlost', () => setStatus('Real webglcontextlost event received. Verify that the object list appears and Contact opens.'), {once:true});
    setStatus('Requested real renderer context loss…');
    extension.loseContext();
  }
  return <><App/><aside style={{position:'fixed',left:12,top:12,zIndex:1000,maxWidth:390,padding:14,background:'#fff',color:'#151515',font:'14px/1.5 system-ui',boxShadow:'0 2px 12px #0006'}} aria-label="Local recovery verification">
    <button onClick={loseContext} style={{display:'block',background:'#183d2b',color:'#fff',padding:'10px 14px',minHeight:44,border:'1px solid #183d2b'}}>Simulate renderer failure</button>
    <p role="status" style={{marginTop:8}}>{status}</p>
  </aside></>;
}

ReactDOM.createRoot(document.getElementById('fixture')!).render(<Harness/>);
