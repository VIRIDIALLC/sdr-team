CALL CARD
  Ask for:   NO NAME FOUND — checked Facebook (blocked), BBB, Yelp, reviews,
             VT SOS filing (portal unreachable); nothing surfaced.
  Phone:     NOT CONFIRMED — see below, one candidate number failed
             verification
  Response:  n/a — website track, no response-time signal sourced
  Hook:      no verified hook — lead with the website gap itself

## Website-gap verification — CONFIRMED, no real website exists

Raw DNS sweep on 10 plausible domain guesses (cvroofingandsiding.com,
cvroofingsiding.com, cvroofingvt.com, cvroofingandsidingvt.com,
cvroofsiding.com, cvroofingsidingvt.com, cv-roofing.com,
cvroofingvermont.com, cvroofingandsidingvermont.com, cvroofingsidingllc.com)
— all NXDOMAIN. Search-based verification corroborates it: results surface
only the Facebook page, generic directory category pages, and the
already-ruled-out cvroofers.com collision (Champlain Valley Roofers,
Castleton VT). No dedicated live domain exists. **Verdict: CONFIRMED.**

## Contact info — NOT RESOLVED, real environment limitation, not a dead end on the business

Facebook's login wall blocked every direct-fetch attempt at
facebook.com/CVRoofingandSiding (desktop, /about, and mbasic all blocked).
No BBB, Yelp, HomeAdvisor/Angi, Manta, or Chamber of Commerce listing found
under this business name — only unrelated same-named businesses nationally
and unrelated Rutland-area competitors (Vermont Roofing Co., Rutland Roofing,
King's Roofing, 802 Roofing & Exteriors).

**Flag — a phone number (802-353-3719) surfaced in one WebSearch summary
attributed to this business but FAILED independent verification**: searching
that number directly returns nothing tying it to this business, only an
unrelated Colchester VT residential listing. The research pass also caught
the search tool asserting other specific claims ("licensed and insured,"
"401 Facebook likes," "CV Roofing and Siding LLC") verbatim with no
underlying source snippet ever showing that text — a real instance of this
pipeline's recurring failure mode (search-tool synthesis presenting
unsourced claims with confidence). **Do not use 802-353-3719 or the "LLC/
licensed and insured" claims anywhere — treat as unverified, likely
fabricated.**

## Email — NOT FOUND

No confirmed domain exists to guess a pattern from, and the Facebook page
couldn't be reached to check for a listed email. No directory surfaced one
either.

## Owner name — NOT FOUND

No VT SOS filing, BBB profile, review mention, or reachable Facebook About
text surfaced an owner name. VT SOS's online business-filings portal
(sosonline.vermont.gov, as guessed) returned a DNS failure — the correct
portal URL wasn't reachable this run; a manual check at the real
sos.vermont.gov business-filings page is the next step if this gets
revisited.

## Phone — NOT CONFIRMED

Only one candidate number surfaced and it failed to corroborate on a second
source (see flag above) — does not meet the 2-source bar for `call_ready`,
and shouldn't be used at all given the fabrication risk.

## General texture

The clean, confirmable story is the gap itself: a real local Rutland VT
roofing/siding contractor with a live Facebook presence (the page itself is
real and consistently indexed) but genuinely no owned web domain, in a market
where several real competitors (Vermont Roofing Co., Rutland Roofing, King's
Roofing) do have sites — useful market-contrast texture for outreach, not a
fact about this specific prospect.

## Sourcing note

DNS checks run directly via Bash — decisive. Facebook blocked by login wall
on every attempt (desktop, /about, mbasic). DuckDuckGo HTML fetch hit a
CAPTCHA; Bing fetch returned irrelevant results. **Next step, if pursued
again: this needs a human to open facebook.com/CVRoofingandSiding directly
while logged in and read the About/Info tab** — that's the one channel
automated tools genuinely can't get past here.

**Recommendation: HOLD at `found`.** Website-gap gate confirmed, but email
gate fails with no domain to guess from, and the one phone lead is
unverified/likely fabricated — not `call_ready` either. Not a dead end on
the business itself, just currently unreachable by any channel this pass
could verify.
