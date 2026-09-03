# Kevin's pipeline rulings — 2026-09-02

status: open
from: Claude Code session (KIREEK repo), at Kevin's direction
to: Rupika, Montague, Elly, Sue

## Why

Kevin asked why only two SDR approvals reached him on 2026-09-02, both home
services. Answer: two is the whole live queue and only one was drafted that
day. Montague advanced 1 of 5 and held 4 on the email gate, same as 09-01.
88 prospects sat at `stage: found`, nearly all already researched and held
on the gate; 64 of them have a confirmed phone and 48 an owner's name.
Real estate never enters this pipeline (criteria are home services only;
that campaign runs from Kevin's PC straight into Gmail drafts).

## Rulings (all four approved by Kevin, "do all")

1. **Email-gate holds with a confirmed phone are call-ready, not dead.**
   Montague flags `call_ready: yes` and renders `CALL-READY.md`.
   Seed render committed with this handoff (regex-built from existing hold
   notes, unverified; Montague replaces it row by row).
2. **Enrichment databases: Vibe and Clay both tested, neither covers this
   ICP.** Details in `team/montague-enrichment.md`. Vibe is prepaid credits,
   not a subscription (365-day validity); the two datasets on the account
   are the real estate batches from 08-28, which is where it does work.
3. **Elly has standing approval to draft held-lane second touches**, three
   per run, one rolling approvals file. Drafts only.
4. **Rupika weights four package to one website, package prospects must be
   reachable at sourcing time**, Phoenix/LA first.

## Addendum, 2026-09-03: flood gates

Day two was zero drafts: Rupika found 5, Montague held 5 of 5 on the email
gate, Elly had nothing. Kevin: *"All metro areas big cities. Open the flood
gates."* Applied:

- Rupika: every major US metro in rotation, 12 package + 3 website per run,
  4+ verticals. (`prospects/_criteria.md`, `team/rupika-prospecting.md`)
- Montague: up to 15 per run; the money-based cap is retired since this
  seat has no paid API. (`team/montague-enrichment.md`)
- Elly: up to 10 first touches and 5 held-lane second touches per run.
  (`team/elly-outreach.md`)

Root cause of the email gate, for the record: the routine environment is
"trusted network access" (an allowlist), so Montague has been unable to
open any prospect site, BBB, Facebook or license registry since 08-02. Her
memory says so every run. Kevin was asked on 09-03 to switch the Default
environment (env_017Z1mtaA3sLwaPKW4fJPxZJ) to full network access. Until
that flips, bigger batches raise the call-ready count, not the draft count.

## Routine prompts

The three SDR routine prompts could NOT be updated by the agent session
(routines created through the API can only be edited by their creator).
Each prompt already says the persona file and CLAUDE.md "take precedence
over anything below," so landing this commit on `master` is what puts the
rulings in force. No prompt edit is required.

## Sue

First seam to check next run: does `call_ready: yes` survive into a
CALL CARD that KIREEK's `prep_for_call` can read? If a call-ready row has
no name and no hook, that is a Montague render gap, not a data gap.
