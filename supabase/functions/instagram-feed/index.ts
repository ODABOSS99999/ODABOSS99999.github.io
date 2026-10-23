import { createLatestWorker } from '../../../workers/instagram/src/index.mjs';

// Reuse the existing private Instagram connection. Nothing is persisted or cached.
const token = Deno.env.get('INSTAGRAM_ACCESS_TOKEN');
const mode = Deno.env.get('INSTAGRAM_LOGIN_MODE') || 'instagram';
const host = mode === 'instagram' ? 'graph.instagram.com' : 'graph.facebook.com';
const version = Deno.env.get('INSTAGRAM_API_VERSION') || 'v26.0';
async function graph(path: string, fields: string) {
  const url = new URL(`https://${host}/${version}/${path}`);
  url.search = new URLSearchParams({ fields, limit: '100' }).toString();
  const response = await fetch(url, { headers: { Authorization: `Bearer ${token}` }, redirect: 'error', cache: 'no-store', signal: AbortSignal.timeout(10000) });
  if (!response.ok) throw Error('Instagram unavailable');
  const data = await response.json();
  if (!data || data.error || data.partial || data.truncated) throw Error('Instagram unavailable');
  return data;
}
const worker = createLatestWorker({ loadPosts: token ? async () => {
  const identity = await graph(mode === 'instagram' ? 'me' : Deno.env.get('INSTAGRAM_USER_ID') || '17841467441753084', mode === 'instagram' ? 'user_id,username' : 'id,username');
  const profile = identity.data ? identity.data[0] : identity;
  const id = String(mode === 'instagram' ? profile?.user_id : profile?.id);
  if (profile?.username !== 'mcgowen_media' || !/^\d{5,40}$/.test(id)) throw Error('Invalid account');
  const result = await graph(`${id}/media`, 'id,caption,permalink,media_type,media_url,thumbnail_url,timestamp');
  if (!Array.isArray(result.data)) throw Error('Invalid media');
  return { account: profile.username, data: result.data.map((post: Record<string, unknown>) => ({
    media_id: post.id, media_caption: post.caption, media_permalink: post.permalink,
    media_type: post.media_type, media_url: post.media_url, media_thumbnail_url: post.thumbnail_url, timestamp: post.timestamp,
  })) };
} : undefined });

Deno.serve(async (request: Request) => {
  const url = new URL(request.url);
  url.pathname = '/api/instagram/feed';
  // Let the shared handler validate the origin before answering a preflight.
  if (request.method === 'OPTIONS') {
    const probe = await worker.fetch(new Request(url, { method: 'HEAD', headers: request.headers }));
    if (probe.status === 403) return probe;
    const headers = new Headers(probe.headers);
    headers.set('Access-Control-Allow-Headers', 'authorization, apikey, x-client-info, content-type');
    headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    return new Response(null, { status: 204, headers });
  }
  return worker.fetch(new Request(url, request), { WINDSOR_API_KEY: Deno.env.get('WINDSOR_API_KEY') });
});
