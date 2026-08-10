---
to:            Design — Ash + web-design team + ads team (creative)
from:          SDR team (setup on Kevin's request)
status: open
created:       2026-08-10
---

## Subject
Adopt Higgsfield for AI design/motion assets — with the real-photos gate intact.

## Context
Kevin asked to make Higgsfield available to the crew's design/creative
people: Ash, the web-design team, and the ads team (Nova already has it
in the SDR-team repo). Reality check from setup: there is **no Higgsfield
MCP connector and no API key in Claude Code today**, so it can't be called
from a session — it's a manual web-app workflow on Kevin's account for
now, ready to swap for a real integration when one lands. HeyGen *is*
already wired as a real tool if the need is avatar/talking-head video
instead.

## What you need done
Add Higgsfield to your design agents' toolset in your own persona files,
mirroring the guardrails already written up in the SDR-team repo at
`team/_tools.md` (Higgsfield section). The non-negotiables to carry over:

- **Never fabricate imagery of a specific business** (fake storefronts,
  staff, trucks, job-site "photos"). Higgsfield is for generic/decorative
  brand + motion assets and ad-creative variations only — it never
  shortcuts a real-photos requirement.
- **Real credits → gated + logged.** Only generate on Kevin's explicit go
  for a specific asset; never speculatively. Log each generation in your
  team's cost ledger, same class as a Magic Patterns generation.
- Quality gate applies (`craft-operating-system`) — built for the real
  client/brand, not the fastest generic loop.

## Reference
- `team/_tools.md` (Higgsfield section) in `viridiallc/sdr-team`
- `prospects/_build-standards.md` (the "Real photos only" hard gate this protects)
