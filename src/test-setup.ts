import { afterEach, beforeEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

Object.defineProperty(window, 'matchMedia', { writable: true, value: vi.fn((query: string) => ({ matches: false, media: query, onchange: null, addListener: vi.fn(), removeListener: vi.fn(), addEventListener: vi.fn(), removeEventListener: vi.fn(), dispatchEvent: vi.fn() })) });
Object.defineProperty(window, 'scrollTo', { writable: true, value: vi.fn() });
// jsdom does not implement native dialog behavior. These methods model its open
// state; cancellation is dispatched explicitly by the tests.
HTMLDialogElement.prototype.showModal = function () { this.setAttribute('open', ''); };
HTMLDialogElement.prototype.close = function () { this.removeAttribute('open'); };

beforeEach(() => {
  localStorage.clear();
  history.replaceState({}, '', '/');
  document.body.style.overflow = '';
  vi.clearAllMocks();
});
afterEach(() => { cleanup(); vi.restoreAllMocks(); });
