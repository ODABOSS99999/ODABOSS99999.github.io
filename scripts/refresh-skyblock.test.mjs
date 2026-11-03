import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

test('SkyBlock export keeps only owner stats and preserves the last snapshot on bad input', async () => {
  const root = await fs.mkdtemp(path.join(os.tmpdir(), 'skyblock-export-'));
  try {
    for (const dir of ['scripts', 'public/minecraft', 'config/skyblockapi', 'config/skyhanni', 'config/skyblocker']) await fs.mkdir(path.join(root, dir), { recursive: true });
    await fs.copyFile(new URL('./refresh-skyblock.mjs', import.meta.url), path.join(root, 'scripts/refresh-skyblock.mjs'));
    const uuid = 'ca840504-2fba-4600-a8a5-19d60d5fde42';
    const profileId = '6b95faa4-087b-4945-b935-1f864bbc2dad';
    const write = (file, data) => fs.writeFile(path.join(root, 'config', file), JSON.stringify(data));
    await write('skyblockapi/profiles.json', { '@skyblockapi:data': { [uuid]: { profileId: { Peach: profileId } } } });
    const currency = purse => ({ '@skyblockapi:data': { [uuid]: { Peach: { purse, personalBank: 0, coopBank: 1, privateField: 'do not export' } } } });
    await write('skyblockapi/currency.json', currency(0));
    await write('skyhanni/config.json', { storage: { players: { [uuid]: { profiles: { peach: { totalSkyBlockXP: 13066, skills: { skillData: { MINING: { level: 50 } } }, dungeons: { bosses: { F7: 101 } } } } } } } });
    await write('skyblocker/pet_cache.json', {});
    const run = () => spawnSync(process.execPath, [path.join(root, 'scripts/refresh-skyblock.mjs')], { env: { ...process.env, SKYBLOCK_CONFIG_DIR: path.join(root, 'config') }, encoding: 'utf8' });
    assert.equal(run().status, 0);
    const destination = path.join(root, 'public/minecraft/skyblock.json');
    const saved = await fs.readFile(destination, 'utf8');
    const result = JSON.parse(saved);
    assert.equal(result.purse, 0);
    assert.equal(result.level, 130.66);
    assert.equal(result.cachedPet, null);
    assert.deepEqual(result.skills, [{ name: 'Mining', level: 50 }]);
    assert.ok(!saved.includes('privateField'));
    await write('skyblockapi/currency.json', currency(-1));
    assert.notEqual(run().status, 0);
    assert.equal(await fs.readFile(destination, 'utf8'), saved);
    await write('skyblockapi/profiles.json', { '@skyblockapi:data': { [uuid]: { profileId: { Peach: 'another-profile' } } } });
    assert.match(run().stderr, /Owner\/profile mismatch/);
    assert.equal(await fs.readFile(destination, 'utf8'), saved);
  } finally {
    await fs.rm(root, { recursive: true, force: true });
  }
});
