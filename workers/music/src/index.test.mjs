import test from 'node:test';
import assert from 'node:assert/strict';
import { createWorker, MusicState } from './index.mjs';

const env = { SPOTIFY_CLIENT_ID: 'test-client', SPOTIFY_REFRESH_TOKEN: 'secret-refresh' };
const request = (path = '/music', options = {}) => new Request(`https://music.example${path}`, options);
const json = value => Response.json(value);
const song = { id: 'track', name: 'Song', artists: [{ name: 'Artist' }], external_urls: { spotify: 'https://open.spotify.com/track/track' }, album: { name: 'Album', images: [{ url: 'https://i.scdn.co/image/cover' }], external_urls: { spotify: 'https://open.spotify.com/album/album' } } };

test('only allowed origins, route and read methods reach Spotify', async () => {
  let calls = 0;
  const worker = createWorker(() => { calls++; throw Error('unexpected'); });
  for (const [req, status] of [
    [request('/other'), 404],
    [request('/music', { method: 'POST' }), 405],
    [request('/music', { headers: { Origin: 'https://evil.example' } }), 403],
    [request('/music', { method: 'OPTIONS', headers: { Origin: 'https://mcgowen.works' } }), 204],
  ]) assert.equal((await worker.fetch(req, env)).status, status);
  assert.equal(calls, 0);
  assert.equal((await worker.fetch(request(), {})).status, 503);
});

test('normalizes fixed Spotify endpoints and refreshes each request without caching tokens or payloads', async () => {
  const calls = [];
  const worker = createWorker(async (url, options) => {
    calls.push({ url, options });
    if (url.includes('/api/token')) return json({ access_token: 'secret-access' });
    assert.equal(options.headers.Authorization, 'Bearer secret-access');
    if (url.includes('recently-played')) return json({ items: [{ track: song, played_at: '2026-10-22T12:00:00Z' }, { track: song, played_at: 'invalid' }] });
    if (url.includes('/top/tracks')) return json({ items: [song, { ...song, external_urls: { spotify: 'https://evil.example' } }] });
    return json({ items: [{ name: 'Artist', images: [{ url: 'javascript:alert(1)' }], external_urls: { spotify: 'https://open.spotify.com/artist/artist' } }] });
  });
  for (let i = 0; i < 2; i++) {
    const response = await worker.fetch(request('/music?path=/me/private', { headers: { Origin: 'http://localhost:5173' } }), env);
    assert.equal(response.status, 200);
    assert.equal(response.headers.get('cache-control'), 'no-store');
    assert.equal(response.headers.get('access-control-allow-origin'), 'http://localhost:5173');
    const body = await response.json();
    assert.equal(body.recentTracks.length, 1);
    assert.equal(body.topTracks.length, 1);
    assert.equal(body.topArtists[0].image, null);
    assert.equal(body.albums.length, 1);
    assert.equal(JSON.stringify(body).includes('secret'), false);
  }
  assert.equal(calls.length, 8);
  assert.deepEqual(calls.slice(1, 4).map(call => call.url), [
    'https://api.spotify.com/v1/me/player/recently-played?limit=50',
    'https://api.spotify.com/v1/me/top/tracks?limit=12&time_range=short_term',
    'https://api.spotify.com/v1/me/top/artists?limit=8&time_range=short_term',
  ]);
});

test('rate limits retain a bounded retry delay and expose no upstream error details', async () => {
  const worker = createWorker(async () => new Response('secret upstream details', { status: 429, headers: { 'Retry-After': '999999' } }));
  const response = await worker.fetch(request(), env);
  assert.equal(response.status, 429);
  assert.equal(response.headers.get('retry-after'), '86400');
  assert.deepEqual(await response.json(), { error: 'Music is temporarily unavailable' });
});

test('local credential adapter persists rotation before reading Spotify data', async () => {
  let saved;
  const worker = createWorker(async url => {
    if (url.includes('/api/token')) return json({ access_token: 'secret-access', refresh_token: 'secret-replacement' });
    assert.equal(saved, 'secret-replacement');
    return json({ items: [] });
  });
  const response = await worker.fetch(request(), { ...env, saveRefreshToken: async value => { saved = value; } });
  assert.equal(response.status, 200);
  assert.equal(JSON.stringify(await response.json()).includes('secret'), false);
});

test('invalid JSON, missing token, malformed data, and transport failures return isolated errors', async () => {
  for (const fetcher of [
    async () => new Response('invalid'),
    async () => json({}),
    async url => json(url.includes('/api/token') ? { access_token: 'secret-access' } : { items: null }),
    async () => { throw Error('secret transport error'); },
  ]) {
    const response = await createWorker(fetcher).fetch(request(), env);
    assert.equal(response.status, 502);
    assert.deepEqual(await response.json(), { error: 'Music is temporarily unavailable' });
  }
});

function durableContext(store = new Map()) {
  return {
    storage: {
      get: async key => structuredClone(store.get(key)),
      put: async (key, value) => { store.set(key, structuredClone(value)); },
    },
    blockConcurrencyWhile: callback => callback(),
  };
}

test('durable state persists rotated credentials across instances and resets for a new bootstrap secret', async () => {
  const store = new Map();
  const tokens = [];
  const fetcher = async (url, options) => {
    if (!url.includes('/api/token')) return json({ items: [] });
    tokens.push(options.body.get('refresh_token'));
    return json({ access_token: 'secret-access', refresh_token: `rotated-${tokens.length}` });
  };
  let clock = Date.now();
  for (const credentials of [env, env, { ...env, SPOTIFY_REFRESH_TOKEN: 'new-bootstrap' }]) {
    const state = new MusicState(durableContext(store), credentials, fetcher, () => clock);
    clock += 61000;
    assert.equal((await state.fetch(request())).status, 200);
  }
  assert.deepEqual(tokens, ['secret-refresh', 'rotated-1', 'new-bootstrap']);
  assert.equal(store.get('credentials').refreshToken, 'rotated-3');
  assert.match(store.get('credentials').fingerprint, /^[a-f0-9]{64}$/);
});

