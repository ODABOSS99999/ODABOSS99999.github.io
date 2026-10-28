import {createServer} from 'node:http';
import {randomBytes, createHash, timingSafeEqual} from 'node:crypto';
import {readFile, writeFile, rename} from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {createWorker} from '../workers/music/src/index.mjs';

const origin='http://127.0.0.1:8765', callback=`${origin}/callback`;
const credentialsPath=fileURLToPath(new URL('../.env.spotify.local',import.meta.url));
const nonce=randomBytes(32).toString('hex');
let credentials=null, pending=null;
try{credentials=JSON.parse(await readFile(credentialsPath,'utf8'));}catch(error){if(error.code!=='ENOENT')throw Error('Cannot read local Spotify connection.');}
async function save(next){
  const temp=`${credentialsPath}.tmp`;
  await writeFile(temp,JSON.stringify(next),{mode:0o600});
  await rename(temp,credentialsPath);credentials=next;
}
const html=body=>`<!doctype html><html lang="en"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>Connect Spotify · McGowen Library</title><style>body{max-width:620px;margin:8vh auto;padding:24px;background:#f0e8d3;color:#293c33;font:17px/1.6 system-ui}h1{font:48px Georgia}input,button{font:inherit;padding:12px;display:block;margin:12px 0;box-sizing:border-box;width:100%}button{background:#293c33;color:#fff;border:0;cursor:pointer}a{color:inherit}</style><h1>The music shelf</h1>${body}</html>`;
function page(res,body,status=200){res.writeHead(status,{'Content-Type':'text/html; charset=utf-8','Cache-Control':'no-store','Referrer-Policy':'same-origin','Content-Security-Policy':"default-src 'none'; style-src 'unsafe-inline'; form-action 'self' https://accounts.spotify.com; base-uri 'none'; frame-ancestors 'none'"});res.end(html(body));}
function equal(a,b){return typeof a==='string'&&typeof b==='string'&&a.length===b.length&&timingSafeEqual(Buffer.from(a),Buffer.from(b));}
const worker=createWorker();
const server=createServer(async(req,res)=>{
 try{
  if(req.headers.host!=='127.0.0.1:8765'){res.writeHead(403);res.end();return;}
  const url=new URL(req.url,origin);
  if(url.pathname==='/music'){
   const response=await worker.fetch(new Request(url,{method:req.method,headers:req.headers}),{
    SPOTIFY_CLIENT_ID:credentials?.clientId,SPOTIFY_REFRESH_TOKEN:credentials?.refreshToken,
    saveRefreshToken:token=>save({...credentials,refreshToken:token}),
   });
   res.writeHead(response.status,Object.fromEntries(response.headers));res.end(await response.text());return;
  }
  if(req.method==='GET'&&url.pathname==='/'){
   page(res,`${credentials?'<p>Spotify is connected on this computer.</p><p><a href="http://127.0.0.1:5173/music">Open the music shelf</a></p>':''}<p>Connect your Spotify listening history and top artists to the library. Sign in directly with Spotify; credentials stay on this computer.</p><p>Register this redirect URI in your Spotify app: <code>${callback}</code>.</p><form method="post" action="/connect"><input type="hidden" name="nonce" value="${nonce}"><label>Spotify app Client ID (public)<input name="clientId" required pattern="[a-fA-F0-9]{32}" autocomplete="off"></label><button>Continue to Spotify</button></form>`);return;
  }
  if(req.method==='POST'&&url.pathname==='/connect'){
   // Some browser environments omit Origin for a native form submission.
   // The unguessable page nonce remains mandatory even without that header.
   if(req.headers.origin&&req.headers.origin!==origin){page(res,'<p>Open this page directly to connect.</p>',403);return;}
   let body='';for await(const chunk of req){body+=chunk;if(body.length>4096){page(res,'<p>Request too large.</p>',413);return;}}
   const fields=new URLSearchParams(body),clientId=fields.get('clientId');
   if(!equal(fields.get('nonce'),nonce)||!clientId?.match(/^[a-f0-9]{32}$/i)){page(res,'<p>Invalid app ID. Return and try again.</p>',400);return;}
   const verifier=randomBytes(48).toString('base64url'),state=randomBytes(32).toString('hex');
   pending={clientId,verifier,state,expires:Date.now()+600000};
   const auth=new URL('https://accounts.spotify.com/authorize');
   auth.search=new URLSearchParams({client_id:clientId,response_type:'code',redirect_uri:callback,state,scope:'user-read-recently-played user-top-read',code_challenge_method:'S256',code_challenge:createHash('sha256').update(verifier).digest('base64url')}).toString();
   res.writeHead(303,{Location:auth.href,'Cache-Control':'no-store','Referrer-Policy':'no-referrer'});res.end();return;
  }
  if(req.method==='GET'&&url.pathname==='/callback'){
   const attempt=pending;
   if(!attempt||attempt.expires<Date.now()||!equal(url.searchParams.get('state'),attempt.state)){page(res,'<p>This connection request has expired. Start again.</p>',400);return;}
   pending=null;
   if(url.searchParams.has('error')){page(res,'<p>Spotify connection was cancelled. You can close this tab.</p>',400);return;}
   const code=url.searchParams.get('code');if(!code){page(res,'<p>Spotify did not return a connection code.</p>',400);return;}
   const response=await fetch('https://accounts.spotify.com/api/token',{method:'POST',headers:{'Content-Type':'application/x-www-form-urlencoded'},body:new URLSearchParams({grant_type:'authorization_code',client_id:attempt.clientId,code_verifier:attempt.verifier,redirect_uri:callback,code}),signal:AbortSignal.timeout(10000),redirect:'error'});
   if(!response.ok){page(res,'<p>Spotify could not connect. Check the app redirect URI and try again.</p>',502);return;}
   const token=await response.json();
   if(typeof token.refresh_token!=='string'||!token.refresh_token){page(res,'<p>Spotify did not return a renewable connection. Please try again.</p>',502);return;}
   await save({clientId:attempt.clientId,refreshToken:token.refresh_token,authorizedAt:new Date().toISOString()});
   page(res,'<p>Spotify is connected. Your credentials were saved privately on this computer.</p><p><a href="http://127.0.0.1:5173/music">Open the music shelf</a></p>');return;
  }
  page(res,'<p>Page not found.</p>',404);
 }catch{page(res,'<p>The connection could not be completed. Please try again.</p>',500);}
});
server.listen(8765,'127.0.0.1',()=>console.log(`Spotify connection helper: ${origin}`));
