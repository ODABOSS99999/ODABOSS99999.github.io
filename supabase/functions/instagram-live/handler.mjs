const ACCOUNT = 'mcgowen_media';
const ACCOUNT_ID = '17841467441753084';
// Vite selects the next free port when another preview is already running.
const ORIGINS = new Set(['https://mcgowen.works', 'https://www.mcgowen.works', 'https://odaboss99999.github.io', ...Array.from({length:27},(_,i)=>5173+i).flatMap(port=>[`http://127.0.0.1:${port}`,`http://localhost:${port}`])]);
function complete(p) {
  if (!p || p.error || p.errors || (p.status && p.status !== 'done') || p.partial || p.truncated || p.has_more || p.next || p.next_page || p.paging?.next || !Array.isArray(p.data) || p.data.length > 1000) throw Error('Incomplete response');
  return p.data;
}
function sourceTime(value) {
  if (typeof value !== 'string' || !value) throw Error('Missing source time');
  const date = new Date(/[zZ]$|[+-]\d\d:\d\d$/.test(value) ? value : `${value}Z`);
  if (!Number.isFinite(date.valueOf())) throw Error('Invalid source time');
  return date.toISOString();
}
function checked(value, now) {
  const date = new Date(sourceTime(value));
  const age = now - date.valueOf();
  if (!Number.isFinite(age) || age > 120000 || age < -30000) throw Error('Source is not current');
  return date.toISOString();
}
function count(v, optional = false) {
  if (optional && (v === null || v === undefined || v === '')) return null;
  if (v === null || v === undefined || v === '' || !Number.isSafeInteger(Number(v)) || Number(v) < 0) throw Error('Invalid count');
  return Number(v);
}
function media(row) {
  const id = String(row.media_id ?? '');
  const url = new URL(row.media_permalink);
  if (!/^\d{5,40}$/.test(id) || url.protocol !== 'https:' || url.username || url.password || url.port || !['instagram.com', 'www.instagram.com'].includes(url.hostname) || !/^\/(p|reel|tv)\/[A-Za-z0-9_-]+\/?$/.test(url.pathname)) throw Error('Invalid media');
  return {id, permalink:`https://www.instagram.com${url.pathname.replace(/\/?$/, '/')}`};
}
function unique(rows) {
  const map = new Map();
  for (const row of rows) {
    if (map.has(row.id) && JSON.stringify(map.get(row.id)) !== JSON.stringify(row)) throw Error('Conflicting rows');
    map.set(row.id, row);
  }
  return [...map.values()];
}
export function createEdgeHandler({key, loadOverride, fetchImpl = fetch, now = () => Date.now(), timeoutMs = 15000, maxBytes = 10 * 1024 * 1024, maxRequestsPerMinute = 12} = {}) {
  const pending = new Map();
  // Instance-local aggregate bound; avoids trusting spoofable client IP headers.
  let windowStart = now(), used = 0;
  async function query(fields, archive) {
    if (!key) throw Error('Missing server credential');
    const url = new URL('https://connectors.windsor.ai/instagram');
    url.search = new URLSearchParams({api_key:key,select_accounts:ACCOUNT_ID,fields,...(archive ? {date_from:'2010-01-01',date_to:new Date(now()).toISOString().slice(0,10)} : {date_preset:'last_1dT'})}).toString();
    const response = await fetchImpl(url,{redirect:'error',signal:AbortSignal.timeout(timeoutMs),headers:{Accept:'application/json','User-Agent':'Windsor/1.0'}});
    if (!response.ok || !response.body || Number(response.headers.get('content-length') || 0) > maxBytes) throw Error('Upstream unavailable');
    const reader = response.body.getReader(), chunks = [];
    let size = 0;
    try {
      while (true) {
        const {done,value} = await reader.read(); if (done) break;
        size += value.byteLength; if (size > maxBytes) throw Error('Response too large'); chunks.push(value);
      }
    } finally { await reader.cancel().catch(() => {}); }
    const bytes = new Uint8Array(size); let offset = 0;
    for (const chunk of chunks) {bytes.set(chunk,offset);offset += chunk.byteLength;}
    return complete(JSON.parse(new TextDecoder().decode(bytes)));
  }
  async function load(kind) {
    if(loadOverride)return loadOverride(kind);
    if (kind === 'metrics') {
      const rows = await query('media_id,media_permalink,media_like_count,media_comments_count,media_views,data_fetched_at',true);
      const currentRows=rows.filter(row=>{try{checked(row.data_fetched_at,now());return true;}catch{return false;}});
      return {version:1,account:ACCOUNT,source:'Windsor.ai / Instagram',scope:'instagram-organic-media',fetchedAt:new Date(now()).toISOString(),posts:unique(currentRows.map(row=>({...media(row),likes:count(row.media_like_count,true),comments:count(row.media_comments_count,true),views:count(row.media_views,true),checkedAt:checked(row.data_fetched_at,now())})))};
    }
    const [profiles,archive] = await Promise.all([query('username,followers_count,media_count,data_fetched_at',false),query('media_id,media_caption,media_permalink,timestamp,data_fetched_at',true).catch(()=>null)]);
    if (profiles.length !== 1 || profiles[0].username !== ACCOUNT) throw Error('Invalid profile');
    const p=profiles[0],checkedAt=checked(p.data_fetched_at,now()),followers=count(p.followers_count),posts=count(p.media_count);
    let trackedPosts=[],archiveCheckedAt=null,archiveCurrent=false;
    if(archive){
      try{
        trackedPosts=unique(archive.map(row=>{
          const timestamp=new Date(row.timestamp);
          if (!row.timestamp || !Number.isFinite(timestamp.valueOf()) || timestamp.valueOf()>now()+30000 || (row.media_caption!=null&&typeof row.media_caption!=='string')) throw Error('Invalid archive');
          return {...media(row),timestamp:timestamp.toISOString(),caption:row.media_caption??''};
        })).sort((a,b)=>a.timestamp.localeCompare(b.timestamp));
        const times=archive.map(row=>{try{return sourceTime(row.data_fetched_at);}catch{return null;}});
        if(times.length && times.every(Boolean))archiveCheckedAt=times.sort()[0];
        archiveCurrent=trackedPosts.length===posts&&times.every(time=>{try{checked(time,now());return true;}catch{return false;}});
      }catch{trackedPosts=[];}
    }
    return {version:2,account:ACCOUNT,checkedAt,followers,posts,followerHistory:[{date:checkedAt,count:followers}],trackedPosts,archiveCheckedAt,archiveCurrent};
  }
  return async request => {
    const origin=request.headers.get('origin');
    const headers={'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','Vary':'Origin'};
    if (origin && !ORIGINS.has(origin)) return new Response('{"error":"Origin unavailable"}',{status:403,headers});
    if(origin)headers['Access-Control-Allow-Origin']=origin;
    headers['Access-Control-Allow-Headers']='authorization, apikey, x-client-info, content-type';
    headers['Access-Control-Allow-Methods']='GET, OPTIONS';
    const path=new URL(request.url).pathname;
    const kind=path.endsWith('/instagram-live/stats')?'stats':path.endsWith('/instagram-live/metrics')?'metrics':path.endsWith('/instagram-live/health')?'health':null;
    const reply=(status,body)=>new Response(JSON.stringify(body),{status,headers});
    if(!kind)return reply(404,{error:'Not found'});
    if(request.method==='OPTIONS')return new Response(null,{status:204,headers});
    if(request.method!=='GET')return reply(405,{error:'Method unavailable'});
    if(kind==='health')return reply(200,{configured:Boolean(key||loadOverride),account:ACCOUNT,source:loadOverride?'instagram':'windsor'});
    if(now()-windowStart>=60000){windowStart=now();used=0;}
    if(used++>=maxRequestsPerMinute){headers['Retry-After']='60';return reply(429,{error:'Please retry later'});}
    try {
      if(!pending.has(kind))pending.set(kind,load(kind).finally(()=>pending.delete(kind)));
      return reply(200,await pending.get(kind));
    }catch{return reply(503,{error:'Current Instagram data unavailable'});}
  };
}
