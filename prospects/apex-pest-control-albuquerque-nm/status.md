---
stage: enriched
track: package
quote_stage: none
---

## Links
- website: https://apexpestcontrolnm.com
- maps: https://www.google.com/maps/search/Apex+Pest+Control+Albuquerque+NM

## Log

- 2026-09-07 (Rupika): found, added to pipeline. Pest control, Albuquerque NM. Pain signal: Yelp "responds in about 1 day" — a strong pain signal, well over the 1 hr threshold. Small, locally owned shop established 2016. Yelp shows only 1 review (thin single-review signal, flagged), reviews found elsewhere (Nextdoor/Networx) praise thoroughness/professionalism/reliability, not contact speed — no direct contradiction. Owner's personal name not found in search (business described only as "locally owned and operated") — flagged for Montague. Reachable via confirmed domain + phone.
- 2026-09-11 (Montague): **found and reconciled a second dropped handoff** — a real enrichment pass for this prospect already existed on master since 2026-09-08 (same squashed commit as ez-electrical-everett-wa, c52dae5, also self-marked "ADVANCED to enriched") but status.md was never updated; sat at `found` for 4 days looking untouched. This run's independent research reached the same conclusions (NO NAME FOUND, GUESSED email, phone confirmed) — real corroboration, merged in one extra detail (an address-collision business ruled out) from the prior pass. Advanced to `enriched`. Flagged in memory/montague.md for Sue/Kevin — worth checking the rest of the backlog for the same issue. See enrichment.md.
