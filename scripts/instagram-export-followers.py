"""Publish anonymous monthly follow-date counts, never follower identities or invented totals.
Usage: python scripts/instagram-export-followers.py PRIVATE_ARCHIVE.zip
"""
import json
import sys
import zipfile
from collections import Counter
from datetime import datetime
from pathlib import Path
from lxml import html

archive = Path(sys.argv[1])
with zipfile.ZipFile(archive) as source:
    tree = html.fromstring(source.read('connections/followers_and_following/followers_1.html'))
months = Counter()
for card in tree.xpath('//main/div'):
    for value in card.xpath('.//div[not(*)]/text()'):
        try:
            months[datetime.strptime(value, '%b %d, %Y %I:%M %p').strftime('%Y-%m')] += 1
        except ValueError:
            pass
if not months:
    raise SystemExit('No dated follower records; existing aggregate preserved')
output = Path(__file__).resolve().parents[1] / 'public/instagram/export-follower-history.json'
data = json.loads(output.read_text(encoding='utf-8'))
count = 0
points = []
for month, total in sorted(months.items()):
    count += total
    points.append({'date': month + '-01', 'count': count})
data.update(recordCount=count, points=points)
output.write_text(json.dumps(data, indent=2) + '\n', encoding='utf-8')
print(json.dumps({'records': count, 'months': len(points)}))
