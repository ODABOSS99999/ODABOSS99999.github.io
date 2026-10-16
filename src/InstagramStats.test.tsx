import {fireEvent,render,screen} from '@testing-library/react';
import {it,expect} from 'vitest';
import {LineChart} from './InstagramStats';
it('keeps date-only publication dates and clamps selection after refresh',()=>{
 const points=[{date:'2026-10-15',count:1},{date:'2026-10-16',count:2}];const {rerender}=render(<LineChart points={points} label="Archived posts"/>);
 expect(screen.getByRole('status').textContent).toContain('Oct 16, 2026');fireEvent.change(screen.getByRole('slider'),{target:{value:'1'}});
 rerender(<LineChart points={[points[0]]} label="Archived posts"/>);expect(screen.getByRole('status').textContent).toContain('1 archived posts');
});
