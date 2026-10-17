import { describe, expect, it } from 'vitest';
import { selectInstagramPosts, validateSnapshot } from './instagram';
import type { InstagramPost, InstagramSelection, InstagramSnapshot } from './instagram';

// Synthetic metadata exercises selection and validation without adding public posts.
const post = (id: string, timestamp: string): InstagramPost => ({
  id, timestamp, caption: `Test caption ${id}`, mediaType: 'IMAGE',
  permalink: `https://www.instagram.com/p/test_${id}/`,
  image: { src: `/instagram/media/test-${id}.webp`, width: 1200, height: 800 },
});
const posts = [post('10', '2026-08-01T12:00:00Z'), post('20', '2026-10-01T12:00:00Z'), post('30', '2026-09-01T12:00:00Z')];
const emptySelection: InstagramSelection = { portfolioMode: 'selected', portfolioIds: [], favoriteIds: [], pinnedIds: [] };
const snapshot = (): InstagramSnapshot => ({ version: 1, account: 'mcgowen_media', fetchedAt: '2026-10-15T12:00:00Z', posts: structuredClone(posts) });
const ids = (items: InstagramPost[]) => items.map(p => p.id);

describe('Instagram collection selection', () => {
  it('selects the newest post by timestamp and leaves the input order intact', () => {
    expect(ids(selectInstagramPosts(posts, 'latest', emptySelection))).toEqual(['20']);
    expect(ids(posts)).toEqual(['10', '20', '30']);
    expect(selectInstagramPosts([], 'latest', emptySelection)).toEqual([]);
  });
  it('includes explicit favorites and pinned posts in the portfolio and favorites without duplicates', () => {
    const selection = { ...emptySelection, portfolioIds: ['10'], favoriteIds: ['30', '20'], pinnedIds: ['20'] };
    const portfolio = selectInstagramPosts(posts, 'portfolio', selection);
    const favorites = selectInstagramPosts(posts, 'favorites', selection);
    expect(ids(portfolio)).toEqual(['20', '30', '10']);
    expect(ids(favorites)).toEqual(['20', '30']);
    expect(favorites.every(f => portfolio.some(p => p.id === f.id))).toBe(true);
  });
  it('matches supplied membership by ID, permalink, or shortcode', () => {
    const selection = { ...emptySelection, portfolioIds: [posts[0].permalink], favoriteIds: ['test_30'], pinnedIds: ['20'] };
    expect(ids(selectInstagramPosts(posts, 'portfolio', selection))).toEqual(['20', '30', '10']);
    expect(ids(selectInstagramPosts(posts, 'favorites', selection))).toEqual(['20', '30']);
  });
  it('does not infer membership or pinned status from feed position or popularity', () => {
    expect(selectInstagramPosts(posts, 'portfolio', emptySelection)).toEqual([]);
    expect(selectInstagramPosts(posts, 'favorites', emptySelection)).toEqual([]);
    const unknownMembership = { ...emptySelection, portfolioIds: ['999'], favoriteIds: ['missing'], pinnedIds: ['unknown'] };
    expect(selectInstagramPosts(posts, 'portfolio', unknownMembership)).toEqual([]);
    expect(selectInstagramPosts(posts, 'favorites', unknownMembership)).toEqual([]);
  });
  it('all mode automatically includes newly synced posts without assigning favorites', () => {
    const selection = { ...emptySelection, portfolioMode: 'all', favoriteIds: ['10'] };
    const refreshed = [...posts, post('40', '2026-10-16T12:00:00Z')];
    expect(ids(selectInstagramPosts(refreshed, 'portfolio', selection))).toEqual(['40', '20', '30', '10']);
    expect(ids(selectInstagramPosts(refreshed, 'latest', selection))).toEqual(['40']);
    expect(ids(selectInstagramPosts(refreshed, 'favorites', selection))).toEqual(['10']);
  });
});

describe('Instagram snapshot validation', () => {
  it('accepts valid locally cached media, empty feeds, and supported post formats', () => {
    for (const mediaType of ['IMAGE', 'CAROUSEL_ALBUM', 'VIDEO', 'REEL'] as const) {
      const data = snapshot();
      data.posts[0].mediaType = mediaType;
      if (mediaType === 'REEL') data.posts[0].permalink = 'https://www.instagram.com/reel/test_10/';
      expect(validateSnapshot(data)).toEqual(data);
    }
    expect(validateSnapshot({ ...snapshot(), posts: [] }).posts).toEqual([]);
  });
  it.each([
    null, {}, { ...snapshot(), version: 2 }, { ...snapshot(), account: 'another_account' },
    { ...snapshot(), fetchedAt: 'invalid' }, { ...snapshot(), posts: {} },
  ])('rejects malformed snapshot envelope %#', value => {
    expect(() => validateSnapshot(value)).toThrow();
  });
  it('rejects duplicate IDs rather than displaying the same post multiple times', () => {
    const data = snapshot();
    data.posts.push({ ...data.posts[0] });
    expect(() => validateSnapshot(data)).toThrow();
  });
  it.each([
    { id: 'not-a-platform-id' }, { timestamp: 'invalid' }, { caption: null }, { mediaType: 'STORY' },
    { image: null }, { image: { src: '/instagram/media/test.webp', width: 0, height: 100 } },
    { image: { src: '/instagram/media/test.webp', width: 100, height: -1 } },
    { image: { src: '/instagram/media/test.webp', width: Infinity, height: 100 } },
  ])('rejects malformed post fields %#', patch => {
    const data = snapshot();
    Object.assign(data.posts[0], patch);
    expect(() => validateSnapshot(data)).toThrow();
  });
  it.each([
    'https://cdn.example.test/photo.webp?access_token=private',
    '//cdn.example.test/photo.webp', '/instagram/media/../../secret.webp',
    '/instagram/media/test.webp?token=private', '/instagram/media/test.jpg',
  ])('rejects external, traversal, or credential-bearing image URLs: %s', src => {
    const data = snapshot();
    data.posts[0].image.src = src;
    expect(() => validateSnapshot(data)).toThrow();
  });
  it.each([
    'https://example.test/p/test_10/', 'https://www.instagram.com.evil.test/p/test_10/',
    'https://www.instagram.com/p/test_10/?access_token=private',
    'https://private@www.instagram.com/p/test_10/', 'javascript:alert(1)',
    'http://www.instagram.com/p/test_10/',
  ])('rejects unsafe or credential-bearing source links: %s', permalink => {
    const data = snapshot();
    data.posts[0].permalink = permalink;
    expect(() => validateSnapshot(data)).toThrow();
  });
});
