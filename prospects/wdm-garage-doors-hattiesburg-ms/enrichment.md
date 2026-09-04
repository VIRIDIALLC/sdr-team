CALL CARD
  Ask for:   Will                (Will Robison, owner — confirmed via 3 independent
             sources: LinkedIn, SignalHire, and BBB's Principal Contact field)
  Phone:     (601) 248-7888      (BBB only — single-sourced; a second source
             couldn't be found despite trying Instagram/Facebook/web search.
             Not enough for call_ready per the 2-source rule.)
  Response:  n/a — website track
  Hook:      "You've got real reviews, a real crew, and 18+ years in the trade —
              but nothing online beyond Facebook and Instagram. I want to build
              you an actual website."

## Company summary

WDM, LLC Garage Doors & More, Hattiesburg MS. Address: 5023 W 4th St Ste 404,
Hattiesburg, MS 39402-1073. Locally-owned garage door install/repair company,
member of the Greater Hattiesburg Home Builders Association.

## Website-gap verification — CONFIRMED, no owned website exists

Independently reconfirmed via a raw DNS sweep (bypasses the egress proxy,
decisive): 9 guessed domains (wdmgaragedoors.com, wdmgaragedoorsandmore.com,
wdmhattiesburg.com, etc.) — all NXDOMAIN. Two resolving false leads correctly
ruled out: `wdmllc.com` belongs to an unrelated Chinese AI/vision-tech company
(Shanghai 6686 Vision Technology Co.), and `wdm-llc.com` returned no usable
content and no evidence of any tie to garage doors/Hattiesburg. Decisive
corroborating signal: **BBB's own "Website" field for this business lists
their Facebook page**, not a dot-com — a verification bureau defaulting to
Facebook is strong independent confirmation no real site exists. **Verdict:
CONFIRMED.**

## Best contact

**Will Robison** — owner, HIGH confidence, THREE independent sources: LinkedIn
(titled "WDM, LLC" directly), SignalHire (lists him "Owner at WDM, LLC" since
June 2021, previously Operations Manager then Manager at TAS Garage Doors
Oct 2005-Mar 2020 — this is where the "18+ years in the industry" claim
actually comes from; note the WDM entity itself appears to be only ~5 years
old, so frame outreach around his personal trade tenure, not the company's
age), and BBB (lists "Mr. William S Robison" as Principal Contact). One name
variant, "Will Robinson" on the Home Builders Association page, checked and
ruled out as an OCR/caption misread — "Robison" is correct across every other
source.

## Email — NOT FOUND (gate fails)

Two masked SignalHire candidates surfaced but neither is usable: one ties to a
past employer (J. Smith Lanier, an insurance brokerage), the other to a
different firm (Robison Risk Advisors, possibly a family business) — neither
reproduced/confirmed as a real WDM contact on a second search, and both are
partially obscured. BBB has no public email on file. Facebook/Instagram
couldn't be fully read (rate-limited/incomplete via fetch). No domain exists
to guess a pattern from. **Email gate: FAILED — hold at `found`.**

## Phone

(601) 248-7888 — from BBB, tied directly to Will Robison as principal contact.
Single-sourced only — Instagram, Facebook, and general web search attempts to
find a second independent confirmation all came up empty or blocked. **Does
not meet the 2-source bar for call_ready** — leave `call_ready` off. A
different number, (601) 550-4484, found on the Home Builders Association page
was checked and ruled out as the Association's own general office line, not
WDM's — do not use it.

## Sourcing note

DNS checks run directly via Bash, bypassing the egress proxy — decisive for
the website-gap gate. BBB, LinkedIn, SignalHire directly checked. Instagram
returned HTTP 429 (rate-limited), Facebook incomplete via fetch — a real
environment gap on the phone/email cross-check specifically.

**Recommendation: HOLD at `found` on the email gate.** Website-gap gate
CONFIRMED, owner name strong, but phone is single-sourced (not call-ready)
and no email surfaced despite a thorough check.
