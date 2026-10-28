import { act, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import App from './App2D';
import { destinations } from './content';
import * as instagramMedia from './instagramMedia';

const audio = vi.hoisted(() => ({ start: vi.fn(async () => {}), pause: vi.fn(async () => {}), volume: vi.fn(), dispose: vi.fn(async () => {}) }));
vi.mock('./audio', () => ({ RoomAudio: class { start = audio.start; pause = audio.pause; volume = audio.volume; dispose = audio.dispose; } }));

describe('library navigation', () => {
  it('opens unknown URLs in a focused recovery dialog',async()=>{
    history.replaceState({},'', '/missing-collection');const user=userEvent.setup();render(<App/>);
    const dialog=screen.getByRole('dialog',{name:'A little lost?'});
    expect(dialog.hasAttribute('open')).toBe(true);
    expect(document.activeElement).toBe(screen.getByRole('heading',{name:'A little lost?'}));
    await user.click(screen.getByRole('button',{name:'Return to the library'}));
    await waitFor(()=>expect(location.pathname).toBe('/'));
    expect(screen.queryByRole('dialog',{name:'A little lost?'})).toBeNull();
  });
  it.each(destinations)('opens $title and returns through its collection EXIT', async destination => {
    const user=userEvent.setup();history.replaceState({},'', '/');render(<App/>);
    expect(screen.queryByRole('banner')).toBeNull();
    await user.click(screen.getByRole('button',{name:destination.title}));
    await waitFor(()=>expect(location.pathname).toBe(`/${destination.id}`));
    const heading=await screen.findByRole('heading',{name:new RegExp(`^${destination.title}`),level:1});
    await waitFor(()=>expect(document.activeElement).toBe(heading));
    await user.click(screen.getByRole('button',{name:`Exit ${destination.title} and return to library`}));
    await waitFor(()=>expect(location.pathname).toBe('/'));
    await waitFor(()=>expect(document.activeElement).toBe(screen.getByRole('button',{name:'Objects'})));
  });
  it('opens a linked collection directly and supports browser Back',async()=>{
    const user=userEvent.setup();history.replaceState({},'', '/engineering');render(<App/>);
    await screen.findByRole('heading',{name:/^Other Projects/,level:1});
    expect(document.querySelector('#project-rocketry .engineering-mentions')).toBeTruthy();
    expect(document.querySelector('#project-gameboy .engineering-mentions')).toBeTruthy();
    await user.click(screen.getByRole('button',{name:'Exit Other Projects and return to library'}));
    await act(async()=>history.back());
    await waitFor(()=>expect(location.pathname).toBe('/engineering'));
  });
});
describe('physical room controls',()=>{
  it('mutes audio using the record player',async()=>{
    history.replaceState({},'', '/');const user=userEvent.setup();render(<App/>);
    await waitFor(()=>expect(audio.start).toHaveBeenCalled());
    await user.click(screen.getByRole('button',{name:'Mute room ambience'}));
    expect(audio.pause).toHaveBeenCalled();
  });
  it('switches the physical lamp and immediately refreshes posts on every click',async()=>{
    const refresh=vi.spyOn(instagramMedia,'refreshRecentPosts').mockResolvedValue(null);
    history.replaceState({},'', '/');const user=userEvent.setup();const {container}=render(<App/>);
    await user.click(screen.getByRole('button',{name:'Lamp switch: toggle Lamplight and Darkroom'}));
    expect(container.firstElementChild?.getAttribute('data-lighting')).toBe('darkroom');
    await user.click(screen.getByRole('button',{name:'Lamp switch: toggle Lamplight and Darkroom'}));
    expect(container.firstElementChild?.getAttribute('data-lighting')).toBe('lamplight');
    expect(refresh).toHaveBeenCalledTimes(2);refresh.mockRestore();
  });
});

