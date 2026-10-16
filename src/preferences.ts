export type Lighting = 'daylight' | 'lamplight' | 'darkroom';
export type Preferences = { lighting: Lighting; volume: number; motion: boolean; muted: boolean };
export const defaultPreferences: Preferences = { lighting: 'lamplight', volume: 0.3, motion: true, muted: false };
export function readPreferences(): Preferences {
  try {
    const p = JSON.parse(localStorage.getItem('mcgowen-library') || '{}');
    return { lighting: ['daylight','lamplight','darkroom'].includes(p.lighting) ? p.lighting : 'lamplight', volume: typeof p.volume === 'number' && Number.isFinite(p.volume) ? Math.max(0,Math.min(1,p.volume)) : 0.3, motion: typeof p.motion === 'boolean' ? p.motion : true, muted: p.soundDefaultVersion===2 && typeof p.muted === 'boolean' ? p.muted : false };
  } catch { return { ...defaultPreferences }; }
}
export function savePreferences(p: Preferences) { try { localStorage.setItem('mcgowen-library', JSON.stringify({...p,soundDefaultVersion:2})); } catch { /* Storage may be disabled; the session still works. */ } }
export function routeFromPath(path: string) { try { return decodeURI(path).replace(/^\/+|\/+$/g, '') || 'library'; } catch { return 'unknown'; } }
