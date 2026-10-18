// Verified fields: Meta's facebook-nodejs-business-sdk IGUser and IGMedia.
// Facebook Login tokens require an explicit Instagram account ID, never /me.
// Instagram Login discovers user_id via /me using the official get-started flow:
// https://developers.facebook.com/documentation/instagram-platform/instagram-api-with-instagram-login/get-started
const ACCOUNT='mcgowen_media';
export const VERIFIED_GRAPH_VERSION='v26.0';
const PROFILE_FIELDS='id,username,followers_count,media_count';
const MEDIA_FIELDS='id,caption,timestamp,permalink,like_count,comments_count';
const INSTAGRAM_MEDIA_FIELDS='id,timestamp,permalink,like_count,comments_count';
const safeError=()=>new Error('Current Instagram data unavailable');
const integer=(value,optional=false)=>{if(optional&&(value==null||value===''))return null;if(typeof value!=='number'||!Number.isSafeInteger(value)||value<0)throw safeError();return value;};
function post(row,checkedAt,now){
 const id=String(row?.id??''),url=new URL(row?.permalink);
 const timestamp=new Date(row?.timestamp);
 if(!/^\d{5,40}$/.test(id)||url.protocol!=='https:'||url.username||url.password||url.port||!['instagram.com','www.instagram.com'].includes(url.hostname)||!/^\/(p|reel|tv)\/[A-Za-z0-9_-]+\/?$/.test(url.pathname)||!row.timestamp||!Number.isFinite(timestamp.valueOf())||timestamp.valueOf()>now+30000||(row.caption!=null&&typeof row.caption!=='string'))throw safeError();
 return {id,permalink:`https://www.instagram.com${url.pathname.replace(/\/?$/,'/')}`,timestamp:timestamp.toISOString(),caption:row.caption??'',likes:integer(row.like_count,true),comments:integer(row.comments_count,true),views:null,checkedAt};
}
export function createGraphLoader({token,accountId,loginMode='facebook',version=VERIFIED_GRAPH_VERSION,fetchImpl=fetch,now=()=>Date.now(),requestTimeoutMs=20000,fetchTimeoutMs=10000,maxBytes=10*1024*1024,maxPosts=1000,maxPages=10}={}){
 const pending=new Map();
 const host=loginMode==='instagram'?'graph.instagram.com':'graph.facebook.com';
 function configuration(){if(!['facebook','instagram'].includes(loginMode)||typeof token!=='string'||!token||(loginMode==='facebook'&&(typeof accountId!=='string'||!/^\d{5,40}$/.test(accountId)))||typeof version!=='string'||!/^v\d{1,3}\.0$/.test(version))throw safeError();}
 const dedup=(kind,work)=>{if(!pending.has(kind))pending.set(kind,work().finally(()=>pending.delete(kind)));return pending.get(kind);};
 async function bounded(kind,work){
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),requestTimeoutMs);
  const aborted=new Promise((_,reject)=>controller.signal.addEventListener('abort',()=>reject(safeError()),{once:true}));
  try{return await Promise.race([work(controller.signal),aborted]);}finally{clearTimeout(timer);}
 }
 async function query(path,params,signal,userId=accountId){
  const url=new URL(`https://${host}/${version}/${userId}${path}`);url.search=new URLSearchParams(params).toString();
  const requestSignal=AbortSignal.any([signal,AbortSignal.timeout(fetchTimeoutMs)]);
  const response=await fetchImpl(url,{method:'GET',redirect:'error',signal:requestSignal,headers:{Authorization:`Bearer ${token}`,Accept:'application/json'}});
  if(!response.ok||!response.body||Number(response.headers.get('content-length')||0)>maxBytes)throw safeError();
  const reader=response.body.getReader(),chunks=[];let size=0;
  try{while(true){const {done,value}=await reader.read();if(done)break;size+=value.byteLength;if(size>maxBytes)throw safeError();chunks.push(value);}}finally{await reader.cancel().catch(()=>{});}
  const bytes=new Uint8Array(size);let offset=0;for(const chunk of chunks){bytes.set(chunk,offset);offset+=chunk.byteLength;}
  const data=JSON.parse(new TextDecoder().decode(bytes));if(!data||data.error||data.errors||data.partial||data.truncated)throw safeError();
  return {data,checkedAt:new Date(now()).toISOString()};
 }
 const profile=()=>dedup('profile',()=>bounded('profile',async signal=>{
  const response=await query('',{fields:loginMode==='instagram'?'user_id,username,followers_count,media_count':PROFILE_FIELDS},signal,loginMode==='instagram'?'me':accountId);
  const checkedAt=response.checkedAt;
  let data=response.data;
  if(loginMode==='instagram'&&Object.hasOwn(data,'data')){
   if(!Array.isArray(data.data)||data.data.length!==1)throw safeError();
   data=data.data[0];
  }
  if(!data||typeof data!=='object')throw safeError();
  const userId=String(loginMode==='instagram'?data.user_id:data.id);
  if(!/^\d{5,40}$/.test(userId)||(loginMode==='facebook'&&userId!==accountId)||data.username!==ACCOUNT)throw safeError();
  return {followers:integer(data.followers_count),posts:integer(data.media_count),checkedAt,userId};
 }));
 const media=()=>dedup('media',()=>bounded('media',async signal=>{
  const userId=loginMode==='instagram'?(await profile()).userId:accountId;
  const rows=new Map(),seen=new Set();let after,oldest;
  for(let page=0;page<maxPages;page++){
   const {data,checkedAt}=await query('/media',{fields:loginMode==='instagram'?INSTAGRAM_MEDIA_FIELDS:MEDIA_FIELDS,limit:'100',...(after?{after}:{})},signal,userId);
   if(!Array.isArray(data.data))throw safeError();oldest??=checkedAt;
   for(const row of data.data){const value=post(loginMode==='instagram'?{...row,caption:''}:row,checkedAt,now());if(rows.has(value.id)){const old=rows.get(value.id);if(JSON.stringify({...old,checkedAt:null})!==JSON.stringify({...value,checkedAt:null}))throw safeError();}rows.set(value.id,value);if(rows.size>maxPosts)throw safeError();}
   if(!data.paging?.next)return {posts:[...rows.values()],checkedAt:oldest??checkedAt};
   const next=new URL(data.paging.next);
   if(next.protocol!=='https:'||next.hostname!==host||next.port||next.username||next.password||next.pathname!==`/${version}/${userId}/media`)throw safeError();
   after=data.paging?.cursors?.after;
   if(typeof after!=='string'||!after||after.length>4096||seen.has(after))throw safeError();seen.add(after);
  }
  throw safeError();
 }));
 return async kind=>{
  try{
   configuration();if(!['stats','metrics'].includes(kind))throw safeError();
   if(kind==='metrics'){
    const [,result]=await Promise.all([profile(),media()]);
    return {version:1,account:ACCOUNT,source:'Meta / Instagram Graph API',scope:'instagram-organic-media',fetchedAt:new Date(now()).toISOString(),posts:result.posts.map(({timestamp,caption,...row})=>row)};
   }
   if(loginMode==='instagram'){
    const {userId,...p}=await profile();
    return {version:2,account:ACCOUNT,...p,followerHistory:[{date:p.checkedAt,count:p.followers}],trackedPosts:[],archiveCurrent:false,archiveCheckedAt:null};
   }
   const [profileData,archive]=await Promise.all([profile(),media().catch(()=>null)]);
   const {userId,...p}=profileData;
   // Instagram Login does not expose verified captions for partnership classification.
   const archiveCurrent=Boolean(loginMode==='facebook'&&archive&&archive.posts.length===p.posts);
   const trackedPosts=(archive?.posts??[]).map(({likes,comments,views,checkedAt,...row})=>row).sort((a,b)=>a.timestamp.localeCompare(b.timestamp));
   return {version:2,account:ACCOUNT,...p,followerHistory:[{date:p.checkedAt,count:p.followers}],trackedPosts,archiveCurrent,archiveCheckedAt:archive?.checkedAt??null};
  }catch{throw safeError();}
 };
}
