CALL CARD
  Ask for:   Bryan            (Bryan Rudy, Managing Member — CONFIRMED via
             BBB)
  Phone:     (919) 930-7645   (a second number, (919) 538-4603, also appears
             on the same BBB record — not a conflict, both belong to this
             business)
  Response:  n/a — a pre-2026-09-10 Yelp figure exists (see below) but is not
             usable as fact or hook under the current compliance gate.
  Hook:      "You went from Air Force aircraft mechanic to Porsche mechanic
              to roofer — that same hands-on, no-shortcuts attention is
              probably why you're still walking every roof inspection with
              the homeowner yourself."

## Email — GUESSED (not confirmed), on a confirmed-live domain

baccroofing.com is real and active — it resolves and BBB independently
lists it as the business's own site — but every direct fetch attempt (both
WebFetch and raw curl, homepage/about/contact) redirects to a SiteGround
bot-challenge page with no retrievable content. BBB's profile lists no
email. Facebook is login-walled. A search-summary result rendered only a
placeholder in place of an address (the site appears to obfuscate its email
via JS/image) — discarded as unusable, not reported as a finding.

Using the **guessed-pattern-on-confirmed-live-domain** precedent (same
convention applied throughout this run's other bot-walled-but-clearly-real
domains): **info@baccroofing.com**, flagged GUESSED — explicitly
domain-pattern speculation, not sourced from any page. If Elly wants a
second candidate to test, bryan@baccroofing.com is the same tier of guess.

## Owner — Bryan Rudy, CONFIRMED, strong personal detail

BBB profile (direct fetch): "Mr. Bryan Rudy, Managing Member" — the
strongest single confirmation available, independently corroborated by
multiple search results describing him as owner/founder.

**Personal detail for a call opener** (search-engine-corroborated across
multiple independent snippets tracing to baccroofing.com/about and Birdeye
reviews — the raw page itself couldn't be loaded due to the bot-wall, so
this is search-corroborated rather than first-hand page-verified): US Air
Force Reservist, 17+ years of service, background as an aircraft mechanic;
previously a Porsche mechanic before roofing; father of two, in Wake County
since 2005; got into roofing through a mentorship under another local
roofing-company owner. Reviews consistently describe him personally
walking homeowners through roof inspections photo-by-photo, distinguishing
"fix now" from "just monitor" — a repeated, specific "meticulous,
no-shortcuts" reputation, not generic filler.

## NC general contractor license — searched directly, no match found

Queried nclbgc.org's live AJAX search endpoint directly (no bot-block on
this one, real form submissions succeeded) against company name ("BACC" /
"BACC Consulting"), owner name ("Bryan Rudy" / "Rudy"), city ("Willow
Spring, NC" — 227 results scanned), both phone numbers, and the street
address — **no match on any vector.** NC only requires a GC license for
contracts over $40,000, and typical roof repair/replacement work is often
under that threshold — this is a documented "not found," not a red flag or
proof of no license.

## Other confirmed facts (BBB, direct fetch)

Legal entity is **"BACC Consulting, LLC"** DBA "BACC Roofing &
Restoration" — worth knowing if anyone searches under the legal name. LLC
started 3/21/2019, doing business locally since 12/5/2019 (~7 years,
matches the brief). BBB-accredited since 12/11/2025, A+ rating. Address
matches the brief exactly.

## The response-time figure — carried forward as history, not as a claim

Yelp shows "responds in about 9 hrs" per the original brief — single-
source, never independently re-pulled this run (paused per the 2026-09-10
compliance ruling). Not asserted as fact or used as a hook; recorded here
for context only.

## Sourcing note

BBB profile and the NCLBGC license-search endpoint both fetched directly
and successfully. baccroofing.com (all pages, both WebFetch and curl) and
Facebook both blocked. Yelp never fetched directly, per the no-scrape rule.
