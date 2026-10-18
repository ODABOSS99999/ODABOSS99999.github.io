import {act,cleanup,fireEvent,render,screen} from '@testing-library/react';
import {afterEach,expect,it,vi} from 'vitest';
import PhotoMetrics from './PhotoMetrics';
const permalink='https://www.instagram.com/p/test/';
const snapshot=(checkedAt=new Date().toISOString())=>({version:1,account:'mcgowen_media',scope:'instagram-organic-media',source:'live',fetchedAt:checkedAt,posts:[{id:'1',permalink,likes:999,comments:null,views:null,checkedAt}]});
afterEach(()=>{cleanup();vi.restoreAllMocks();vi.unstubAllEnvs();vi.unstubAllGlobals();});
it('never displays stale snapshot counts from a live response',async()=>{
 vi.stubEnv('VITE_INSTAGRAM_LIVE_URL','https://live.example');
 const fetcher=vi.fn().mockResolvedValue({ok:true,json:async()=>snapshot('2020-01-01T00:00:00Z')});vi.stubGlobal('fetch',fetcher);
 render(<PhotoMetrics permalink={permalink}/>);
 await screen.findByRole('status');
 expect(screen.queryByText(/999 likes/)).toBeNull();
 expect(fetcher.mock.calls[0][0]).not.toContain('/instagram/metrics.json');
});
it('shows current live counts and removes them after a failed refresh',async()=>{
 vi.stubEnv('VITE_INSTAGRAM_LIVE_URL','https://live.example');vi.stubEnv('VITE_INSTAGRAM_LIVE_ANON_KEY','public-key');
 const fetcher=vi.fn().mockResolvedValueOnce({ok:true,json:async()=>snapshot()}).mockRejectedValue(new Error('offline'));vi.stubGlobal('fetch',fetcher);
 render(<PhotoMetrics permalink={permalink}/>);
 await screen.findByText(/999 likes/);
 expect(fetcher.mock.calls[0][0]).toMatch(/^https:\/\/live.example\/metrics\?refresh=/);
 expect(fetcher.mock.calls[0][1].headers).toEqual({Authorization:'Bearer public-key'});
 fireEvent.focus(window);await screen.findByRole('status');
 expect(screen.queryByText(/999 likes/)).toBeNull();
});
it('rejects stale live measurements',async()=>{
 vi.stubEnv('VITE_INSTAGRAM_LIVE_URL','https://live.example');
 vi.stubGlobal('fetch',vi.fn().mockResolvedValue({ok:true,json:async()=>snapshot('2020-01-01T00:00:00Z')}));
 render(<PhotoMetrics permalink={permalink}/>);
 await screen.findByRole('status');expect(screen.queryByText(/999 likes/)).toBeNull();
});


it('clears expired engagement immediately while a focused refresh is pending',async()=>{
 const saved=snapshot();let finish!:()=>void;
 const next=new Promise(resolve=>{finish=()=>resolve({ok:true,json:async()=>snapshot()});});
 const fetcher=vi.fn().mockResolvedValueOnce({ok:true,json:async()=>saved}).mockReturnValue(next);vi.stubGlobal('fetch',fetcher);
 render(<PhotoMetrics permalink={permalink}/>);await screen.findByText(/999 likes/);
 fireEvent.focus(window);expect(screen.getByText(/999 likes/)).toBeTruthy();
 vi.spyOn(Date,'now').mockReturnValue(Date.parse(saved.fetchedAt)+120001);
 fireEvent.focus(window);expect(screen.queryByText(/999 likes/)).toBeNull();
 await act(async()=>{finish();});
});
