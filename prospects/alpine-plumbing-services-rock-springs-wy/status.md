---
stage: found
track: website
quote_stage: none
---

## Links
- maps: https://www.google.com/maps/search/Alpine+Plumbing+Services+Rock+Springs+WY

## Log

- 2026-08-30 (Rupika): found, added to pipeline. Banked candidate from the
  2026-08-28 run's Rock Springs WY pass, queuing directly now rather than
  stacking a third same-city/same-vertical prospect into that run's batch
  (All Tech Plumbing & Construction LLC, also Rock Springs WY, is already
  in the pipeline at `stage: drafted`). Alpine Plumbing Services is
  Facebook-only — no dedicated website found. Three other Rock Springs
  plumbers checked in the original 2026-08-28 pass had real dedicated
  sites (Elite Plumbing Services, Aspen Mountain Plumbing, Vaughn's
  Plumbing & Heating), confirming the gap is specific to this business.
  Owner not yet found. Not independently re-verified this run (per the
  2026-08-28 note this candidate was already checked, just held back for
  batch-size discipline) — Montague should still do the standard
  website-gap and email-gate checks fresh, same as any other `found`
  prospect, rather than treating "banked" as "pre-cleared."
- 2026-08-30 (Montague): website-gap reconfirmed DNS-decisive (6 guessed
  domains all ENOTFOUND — alpineplumbingservices.com/.net,
  alpineplumbingwy.com, alpineplumbingrocksprings.com,
  alpineplumbingservicesrocksprings.com, alpineplumbingofrocksprings.com).
  Only confirmed web presence is facebook.com/AlpinePlumbingServices/
  (name+location matched in search), which this environment's egress
  proxy blocked from direct fetch, so the About/contact section couldn't
  be read. Owner name: NOT FOUND despite checking BBB, WY SOS, and
  directory searches — left blank per the never-placeholder rule.
  Phone: could not confidently confirm — every number/address pair search
  surfaced for "Alpine Plumbing" near Rock Springs actually belongs to a
  different, similarly-named entity ("Alpine Plumbing & Heating LLC,"
  WY-SOS-registered in Laramie/Bosler, WY, filing 2021-000999584) whose
  own search results were internally self-contradictory across two
  different address/phone pairs for the same listing — discarded both
  rather than risk attributing a wrong number to this business. Collision
  risk flagged as real and non-trivial: "Alpine Plumbing" is a common name
  nationally (distinct unrelated businesses found in Truckee CA, Pagosa
  Springs CO, Stanwood WA, Billings MT, Odessa FL, Brookfield/Milwaukee
  WI, Salt Lake County UT, Grand Rapids MI, plus the Laramie/Bosler WY one
  above) — anchor strictly on the Rock Springs, WY Facebook page identity,
  do not merge contact info from any of those. **Email gate FAILED** — no
  directly-listed email found anywhere, and no live domain exists to
  ground even a guessed pattern (Facebook itself wasn't readable). Held at
  `found`. Not a dead end on the business — the website-gap fit signal is
  decisively confirmed — just currently unreachable except possibly via
  Facebook Messenger, which this environment can't access. See
  memory/montague.md.
