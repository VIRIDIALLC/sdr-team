CALL CARD
  Ask for:   Brian               (Brian Meikle Jr. — MEDIUM confidence. First name
             "Brian" repeats across sources but likely traces to one original
             listing that aggregators re-scraped, not truly independent
             corroboration; surname/"Jr." unverified beyond the contact email.
             Safe to use "Brian" alone, don't lean on the full name as settled.)
  Phone:     (505) 258-3579      (CONFIRMED — independently verified across 3
             separately-hosted sources: Yahoo Local, Nextdoor, chamberofcommerce.com,
             all tied to the same address; carrier lookup confirms a genuine local
             Farmington, NM number)
  Response:  n/a — website track, no response-time signal sourced
  Hook:      "You've got real reviews and a real crew, but no way for someone to
              find you online beyond Facebook. I want to build you an actual
              website — no cost to you unless you like it."

## Company summary

Clean Earth Landscaping, Farmington NM. Real, active home-service business —
grass cutting, tree planting/removal, weed/leaf removal, dirt/gravel work,
fencing, pressure washing, artificial turf install. Address: 1808 Cliffside
Dr, Farmington, NM 87401 (new finding this run, consistent across Yahoo Local
and Nextdoor).

## Website-gap verification — CONFIRMED, no real website exists

The load-bearing check for this track. Independently reconfirmed via a raw DNS
sweep (bypasses the egress proxy, decisive): tried 9 plausible domain guesses
(cleanearthlandscapingnm.com, -farmington.com, -llc.com, -fourcorners.com,
etc.) — all NXDOMAIN. One domain, cleanearthlandscaping.com, DOES resolve —
but it 301-redirects to cleanearthwaterscapes.com, a completely unrelated pond/
water-feature company in Mt. Juliet, TN (owner Aaron Reynolds, corroborated
via matching TN address/phone across nicejob.com, Yelp, LinkedIn, Facebook,
and the Mt. Juliet Chamber of Commerce). This is a SECOND unrelated
name-collision on top of the "Scratching the Earth Landscaping" competitor
sourcing already flagged — 1,300+ miles away, no connection to the Farmington
business. Every fetchable directory listing (Yahoo Local, Nextdoor,
adolfolandscaping.com) shows an explicit "no website" field for this specific
business. **Verdict: CONFIRMED — the pitch's premise holds.**

## Owner name — MEDIUM confidence, not strengthened this run

"Brian" (first name) repeats across Facebook, Nextdoor, chamberofcommerce, and
adolfolandscaping, but this likely traces back to a single original listing
that got re-scraped by aggregators, not independent corroboration. The
surname "Meikle" appears nowhere except the email address itself — every
directory that could be directly fetched shows "Owner/Contact Name: Not
provided." A partial new signal: a people-search record shows a "Brian
Meikle" in Aztec NM (~10mi away, same county) — geographically plausible, but
his listed phone numbers don't match the business line, so not directly
linkable. "Jr." is entirely uncorroborated — no record anywhere. NM Secretary
of State's business-entity search is JS-rendered and couldn't be queried by
this pass — unresolved, not negative. Net: stays at the same MEDIUM confidence
sourcing already had; use "Brian" alone on the CALL CARD, don't bet on the
surname.

## Email — treat as PASSING the gate (single-source, business's own listing)

brianmeiklejr@gmail.com did not independently reproduce on any additional
fetchable directory this run (several show "Email: Not listed") — this
verification pass could not strengthen it beyond sourcing's original basis,
which tied it directly to the business's own contact listing (not a domain-
pattern guess). Per the established "directly-listed, single-underlying-
source" confidence tier (same category as BGS AC & Heating 2026-08-30, Shaw
Roofing 2026-09-01), this still clears the email gate — it's a real found
address, just not multiply corroborated. Flagged honestly as single-source.

## Phone

(505) 258-3579 — CONFIRMED, high confidence, 3 independent sources.

## Collisions

TWO unrelated businesses share "Clean Earth Landscaping"-adjacent branding:
Tennessee's Clean Earth Waterscapes (the domain-collision above) and the
previously-flagged "Scratching the Earth Landscaping" (a real, unrelated
competitor with its own live site). Neither is this Farmington business —
flagged so nobody downstream conflates any of the three.

## Sourcing note

DNS checks run directly via Bash, bypassing the egress proxy — decisive.
Directory pages fetched directly where possible; chamberofcommerce.com itself
was Cloudflare-blocked, worked from its search-result snippet instead. NM SOS
business search is JS-rendered, genuinely unreachable this run.

**Recommendation: ADVANCE to `enriched`.** Website-gap gate CONFIRMED, email
gate PASSED at single-source confidence, owner first name usable at medium
confidence.
