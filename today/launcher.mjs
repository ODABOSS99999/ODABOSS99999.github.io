export const FOLDER_URL = 'https://drive.google.com/drive/folders/1Bq5s-ha_tr4K_i6r2LxLMa3WzXFX2Lrq';
export const STORAGE_KEY = 'mcgowen-today-documents-v1';

export function chicagoDate(now = new Date()) {
  const parts = new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Chicago', year: 'numeric', month: '2-digit', day: '2-digit',
  }).formatToParts(now);
  const value = name => parts.find(part => part.type === name).value;
  return `${value('year')}-${value('month')}-${value('day')}`;
}

export function validDestination(value) {
  if (value === FOLDER_URL) return true;
  if (typeof value !== 'string') return false;
  // Only canonical Docs edit links. No arbitrary redirects, queries or credentials.
  return /^https:\/\/docs\.google\.com\/document\/d\/[A-Za-z0-9_-]{10,200}\/edit$/.test(value);
}

export function selectDestination(hash, stored, date = chicagoDate()) {
  let incoming;
  try { incoming = JSON.parse(decodeURIComponent(hash.replace(/^#/, ''))); } catch { /* Empty or malformed fragment. */ }
  const cache = {};
  if (stored && typeof stored === 'object' && !Array.isArray(stored)) {
    for (const [day, url] of Object.entries(stored)) {
      if (/^\d{4}-\d{2}-\d{2}$/.test(day) && validDestination(url) && url !== FOLDER_URL) cache[day] = url;
    }
  }
  if (incoming?.date === date && validDestination(incoming.url)) {
    if (incoming.url !== FOLDER_URL) cache[date] = incoming.url;
    else delete cache[date];
    return { url: incoming.url, cache: trimCache(cache) };
  }
  return { url: cache[date] || FOLDER_URL, cache: trimCache(cache) };
}

function trimCache(cache) {
  return Object.fromEntries(Object.entries(cache).sort(([a], [b]) => b.localeCompare(a)).slice(0, 21));
}

export function launch(browser = window) {
  let stored;
  try { stored = JSON.parse(browser.localStorage.getItem(STORAGE_KEY)); } catch { /* Storage may be disabled. */ }
  const { url, cache } = selectDestination(browser.location.hash, stored);
  // Fragments never reach the web host. Remove private IDs from this history entry as well.
  browser.history.replaceState(null, '', browser.location.pathname);
  try { browser.localStorage.setItem(STORAGE_KEY, JSON.stringify(cache)); } catch { /* Redirect still works. */ }
  const link = browser.document.getElementById('destination');
  link.href = url;
  link.textContent = url === FOLDER_URL ? 'Open To-Do Lists' : "Open today's document";
  browser.document.getElementById('status').textContent = url === FOLDER_URL
    ? "Today's document link is unavailable. Opening To-Do Lists…"
    : "Opening today's to-do…";
  browser.location.replace(url);
}

if (typeof window !== 'undefined') launch(window);
