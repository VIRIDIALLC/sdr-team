---
stage: sent
followup: enrolled
track: package
quote_stage: none
---

## Links
- yelp: https://www.yelp.com/biz/all-around-electrical-services-avondale
- website: https://www.allaroundelectrical.com
- maps: https://www.google.com/maps/search/All+Around+Electrical+Services+12940+W+Crittenden+Ln+Avondale+AZ

## Log

- 2026-08-23 (Rupika): found, added to pipeline. Family-run electrical shop, in business since 1998 (~25-28 yrs — not a scale disqualifier on its own, but flag for Montague since it's on the older end; single location, no chain/franchise signal found). Flag: AZ ROC license status not independently confirmed via search (site claims "licensed and insured," no live ROC lookup possible from search alone) — Montague to verify before this advances past `found`. Flag: Yelp review count (25) and Google review count (186) are two different platforms, not a discrepancy — noting so Montague doesn't flag it as conflation. Identity (name, address, phone, years-in-business) was consistent across 2 independent searches this run.
- 2026-08-24 (Montague): researched, **advanced to `enriched`.** Owner
  John Grimes confirmed high confidence (4 convergent sources). Email
  gate passed via guessed info@ pattern on the confirmed-live domain
  (no direct email surfaced). AZ ROC license likely active, not
  state-verified — flagged as a caution, not a gate. Response-time
  (~3hr) unconfirmed this run but not contradicted — carried forward as
  a question. See enrichment.md.
- 2026-08-24 (Elly): drafted. Package track. Built on the contrast between
  their advertised 24/7 emergency service and the ~3hr Yelp quote-request
  figure (two lanes: the caller who can't shop vs. the planned job that gets
  shopped), so the draft survives the unconfirmed response figure being stale.
  Dropped the lifetime-warranty economics angle. Deliberately built apart from
  Gallantry Electric, same trade six miles away, drafted today. Email is a
  GUESSED info@ pattern. Advanced to `drafted`.
- 2026-08-24 (Kevin, via KIREEK): sent to info@allaroundelectrical.com.
- 2026-08-26 (Kevin, via KIREEK): enrolled in the GHL outbound pipeline for real.
