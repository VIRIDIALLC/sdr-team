---
stage: enriched
track: package
quote_stage: none
---

## Links
- website: https://www.hlconstructionroofing.com
- maps: https://www.google.com/maps/search/HL+Construction+and+Roofing+Charlotte+NC
- yelp: https://www.yelp.com/biz/hl-construction-and-roofing-charlotte

## Log

- 2026-09-10 (Rupika): found, added to pipeline. Roofing, Charlotte NC (searched via Matthews NC, actual home address resolved to Charlotte — log real home city). Pain signal: Yelp shows a Matthews-area roofing/construction listing at that address responding in about 3 hrs to quote requests (aggregated Yelp search figure, not confirmed to this exact business by name — see brief). Family-owned by Hector Lozano and wife Sonia Mancia, only 3 Yelp reviews — genuinely tiny. FLAG for Montague: verify NC general contractor/roofing license directly (not found in search) and re-confirm the response-time figure on the live Yelp page.
- 2026-09-11 (Montague): verified and advanced to `enriched`. Email CONFIRMED directly (hlconstructionandroofing@gmail.com, found on 2 pages) — flagged a real name-collision risk, a different business "H&L Roofing LLC" uses a similar name/different email, do not conflate. Owners Hector Lozano + Sonia Mancia confirmed (site + BBB); a third BBB officer (Esperanza Plancarte) noted, not used as a call name. NC license not verified (portal not machine-queryable), no red flag. The 3hr response-time figure is carried forward as pre-ruling history only, not used as fact or hook. See enrichment.md.
