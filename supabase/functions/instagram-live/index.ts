import { createEdgeHandler } from './handler.mjs';
import { createGraphLoader } from './graph.mjs';

// JWT verification stays enabled in the Supabase gateway deployment configuration.
// Only the server environment holds the Windsor credential.
const token=Deno.env.get('INSTAGRAM_ACCESS_TOKEN');
const loadOverride=token?createGraphLoader({
  token,
  loginMode:Deno.env.get('INSTAGRAM_LOGIN_MODE')||'instagram',
  accountId:Deno.env.get('INSTAGRAM_USER_ID')||'17841467441753084',
  version:Deno.env.get('INSTAGRAM_API_VERSION')||'v26.0',
}):undefined;
Deno.serve(createEdgeHandler({key:Deno.env.get('WINDSOR_API_KEY'),loadOverride}));
