import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, expect, it, vi } from 'vitest';
import SeatedRoom from './SeatedRoom';

const room = vi.hoisted(() => ({ dispose: vi.fn(), activate: vi.fn(), focus: vi.fn(), look: vi.fn(), reset: vi.fn() }));
const create = vi.hoisted(() => vi.fn());
vi.mock('./paperRoom', () => ({ createPaperRoom: create }));
afterEach(() => vi.unstubAllGlobals());

it('returns restored focus to Objects without revealing the closed page list', async () => {
  vi.stubGlobal('WebGLRenderingContext', class {});
  create.mockReturnValue(room);
  const { container } = render(<SeatedRoom navigate={vi.fn()} toggleLamp={vi.fn()} toggleAudio={vi.fn()} openIndex={vi.fn()} playing={false} motion={true}/>);
  await waitFor(() => expect(screen.getByRole('button', { name: 'Look left' }).hasAttribute('disabled')).toBe(false));
  expect(screen.getByText('Drag to look · choose an object to explore')).toBeTruthy();
  expect(screen.getByRole('button', { name: 'Reset room view' }).textContent).toBe('Reset view');
  const clock=screen.getByRole('time',{name:'Current local time'});
  expect(clock.textContent).toBe(new Intl.DateTimeFormat(undefined,{hour:'numeric',minute:'2-digit'}).format(new Date()));
  expect(Number.isNaN(Date.parse(clock.getAttribute('datetime')||''))).toBe(false);
  const trigger = screen.getByRole('button', { name: 'Objects' });
  const contact = container.querySelector<HTMLButtonElement>('#object-contact')!;
  act(() => contact.focus());
  expect(document.activeElement).toBe(trigger);
  expect(trigger.getAttribute('aria-expanded')).toBe('false');
  fireEvent.click(trigger);
  act(() => contact.focus());
  expect(document.activeElement).toBe(contact);
  fireEvent.keyDown(contact, { key: 'Escape' });
  expect(document.activeElement).toBe(trigger);
  expect(trigger.getAttribute('aria-expanded')).toBe('false');
});

it('closes the object list after focusing the staircase', async () => {
  vi.stubGlobal('WebGLRenderingContext', class {});
  create.mockReturnValue(room);
  room.activate.mockClear();
  render(<SeatedRoom navigate={vi.fn()} toggleLamp={vi.fn()} toggleAudio={vi.fn()} openIndex={vi.fn()} playing={false} motion={true}/>);
  await waitFor(() => expect(screen.getByRole('button', { name: 'Look left' }).hasAttribute('disabled')).toBe(false));
  const trigger=screen.getByRole('button',{name:'Objects'});
  fireEvent.click(trigger);
  expect(trigger.getAttribute('aria-expanded')).toBe('true');
  fireEvent.click(screen.getByRole('button',{name:'Spiral staircase and elevator'}));
  expect(room.activate).toHaveBeenCalledWith('staircase');
  expect(trigger.getAttribute('aria-expanded')).toBe('false');
  expect(document.activeElement).toBe(trigger);
});

it('marks the room motion preference for accessible UI motion styling', async () => {
  vi.stubGlobal('WebGLRenderingContext', class {});
  create.mockReturnValue(room);
  const {container,rerender}=render(<SeatedRoom navigate={vi.fn()} toggleLamp={vi.fn()} toggleAudio={vi.fn()} openIndex={vi.fn()} playing={false} motion={true}/>);
  expect(container.querySelector('.seated-room')?.getAttribute('data-motion')).toBe('enabled');
  rerender(<SeatedRoom navigate={vi.fn()} toggleLamp={vi.fn()} toggleAudio={vi.fn()} openIndex={vi.fn()} playing={false} motion={false}/>);
  expect(container.querySelector('.seated-room')?.getAttribute('data-motion')).toBe('disabled');
});

it('recovers from context loss after initialization and cleans up once', async () => {
  vi.stubGlobal('WebGLRenderingContext', class {});
  let canvas!: HTMLCanvasElement;
  create.mockImplementation((host: HTMLElement, _state: unknown, hover: (id: string) => void) => {
    canvas = document.createElement('canvas'); host.append(canvas);
    room.dispose.mockImplementation(() => canvas.remove());
    hover('photography');
    return room;
  });
  const navigate = vi.fn();
  const { container, unmount } = render(<SeatedRoom navigate={navigate} toggleLamp={vi.fn()} toggleAudio={vi.fn()} openIndex={vi.fn()} playing={false} motion={true}/>);
  await waitFor(() => expect(screen.getByRole('button', { name: 'Look left' }).hasAttribute('disabled')).toBe(false));
  expect(container.querySelector('.seated-tooltip')).toBeTruthy();
  const host = canvas.parentElement!;
  const removeListener = vi.spyOn(host, 'removeEventListener');
  const contextLoss = new Event('webglcontextlost', { bubbles: false, cancelable: true });
  act(() => canvas.dispatchEvent(contextLoss));
  expect(contextLoss.defaultPrevented).toBe(true);
  expect(screen.getByText('The illustrated room is unavailable. Use the object list to explore.')).toBeTruthy();
  expect(screen.queryByText('Taking a seat…')).toBeNull();
  expect(container.querySelector('.seated-tooltip')).toBeNull();
  expect(container.querySelector('#seated-objects')?.classList.contains('visually-hidden-controls')).toBe(false);
  expect(screen.getByRole('button', { name: 'Look left' }).hasAttribute('disabled')).toBe(true);
  fireEvent.click(screen.getByRole('button', { name: 'Contact' }));
  expect(navigate).toHaveBeenCalledWith('contact');
  expect(room.activate).not.toHaveBeenCalled();
  expect(room.dispose).toHaveBeenCalledTimes(1);
  unmount();
  expect(room.dispose).toHaveBeenCalledTimes(1);
  expect(removeListener).toHaveBeenCalledWith('webglcontextlost', expect.any(Function), true);
  const afterUnmount = new Event('webglcontextlost', { cancelable: true });
  host.dispatchEvent(afterUnmount);
  expect(afterUnmount.defaultPrevented).toBe(false);
});
