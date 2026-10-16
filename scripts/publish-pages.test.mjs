import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp,mkdir,writeFile,readFile,access,rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { stagePages } from './publish-pages.mjs';
test('isolated Pages staging replaces old files, keeps domain configuration, and excludes private material',async()=>{
 const root=await mkdtemp(join(tmpdir(),'mcgowen-pages-test-'));
 try{
  const build=join(root,'dist'),target=join(root,'checkout');await mkdir(build);await mkdir(target);
  await writeFile(join(build,'index.html'),'release');await writeFile(join(build,'.nojekyll'),'');
  await writeFile(join(target,'CNAME'),'mcgowen.works\n');await writeFile(join(target,'.git'),'gitdir: test');await writeFile(join(target,'old.js'),'old');
  await stagePages(build,target);
  assert.equal(await readFile(join(target,'index.html'),'utf8'),'release');
  assert.equal(await readFile(join(target,'CNAME'),'utf8'),'mcgowen.works\n');
  assert.equal(await readFile(join(target,'.git'),'utf8'),'gitdir: test');await assert.rejects(access(join(target,'old.js')));
  await writeFile(join(build,'.env'),'synthetic secret');
  await assert.rejects(stagePages(build,target),/non-release/);
  assert.equal(await readFile(join(target,'index.html'),'utf8'),'release');
  await assert.rejects(stagePages(target,target),/outside/);
 }finally{await rm(root,{recursive:true,force:true});}
});
