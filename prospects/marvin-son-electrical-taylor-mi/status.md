---
stage: drafted
track: package
quote_stage: none
---

## Links
- yelp: https://www.yelp.com/biz/marvin-and-son-electrical-taylor
- website: https://marvinandsonelectrical.com
- maps: https://www.google.com/maps/search/Marvin+and+Son+Electrical+Taylor+MI

## Log

- 2026-09-09 (Rupika): found, added to pipeline. Electrical, Taylor MI (serves Westland / Wayne-Oakland county, Detroit metro). Pain signal: Yelp response time reported as high as 7 hrs in one source (drifts to 1 hr in another) — flagged for verification. Only 2 Yelp reviews on file.
- 2026-09-09 (Montague): identity/location conflict RESOLVED — one real business, not a conflation. Same phone (248) 979-1592 ties together the Taylor operating address (Yelp), the Clinton Township registered/mailing address (BBB), and Westland (just a service area, not a separate location — matches the site's own stated Wayne/Oakland/Washtenaw county coverage). Verified and advanced to `enriched`. Website confirmed genuine via direct fetch. Email CONFIRMED directly on the contact page (admin@marvinandsonelectrical.com; also marvsonelect@gmail.com). Owner: Marvin Bellamy Sr. (BBB Owner/Operator). Response-time signal DROPPED — three different figures (1hr/5hr/7hr) surfaced depending on search context, reads as a Yelp display quirk rather than a real signal; no verified hook used. **Flag for Sue/Kevin:** BuildZoom shows a possibly-expired individual electrical license ("S and Son Marvin E," garbled name parse, Clinton Twp zip match) expired since 12/31/2016 — could not verify against MI LARA directly whether the LLC's current contractor license is separate/active. See enrichment.md.
- 2026-09-09 (Elly): drafted first touch, advanced to `drafted`. Package track. No response-time figure used, agreeing with Montague's drop (1/5/7 hr across search contexts). Opens on the prescribed underlying-problem question and argues a mechanism new to this repo: an electrical lead can expire on its own when the fault resolves, taking the panel-upgrade job with it. Montague's licensing flag carried into the Note for Kevin as an open question in both directions, with an explicit instruction not to lean on licensing on the call. Two-addresses angle dropped (scattered-front-door shape), logged for touch two.
