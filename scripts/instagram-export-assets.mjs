import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const input = path.join(root, 'output/instagram-export-input');
const plan = JSON.parse(await fs.readFile(path.join(input, 'plan.json'), 'utf8'));
const prepared = new Map();
const albums = {};
let bytes = 0;
for (const [url, names] of Object.entries(plan.albums)) {
  if (!/^https:\/\/www\.instagram\.com\/p\/[\w-]+\/$/.test(url)) throw new Error('Invalid public permalink');
  albums[url] = [];
  for (const name of names) {
    if (!/^[a-f0-9]{20}\.(jpg|jpeg|png)$/.test(name)) throw new Error('Unsafe input name');
    const outputName = name.replace(/\.[^.]+$/, '.webp');
    if (!prepared.has(outputName)) {
      const { data, info } = await sharp(path.join(input, name)).rotate().resize({ width: 1600, height: 1600, fit: 'inside', withoutEnlargement: true }).webp({ quality: 84 }).toBuffer({ resolveWithObject: true });
      bytes += data.length;
      if (bytes > 100_000_000) throw new Error('Output exceeds 100MB; no public files written');
      prepared.set(outputName, { data, width: info.width, height: info.height });
    }
    const { width, height } = prepared.get(outputName);
    albums[url].push({ src: `/instagram/export-media/${outputName}`, width, height });
  }
}
const destination = path.join(root, 'public/instagram/export-media');
await fs.mkdir(destination, { recursive: true });
for (const [name, { data }] of prepared) await fs.writeFile(path.join(destination, name), data);
await fs.writeFile(path.join(root, 'public/instagram/export-albums.json'), JSON.stringify({ version: 1, exportedAt: new Date().toISOString(), albums }, null, 2) + '\n');
console.log(JSON.stringify({ albums: Object.keys(albums).length, images: prepared.size, bytes }));
