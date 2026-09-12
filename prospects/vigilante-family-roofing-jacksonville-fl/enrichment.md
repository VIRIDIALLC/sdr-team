CALL CARD
  Ask for:   Richard (Vigilante) — owner, personally reviews/oversees every job, confirmed via customer
             review + company's own marketing copy (see below)
  Phone:     (904) 521-8868
  Response:  no verified hook from a response-time signal — package-track lead, not Yelp-response-time sourced
  Hook:      "You personally review every job before it goes out the door — when you're up on a roof, who's
              grabbing the phone on a new estimate call?"

## Company summary

Vigilante & Family Roofing Services, LLC — 4851 Rosselle St Unit 2, Jacksonville, FL 32254. Founded 2018 by
**Richard Vigilante** (drawing on 40+ years of roofing-industry experience per the company's own marketing,
via Facebook search results) and **Jeanette (BBB spells it "Jeannette") Shelton**, who BBB lists directly as
"Jeannette L Shelton, Co-Owner / Manager" and who Rupika's brief identifies as the FL license holder of record.
FL Certified Roofing Contractor license #CCC1331537, GAF-certified. Not a franchise.

## Best contact

**Name:** Richard Vigilante — confirmed two independent ways: (1) a real customer review quoted directly on
BuildZoom's contractor page for this business ("This is the fourth job we have done with Richard Vigilante.
As always, professional, considerate, and with close attention to detail" — I fetched this page myself and
that's the literal review text on it), and (2) the company's own marketing language, per Rupika's brief.md,
stating every job is "individually reviewed and overseen by owner Richard Vigilante." Jeanette Shelton is
independently confirmed as Co-Owner/Manager via BBB's own business profile (fetched directly). Real names,
not placeholders.

**Email — NOT FOUND, honest miss.** Checked:
- **The business's own site (vigilanteroofing.com)** — could not load it at all. Every attempt (WebFetch, and
  a headless Playwright browser) hit `ERR_CONNECTION_RESET` / returned empty content, repeatedly, across
  multiple pages (home, about, contact). This reads as a bot-wall or WAF blocking automated access, not a
  Yelp-scraping issue (this is their own site, not Yelp) — flagging for Sue/Kevin in case someone with a
  normal browser wants to check the site directly; I did not attempt to bypass or spoof anything.
- **BBB profile** — phone only, no email listed.
- **BuildZoom contractor page** — DOES show a Cloudflare-obfuscated email link, but I decoded the actual
  cipher myself (not just trusted the placeholder or an AI summary) and it resolved to
  `buildzoomsupport@blockrenovation.com` — that's BuildZoom's own platform support address, not this
  business's email. Caught and discarded.
- **floridaroofing.directory listing** — same pattern: has a Cloudflare-obfuscated email, decoded it myself,
  resolved to `ryan@springdalesolutions.com` — an unrelated third party (looks like the directory site's own
  admin/webmaster), not Vigilante's email. Caught and discarded.
- **Facebook page** — hit a login wall, couldn't see the About/contact section.
- Google searches for the business name + gmail/outlook/email patterns returned nothing relevant.

Two separate Cloudflare-obfuscated "email found!" leads both turned out to be unrelated third parties once
actually decoded — noting this explicitly since it's exactly the kind of plausible-looking-but-wrong result
the sourcing rules warn about. **No real email found after an honest, thorough effort. Not advancing to
`enriched`.**

**Phone — confirmed in two independent sources, CALL-READY:** (904) 521-8868, matching directly on both the
BBB profile and the floridaroofing.directory listing (both fetched directly by me, not just search snippets).
Also consistent with Rupika's brief and every search result. `call_ready: yes` added to status.md frontmatter,
`call_ready_source: BBB profile + floridaroofing.directory listing (both fetched directly)`.

## Why they fit

Family-owned roofing contractor, small (per Rupika's sourcing), started 2018, real state license, GAF
certification, and a genuinely verified owner-bottleneck signal: Richard personally reviews every job. Strong
Complete System fit — an owner who's hands-on in the field is exactly the profile likely to be missing calls
while working.

## Website status

Real business, real domain (vigilanteroofing.com, confirmed via Google's indexed pages and multiple directory
listings referencing it) — but I could not personally load or verify it (connection reset on every attempt,
both WebFetch and headless Playwright). Treat "has a website" as true but unverified-by-me-directly; if this
matters for a future website-upsell tag, someone should confirm from a normal browser rather than trust my
attempt.

## Notes / flags for Sue

- **Email-gate hold, not a dead prospect** — good phone, good name, strong fit. Purely a reachability gap on
  email; call-ready per the 2026-09-02 ruling.
- **Two false-positive "found an email" moments, both caught by decoding and checking relevance before
  reporting them as real** — worth mentioning as a working example of the "don't trust an AI summary without
  tracing it yourself" rule paying off; neither made it into any status field.
- vigilanteroofing.com being unreachable by both of my tools (not just Yelp-style blocking, a straight
  connection reset) might be worth a manual spot-check by Kevin/Sue if this prospect becomes a priority — I
  did not try to work around it.
- No review count/rating used above as a hook or pain point, per the 2026-09-08 compliance ruling.
