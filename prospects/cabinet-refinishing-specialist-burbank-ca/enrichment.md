```
CALL CARD
  Ask for:   Vic                (Vachik/Vachagan Hovhannisyan — CEO per
             CA filing, confirmed independently via 2 customer reviews
             naming him by name)
  Phone:     n/a — not independently confirmed this run, see note below
  Response:  ~3 hrs             (drifted from brief's ~2hr; quote-count
              figure unreliable, dropped — see note)
  Hook:      "Your Yelp shows a response time in the 2-3 hour range on
              real incoming quote requests. Is that still about right?"
```

## Links
- yelp: https://www.yelp.com/biz/cabinet-refinishing-specialist-burbank
- website: https://cabinetrefinishingspecialist.com
- maps: https://www.google.com/maps/search/Cabinet+Refinishing+Specialist+1061+N+Victory+Pl+Burbank+CA

## Company summary

Cabinet Refinishing Specialist — 1061 N Victory Pl, Burbank, CA 91502.
Owner-operated cabinet-painting/refinishing shop, run by brothers Vachik
("Vic") and Vanik Hovhannisyan, established 2010. Real website confirmed
live — package track, this is a speed-to-lead/automation pitch, not a
website build. **Note:** the business's Facebook page is titled "Impact
Pro Refinishing LLC (@CabinetRefinishingSpecialist)" — a different
legal/DBA name than the CA state filings below. Could be a rebrand, a
DBA, or an unrelated page using the same handle — not resolved by
search alone, flagging rather than guessing.

## Response-time / quote-volume signals — noisy, partially dropped

The ~2hr "responds in about" figure from the brief drifted to a
consistent ~3hrs across 3 independent reconfirmation searches this run
— within normal Yelp-metric drift, still usable as a question per the
2026-08-13 amendment. Review count also drifted (92/92/93 vs. the
brief's 92/95) — same normal-noise category.

**The "locals recently requested a quote" figure is being dropped
entirely, not carried forward even as a question.** Four independent
searches returned four different numbers (none matching the brief's 26;
the AI-summary layer gave 259 then 239 on separate re-runs of similar
queries, never reproducing the same number twice). This is the
"actively contradictory, not just unconfirmed" third bucket named after
CVA Exterminators (2026-08-15) — a specific-sounding stat that changes
every time it's asked isn't safe to use even as a question.

## Owner name — Vic (Vachik Hovhannisyan), high confidence

Confirmed via two independent tracks: a CA business filing (Cabinet
Refinishing Specialist Inc., bizprofile.net) lists Vachagan
Hovhannisyan of Glendale, CA as CEO/CFO/Secretary/Director; separately,
two different customer review snippets on the actual Yelp listing name
him directly ("Vic was responsive, quick to answer questions..." and "I
explained my situation to Vachik, and he is quick to respond..."). A
third review uses "Vick & Von" for the two brothers, consistent with
the "run by two brothers" bio repeated across directories. Clean,
independently-corroborated first name for the cold call.
(Note: a LinkedIn hit for a same-named "Vachagan Hovhannisyan — Cannabis
Delivery Specialist" is almost certainly a different person — not used
as corroboration.)

## Email — found via site content, moderate-high confidence (required gate)

**vachikhovhannisyan@yahoo.com** — a real personal email tied to the
owner's name (not a generic `info@` guess), surfaced consistently across
5 independently-worded searches, every time attributed to the same
source page (cabinetrefinishingspecialist.com's "Who We Are" page).
Consistency of an exact string across independently-worded queries is a
real corroboration signal. Could not independently fetch the site
directly (egress-blocked) to confirm on the live page, and found no
third-party directory corroboration independent of Google's own crawl
of the same site — **labeled as found-via-site-content, not
page-verified**, a stronger tier than a guessed `info@` pattern but
short of a direct page read. **Passes the email gate.**

## License status — CSLB unverified

cslb.ca.gov was egress-blocked, as expected. BuildZoom (used as a
mirror) shows no license record for "Cabinet Refinishing Specialist,"
"Impact Pro Refinishing," or either Hovhannisyan brother in Burbank —
other Burbank cabinet companies do show up on BuildZoom with license
numbers, so this absence is suggestive (cabinet-refacing/painting work
can fall under CA's $500 handyman exemption per job) but not
conclusive. Flagged as an unverified gap for Kevin, not a gate.

## Gate outcome

- Email gate: **PASS** (found via site content, moderate-high
  confidence).
- Owner-name: pass, high confidence.
- Response-time: usable as a question; quote-count figure dropped as
  contradictory.
- License: unverified, flagged as a caution.

**Advanced to `stage: enriched`.**

*Sourcing note: cabinetrefinishingspecialist.com, cslb.ca.gov, and the
Facebook page were all EGRESS_BLOCKED to direct WebFetch this run —
findings above are search-snippet-sourced except where noted.*
