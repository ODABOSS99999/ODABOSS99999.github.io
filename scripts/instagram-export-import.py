"""Import only already-public carousel assets from the owner's Instagram export.

Requires lxml. All non-media-export HTML is excluded before reading archive entries.
The local plan contains no device, location, relationship, or account metadata.
"""
import hashlib
import json
import re
import unicodedata
import zipfile
from datetime import datetime
from pathlib import Path
from lxml import html

ROOT = Path(__file__).resolve().parents[1]
SUFFIXES = '4Eeyo3YA 6yMzefEl 8fM84LYF ejc31YLx fxQYHiC2 hA4fr8uQ J0s6u8qu oZo7ykpR QzhtMnlM Tg4V4S9H tlvyOhIT VrdBvwNG wJYuz3nU zCTttiqB'.split()
LIMIT = 100_000_000


def normalize(value):
    return ' '.join(unicodedata.normalize('NFC', value).split())


def records(data):
    tree = html.fromstring(data)
    for card in tree.xpath('//main/div'):
        dates = card.xpath('./div[contains(concat(" ",normalize-space(@class)," ")," _a6-o ")]/text()')
        if not dates:
            continue
        date = datetime.strptime(dates[-1], '%b %d, %Y %I:%M %p')
        headings = card.xpath('./h2')
        captions = card.xpath('.//tr[td[1][normalize-space(.)="Caption"]]/td[2]')
        caption = headings[0].text_content() if headings else (captions[0].text_content() if captions else '')
        paths = list(dict.fromkeys(card.xpath('.//img/@src')))
        paths = [p for p in paths if re.fullmatch(r'media/posts/(?:\d{6}/)?\d+\.(?:jpg|jpeg|png)', p, re.I)]
        yield {'caption': normalize(caption), 'date': date, 'paths': paths}


def main():
    feed = json.loads((ROOT / 'public/instagram/feed.json').read_text(encoding='utf-8'))['posts']
    private_source = ROOT.parent / 'instagram-source-2026-10-18'
    source = private_source if private_source.is_dir() else Path.home() / 'Downloads'
    archives = [source / f'instagram-mcgowen_media-2026-10-18-{s}.zip' for s in SUFFIXES]
    entries, parsed, seen = {}, [], set()
    counts = {}
    for archive in archives:
        with zipfile.ZipFile(archive) as z:
            for entry in z.infolist():
                # Index only public-post assets, never read unrelated/private entries.
                if re.fullmatch(r'media/posts/(?:\d{6}/)?\d+\.(?:jpg|jpeg|png)', entry.filename, re.I):
                    entries.setdefault(entry.filename, (archive, entry.file_size))
                if not re.fullmatch(r'your_instagram_activity/media/(?:posts[^/]*|reels)\.html', entry.filename):
                    continue
                data = z.read(entry)
                digest = hashlib.sha256(data).hexdigest()
                if digest in seen:
                    continue
                seen.add(digest)
                rows = list(records(data))
                for row in rows:
                    row['ordered'] = bool(re.search(r'/posts_\d+\.html$', entry.filename))
                counts[f'{archive.stem[-8:]}/{entry.filename}'] = len(rows)
                parsed.extend(rows)
    albums = {}
    for post in feed:
        if post['mediaType'] != 'CAROUSEL_ALBUM':
            continue
        date = datetime.fromisoformat(post['timestamp'].replace('Z', '+00:00')).replace(tzinfo=None)
        caption = normalize(post.get('caption', ''))
        matches = [r for r in parsed if r['paths'] and ((caption and r['caption'] == caption and abs((r['date'] - date).total_seconds()) <= 86400) or any(Path(p).stem == post['id'] for p in r['paths']))]
        # Different export representations may order the same album differently;
        # prefer the simple posts_N record, which has presentation order.
        ordered = [r for r in matches if r['ordered']]
        if ordered:
            matches = ordered
        groups = {tuple(r['paths']) for r in matches}
        if len(groups) != 1:
            continue
        row = matches[0]
        if len(row['paths']) < 2 or any(p not in entries for p in row['paths']):
            continue
        # Refuse caption collisions in the currently public feed.
        if caption and sum(normalize(p.get('caption', '')) == caption and abs((datetime.fromisoformat(p['timestamp'].replace('Z', '+00:00')).replace(tzinfo=None)-date).total_seconds()) <= 86400 for p in feed) != 1:
            continue
        albums[post['permalink']] = row['paths']
    paths = list(dict.fromkeys(p for album in albums.values() for p in album))
    total = sum(entries[p][1] for p in paths)
    if total > LIMIT:
        raise SystemExit(f'Input limit exceeded before mutation: {total} > {LIMIT}')
    output = ROOT / 'output/instagram-export-input'
    output.mkdir(parents=True, exist_ok=True)
    files = {p: hashlib.sha256(p.encode()).hexdigest()[:20] + Path(p).suffix.lower() for p in paths}
    for path in paths:
        with zipfile.ZipFile(entries[path][0]) as z:
            (output / files[path]).write_bytes(z.read(path))
    plan = {'version': 1, 'albums': {url: [files[p] for p in album] for url, album in albums.items()}}
    (output / 'plan.json').write_text(json.dumps(plan, indent=2), encoding='utf-8')
    print(json.dumps({'archives': len(archives), 'uniqueHtml': len(seen), 'records': counts, 'albums': len(albums), 'images': len(paths), 'inputBytes': total}, indent=2))


if __name__ == '__main__':
    main()
