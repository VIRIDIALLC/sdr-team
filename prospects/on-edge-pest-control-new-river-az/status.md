---
stage: found
track: package
quote_stage: none
---

## Log

- 2026-09-03 (Rupika): found via the Yelp "yelp advertisers" response-time
  technique (Surprise AZ pest control search), added to pipeline. Solo
  owner-operator with two stacked pain signals — real risk of dropped
  follow-through under load, not a fake/failing business (positive
  reviews exist alongside the complaints). Address is unresolved across
  three sources — flagged hard for Montague, do not assume New River vs.
  Surprise vs. Chandler without checking. See brief.md.
- 2026-09-03 (Montague): **Email gate FAILED — held at `found`.** A
  matching address, Brandyn@onedgepest.com, surfaced verbatim in search
  results (not a pattern guess) — but `site:onedgepest.com` returns zero
  indexed pages and the domain itself couldn't be reached to confirm it's
  live. Given this team's repeated recent hits on search-tool-asserted
  emails that didn't hold up on a second look (most recently twice in
  today's Downey Exterminators pass), treating an unconfirmed, unindexed
  domain as too thin to pass the gate rather than presenting it as
  found — recommend a cheap manual re-check (e.g. a test send) before
  using it. Address resolved to a lean, not a fact: phone
  (480) 200-6116 ties the Chandler LLC-filing address, the Surprise
  HomeAdvisor address, and the New River Yelp geo-tag together as one
  business, and Surprise/New River (~20mi apart, north Phoenix valley)
  are more mutually consistent than the Chandler filing address, which
  is likely a stale/registered-agent address from the 2021 filing —
  write up as "north-valley (Surprise/New River/Anthem) service area,"
  not a single confirmed address. Response-time (~3hrs/93%) reproduced
  on a second search pass but traces to the Angi/HomeAdvisor listing,
  not a Yelp badge directly — carry forward labeled as Angi's figure,
  not Yelp's. Owner corroborated as "Brandyn" (multiple independent
  review mentions address him by first name only) — "Grantham" has no
  corroboration outside the LLC filing, so lead outreach with "Brandyn,"
  not the surname. No AZ OPM license record found (one 2019 "expired
  applicators" PDF hit for a "Grantham" is unreadable/unconfirmed and
  predates the 2021 LLC — not usable). No live website found. Not a dead
  end — real solo operator, real pain signal, just not currently
  reachable by a confirmed email. See memory/montague.md.
