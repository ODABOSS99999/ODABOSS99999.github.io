import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, writeFile, mkdir, readdir, rm, truncate } from 'node:fs/promises';
import { join } from 'node:path';
import { tmpdir } from 'node:os';
import sharp from 'sharp';
import { apiUrl, validatedUrl, normalizeRows, boundedFetch, syncInstagram } from './instagram-sync.mjs';

const now = new Date('2026-10-15T12:00:00Z');
function row(id = '12345678', changes = {}) {
  return { media_id: id, media_caption: 'Owner caption', media_permalink: `https://www.instagram.com/p/Photo_${id}/?utm_source=ig_web_copy_link`, media_type: 'IMAGE', media_url: 'https://scontent.cdninstagram.com/photo.jpg?signature=private', timestamp: '2026-10-14T12:00:00Z', ...changes };
}
async function fixture(t) {
  const root = await mkdtemp(join(tmpdir(), 'instagram-sync-test-'));
  t.after(() => rm(root, { recursive: true, force: true }));
  const input = join(root, 'input.json');
  const output = join(root, 'public-instagram');
  const image = await sharp({ create: { width: 32, height: 20, channels: 3, background: '#776655' } }).jpeg().toBuffer();
  const fetchImpl = async () => new Response(image, { headers: { 'content-type': 'image/jpeg' } });
  const writeInput = async data => writeFile(input, JSON.stringify({ status: 'done', data }));
  await writeInput([row()]);
  return { input, output, fetchImpl, writeInput };
}

test('API request is pinned to one account, documented fields, and rolling 30 days', () => {
  const url = apiUrl('test-secret');
  assert.equal(url.origin, 'https://connectors.windsor.ai');
  assert.equal(url.pathname, '/instagram');
  assert.equal(url.searchParams.get('date_preset'), 'last_30dT');
  assert.equal(url.searchParams.get('select_accounts'), '17841467441753084');
  assert.equal(url.searchParams.get('api_key'), 'test-secret');
  assert.throws(() => apiUrl(''));
});

test('URLs are restricted and permalinks lose tracking', () => {
  assert.equal(validatedUrl(row().media_permalink, 'permalink'), 'https://www.instagram.com/p/Photo_12345678/');
  for (const unsafe of ['http://scontent.cdninstagram.com/a', 'https://cdninstagram.com.evil.test/a', 'https://127.0.0.1/a', 'https://u:p@scontent.fbcdn.net/a', 'https://scontent.fbcdn.net:8443/a']) assert.throws(() => validatedUrl(unsafe, 'image'));
  assert.throws(() => validatedUrl('https://www.instagram.com/accounts/login/', 'permalink'));
});

test('normalization deduplicates, rejects incomplete response and requires video thumbnail', () => {
  assert.equal(normalizeRows({ status: 'done', data: [row(), row()] }, now).length, 1);
  for (const payload of [{ data: [] }, { status: 'running', data: [row()] }, { data: [row()], paging: { next: 'more' } }, { data: [row()], truncated: true }]) assert.throws(() => normalizeRows(payload, now));
  assert.throws(() => normalizeRows({ data: [row('12345678', { media_type: 'VIDEO', media_thumbnail_url: null })] }, now));
  const video = normalizeRows({ data: [row('12345678', { media_type: 'VIDEO', media_url: 'https://scontent.fbcdn.net/video.mp4', media_thumbnail_url: 'https://scontent.fbcdn.net/cover.jpg' })] }, now)[0];
  assert.match(video.previewUrl, /cover.jpg/);
  assert.throws(() => normalizeRows({ data: Array.from({ length: 101 }, (_, i) => row(String(12345000 + i))) }, now));
});

test('bounded fetch checks headers, streaming bytes and redirect policy', async () => {
  const fetchImpl = async (_, options) => {
    assert.equal(options.redirect, 'error');
    return new Response(new Uint8Array(10), { headers: { 'content-type': 'image/jpeg' } });
  };
  await assert.rejects(boundedFetch('https://scontent.fbcdn.net/a', { fetchImpl, maxBytes: 5, image: true }));
  await assert.rejects(boundedFetch('https://scontent.fbcdn.net/a', { fetchImpl: async () => new Response('oops', { headers: { 'content-type': 'text/html' } }), image: true }));
});

