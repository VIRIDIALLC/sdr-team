---
stage: enriched
track: package
quote_stage: none
---

## Links
- website: https://www.mywrightselectric.com/
- maps: https://www.google.com/maps/search/Wright%27s+Electric+Homestead+FL

## Log
- 2026-09-11 (Rupika): found, added to pipeline. Electrical, Homestead FL (Miami metro), family-owned technique ("family run electrical company"). Very small — zero Yelp reviews yet despite a top-5% BuildZoom score, single location, serving Miami-Dade/Broward/Monroe. Owner's personal name not independently confirmed this pass (flag for Montague). Reachable via domain (mywrightselectric.com) + phone.
- 2026-09-12 (Montague): enriched, resolves Rupika's name flag. Owner is Martin A. Wright, President/registered agent per FL Sunbiz filing (L19000042827) — address matches the business exactly. Email gate PASSED: mywrightselectric@gmail.com confirmed directly on their own Contact Us page (fetched twice cleanly after one glitched fetch produced a garbled variant — discarded that one, not used anywhere). Phone (305) 562-0995 confirmed on-site, matches Rupika's figure. CALL CARD added, no review-count/rating used as hook per 2026-09-08 compliance ruling. Advanced to `stage: enriched`.
