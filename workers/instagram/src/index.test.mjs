import test from 'node:test';
import assert from 'node:assert/strict';
import sharp from 'sharp';
import { createLatestWorker } from './index.mjs';

const date = new Date('2026-10-17T12:00:00Z');
const old = { media_id: '12345', timestamp: '2026-10-15T12:00:00Z', media_type: 'IMAGE', media_caption: 'Post', media_permalink: 'https://www.instagram.com/p/post12345/', media_url: 'https://scontent.cdninstagram.com/12345.jpg' };
const fresh = { ...old, media_id: '12346', timestamp: '2026-10-16T12:00:00Z' };
const jpeg = await sharp({ create: { width: 1080, height: 720, channels: 3, background: '#123456' } }).jpeg().toBuffer();
const env = { WINDSOR_API_KEY: 'PRIVATE_SECRET' };
const req = (options = {}) => new Request(options.url ?? 'https://example.workers.dev/api/instagram/feed', { method: options.method ?? 'GET', headers: { Origin: options.origin ?? 'https://mcgowen.works' } });

test('preview ports retain CORS headers while lookalike and nonlocal origins are denied',async()=>{
 for(const origin of ['http://127.0.0.1:5175','http://localhost:5199']){
  const response=await createLatestWorker().fetch(req({origin,method:'HEAD'}));assert.equal(response.status,405);assert.equal(response.headers.get('access-control-allow-origin'),origin);
 }
 for(const origin of ['http://localhost:5200','http://localhost.evil.example:5175','http://192.168.1.1:5175'])assert.equal((await createLatestWorker().fetch(req({origin}))).status,403);
});
function fixture(payloads) {
  const urls = [];
  const options = [];
  return { urls, options, fetchImpl: async (url, init) => {
    urls.push(String(url)); options.push(init);
    return String(url).includes('connectors.windsor.ai') ? new Response(JSON.stringify(payloads.shift()), { headers: { 'content-type': 'application/json' } }) : new Response(jpeg, { headers: { 'content-type': 'image/jpeg' } });
  } };
}

test('every opening fetches upstream again and uses actual image dimensions', async () => {
  const f = fixture([{ data: [old] }, { data: [old, fresh] }]);
  const worker = createLatestWorker({ fetchImpl: f.fetchImpl, now: () => date });
  assert.equal((await (await worker.fetch(req(), env)).json()).posts[0].id, old.media_id);
  const response = await worker.fetch(req(), env);
  assert.equal(response.status, 200); assert.equal(response.headers.get('Cache-Control'), 'no-store');
  const body = await response.json();
  assert.equal(body.posts[0].id, fresh.media_id); assert.equal(body.account, 'mcgowen_media'); assert.equal(body.fetchedAt, date.toISOString());
  assert.equal(f.urls.filter(url => url.includes('connectors.windsor.ai')).length, 2);
  assert.ok(f.options.every(init => init.redirect === 'error' && init.signal && init.cache === 'no-store'));
  const image = body.posts[0].image;
  const actual = await sharp(Buffer.from(image.src.split(',')[1], 'base64')).metadata();
  assert.equal(image.width, actual.width); assert.equal(image.height, actual.height); assert.equal(image.width, 1080);
});

test('direct Instagram loader checks again on every opening without a Windsor credential', async () => {
  const f = fixture([]);
  let calls = 0;
  const worker = createLatestWorker({ fetchImpl: f.fetchImpl, now: () => date, loadPosts: async () => ({ account: 'mcgowen_media', data: ++calls === 1 ? [old] : [old, fresh] }) });
  assert.equal((await (await worker.fetch(req())).json()).posts[0].id, old.media_id);
  assert.equal((await (await worker.fetch(req())).json()).posts[0].id, fresh.media_id);
  assert.equal(calls, 2);
  assert.equal(f.urls.some(url => url.includes('connectors.windsor.ai')), false);
});

test('newest video fetches its cover, including when older photo is first', async () => {
  const video = { ...fresh, media_type: 'VIDEO', media_url: 'https://scontent.cdninstagram.com/movie.mp4', media_thumbnail_url: 'https://scontent.cdninstagram.com/cover.jpg' };
  const f = fixture([{ data: [old, video] }]);
  const response = await createLatestWorker({ fetchImpl: f.fetchImpl, now: () => date }).fetch(req(), env);
  assert.equal(response.status, 200); assert.equal(f.urls[1], video.media_thumbnail_url);
});

