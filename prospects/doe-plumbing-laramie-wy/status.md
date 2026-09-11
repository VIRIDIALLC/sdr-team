---
stage: found
track: website
quote_stage: none
call_ready: yes
---

## Links
- yelp: https://www.yelp.com/biz/doe-plumbing-laramie
- maps: https://www.google.com/maps/search/Doe+Plumbing+Laramie+WY

## Log

- 2026-09-10 (Rupika): found, added to pipeline. Plumbing/HVAC, Laramie WY (fresh market, not previously worked). Website gap: no site found anywhere — BBB's own "website" field for this business points to their Facebook page, not a domain; Yellow Pages, Yelp, Nextdoor, Procore, RepairHit and Chamber of Commerce listings all show contact/reviews only (subtype: no web presence beyond Facebook/directories). Owner name: Tom Ferris — HIGH confidence, direct-fetched from the business's own BBB profile ("Mr. Tom Ferris"). Reachability: phone (307) 745-0571 and address 3708 E Grand Ave, Laramie WY 82070, confirmed across BBB and multiple directories.
- 2026-09-10 (Montague): website-gap independently re-confirmed (BBB website field points to FB, D&B "no website listed," 5 guessed domains all DNS-fail). Owner Tom Ferris confirmed via 4 sources. Email gate FAILED — candidate doeplumbin@aol.com could not be independently read from any actual page (Cloudflare-obfuscated/403 every attempt), only a search-engine decode of a blocked D&B page; not trusted enough to advance. Phone confirmed well beyond 2 sources (BBB + D&B + Yellow Pages + Chamber) — marked `call_ready: yes`. Held at `found`, not a dead end.
