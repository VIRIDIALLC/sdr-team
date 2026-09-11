---
stage: enriched
track: package
quote_stage: none
---

## Links
- maps: https://www.google.com/maps/search/MayDay+Pest+Control+Marietta+GA
- yelp: https://www.yelp.com/biz/mayday-pest-control-marietta

## Log

- 2026-09-10 (Rupika): found, added to pipeline. Pest control, Marietta GA (Atlanta metro — searched via Roswell GA, actual home address resolved to Marietta). Pain signal: Yelp shows "responds in about 1 hr" to quote requests — borderline on the >1hr threshold, flagged as the weakest signal of this batch, corroborate before leaning on it. Family owned since 1998, owner "Angel," 45 Yelp reviews. FLAG for Montague: service area spans 14 GA counties — wide territory for the review count, worth confirming this isn't a bigger operation than it reads (no website found).
- 2026-09-11 (Montague): verified and advanced to `enriched`, WITH A PROMINENT SCALE FLAG. Real website found (maydaypestservices.com — corrects "no website found"), email CONFIRMED (office@maydaypestservices.com). Owner Angel Garcia confirmed via GA SOS + BBB + GPCA. But the 14-county service area is real and this reads bigger than 45 Yelp reviews suggests: 7 named staff, a possible second office/phone line, formal LLC structure, ~135 reviews across other platforms. Worth Kevin weighing scale-fit before treating as a clean small-shop pitch. See enrichment.md.
