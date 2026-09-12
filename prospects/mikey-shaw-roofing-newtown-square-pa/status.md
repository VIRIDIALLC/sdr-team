---
stage: enriched
track: package
quote_stage: none
---

## Links
- website: https://www.mshawroofing.com
- maps: https://www.google.com/maps/search/Mikey+Shaw+Roofing+500+Farview+Ave+Newtown+Square+PA

## Log

- 2026-09-12 (Rupika): found, added to pipeline. Roofing, Newtown Square PA (Philadelphia metro/Delaware County — surfaced via a Delaware County-wide search). Sourced via family-owned technique — small owner-run shop, owner Michael Shaw confirmed as Owner/CEO via his own LinkedIn profile (cross-checked against Nextdoor/Facebook/Yelp, all consistent identity, 500 Farview Ave address). Reachable via confirmed domain (mshawroofing.com) and owner name (Michael Shaw). No response-time signal captured — FLAG for Montague to check booking/response signals during enrichment.
- 2026-09-12 (Montague): enriched. Owner name re-confirmed (LinkedIn + own site bio, two independent sources) — Michael Shaw. Email confirmed real: mshawroofingrequest@gmail.com, quoted directly off two pages of the live site (caught and discarded a garbled "mshawroofingreaving@gmail.com" variant from an earlier homepage fetch — traced back and corrected). Site verified live and matches business, has a website. No response-time signal exists (not Yelp-sourced) — hook built from verified "not a franchise, hands-on owner" site copy instead. Email gate passes. Advanced to stage: enriched.
