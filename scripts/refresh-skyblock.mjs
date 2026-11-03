import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Export only an allowlist of this owner's cached stats, never raw mod data.
const root = process.env.SKYBLOCK_CONFIG_DIR || path.join(process.env.USERPROFILE, '.lunarclient/profiles/hypixel-skyblock-for-lunar-client/config');
const uuid = 'ca840504-2fba-4600-a8a5-19d60d5fde42';
const profileId = '6b95faa4-087b-4945-b935-1f864bbc2dad';
async function read(relative) {
  const filename = path.join(root, relative);
  const [content, stat] = await Promise.all([fs.readFile(filename, 'utf8'), fs.stat(filename)]);
  return { data: JSON.parse(content), savedAt: stat.mtime.toISOString() };
}
function number(value, label) {
  if (typeof value !== 'number' || !Number.isFinite(value) || value < 0) throw new Error(`Invalid ${label}; keeping the previous snapshot.`);
  return value;
}
const [profiles, currency, hanni, pets] = await Promise.all([
  read('skyblockapi/profiles.json'), read('skyblockapi/currency.json'), read('skyhanni/config.json'), read('skyblocker/pet_cache.json'),
]);
const profile = profiles.data['@skyblockapi:data']?.[uuid];
if (profile?.profileId?.Peach !== profileId) throw new Error('Owner/profile mismatch; keeping the previous snapshot.');
const coins = currency.data['@skyblockapi:data']?.[uuid]?.Peach;
const progress = hanni.data.storage?.players?.[uuid]?.profiles?.peach;
const pet = pets.data[uuid.replaceAll('-', '')]?.[profileId];
const skills = Object.entries(progress?.skills?.skillData || {}).map(([name, data]) => ({
  name: name.charAt(0) + name.slice(1).toLowerCase(), level: number(data.level, `${name} level`),
}));
if (!skills.length) throw new Error('No skills found; keeping the previous snapshot.');
const snapshot = {
  username: 'ODABOSS', uuid, profile: 'Peach', profileId,
  sources: { progress: hanni.savedAt, currency: currency.savedAt, pet: pets.savedAt },
  level: number(progress?.totalSkyBlockXP, 'SkyBlock XP') / 100,
  purse: number(coins?.purse, 'purse'), personalBank: number(coins?.personalBank, 'personal bank'), coopBank: number(coins?.coopBank, 'co-op bank'),
  skills,
  floor7Completions: number(progress?.dungeons?.bosses?.F7, 'F7 completions'),
  cachedPet: typeof pet?.name === 'string' ? pet.name.replace(/§./g, '') : null,
};
const destination = fileURLToPath(new URL('../public/minecraft/skyblock.json', import.meta.url));
await fs.writeFile(`${destination}.tmp`, JSON.stringify(snapshot, null, 2) + '\n');
await fs.rename(`${destination}.tmp`, destination);
console.log(`Saved ${snapshot.username} / ${snapshot.profile}: level ${snapshot.level}, ${skills.length} skills. Local cache, not live data.`);
