CALL CARD
  Ask for:   NO NAME FOUND       — checked ez-electrical.com's own About/
             Contact pages (name no owner), WA L&I's official contractor
             license registry (data.wa.gov, primary source), no Facebook or
             BBB profile exists. Best lead (Erik A. Zagrean, principal of
             "EZ Electrical LLC," Kirkland, per WA L&I) is only
             inferentially linked to this exact domain — not confirmed
             enough to put on the card. A review-mentioned "Igor" does NOT
             belong to this business — traces to an unrelated company's
             review.
  Phone:     (206) 401-4114      (confirmed on the business's own site)
  Response:  n/a — a pre-2026-09-10 Yelp figure exists (see below) but is not
             usable as fact or hook under the current compliance gate.
  Hook:      no verified hook.

## HANDOFF-INTEGRITY NOTE — read this first

A real enrichment pass for this prospect already existed on `master` before
this run (committed 2026-09-08, inside a large squashed commit `c52dae5`) —
it even ends with its own "Status: ADVANCE to `enriched`" line. **`status.md`
was never actually updated to reflect it** — no stage change, no Montague
log line — so this prospect sat at `stage: found` for three days looking
untouched, exactly the kind of silent dropped-handoff CLAUDE.md's Sue
section warns about (the 2026-08-18 CALL CARD-parser incident). This file
reconciles that prior work with this run's independent research rather
than overwriting it — see memory/montague.md for the full flag to Sue/Kevin,
since other prospects in the backlog may have the same issue.

## Email — CONFIRMED

info@ez-electrical.com — confirmed independently by both research passes.
The 2026-09-08 pass found it on the site's Contact Us page; this run's pass
found it verbatim on three separate pages (homepage, /contact-us,
/about-us). High confidence.

## Owner name — the two passes disagree on confidence; deferring to the
stronger source

The 2026-09-08 pass queried **WA L&I's official contractor license registry
directly via its structured Socrata API (data.wa.gov)** — a primary,
authoritative source — and resolved the name-collision risk cleanly: at
least four similarly-named WA electrical LLCs exist, each with a distinct
UBI, and "EZ ELECTRICAL LLC" (UBI 604897813, Kirkland, principal **Erik A.
Zagrean**, ACTIVE) is the most plausible match for ez-electrical.com by
legal-name and service-area consistency (corroborated by a HomeAdvisor
listing describing "Erik and his team" in Redmond) — but no single source
ties the *domain itself* to that UBI, so that pass correctly left it off
the CALL CARD as inferential, not confirmed.

This run's independent pass reached the same name (Erik Zagrean) via a
*different, weaker* source — a WA Secretary of State business filing seen
through a third-party aggregator (bizprofile.net), not the primary state
record — and had initially put it on the CALL CARD at medium confidence.
**Deferring to the more rigorous 2026-09-08 finding**: two independently-
sourced passes landing on the same name is good corroborating signal, but
neither closes the actual domain-to-UBI link, so NO NAME FOUND stays the
correct, honest CALL CARD state. Erik Zagrean remains the best lead for
Kevin/Elly's awareness, just not safe to say cold on a call.

**"Igor" — confirmed NOT this business, by both passes independently.**
The 2026-09-08 pass traced "Igor was awesome to work with" to unrelated
companies (24/7 Electric, and other electricians named Igor elsewhere);
this run's pass separately traced the same phrase to a different business
entirely ("Ample Electric"). Two independent confirmations that this is a
misattribution — dropped.

## Distinct-entity confirmation — CONFIRMED, not the Vancouver namesake

Both passes agree, via different sources: WA L&I's registry (2026-09-08,
primary/authoritative) shows EZ ELECTRICAL LLC (Kirkland, UBI 604897813,
Erik A. Zagrean) as distinct from EZ ELECTRIC LLC (Vancouver, UBI
605455461, Iemanuil Zhyryada) — different legal name, city, UBI, and
principal. This run's pass corroborated the same split via a different
aggregator, plus confirmed the Vancouver entity's project geography
(Kirkland/Seattle/Marysville) is consistent with ez-electrical.com's stated
Everett-to-Renton service area, not Vancouver's.

## Phone — CONFIRMED, one hallucinated number discarded

(206) 401-4114 confirmed by both passes on the site's own pages (single-
source — no BBB/Facebook profile exists for independent cross-check, flag
as reliable-but-single-sourced). This run's pass separately caught and
discarded a hallucinated second number ("206-300-4196") that a search-AI
summary asserted but that traced to no real source anywhere.

## Website — confirmed real, live (informational, package track)

ez-electrical.com confirmed via direct fetch, substantive content. Footer
reads "Powered by Alba Marketing" (a local website-builder vendor) — no
physical address, team bios, or "family-owned" copy anywhere on the site,
consistent with a newly-listed small operator.

## The response-time figure — carried forward as history, not as a claim

Yelp shows "responds in about 2 days" per the original brief, reconfirmed
once on 2026-09-08 (directionally consistent, "2 days" vs "2-4 days" across
two passes) — but that reconfirmation predates the 2026-09-10 compliance
ruling. Per this run's decision (see memory/montague.md), Yelp response-time
figures are no longer re-verified or used as fact/hook by Montague at all,
even a previously-reconfirmed one. Recorded here for context only, not
asserted and not the CALL CARD hook.

## Sourcing note

This run: ez-electrical.com (home, /contact-us, /about-us, /sitemap.xml),
bizprofile.net, buildzoom.com all fetched directly. 2026-09-08 pass:
ez-electrical.com's own pages plus WA L&I's Socrata API (data.wa.gov)
fetched directly. Yelp never fetched directly by either pass, per the
no-scrape rule.
