import { readFile, writeFile, mkdir, rename, mkdtemp, rm, copyFile, readdir, stat } from 'node:fs/promises';
import { resolve, join } from 'node:path';
import { tmpdir } from 'node:os';
import { pathToFileURL } from 'node:url';
import sharp from 'sharp';

export const ACCOUNT = 'mcgowen_media';
export const ACCOUNT_ID = '17841467441753084';
export const FIELDS = ['media_id', 'media_caption', 'media_permalink', 'media_type', 'media_url', 'media_thumbnail_url', 'timestamp'];
const MAX_BYTES = 20 * 1024 * 1024;
const MAX_POSTS = 100;

export function apiUrl(key) {
  if (!key) throw new Error('Missing Windsor credential');
  const url = new URL('https://connectors.windsor.ai/instagram');
  url.search = new URLSearchParams({ api_key: key, fields: FIELDS.join(','), date_preset: 'last_30dT', select_accounts: ACCOUNT_ID }).toString();
  return url;
}

export function validatedUrl(value, kind) {
  let url;
  try { url = new URL(value); } catch { throw new Error('Invalid source URL'); }
  if (url.protocol !== 'https:' || url.username || url.password || url.port) throw new Error('Unsafe source URL');
  const host = url.hostname.toLowerCase();
  if (kind === 'permalink') {
    if (!['instagram.com', 'www.instagram.com'].includes(host) || !/^\/(p|reel|tv)\/[A-Za-z0-9_-]+\/?$/.test(url.pathname)) throw new Error('Invalid Instagram permalink');
    return `https://www.instagram.com${url.pathname.replace(/\/?$/, '/')}`;
  }
  if (!['cdninstagram.com', 'fbcdn.net'].some(domain => host === domain || host.endsWith(`.${domain}`))) throw new Error('Unapproved image host');
  return url.href;
}

export function normalizeRows(payload, now = new Date()) {
  if (!payload || (payload.status !== undefined && payload.status !== 'done') || payload.error || payload.errors || payload.has_more || payload.next || payload.next_page || payload.paging?.next || payload.truncated || payload.partial) throw new Error('Incomplete Windsor response');
  if (!Array.isArray(payload.data) || !payload.data.length || payload.data.length > 1000) throw new Error('Missing or excessive source rows');
  const unique = new Map();
  for (const row of payload.data) {
    if (!row || !/^\d{5,40}$/.test(String(row.media_id ?? ''))) throw new Error('Invalid post identifier');
    const id = String(row.media_id);
    const mediaType = row.media_type;
    if (!['IMAGE', 'VIDEO', 'CAROUSEL_ALBUM'].includes(mediaType)) throw new Error('Unsupported media type');
    const timestamp = new Date(row.timestamp);
    if (!row.timestamp || !Number.isFinite(timestamp.valueOf()) || timestamp.valueOf() > now.valueOf() + 86400000) throw new Error('Invalid post timestamp');
    if (row.media_caption !== undefined && row.media_caption !== null && typeof row.media_caption !== 'string') throw new Error('Invalid caption');
    const preview = mediaType === 'VIDEO' ? row.media_thumbnail_url : row.media_url;
    const post = { id, caption: row.media_caption ?? '', permalink: validatedUrl(row.media_permalink, 'permalink'), timestamp: timestamp.toISOString(), mediaType, previewUrl: validatedUrl(preview, 'image') };
    if (unique.has(id) && JSON.stringify(unique.get(id)) !== JSON.stringify(post)) throw new Error('Conflicting source rows');
    unique.set(id, post);
  }
  if (unique.size > MAX_POSTS) throw new Error('Post limit exceeded');
  return [...unique.values()].sort((a, b) => b.timestamp.localeCompare(a.timestamp) || b.id.localeCompare(a.id));
}

export async function boundedFetch(url, { fetchImpl = fetch, maxBytes = MAX_BYTES, image = false } = {}) {
  const response = await fetchImpl(url, { redirect: 'error', signal: AbortSignal.timeout(30000), headers: { 'User-Agent': 'Windsor/1.0', Accept: image ? 'image/*' : 'application/json' } });
  if (!response.ok) throw new Error('Remote request failed');
  if (image && !/^image\/(jpeg|png|webp|avif)(;|$)/i.test(response.headers.get('content-type') ?? '')) throw new Error('Expected image response');
  const length = Number(response.headers.get('content-length') ?? 0);
  if (length > maxBytes || !response.body) throw new Error('Response exceeds size limit');
  let size = 0;
  const chunks = [];
  for await (const chunk of response.body) {
    size += chunk.length;
    if (size > maxBytes) throw new Error('Response exceeds size limit');
    chunks.push(chunk);
  }
  return Buffer.concat(chunks);
}

