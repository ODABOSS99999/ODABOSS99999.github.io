import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import MinecraftPanel from './MinecraftPanel';
import SeatedRoom from './SeatedRoom';

describe('Minecraft profile', () => {
  it('opens inside the room without opening a tab or navigating away', async () => {
    const user = userEvent.setup();
    const external = vi.spyOn(window, 'open').mockImplementation(() => null);
    const navigate = vi.fn();
    render(<SeatedRoom navigate={navigate} toggleLamp={vi.fn()} toggleAudio={vi.fn()} openIndex={vi.fn()} playing={false} motion={false}/>);
    await user.click(screen.getByRole('button', { name: /Minecraft painting/ }));
    expect(screen.getByRole('dialog', { name: /ODABOSS/ }).hasAttribute('open')).toBe(true);
    expect(external).not.toHaveBeenCalled();
    expect(navigate).not.toHaveBeenCalled();
    expect(screen.getByText('Minecraft is the only game I’ve ever really enjoyed. I created my Java account when I was five.')).toBeTruthy();
    await user.click(screen.getByRole('button', { name: 'Close Minecraft profile' }));
    expect(screen.queryByRole('dialog', { name: /ODABOSS/ })).toBeNull();
  });

  it('supports keyboard tabs, skin rotation and truthful missing history', async () => {
    const user = userEvent.setup();
    render(<MinecraftPanel onClose={vi.fn()}/>);
    const skyblock = screen.getByRole('tab', { name: 'SkyBlock' });
    skyblock.focus();
    await user.keyboard('{ArrowRight}');
    expect(document.activeElement).toBe(screen.getByRole('tab', { name: 'Skin & cape' }));
    expect(screen.getByRole('img', { name: /skin, front view/ })).toBeTruthy();
    await user.click(screen.getByRole('button', { name: /Turn around/ }));
    expect(screen.getByRole('img', { name: /skin, back view/ })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Download skin texture' }).getAttribute('href')).toMatch(/^\/minecraft\/skin-/);
    screen.getByRole('tab', { name: 'Skin & cape' }).focus();
    await user.keyboard('{End}');
    expect(screen.getAllByText('ODABOSS').length).toBeGreaterThan(0);
    expect(screen.getByText('ODABOSS999')).toBeTruthy();
    expect(screen.getByText('R2D2NinjaWarrior')).toBeTruthy();
    expect(screen.getByRole('link', { name: 'NameMC' }).getAttribute('href')).toContain('ca840504-2fba-4600-a8a5-19d60d5fde42');
    await user.keyboard('{Home}');
  });

  it('closes on Escape cancellation and restores scroll and focus on unmount', () => {
    const trigger = document.createElement('button');
    document.body.append(trigger); trigger.focus();
    const close = vi.fn();
    const { unmount } = render(<MinecraftPanel onClose={close}/>);
    expect(document.body.style.overflow).toBe('hidden');
    fireEvent(screen.getByRole('dialog'), new Event('cancel', { cancelable: true }));
    expect(close).toHaveBeenCalledOnce();
    unmount();
    expect(document.body.style.overflow).toBe('');
    expect(document.activeElement).toBe(trigger);
    trigger.remove();
  });
});
