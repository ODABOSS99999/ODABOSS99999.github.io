import test from 'node:test';
import assert from 'node:assert/strict';
import { chicagoDate, validDestination, selectDestination, launch, FOLDER_URL, STORAGE_KEY } from '../public/today/launcher.mjs';

const doc = 'https://docs.google.com/document/d/test_document_12345/edit';
const hash = value => '#' + encodeURIComponent(JSON.stringify(value));

test('Chicago date handles UTC midnight and daylight saving boundaries', () => {
  assert.equal(chicagoDate(new Date('2026-11-14T02:00:00Z')), '2026-11-13');
  assert.equal(chicagoDate(new Date('2026-11-14T06:00:00Z')), '2026-11-14');
  assert.equal(chicagoDate(new Date('2026-07-14T05:00:00Z')), '2026-07-14');
});

test('only canonical Docs edit links and the configured folder are allowed', () => {
  assert.ok(validDestination(doc));
  assert.ok(validDestination(FOLDER_URL));
  for (const value of ['javascript:alert(1)', 'https://example.com', doc + '?next=evil', doc + '#x', 'https://docs.google.com.evil/document/d/test_document_12345/edit', null]) assert.equal(validDestination(value), false);
});

test('current fragment wins, expires on the next Chicago day, and cannot redirect elsewhere', () => {
  assert.equal(selectDestination(hash({ date: '2026-11-13', url: doc }), {}, '2026-11-13').url, doc);
  assert.equal(selectDestination(hash({ date: '2026-11-13', url: doc }), {}, '2026-11-14').url, FOLDER_URL);
  assert.equal(selectDestination(hash({ date: '2026-11-13', url: 'https://evil.example' }), {}, '2026-11-13').url, FOLDER_URL);
  assert.equal(selectDestination('#%broken', {}, '2026-11-13').url, FOLDER_URL);
});

test('a plain revisit uses only that date and bounds the private local cache', () => {
  assert.equal(selectDestination('', { '2026-11-13': doc }, '2026-11-13').url, doc);
  assert.equal(selectDestination('', { '2026-11-13': doc }, '2026-11-14').url, FOLDER_URL);
  const stored = Object.fromEntries(Array.from({length: 30}, (_, i) => [`2026-11-${String(i+1).padStart(2, '0')}`, doc]));
  assert.equal(Object.keys(selectDestination('', stored, '2026-11-30').cache).length, 21);
  assert.equal(selectDestination(hash({ date:'2026-11-13', url:FOLDER_URL }), {'2026-11-13':doc}, '2026-11-13').cache['2026-11-13'], undefined);
});

test('redirect is automatic, removes fragment first, and works with storage disabled', () => {
  const actions = [], nodes = { destination: {}, status: {} };
  launch({
    location: { hash: hash({date:chicagoDate(), url:doc}), pathname:'/today/', replace: url => actions.push(['redirect', url]) },
    history: { replaceState: (...args) => actions.push(['history', ...args]) },
    localStorage: { getItem: () => { throw Error('disabled'); }, setItem: () => { throw Error('disabled'); } },
    document: { getElementById: id => nodes[id] },
  });
  assert.equal(actions[0][0], 'history');
  assert.deepEqual(actions[1], ['redirect', doc]);
  assert.equal(nodes.destination.href, doc);
  assert.equal(typeof STORAGE_KEY, 'string');
});
