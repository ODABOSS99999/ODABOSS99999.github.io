import {afterEach,expect,it,vi} from 'vitest';
import {assertFresh,liveUrl,liveHeaders} from './liveStatistics';
import {LIVE_INSTAGRAM_URL,LIVE_INSTAGRAM_ANON_KEY} from './instagramLiveConfig';
import {loadStats} from './InstagramStats';
afterEach(()=>{vi.unstubAllEnvs();vi.unstubAllGlobals();});
it('uses the production connection and public gateway authorization by default',()=>{
 vi.stubEnv('VITE_INSTAGRAM_LIVE_URL','');vi.stubEnv('VITE_INSTAGRAM_LIVE_ANON_KEY','');
 expect(liveUrl('/stats')).toContain(LIVE_INSTAGRAM_URL+'/stats?refresh=');
 expect(liveHeaders()).toEqual({Authorization:`Bearer ${LIVE_INSTAGRAM_ANON_KEY}`});
});
it('never falls back to a saved file after a failed live request',async()=>{
 const fetcher=vi.fn().mockRejectedValue(new Error('offline'));vi.stubGlobal('fetch',fetcher);
 await expect(loadStats()).rejects.toThrow('offline');
 expect(fetcher).toHaveBeenCalledOnce();
 expect(fetcher.mock.calls[0][0]).not.toContain('/instagram/stats.json');
});
it('accepts recent source times and rejects stale, invalid and future measurements',()=>{
 expect(()=>assertFresh(new Date().toISOString())).not.toThrow();
 for(const value of [new Date(Date.now()-120001).toISOString(),new Date(Date.now()+60000).toISOString(),'invalid'])expect(()=>assertFresh(value)).toThrow();
});
it('uses custom endpoint authorization and validates source age',async()=>{
 vi.stubEnv('VITE_INSTAGRAM_LIVE_URL','https://example.com/api/instagram/');vi.stubEnv('VITE_INSTAGRAM_LIVE_ANON_KEY','test-public-key');
 expect(liveUrl('/stats')).toMatch(/^https:\/\/example.com\/api\/instagram\/stats\?refresh=/);
 const snapshot={version:2,account:'mcgowen_media',checkedAt:new Date(Date.now()-3600000).toISOString(),followers:7,posts:1,followerHistory:[],trackedPosts:[]};
 const fetcher=vi.fn().mockResolvedValue({ok:true,json:async()=>snapshot});vi.stubGlobal('fetch',fetcher);
 await expect(loadStats()).rejects.toThrow('Current measurement unavailable');
 snapshot.checkedAt=new Date().toISOString();await expect(loadStats()).resolves.toEqual(snapshot);
 expect(fetcher.mock.calls[0][1]).toMatchObject({cache:'no-store',headers:{Authorization:'Bearer test-public-key'}});
});
it('does not disclose default gateway authorization to custom endpoints and rejects invalid URLs',()=>{
 vi.stubEnv('VITE_INSTAGRAM_LIVE_URL','https://example.com/custom');vi.stubEnv('VITE_INSTAGRAM_LIVE_ANON_KEY','');expect(liveHeaders()).toEqual({});
 for(const value of ['relative','http://example.com','file:///tmp/test']){vi.stubEnv('VITE_INSTAGRAM_LIVE_URL',value);expect(()=>liveUrl('/stats')).toThrow();}
});
it('keeps a current profile available while withholding incomplete or old archive counts',async()=>{
 const snapshot={version:2,account:'mcgowen_media',checkedAt:new Date().toISOString(),followers:7,posts:551,followerHistory:[],trackedPosts:[],archiveCurrent:false,archiveCheckedAt:null as string|null};
 vi.stubGlobal('fetch',vi.fn().mockImplementation(async()=>({ok:true,json:async()=>({...snapshot})})));
 await expect(loadStats()).resolves.toMatchObject({followers:7,posts:551,archiveCurrent:false});
 snapshot.archiveCurrent=true;
 snapshot.archiveCheckedAt='2020-01-01T00:00:00Z';
 await expect(loadStats()).resolves.toMatchObject({followers:7,archiveCurrent:false});
});
