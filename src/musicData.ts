export const airbudsInvite = 'https://i.airbuds.fm/mcgowen/F6N1GZtq79';
export interface MusicAlbum { title: string; artist: string; cover?: string; url: string }
export interface MusicTrack extends MusicAlbum { id: string; album?: string; playedAt?: string }
export interface MusicFeed { source: 'spotify'; fetchedAt: string; period: string; albums: MusicAlbum[]; recentTracks: MusicTrack[]; topTracks: MusicTrack[]; topArtists: {name: string; image?: string; url: string}[] }
export const musicAlbums: MusicAlbum[] = [];
const listeners = new Set<() => void>();
export function subscribeMusicAlbums(callback: () => void) { listeners.add(callback); return () => { listeners.delete(callback); }; }
export function publishMusicAlbums(albums: MusicAlbum[]) { musicAlbums.splice(0, musicAlbums.length, ...albums); listeners.forEach(callback => callback()); }
const text = (value: unknown): string => typeof value === 'string' ? value.trim().slice(0, 500) : '';
function safeUrl(value: unknown, image = false): string | undefined {
  if (typeof value !== 'string') return;
  try { const url = new URL(value); if (url.protocol === 'https:' && !url.username && !url.password && !url.port && (image ? ['i.scdn.co','mosaic.scdn.co'].includes(url.hostname) : url.hostname === 'open.spotify.com' && /^\/(album|track|artist)\/[A-Za-z0-9]+\/?$/.test(url.pathname))) return url.href; } catch { /* Untrusted feed URL. */ }
}
export function parseMusicFeed(value: unknown, now = Date.now()): MusicFeed {
  if (!value || typeof value !== 'object') throw new Error('Invalid music feed');
  const feed = value as Record<string, unknown>;
  const fetchedAt = text(feed.fetchedAt), age = now - Date.parse(fetchedAt);
  if (feed.source !== 'spotify' || !Number.isFinite(age) || age > 120000 || age < -30000 || !['albums','recentTracks','topTracks','topArtists'].every(key => Array.isArray(feed[key]))) throw new Error('Music feed is unavailable or out of date');
  const album = (item: unknown, kind: 'album' | 'track' = 'album'): MusicAlbum | null => {
    if (!item || typeof item !== 'object') return null;
    const row = item as Record<string, unknown>, title = text(row.title), artist = text(row.artist), url = safeUrl(row.url);
    return title && artist && url && new URL(url).pathname.startsWith(`/${kind}/`) ? {title, artist, url, cover: safeUrl(row.cover, true)} : null;
  };
  const tracks = (rows: unknown): MusicTrack[] => (rows as unknown[]).slice(0,50).flatMap(item => {
    const mapped = album(item, 'track'); if (!mapped) return [];
    const row = item as Record<string, unknown>, id = text(row.id), playedAt = text(row.playedAt);
    return id ? [{...mapped, id, album: text(row.album) || undefined, playedAt: playedAt && Number.isFinite(Date.parse(playedAt)) ? playedAt : undefined}] : [];
  });
  return { source: 'spotify', fetchedAt, period: 'Last 4 weeks', albums: (feed.albums as unknown[]).slice(0,62).map(item => album(item)).filter((item): item is MusicAlbum => !!item), recentTracks: tracks(feed.recentTracks).filter(item => !!item.playedAt), topTracks: tracks(feed.topTracks), topArtists: (feed.topArtists as unknown[]).slice(0,8).flatMap(item => {
    if (!item || typeof item !== 'object') return [];
    const row = item as Record<string, unknown>, name = text(row.name), url = safeUrl(row.url);
    return name && url && new URL(url).pathname.startsWith('/artist/') ? [{name, url, image: safeUrl(row.image,true)}] : [];
  }) };
}
export function musicFeedEndpoint(configured: string | undefined, development: boolean): string | null {
  if (!configured?.trim()) return development ? 'http://127.0.0.1:8765/music' : null;
  try { const url = new URL(configured); if (url.username || url.password || url.search || url.hash) return null; if (url.protocol === 'https:' || development && url.protocol === 'http:' && ['localhost','127.0.0.1','[::1]'].includes(url.hostname)) return url.href; } catch { /* Invalid configuration. */ }
  return null;
}
export async function fetchMusicFeed(signal: AbortSignal): Promise<MusicFeed> {
  const endpoint = musicFeedEndpoint(import.meta.env.VITE_MUSIC_FEED_URL, import.meta.env.DEV);
  if (!endpoint) throw new Error('Music feed is not configured');
  const response = await fetch(endpoint, {signal, cache:'no-store', credentials:'omit', redirect:'error'});
  if (!response.ok) throw new Error('Music is temporarily unavailable');
  return parseMusicFeed(await response.json());
}

