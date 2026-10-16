import {describe,expect,it,vi} from 'vitest';
import {ShelfLadder} from './ShelfLadder';
describe('shelf selection travel',()=>{
 it('keeps the collection closed until the ladder arrives',()=>{const open=vi.fn(),ladder=new ShelfLadder(open);ladder.move('photography',-4,100,true);ladder.update(300,true);expect(ladder.x).toBeGreaterThan(-6.02);expect(ladder.x).toBeLessThan(-4);expect(open).not.toHaveBeenCalled();ladder.update(2000,true);expect(ladder.x).toBe(-4);expect(open).toHaveBeenCalledExactlyOnceWith('photography');});
 it('only opens the latest selection when a second object is clicked during travel',()=>{const open=vi.fn(),ladder=new ShelfLadder(open);ladder.move('about',-3,0,true);ladder.update(200,true);ladder.move('favorites',0,200,true);ladder.update(2000,true);expect(open).toHaveBeenCalledExactlyOnceWith('favorites');});
 it('places the ladder and opens immediately when motion is disabled',()=>{const open=vi.fn(),ladder=new ShelfLadder(open);ladder.move('engineering',-2.5,0,false);expect(ladder.x).toBe(-2.5);expect(ladder.moving).toBe(false);expect(open).toHaveBeenCalledExactlyOnceWith('engineering');});
 it('stops a current trip immediately if motion is turned off',()=>{const open=vi.fn(),ladder=new ShelfLadder(open);ladder.move('published',-5,0,true);ladder.update(10,false);expect(ladder.x).toBe(-5);expect(open).toHaveBeenCalledExactlyOnceWith('published');});
});
