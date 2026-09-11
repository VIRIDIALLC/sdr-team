CALL CARD
  Ask for:   NO NAME FOUND — checked the site, Facebook (login-walled), BBB
             (no Albuquerque-specific profile exists), NM SOS (interactive
             form, not fetchable), NM pesticide-applicator lookup (not
             fetchable), Bizapedia (CAPTCHA-blocked), LinkedIn. Business
             describes itself everywhere only as "locally owned and
             operated." Two technician first names ("Jeffrey," "Geremy")
             surfaced in review-snippet summaries but are not identified as
             the owner anywhere — not used.
  Phone:     (505) 962-2296
  Response:  n/a — a pre-2026-09-10 Yelp figure exists (see below) but is not
             usable as fact or hook under the current compliance gate.
  Hook:      no verified hook.

## HANDOFF-INTEGRITY NOTE — a prior pass already reached the same conclusions

A real enrichment pass for this prospect already existed on `master` since
2026-09-08 (inside squashed commit `c52dae5`, itself marked "Status:
ADVANCED to `enriched`" in its own text) — but `status.md` was never
updated to match, so this sat at `stage: found` for 4 days looking
untouched. Same dropped-handoff pattern caught on ez-electrical-everett-wa
this run — see memory/montague.md for the full flag to Sue/Kevin. Good
news here: this run's independent research reached the same core
conclusions as that prior pass (NO NAME FOUND, GUESSED email on the same
address, phone confirmed) — two independent passes agreeing is real
corroborating confidence. Merged in below the one piece of unique value
from the prior pass this run's research didn't surface.

## Email — GUESSED (not confirmed), on a confirmed-live domain

No email is discoverable anywhere: apexpestcontrolnm.com's own pages
(homepage, /contact, /about, /contact-us — all fetched directly; /contact
and /about 404, /privacy-policy literally says "coming soon") show none.
Nextdoor's listing for this business explicitly states "owner name & email:
not provided on this page." A search-AI summary asserted
`apexpestcontrolnm@gmail.com` — a literal-string verification search found
the citations it offered (homepage, Nextdoor, an unrelated Wikipedia page)
do not actually contain that address; discarded as an unsupported
AI-summary artifact, the same failure mode logged repeatedly since
2026-08-13.

Using the **guessed-pattern-on-confirmed-live-domain** precedent (domain is
real, active, and independently corroborated by phone/address across
multiple sources): **info@apexpestcontrolnm.com**, flagged GUESSED, not
confirmed.

## Owner name — genuinely NOT FOUND despite a real effort

No BBB profile exists for this specific Albuquerque business (only
same-named businesses in CT, TX, IN turned up in search — ruled out). NM
SOS and NM pesticide-license portals are interactive-form-only, not
fetchable this session. Facebook is login-walled. Bizapedia is
CAPTCHA-blocked. A LinkedIn hit for "Dustin Barousse — Owner, Apex Pest
Control" was checked and ruled out — he's tied to a different **Apex Pest
Control in Knoxville, TN** (confirmed via ZoomInfo/BBB), not this business.
Left blank per the never-placeholder rule.

**From the 2026-09-08 pass:** "All-Star Pest Control Inc" (owner Raymond
Ortiz) shares the same street address in some directories but a different
phone number — almost certainly shared/adjacent commercial space, not the
same business. Noted but not used.

## Identity sanity-check — CONFIRMED, single business, not a collision

Domain, phone (505-962-2296), and address (10101 De Vargas Rd SW,
Albuquerque) all cross-confirm across the live site, Nextdoor, and Networx
as one consistent entity. Several other unrelated "Apex Pest Control"
businesses exist nationally (CT, TX, OH, NC, AK, AZ, KY, TN) — none of them
are this prospect.

## Duplicate Yelp listing — informational, unresolved

Two distinct Yelp listings for this same address/phone appear to exist
(`apex-pest-control-albuquerque` and `apex-pest-control-albuquerque-2`) —
possibly a duplicate/merged-listing situation worth a human glance.
Secondhand aggregator review counts disagreed with each other (16/3.5★ vs.
25+/4.9★) and with the brief's "1 review, 90 photos" — treated all of these
as noise; only a direct human look at the real Yelp page should be trusted
for the current count/rating (per the hard gate's own human-observation
standard).

## The response-time figure — carried forward as history, not as a claim

Yelp shows "responds in about 1 day" per the original brief — single-
source, never independently re-pulled this run (the "yelp advertisers"
technique is paused per the 2026-09-10 compliance ruling). Not asserted as
fact or used as a hook; recorded here for context only.

## Sourcing note

apexpestcontrolnm.com homepage and Nextdoor fetched directly and
successfully. /contact, /about, /contact-us, /privacy-policy all 404
beyond the homepage. Facebook (login wall), LinkedIn (blocked), Bizapedia
(CAPTCHA), NM SOS and pesticide-license search tools (form-based, not
GET-fetchable) all blocked. Yelp never fetched directly, per the no-scrape
rule.
