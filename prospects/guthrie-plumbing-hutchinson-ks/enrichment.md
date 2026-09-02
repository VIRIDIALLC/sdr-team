```
CALL CARD
  Ask for:   NO NAME FOUND — checked HutchConnect, Facebook, BBB, KS SOS,
             LinkedIn, people-search; only ever "P. Guthrie" anywhere
  Phone:     (620) 899-6709
  Response:  n/a — website track, no Yelp response-time data
  Hook:      no verified response-time hook (this is a website-gap pitch)
             — lead with: "You're a Master Plumber with 12 years in the
             trade and a name people already trust in Hutchinson, and
             there's nowhere online to send a new customer — no site,
             nothing to click."
```

## Links
- website: none found — no owned domain
- maps: https://www.google.com/maps/search/Guthrie+Plumbing+And+Services+1807+S+Buhler+Rd+Hutchinson+KS

## Company summary

Guthrie Plumbing And Services (directories brand it "P. Guthrie Plumbing
Services"), 1807 S Buhler Rd, Hutchinson, KS, (620) 899-6709.
Family-owned, ~12 years in the trade, Master Plumber certified (Kansas
has no statewide plumber license, so this is a real local credential,
not a generic claim). Services include residential plumbing, remodels,
new construction, and wells per HutchConnect. Serves Hutchinson and
Reno County broadly. Zero owned web presence.

## Website-gap gate — VERIFIED, CONFIRMED

DNS-checked 7 guessed domains: `pguthrieplumbing.com`,
`guthrieplumbingks.com`, `guthrieplumbingandservices.com`,
`pguthrieplumbingservices.com`, `guthrieplumbinghutchinson.com` — all
NXDOMAIN. Two domains *do* resolve (`guthrieplumbing.com`,
`guthrieplumbingservices.com`, both parked on the same GoDaddy
parking IP) but both are confirmed decoys — the same-name business at
that URL is an unrelated "Guthrie Plumbing Services Inc." in Elburn, IL
(different phone, different state). Every directory (Yelp, Facebook,
HutchConnect, Yahoo Local, BBB) treats this business as no-website.
**Website gate: PASSED**, cleanly.

## Email — PASSED (directly-listed, consistent across sources)

**Guthrieplumbing@hotmail.com** — appears paired with this exact
business's name, address, and phone consistently across multiple
independent directory sources. No independent source contradicted it or
offered a conflicting address. Not owner-confirmed from an authenticated
channel, but the consistent co-occurrence with the same address+phone
across sources is real corroboration, not a scraped mismatch. **Email
gate: PASSED.**

## Best contact — owner's full first name NOT FOUND (real gap, not a guess)

Every source checked — including the LLC filing name itself as indexed
— renders the owner only as **"P. Guthrie."** Tried HutchConnect,
Facebook About, Kansas SOS business entity search, BBB, LinkedIn,
county parcel/property records, and people-search sites; also checked
plausible full names (Patrick/Paul/Philip/Peter/Preston Guthrie) against
Hutchinson, KS specifically — no match. Found LinkedIn profiles of other
unrelated Guthries in plumbing elsewhere (Philip Guthrie in a different
state, Ryan Guthrie, Bill Guthrie, Wayne Guthrie) — **do not use any of
these, none are tied to this business.** Per the never-placeholder rule,
CALL CARD stays "NO NAME FOUND" rather than guessing a first name from
the initial. Kevin should address the call to the business or ask for
"the owner" specifically, not a guessed first name.

## Other notes

- Direct WebFetch of HutchConnect, Facebook, BBB, Kansas SOS, and county
  parcel/GIS pages was blocked by this environment's egress proxy the
  whole run (same recurring pattern logged since 2026-08-02) — every
  finding above is search-snippet-sourced except the DNS resolution
  checks, which were direct and decisive.
- A Yahoo Local snippet hinted at a BBB "A" rating for a plumber at this
  phone number, but the BBB profile itself couldn't be opened directly
  to confirm it's specifically this business's rating rather than a
  category-page artifact — flagged as unconfirmed, not used as a claim.
- Worth a retry on the owner-name question if this environment's fetch
  access to HutchConnect/BBB/KS SOS ever broadens — those are exactly
  the sources most likely to hold a full first name and none were
  reachable this run.
