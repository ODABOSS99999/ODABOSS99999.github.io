import {afterEach,expect,it,vi} from 'vitest';
import {act,renderHook} from '@testing-library/react';
import feed from '../public/instagram/feed.json';
import metrics from '../public/instagram/metrics.json';
afterEach(()=>{vi.unstubAllGlobals();vi.unstubAllEnvs();vi.useRealTimers();vi.resetModules();});
it('polls media without browser caching, updates image revisions, and retains data on a network failure',async()=>{
 vi.useFakeTimers();let fail=false,revision=0;
 const fetcher=vi.fn(async (url:string)=>{if(fail)throw Error('offline');return {ok:true,json:async()=>url.includes('metrics.json')?metrics:{...feed,fetchedAt:new Date(Date.UTC(2026,9,17,revision++)).toISOString()}};});
 vi.stubGlobal('fetch',fetcher);
 const {useInstagramSnapshot}=await import('./instagramMedia');
 const {result,unmount}=renderHook(()=>useInstagramSnapshot({refreshOnMount:true}));
 await act(async()=>{await vi.advanceTimersByTimeAsync(0);});
 const first=result.current.snapshot!.posts[0].image.src;expect(first).toContain('?v=');
 await act(async()=>{await vi.advanceTimersByTimeAsync(300000);});
 expect(result.current.snapshot!.posts[0].image.src).not.toBe(first);
 expect(fetcher.mock.calls.every(call=>(call as unknown as [string,RequestInit])[1].cache==='no-store')).toBe(true);
 const previous=result.current.snapshot;fail=true;
 await act(async()=>{await vi.advanceTimersByTimeAsync(300000);});
 expect(result.current.error).toBe(true);expect(result.current.snapshot).toBe(previous);
 unmount();
});

it('requests the live newest post on every opening, merges it with the archive, and reports live failures',async()=>{
 vi.stubEnv('VITE_INSTAGRAM_FEED_URL','https://example.workers.dev/api/instagram/feed');
 let failure=false,id='99999999999999999';
 const fetcher=vi.fn(async(url:string)=>{
  if(url.startsWith('https://example.workers.dev/')){
   if(failure)throw Error('offline');
   return {ok:true,json:async()=>({...feed,fetchedAt:new Date().toISOString(),posts:[{...feed.posts[0],id,timestamp:'2099-01-01T00:00:00Z',image:{src:'data:image/webp;base64,UklGRg==',width:32,height:24}}]})};
  }
  return {ok:true,json:async()=>url.includes('metrics.json')?metrics:feed};
 });
 vi.stubGlobal('fetch',fetcher);
 const {useInstagramSnapshot}=await import('./instagramMedia');
 const first=renderHook(()=>useInstagramSnapshot({refreshOnMount:true}));
 await vi.waitFor(()=>expect(first.result.current.snapshot?.posts[0].id).toBe(id));
 expect(first.result.current.snapshot!.posts.length).toBe(feed.posts.length+1);
 expect(first.result.current.error).toBe(false);first.unmount();
 id='99999999999999998';
 const second=renderHook(()=>useInstagramSnapshot({refreshOnMount:true}));
 await vi.waitFor(()=>expect(second.result.current.snapshot?.posts[0].id).toBe(id));
 expect(fetcher.mock.calls.filter(([url])=>url.startsWith('https://example.workers.dev/'))).toHaveLength(2);
 second.unmount();failure=true;
 const third=renderHook(()=>useInstagramSnapshot({refreshOnMount:true}));
 await vi.waitFor(()=>expect(third.result.current.error).toBe(true));
 expect(third.result.current.snapshot?.posts.length).toBe(feed.posts.length);
});

it('shares concurrent portfolio requests and displays saved photos while the live refresh is pending',async()=>{
 vi.stubEnv('VITE_INSTAGRAM_FEED_URL','https://example.workers.dev/api/instagram/feed');
 let finishLive!:(value:unknown)=>void;
 const pendingLive=new Promise(resolve=>{finishLive=resolve;});
 const fetcher=vi.fn(async(url:string)=>url.startsWith('https://example.workers.dev/')?pendingLive:{ok:true,json:async()=>url.includes('metrics.json')?metrics:feed});
 vi.stubGlobal('fetch',fetcher);
 const {useInstagramSnapshot}=await import('./instagramMedia');
 const hooks=[renderHook(()=>useInstagramSnapshot({refreshOnMount:true})),renderHook(()=>useInstagramSnapshot({refreshOnMount:true})),renderHook(()=>useInstagramSnapshot({refreshOnMount:true}))];
 await vi.waitFor(()=>expect(hooks.every(h=>h.result.current.snapshot&&h.result.current.loading===false)).toBe(true));
 expect(fetcher.mock.calls.filter(([url])=>url.includes('/instagram/feed.json'))).toHaveLength(1);
 expect(fetcher.mock.calls.filter(([url])=>url.includes('/instagram/metrics.json'))).toHaveLength(1);
 expect(fetcher.mock.calls.filter(([url])=>url.startsWith('https://example.workers.dev/'))).toHaveLength(1);
 await act(async()=>{finishLive({ok:true,json:async()=>feed});await pendingLive;});
 hooks.forEach(h=>h.unmount());
});

it('starts a separate live request for every lamp click while earlier requests are pending',async()=>{
 vi.stubGlobal('fetch',vi.fn(()=>new Promise(()=>{})));
 const {refreshRecentPosts}=await import('./instagramMedia');
 refreshRecentPosts();refreshRecentPosts();refreshRecentPosts();
 expect(fetch).toHaveBeenCalledTimes(3);
});

it('merges multiple live posts and keeps them when a later manual refresh fails',async()=>{
 vi.stubEnv('VITE_INSTAGRAM_FEED_URL','https://example.workers.dev/api/instagram/feed');
 let failure=false;
 const ids=['99999999999999991','99999999999999992'];
 vi.stubGlobal('fetch',vi.fn(async(url:string)=>{
  if(url.startsWith('https://example.workers.dev/')){
   if(failure)throw Error('offline');
   return {ok:true,json:async()=>({...feed,fetchedAt:new Date().toISOString(),posts:ids.map((id,index)=>({...feed.posts[0],id,timestamp:`2099-01-0${index+1}T00:00:00Z`,image:{src:'https://scontent.cdninstagram.com/photo.jpg',width:32,height:24}}))})};
  }
  return {ok:true,json:async()=>url.includes('metrics.json')?metrics:feed};
 }));
 const {useInstagramSnapshot}=await import('./instagramMedia');
 const hook=renderHook(()=>useInstagramSnapshot({refreshOnMount:true}));
 await vi.waitFor(()=>expect(hook.result.current.snapshot?.posts).toHaveLength(feed.posts.length+2));
 expect(ids.every(id=>hook.result.current.snapshot!.posts.some(post=>post.id===id))).toBe(true);
 const previous=hook.result.current.snapshot;failure=true;
 act(()=>hook.result.current.refresh());
 await vi.waitFor(()=>expect(hook.result.current.error).toBe(true));
 expect(hook.result.current.snapshot).toBe(previous);expect(hook.result.current.refreshing).toBe(false);hook.unmount();
});
