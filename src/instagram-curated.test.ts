import { describe, expect, it } from 'vitest';
import snapshot from '../public/instagram/feed.json';
import { curatedInstagramPhotos, selectInstagramPhotos } from './instagram-curated';
import { instagramSelection, validateSnapshot } from './instagram';

describe('verified Instagram portfolio', () => {
  const posts = validateSnapshot(snapshot).posts;
  const selected = {...instagramSelection, portfolioMode:'selected'};
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
    const portfolio = selectInstagramPhotos(posts, 'portfolio', selected);
    expect(portfolio.filter(item => item.sourceUrl === photo.sourceUrl)).toHaveLength(1);
    expect(portfolio.find(item => item.sourceUrl === photo.sourceUrl)?.caption).toBe(post.caption);
  });
  it('includes pinned covers and keeps latest independent of curation', () => {
    const portfolio = selectInstagramPhotos(posts, 'portfolio', selected);
    expect(portfolio).toHaveLength(30);
    expect(selectInstagramPhotos([], 'portfolio', selected)).toHaveLength(30);
    const latest = [...posts].sort((a,b) => Date.parse(b.timestamp)-Date.parse(a.timestamp))[0];
    expect(selectInstagramPhotos(posts, 'latest')).toHaveLength(1);
    expect(selectInstagramPhotos(posts, 'latest')[0].sourceUrl).toBe(latest.permalink);
    expect(selectInstagramPhotos([], 'latest')).toEqual([]);
  });
});


describe('automatic recent portfolio', () => {
  const base = validateSnapshot(snapshot).posts[0];
  const posts = Array.from({length:35}, (_,i) => ({...base, id:String(900000+i), permalink:`https://www.instagram.com/p/recent_fixture_${i}/`, timestamp:new Date(Date.UTC(2026,0,i+1)).toISOString()}));
  const recent = {...instagramSelection, portfolioMode:'recent', portfolioIds:[]};
  it('shows the newest 30 feed posts in date order without requiring selection membership', () => {
    const result = selectInstagramPhotos(posts, 'portfolio', recent);
    expect(result).toHaveLength(30);
    expect(result[0].sourceUrl).toBe(posts[34].permalink);
    expect(result[29].sourceUrl).toBe(posts[5].permalink);
    expect(result.every(photo => posts.some(post => post.permalink===photo.sourceUrl))).toBe(true);
    expect(posts[0].id).toBe('900000');
  });
  it('automatically inserts a newly synced post and drops the oldest displayed post', () => {
    const arrival={...base,id:'999999',permalink:'https://www.instagram.com/p/new_arrival_fixture/',timestamp:'2026-03-01T00:00:00Z'};
    const result=selectInstagramPhotos([...posts,arrival], 'portfolio', recent);
    expect(result).toHaveLength(30);
    expect(result[0].sourceUrl).toBe(arrival.permalink);
    expect(result.some(photo=>photo.sourceUrl===posts[5].permalink)).toBe(false);
    expect(selectInstagramPhotos([], 'portfolio', recent)).toEqual([]);
  });
});
