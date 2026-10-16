import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import App from './App2D';
import { destinations } from './content';

const audio = vi.hoisted(() => ({ start: vi.fn(async () => {}), pause: vi.fn(async () => {}), volume: vi.fn(), dispose: vi.fn(async () => {}) }));
vi.mock('./audio', () => ({ RoomAudio: class { start = audio.start; pause = audio.pause; volume = audio.volume; dispose = audio.dispose; } }));

describe('library navigation', () => {
  it('preserves distinct scroll positions through Back/Forward without resetting on settings changes', async () => {
    const user = userEvent.setup();
    let scrollY = 0;
    const descriptor = Object.getOwnPropertyDescriptor(window, 'scrollY')!;
    Object.defineProperty(window, 'scrollY', { configurable: true, get: () => scrollY });
    const scrollTo = vi.spyOn(window, 'scrollTo').mockImplementation((x: number | ScrollToOptions, y?: number) => {
      scrollY = typeof x === 'number' ? Number(y) : x.top || 0;
    });
    try {
      render(<App/>);
      await waitFor(() => expect(scrollTo).toHaveBeenCalled());
      scrollY = 140;
      fireEvent.scroll(document);
      await user.click(screen.getByRole('button', { name: 'Contact' }));
      const contactHeading = await screen.findByRole('heading', { name: /^Contact\s*\.$/, level: 1 });
      await waitFor(() => expect(document.activeElement).toBe(contactHeading));
      expect(scrollY).toBe(0);
      const panel=document.querySelector<HTMLDialogElement>('.collection-panel')!;
      panel.scrollTop=420;
      fireEvent.scroll(panel);
      scrollTo.mockClear();
      await user.click(screen.getByRole('button', { name: 'Room settings' }));
      await user.click(screen.getByRole('button', { name: 'Daylight' }));
      expect(scrollTo).not.toHaveBeenCalled();
      expect(document.activeElement).toBe(screen.getByRole('button', { name: 'Daylight' }));
      await act(async () => { history.back(); });
      await waitFor(() => expect(location.pathname).toBe('/'));
      await waitFor(() => expect(scrollY).toBe(140));
      expect(screen.queryByRole('slider', { name: 'Ambient volume' })).toBeNull();
      scrollTo.mockClear();
      await act(async () => { history.forward(); });
      await screen.findByRole('heading', { name: /^Contact\s*\.$/, level: 1 });
      await waitFor(() => expect(document.querySelector('.collection-panel')?.scrollTop).toBe(420));
      expect(scrollY).toBe(0);
    } finally {
      Object.defineProperty(window, 'scrollY', descriptor);
    }
  });
  it.each(destinations)('opens $title from its room object and restores object focus with EXIT', async destination => {
    const user = userEvent.setup();
    render(<App/>);
    await user.click(screen.getByRole('button', { name: destination.title }));
    await waitFor(() => expect(location.pathname).toBe(`/${destination.id}`));
    const heading = await screen.findByRole('heading', { name: new RegExp(`^${destination.title}\\s*\\.$`), level: 1 });
    await waitFor(() => expect(document.activeElement).toBe(heading));
    await user.click(screen.getByRole('link', { name: 'Return to library' }));
    expect(location.pathname).toBe('/');
    await waitFor(() => expect(document.activeElement).toBe(screen.getByRole('button', { name: destination.title })));
  });
  it('loads direct URLs and follows back/forward popstate changes', async () => {
    const user = userEvent.setup();
    history.replaceState({}, '', '/contact');
    render(<App/>);
    expect(await screen.findByRole('heading', { name: /^Contact\s*\.$/, level: 1 })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'owenmmcgowan@gmail.com' }).getAttribute('href')).toBe('mailto:owenmmcgowan@gmail.com');
    const index = screen.getByRole('button', { name: /Index/ });
    await user.click(index);
    await user.click(screen.getByRole('link', { name: /Engineering Projects/ }));
    expect(await screen.findByRole('heading', { name: /^Engineering Projects\s*\.$/, level: 1 })).toBeTruthy();
    await act(async () => { history.back(); });
    expect(await screen.findByRole('heading', { name: /^Contact\s*\.$/, level: 1 })).toBeTruthy();
    expect(location.pathname).toBe('/contact');
    await act(async () => { history.forward(); });
    expect(await screen.findByRole('heading', { name: /^Engineering Projects\s*\.$/, level: 1 })).toBeTruthy();
    expect(location.pathname).toBe('/engineering');
  });
  it('provides index navigation and a return route for unknown URLs', async () => {
    const user = userEvent.setup();
    history.replaceState({}, '', '/unknown');
    render(<App/>);
    expect(screen.getByRole('heading', { name: 'A little lost?' })).toBeTruthy();
    await user.click(screen.getByRole('button', { name: /Return to the library/ }));
    await user.click(screen.getByRole('button', { name: /Index/ }));
    await user.click(screen.getByRole('link', { name: /About Me/ }));
    expect(await screen.findByRole('heading', { name: /^About Me\s*\.$/, level: 1 })).toBeTruthy();
    expect(screen.queryByRole('navigation', { name: 'Library index' })).toBeNull();
  });
});

