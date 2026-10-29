import { imageSize } from 'image-size';
import { Buffer } from 'node:buffer';

const ACCOUNT = 'mcgowen_media';
const ACCOUNT_ID = '17841467441753084';
// Keep the local preview range aligned with the statistics endpoint.
const ORIGINS = new Set(['https://mcgowen.works', 'https://www.mcgowen.works', 'https://odaboss99999.github.io', ...Array.from({length:27},(_,i)=>5173+i).flatMap(port=>[`http://127.0.0.1:${port}`,`http://localhost:${port}`])]);
const FIELDS = 'media_id,media_caption,media_permalink,media_type,media_url,media_thumbnail_url,timestamp';

function safeUrl(value, permalink = false) {
  const url = new URL(value);
  if (url.protocol !== 'https:' || url.username || url.password || url.port) throw new Error();
  if (permalink) {
    if (!['instagram.com', 'www.instagram.com'].includes(url.hostname) || !/^\/(p|reel|tv)\/[A-Za-z0-9_-]+\/?$/.test(url.pathname)) throw new Error();
    return `https://www.instagram.com${url.pathname.replace(/\/?$/, '/')}`;
  }
  if (!['cdninstagram.com', 'fbcdn.net'].some(host => url.hostname === host || url.hostname.endsWith(`.${host}`))) throw new Error();
  return url.href;
}

function normalize(payload, date) {
  if (!payload || payload.status !== undefined && payload.status !== 'done' || payload.error || payload.errors || payload.has_more || payload.next || payload.next_page || payload.paging?.next || payload.truncated || payload.partial || !Array.isArray(payload.data) || !payload.data.length || payload.data.length > 1000) throw new Error();
  const posts = new Map();
  for (const field of ['account', 'account_name', 'username', 'instagram_username']) if (payload[field] !== undefined && payload[field] !== ACCOUNT) throw new Error();
  for (const field of ['account_id', 'instagram_account_id']) if (payload[field] !== undefined && String(payload[field]) !== ACCOUNT_ID) throw new Error();
  for (const row of payload.data) {
    if (!row || !/^\d{5,40}$/.test(String(row.media_id ?? '')) || !['IMAGE', 'VIDEO', 'CAROUSEL_ALBUM'].includes(row.media_type)) throw new Error();
    for (const field of ['account', 'account_name', 'username', 'instagram_username']) if (row[field] !== undefined && row[field] !== ACCOUNT) throw new Error();
    for (const field of ['account_id', 'instagram_account_id']) if (row[field] !== undefined && String(row[field]) !== ACCOUNT_ID) throw new Error();
    const timestamp = new Date(row.timestamp);
    if (!row.timestamp || !Number.isFinite(timestamp.valueOf()) || timestamp.valueOf() > date.valueOf() + 86400000 || row.media_caption != null && typeof row.media_caption !== 'string') throw new Error();
    const post = { id: String(row.media_id), caption: row.media_caption ?? '', timestamp: timestamp.toISOString(), mediaType: row.media_type, permalink: safeUrl(row.media_permalink, true), previewUrl: safeUrl(row.media_type === 'VIDEO' ? row.media_thumbnail_url : row.media_url) };
    if (posts.has(post.id) && JSON.stringify(posts.get(post.id)) !== JSON.stringify(post)) throw new Error();
    posts.set(post.id, post);
  }
  if (posts.size > 100) throw new Error();
  return [...posts.values()].sort((a, b) => b.timestamp.localeCompare(a.timestamp) || b.id.localeCompare(a.id));
}

async function boundedFetch(url, fetchImpl, maxBytes, image = false) {
  const response = await fetchImpl(url, { redirect: 'error', signal: AbortSignal.timeout(15000), headers: { Accept: image ? 'image/jpeg,image/png,image/webp' : 'application/json' }, cache: 'no-store' });
  if (!response.ok || !response.body || Number(response.headers.get('content-length') ?? 0) > maxBytes) throw new Error();
  const mime = (response.headers.get('content-type') ?? '').split(';')[0].trim().toLowerCase();
  if (image && !['image/jpeg', 'image/png', 'image/webp'].includes(mime)) throw new Error();
  const reader = response.body.getReader();
  const chunks = [];
  let size = 0;
  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > maxBytes) throw new Error();
      chunks.push(value);
    }
  } finally { await reader.cancel().catch(() => {}); }
  return { bytes: Buffer.concat(chunks), mime };
}

