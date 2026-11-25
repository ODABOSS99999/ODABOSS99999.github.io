import {cleanup, render, screen, waitFor} from '@testing-library/react';
import {afterEach, describe, expect, it, vi} from 'vitest';
import MusicShelf from './MusicShelf';
import {fetchMusicFeed, publishMusicAlbums} from './musicData';

vi.mock('./musicData', () => ({
  airbudsInvite: 'https://example.test/airbuds',
  fetchMusicFeed: vi.fn(),
  publishMusicAlbums: vi.fn(),
}));

afterEach(() => {
  cleanup();
  vi.clearAllMocks();
});

describe('MusicShelf unavailable feed', () => {
  it('shows documented local and production recovery steps without suggesting tracks are available', async () => {
    vi.mocked(fetchMusicFeed).mockRejectedValueOnce(new Error('Unavailable'));
    render(<MusicShelf />);

    await waitFor(() => expect(screen.getByRole('status').textContent).toContain('Spotify listening activity is temporarily unavailable.'));
    const status = screen.getByRole('status');
    expect(status.textContent).toContain('Spotify listening activity is temporarily unavailable.');
    expect(status.textContent).toContain('npm run music:connect');
    expect(status.textContent).toContain('npm run dev');
    expect(status.textContent).toContain('VITE_MUSIC_FEED_URL');
    expect(status.textContent).toContain('music Worker');
    expect(screen.queryByText('No tracks available from Spotify.')).toBeNull();
    expect(publishMusicAlbums).toHaveBeenCalledWith([]);
  });
});
