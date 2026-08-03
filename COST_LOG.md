# Cost log

A real, honest ledger of anything in this pipeline that actually spends
money or metered credits — not a dashboard, not projections, just what
actually happened, when, and why. Updated by whichever persona triggers
a real-cost action (mainly Nova; Rupika/Montague/Elly/Sage don't call
any paid API today, see "What's free" below).

**What I can't give you here:** exact dollar amounts. Nothing available
to Claude Code can query Magic Patterns' real credit balance or
Anthropic's own usage billing — those are only visible in your own
account dashboards (magicpatterns.com account/billing settings for MP
credits; console.anthropic.com for Claude usage). This log tracks real
*events* (what ran, when, why) so you have an honest count even without
dollar figures — cross-reference against those dashboards for the
actual spend.

## What's free (not logged here)

- Rupika/Montague's web search and Elly/Sage's drafting — regular
  Claude Code tool use under your existing plan, not a separate metered
  API call.
- Every real outreach email sent via `review_ready_to_send` — Gmail
  sending has no per-email cost.
- Apollo/Clay-style paid enrichment — not wired in yet (see
  `montague-enrichment.md`); would belong here once it is.

## What's logged here

Any real Magic Patterns generation (`create_design` with a prompt, or
`send_prompt` on an existing design) — this is the one real, metered
cost in the pipeline today.

## Log

- **2026-08-02** — 1 exploratory Magic Patterns generation (`create_design`
  with a prompt), design "Viridia Hero — Network Direction"
  (editorId `uh2qzoqzje7xd9gdfwmqgv`). Real AI generation credits spent.
  Superseded same day by hand-writing the component directly into the
  real Viridia Analytics project instead (`write_artifact_files` +
  `publish_artifact` — no further generation credits, that path doesn't
  consume them the same way). This generation is effectively orphaned/
  unused now, worth knowing since it's a real cost with no output kept.
- **2026-08-03** — 0 Nova builds run yet for any prospect. First real
  Nova `create_design` call (once Kevin approves a specific project by
  name, per Nova's persona gate) will be the next real entry here.

## Rough ROI baseline (2026-08-03)

Cost so far: 1 exploratory Magic Patterns generation (see above) + this
session's Claude Code usage (not quantifiable from here). Revenue
attributable to this pipeline so far: $0 — 1 real outreach email sent
(S&P Lawn Care), too early for any close. Real ROI tracking only starts
meaning something once outreach volume, replies, and (eventually)
closed deals build up — this section exists so that comparison has
something to look back on, not to claim a result yet.
