import {afterEach,expect,it,vi} from 'vitest';
import {validateLiveFeed,liveFeedUrl,liveFeedHeaders} from './instagramLiveFeed';
import feed from '../public/instagram/feed.json';

const latest=()=>({...feed,fetchedAt:new Date().toISOString(),posts:[{...feed.posts[0],image:{src:'data:image/webp;base64,UklGRg==',width:32,height:24}}]});
afterEach(()=>vi.unstubAllEnvs());
it('accepts a validated inline cover but rejects remote URLs, SVG and stale responses',()=>{
 expect(validateLiveFeed(latest()).posts).toHaveLength(1);
 for(const src of ['https://evil.example/cover.png','data:image/svg+xml;base64,abcd','data:image/webp;base64,%%%']){
  const data=latest();data.posts[0].image.src=src;
  expect(()=>validateLiveFeed(data)).toThrow();
 }
 expect(()=>validateLiveFeed({...latest(),account:'someone_else'})).toThrow();
 expect(()=>validateLiveFeed({...latest(),fetchedAt:'2020-01-01T00:00:00Z'})).toThrow();
});
it('requires HTTPS for production and adds a fresh request URL',()=>{
 vi.stubEnv('VITE_INSTAGRAM_FEED_URL','');
 expect(liveFeedUrl()).toMatch(/^https:\/\/bcbcmjhdlzkaelfwagkv\.supabase\.co\/functions\/v1\/instagram-feed\?refresh=\d+$/);
 expect(liveFeedHeaders()).toHaveProperty('Authorization');
 vi.stubEnv('VITE_INSTAGRAM_FEED_URL','https://example.workers.dev/api/instagram/feed');
 expect(liveFeedUrl()).toMatch(/^https:\/\/example.workers.dev\/api\/instagram\/feed\?refresh=\d+$/);
 expect(liveFeedHeaders()).toEqual({});
 vi.stubEnv('VITE_INSTAGRAM_FEED_URL','http://example.com/feed');expect(()=>liveFeedUrl()).toThrow();
});