test('durable state deduplicates concurrent requests while preserving rotation', async () => {
  const tokens = [];
  let release;
  const gate = new Promise(resolve => { release = resolve; });
  const state = new MusicState(durableContext(), env, async (url, options) => {
    if (!url.includes('/api/token')) return json({ items: [] });
    tokens.push(options.body.get('refresh_token'));
    if (tokens.length === 1) await gate;
    return json({ access_token: 'secret-access', refresh_token: `rotated-${tokens.length}` });
  });
  const pending = [state.fetch(request()), state.fetch(request()), state.fetch(request())];
  release();
  const responses = await Promise.all(pending);
  assert.deepEqual(tokens, ['secret-refresh']);
  for (const response of responses) {
    assert.equal(response.status, 200);
    assert.equal(JSON.stringify(await response.json()).includes('rotated'), false);
  }
});


test('shared cache survives restart, retains fetchedAt, expires at sixty seconds and blocks bad origins', async () => {
  const store = new Map();
  let clock = Date.now(), calls = 0;
  const fetcher = async url => { calls++; return json(url.includes('/api/token') ? { access_token: 'secret-access' } : { items: [] }); };
  let state = new MusicState(durableContext(store), env, fetcher, () => clock);
  const first = await (await state.fetch(request())).json();
  clock += 59000;
  state = new MusicState(durableContext(store), env, fetcher, () => clock);
  const cached = await state.fetch(request('/music', { headers: { Origin: 'https://www.mcgowen.works' } }));
  assert.equal(cached.headers.get('access-control-allow-origin'), 'https://www.mcgowen.works');
  assert.equal((await cached.json()).fetchedAt, first.fetchedAt);
  assert.equal((await state.fetch(request('/music', { headers: { Origin: 'https://evil.example' } }))).status, 403);
  assert.equal(calls, 4);
  clock += 1000;
  assert.equal((await state.fetch(request())).status, 200);
  assert.equal(calls, 8);
  assert.equal(JSON.stringify(store.get('publicData')).includes('secret'), false);
});

test('upstream cooldown persists across restart and respects Retry-After without serving stale data', async () => {
  for (const status of [429, 502]) {
    const store = new Map();
    let clock = Date.now(), calls = 0;
    const fetcher = async () => { calls++; return new Response('private failure', { status, headers: { 'Retry-After': '90' } }); };
    let state = new MusicState(durableContext(store), env, fetcher, () => clock);
    const first = await state.fetch(request());
    assert.equal(first.status, status);
    assert.equal(first.headers.has('X-Music-Diagnostic'), false);
    assert.equal(first.headers.get('Retry-After'), '90');
    clock += 60000;
    state = new MusicState(durableContext(store), env, fetcher, () => clock);
    const second = await state.fetch(request());
    assert.equal(second.headers.get('Retry-After'), '30');
    assert.equal(calls, 1);
    clock += 30000;
    await state.fetch(request());
    assert.equal(calls, 2);
  }
});

test('per-IP limiter caps requests, isolates visitors and resets its bounded window', async () => {
  let clock = Date.now(), calls = 0;
  const state = new MusicState(durableContext(), env, async url => { calls++; return json(url.includes('/api/token') ? { access_token: 'secret-access' } : { items: [] }); }, () => clock);
  const visit = ip => state.fetch(request('/music', { headers: { 'CF-Connecting-IP': ip } }));
  for (let i = 0; i < 20; i++) assert.equal((await visit('192.0.2.1')).status, 200);
  assert.equal((await visit('192.0.2.1')).status, 429);
  assert.equal((await visit('192.0.2.2')).status, 200);
  assert.equal(calls, 4);
  clock += 60000;
  assert.equal((await visit('192.0.2.1')).status, 200);
  assert.equal(calls, 8);
});


test('transport failures use a default cooldown and IP entry storage stays bounded', async () => {
  let calls = 0;
  const state = new MusicState(durableContext(), env, async () => { calls++; throw Error('private detail'); });
  for (let i = 0; i < 1000; i++) {
    const response = await state.fetch(request('/music', { headers: { 'CF-Connecting-IP': `visitor-${i}` } }));
    assert.equal(response.status, 502);
    assert.ok(Number(response.headers.get('Retry-After')) <= 30);
    assert.equal(response.headers.has('X-Music-Diagnostic'), false);
  }
  const response = await state.fetch(request('/music', { headers: { 'CF-Connecting-IP': 'overflow' } }));
  assert.equal(response.status, 429);
  assert.equal(state.clients.size, 1000);
  assert.equal(calls, 1);
});


test('Spotify fetches use Workers-compatible manual redirects and reject redirect responses', async () => {
  for (const redirectToken of [true, false]) {
    const calls = [];
    const worker = createWorker(async (url, options) => {
      calls.push(url);
      assert.equal(options.redirect, 'manual');
      if (url.includes('/api/token') && !redirectToken) return json({ access_token: 'secret-access' });
      return new Response(null, { status: 302, headers: { Location: 'https://evil.example/collect' } });
    });
    const response = await worker.fetch(request(), env);
    assert.equal(response.status, 502);
    assert.deepEqual(await response.json(), { error: 'Music is temporarily unavailable' });
    assert.equal(calls.length, redirectToken ? 1 : 4);
    assert.ok(calls.every(url => !url.includes('evil.example')));
  }
});