test('invalid or wrong-account rows fail without media fetch or revealing secrets', async () => {
  for (const payload of [null, { data: [] }, { data: 'bad' }, { data: [{ ...fresh, username: 'other' }] }, { data: [{ ...fresh, account_id: '1' }] }, { data: [fresh, { ...old, media_url: 'https://evil.example/img.jpg' }] }, { data: [fresh], partial: true }]) {
    const f = fixture([payload]);
    const response = await createLatestWorker({ fetchImpl: f.fetchImpl, now: () => date }).fetch(req(), env);
    assert.equal(response.status, 503); assert.equal(f.urls.length, 1);
    assert.deepEqual(await response.json(), { error: 'Latest Instagram post is temporarily unavailable' });
  }
  const response = await createLatestWorker({ fetchImpl: async () => { throw new Error(env.WINDSOR_API_KEY); } }).fetch(req(), env);
  assert.equal(response.status, 503); assert.ok(!(await response.text()).includes(env.WINDSOR_API_KEY));
});

test('unknown origin, method and path are blocked before upstream', async () => {
  let calls = 0;
  const worker = createLatestWorker({ fetchImpl: async () => { calls++; throw new Error(); } });
  const rejected = await worker.fetch(req({ origin: 'https://evil.example' }), env);
  assert.equal(rejected.status, 403); assert.equal(rejected.headers.get('Access-Control-Allow-Origin'), null);
  const method = await worker.fetch(req({ method: 'POST' }), env);
  assert.equal(method.status, 405); assert.equal(method.headers.get('Allow'), 'GET');
  assert.equal((await worker.fetch(req({ url: 'https://example.workers.dev/elsewhere' }), env)).status, 404); assert.equal(calls, 0);
  assert.equal((await worker.fetch(req({ method: 'OPTIONS' }), env)).status, 405); assert.equal(calls, 0);
});

test('missing credential fails safely without contacting upstream', async () => {
  let calls = 0;
  const worker = createLatestWorker({ fetchImpl: async () => { calls++; throw new Error(); } });
  const response = await worker.fetch(req(), {});
  assert.equal(response.status, 503); assert.equal(calls, 0);
  assert.deepEqual(await response.json(), { error: 'Latest Instagram post is temporarily unavailable' });
});

test('oversized, corrupt and mismatched image types fail safely', async () => {
  for (const [bytes, mime, length] of [[jpeg, 'image/png'], [Buffer.from('not an image'), 'image/jpeg'], [jpeg, 'image/svg+xml'], [jpeg, 'image/jpeg', String(3 * 1024 * 1024)]]) {
    let calls = 0;
    const fetchImpl = async () => ++calls === 1 ? new Response(JSON.stringify({ data: [fresh] })) : new Response(bytes, { headers: { 'content-type': mime, ...(length ? { 'content-length': length } : {}) } });
    assert.equal((await createLatestWorker({ fetchImpl, now: () => date }).fetch(req(), env)).status, 503);
  }
});

test('isolate-local rate limit caps requests and resets after one minute', async () => {
  let current = date; let calls = 0;
  const worker = createLatestWorker({ now: () => current, fetchImpl: async () => { calls++; throw new Error(); } });
  for (let i = 0; i < 30; i++) assert.equal((await worker.fetch(req(), env)).status, 503);
  assert.equal((await worker.fetch(req(), env)).status, 429); assert.equal(calls, 30);
  current = new Date(date.valueOf() + 60000);
  assert.equal((await worker.fetch(req(), env)).status, 503); assert.equal(calls, 31);
});

test('recent batch includes every requested post newest first and uses video thumbnails',async()=>{
 const video={...fresh,media_type:'VIDEO',media_thumbnail_url:'https://scontent.cdninstagram.com/cover.jpg'};
 const f=fixture([{data:[old,video]}]);
 const response=await createLatestWorker({fetchImpl:f.fetchImpl,now:()=>date}).fetch(req({url:'https://example.workers.dev/api/instagram/feed?limit=30&covers=url'}),env);
 assert.equal(response.status,200);
 const body=await response.json();assert.deepEqual(body.posts.map(post=>post.id),[fresh.media_id,old.media_id]);
 assert.ok(f.urls.includes(video.media_thumbnail_url));
 assert.ok(body.posts.every(post=>post.image.width===1080&&post.image.src.startsWith('https://scontent.cdninstagram.com/')));
});

test('recent CDN covers use bounded header probes and verified dimensions without embedding full images',async()=>{
 const f=fixture([{data:[old,fresh]}]);
 const response=await createLatestWorker({fetchImpl:f.fetchImpl,now:()=>date}).fetch(req({url:'https://example.workers.dev/api/instagram/feed?limit=30&covers=url'}),env);
 assert.equal(response.status,200);const body=await response.json();
 assert.equal(body.posts.length,2);assert.equal(body.posts[0].image.src,fresh.media_url);assert.equal(body.posts[0].image.width,1080);
 assert.ok(f.options.slice(1).every(options=>options.headers.Range==='bytes=0-262143'));
 assert.ok(JSON.stringify(body).length<2000);
});
