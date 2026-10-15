import { act, fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import Scene from './Scene2D';
const props=()=>({navigate:vi.fn(),toggleLamp:vi.fn(),toggleAudio:vi.fn(),openIndex:vi.fn(),playing:false,motion:true});
describe('illustrated room interactions',()=>{
 it('shows pickup before navigating and cancels it on unmount',()=>{
  vi.useFakeTimers();try{const p=props();const {unmount}=render(<Scene {...p}/>);fireEvent.click(screen.getByRole('button',{name:'Contact'}));expect(p.navigate).not.toHaveBeenCalled();expect(screen.getByRole('button',{name:'Contact'}).className).toContain('picking-up');unmount();act(()=>vi.runAllTimers());expect(p.navigate).not.toHaveBeenCalled();}finally{vi.useRealTimers();}
 });
 it('opens contact immediately when movement is disabled',()=>{const p=props();render(<Scene {...p} motion={false}/>);fireEvent.click(screen.getByRole('button',{name:'Contact'}));expect(p.navigate).toHaveBeenCalledWith('contact');});
 it('rolls the ladder in both directions and opens the index from EXIT',()=>{const p=props();render(<Scene {...p}/>);const ladder=screen.getByRole('button',{name:'Roll the library ladder'});fireEvent.click(ladder);expect(ladder.getAttribute('aria-pressed')).toBe('true');fireEvent.click(ladder);expect(ladder.getAttribute('aria-pressed')).toBe('false');fireEvent.click(screen.getByRole('button',{name:'Exit the room: open the site index'}));expect(p.openIndex).toHaveBeenCalledOnce();});
});

