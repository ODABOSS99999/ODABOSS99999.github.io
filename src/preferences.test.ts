import { describe, expect, it, vi } from 'vitest';
import { defaultPreferences, readPreferences, routeFromPath, savePreferences } from './preferences';

describe('preferences', () => {
  it('starts muted and uses defaults when storage is missing or malformed', () => {
    expect(readPreferences()).toEqual(defaultPreferences);
    localStorage.setItem('mcgowen-library', '{invalid');
    expect(readPreferences()).toEqual(defaultPreferences);
  });
  it('validates saved types and clamps volume', () => {
    localStorage.setItem('mcgowen-library', JSON.stringify({ lighting: 'neon', volume: 3, motion: 'yes', muted: 0 }));
    expect(readPreferences()).toEqual({ ...defaultPreferences, volume: 1 });
    localStorage.setItem('mcgowen-library', JSON.stringify({ lighting: 'daylight', volume: -2, motion: false, muted: false }));
    expect(readPreferences()).toEqual({ lighting: 'daylight', volume: 0, motion: false, muted: false });
  });
  it('round trips preferences and survives blocked browser storage', () => {
    const prefs = { lighting: 'darkroom' as const, volume: .65, motion: false, muted: true };
    savePreferences(prefs);
    expect(readPreferences()).toEqual(prefs);
    vi.spyOn(Storage.prototype, 'getItem').mockImplementation(() => { throw new Error('blocked'); });
    vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => { throw new Error('blocked'); });
    expect(readPreferences()).toEqual(defaultPreferences);
    expect(() => savePreferences(prefs)).not.toThrow();
  });
});

describe('routes', () => {
  it('normalizes root and surrounding slashes while retaining unknown routes', () => {
    expect(routeFromPath('/')).toBe('library');
    expect(routeFromPath('/photography/')).toBe('photography');
    expect(routeFromPath('/unknown')).toBe('unknown');
    expect(routeFromPath('/%E0%A4%A')).toBe('unknown');
  });
});
