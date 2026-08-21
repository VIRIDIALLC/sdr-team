```
CALL CARD
  Ask for:   NO NAME FOUND     (third confirmed miss across three separate
             research passes)
  Phone:     (256) 399-9190
  Response:  n/a (website track)
  Hook:      "You've got 400+ people following you on Facebook and a local
              'best painter' award, but nobody who lands on your listings
              can actually see your work or book you online."
```

## Company summary

It's Time 2 Paint — 1701 Forrest Ave, Gadsden, AL 35901. Established local
Facebook following (439 likes), a "Quality Business Awards" directory
mention. No response-time/missed-call review text was retrievable
(everything egress-blocked) — the honest pitch is the structural gap
below, not a reputational complaint.

## Website-gap — CONFIRMED a third time, with a nuance worth recording

`itstime2paint.com` **does resolve in DNS** — new information the prior two
passes apparently didn't check. However, the IPs sit on a shared AWS block
used by many unrelated domains (confirmed via reverse-IP search — one
example on the same range redirects to a generic parked-domain/redirect
service), `site:itstime2paint.com` returns zero indexed pages, and a bare
search for the domain returns only unrelated "time2paint"-named businesses
elsewhere and an unrelated for-sale domain. **The domain is registered
(likely defensively, or by a squatter/parking service) but has no built
site** — functionally still "no website," but worth recording as
"registered-but-parked" rather than a flat claim, in case it goes live
later. All other guessed variants (itstime2paintgadsden.com,
timetwopaint.com, its-time-2-paint.com, itstime2paint.net/.org,
itstime2paintal.com) returned NXDOMAIN.

## Email — NOT FOUND

No email surfaced in any indexed snippet (Facebook About, Manta, Yelp,
BBB, Quality Business Awards, YellowPages all either had no visible email
or were egress-blocked for direct fetch). No domain exists to guess a
pattern from either (the parked domain above doesn't count).

## Owner name — still NO NAME FOUND, third straight miss

Tried Alabama SOS guidance, reverse-phone-lookup on (256) 399-9190,
Facebook/review/Nextdoor snippets — nothing named an owner. One "4.9
rating / 136 reviews" figure surfaced from a generic trustindex widget
cache — **flagged as unverified/likely not this business** (no page
content confirmed the reviews were actually It's Time 2 Paint's own) and
not used.

## Gate outcome

- Website-gap: **CONFIRMED** (third pass; domain registered but parked —
  worth a re-check if it ever goes live).
- Email gate: **FAILED** — genuinely not found, no domain to guess from.

**Held at `stage: found`.** Not a dead end — phone is the only reliable
channel; the structural web-presence gap is a clean pitch once reachable.

*Sourcing note: itstime2paint.com, yelp.com, facebook.com, manta.com,
yellowpages.com, qualitybusinessawards.com all returned EGRESS_BLOCKED this
run.*
