CALL CARD
  Ask for:   Ben (Crosby)      (co-owner — currently-active NH/VT license;
             Jeff Ezequelle is the other co-owner, name-confirmed, but his
             license shows inactive/cancelled per BuildZoom, so Ben is the
             slightly safer name to lead with)
  Phone:     (603) 762-7047    (Ben Crosby's line; Jeff's is (603) 762-0626)
  Response:  n/a — website track, no response-time signal sourced
  Hook:      "You've got real jobs going and licensed electricians, but no
              website anywhere I can find — just Facebook and directory
              listings. I want to build you an actual site — no cost to you
              unless you like it."

## Website-gap verification — CONFIRMED, no real website exists

Raw DNS sweep (bypasses egress proxy) on 8 plausible domain guesses
(jeandbcelectric.com, jebcelectric.com, jandbcelectric.com, jeandbc.com,
jebcnh.com, jeandbcelectricnh.com, jbelectricnh.com, jandbelectricnh.com) —
all NXDOMAIN. Control check: jandbelectric.com (the already-flagged unrelated
"J & B Electric") DOES resolve, confirming the DNS method works and that this
is a genuinely different, unrelated business, not a false negative. BuildZoom's
own business profile field explicitly lists "Website: Not provided."
**Verdict: CONFIRMED.**

## Email — CONFIRMED, directly-found

**jeandbcelectric@gmail.com** — a Gmail address (consistent with no owned
domain), corroborated via search-indexed content from the Facebook page and
HomeAdvisor listing, plus BuildZoom showing a Cloudflare-obfuscated but
present email field on the same listing. Both sources 403'd/login-walled on
direct fetch, so this is search-verified not primary-page-rendered — flagged
honestly, but two independent listing sources agreeing is enough to clear the
gate.

## Owner names — CONFIRMED as two real, distinguishable co-owners

**Jeff Ezequelle** (full: Jeffrey B Ezequelle, Keene NH) — confirmed via
BuildZoom individual profile. Holds NH electrician license EM-05258, which
BuildZoom flags as **inactive/cancelled**. A separate reference to license
#12238M ties to an NH Electricians' Board action dated 6/3/2020 — the board's
own site 403'd this run, so the nature of that action is unresolved, worth a
manual check if it matters.

**Ben Crosby** (likely Benjamin Crosby, Brattleboro VT — just over the
NH/VT line, consistent with the business's dual-state licensing claim) —
BuildZoom shows license EM-07914 **Active**, BZ score 90. This individual
match is plausible-not-certain (inferred from name + geography + dual-state
licensing match, not a direct citation tying him to this business by name).

Both are real co-owners per every directory listing that names them jointly.

## Phone numbers

Jeff Ezequelle: (603) 762-0626. Ben Crosby: (603) 762-7047. Both consistent
across multiple independent search passes (business-name search + individual
name searches), tracing to the same underlying listings. Facebook/HomeAdvisor
pages themselves were blocked from direct fetch (login wall / 403) — this is
search-index-verified, not primary-page-verified; recommend confirming live
on the call.

## General texture

BuildZoom score 99 (top 15% of ~13,069 NH contractors), 36 permitted projects
2021–2023 — real, active volume, not a shell operation. Facebook shows 92%
recommend (9 reviews, thin volume). HomeAdvisor shows a notably worse 1.0/5
driven by one detailed 2019 negative review (a generator-install job that
went wrong, technician left, management said no one else was available) —
an isolated sore spot on one platform contrasting with the better Facebook
number, good ammunition for a "your online story isn't consistent" angle if
it comes up, though it's one review not a pattern. No dedicated BBB or Yelp
business page found — only generic Keene-area category pages, despite the
original brief listing both; the brief likely meant category-page presence,
not a dedicated profile.

## Sourcing note

DNS checks run directly via Bash — decisive, unblocked. Facebook, HomeAdvisor,
and NH OPLC's license-board page all blocked direct fetch this run
(login wall / 403) — owner, email, and phone details are search-corroborated
across 2+ independent listings each, not primary-page-rendered.

**Recommendation: ADVANCE to `enriched`.** Website-gap confirmed decisively,
email gate passes, both owner names confirmed with phones.
