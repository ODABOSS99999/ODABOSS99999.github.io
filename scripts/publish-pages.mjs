import { cp, readFile, readdir, rm, mkdir, mkdtemp, writeFile, access } from 'node:fs/promises';
import { resolve, join, relative, isAbsolute } from 'node:path';
import { tmpdir } from 'node:os';
import { execFileSync, spawnSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

// Copies an already validated build into an isolated deployment worktree.
// CNAME belongs to domain configuration and survives content-only refreshes.
export async function stagePages(build, checkout) {
  build=resolve(build);checkout=resolve(checkout);
  const nested=relative(checkout,build);
  if(build===checkout||(!nested.startsWith('..')&&!isAbsolute(nested)))throw new Error('Build must be outside deployment checkout');
  await access(join(build,'index.html'));await access(join(build,'.nojekyll'));
  const entries=await readdir(build,{withFileTypes:true});
  if(entries.some(e=>e.isSymbolicLink()||e.name.startsWith('.env')||['scripts','src','node_modules','output','.git'].includes(e.name)))throw new Error('Build contains non-release material');
  let cname;
  try{cname=await readFile(join(checkout,'CNAME'));}catch(e){if(e.code!=='ENOENT')throw e;}
  await mkdir(checkout,{recursive:true});
  for(const entry of await readdir(checkout)){
    if(['.git','CNAME'].includes(entry))continue;
    const target=resolve(checkout,entry),within=relative(checkout,target);
    if(!within||within.startsWith('..')||isAbsolute(within))throw new Error('Invalid deployment path');
    await rm(target,{recursive:true,force:true});
  }
  for(const entry of entries)await cp(join(build,entry.name),join(checkout,entry.name),{recursive:true});
  if(cname&&!entries.some(e=>e.name==='CNAME'))await writeFile(join(checkout,'CNAME'),cname);
}

async function publish(){
  if(process.env.GITHUB_ACTIONS!=='true'||process.env.SITE_PUBLIC_RELEASE_APPROVED!=='true')throw new Error('Approved Actions release required');
  const repository=process.env.GITHUB_REPOSITORY;
  if(!repository||!/^[-\w.]+\/[-\w.]+$/.test(repository)||!process.env.GITHUB_TOKEN)throw new Error('GitHub release context unavailable');
  const temporary=await mkdtemp(join(tmpdir(),'mcgowen-pages-'));
  const checkout=join(temporary,'checkout');let attached=false;
  const git=(args,cwd=process.cwd())=>execFileSync('git',args,{cwd,stdio:'pipe'}).toString();
  try{
    git(['fetch','origin','gh-pages']);
    git(['worktree','add','--detach',checkout,'origin/gh-pages']);attached=true;
    await stagePages('dist',checkout);
    git(['config','user.name','github-actions[bot]'],checkout);
    git(['config','user.email','41898282+github-actions[bot]@users.noreply.github.com'],checkout);
    git(['add','--all'],checkout);
    const difference=spawnSync('git',['diff','--cached','--quiet'],{cwd:checkout});
    if(difference.status===0){console.log('Pages build is unchanged.');return;}
    if(difference.status!==1)throw new Error('Cannot compare deployment');
    git(['commit','-m','Refresh approved Instagram content'],checkout);
    // Ordinary fast-forward push: fail rather than replace a concurrent release.
    git(['push','origin','HEAD:refs/heads/gh-pages'],checkout);
    // GITHUB_TOKEN pushes do not themselves trigger Pages builds.
    const response=await fetch(`https://api.github.com/repos/${repository}/pages/builds`,{method:'POST',headers:{Authorization:`Bearer ${process.env.GITHUB_TOKEN}`,Accept:'application/vnd.github+json','X-GitHub-Api-Version':'2022-11-28'},signal:AbortSignal.timeout(30000)});
    if(!response.ok)throw new Error('Pages build request was not accepted');
    console.log('Approved Pages refresh pushed; Pages build requested.');
  }finally{
    if(attached)git(['worktree','remove','--force',checkout]);
    const within=relative(resolve(tmpdir()),resolve(temporary));
    if(within&&!within.startsWith('..')&&!isAbsolute(within))await rm(temporary,{recursive:true,force:true});
  }
}
if(process.argv[1]&&import.meta.url===pathToFileURL(resolve(process.argv[1])).href){
  try{await publish();}catch{console.error('Pages refresh failed. No credentials are logged. Check the approved workflow and branch state.');process.exitCode=1;}
}
