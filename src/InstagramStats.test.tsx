import {fireEvent,render,screen,within} from '@testing-library/react';
import {it,expect,vi} from 'vitest';
import InstagramStats,{LineChart} from './InstagramStats';
import userEvent from '@testing-library/user-event';
import archive from '../public/instagram/stats.json';
import {classifyPartnership,isFollowerRating} from './instagramLedger';
it('keeps date-only publication dates and clamps selection after refresh',()=>{
 const points=[{date:'2026-10-15',count:1},{date:'2026-10-16',count:2}];const {rerender}=render(<LineChart points={points} label="Archived posts"/>);
 expect(screen.getByRole('status').textContent).toContain('Oct 16, 2026');fireEvent.change(screen.getByRole('slider'),{target:{value:'1'}});
 rerender(<LineChart points={[points[0]]} label="Archived posts"/>);expect(screen.getByRole('status').textContent).toContain('1 archived posts');
});

it('shows dated partnership history when live profile has no caption archive',async()=>{
 vi.stubGlobal('fetch',vi.fn().mockResolvedValue({ok:true,json:async()=>({version:2,account:'mcgowen_media',checkedAt:new Date().toISOString(),followers:4641,posts:551,followerHistory:[],trackedPosts:[],archiveCurrent:false,archiveCheckedAt:null})}));
 try {
 render(<InstagramStats open onClose={()=>{}}/>);
 await screen.findByRole('button',{name:/Archived collaborations/});
 expect(screen.getByRole('img',{name:/Posts over time line graph/})).toBeTruthy();
 expect(screen.queryByText('Counted posts and why')).toBeNull();
 fireEvent.click(screen.getByRole('button',{name:/^Follows/}));
 expect(screen.getByRole('img',{name:/Followers over time line graph/})).toBeTruthy();
 expect(screen.getByRole('link',{name:'View historical snapshot sources'})).toBeTruthy();
 expect(screen.queryByRole('button',{name:'Export follow dates'})).toBeNull();
 expect(screen.queryByRole('button',{name:'Recorded totals'})).toBeNull();
 expect(screen.getByText(/Export history counts followers/)).toBeTruthy();
 expect(document.querySelector('path[stroke-dasharray]')).toBeNull();
 fireEvent.click(screen.getByRole('button',{name:/Archived collaborations/}));
 expect(screen.getByRole('img',{name:/Collaboration posts over time/})).toBeTruthy();
 expect(screen.getByText('Counted posts and why')).toBeTruthy();
 expect(screen.getByText(/Dated archive; newer posts/)).toBeTruthy();
 expect(screen.getByRole('button',{name:'Cumulative'}).getAttribute('aria-pressed')).toBe('true');
 fireEvent.click(screen.getByRole('button',{name:'Posts per month'}));
 expect(screen.getByRole('slider',{name:/Explore collaboration posts/})).toBeTruthy();
 fireEvent.click(screen.getByRole('button',{name:/^Posts\s*551$/}));
 expect(screen.getByRole('button',{name:'Cumulative'}).getAttribute('aria-pressed')).toBe('true');
 expect(screen.queryByText('Current archive statistics unavailable.')).toBeNull();
 } finally {vi.unstubAllGlobals();}
});

it('keeps saved graphs and export follow dates usable when live refresh fails',async()=>{
 vi.stubGlobal('fetch',vi.fn().mockRejectedValue(new Error('Offline')));
 try {
 render(<InstagramStats open onClose={()=>{}}/>);
 await screen.findByText('Live refresh unavailable. Showing dated data.');
 expect(screen.getByRole('button',{name:/^Follows/})).toBeTruthy();
 expect(screen.getByRole('img',{name:/Posts over time/})).toBeTruthy();
 fireEvent.click(screen.getByRole('button',{name:/^Follows/}));
 expect(screen.getByRole('img',{name:/Followers over time/})).toBeTruthy();
 expect(screen.getByText('2025-10-01')).toBeTruthy();
 fireEvent.click(screen.getByRole('button',{name:/Archived collaborations/}));
 expect(screen.getByRole('img',{name:/Collaboration posts over time/})).toBeTruthy();
 } finally {vi.unstubAllGlobals();}
});


it('shows only counted posts with a reason and includes uncertain decisions',async()=>{
 vi.stubGlobal('fetch',vi.fn().mockRejectedValue(new Error('offline fixture')));
 try {
 const user=userEvent.setup();render(<InstagramStats open onClose={()=>{}}/>);
 await user.click(screen.getByRole('button',{name:/Archived collaborations/}));
 await user.click(screen.getByText('Counted posts and why'));
 const table=screen.getByRole('table',{name:'Counted collaboration posts'});
 const counted=archive.trackedPosts.filter(post=>classifyPartnership(post).kind==='partnership'&&!isFollowerRating(post));
 expect(within(table).getAllByRole('row')).toHaveLength(counted.length+1);
 for(const row of within(table).getAllByRole('row').slice(1))expect(within(row).getAllByRole('cell')[1].textContent?.length).toBeGreaterThan(20);
 expect(within(table).queryByText(/Needs review|Excluded|Unreviewed/)).toBeNull();
 expect(within(table).getByRole('link',{name:/Im still not done with glaive/})).toBeTruthy();
 expect(within(table).getAllByText(/owner (instruction|preference)/i).length).toBeGreaterThan(0);
 const toggle=screen.getByRole('switch',{name:'Include follower photography rating reels'});
 expect((toggle as HTMLInputElement).checked).toBe(false);
 const allCounted=archive.trackedPosts.filter(post=>classifyPartnership(post).kind==='partnership');
 await user.click(toggle);
 expect(within(table).getAllByRole('row')).toHaveLength(allCounted.length+1);
 expect(localStorage.getItem('instagram-include-follower-ratings')).toBe('true');
 expect(screen.getByRole('img',{name:/Collaboration posts over time/})).toBeTruthy();
 await user.click(toggle);
 expect(within(table).getAllByRole('row')).toHaveLength(counted.length+1);
 expect(localStorage.getItem('instagram-include-follower-ratings')).toBe('false');
 } finally {vi.unstubAllGlobals();}
});
