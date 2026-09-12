---
stage: enriched
track: package
quote_stage: none
---

## Links
- website: https://www.guaranteedplumbingandheating.com
- yelp: https://www.yelp.com/biz/guaranteed-plumbing-and-heating-philadelphia-6
- maps: https://www.google.com/maps/search/Guaranteed+Plumbing+%26+Heating+900+Cottman+Ave+Philadelphia+PA

## Log

- 2026-09-12 (Rupika): found, added to pipeline. Plumbing, Philadelphia PA (Philadelphia metro). Sourced via family-owned technique — family-owned/operated 30+ yrs serving Philadelphia/Bucks/Montgomery counties, owner confirmed as Eric M. Slifkin via BBB (accredited since 2009, A+ rating), small volume (29 Yelp reviews at 900 Cottman Ave) consistent with an owner-run shop, not a scaled chain. Reachable via confirmed domain (guaranteedplumbingandheating.com). No response-time signal captured — FLAG for Montague to check booking/response signals during enrichment.
- 2026-09-12 (Montague): verified and advanced to `enriched`. Name conflict caught and resolved — search-AI overviews and LinkedIn kept surfacing a "Rick Slifkin" as owner; a direct fetch of the primary-source trade article plus an owner review-response signed "ERIC M SLIFKIN" and BuildZoom's license record all confirm it's **Eric Slifkin**, not Rick. Email NOT found on-page anywhere (site, BBB, Facebook blocked) — a search-AI summary offered a "CEO Deborah Kelly-mullin" and a `.net` email that traced to nothing real and contradicted every confirmed source, rejected as hallucination. Advancing on a domain-pattern guess (`info@guaranteedplumbingandheating.com`) backed by DNS-confirmed live Google Workspace MX + site-verification records, per the established "confirmed-live-mailbox" guess tier — clearly flagged as a guess, not confirmed, in enrichment.md. Phone (215) 342-7200 used (site's own primary line); BBB shows a third, non-matching number, noted not resolved. Yelp listing identified and added to Links via Google's result text only (page never opened).
