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
  for (const credentials of [env, env, { ...env, SPOTIFY_REFRESH_TOKEN: 'new-bootstrap' }]) {
    const state = new MusicState(durableContext(store), credentials, fetcher);
    assert.equal((await state.fetch(request())).status, 200);
  }
  assert.deepEqual(tokens, ['secret-refresh', 'rotated-1', 'new-bootstrap']);
  assert.equal(store.get('credentials').refreshToken, 'rotated-3');
  assert.match(store.get('credentials').fingerprint, /^[a-f0-9]{64}$/);
});

test('durable state queues concurrent requests so each refresh uses the last rotation', async () => {
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
  assert.deepEqual(tokens, ['secret-refresh', 'rotated-1', 'rotated-2']);
  for (const response of responses) {
    assert.equal(response.status, 200);
    assert.equal(JSON.stringify(await response.json()).includes('rotated'), false);
  }
});
