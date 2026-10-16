import {fireEvent,render,screen,waitFor} from '@testing-library/react';
import {afterEach,expect,it,vi} from 'vitest';
import Darkroom from './Darkroom';
import feed from '../public/instagram/feed.json';

afterEach(()=>vi.unstubAllGlobals());
it('excludes newest videos and reels while scanning photo posts with buttons and keyboard',async()=>{
 const snapshot={...feed,posts:[
  {...feed.posts[0],id:'99999999999999991',mediaType:'VIDEO',timestamp:'2099-01-02T00:00:00Z',permalink:'https://www.instagram.com/reel/newestVideo/'},
  {...feed.posts[0],id:'99999999999999992',mediaType:'REEL',timestamp:'2099-01-01T00:00:00Z',permalink:'https://www.instagram.com/reel/newestReel/'},
  ...feed.posts,
 ]};
 vi.stubGlobal('fetch',vi.fn(async()=>({ok:true,json:async()=>snapshot})));
 const close=vi.fn();
 const {container,unmount}=render(<Darkroom onClose={close}/>);
 const posts=[...feed.posts].filter(post=>post.mediaType==='IMAGE'||post.mediaType==='CAROUSEL_ALBUM').sort((a,b)=>Date.parse(b.timestamp)-Date.parse(a.timestamp));
 await screen.findByRole('link',{name:'View frame 1 on Instagram'});
 expect(container.querySelector('.scanned-photo')?.getAttribute('href')).toBe(posts[0].permalink);
 expect(screen.getByRole('region',{name:'Post caption'}).textContent).toBe(posts[0].caption||'No caption on this post.');
 expect(container.querySelector('time')?.dateTime).toBe(posts[0].timestamp);
 expect(screen.getByRole('button',{name:'Scan previous frame'}).hasAttribute('disabled')).toBe(true);
 fireEvent.click(screen.getByRole('button',{name:'Scan next frame'}));
 expect(screen.getByRole('link',{name:'View frame 2 on Instagram'}).getAttribute('href')).toBe(posts[1].permalink);
 expect(screen.getByRole('region',{name:'Post caption'}).textContent).toBe(posts[1].caption||'No caption on this post.');
 const scanner=screen.getByRole('region',{name:'Film scanner'});
 fireEvent.keyDown(scanner,{key:'ArrowLeft'});
 expect(screen.getByRole('link',{name:'View frame 1 on Instagram'})).toBeTruthy();
 fireEvent.keyDown(scanner,{key:'ArrowRight'});
 expect(screen.getByRole('link',{name:'View frame 2 on Instagram'})).toBeTruthy();
 expect(screen.getByRole('button',{name:'Exit darkroom'}).textContent).toContain('EXIT');
 expect(container.querySelector('dialog')?.hasAttribute('open')).toBe(true);
 expect(screen.getByText('02 / 05')).toBeTruthy();
 for(let frame=3;frame<=posts.length;frame++){
  fireEvent.click(screen.getByRole('button',{name:'Scan next frame'}));
  const loaded=Math.min(Math.ceil(frame/5)*5,posts.length);
  expect(screen.getByText(`${String(frame).padStart(2,'0')} / ${String(loaded).padStart(2,'0')}`)).toBeTruthy();
  expect(screen.getByRole('link',{name:`View frame ${frame} on Instagram`}).getAttribute('href')).toBe(posts[frame-1].permalink);
 }
 expect(screen.getByRole('button',{name:'Scan next frame'}).hasAttribute('disabled')).toBe(true);
 fireEvent.keyDown(scanner,{key:'ArrowLeft'});
 expect(screen.getByRole('link',{name:`View frame ${posts.length-1} on Instagram`})).toBeTruthy();
 fireEvent.click(screen.getByRole('button',{name:'Exit darkroom'}));
 expect(close).toHaveBeenCalledOnce();
 expect(screen.queryByText('Followers')).toBeNull();
 expect(screen.queryByText('Check for updates')).toBeNull();
 const feedRequests=()=>vi.mocked(fetch).mock.calls.filter(([url])=>url==='/instagram/feed.json');
 expect(feedRequests()).toHaveLength(1);
 expect(feedRequests()[0][1]).toMatchObject({cache:'no-store'});
 unmount();
 render(<Darkroom onClose={close}/>);
 await screen.findByRole('link',{name:'View frame 1 on Instagram'});
 await waitFor(()=>expect(feedRequests()).toHaveLength(2));
 expect(feedRequests()[1][1]).toMatchObject({cache:'no-store'});
});
