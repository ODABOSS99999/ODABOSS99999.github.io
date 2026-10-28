import { useEffect, useRef, useState } from 'react';
import { airbudsInvite, fetchMusicFeed, publishMusicAlbums, type MusicFeed } from './musicData';
import './music.css';

export default function MusicShelf(){
  const [feed,setFeed]=useState<MusicFeed|null>(null);
  const [loading,setLoading]=useState(true);
  const [error,setError]=useState(false);
  const [request,setRequest]=useState(0);
  const [allAlbums,setAllAlbums]=useState(false);
  const [allRecent,setAllRecent]=useState(false);
  const current=useRef<MusicFeed|null>(null);
  useEffect(()=>{
    let controller:AbortController|undefined, timeout:ReturnType<typeof setTimeout>|undefined, active=true;
    async function refresh(){
      controller?.abort(); clearTimeout(timeout);
      controller=new AbortController(); const operation=controller;
      setLoading(true);
      timeout=setTimeout(()=>operation.abort(),12000);
      try {
        const next=await fetchMusicFeed(operation.signal);
        if(!active||operation!==controller||operation.signal.aborted)return;
        current.current=next; setFeed(next); publishMusicAlbums(next.albums); setError(false);
      } catch {
        if(!active||operation!==controller)return;
        current.current=null; setFeed(null); publishMusicAlbums([]); setError(true);
      } finally { if(active&&operation===controller){clearTimeout(timeout);setLoading(false);} }
    }
    function visible(){if(document.visibilityState==='visible')void refresh();}
    void refresh();
    window.addEventListener('focus',visible); document.addEventListener('visibilitychange',visible);
    const interval=setInterval(()=>{
      if(current.current&&Date.now()-Date.parse(current.current.fetchedAt)>120000){current.current=null;setFeed(null);publishMusicAlbums([]);setError(true);}
      visible();
    },60000);
    return()=>{active=false;controller?.abort();clearTimeout(timeout);clearInterval(interval);window.removeEventListener('focus',visible);document.removeEventListener('visibilitychange',visible);};
  },[request]);
  useEffect(()=>{
    if(!feed)return;
    const expiry=setTimeout(()=>{current.current=null;setFeed(null);publishMusicAlbums([]);setError(true);},Math.max(0,Date.parse(feed.fetchedAt)+120000-Date.now()));
    return()=>clearTimeout(expiry);
  },[feed]);
  return <section className="music-shelf" aria-label="Owen’s listening activity">
    <div className="music-intro"><p className="eyebrow">ON THE RECORD</p><h2>Listening with Owen</h2><div className="music-actions"><a className="text-link" href={airbudsInvite} target="_blank" rel="noreferrer">Airbuds @mcgowen ↗</a><button className="text-link" disabled={loading} onClick={()=>setRequest(value=>value+1)}>{loading?'Refreshing…':'Refresh listening'}</button></div></div>
    <p className="music-status" role="status">{loading?'Loading Spotify listening activity…':error?'Spotify listening activity is temporarily unavailable.':feed?`Spotify · Updated ${new Date(feed.fetchedAt).toLocaleTimeString([], {hour:'numeric',minute:'2-digit'})}`:''}</p>
    {feed&&<div className="music-feed">
      <section aria-label="Albums"><h3>On rotation</h3>{feed.albums.length?<div className="music-albums" id="music-albums">{feed.albums.slice(0,allAlbums?undefined:12).map(album=><a key={album.url} href={album.url} target="_blank" rel="noreferrer" className="music-album">{album.cover?<img src={album.cover} alt="" loading="lazy"/>:<span className="music-cover-empty" aria-hidden="true">♪</span>}<strong>{album.title}</strong><span>{album.artist}</span></a>)}</div>:<p>No albums available from Spotify.</p>}{feed.albums.length>12&&<button className="text-link music-expand" aria-expanded={allAlbums} aria-controls="music-albums" onClick={()=>setAllAlbums(value=>!value)}>{allAlbums?'Show fewer albums':'Show all albums'}</button>}</section>
      <div className="music-track-columns">{([{title:'Recently played',items:feed.recentTracks.slice(0,allRecent?undefined:8),recent:true},{title:'Top tracks · last 4 weeks',items:feed.topTracks,recent:false}]).map(group=><section key={group.title}><h3>{group.title}</h3>{group.items.length?<ol className="music-tracks" id={group.recent?'music-recent':undefined}>{group.items.map((track,index)=><li key={`${track.id}-${index}`}><a href={track.url} target="_blank" rel="noreferrer"><strong>{track.title}</strong><span>{track.artist}</span>{group.recent&&track.playedAt&&<time dateTime={track.playedAt}>{new Date(track.playedAt).toLocaleString([], {month:'short',day:'numeric',hour:'numeric',minute:'2-digit'})}</time>}</a></li>)}</ol>:<p>No tracks available from Spotify.</p>}{group.recent&&feed.recentTracks.length>8&&<button className="text-link music-expand" aria-expanded={allRecent} aria-controls="music-recent" onClick={()=>setAllRecent(value=>!value)}>{allRecent?'Show fewer recent tracks':'Show all recent tracks'}</button>}</section>)}</div>
      <section><h3>Top artists · last 4 weeks</h3>{feed.topArtists.length?<div className="music-artists">{feed.topArtists.map(artist=><a href={artist.url} key={artist.url} target="_blank" rel="noreferrer">{artist.image&&<img src={artist.image} alt="" loading="lazy"/>}<span>{artist.name}</span></a>)}</div>:<p>No artists available from Spotify.</p>}</section>
    </div>}
  </section>;
}


