---
stage: enriched
track: website
quote_stage: none
---

## Links
- yelp: https://www.yelp.com/biz/amg-electric-laramie
- maps: https://www.google.com/maps/search/AMG+Electric+LLC+Laramie+WY

## Log

- 2026-09-10 (Rupika): found, added to pipeline. Electrical, Laramie WY (fresh market, not previously worked). Website gap subtype (b): owns a domain (amgelectric.biz, used for their email address) but it is DEAD — direct-fetched myself (not just search synthesis): the domain resolves to a Google-hosted 404 "Not Found" page (server: ghs), no published site behind it. Facebook, Yelp, Angi, D&B and a Laramie city contractor-list PDF all list contact info only, no working site. Owner name: Adam — medium-high confidence, from the business's own listed email address (Adam@amgelectric.biz) appearing consistently across independent sources (Facebook, D&B, directories) tied to the correct phone/address.
- 2026-09-10 (Montague): enriched, advanced to `stage: enriched`. Website-gap independently re-confirmed via direct fetch (404/ghs, TLS fails too). Email Adam@amgelectric.biz usable at medium-high confidence — domain's mail infrastructure (Google Workspace MX/SPF) is genuinely live even though the website is dead, and the address is corroborated across Facebook/Angi/D&B. Owner "Adam" — first name only, no last name found despite checking BBB/WY SOS/LinkedIn. Phone (307) 277-9832 confirmed via 4 independent sources. No dead end.