// The rate cap is local to one isolate. Every accepted opening queries Windsor;
// Windsor/Instagram may impose their own refresh latency. No completed cache.
export function createLatestWorker({ fetchImpl = fetch, now = () => new Date(), loadPosts } = {}) {
  let windowStart;
  let requests = 0;
  return { async fetch(request, env = {}) {
    const origin = request.headers.get('Origin');
    const headers = { 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', Vary: 'Origin' };
    const send = (status, body) => new Response(JSON.stringify(body), { status, headers });
    if (origin && !ORIGINS.has(origin)) return send(403, { error: 'Origin not allowed' });
    if (origin) headers['Access-Control-Allow-Origin'] = origin;
    if (new URL(request.url).pathname !== '/api/instagram/feed') return send(404, { error: 'Not found' });
    if (request.method !== 'GET') { headers.Allow = 'GET'; return send(405, { error: 'Method not allowed' }); }
    try {
      const date = now();
      const time = date.valueOf();
      if (!Number.isFinite(time)) throw new Error();
      if (windowStart === undefined || time - windowStart >= 60000 || time < windowStart) { windowStart = time; requests = 0; }
      if (++requests > 30) { headers['Retry-After'] = String(Math.max(1, Math.ceil((windowStart + 60000 - time) / 1000))); return send(429, { error: 'Please try again shortly' }); }
      if (!env.WINDSOR_API_KEY && !loadPosts) throw new Error();
      const url = new URL('https://connectors.windsor.ai/instagram');
      url.search = new URLSearchParams({ api_key: env.WINDSOR_API_KEY, fields: FIELDS, date_preset: 'last_30dT', select_accounts: ACCOUNT_ID }).toString();
      const payload = loadPosts ? await loadPosts() : JSON.parse((await boundedFetch(url, fetchImpl, 5 * 1024 * 1024)).bytes.toString('utf8'));
      // Default preserves older clients; current clients request the latest 30.
      const requested = new URL(request.url).searchParams.get('limit') ?? '1';
      if (!/^[1-9]\d?$/.test(requested) || Number(requested) > 30) return send(400, { error: 'Invalid post limit' });
      const remoteCovers = new URL(request.url).searchParams.get('covers') === 'url';
      const recent = normalize(payload, date).slice(0, remoteCovers ? Number(requested) : 1);
      let cursor = 0;
      const posts = new Array(recent.length);
      async function loadCover(newest) {
        const { previewUrl: _preview, ...post } = newest;
        if (remoteCovers) {
          // Read only enough of the verified CDN raster to establish real dimensions.
          const response = await fetchImpl(newest.previewUrl, {redirect:'error',cache:'no-store',signal:AbortSignal.timeout(15000),headers:{Accept:'image/jpeg,image/png,image/webp',Range:'bytes=0-262143'}});
          const mime=(response.headers.get('content-type')??'').split(';')[0].trim().toLowerCase();
          if(!response.ok||!response.body||!['image/jpeg','image/png','image/webp'].includes(mime))throw new Error();
          const reader=response.body.getReader();let bytes=Buffer.alloc(0),size;
          try {
            while(bytes.length<262144){
              const chunk=await reader.read();if(chunk.done)break;
              bytes=Buffer.concat([bytes,Buffer.from(chunk.value.subarray(0,262144-bytes.length))]);
              try{size=imageSize(bytes);break;}catch{/* The JPEG header may span chunks. */}
            }
          }finally{await reader.cancel().catch(()=>{});}
          const expected={jpg:'image/jpeg',jpeg:'image/jpeg',png:'image/png',webp:'image/webp'}[size?.type];
          if(!size||expected!==mime||!Number.isInteger(size.width)||!Number.isInteger(size.height)||size.width<1||size.height<1||size.width*size.height>60000000)throw new Error();
          return {...post,image:{src:newest.previewUrl,width:size.width,height:size.height}};
        }
        const { bytes, mime } = await boundedFetch(newest.previewUrl, fetchImpl, 2 * 1024 * 1024, true);
        const size = imageSize(bytes);
        const expected = { jpg: 'image/jpeg', jpeg: 'image/jpeg', png: 'image/png', webp: 'image/webp' }[size.type];
        if (!expected || expected !== mime || !Number.isInteger(size.width) || !Number.isInteger(size.height) || size.width < 1 || size.height < 1 || size.width * size.height > 60000000) throw new Error();
        return { ...post, image: { src: `data:${expected};base64,${bytes.toString('base64')}`, width: size.width, height: size.height } };
      }
      // Bound concurrent downloads and the total response; preserve timestamp order.
      await Promise.all(Array.from({length: Math.min(4, recent.length)}, async () => {
        while (cursor < recent.length) { const index = cursor++; posts[index] = await loadCover(recent[index]); }
      }));
      return send(200, { version: 1, account: ACCOUNT, fetchedAt: now().toISOString(), posts });
    } catch {
      // Do not log or expose exceptions: request URLs contain the private key.
      return send(503, { error: 'Latest Instagram post is temporarily unavailable' });
    }
  } };
}

export default createLatestWorker();