export async function syncInstagram({ input, output = resolve('public/instagram'), key = process.env.WINDSOR_API_KEY, fetchImpl = fetch, now = new Date() } = {}) {
  const payload = input ? JSON.parse(await readFile(input, 'utf8')) : JSON.parse((await boundedFetch(apiUrl(key), { fetchImpl, maxBytes: 5 * 1024 * 1024 })).toString('utf8'));
  const rows = normalizeRows(payload, now);
  let previous;
  try { previous = JSON.parse(await readFile(join(output, 'feed.json'), 'utf8')); } catch (error) { if (error.code !== 'ENOENT') throw new Error('Previous snapshot unreadable'); }
  if (previous) {
    if (previous.version !== 1 || previous.account !== ACCOUNT || !Array.isArray(previous.posts) || previous.posts.some(post => !/^\d{5,40}$/.test(post.id) || post.image?.src !== `/instagram/media/${post.id}.webp` || !Number.isFinite(new Date(post.timestamp).valueOf()))) throw new Error('Previous snapshot invalid');
    // The moving query window may shed old posts; missing recent posts could mean
    // a partial connector result. Keep the last good feed until reviewed.
    const cutoff = now.valueOf() - 29 * 86400000;
    const ids = new Set(rows.map(row => row.id));
    if (previous.posts.some(post => new Date(post.timestamp).valueOf() >= cutoff && !ids.has(post.id))) throw new Error('Recent posts unexpectedly missing');
  }
  const staging = await mkdtemp(join(tmpdir(), 'mcgowen-instagram-'));
  try {
    const posts = [];
    let totalBytes = 0;
    for (const row of rows) {
      const bytes = await boundedFetch(row.previewUrl, { fetchImpl, image: true });
      const { data, info } = await sharp(bytes, { limitInputPixels: 60000000 }).rotate().resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true }).webp({ quality: 84 }).toBuffer({ resolveWithObject: true });
      totalBytes += data.length;
      if (totalBytes > 200 * 1024 * 1024) throw new Error('Snapshot asset budget exceeded');
      await writeFile(join(staging, `${row.id}.webp`), data);
      const { previewUrl: _preview, ...post } = row;
      posts.push({ ...post, image: { src: `/instagram/media/${row.id}.webp`, width: info.width, height: info.height } });
    }
    const mediaDir = join(output, 'media');
    const merged = new Map((previous?.posts ?? []).map(post => [post.id, post]));
    for (const post of posts) merged.set(post.id, post);
    if (merged.size > 1000) throw new Error('Archive post limit exceeded; owner review required');
    const feed = { version: 1, account: ACCOUNT, fetchedAt: now.toISOString(), posts: [...merged.values()].sort((a, b) => b.timestamp.localeCompare(a.timestamp) || b.id.localeCompare(a.id)) };
    let archiveBytes = totalBytes + Buffer.byteLength(JSON.stringify(feed));
    let existing = [];
    try { existing = await readdir(mediaDir); } catch (error) { if (error.code !== 'ENOENT') throw error; }
    const replacements = new Set(posts.map(post => `${post.id}.webp`));
    for (const filename of existing) {
      if (!replacements.has(filename)) archiveBytes += (await stat(join(mediaDir, filename))).size;
    }
    if (archiveBytes > 240000000) throw new Error('Archive byte limit exceeded; owner review required');
    await mkdir(mediaDir, { recursive: true });
    // All remote requests and decodes have succeeded before public files change.
    // Stage per-file copies on the destination filesystem for atomic renames.
    for (const post of posts) {
      const destination = join(mediaDir, `${post.id}.webp`);
      await copyFile(join(staging, `${post.id}.webp`), `${destination}.tmp`);
      await rename(`${destination}.tmp`, destination);
    }
    await writeFile(join(output, 'feed.json.tmp'), `${JSON.stringify(feed, null, 2)}\n`);
    await rename(join(output, 'feed.json.tmp'), join(output, 'feed.json'));
    return { posts: feed.posts.length, bytes: archiveBytes };
  } finally {
    await rm(staging, { recursive: true, force: true });
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const args = process.argv.slice(2);
  try {
    if (args.length && (args.length !== 2 || args[0] !== '--input')) throw new Error('Invalid arguments');
    const result = await syncInstagram({ input: args[1] });
    console.log(`Instagram snapshot updated: ${result.posts} posts, ${result.bytes} image bytes.`);
  } catch {
    // Do not print exceptions: fetch errors can contain the API key in a URL.
    console.error('Instagram sync failed. Previous feed retained; check connection, source completeness, and credentials privately.');
    process.exitCode = 1;
  }
}
