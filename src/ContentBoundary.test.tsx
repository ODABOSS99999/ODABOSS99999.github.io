import { useState } from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { ContentBoundary } from './ContentBoundary';

function BrokenCollection(): never { throw new Error('Failed to fetch section module'); }

describe('collection loading recovery', () => {
  it('keeps a usable fallback when a section fails and allows returning home', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    function ExampleApp() {
      const [home, setHome] = useState(false);
      return home ? <h1>The library</h1> : <ContentBoundary onHome={() => setHome(true)}><BrokenCollection/></ContentBoundary>;
    }
    const user = userEvent.setup();
    render(<ExampleApp/>);
    expect(screen.getByRole('alert').textContent).toContain('The collection couldn’t open.');
    expect(screen.getByRole('button', { name: /Reload this page/ })).toBeTruthy();
    await user.click(screen.getByRole('button', { name: /Return to the library/ }));
    expect(screen.getByRole('heading', { name: 'The library' })).toBeTruthy();
    expect(screen.queryByRole('alert')).toBeNull();
  });
  it('resets the failure state when navigating to a different keyed section', () => {
    vi.spyOn(console, 'error').mockImplementation(() => {});
    const { rerender } = render(<ContentBoundary key="failed" onHome={() => {}}><BrokenCollection/></ContentBoundary>);
    expect(screen.getByRole('alert')).toBeTruthy();
    rerender(<ContentBoundary key="working" onHome={() => {}}><h1>Another collection</h1></ContentBoundary>);
    expect(screen.queryByRole('alert')).toBeNull();
    expect(screen.getByRole('heading', { name: 'Another collection' })).toBeTruthy();
  });
});
