import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

// Offline validation of shipped Instagram assets. No network requests or timestamp claims.
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicRoot = path.join(root, 'public');
const mediaRoot = path.join(publicRoot, 'instagram');
const references = new Map();
const errors = [];
function addReference(src, expected, source) {
  if (typeof src !== 'string' || !src.startsWith('/instagram/')) return;
  const clean = src.split(/[?#]/)[0];
  const list = references.get(clean) || [];
  list.push({ expected, source });
  references.set(clean, list);
}
function inspectJson(value, source) {
  if (!value || typeof value !== 'object') return;
  if (typeof value.src === 'string') addReference(value.src, value, source);
  for (const child of Object.values(value)) inspectJson(child, source);
}
async function walk(dir) {
  const files = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const absolute = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...await walk(absolute));
    else files.push(absolute);
  }
  return files;
}
const publicFiles = await walk(mediaRoot);
for (const file of publicFiles.filter(file => file.endsWith('.json'))) {
  inspectJson(JSON.parse(await readFile(file, 'utf8')), path.relative(root, file));
}
const sourceFiles = (await walk(path.join(root, 'src'))).filter(file => /\.(?:ts|tsx|css)$/.test(file) && !/\.test\./.test(file));
for (const file of sourceFiles) {
  const source = await readFile(file, 'utf8');
  // This validator substitutes a schema-only path; the rendered cover is a data URL.
  if (path.basename(file) === 'instagramLiveFeed.ts') continue;
  for (const match of source.matchAll(/["'`]((?:\/instagram\/)[^"'`?\s<>]+\.(?:webp|jpe?g|png|gif|avif))(?:\?[^"'`\s]*)?["'`]/g)) {
    addReference(match[1], null, path.relative(root, file));
  }
}
const imageFiles = publicFiles.filter(file => /\.(?:webp|jpe?g|png|gif|avif)$/i.test(file));
const metadata = new Map();
for (const file of imageFiles) {
  const src = '/' + path.relative(publicRoot, file).split(path.sep).join('/');
  try {
    const image = sharp(file, { failOn: 'warning' });
    const info = await image.metadata();
    // Force the complete image through the decoder, rather than checking only its header.
    await image.raw().toBuffer();
    if (!info.width || !info.height) throw Error('No image dimensions');
    metadata.set(src, info);
  } catch (error) { errors.push(`${src}: decode failed: ${error.message}`); }
}
for (const [src, refs] of references) {
  const info = metadata.get(src);
  if (!info) { errors.push(`${src}: missing or undecodable (referenced by ${[...new Set(refs.map(ref => ref.source))].join(', ')})`); continue; }
  for (const { expected, source } of refs) {
    if (expected?.width && expected?.height && (expected.width !== info.width || expected.height !== info.height)) {
      errors.push(`${src}: declared ${expected.width}x${expected.height}, decoded ${info.width}x${info.height} (${source})`);
    }
  }
}
console.log(JSON.stringify({ mode: 'offline-local-assets', checkedAt: new Date().toISOString(), imageFiles: imageFiles.length, decoded: metadata.size, uniqueReferencedImages: references.size, unreferencedImages: [...metadata.keys()].filter(src => !references.has(src)).length, errors }, null, 2));
if (errors.length) process.exitCode = 1;