test('successful sync writes local WebP dimensions, exact captions and no signed source URLs', async t => {
  const f = await fixture(t);
  await syncInstagram({ ...f, now });
  const json = await readFile(join(f.output, 'feed.json'), 'utf8');
  const feed = JSON.parse(json);
  assert.equal(feed.version, 1);
  assert.equal(feed.account, 'mcgowen_media');
  assert.equal(feed.posts[0].caption, 'Owner caption');
  assert.deepEqual(feed.posts[0].image, { src: '/instagram/media/12345678.webp', width: 32, height: 20 });
  assert.ok(!json.includes('signature') && !json.includes('cdninstagram'));
  assert.equal((await sharp(await readFile(join(f.output, 'media/12345678.webp'))).metadata()).format, 'webp');
});

test('failed download and incomplete rows retain previous feed byte for byte', async t => {
  const f = await fixture(t);
  await syncInstagram({ ...f, now });
  const original = await readFile(join(f.output, 'feed.json'), 'utf8');
  await f.writeInput([row(), row('12345679')]);
  await assert.rejects(syncInstagram({ ...f, now, fetchImpl: async () => new Response('failure', { status: 500 }) }));
  assert.equal(await readFile(join(f.output, 'feed.json'), 'utf8'), original);
  await f.writeInput([row('12345679')]);
  await assert.rejects(syncInstagram({ ...f, now }));
  assert.equal(await readFile(join(f.output, 'feed.json'), 'utf8'), original);
});

test('older cached posts and files survive a moving 30-day source window', async t => {
  const f = await fixture(t);
  await syncInstagram({ ...f, now });
  await f.writeInput([row('12345679', { timestamp: '2026-11-30T12:00:00Z' })]);
  await syncInstagram({ ...f, now: new Date('2026-12-01T12:00:00Z') });
  const feed = JSON.parse(await readFile(join(f.output, 'feed.json'), 'utf8'));
  assert.deepEqual(feed.posts.map(p => p.id), ['12345679', '12345678']);
  assert.equal((await readdir(join(f.output, 'media'))).length, 2);
});

test('video downloads only thumbnail and carousel remains a source-linked cover', async t => {
  const f = await fixture(t);
  await f.writeInput([row('12345678', { media_type: 'VIDEO', media_url: 'https://scontent.fbcdn.net/never-download.mp4', media_thumbnail_url: 'https://scontent.fbcdn.net/video-cover.jpg' }), row('12345679', { media_type: 'CAROUSEL_ALBUM' })]);
  const urls = [];
  await syncInstagram({ ...f, now, fetchImpl: async (url, options) => { urls.push(String(url)); return f.fetchImpl(url, options); } });
  assert.ok(urls.some(url => url.includes('video-cover.jpg')));
  assert.ok(!urls.some(url => url.includes('.mp4')));
  const feed = JSON.parse(await readFile(join(f.output, 'feed.json'), 'utf8'));
  assert.equal(feed.posts.find(p => p.id === '12345679').mediaType, 'CAROUSEL_ALBUM');
});

test('a corrupt existing snapshot is not silently overwritten', async t => {
  const f = await fixture(t);
  await mkdir(f.output, { recursive: true });
  await writeFile(join(f.output, 'feed.json'), '{broken');
  await assert.rejects(syncInstagram({ ...f, now }));
  assert.equal(await readFile(join(f.output, 'feed.json'), 'utf8'), '{broken');
});

test('archive size ceiling fails closed without deleting old media', async t => {
  const f = await fixture(t);
  await syncInstagram({ ...f, now });
  const original = await readFile(join(f.output, 'feed.json'), 'utf8');
  const retained = join(f.output, 'media/older-retained.webp');
  await writeFile(retained, '');
  await truncate(retained, 240000001);
  await assert.rejects(syncInstagram({ ...f, now }));
  assert.equal(await readFile(join(f.output, 'feed.json'), 'utf8'), original);
  assert.ok((await readdir(join(f.output, 'media'))).includes('older-retained.webp'));
});

test('retained archive never silently drops posts at its 1000-post ceiling', async t => {
  const f = await fixture(t);
  const posts = Array.from({ length: 1000 }, (_, i) => {
    const id = String(22345000 + i);
    return { id, timestamp: '2026-01-01T00:00:00.000Z', image: { src: `/instagram/media/${id}.webp`, width: 10, height: 10 } };
  });
  await mkdir(f.output, { recursive: true });
  const original = JSON.stringify({ version: 1, account: 'mcgowen_media', fetchedAt: now.toISOString(), posts });
  await writeFile(join(f.output, 'feed.json'), original);
  await assert.rejects(syncInstagram({ ...f, now }));
  assert.equal(await readFile(join(f.output, 'feed.json'), 'utf8'), original);
});
