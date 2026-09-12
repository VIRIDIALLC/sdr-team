---
stage: found
track: package
quote_stage: none
call_ready: yes
call_ready_source: BBB profile + floridaroofing.directory listing (both fetched directly, phone matches)
---

## Links
- website: https://vigilanteroofing.com/
- maps: https://www.google.com/maps/search/Vigilante+%26+Family+Roofing+Services+Jacksonville+FL

## Log
- 2026-09-11 (Rupika): found, added to pipeline. Roofing, Jacksonville FL, family-owned technique (owner Richard Vigilante, started 2018 with Jeanette Shelton). Small shop (23 Yelp reviews, 5.0 rating) — every job is individually reviewed and overseen by the owner personally, a clear owner-bottleneck signal. FL license #CCC1331537 active. Reachable via domain (vigilanteroofing.com) + BBB-listed phone.
- 2026-09-12 (Montague): email gate HELD, staying at `found`. vigilanteroofing.com would not load at all (connection reset on every WebFetch and headless-Playwright attempt) — a bot-wall on their own site, not Yelp. Two Cloudflare-obfuscated emails turned up in search (BuildZoom, floridaroofing.directory) but decoding them myself showed both belong to unrelated third parties (BuildZoom's own support address; the directory site's own admin), not this business — discarded, not reported as real. No other real email found despite checking BBB, Facebook (login wall), and directory listings. Phone (904) 521-8868 confirmed identically in two independently-fetched sources (BBB + floridaroofing.directory) — added `call_ready: yes`. Name confirmed: Richard Vigilante (owner, hands-on every job) via a real BuildZoom customer review + company's own marketing copy; Jeanette/Jeannette Shelton confirmed Co-Owner/Manager via BBB. CALL CARD added to enrichment.md.
