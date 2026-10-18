import {act,cleanup,fireEvent,render,screen} from '@testing-library/react';
import {afterEach,it,expect,vi} from 'vitest';
import InstagramStats,{LineChart} from './InstagramStats';
afterEach(()=>{cleanup();vi.restoreAllMocks();vi.unstubAllEnvs();vi.unstubAllGlobals();});
const profile=()=>({version:2,account:'mcgowen_media',checkedAt:new Date().toISOString(),followers:7,posts:1,followerHistory:[{date:new Date().toISOString(),count:7}],trackedPosts:[{id:'12345',caption:'Personal photograph',timestamp:'2020-01-01T00:00:00Z',permalink:'https://www.instagram.com/p/test/'}]});
it('keeps date-only publication dates and clamps selection after refresh',()=>{
 const points=[{date:'2026-10-15',count:1},{date:'2026-10-16',count:2}];const {rerender}=render(<LineChart points={points} label="Archived posts"/>);
 expect(screen.getByRole('status').textContent).toContain('Oct 16, 2026');fireEvent.change(screen.getByRole('slider'),{target:{value:'1'}});
 rerender(<LineChart points={[points[0]]} label="Archived posts"/>);expect(screen.getByRole('status').textContent).toContain('1 archived posts');
});
it('defaults to current follower totals and withholds missing daily data and unverified archives',async()=>{
 vi.stubGlobal('fetch',vi.fn().mockResolvedValue({ok:true,json:async()=>profile()}));
 render(<InstagramStats open onClose={()=>{}}/>);
 await screen.findByRole('heading',{name:'Followers over time'});
 expect(screen.getByRole('button',{name:'Follower total'}).getAttribute('aria-pressed')).toBe('true');
 fireEvent.click(screen.getByRole('button',{name:'New followers per day'}));
 expect(screen.getByText('Daily follower statistics unavailable.')).toBeTruthy();
 fireEvent.click(screen.getByRole('button',{name:'Posts 1'}));
 expect(screen.getByText('Archive statistics unavailable.')).toBeTruthy();
 expect(screen.getByRole('button',{name:'Partnerships* Unavailable'})).toBeTruthy();
});
it('keeps source-provided daily follows distinct from total followers',async()=>{
 const stats={...profile(),followerGains:[{date:'2026-09-17',count:2},{date:'2026-10-16',count:15}]};
 vi.stubGlobal('fetch',vi.fn(async()=>({ok:true,json:async()=>stats})));
 render(<InstagramStats open onClose={()=>{}}/>);
 await screen.findByRole('heading',{name:'Followers over time'});
 fireEvent.click(screen.getByRole('button',{name:'New followers per day'}));
 expect(screen.getByRole('img',{name:/New followers over time/}).getAttribute('aria-label')).toContain('2 recorded dates');
 fireEvent.change(screen.getByRole('slider'),{target:{value:'0'}});
 expect(screen.getByRole('status').textContent).toContain('2 new followers');
 fireEvent.click(screen.getByRole('button',{name:'Follower total'}));
 expect(screen.getByRole('heading',{name:'Followers over time'})).toBeTruthy();
});
it('rejects stale profiles without requesting a saved snapshot',async()=>{
 const fetcher=vi.fn().mockResolvedValue({ok:true,json:async()=>({...profile(),checkedAt:'2020-01-01T00:00:00Z'})});vi.stubGlobal('fetch',fetcher);
 render(<InstagramStats open onClose={()=>{}}/>);
 await screen.findByText('Instagram statistics are unavailable.');
 expect(fetcher).toHaveBeenCalledOnce();expect(fetcher.mock.calls[0][0]).not.toContain('/instagram/stats.json');
});

it('clears expired totals immediately on reopening while refresh is pending',async()=>{
 const saved=profile();let finish!:()=>void;
 const next=new Promise(resolve=>{finish=()=>resolve({ok:true,json:async()=>profile()});});
 vi.stubGlobal('fetch',vi.fn().mockResolvedValueOnce({ok:true,json:async()=>saved}).mockReturnValue(next));
 const {rerender}=render(<InstagramStats open onClose={()=>{}}/>);
 await screen.findByRole('button',{name:'Followers 7'});
 fireEvent.focus(window);expect(screen.getByRole('button',{name:'Followers 7'})).toBeTruthy();
 rerender(<InstagramStats open={false} onClose={()=>{}}/>);
 vi.spyOn(Date,'now').mockReturnValue(Date.parse(saved.checkedAt)+120001);
 rerender(<InstagramStats open onClose={()=>{}}/>);
 expect(screen.queryByRole('button',{name:'Followers 7'})).toBeNull();
 await act(async()=>{finish();});
});
