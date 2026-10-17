import { fireEvent, render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Gallery from './Gallery';
import type { Photo } from './content';

// Synthetic fixtures remain in the test suite, never in the public collection.
const items: Photo[] = [
  { id: 'one', src: '/test-only-one.jpg', width: 100, height: 80, alt: 'First test photograph', caption: 'First caption' },
  { id: 'two', src: '/test-only-two.jpg', width: 80, height: 100, alt: 'Second test photograph', caption: 'Second caption' },
];

describe('photograph viewer', () => {
  it('links Instagram images directly to their post', () => {
    const photo = { ...items[0], sourceUrl: 'https://www.instagram.com/p/test_source/' };
    render(<Gallery items={[photo]}/>);
    const link = screen.getByRole('link', { name: `View ${photo.alt} on Instagram (opens in a new tab)` });
    expect(link.getAttribute('href')).toBe(photo.sourceUrl);
    expect(link.getAttribute('target')).toBe('_blank');
    expect(within(link).getByRole('img')).toBeTruthy();
    expect(screen.getByRole('link',{name:/View original source/}).getAttribute('href')).toBe(photo.sourceUrl);
  });

  it('changes photos on a horizontal swipe while leaving vertical scrolling gestures alone', async () => {
    const user = userEvent.setup();
    render(<Gallery items={items}/>);
    await user.click(screen.getByRole('button', { name: `View ${items[0].alt}` }));
    const viewer = screen.getByRole('dialog');
    const figure = viewer.querySelector('.viewer-image')!;
    fireEvent.touchStart(figure, { touches: [{ clientX: 200, clientY: 100 }] });
    fireEvent.touchEnd(figure, { changedTouches: [{ clientX: 50, clientY: 110 }] });
    expect(within(viewer).getByText('2 / 2')).toBeTruthy();
    fireEvent.touchStart(figure, { touches: [{ clientX: 100, clientY: 200 }] });
    fireEvent.touchEnd(figure, { changedTouches: [{ clientX: 200, clientY: 50 }] });
    expect(within(viewer).getByText('2 / 2')).toBeTruthy();
    fireEvent.touchStart(figure, { touches: [{ clientX: 50, clientY: 100 }] });
    fireEvent.touchEnd(figure, { changedTouches: [{ clientX: 200, clientY: 100 }] });
    expect(within(viewer).getByText('1 / 2')).toBeTruthy();
  });
  it('opens from a thumbnail, wraps with arrows, and restores scroll and focus on Escape cancellation', async () => {
    const user = userEvent.setup();
    document.body.style.overflow = 'auto';
    render(<Gallery items={items}/>);
    const thumbnail = screen.getByRole('button', { name: 'View First test photograph' });
    await user.click(thumbnail);
    const viewer = screen.getByRole('dialog', { name: 'Photograph viewer' });
    expect(document.body.style.overflow).toBe('hidden');
    expect(within(viewer).getByText('1 / 2')).toBeTruthy();
    fireEvent.keyDown(viewer, { key: 'ArrowLeft' });
    expect(within(viewer).getByText('2 / 2')).toBeTruthy();
    fireEvent.keyDown(viewer, { key: 'ArrowRight' });
    expect(within(viewer).getByText('1 / 2')).toBeTruthy();
    await user.click(within(viewer).getByRole('button', { name: 'Next photograph' }));
    expect(within(viewer).getByText('Second caption')).toBeTruthy();
    // A real browser maps Escape to the dialog's native cancel event.
    fireEvent(viewer, new Event('cancel', { cancelable: true, bubbles: true }));
    expect(viewer.hasAttribute('open')).toBe(false);
    expect(document.body.style.overflow).toBe('auto');
    expect(document.activeElement).toBe(thumbnail);
  });
  it('allows explicit close and backdrop dismissal, and cleans up an open viewer on unmount', async () => {
    const user = userEvent.setup();
    const { unmount } = render(<Gallery items={items}/>);
    const open = () => user.click(screen.getByRole('button', { name: 'View First test photograph' }));
    await open();
    await user.click(screen.getByRole('button', { name: 'Close photograph viewer' }));
    expect(screen.queryByRole('dialog')).toBeNull();
    await open();
    await user.click(screen.getByRole('dialog'));
    expect(screen.queryByRole('dialog')).toBeNull();
    await open();
    unmount();
    expect(document.body.style.overflow).toBe('');
  });
  it('shows an accessible fallback for missing images and prevents single-photo navigation', async () => {
    const user = userEvent.setup();
    render(<Gallery items={[items[0]]}/>);
    fireEvent.error(screen.getByRole('img', { name: items[0].alt }));
    expect(screen.getByRole('img', { name: `${items[0].alt} — image unavailable` })).toBeTruthy();
    await user.click(screen.getByRole('button', { name: `View ${items[0].alt}` }));
    expect((screen.getByRole('button', { name: 'Previous photograph' }) as HTMLButtonElement).disabled).toBe(true);
    expect((screen.getByRole('button', { name: 'Next photograph' }) as HTMLButtonElement).disabled).toBe(true);
    const viewer = screen.getByRole('dialog');
    fireEvent.error(within(viewer).getByRole('img'));
    expect(within(viewer).getByRole('img', { name: `${items[0].alt} — image unavailable` })).toBeTruthy();
  });
});
