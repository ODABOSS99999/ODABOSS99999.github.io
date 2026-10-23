import { spawn } from 'node:child_process';
import { mkdir, open } from 'node:fs/promises';
import { createReadStream } from 'node:fs';
import { createInterface } from 'node:readline';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../', import.meta.url));
const checks = {
  diff: ['git', ['diff', '--check']],
  types: [process.execPath, ['node_modules/typescript/bin/tsc', '-b']],
  test: [process.execPath, ['node_modules/vitest/vitest.mjs', 'run', '--maxWorkers=1']],
  build: [process.execPath, ['node_modules/typescript/bin/tsc', '-b']],
};
const args = process.argv.slice(2);
if (!args.length || args.includes('--help')) {
  console.log('Usage: node scripts/agent-check.mjs diff|types|test|build|all [more checks]\nFull logs: output/agent-check/<run>/\nBuild includes TypeScript and Vite. Browser QA and script/worker tests are separate.');
} else if (args.some(arg => arg !== 'all' && !Object.hasOwn(checks, arg))) {
  console.error('Unknown check. Use --help.');
  process.exitCode = 2;
} else {
  const selected = [...new Set(args.flatMap(arg => arg === 'all' ? ['diff', 'test', 'build'] : [arg]))];
  // Build already checks types; avoid doing that work twice.
  if (selected.includes('build') && selected.includes('types')) selected.splice(selected.indexOf('types'), 1);
  const dir = path.join(root, 'output', 'agent-check', `${Date.now()}-${process.pid}`);
  await mkdir(dir, { recursive: true });
  const run = async (command, commandArgs, log) => {
    const fd = await open(log, 'a');
    try {
      return await new Promise(resolve => {
        const child = spawn(command, commandArgs, { cwd: root, stdio: ['ignore', fd.fd, fd.fd], windowsHide: true });
        child.once('error', error => { console.error(error.message); resolve(1); });
        child.once('exit', code => resolve(code ?? 1));
      });
    } finally { await fd.close(); }
  };
  for (const name of selected) {
    const log = path.join(dir, `${name}.log`);
    const started = Date.now();
    let code = await run(...checks[name], log);
    if (name === 'build' && code === 0) code = await run(process.execPath, ['node_modules/vite/bin/vite.js', 'build'], log);
    console.log(`${code === 0 ? 'PASS' : 'FAIL'} ${name} (${((Date.now() - started) / 1000).toFixed(1)}s) ${path.relative(root, log)}`);
    if (code !== 0) {
      process.exitCode = 1;
      const tail = [];
      for await (const line of createInterface({ input: createReadStream(log), crlfDelay: Infinity })) {
        tail.push(line);
        if (tail.length > 20) tail.shift();
      }
      console.error(tail.join('\n'));
    }
  }
}