describe('room preferences', () => {
  it('pauses room audio in a hidden tab, resumes on return, and respects an explicit mute', async () => {
    const user = userEvent.setup();
    const visibility = vi.spyOn(document, 'hidden', 'get').mockReturnValue(false);
    render(<App/>);
    await waitFor(() => expect(audio.start).toHaveBeenCalledTimes(1));
    visibility.mockReturnValue(true);
    act(() => { document.dispatchEvent(new Event('visibilitychange')); });
    expect(audio.pause).toHaveBeenCalledTimes(1);
    visibility.mockReturnValue(false);
    await act(async () => { document.dispatchEvent(new Event('visibilitychange')); });
    expect(audio.start).toHaveBeenCalledTimes(2);
    await user.click(screen.getAllByRole('button', { name: 'Mute room ambience' })[0]);
    act(() => { document.dispatchEvent(new Event('visibilitychange')); });
    expect(audio.start).toHaveBeenCalledTimes(2);
  });
  it('persists lighting, volume, and movement, and switches the physical lamp', async () => {
    const user = userEvent.setup();
    const { container, unmount } = render(<App/>);
    await user.click(screen.getByRole('button', { name: 'Room settings' }));
    await user.click(screen.getByRole('button', { name: 'Daylight' }));
    fireEvent.change(screen.getByRole('slider', { name: 'Ambient volume' }), { target: { value: '.65' } });
    await user.click(screen.getByRole('checkbox', { name: 'Subtle room movement' }));
    expect(container.firstElementChild?.getAttribute('data-lighting')).toBe('daylight');
    expect(container.firstElementChild?.classList.contains('motion-off')).toBe(true);
    expect(JSON.parse(localStorage.getItem('mcgowen-library')!)).toMatchObject({ lighting: 'daylight', volume: .65, motion: false });
    unmount();
    const next = render(<App/>);
    expect(next.container.firstElementChild?.getAttribute('data-lighting')).toBe('daylight');
    await user.click(screen.getByRole('button', { name: 'Lamp switch: toggle Lamplight and Darkroom' }));
    expect(next.container.firstElementChild?.getAttribute('data-lighting')).toBe('darkroom');
    await user.click(screen.getByRole('button', { name: 'Lamp switch: toggle Lamplight and Darkroom' }));
    expect(next.container.firstElementChild?.getAttribute('data-lighting')).toBe('lamplight');
  });
  it('defaults sound on and retries browser-blocked autoplay on the first interaction', async () => {
    audio.start.mockRejectedValueOnce(new DOMException('Gesture required', 'NotAllowedError'));
    const user = userEvent.setup();
    render(<App/>);
    await waitFor(() => expect(audio.start).toHaveBeenCalledTimes(1));
    expect(screen.getAllByRole('button', { name: 'Mute room ambience' })[0].getAttribute('aria-pressed')).toBe('true');
    await user.click(screen.getByRole('button', { name: /Index/ }));
    await waitFor(() => expect(audio.start).toHaveBeenCalledTimes(2));
    expect(screen.queryByText('Room audio is unavailable in this browser.')).toBeNull();
    await user.click(screen.getAllByRole('button', { name: 'Mute room ambience' })[0]);
    expect(JSON.parse(localStorage.getItem('mcgowen-library')!).muted).toBe(true);
  });
  it('keeps an explicit mute across reloads and starts when enabled again', async () => {
    localStorage.setItem('mcgowen-library', JSON.stringify({ muted: true, volume: .5, soundDefaultVersion: 2 }));
    const user = userEvent.setup();
    render(<App/>);
    expect(audio.start).not.toHaveBeenCalled();
    await user.click(screen.getByRole('button', { name: /Index/ }));
    expect(audio.start).not.toHaveBeenCalled();
    await user.click(screen.getAllByRole('button', { name: 'Play room ambience' })[0]);
    await waitFor(() => expect(audio.start).toHaveBeenCalledWith(.5));
    expect(JSON.parse(localStorage.getItem('mcgowen-library')!).muted).toBe(false);
  });
  it('closes settings and index with Escape and keeps their panels mutually exclusive', async () => {
    const user = userEvent.setup();
    render(<App/>);
    const settings = screen.getByRole('button', { name: 'Room settings' });
    await user.click(settings);
    expect(settings.getAttribute('aria-expanded')).toBe('true');
    const index = screen.getByRole('button', { name: /Index/ });
    await user.click(index);
    expect(settings.getAttribute('aria-expanded')).toBe('false');
    expect(screen.getByRole('navigation', { name: 'Library index' })).toBeTruthy();
    screen.getByRole('link', { name: /About Me/ }).focus();
    await user.keyboard('{Escape}');
    expect(screen.queryByRole('navigation', { name: 'Library index' })).toBeNull();
    expect(document.activeElement).toBe(index);
    await user.click(settings);
    screen.getByRole('slider', { name: 'Ambient volume' }).focus();
    await user.keyboard('{Escape}');
    expect(settings.getAttribute('aria-expanded')).toBe('false');
    expect(document.activeElement).toBe(settings);
  });
});


