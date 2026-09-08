CALL CARD
  Ask for:   NO NAME FOUND — checked BBB (no profile exists for this
             business in Pendleton, OR), Facebook (login-walled, no
             content retrievable), Yelp (search-snippets only, per the
             no-scrape rule), Oregon SOS/CCB license lookup (both are
             JS-driven search forms, not fetchable directly this
             session). Recommend a human query CCB license #248910
             directly or call to get a name.
  Phone:     (541) 721-0636
  Response:  n/a — website track.
  Hook:      "You've got 17 real project photos up on Yelp and an active
              Facebook page — but nothing of your own online. No website
              to point people to when they ask to see your work."

## Website-gap — CONFIRMED via DNS

premierroofingpaintingor.com, premierroofingandpainting.com, and
premierroofingpainting.net all fail DNS resolution (ENOTFOUND — not
registered, not a firewall block). Search results confirm the business is
directory-presence-only (Yahoo Local, Yelp, Facebook, YellowPages, ZeroFi)
— no independent site anywhere. **Correctly avoided false positives**:
ruled out Premier Roofing Services LLC (Eugene, OR) and Premier Roofing &
Construction LLC (Dundee, OH), both already flagged by Rupika as unrelated
same-named businesses, plus a THIRD same-named unrelated business newly
spotted this run — "Premier Roofing & Painting, LLC" in Salem, NH
(different Yelp listing, different BBB profile, different phone). None of
these are this Pendleton, OR business.

## Owner name — NOT FOUND (genuinely, not just search-blocked)

Facebook's About section was unreadable (login wall). No Pendleton, OR BBB
profile exists for this business at all (checked the whole Pendleton
roofing-contractors BBB category directly — not listed). No local press
coverage found. Oregon SOS business registry and the Oregon CCB license
lookup (license #248910, tied to the same phone number, found via ZeroFi)
are both JS-driven search portals that couldn't be queried directly via
this session's tools — this is the one channel not fully exhausted; a
human or a browser-capable tool could pull the registered agent/member
name from CCB #248910 directly.

## Email — NOT reliably confirmed; a likely hallucination caught and discarded

Multiple search results returned "premierroofing541@gmail.com" with
confident but inconsistent attribution ("the Yelp listing," "their
Facebook page," or no source at all). A literal quoted search for that
exact string returned ZERO pages actually containing it — no real indexed
page backs it up, only unrelated lookalike-company results. Given the
suspiciously tidy pattern-match to the phone's "541" area code and the
failed literal-string verification, **treating this as unverified/likely
fabricated by the search summarizer — not used.** No independently
verified email exists. Held at `found` per the required gate.
**Marked `call_ready: yes`** — phone confirmed via 2 independent sources.

## Phone — CONFIRMED via 2 independent sources

Cross-confirmed via Yahoo Local and a ZeroFi contractor profile (which
ties this same number to CCB license #248910 under a slightly different
legal-name variant, "Premier Roofing & Contracting LLC" — likely the same
business/license held under a name variant given identical phone +
Pendleton, OR location; worth a one-line note, not a contradiction).

## Company summary / why they fit

Family-run roofing/painting business (dual-trade), licensed/bonded/
insured per its own listings, 17 project photos on Yelp, active Facebook
page. Real and active, no website presence anywhere — a dual-trade shop
with visible work to show off is a strong website-offer story.

## Sourcing note

The three domain guesses all failed at DNS, not a firewall block. Facebook
and Angi both blocked (login wall / 403). Oregon SOS and OR CCB portals
are JS-driven, not fetchable directly this session. Yelp never fetched
directly, per the no-scrape rule.
