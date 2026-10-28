import { useEffect, useRef, useState } from 'react';
import ExitSign from './ExitSign';
import account from '../public/minecraft/account.json';
import './minecraft.css';

const views = ['SkyBlock', 'Skin & cape', 'Account & history'] as const;
type View = typeof views[number];

function TexturePreview({ back, cape = false }: { back: boolean; cape?: boolean }) {
  const canvas = useRef<HTMLCanvasElement>(null);
  const [failed, setFailed] = useState(false);
  useEffect(() => {
    let cancelled = false;
    const image = new Image();
    setFailed(false);
    image.onload = () => {
      if (cancelled) return;
      const ctx = canvas.current?.getContext('2d');
      if (!ctx) return;
      ctx.clearRect(0, 0, 16, 32);
      const draw = (sx: number, sy: number, w: number, h: number, x: number, y: number) => ctx.drawImage(image, sx, sy, w, h, x, y, w, h);
      if (cape) { draw(1, 1, 10, 16, 3, 8); return; }
      const slim = account.model === 'slim', arm = slim ? 3 : 4;
      // Compose the official texture's body faces and outer layers at native pixel size.
      const faces = back
        ? [[24,8,8,8,4,0],[56,8,8,8,4,0],[32,20,8,12,4,8],[32,36,8,12,4,8],[12,20,4,12,4,20],[12,36,4,12,4,20],[28,52,4,12,8,20],[12,52,4,12,8,20],[48+arm,20,arm,12,4-arm,8],[48+arm,36,arm,12,4-arm,8],[40+arm,52,arm,12,12,8],[56+arm,52,arm,12,12,8]]
        : [[8,8,8,8,4,0],[40,8,8,8,4,0],[20,20,8,12,4,8],[20,36,8,12,4,8],[4,20,4,12,4,20],[4,36,4,12,4,20],[20,52,4,12,8,20],[4,52,4,12,8,20],[44,20,arm,12,4-arm,8],[44,36,arm,12,4-arm,8],[36,52,arm,12,12,8],[52,52,arm,12,12,8]];
      for (const [sx,sy,w,h,x,y] of faces) draw(sx,sy,w,h,x,y);
    };
    image.onerror = () => { if (!cancelled) setFailed(true); };
    image.src = cape ? account.cape!.path : account.skin.path;
    return () => { cancelled = true; };
  }, [back, cape]);
  return failed ? <p>Texture preview unavailable.</p> : <canvas ref={canvas} width={16} height={32} className="mc-character" role="img" aria-label={cape ? 'ODABOSS’s equipped cape' : `ODABOSS’s current skin, ${back ? 'back' : 'front'} view`} />;
}

