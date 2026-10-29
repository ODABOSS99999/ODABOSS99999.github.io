import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import MinecraftPanel from './MinecraftPanel';
import SeatedRoom from './SeatedRoom';
vi.mock('./MinecraftSkin', () => ({ default: () => <div role="img" aria-label="ODABOSS’s 3D skin" /> }));

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

  it('opens account history first and supports the ordered keyboard tabs', async () => {
    const user = userEvent.setup();
    render(<MinecraftPanel onClose={vi.fn()}/>);
    const tabs = screen.getAllByRole('tab');
    expect(tabs.map(tab => tab.textContent)).toEqual(['Account & history', 'Skin', 'Hypixel']);
    expect(tabs[0].getAttribute('aria-selected')).toBe('true');
    expect(screen.getByText('ODABOSS999')).toBeTruthy();
    expect(screen.getByText('R2D2NinjaWarrior')).toBeTruthy();
    tabs[0].focus(); await user.keyboard('{ArrowRight}');
    expect(document.activeElement).toBe(tabs[1]);
    expect(screen.getByRole('img', { name: /3D skin/ })).toBeTruthy();
    expect(screen.getByRole('link', { name: 'Download skin' }).getAttribute('href')).toMatch(/^\/minecraft\/skin-/);
    expect(screen.getByRole('link', { name: /NameMC/ }).getAttribute('href')).toContain('#Skins');
    expect(screen.getByRole('button', { name: 'Previous skin' }).hasAttribute('disabled')).toBe(true);
    await user.keyboard('{End}');
    expect(document.activeElement).toBe(tabs[2]);
    expect(screen.getByText('SkyBlock stats')).toBeTruthy();
    await user.keyboard('{Home}');
    expect(document.activeElement).toBe(tabs[0]);
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
