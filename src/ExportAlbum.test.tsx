import {fireEvent,render,screen} from '@testing-library/react';
import {expect,it,vi} from 'vitest';
vi.mock('../public/instagram/export-albums.json',()=>({default:{albums:{'https://www.instagram.com/p/album/':[{src:'/one.webp',width:100,height:200},{src:'/two.webp',width:200,height:100}]}}}));
import ExportAlbum from './ExportAlbum';

it('loads photographs only after opening and supports buttons and arrow keys',()=>{
 render(<ExportAlbum permalink="https://www.instagram.com/p/album/"/>);
 expect(screen.queryByRole('img')).toBeNull();
 const toggle=screen.getByRole('button',{name:'Explore 2 photographs'});
 fireEvent.click(toggle);
 expect(toggle.getAttribute('aria-expanded')).toBe('true');
 expect(screen.getByRole('img').getAttribute('src')).toBe('/one.webp');
 fireEvent.click(screen.getByRole('button',{name:'Next album photograph'}));
 expect(screen.getByRole('img').getAttribute('src')).toBe('/two.webp');
 fireEvent.keyDown(screen.getByRole('button',{name:'Next album photograph'}),{key:'ArrowRight'});
 expect(screen.getByRole('img').getAttribute('src')).toBe('/one.webp');
 fireEvent.click(screen.getByRole('button',{name:'Close album'}));
 expect(screen.queryByRole('img')).toBeNull();
});

it('does not invent albums for unknown posts',()=>{
 const {container}=render(<ExportAlbum permalink="https://www.instagram.com/p/missing/"/>);
 expect(container.childElementCount).toBe(0);
});
