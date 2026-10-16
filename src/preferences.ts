export type Lighting = 'daylight' | 'lamplight' | 'darkroom';
export type Preferences = { lighting: Lighting; volume: number; motion: boolean; muted: boolean };
export const defaultPreferences: Preferences = { lighting: 'lamplight', volume: 0.3, motion: true, muted: false };
export function readPreferences(): Preferences {
  // Each opening starts a new visit. Never restore a previous device's room state.
  return { ...defaultPreferences };
}
export function savePreferences(_p: Preferences) { /* Preferences belong to this visit only. */ }
export function routeFromPath(path: string) { try { return decodeURI(path).replace(/^\/+|\/+$/g, '') || 'library'; } catch { return 'unknown'; } }
