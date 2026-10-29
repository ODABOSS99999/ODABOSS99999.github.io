import { useEffect, useRef, useState } from 'react';
import MinecraftSkin from './MinecraftSkin';
import ExitSign from './ExitSign';
import account from '../public/minecraft/account.json';
import './minecraft.css';
import history from '../public/minecraft/history.json';
import skinHistory from '../public/minecraft/skins.json';

type SkinRecord = { path: string; model: string; label: string };
const skins: SkinRecord[] = [{ path: account.skin.path, model: account.model, label: 'Current skin' }, ...skinHistory.skins];

const views = ['Account & history', 'Skin', 'Hypixel'] as const;
type View = typeof views[number];

export default function MinecraftPanel({ onClose }: { onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const [skinIndex, setSkinIndex] = useState(0);
  const selectedSkin = skins[skinIndex];
  const [view, setView] = useState<View>('Account & history');
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
    <header className="mc-header"><div><p className="eyebrow">THE MINECRAFT PAINTING</p><h2 id="mc-title">{account.username}<span className="mc-online-label">Minecraft Java</span></h2></div><ExitSign onExit={onClose} label="Close Minecraft profile" /></header>
    <div className="mc-scroll">
      <p className="mc-intro">Minecraft is the only game I’ve ever really enjoyed. I created my Java account when I was five.</p>
      <div className="mc-tabs" role="tablist" aria-label="Minecraft profile sections">{views.map((name, i) => <button key={name} id={`mc-tab-${i}`} role="tab" aria-selected={view === name} tabIndex={view === name ? 0 : -1} aria-controls={`mc-view-${i}`} onClick={() => setView(name)} onKeyDown={event => moveTab(event, i)}>{name}</button>)}</div>
      <section className="mc-view" role="tabpanel" id={`mc-view-${views.indexOf(view)}`} aria-labelledby={`mc-tab-${views.indexOf(view)}`} tabIndex={0}>
        {view === 'Hypixel' && <>
          <p className="mc-kicker">HYPIXEL SKYBLOCK</p><h3>SkyBlock stats</h3>
          <div className="mc-networth"><span>Net worth</span><strong>Unavailable</strong><span>No verified valuation connected yet.</span></div>
          <dl className="mc-stats">{['Purse & bank', 'SkyBlock level', 'Skill average', 'Catacombs', 'Slayers', 'Pets & gear'].map(label => <div key={label}><dt>{label}</dt><dd>Unavailable</dd></div>)}</dl>
          <p className="mc-note">SkyBlock statistics need an authorized Hypixel data source. Values will appear here when connected.</p>
        </>}
        {view === 'Skin' && <>
          <MinecraftSkin skin={selectedSkin.path} slim={selectedSkin.model === 'slim'} cape={skinIndex === 0 ? account.cape?.path : undefined} />
          <div className="mc-skin-toolbar" role="group" aria-label="Skin history">
            <button className="mc-action" aria-label="Previous skin" disabled={skinIndex === skins.length - 1} onClick={() => setSkinIndex(index => Math.min(index + 1, skins.length - 1))}>‹</button><span aria-live="polite">{selectedSkin.label}</span><button className="mc-action" aria-label="Next skin" disabled={skinIndex === 0} onClick={() => setSkinIndex(index => Math.max(index - 1, 0))}>›</button>
          </div>
          <div className="mc-skin-links"><a href={selectedSkin.path} download="odaboss-skin.png">Download skin</a>{skinIndex === 0 && account.cape && <a href={account.cape.path} download="odaboss-cape.png">Download cape</a>}<a href={skinHistory.profile} target="_blank" rel="noopener noreferrer">Laby ↗<span className="sr-only"> (opens in a new tab)</span></a></div>
        </>}
        {view === 'Account & history' && <>
          <p className="mc-kicker">PLAYER RECORD</p><h3>Account & history</h3>
          <dl className="mc-account"><div><dt>Current name</dt><dd>{account.username}</dd></div><div><dt>UUID</dt><dd><code>{account.uuid}</code></dd></div><div><dt>Edition</dt><dd>Java Edition</dd></div><div><dt>Skin model</dt><dd>{account.model}</dd></div></dl>
          <h3>Previous names</h3>
          <dl className="mc-account"><div><dt>ODABOSS999</dt><dd>Changed to this name June 24, 2020</dd></div><div><dt>R2D2NinjaWarrior</dt><dd>Original name · account created when I was five</dd></div></dl>
          <p className="mc-note">ODABOSS since May 22, 2022. History recorded by <a href="https://namemc.com/profile/ca840504-2fba-4600-a8a5-19d60d5fde42">NameMC</a>, checked October 29, 2026. Account creation age is from my own recollection; the exact date is unverified. </p>
          <details><summary>Dates played & playtime</summary><p>SkyBlock playtime: 420 hours, 43 minutes on the Peach profile, recorded September 22, 2026. This is a dated snapshot from Hypixel’s in-game response in my ODABOSS client log. It includes time counted by the server and is not a total across all Minecraft worlds or servers. First-ever login and profile creation dates are still unverified.</p><p>All-Minecraft lifetime playtime is not recoverable from the records available here. Bedrock, deleted logs, and other computers are not included.</p><dl className="mc-account">{history.servers.map(server => <div key={server.name}><dt>{server.name}</dt><dd>{server.firstRecorded} – {server.lastRecorded}<br />{server.recordedDays} recorded connection days</dd></div>)}</dl><p>Dates combine saved ODABOSS and McGowen_ Java client logs. They record connection attempts, including possible failed joins; they do not establish first-ever joins or hours played. Private server addresses are omitted.</p><details><summary>Saved-world playtime records</summary><dl className="mc-account">{history.worldRecords.map(world => <div key={world.label}><dt>{world.label}</dt><dd>{Math.floor(world.minutes / 60)}h {world.minutes % 60}m</dd></div>)}</dl><p>McGowen_ world statistics, converted at 20 game ticks per second. These saves may include copies of the same world, so their times are shown individually and are not added together. They exclude deleted worlds and multiplayer server playtime.</p></details></details>
          <details><summary>Capes & other editions</summary><p>The equipped Java cape appears in Skin. Other owned capes, Bedrock activity, achievements, and server-specific records aren’t available in this snapshot.</p></details>
        </>}
      </section>
      <footer className="mc-source">Account & textures checked <time dateTime={account.checkedAt}>{new Date(account.checkedAt).toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' })}</time> · <a href={`https://sessionserver.mojang.com/session/minecraft/profile/${account.uuid}`}>Mojang source</a><span>Independent personal profile. Not affiliated with Mojang, Microsoft, or Hypixel.</span></footer>
    </div>
  </dialog>;
}
