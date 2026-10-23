const CACHE_MS = 60000;
const ERROR_BACKOFF_MS = 30000;
const API = 'https://api.spotify.com/v1';
const TOKEN = 'https://accounts.spotify.com/api/token';
const origins = new Set(['https://mcgowen.works', 'https://www.mcgowen.works']);
const allowedOrigin = origin => {
  if (origins.has(origin)) return true;
  try {
    const url = new URL(origin);
    return url.protocol === 'http:' && ['localhost', '127.0.0.1', '[::1]'].includes(url.hostname);
  } catch { return false; }
};
const string = value => typeof value === 'string' && value.trim() ? value : null;
function safeUrl(value, hosts) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:' && hosts.includes(url.hostname) && !url.username && !url.password ? url.href : null;
  } catch { return null; }
}
const spotifyUrl = value => safeUrl(value, ['open.spotify.com']);
const artwork = value => Array.isArray(value) ? value.map(image => safeUrl(image?.url, ['i.scdn.co', 'mosaic.scdn.co'])).find(Boolean) ?? null : null;
function track(value) {
  const artist = Array.isArray(value?.artists) ? value.artists.map(a => string(a?.name)).filter(Boolean).join(', ') : '';
  const title = string(value?.name);
  const id = string(value?.id);
  const url = spotifyUrl(value?.external_urls?.spotify);
  if (!id || !title || !artist || !url) return null;
  return { id, title, artist, album: string(value.album?.name), cover: artwork(value.album?.images), url };
}
class UpstreamError extends Error {
  constructor(status, retryAfter) { super('Spotify unavailable'); this.status = status; this.retryAfter = retryAfter; }
}
async function read(response) {
  if (!response.ok) {
    const retry = response.headers.get('retry-after');
    throw new UpstreamError(response.status === 429 ? 429 : 502, /^\d+$/.test(retry ?? '') ? String(Math.min(Number(retry), 86400)) : null);
  }
  try { return await response.json(); } catch { throw new UpstreamError(502); }
}
export function createWorker(fetcher = fetch) {
  return {
    async fetch(request, env) {
      const origin = request.headers.get('origin');
      const headers = { 'Content-Type': 'application/json', 'Cache-Control': 'no-store', Vary: 'Origin' };
      const reply = (body, status = 200) => new Response(JSON.stringify(body), { status, headers });
      if (origin && !allowedOrigin(origin)) return reply({ error: 'Origin not allowed' }, 403);
      if (origin) headers['Access-Control-Allow-Origin'] = origin;
      if (new URL(request.url).pathname !== '/music') return reply({ error: 'Not found' }, 404);
      if (request.method === 'OPTIONS') {
        headers['Access-Control-Allow-Methods'] = 'GET, OPTIONS';
        return new Response(null, { status: 204, headers });
      }
      if (request.method !== 'GET') return reply({ error: 'Method not allowed' }, 405);
      if (!string(env.SPOTIFY_CLIENT_ID) || !string(env.SPOTIFY_REFRESH_TOKEN)) return reply({ error: 'Music is not configured' }, 503);
      try {
        const token = await read(await fetcher(TOKEN, {
          method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({ grant_type: 'refresh_token', client_id: env.SPOTIFY_CLIENT_ID, refresh_token: env.SPOTIFY_REFRESH_TOKEN }),
          signal: AbortSignal.timeout(10000), redirect: 'manual',
        }));
        if (!string(token?.access_token)) throw new UpstreamError(502);
        if (string(token.refresh_token) && token.refresh_token !== env.SPOTIFY_REFRESH_TOKEN && typeof env.saveRefreshToken === 'function') {
          await env.saveRefreshToken(token.refresh_token);
        }
        const get = async path => read(await fetcher(`${API}${path}`, {
          headers: { Authorization: `Bearer ${token.access_token}` }, signal: AbortSignal.timeout(10000), redirect: 'manual',
        }));
        const [recent, top, artists] = await Promise.all([
          get('/me/player/recently-played?limit=50'),
          get('/me/top/tracks?limit=12&time_range=short_term'),
          get('/me/top/artists?limit=8&time_range=short_term'),
        ]);
        if (![recent, top, artists].every(data => Array.isArray(data?.items))) throw new UpstreamError(502);
        const recentTracks = recent.items.slice(0, 50).flatMap(item => {
          const mapped = track(item?.track);
          const timestamp = typeof item?.played_at === 'string' ? Date.parse(item.played_at) : NaN;
          return mapped && Number.isFinite(timestamp) ? [{ ...mapped, playedAt: new Date(timestamp).toISOString() }] : [];
        });
        const topTracks = top.items.slice(0, 12).map(track).filter(Boolean);
        const topArtists = artists.items.slice(0, 8).flatMap(item => {
          const name = string(item?.name), url = spotifyUrl(item?.external_urls?.spotify);
          return name && url ? [{ name, image: artwork(item.images), url }] : [];
        });
        const albumMap = new Map();
        for (const item of [...top.items.slice(0, 12), ...recent.items.slice(0, 50).map(item => item?.track)]) {
          const mapped = track(item), url = spotifyUrl(item?.album?.external_urls?.spotify);
          if (mapped?.album && url && !albumMap.has(url)) albumMap.set(url, { title: mapped.album, artist: mapped.artist, cover: mapped.cover, url });
        }
        const result = { source: 'spotify', fetchedAt: new Date().toISOString(), period: 'Last 4 weeks', recentTracks, topTracks, topArtists, albums: [...albumMap.values()] };
        return reply(result);
      } catch (error) {
        if (error instanceof UpstreamError && error.retryAfter) headers['Retry-After'] = error.retryAfter;
        return reply({ error: 'Music is temporarily unavailable' }, error instanceof UpstreamError ? error.status : 502);
      }
    },
  };
}
// One named instance serializes refreshes and retains Spotify's rotated token.
export class MusicState {
  constructor(ctx, env, fetcher = fetch, now = Date.now) {
    this.now = now;
    this.clients = new Map();
    this.ctx = ctx;
    this.env = env;
    this.worker = createWorker(fetcher);
    this.queue = Promise.resolve();
    this.ready = ctx.blockConcurrencyWhile(async () => {
      const bytes = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(env.SPOTIFY_REFRESH_TOKEN ?? ''));
      const fingerprint = Array.from(new Uint8Array(bytes), byte => byte.toString(16).padStart(2, '0')).join('');
      const saved = await ctx.storage.get('credentials');
      this.credentials = saved?.fingerprint === fingerprint && string(saved.refreshToken)
        ? saved : { fingerprint, refreshToken: env.SPOTIFY_REFRESH_TOKEN };
      if (this.credentials !== saved) await ctx.storage.put('credentials', this.credentials);
      const cached = await ctx.storage.get('publicData');
      this.publicData = cached?.fingerprint === fingerprint ? cached : { fingerprint };
    });
  }

  fetch(request) {
    const origin = request.headers.get('origin');
    const headers = { 'Cache-Control': 'no-store', Vary: 'Origin' };
    if (origin && allowedOrigin(origin)) headers['Access-Control-Allow-Origin'] = origin;
    const error = (status, retry) => Response.json({ error: 'Music is temporarily unavailable' }, {
      status, headers: { ...headers, ...(retry ? { 'Retry-After': String(retry) } : {}) },
    });
    // Reject invalid traffic before storage, queueing, or consuming a client's allowance.
    if ((origin && !allowedOrigin(origin)) || new URL(request.url).pathname !== '/music' || request.method !== 'GET') {
      return this.worker.fetch(request, {});
    }
    const time = this.now();
    for (const [key, entry] of this.clients) if (time >= entry.until) this.clients.delete(key);
    // CF-Connecting-IP is supplied by Cloudflare, never trust forwarded-for headers.
    const ip = request.headers.get('CF-Connecting-IP') || 'unknown';
    let client = this.clients.get(ip);
    if (!client) {
      if (this.clients.size >= 1000) return Promise.resolve(error(429, 60));
      client = { until: time + 60000, count: 0 };
      this.clients.set(ip, client);
    }
    if (++client.count > 20) return Promise.resolve(error(429, Math.max(1, Math.ceil((client.until - time) / 1000))));
    const operation = this.queue.then(async () => {
      await this.ready;
      const current = this.now();
      const cached = this.publicData;
      if (cached.body && current >= cached.savedAt && current - cached.savedAt < CACHE_MS) {
        return Response.json(cached.body, { headers });
      }
      if (cached.retryAt > current) return error(cached.status || 502, Math.ceil((cached.retryAt - current) / 1000));
      const response = await this.worker.fetch(request, {
        ...this.env,
        SPOTIFY_REFRESH_TOKEN: this.credentials.refreshToken,
        saveRefreshToken: async refreshToken => {
          const next = { fingerprint: this.credentials.fingerprint, refreshToken };
          await this.ctx.storage.put('credentials', next);
          this.credentials = next;
        },
      });
      if (response.ok) {
        this.publicData = { fingerprint: this.credentials.fingerprint, savedAt: this.now(), body: await response.clone().json() };
      } else {
        const delay = Math.max(ERROR_BACKOFF_MS, Number(response.headers.get('Retry-After') || 0) * 1000);
        this.publicData = { fingerprint: this.credentials.fingerprint, retryAt: this.now() + delay, status: response.status };
        response.headers.set('Retry-After', String(Math.ceil(delay / 1000)));
      }
      await this.ctx.storage.put('publicData', this.publicData);
      return response;
    }).catch(() => error(502, 30));
    this.queue = operation.then(() => undefined);
    return operation;
  }
}

export default {
  fetch(request, env) {
    const id = env.MUSIC_STATE.idFromName('owner-music');
    return env.MUSIC_STATE.get(id).fetch(request);
  },
};
