import {render,screen} from '@testing-library/react';
import {expect,it} from 'vitest';
import PostDetails from './PostDetails';

it('shows full caption, unique mentioned handles and original post without inventing collaborations',()=>{
 render(<PostDetails photo={{id:'fixture',src:'/test.jpg',width:1,height:1,alt:'Test',caption:'A shoot with @example.brand and @example.brand',sourceUrl:'https://www.instagram.com/p/test/',metrics:{likes:0,comments:null,views:null,checkedAt:'2026-10-17T00:00:00Z'}}}/>);
 expect(screen.getByRole('region',{name:'Post caption'}).textContent).toContain('A shoot with @example.brand');
 expect(screen.getAllByRole('link',{name:'@example.brand'})).toHaveLength(1);
 expect(screen.getByRole('link',{name:/View original source/}).getAttribute('href')).toBe('https://www.instagram.com/p/test/');
 expect(screen.queryByText(/collaboration/i)).toBeNull();
});

it('shows a checking state before live engagement arrives',()=>{
 render(<PostDetails photo={{id:'fixture',src:'/test.jpg',width:1,height:1,alt:'Test',sourceUrl:'https://www.instagram.com/p/test/'}}/>);
 expect(screen.getByText('Checking live engagement…')).toBeTruthy();
});
