import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';
// Read only game logs. Publish aggregate dates, never raw chat or private addresses.
const roots = [path.join(process.env.APPDATA, '.minecraft'), path.join(process.env.USERPROFILE, '.lunarclient/profiles'), path.join(process.env.APPDATA, 'ModrinthApp/profiles')];
const dates = new Map();
const worldRecords = [];
let files = 0;
function walk(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!['assets','libraries','mods','resourcepacks','downloads','cache','versions','bin'].includes(entry.name)) walk(file);
      continue;
    }
    if (path.basename(dir) === 'stats' && entry.name === '4f1bb45c-d1ce-4773-a0b7-5f798faab183.json') {
      const data = JSON.parse(fs.readFileSync(file, 'utf8'));
      const custom = data.stats?.['minecraft:custom'];
      const ticks = custom?.['minecraft:play_time'] ?? custom?.['minecraft:play_one_minute'] ?? data['stat.playOneMinute'];
      if (Number.isSafeInteger(ticks) && ticks >= 0) {
        const relative = path.relative(roots.find(root => file.startsWith(root)), file).split(path.sep);
        const saveIndex = relative.indexOf('saves');
        worldRecords.push({ label: relative.slice(0, saveIndex).join(' / ') + ' - ' + relative[saveIndex + 1], minutes: Math.floor(ticks / 1200) });
      }
    }
    if (path.basename(dir) !== 'logs' || !/\.log(?:\.gz)?$/.test(file) || fs.statSync(file).size > 20_000_000) continue;
    const date = entry.name.match(/^(\d{4}-\d{2}-\d{2})-/)?.[1];
    // latest.log has no trustworthy session date; don't substitute its modification date.
    if (!date) continue;
    let text;
    try { const bytes = fs.readFileSync(file); text = (file.endsWith('.gz') ? zlib.gunzipSync(bytes) : bytes).toString(); } catch { continue; }
    if (!/Setting user: (?:ODABOSS|McGowen_)(?:\s|$)/.test(text)) continue;
    files++;
    for (const line of text.split('\n')) {
      if (!/^\[\d{2}:\d{2}:\d{2}\].*\/INFO\]: Connecting to /.test(line)) continue;
      const host = line.match(/Connecting to ([\w.-]+), \d+/)?.[1]?.toLowerCase().replace(/\.$/, '');
      if (!host) continue;
      const name = /(^|\.)hypixel\.net$/.test(host) ? 'Hypixel' : ['donutsmp.net','donuts.net'].includes(host) ? 'DonutSMP' : 'Other servers';
      if (!dates.has(name)) dates.set(name, new Set());
      dates.get(name).add(date);
    }
  }
}
roots.forEach(walk);
const result = { accounts: ['ODABOSS', 'McGowen_'], worldRecords, source: 'Dated local Java client logs', scannedLogs: files, servers: [...dates].map(([name, set]) => { const days = [...set].sort(); return { name, firstRecorded: days[0], lastRecorded: days.at(-1), recordedDays: days.length }; }) };
fs.writeFileSync('public/minecraft/history.json', JSON.stringify(result, null, 2) + '\n');
console.log(JSON.stringify(result));
