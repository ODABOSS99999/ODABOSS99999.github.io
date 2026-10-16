import {fireEvent,render,screen,waitFor} from '@testing-library/react';
import {afterEach,expect,it,vi} from 'vitest';
import Darkroom from './Darkroom';
import feed from '../public/instagram/feed.json';
import stats from '../public/instagram/stats.json';

afterEach(()=>vi.unstubAllGlobals());
it('shows recent posts independently of curated selections and retains them when refresh fails',async()=>{
 let offline=false;
 vi.stubGlobal('fetch',vi.fn(async(url:string)=>{
  if(offline)throw Error('Offline');
  return {ok:true,json:async()=>url.includes('stats.json')?stats:url.includes('metrics.json')?{version:0}:feed};
 }));
 const {container}=render(<Darkroom/>);
 await screen.findByText(stats.followers.toLocaleString());
 expect(container.querySelectorAll('.darkroom-posts article')).toHaveLength(6);
 const newest=[...feed.posts].sort((a,b)=>Date.parse(b.timestamp)-Date.parse(a.timestamp))[0];
 expect(container.querySelector('.darkroom-posts a')?.getAttribute('href')).toBe(newest.permalink);
 offline=true;fireEvent.click(screen.getByRole('button',{name:'Check for updates'}));
 await screen.findByText('Some updates are unavailable. Any previously loaded data stays visible.');
 expect(container.querySelectorAll('.darkroom-posts article')).toHaveLength(6);
 expect(screen.getByText(stats.followers.toLocaleString())).toBeTruthy();
 await waitFor(()=>expect(screen.getByRole('button',{name:'Check for updates'}).hasAttribute('disabled')).toBe(false));
});
