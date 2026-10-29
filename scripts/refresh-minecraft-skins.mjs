import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import sharp from 'sharp';
const account = JSON.parse(await fs.readFile('public/minecraft/account.json', 'utf8'));
const uuid = account.uuid;
const source = `https://laby.net/api/v3/user/${uuid}/textures`;
async function get(url) {
  const response = await fetch(url, { signal: AbortSignal.timeout(20000) });
  if (!response.ok) throw new Error(`${response.status}: ${url}`);
  return Buffer.from(await response.arrayBuffer());
}
const data = JSON.parse((await get(source)).toString());
if (!Array.isArray(data.SKIN) || !data.SKIN.length) throw new Error('Missing skin history');
const current = await sharp(`public${account.skin.path}`).ensureAlpha().raw().toBuffer();
const seen = new Set([crypto.createHash('sha256').update(current).digest('hex')]);
const skins = [];
const downloads = [];
for (const entry of [...data.SKIN].sort((a,b) => Date.parse(b.last_seen_at) - Date.parse(a.last_seen_at))) {
  if (!/^[a-f0-9]{32}$/.test(entry.image_hash) || !Number.isFinite(Date.parse(entry.last_seen_at))) throw new Error('Invalid skin record');
  const textureSource = `https://laby.net/texture/${entry.image_hash}.png`;
  const bytes = await get(textureSource);
  const meta = await sharp(bytes).metadata();
  if (meta.format !== 'png' || meta.width !== 64 || ![32,64].includes(meta.height)) throw new Error('Invalid skin texture');
  const pixels = await sharp(bytes).ensureAlpha().raw().toBuffer();
  const hash = crypto.createHash('sha256').update(pixels).digest('hex');
  if (seen.has(hash)) continue;
  seen.add(hash);
  const path = `/minecraft/skin-laby-${entry.image_hash}.png`;
  downloads.push([`public${path}`, bytes]);
  skins.push({ path, model: entry.slim_skin ? 'slim' : 'classic', label: `Last seen ${entry.last_seen_at.slice(0,10)}`, firstSeenAt: entry.first_seen_at, lastSeenAt: entry.last_seen_at, source: textureSource });
}
// Complete and validate all downloads before changing the public manifest.
for (const [path, bytes] of downloads) await fs.writeFile(path, bytes);
await fs.writeFile('public/minecraft/skins.json', JSON.stringify({ source, profile: `https://laby.net/@${uuid}`, checkedAt: new Date().toISOString(), skins }, null, 2)+'\n');
console.log(`Saved ${skins.length} historical skins for ${account.username}`);
