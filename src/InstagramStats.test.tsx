import {fireEvent,render,screen} from '@testing-library/react';
import {it,expect,vi} from 'vitest';
import InstagramStats,{LineChart} from './InstagramStats';
it('keeps date-only publication dates and clamps selection after refresh',()=>{
 const points=[{date:'2026-10-15',count:1},{date:'2026-10-16',count:2}];const {rerender}=render(<LineChart points={points} label="Archived posts"/>);
 expect(screen.getByRole('status').textContent).toContain('Oct 16, 2026');fireEvent.change(screen.getByRole('slider'),{target:{value:'1'}});
 rerender(<LineChart points={[points[0]]} label="Archived posts"/>);expect(screen.getByRole('status').textContent).toContain('1 archived posts');
});

it('shows dated partnership history when live profile has no caption archive',async()=>{
 vi.stubGlobal('fetch',vi.fn().mockResolvedValue({ok:true,json:async()=>({version:2,account:'mcgowen_media',checkedAt:new Date().toISOString(),followers:4641,posts:551,followerHistory:[],trackedPosts:[],archiveCurrent:false,archiveCheckedAt:null})}));
 try {
 render(<InstagramStats open onClose={()=>{}}/>);
 await screen.findByRole('button',{name:/Archived partnerships/});
 expect(screen.getByRole('img',{name:/Posts over time line graph/})).toBeTruthy();
 expect(screen.queryByText('How partnership posts are counted')).toBeNull();
 fireEvent.click(screen.getByRole('button',{name:/^Followers/}));
 expect(screen.getByRole('img',{name:/Followers over time line graph/})).toBeTruthy();
 expect(screen.getByRole('link',{name:'View historical snapshot sources'})).toBeTruthy();
 expect(screen.queryByRole('button',{name:'Export follow dates'})).toBeNull();
 expect(screen.queryByRole('button',{name:'Recorded totals'})).toBeNull();
 expect(screen.getByText(/Dashed history counts followers/)).toBeTruthy();
 fireEvent.click(screen.getByRole('button',{name:/Archived partnerships/}));
 expect(screen.getByRole('img',{name:/Partnership posts over time/})).toBeTruthy();
 expect(screen.getByText('How partnership posts are counted')).toBeTruthy();
 expect(screen.getByText(/Saved archive; newer posts/)).toBeTruthy();
 expect(screen.getByRole('button',{name:'Cumulative'}).getAttribute('aria-pressed')).toBe('true');
 fireEvent.click(screen.getByRole('button',{name:'Posts per month'}));
 expect(screen.getByRole('slider',{name:/Explore partnership posts/})).toBeTruthy();
 expect(screen.queryByText('Current archive statistics unavailable.')).toBeNull();
 } finally {vi.unstubAllGlobals();}
});

it('keeps saved graphs and export follow dates usable when live refresh fails',async()=>{
 vi.stubGlobal('fetch',vi.fn().mockRejectedValue(new Error('Offline')));
 try {
 render(<InstagramStats open onClose={()=>{}}/>);
 await screen.findByText('Live refresh unavailable. Showing dated saved data.');
 expect(screen.getByRole('button',{name:/Saved followers/})).toBeTruthy();
 expect(screen.getByRole('img',{name:/Posts over time/})).toBeTruthy();
 fireEvent.click(screen.getByRole('button',{name:/Saved followers/}));
 expect(screen.getByRole('img',{name:/Followers over time/})).toBeTruthy();
 expect(screen.getByText('2025-10-01')).toBeTruthy();
 fireEvent.click(screen.getByRole('button',{name:/Archived partnerships/}));
 expect(screen.getByRole('img',{name:/Partnership posts over time/})).toBeTruthy();
 } finally {vi.unstubAllGlobals();}
});
