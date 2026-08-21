```
CALL CARD
  Ask for:   NO NAME FOUND — checked about-us page, LinkedIn, BBB, CSLB,
             CA SOS, "President/CEO/owner/founder" searches
  Phone:     (562) 713-5626
  Response:  no verified hook — see note below, don't quote a number
  Hook:      "You list yourselves as over two decades in business, but your
              corporate registration only goes back to 2020 — I'd guess
              that's when you took over or relaunched. Either way, with
              20+ years of trust and only 28 reviews to show for it, you're
              not capturing anywhere near what you've earned."
```

## Company summary

Pro Service Electricians, Inc. — 6528 Greenleaf Ave, Suite 126, Whittier,
CA 90601. Electrical contractor, open 24/7 per marketing copy, "over two
decades" in business claimed. Only 28 Yelp reviews. Suite-number address
(not a yard/warehouse) and no employee-count/fleet/multi-location signal
found anywhere — best read is a small, owner-operator-scale shop despite
the "Inc." entity, though this isn't fully confirmed (see below).

## Owner name — NOT FOUND

Exhaustive checks (about-us page, LinkedIn, BBB, CSLB license lookup, CA
Secretary of State) returned zero named individual. No LinkedIn profile,
no SOS agent-of-record hit, no BBB principal listed in any search result.
Per the never-placeholder rule, leaving the contact-name field empty
rather than guessing — Kevin should open with "the owner" or ask for
whoever handles marketing rather than a name.

## CSLB license — NOT FOUND

cslb.ca.gov itself is blocked to direct fetch in this environment, and no
third-party snippet (BuildZoom, Blue Book) surfaced an actual license
number or status. One unrelated hit surfaced for a different Whittier
electrician ("First Electric," C-10 #1120441) — not this company, don't
confuse them. License status stays an open question, same ad-hoc caution
category as Boldt HVAC (2026-08-11).

## A real correction worth the pitch itself: 2020 vs. "20+ years"

Blue Book's directory lists this entity as established 2020, while the
site/marketing copy claims "over two decades." That's a real discrepancy,
not a data-quality note to bury — likely explanation is a corporate
re-registration or ownership change around 2020 on top of an older trade
business, but that's speculation. Used it directly as the CALL CARD hook
above since it's a genuinely interesting, honest opener rather than a
liability to hide.

## Response-time signal — UNCONFIRMED, likely fabricated, dropped

Rupika's brief cited ~3hr response with 79 locals recently requesting
quotes. A direct re-search for "79 locals" tied to this business found
nothing recurring — the only comparable snippet was an unrelated DC-area
electrician showing a different number. Not using this figure at all
(distinct from the usual "unconfirmed but usable as a question" bucket —
this one doesn't trace to any real source for this business).

## Email — GUESSED, domain confirmed live

No email (real or pattern) surfaced across the website, Facebook, BBB, or
Blue Book listings this run. Domain confirmed live via direct DNS lookup
(proserviceelectricians.com -> 166.117.246.71) — using the standard
guessed-pattern-on-confirmed-live-domain precedent: **info@proservice
electricians.com** (GUESSED, not confirmed).

## Gate outcome

- Email gate: **PASS** (GUESSED on a confirmed-live domain, DNS-verified
  this run).
- Owner-name: not found — left blank per the never-placeholder rule, not a
  gate for package track.
- Response-time: unconfirmed/likely fabricated, dropped.
- License status: open question, flagged for Kevin's judgment, not a
  defined gate.

**Advanced to `stage: enriched`.**

*Sourcing note: every direct WebFetch attempt this run
(proserviceelectricians.com, thebluebook.com, cslb.ca.gov, buildzoom.com,
electricianslist.com) returned EGRESS_BLOCKED — findings above are
search-snippet-sourced except the DNS resolution check on the company
domain and the phone-number reconfirmation (both direct and decisive).*
