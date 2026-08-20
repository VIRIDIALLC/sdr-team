```
CALL CARD
  Ask for:   Wayne (Crandell) — owner, confirmed via multiple independent review mentions, not just the FB handle
  Phone:     (417) 825-4243
  Response:  n/a (website track)
  Hook:      "I noticed Crandell Pest Control doesn't have its own website yet — just a Facebook page — even though you've got 16 five-star reviews in Joplin."
```

## Links
- maps: https://www.google.com/maps/search/Crandell+Pest+Control+LLC+Joplin+MO

## Company summary

Crandell Pest Control LLC — residential/commercial pest control, 2602 S Grand,
Joplin, MO 64804. Strong local reputation: 5-star rating across 16 reviews
(Birdeye / namesandnumbers), reviewers specifically praise affordability and
being "quoted by several other pest control companies" and coming in cheapest.
Owner does the work personally per reviews ("Wayne was always super friendly
and does an amazing job").

## Best contact

**Name:** Wayne Crandell (first name "Wayne" confirmed by name in multiple
independent review snippets on Birdeye/namesandnumbers describing him doing
the work and being quoted directly by customers — not solely inferred from
the Facebook handle "WayneCrandell77"; last name "Crandell" follows from the
business name and matches the FB handle). Reasonably confident but not
document-verified (no MO business filing pulled — see below).

**Email:** NOT FOUND — email-blocked, see gate below.

**Phone:** (417) 825-4243 — 417 is the correct Joplin/southwest-MO area code,
appears consistently across Birdeye and namesandnumbers listings, and is
distinct from the Mesa AZ business's (480) 818-0063 number. Treat as reliable.

**Website:** None. Facebook page only — facebook.com/WayneCrandell77 (page
title reads "Crandell Pest Control LLC | Joplin MO," but the handle itself is
still the owner's personal name, never rebranded to a business handle).

## Website-gap verification (full writeup)

**Gate result: CONFIRMED — Rupika was right, this business has no real website.**

1. **crandellpest.com is a different, unrelated business.** Direct WebFetch
   on the bare domain was blocked by this session's network egress proxy, so
   I verified through independent web-search snippets instead (multiple
   corroborating sources, not a single one):
   - Address: 5225 E Escondido Circle, **Mesa, AZ 85206** (chamberofcommerce.com,
     yellowpages.com, arizona.building-material.org, crandellpest.com's own
     `/service-areas-mesa/` and `/about-mesa/` pages all agree).
   - Phone: (480) 818-0063 — Arizona area code, different from the Joplin
     number entirely.
   - Service area: "Mesa, Gilbert, Chandler, Queen Creek, and the greater East
     Valley of Phoenix, Arizona" plus Show Low/Snowflake/Heber/Taylor (White
     Mountains AZ) — zero overlap with southwest Missouri.
   - Founder: **Preston Crandell**, per his own LinkedIn and a Mesa-local
     "County Advisory Board" bio — founded the Mesa business in 2002, started
     in pest control at 15 in Arizona. Confirmed as a distinct person from
     "Wayne" of the Joplin business — LinkedIn/search results explicitly note
     this looks like a separate operation.
   - BBB has a business profile for "Crandell Pest Control" filed under
     **Mesa, AZ**, not Joplin/Missouri.
   - Conclusion: same surname, coincidentally same trade name, two unrelated
     family businesses ~1,300 miles apart (AZ vs MO). This is not the Joplin
     business's site.

2. **No other domain exists for the Joplin business.** Searched
   "Crandell Pest Control" + Joplin/Missouri/website/BBB/email — every
   result either points back to the Mesa AZ domain or to the Joplin
   business's presence on third-party listing/review sites (Birdeye,
   namesandnumbers, Facebook, ZoomInfo employee-directory stub). None of
   those listings carry a website field for the Joplin location — where
   directories usually show a "Visit Website" link for businesses that have
   one, this one consistently doesn't.

3. **BBB has no Joplin profile either.** BBB's Joplin, MO pest-control
   category page did not surface a Crandell listing (only the unrelated Mesa
   AZ profile exists in BBB's system).

Net: this is a real, well-reviewed local business (16 five-star reviews,
active for enough time to build that reputation) running on Facebook +
word-of-mouth only, with zero dedicated web presence. Confirmed pitch basis.

## Email — GATE FAILED, held at `found`

Actively checked: Facebook page contact info (blocked from direct fetch by
egress proxy, but search-indexed snippets of the FB page surfaced no email),
Birdeye listing, namesandnumbers listing, ZoomInfo employee-directory stub
(shows a page exists but no email surfaced in results — that stub also
appears tied to the Mesa entity, not Joplin), BBB (no Joplin profile at all).

No email address for the Joplin business turned up anywhere. I also
deliberately did **not** guess a `@crandellpest.com` address — that domain
is confirmed to belong to the unrelated Mesa, AZ business, so a guess against
it would be actively wrong, not just unconfirmed. There is no other domain
tied to this business to build a guess from (that's the whole premise of the
website-gap pitch), so no responsible guessed pattern is available either.

**Per the email gate rule: this prospect is held at `stage: found`, not
advanced, until Kevin or a later pass turns up an email (e.g., calling the
number directly is likely the fastest path — his own review says he's easy
to reach).**

## Overall enrichment gate outcome

- Website-gap gate: **PASS** (confirmed genuine, well-sourced).
- Contact-name gate: reasonable pass — "Wayne" confirmed by name in
  independent review text, last name inferred.
- Email gate: **FAIL** — no email found, no legitimate domain to guess from.

Per persona rules, advancing to `enriched` requires BOTH the website-gap gate
and the email gate to pass. Email gate failed, so `status.md` stage is left
at `found`, not changed to `enriched`.
