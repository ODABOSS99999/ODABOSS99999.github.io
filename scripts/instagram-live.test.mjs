import test from 'node:test';
import assert from 'node:assert/strict';
import { createInstagramHandler } from './instagram-live.mjs';
const instant = new Date('2026-10-17T18:00:00Z');
const profile = {status:'done',data:[{username:'mcgowen_media',followers_count:42,media_count:1,data_fetched_at:instant.toISOString()}]};
const post = {data_fetched_at:instant.toISOString(),media_id:'123456',media_caption:'Archive',media_permalink:'https://www.instagram.com/p/abc/',timestamp:'2025-01-01T00:00:00Z'};
function fixture(overrides = {}) {
  const calls = [];
  const fetchImpl = async url => {
    calls.push(new URL(url));
    const fields = new URL(url).searchParams.get('fields');
    const payload = fields.includes('followers_count') ? profile : fields.includes('media_like_count') ? {data:[{...post,media_like_count:3,media_comments_count:null,media_views:9,data_fetched_at:instant.toISOString()}]} : {data:[post]};
    return new Response(JSON.stringify(payload));
  };
  return {calls, handler:createInstagramHandler({key:'private-test-key',now:()=>instant,fetchImpl,readHistory:async()=>({followers:999,trackedPosts:[{id:'99999'}],followerHistory:[{date:'2025-01-01T00:00:00Z',count:20}]}),...overrides})};
}
async function request(handler,path='/api/instagram/stats',headers={},method='GET') {
  const res={headers:{},setHeader(k,v){this.headers[k]=v;},writeHead(s){this.status=s;},end(body){this.body=body;}};
  await handler({url:path,headers,method},res);
  return res;
}
test('stats queries complete archive afresh and uses only fresh current counts', async()=>{
  const {calls,handler}=fixture();
  const a=await request(handler); const b=await request(handler);
  assert.equal(a.status,200); assert.equal(b.status,200); assert.equal(calls.length,4);
  const result=JSON.parse(a.body);assert.equal(result.followers,42);assert.equal(result.trackedPosts.length,1);assert.equal(result.trackedPosts[0].id,'123456');assert.equal(result.followerHistory.length,2);
  assert.equal(calls[1].searchParams.get('date_from'),'2010-01-01');assert.equal(calls[1].searchParams.get('fields'),'media_id,media_caption,media_permalink,timestamp,data_fetched_at');assert.equal(a.headers['Cache-Control'],'no-store');assert.ok(!a.body.includes('private-test-key'));
});
test('deduplicates simultaneous requests only',async()=>{
  const {handler,calls}=fixture();await Promise.all([request(handler),request(handler)]);assert.equal(calls.length,2);await request(handler);assert.equal(calls.length,4);
});
test('metrics uses full archive and preserves unavailable counts',async()=>{
  const {handler,calls}=fixture();const res=await request(handler,'/api/instagram/metrics');assert.equal(res.status,200);assert.equal(JSON.parse(res.body).posts[0].comments,null);assert.equal(calls[0].searchParams.get('date_from'),'2010-01-01');
});
test('rejects stale and future provider timestamps, never falls back',async()=>{
  for(const offset of [-120001,30001]){
    const {handler}=fixture({fetchImpl:async url=>new Response(JSON.stringify(new URL(url).searchParams.get('fields').includes('followers_count')?{...profile,data:[{...profile.data[0],data_fetched_at:new Date(+instant+offset).toISOString()}]}:{data:[post]}))});
    const res=await request(handler);assert.equal(res.status,503);assert.equal(res.body,'{"error":"Current Instagram data unavailable"}');
  }
});
test('fails incomplete archives, provider errors and missing credentials safely',async()=>{
  for(const overrides of [{fetchImpl:async()=>{throw Error('private-test-key');}},{key:''},{fetchImpl:async url=>new Response(JSON.stringify(new URL(url).searchParams.get('fields').includes('followers_count')?profile:{data:[],has_more:true}))}]){
    const res=await request(fixture(overrides).handler);assert.equal(res.status,503);assert.ok(!res.body.includes('private-test-key'));
  }
});
test('restricts CORS, routes and methods without contacting provider',async()=>{
  const {handler,calls}=fixture();assert.equal((await request(handler,undefined,{origin:'https://evil.example'})).status,403);assert.equal((await request(handler,'/wrong')).status,404);assert.equal((await request(handler,undefined,{},'POST')).status,405);const preflight=await request(handler,undefined,{origin:'http://127.0.0.1:5173'},'OPTIONS');assert.equal(preflight.status,204);assert.equal(preflight.headers['Access-Control-Allow-Origin'],'http://127.0.0.1:5173');assert.equal(calls.length,0);
});
test('bounded fetch supplies timeout signal to upstream',async()=>{
  let signal;const {handler}=fixture({fetchImpl:async(_url,options)=>{signal=options.signal;throw Error('unavailable');},timeoutMs:25});assert.equal((await request(handler)).status,503);assert.ok(signal instanceof AbortSignal);
});
test('rejects stale metrics and count-mismatched complete archive',async()=>{
  const stale=fixture({fetchImpl:async()=>new Response(JSON.stringify({data:[{...post,media_like_count:1,data_fetched_at:'2026-10-17T17:57:59Z'}]}))});assert.equal((await request(stale.handler,'/api/instagram/metrics')).status,503);
  const mismatch=fixture({fetchImpl:async url=>new Response(JSON.stringify(new URL(url).searchParams.get('fields').includes('followers_count')?profile:{data:[]}))});assert.equal((await request(mismatch.handler)).status,503);
});

test('archive metadata must have current source timestamps, with UTC normalization',async()=>{
  for(const timestamp of [undefined,'2026-10-17T17:57:59Z','2026-10-17T18:00:31Z']){
    const {handler}=fixture({fetchImpl:async url=>new Response(JSON.stringify(new URL(url).searchParams.get('fields').includes('followers_count')?profile:{data:[{...post,data_fetched_at:timestamp}]}))});assert.equal((await request(handler)).status,503);
  }
  const {handler}=fixture({fetchImpl:async url=>new Response(JSON.stringify(new URL(url).searchParams.get('fields').includes('followers_count')?profile:{data:[{...post,data_fetched_at:'2026-10-17T18:00:00'}]}))});assert.equal((await request(handler)).status,200);
});
