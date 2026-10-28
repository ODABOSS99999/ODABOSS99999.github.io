// Manual, free Mojang snapshot. No polling or credentials.
import { mkdir, writeFile } from 'node:fs/promises';
const directory = new URL('../public/minecraft/', import.meta.url);
const get = async url => {
  const response = await fetch(url, { signal: AbortSignal.timeout(15000) });
  if (!response.ok) throw new Error(`Mojang returned ${response.status}`);
  return response;
};
const account = await (await get('https://api.mojang.com/users/profiles/minecraft/odaboss')).json();
if (account.id !== 'ca8405042fba4600a8a519d60d5fde42') throw new Error('Account identity changed; review before replacing snapshot.');
const profile = await (await get(`https://sessionserver.mojang.com/session/minecraft/profile/${account.id}`)).json();
const textures = JSON.parse(Buffer.from(profile.properties.find(p => p.name === 'textures').value, 'base64').toString()).textures;
const download = async (entry, prefix) => {
  if (!entry) return null;
  const url = new URL(entry.url);
  if (url.hostname !== 'textures.minecraft.net' || !/^\/texture\/[a-f0-9]+$/.test(url.pathname)) throw new Error('Unexpected texture source');
  url.protocol = 'https:';
  const file = `${prefix}-${url.pathname.split('/').at(-1)}.png`;
  const bytes = await (await get(url)).arrayBuffer();
  await writeFile(new URL(file, directory), Buffer.from(bytes));
  return { path: `/minecraft/${file}`, source: url.href };
};
await mkdir(directory, { recursive: true });
const [skin, cape] = await Promise.all([download(textures.SKIN, 'skin'), download(textures.CAPE, 'cape')]);
if (!skin) throw new Error('Skin unavailable; retaining existing snapshot');
await writeFile(new URL('account.json', directory), JSON.stringify({ username: account.name, uuid: account.id, checkedAt: new Date().toISOString(), model: textures.SKIN.metadata?.model === 'slim' ? 'slim' : 'classic', skin, cape }, null, 2) + '\n');
console.log(`Saved verified ${account.name} account, skin and ${cape ? 'equipped cape' : 'no equipped cape'}.`);
