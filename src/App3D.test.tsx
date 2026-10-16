import {render,screen,waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {expect,it,vi} from 'vitest';
import App from './App';
const audio=vi.hoisted(()=>({start:vi.fn(async()=>{}),pause:vi.fn(async()=>{}),volume:vi.fn(),dispose:vi.fn(async()=>{})}));
vi.mock('./audio',()=>({RoomAudio:class{start=audio.start;pause=audio.pause;volume=audio.volume;dispose=audio.dispose;}}));
it('keeps 3D room controls usable without WebGL and restores contact focus',async()=>{
 const user=userEvent.setup();render(<App/>);
 expect(screen.getByRole('region',{name:'Interactive 3D library'})).toBeTruthy();
 await user.click(screen.getByRole('button',{name:'Contact'}));
 expect(await screen.findByRole('link',{name:'owenmmcgowan@gmail.com'})).toBeTruthy();
 expect(screen.getByRole('link',{name:'(936) 647–5140'}).getAttribute('href')).toBe('tel:+19366475140');
 await user.click(screen.getByRole('link',{name:'Return to library'}));
 await waitFor(()=>expect(document.activeElement?.id).toBe('object-contact'));
 await user.click(screen.getByRole('button',{name:'Lamp switch: toggle Lamplight and Darkroom'}));
 expect(document.querySelector('.app')?.getAttribute('data-lighting')).toBe('darkroom');
 await user.click(screen.getAllByRole('button',{name:'Play room ambience'})[1]);
 await waitFor(()=>expect(document.getElementById('object-record')?.getAttribute('aria-pressed')).toBe('true'));
 expect(audio.start).toHaveBeenCalled();
});

