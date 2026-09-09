CALL CARD
  Ask for:   Joseph "Joe"       (Voithofer — Operations Manager, current
             BBB-listed contact. Note: founder Vaughn Voithofer also goes
             by "Joe" — a casual "is Joe around?" won't disambiguate them,
             worth knowing before dialing.)
  Phone:     (304) 292-2055
  Response:  n/a — website-track find, no Yelp response-time signal
  Hook:      "You don't have a website — just Facebook and a handful of
              directory listings, after 25+ years in business. Did you
              know that?"

## Website-gap — CONFIRMED, checked at the DNS/HTTP level, not just search

- `windowbutler.com` resolves, but 301-redirects to `softwashbutler.com` —
  a different exterior-cleaning business in Ottawa, Canada. Not them.
- `windowbutlerwv.com` resolves (AWS IP) but serves a website-builder
  "Site not found — not published" error page — someone started building a
  site here and it never went live. Worth flagging that a prior website
  attempt may exist, but it isn't a live site today.
- `thewindowbutler.com` redirects to a BuyDomains.com "domain for sale"
  parking page — squatted, unrelated.
- `windowbutler.net`, `windowbutlerwv.net`, `windowbutlermorgantown.com` —
  none resolve at all.
- Broad searches return only directory/aggregator listings (Facebook,
  Nextdoor, HomeAdvisor, BBB, Alignable, Yellow Pages, Angi, D&B, Chamber
  of Commerce, YellowBot, free-business-directory.com); BBB's own "Website"
  field just points to their Facebook URL, meaning BBB couldn't find one
  either.
**Caught a search-tool hallucination worth flagging on its own:** an
AI-synthesized search answer repeatedly asserted (across multiple
independent queries) that the site was "windowbutlerwv.com" with email
"windowbutlerwv@gmail.com," and separately "WINDOWBUTLER.NET" — none of
these ever appeared in actual search-result links/snippets, and direct
verification disproved or couldn't confirm any of them. Not used. A
distractor also exists — "The Window Butler," Columbus OH, a different,
unrelated 9-employee company on LinkedIn — don't confuse the two.

## Email — NOT FOUND, gate fails

Checked directly (fetched, not just snippets): BBB ("Email: Not publicly
listed"), Alignable ("Not listed"), Yellow Pages ("Not provided"),
Facebook (login wall). HomeAdvisor, Chamber of Commerce, D&B, and
YellowBot all 403'd on direct fetch with no email in search snippets
either. No real, verifiable email exists in any reachable source. The one
candidate that surfaced (windowbutlerwv@gmail.com) is the hallucinated
one above — not used. **Held at `found` per the required gate.**

## Owner — two real people, not a name-ambiguity placeholder situation

- **Vaughn "Joe" Voithofer** — repeatedly cited as founder (started 1999).
- **Joseph Voithofer** — Operations Manager, and the named principal
  contact on BBB's profile (direct fetch) — the most authoritative single
  source available. BBB also surfaces the legal entity name, Jace
  Enterprises, LLC (business started 7/13/2004 per BBB, incorporated as an
  LLC 6/1/2023) — likely 1999 marks when Vaughn started operating and
  2004/2023 mark formal entity registration, not a conflict. A
  coincidentally-named "JACE, INC." (an unrelated Farmington WV real-estate
  corp) surfaced as a false lead and was ruled out.
These read as two distinct people (likely founder/father and current
manager/son), both colloquially "Joe" — a genuine ambiguity, not a data
error. Leading the CALL CARD with Joseph as the current point of contact,
with the shared-nickname note so Kevin isn't caught off guard.

## Phone — CONFIRMED, 2 independent direct-fetched sources

(304) 292-2055 confirmed via direct fetch of both BBB and Yellow Pages
(two independent primary listings), further corroborated by Chamber of
Commerce, D&B, and multiple search snippets. **Marking `call_ready: yes`.**
Secondary numbers seen once each, not cross-verified: BBB's alternate
(304) 216-4832, and a Yellow Pages fax (304) 292-2279 — not used as
primary.

## Address discrepancy — flagged, not resolved

BBB gives 116 Kay St, Morgantown, WV 26501; every other source (Yellow
Pages, HomeAdvisor, first search results) gives 661 Standard Ave,
Morgantown, WV 26501. Could be a registered/mailing vs. operating address
— not resolved here.

## Why they fit

Locally owned window cleaning and power/soft-washing business, founded
1999 — 25+ years operating in a ~30k-population university town with zero
owned web presence. A genuinely established local brand where anyone
searching for it today lands only on Facebook and directory pages, not a
site they control — a strong website-track story.

## Status

HELD at `found` — email gate fails, no domain to guess from. `call_ready:
yes` added (phone confirmed 2 independent sources).
