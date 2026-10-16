import { describe, expect, it } from 'vitest';
import snapshot from '../public/instagram/feed.json';
import { curatedInstagramPhotos, selectInstagramPhotos } from './instagram-curated';
import { instagramSelection, validateSnapshot } from './instagram';

describe('verified Instagram portfolio', () => {
  const posts = validateSnapshot(snapshot).posts;
  it('keeps all 29 verified covers without inferred dates or captions', () => {
    expect(curatedInstagramPhotos).toHaveLength(29);
    expect(new Set(curatedInstagramPhotos.map(photo => photo.sourceUrl)).size).toBe(29);
    for (const photo of curatedInstagramPhotos) {
      expect(photo.src).toMatch(/^\/instagram\/curated\/[\w-]+\.webp$/);
      expect(photo.sourceUrl).toMatch(/^https:\/\/www\.instagram\.com\/p\/[\w-]+\/$/);
      expect(photo.caption).toBeUndefined();
      expect(photo).not.toHaveProperty('timestamp');
      expect(photo.width).toBeGreaterThan(0);
      expect(photo.height).toBeGreaterThan(0);
    }
  });
  it('enriches matching posts without duplicating their cover', () => {
    const photo = curatedInstagramPhotos.find(item => posts.some(post => post.permalink === item.sourceUrl))!;
    const post = posts.find(item => item.permalink === photo.sourceUrl)!;
    const portfolio = selectInstagramPhotos(posts, 'portfolio');
    expect(portfolio.filter(item => item.sourceUrl === photo.sourceUrl)).toHaveLength(1);
    expect(portfolio.find(item => item.sourceUrl === photo.sourceUrl)?.caption).toBe(post.caption);
  });
  it('includes each available favorite and pin, and keeps latest independent of curation', () => {
    const favorites = selectInstagramPhotos(posts, 'favorites');
    const portfolio = selectInstagramPhotos(posts, 'portfolio');
    expect(favorites).toHaveLength(7);
    expect(portfolio).toHaveLength(30);
    expect(selectInstagramPhotos([], 'portfolio')).toHaveLength(30);
    expect(selectInstagramPhotos([], 'favorites')).toHaveLength(7);
    for (const favorite of favorites) expect(portfolio.some(item => item.sourceUrl === favorite.sourceUrl)).toBe(true);
    const expectedCodes = new Set([...instagramSelection.favoriteIds, ...instagramSelection.pinnedIds]);
    for (const favorite of favorites) expect(expectedCodes.has(favorite.sourceUrl!.split('/').at(-2)!)).toBe(true);
    const latest = [...posts].sort((a,b) => Date.parse(b.timestamp)-Date.parse(a.timestamp))[0];
    expect(selectInstagramPhotos(posts, 'latest')).toHaveLength(1);
    expect(selectInstagramPhotos(posts, 'latest')[0].sourceUrl).toBe(latest.permalink);
    expect(selectInstagramPhotos([], 'latest')).toEqual([]);
  });
});
