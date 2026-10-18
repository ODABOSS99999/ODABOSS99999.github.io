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
