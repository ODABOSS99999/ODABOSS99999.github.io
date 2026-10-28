import { copyFile, mkdir, writeFile } from 'node:fs/promises';

// GitHub Pages serves these real directories on direct links and refreshes.
for (const route of ['photography', 'about', 'favorites', 'published', 'engineering', 'contact', 'music']) {
  await mkdir(`dist/${route}`, { recursive: true });
  await copyFile('dist/index.html', `dist/${route}/index.html`);
}
await copyFile('dist/index.html', 'dist/404.html');
await writeFile('dist/.nojekyll', '');
