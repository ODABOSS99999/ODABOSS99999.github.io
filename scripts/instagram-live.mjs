import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { ACCOUNT_ID, boundedFetch, validatedUrl } from './instagram-sync.mjs';
import { normalizeStats } from './instagram-stats-sync.mjs';
import { normalizeMetrics } from './instagram-metrics-sync.mjs';

const incomplete = p => !p || (p.status !== undefined && p.status !== 'done') || p.error || p.errors || p.partial || p.truncated || p.next || p.next_page || p.has_more || p.paging?.next;
function fresh(value, now) {
  if (typeof value !== 'string' || !value) throw new Error('Missing source time');
  const utc = /[zZ]$|[+-]\d\d:\d\d$/.test(value) ? value : `${value}Z`;
  const age = now.valueOf() - Date.parse(utc);
  if (!Number.isFinite(age) || age > 120000 || age < -30000) throw new Error('Source is not current');
}
function archivePosts(payload, now) {
  if (incomplete(payload) || !Array.isArray(payload.data) || payload.data.length > 1000) throw new Error('Incomplete archive');
  const posts = new Map();
  for (const p of payload.data) {
    fresh(p.data_fetched_at, now);
    const id = String(p.media_id ?? '');
    const timestamp = new Date(p.timestamp);
    if (!/^\d{5,40}$/.test(id) || !p.timestamp || !Number.isFinite(timestamp.valueOf()) || timestamp.valueOf() > now.valueOf() + 30000 || (p.media_caption != null && typeof p.media_caption !== 'string')) throw new Error('Invalid archive');
    const post = { id, timestamp: timestamp.toISOString(), caption: p.media_caption ?? '', permalink: validatedUrl(p.media_permalink, 'permalink') };
    if (posts.has(id) && JSON.stringify(posts.get(id)) !== JSON.stringify(post)) throw new Error('Conflicting archive');
    posts.set(id, post);
  }
  return [...posts.values()];
}

export function createInstagramHandler({ key = process.env.WINDSOR_API_KEY, origin = process.env.SITE_ORIGIN || 'http://127.0.0.1:5173', fetchImpl = fetch, now = () => new Date(), timeoutMs = 15000, readHistory = async () => JSON.parse(await readFile(resolve('public/instagram/stats.json'), 'utf8')) } = {}) {
  const pending = new Map();
  async function query(fields, archive, time) {
    if (!key) throw new Error('Missing server credential');
    const url = new URL('https://connectors.windsor.ai/instagram');
    url.search = new URLSearchParams({ api_key: key, select_accounts: ACCOUNT_ID, fields, ...(archive ? { date_from: '2010-01-01', date_to: time.toISOString().slice(0, 10) } : { date_preset: 'last_1dT' }) }).toString();
    const payload = JSON.parse((await boundedFetch(url, { fetchImpl, timeoutMs, maxBytes: 10 * 1024 * 1024 })).toString('utf8'));
    if (incomplete(payload)) throw new Error('Incomplete source');
    return payload;
  }
  async function load(kind) {
    const time = now();
    if (kind === 'metrics') {
      const result = normalizeMetrics(await query('media_id,media_permalink,media_like_count,media_comments_count,media_views,data_fetched_at', true, time), time);
      result.posts.forEach(p => fresh(p.checkedAt, now()));
      return result;
    }
    const [profile, archive, history] = await Promise.all([
      query('username,followers_count,media_count,data_fetched_at', false, time),
      query('media_id,media_caption,media_permalink,timestamp,data_fetched_at', true, time),
      Promise.resolve().then(readHistory).catch(() => ({})),
    ]);
    if (profile.status === undefined) profile.status = 'done';
    const posts = archivePosts(archive, now());
    // Historic points are context only; current counts and tracked posts come from these requests.
    const followerHistory = Array.isArray(history?.followerHistory) ? history.followerHistory.filter(p => typeof p?.date === 'string' && Number.isFinite(Date.parse(p.date)) && Number.isSafeInteger(p.count) && p.count >= 0 && Date.parse(p.date) <= time.valueOf()) : [];
    const result = normalizeStats(profile, { followerHistory }, { posts });
    fresh(result.checkedAt, now());
    if (result.trackedPosts.length !== result.posts) throw new Error('Incomplete archive count');
    return result;
  }
  return async (req, res) => {
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('Vary', 'Origin');
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    if (req.headers.origin && req.headers.origin !== origin) { res.writeHead(403); res.end('{"error":"Origin unavailable"}'); return; }
    if (req.headers.origin === origin) res.setHeader('Access-Control-Allow-Origin', origin);
    const path = new URL(req.url, 'http://localhost').pathname;
    const kind = path === '/api/instagram/stats' ? 'stats' : path === '/api/instagram/metrics' ? 'metrics' : null;
    if (!kind) { res.writeHead(404); res.end('{"error":"Not found"}'); return; }
    if (req.method === 'OPTIONS') { res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS'); res.writeHead(204); res.end(); return; }
    if (req.method !== 'GET') { res.setHeader('Allow', 'GET, OPTIONS'); res.writeHead(405); res.end('{"error":"Method unavailable"}'); return; }
    try {
      if (!pending.has(kind)) {
        const request = load(kind).finally(() => pending.delete(kind));
        pending.set(kind, request);
      }
      const result = await pending.get(kind);
      res.writeHead(200); res.end(JSON.stringify(result));
    } catch { res.writeHead(503); res.end('{"error":"Current Instagram data unavailable"}'); }
  };
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const port = Number(process.env.PORT || 8787);
  if (!Number.isInteger(port) || port < 1 || port > 65535) { console.error('Invalid server port.'); process.exitCode = 1; }
  else {
    const server = createServer(createInstagramHandler());
    server.on('error', () => { console.error('Instagram local server unavailable.'); process.exitCode = 1; });
    server.listen(port, '127.0.0.1', () => console.log(`Instagram local API listening on http://127.0.0.1:${port}/api/instagram`));
  }
}
