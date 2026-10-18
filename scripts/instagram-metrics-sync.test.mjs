import {test} from 'node:test';
import assert from 'node:assert/strict';
import {normalizeMetrics,metricsUrl,syncMetrics} from './instagram-metrics-sync.mjs';
const now=new Date('2026-10-16T02:00:00Z');
const row={media_id:'18111604349466809',media_permalink:'https://www.instagram.com/p/DeejqdEGoqc/',media_like_count:700,media_comments_count:29,media_views:9279,data_fetched_at:'2026-10-16T01:49:41'};
test('uses actual organic counts and preserves source cache time instead of pretending cached values are live',()=>{const result=normalizeMetrics({status:'done',data:[{...row,media_total_like_count:0}]},now);assert.equal(result.posts[0].likes,700);assert.equal(result.posts[0].checkedAt,'2026-10-16T01:49:41.000Z');assert.equal(result.fetchedAt,now.toISOString());});
test('distinguishes unavailable counts from actual zeros',()=>{const result=normalizeMetrics({status:'done',data:[{...row,media_like_count:null,media_comments_count:0,media_views:undefined}]},now);assert.equal(result.posts[0].likes,null);assert.equal(result.posts[0].comments,0);assert.equal(result.posts[0].views,null);});
test('rejects malformed or partial results and unsafe counts',()=>{for(const payload of [{status:'done',data:[]},{status:'done',partial:true,data:[row]},{status:'pending',data:[row]},{status:'done',data:[{...row,media_like_count:-1}]},{status:'done',data:[{...row,data_fetched_at:'broken'}]}])assert.throws(()=>normalizeMetrics(payload,now));});
test('requests verified field names and the connected account',()=>{const url=metricsUrl('test-fixture-only');assert.equal(url.searchParams.get('select_accounts'),'17841467441753084');assert.ok(url.searchParams.get('fields').includes('data_fetched_at'));assert.throws(()=>metricsUrl(''));});

test('accepts the direct REST envelope without the connector-only status field',()=>{assert.deepEqual(normalizeMetrics({data:[row]},now),normalizeMetrics({status:'done',data:[row]},now));});

test('refreshes recent engagement when the full archive is unavailable, preserving dated older counts',async()=>{
 const {mkdtemp,writeFile,readFile,rm}=await import('node:fs/promises');
 const {tmpdir}=await import('node:os');const {join}=await import('node:path');
 const output=await mkdtemp(join(tmpdir(),'ledger-metrics-test-'));
 try{
  const old={...row,media_id:'99999999999999999',data_fetched_at:'2026-10-01T00:00:00'};
  await writeFile(join(output,'metrics.json'),JSON.stringify(normalizeMetrics({data:[old]},now)));
  const urls=[];const fetchImpl=async url=>{urls.push(new URL(url));return urls.length===1?new Response('{}',{status:403}):new Response(JSON.stringify({data:[row]}));};
  await syncMetrics({output,key:'test-fixture-only',fetchImpl,now});
  const result=JSON.parse(await readFile(join(output,'metrics.json'),'utf8'));
  assert.equal(urls[0].searchParams.get('date_from'),'2010-01-01');
  assert.equal(urls[1].searchParams.get('date_preset'),'last_30dT');
  assert.equal(result.posts.length,2);assert.equal(result.posts.find(p=>p.id===old.media_id).checkedAt,'2026-10-01T00:00:00.000Z');
 }finally{await rm(output,{recursive:true,force:true});}
});
