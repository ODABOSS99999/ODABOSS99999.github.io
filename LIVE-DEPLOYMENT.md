# Live deployment — October 15, 2026

The owner approved publication in this chat. The approved source revision is `ddf514af8244c89380c1059402a98a25f769ae6e`; subsequent work by other chats may remain local and is not implied to be published.

- Live site: https://mcgowen.works/
- Source: https://github.com/ODABOSS99999/ODABOSS99999.github.io
- Successful approved release: https://github.com/ODABOSS99999/ODABOSS99999.github.io/actions/runs/38837296574
- Successful first authenticated Instagram refresh: https://github.com/ODABOSS99999/ODABOSS99999.github.io/actions/runs/38837863250
- Published portfolio contains 30 verified post covers; Favorites contains seven distinct posts from the five portfolio favorites and three profile pins. One post belongs to both groups.
- Latest post source verified as https://www.instagram.com/p/DehAOwevgm4/. Signed-in creator portfolio and explicit profile pin markers established selection membership; likes were not used to infer favorites.

## Verified live

Build and 70 application tests passed; 12 importer/staging tests passed. GitHub Actions repeated the release checks successfully. All six direct section paths and the imported asset requests returned HTTP 200. The actual public gallery opened a 1600×1056 image, Escape closed the viewer, and focus returned to the opening button. The public rendered Photography page contained 30 portfolio images and seven favorite images without horizontal overflow.

GitHub verified ownership of mcgowen.works using its DNS TXT challenge. Name.com now has the four official GitHub Pages apex A records and www CNAME to odaboss99999.github.io. GitHub's DNS check succeeded and Enforce HTTPS is enabled. Verified normal TLS requests to apex and www; HTTP and www redirect to https://mcgowen.works/. The deployment branch retains its CNAME file.

## Automatic updates

The owner privately added WINDSOR_API_KEY as a repository secret. Its value was never read or printed by this chat. Repository variables SITE_PUBLIC_RELEASE_APPROVED and INSTAGRAM_SYNC_ENABLED are true. The daily GitHub workflow refreshed the feed, tested, built, committed the updated static snapshot, and published successfully. Keys and signed CDN URLs are excluded from the public feed.

The Instagram feed API does not expose portfolio membership or pin status. A separate active daily desktop-chat automation, `sync-instagram-portfolio-and-pinned-selections`, checks those visible selections in the authorized signed-in Chrome session and publishes only verified collection changes after testing in an isolated checkout. It requires the desktop app and computer to be available, plus a valid Instagram login. Its future unattended execution is not yet verified. The latest-post GitHub refresh runs independently of that desktop check.

No paid resource, credits purchase, renewal, or billing change was made. Domain automatic renewal was visibly off when inspected; the existing registration expires October 15, 2027. Renewal is not represented as free.
