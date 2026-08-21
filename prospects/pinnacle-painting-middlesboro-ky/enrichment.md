```
CALL CARD
  Ask for:   NO NAME FOUND — Facebook About unreachable (egress-blocked),
             KY SOS has no registered entity, "Andrew Blondell" ruled out
             as unrelated
  Phone:     (606) 246-0628
  Response:  n/a (website track)
  Hook:      "You've got a Facebook page and that's it — no website at
              all, and this town has at least two other 'Pinnacle
              Painting'-adjacent search results that could get confused
              with you first."
```

## Company summary

Pinnacle Painting — Middlesboro, KY. Painting contractor, small local
shop. Only discoverable online presence is a Facebook page (108 likes, 1
review). No BBB profile, no Angi/Thumbtack/HomeAdvisor listing for this
exact business — genuinely thin footprint.

## Website-gap — CONFIRMED ABSENT

Direct WebFetch DNS tests on three guessed domains
(pinnaclepaintingky.com, pinnaclepaintingmiddlesboro.com,
pinnaclepaintingllc.net) all failed resolution (ENOTFOUND). No BBB profile
exists for a Middlesboro entity — the only "Pinnacle Painting" BBB hits
are Cincinnati, Boise, Mt. Pleasant SC, Lebanon NH, Minneapolis, and
Seattle, all different businesses. Kentucky Secretary of State has no
registered entity under this name — consistent with an unregistered
sole-proprietor operation, which also limits how far public records can
verify anything else below. Website-gap gate: satisfied.

## Owner/contact name — NOT FOUND with confidence

Two candidates, both ruled out or left unconfirmed:
- **"Andrew Blondell"** (a name that surfaced in an earlier pass) — fully
  ruled out. A targeted search tying that exact name to Middlesboro
  painting returned zero connection, only an unrelated Wikipedia entry for
  a different person entirely. Do not use.
- **"Sanders family"** (inferred from the email candidate below) — not
  independently confirmed. No Facebook About text, review, directory
  listing, or KY SOS record names any Sanders tied to this business. The
  inference rests entirely on the email's local-part, not on any
  independent naming.

Left blank per the never-placeholder rule.

## Email — NOT CONFIRMED, likely AI-fabrication pattern

sanders128@hotmail.com surfaced in an earlier pass. This run: a direct
quoted search for the exact string returned zero hits tied to this
business — only unrelated generic Sanders/Hotmail pages. Notably, in every
*other* query (not containing the email string), the search tool's AI
summary still asserted this email as the business's contact, without the
string ever appearing in the actual returned source titles/snippets — a
textbook instance of the AI-summary-fabrication pattern logged repeatedly
since 2026-08-13. The Facebook page's own About/contact widget — the one
place this could be directly confirmed — was blocked by this
environment's egress proxy. Per the "a guess with a contradiction is
worse than a guess with silence" convention (Fish Window Cleaning,
2026-08-13), **not reporting this as a usable email.**

## Collision risk — several ruled out

None share phone (606) 246-0628 or Middlesboro, KY: Westfield IN, Plano
TX, Sandy UT, Pioneer CA, Boise ID, Seattle WA, Cincinnati OH, Mount
Pleasant SC, Lebanon NH, Minneapolis MN (pinnaclepaintingmn.com),
Independence MO, Colorado, Miller Place NY, and "Pinnacle Painting Plus"
in Knoxville TN (different domain/name).

## Gate outcome

- Website-gap: **CONFIRMED**.
- Email gate: **FAIL** — the one candidate found does not survive
  re-verification and looks fabricated, not just unconfirmed.
- Owner-name: not found, one candidate ruled out, one left unconfirmed.

**Held at `stage: found`.** Not a dead end on the business — real,
distinctive shop with a confirmed website gap and a verifiable phone
number. A human opening the Facebook page's About tab directly (not
blocked to a browser the way it is to this environment's egress proxy)
would likely resolve both the name and email gaps in one look.

*Sourcing note: facebook.com WebFetch was blocked by this environment's
egress proxy — findings above are search-snippet-sourced except the DNS
resolution checks, which were direct and decisive.*
