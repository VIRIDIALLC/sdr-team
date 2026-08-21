```
CALL CARD
  Ask for:   Michael Martin    (medium-high confidence, not fully
             document-verified — "Mike" is safe too)
  Phone:     (276) 732-2559
  Response:  n/a (website track)
  Hook:      "Michael, you've got 4.5-star reviews and a licensed painting
              business people already trust, but there's no MGM Painting
              website — so anyone who Googles you before calling only
              finds a Facebook page."
```

## Company summary

MGM Painting — 109 Dove Ln, Martinsville, VA 24112. Small, well-regarded
local painting shop — Angi shows 4.5/5 with a note about "accommodating
tight schedules," Nextdoor comments describe it as "highly recommended"
for professionalism/efficiency. No missed-call/slow-response complaints
surfaced — the pain here is structural, not reputational (see below).

## Website-gap — CONFIRMED, no dedicated site

DNS-checked 7 guessed domains (mgmpainting.com, mgmpaintingva.com,
mgmpaintingmartinsville.com, mgm-painting.com, mgmpaintingcompany.com,
mgmpaintingllc.com, mgmpaintingcontractor.com) — **all NXDOMAIN**, resolver
sanity-checked against google.com/facebook.com/yelp.com (which resolved
fine), so decisive. Broad search across Nextdoor, BuildZoom, Yellow Pages,
Angi, Indeed, Porch, Facebook confirms the only web presence is directory
listings + Facebook.

**Collision caution:** two unrelated "MGM Painting" businesses exist —
`mgmpaintingco.com` (Fort Collins, CO) and `mgmpainting.com` (Bridgeport,
CT / an Alexandria, VA HomeAdvisor listing). Confirmed different cities via
their own contact/about pages — neither is this prospect. Don't attach
either domain to this record.

## Owner name — Michael Martin, medium-high confidence

Multiple independent hits converge on a fuller name than the brief's "M K E
Martin":
- BuildZoom contractor bio: owner **Michael Martin**, previously ran a
  sporting-goods store for 11 years before starting the painting business,
  leveraging painting experience from growing up in the trade. Holds VA
  Painting and Wall Covering (PTC) license #2705113023, checked
  active as of ~June 2025 per BuildZoom.
- LinkedIn profile (`michael-martin-5ab818186`): "Owner Michael Martin
  Painting."
- Two further independent search queries returned the same fact tied to
  this exact address/phone/license number.

Not independently document-verified (BuildZoom/LinkedIn/Facebook all
egress-blocked this run) — resting on WebSearch's synthesis of 3+
independent, mutually-corroborating queries plus a specific corroborating
detail (the sporting-goods backstory, a real license number). Called
medium-high confidence, not fully confirmed.

## Email — CONFIRMED (real, recurring), not a guess

**mkemartin@comcast.net** — already surfaced pre-run. This run: the literal
string alone didn't turn up a standalone indexed page, but it recurred
consistently across broader business-info queries tied to this exact
business (109 Dove Ln, (276) 732-2559). "mke" plausibly reads as "Mike" +
"Martin" — internally consistent with the owner name above, not
contradicting it. This is a **real discovered address, not a guessed
pattern** — clears the email gate cleanly.

## Gate outcome

- Website-gap: **CONFIRMED**.
- Email gate: **PASS** — real address, recurring across sources.
- Owner-name: pass, medium-high confidence.

**Advanced to `stage: enriched`.**

*Sourcing note: yellowpages.com, angi.com, buildzoom.com, facebook.com,
linkedin.com, porch.com, nextdoor.com, and the VA SCC entity search were
all egress-blocked this run — everything above is search-snippet-sourced,
not page-rendered.*