export default function MinecraftPanel({ onClose }: { onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [view, setView] = useState<View>('SkyBlock');
  const [back, setBack] = useState(false);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const el = dialog.current;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    el?.showModal();
    return () => { el?.close(); document.body.style.overflow = overflow; previous?.focus({ preventScroll: true }); };
  }, []);
  function moveTab(event: React.KeyboardEvent<HTMLButtonElement>, index: number) {
    let next = index;
    if (event.key === 'ArrowRight') next = (index + 1) % views.length;
    else if (event.key === 'ArrowLeft') next = (index + views.length - 1) % views.length;
    else if (event.key === 'Home') next = 0;
    else if (event.key === 'End') next = views.length - 1;
    else return;
    event.preventDefault(); setView(views[next]);
    dialog.current?.querySelector<HTMLButtonElement>(`#mc-tab-${next}`)?.focus();
  }
  return <dialog ref={dialog} className="minecraft-panel" aria-labelledby="mc-title" onCancel={event => { event.preventDefault(); onClose(); }}>
    <header className="mc-header"><div><p className="eyebrow">THE MINECRAFT PAINTING</p><h2 id="mc-title">odaboss<span className="mc-online-label">Minecraft Java</span></h2></div><ExitSign onExit={onClose} label="Close Minecraft profile" /></header>
    <div className="mc-scroll">
      <p className="mc-intro">Minecraft is the only game I’ve ever really enjoyed. I’ve been playing since I was six, years before I created my Java account.</p>
      <div className="mc-tabs" role="tablist" aria-label="Minecraft profile sections">{views.map((name, i) => <button key={name} id={`mc-tab-${i}`} role="tab" aria-selected={view === name} tabIndex={view === name ? 0 : -1} aria-controls={`mc-view-${i}`} onClick={() => setView(name)} onKeyDown={event => moveTab(event, i)}>{name}</button>)}</div>
      <section className="mc-view" role="tabpanel" id={`mc-view-${views.indexOf(view)}`} aria-labelledby={`mc-tab-${views.indexOf(view)}`} tabIndex={0}>
        {view === 'SkyBlock' && <>
          <p className="mc-kicker">HYPIXEL SKYBLOCK</p><h3>SkyBlock stats</h3>
          <div className="mc-networth"><span>Net worth</span><strong>Unavailable</strong><span>No verified valuation connected yet.</span></div>
          <dl className="mc-stats">{['Purse & bank', 'SkyBlock level', 'Skill average', 'Catacombs', 'Slayers', 'Pets & gear'].map(label => <div key={label}><dt>{label}</dt><dd>Unavailable</dd></div>)}</dl>
          <p className="mc-note">SkyBlock statistics need an authorized Hypixel data source. Values will appear here when connected.</p>
        </>}
        {view === 'Skin & cape' && <>
          <div className="mc-wardrobe"><figure><div className="mc-preview"><TexturePreview back={back} /></div><figcaption>Current skin · {account.model} model</figcaption><button className="mc-action" aria-pressed={back} onClick={() => setBack(value => !value)}>Turn around <span aria-hidden="true">↔</span></button><a href={account.skin.path} download="odaboss-skin.png">Download skin texture</a></figure>
          <figure><div className="mc-preview">{account.cape ? <TexturePreview back cape /> : <p>No cape equipped</p>}</div><figcaption>{account.cape ? 'Currently equipped cape' : 'No cape in the public profile'}</figcaption>{account.cape && <a href={account.cape.path} download="odaboss-cape.png">Download cape texture</a>}</figure></div>
          <p className="mc-note">Textures from Mojang’s public profile. This shows the equipped cape, not a complete list of owned capes. Past skins aren’t included in this public snapshot.</p>
        </>}
        {view === 'Account & history' && <>
          <p className="mc-kicker">PLAYER RECORD</p><h3>Account & history</h3>
          <dl className="mc-account"><div><dt>Current name</dt><dd>{account.username}</dd></div><div><dt>UUID</dt><dd><code>{account.uuid}</code></dd></div><div><dt>Edition</dt><dd>Java Edition</dd></div><div><dt>Skin model</dt><dd>{account.model}</dd></div></dl>
          <details><summary>Previous names & skins</summary><p>Mojang’s public profile does not provide historical names, name-change dates, or past skins. No verified history has been added yet.</p></details>
          <details><summary>Dates played & playtime</summary><p>A complete Minecraft play history is not public. First and last Hypixel logins, SkyBlock profile dates, and playtime have not been verified yet.</p></details>
          <details><summary>Capes & other editions</summary><p>The equipped Java cape appears in Skin & cape. Other owned capes, Bedrock activity, achievements, and server-specific records aren’t available in this snapshot.</p></details>
        </>}
      </section>
      <footer className="mc-source">Account & textures checked <time dateTime={account.checkedAt}>{new Date(account.checkedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</time> · <a href={`https://sessionserver.mojang.com/session/minecraft/profile/${account.uuid}`}>Mojang source</a><span>Independent personal profile. Not affiliated with Mojang, Microsoft, or Hypixel.</span></footer>
    </div>
  </dialog>;
}
