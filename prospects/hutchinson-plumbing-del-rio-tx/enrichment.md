```
CALL CARD
  Ask for:   Joseph             (Hutchinson — President, confirmed
             multi-source: CorporationWiki, BuildZoom, opengovus; no
             informal "Joe" usage found anywhere, use "Joseph")
  Phone:     (830) 488-4882
  Response:  n/a (website track)
  Hook:      "You've built a real 10-year business here — BBB profile,
              PPP loan paid in full — but there's still no website
              anywhere for people to find you outside a phone call or
              Facebook."
```

## Links
- facebook: https://www.facebook.com/HutchinsonPlumbingDelRio/
- maps: https://www.google.com/maps/search/Hutchinson+Plumbing+2400+Veterans+Blvd+Ste+16C+Del+Rio+TX+78840

## Company summary

Hutchinson Plumbing Co. — 2400 Veterans Blvd Ste 16C, Del Rio, TX 78840.
Owner Joseph R. Hutchinson (President), established 2016, incorporated
2018, PPP loan reported "Paid in Full" by SBA. Has a BBB profile (not
accredited, no closure flag) and two Facebook pages (likely duplicate/
legacy listings for the same business).

## Website-gap — CONFIRMED ABSENT (medium-high confidence)

Direct DNS checks on 9 guessed domains (hutchinsonplumbingdelrio.com,
hutchinsonplumbingtx.com, hutchinsonplumbingco.com,
hutchinsonplumbingdelrio.net, hutchinsonplumbingtx.net,
hutchinsonptx.com, hutchinsonplumbingcodelrio.com,
hutchinsonplumbingcompany.com, hutchinsonplumbingdelriotx.com) — all
NXDOMAIN. One additional guess, hutchinsonplumbing.com, DOES resolve —
but search results tie its content to the unrelated Cherry Hill, NJ
"Hutchinson Cooling, Plumbing, Heating and Electrical" business (whose
actual branded domain is hutchbiz.com), never to Del Rio, TX or (830)
488-4882. Could not confirm this directly (egress-blocked to that
domain), so this reads as a corroborating absence-of-evidence rather
than a page-verified fact — no snippet anywhere pairs a URL with this
business's phone/address. One search-summary claim that BBB shows a
"Visit Website" link for this listing did not survive a follow-up query
for the actual URL (hedge, not a real URL) — treated as unreliable, not
reported. **Website-gap gate: satisfied.**

## Owner name — Joseph R. Hutchinson (unchanged, corroborated again)

Already well-established from prior sourcing (CorporationWiki, BuildZoom,
opengovus). This run specifically checked for an informal "Joe" usage in
reviews/Facebook — found none; every source formalizes to "Joseph R.
Hutchinson." Use "Joseph."

## Email — NOT CONFIRMED, likely fabricated (required gate, not cleared)

hutchinsonptxbusiness@gmail.com was carried forward from Rupika's
sourcing flag as a value to verify by, not an asserted fact. This run's
verification found it does NOT hold up: an exact-literal-string search
(quoted, and the local-part alone) returned zero relevant results —
not even the BBB or Facebook pages for this business surfaced, which is
what a genuinely-indexed contact email would produce. The WebSearch AI
summary nonetheless asserted it confidently every time, worded almost
identically — a textbook instance of the AI-search-fabrication pattern
logged repeatedly since 2026-08-13 (the summarizer appears to be
pattern-completing owner-surname + service + state + "business" + gmail
rather than citing a real source). Facebook and BBB (the places this
could be authoritatively confirmed) were both egress-blocked this run.
Per the "a guess with a contradiction is worse than a guess with
silence" convention, **not reporting this as a usable email. Holding at
`stage: found`.**

## Collision risk — ruled out

Confirmed distinct, unrelated "Hutchinson Plumbing/Heating" businesses
in Taylorsville NC, Cherry Hill NJ, and Sea Isle City NJ — none share
this business's phone or Del Rio, TX address.

## Gate outcome

- Website-gap: **CONFIRMED** (medium-high confidence).
- Email gate: **FAIL** — the one candidate does not survive
  verification, treated as fabricated.
- Owner-name: pass, Joseph R. Hutchinson, high confidence.

**Held at `stage: found`.** Real, well-documented 10-year business with
a confirmed website gap — just not currently reachable by a verified
email. A human opening the Facebook or BBB page directly (blocked to
this environment's egress proxy) would likely close this gap.

*Sourcing note: bbb.org, facebook.com, bizapedia.com, buildzoom.com,
opengovus.com, and hutchinsonplumbing.com were all EGRESS_BLOCKED to
direct WebFetch this run — findings above are search-snippet-sourced
except the DNS resolution checks, which were direct and decisive.*
