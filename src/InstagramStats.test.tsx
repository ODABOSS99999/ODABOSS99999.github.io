import {cleanup,fireEvent,render,screen} from '@testing-library/react';
import {afterEach,it,expect,vi} from 'vitest';
import InstagramStats,{LineChart} from './InstagramStats';
afterEach(()=>{cleanup();vi.unstubAllEnvs();vi.unstubAllGlobals();});
it('keeps date-only publication dates and clamps selection after refresh',()=>{
 const points=[{date:'2026-10-15',count:1},{date:'2026-10-16',count:2}];const {rerender}=render(<LineChart points={points} label="Archived posts"/>);
 expect(screen.getByRole('status').textContent).toContain('Oct 16, 2026');fireEvent.change(screen.getByRole('slider'),{target:{value:'1'}});
 rerender(<LineChart points={[points[0]]} label="Archived posts"/>);expect(screen.getByRole('status').textContent).toContain('1 archived posts');
});

it('labels the saved ledger and keeps legacy dated archive charts available',async()=>{
 vi.stubEnv('VITE_INSTAGRAM_LIVE_URL','');
 const snapshot={version:2,account:'mcgowen_media',checkedAt:'2020-01-02T00:00:00Z',followers:7,posts:1,followerHistory:[{date:'2020-01-02',count:7}],trackedPosts:[{id:'12345',caption:'Personal photograph',timestamp:'2020-01-01T00:00:00Z',permalink:'https://www.instagram.com/p/test/'}]};
 vi.stubGlobal('fetch',vi.fn().mockResolvedValue({ok:true,json:async()=>snapshot}));
 render(<InstagramStats open onClose={()=>{}}/>);
 await screen.findByText(/Saved snapshot/);
 fireEvent.click(screen.getByRole('button',{name:'Posts 1'}));
 expect(screen.getByText(/1 archived posts since 2020-01/)).toBeTruthy();
 expect(screen.queryByText('Archive statistics unavailable.')).toBeNull();
});
