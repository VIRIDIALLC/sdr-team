# SDR Team — working agreement

Shared workspace for Kevin's SDR/BDR team: scheduled Claude Code routines
that hand off work to each other through this folder, plus Kevin can open
any of them directly as an individual chat.

## Who's here

- **Rupika** — prospecting. See `team/rupika-prospecting.md`.
- **Montague** — enrichment. See `team/montague-enrichment.md`.
- **Elly** — outreach drafting. See `team/elly-outreach.md`.
- **Sage** — quoting, once a `track: website` prospect replies. See
  `team/sage-quoting.md`.
- **Nova** — Magic Patterns build, once a quote is approved and photos
  are in hand. See `team/nova-build.md`.

## Scope vs. KIREEK — resolved 2026-07-31

KIREEK (`VIRIDIALLC/KIREEK`, `voice-agent/backend/main.py`) has its own
voice-triggerable prospecting tools (`build_prospect_list`,
`run_research_agent`, `draft_outreach_message`,
`enroll_prospects_in_pipeline`) and a dormant autonomous scheduler
(`PROSPECTING_SCHEDULE_ENABLED`, off by default). It also reserves
`BDR_TEAM_CHAT_WEBHOOK_URL` in `backend/.env` for this team's Google Chat
space.

**Decision: different scope, both stay.** KIREEK's tools are for
one-off, voice-requested lookups in the moment ("find me 5 prospects in
Austin right now"). This repo is the standing daily pipeline
(Rupika -> Montague -> Elly). KIREEK's `PROSPECTING_SCHEDULE_ENABLED`
autonomous scheduler should stay off permanently now that this repo is the
real standing pipeline — arming both would silently double API spend on
the same job. If that ever needs to change, that's a conversation with
Kevin first, not a default to flip.

## How handoff works

Every prospect is a file under `prospects/<company-slug>/status.md`, copied
from `prospects/_template/`. `stage` field:

```
found -> enriched -> drafted -> approved -> sent
```

Every prospect also carries a `track` field — `package` (leads for the
3-tiered packages) or `website` (leads for the website-building offer,
same ICP but no site / a bad one). Standing criteria for both tracks live
in `prospects/_criteria.md`. The track determines how Montague enriches
and how Elly pitches — see their persona files.

- **Rupika** finds new prospects (`stage: found` created by her), and
  reviews `prospects/_new-leads.md` if Kevin drops raw leads there.
- **Montague** picks up `stage: found`, enriches (company info, contact
  info, why-they-fit), advances to `stage: enriched`.
- **Elly** picks up `stage: enriched`, drafts an outreach message into
  `outreach.md`, advances to `stage: drafted`.
- **Nothing sends automatically.** `drafted` -> `approved` -> `sent` is
  Kevin's call — see "Approval gate."

Once a `track: website` prospect is `stage: sent`, a second field takes
over — `quote_stage`, for handling replies:

```
none -> quoted / needs_kevin -> ready_to_build
```

- Kevin drops what a prospect said into `prospects/<slug>/reply.md`.
- **Sage** matches it against `prospects/_pricing.md`'s three tiers,
  drafts `quote.md`, sets `quote_stage: quoted` — or `needs_kevin` if it
  doesn't cleanly fit any tier (never guesses a price).
- Kevin sets `quote_stage: ready_to_build` himself once the quote's
  approved *and* the business owner has actually sent real photos —
  nothing here can detect photo arrival automatically, so this flip
  stays manual.
- **Nova** picks up `ready_to_build`, but only actually starts a Magic
  Patterns build when Kevin explicitly says to start that specific
  project — see `team/nova-build.md` and "Magic Patterns access" below.
  Build quality rules (uniqueness, SEO, the real-photos gate) live in
  `prospects/_build-standards.md`.

## Magic Patterns access

The Magic Patterns MCP connector available in Claude Code sessions here
is authenticated to Kevin's real account (confirmed 2026-08-02 — it has
his actual active design system, `"Viridia Analytics"`). That means
starting a real project is technically possible directly from a session,
not something only Kevin can do by hand. It spends real credits and
creates a real project on his account, though, so it follows the same
approval gate as sending anything else here: never triggered
automatically, only when Kevin explicitly says to start that specific
project.

## Approval gate

No routine here sends an email, DM, or message to a real prospect, and none
enrolls a contact in the GHL pipeline. Drafts go in `prospects/<slug>/` and
a summary goes in `approvals/`; Kevin approves and sends (or explicitly
tells a routine to proceed) himself. This mirrors KIREEK's `propose_task`
pattern — draft and wait, never execute unattended.

## Memory

Each agent has `memory/<name>.md` — durable notes across runs. Read it at
the start of a run, update it at the end.

## Cost discipline

- Routines here start **disabled** — Kevin test-runs manually before
  arming any cron.
- Pick up a small, reasonable batch per run, not the whole backlog.
- Never call paid external APIs/enrichment services beyond what your
  persona file explicitly lists — enrichment lookups in particular can get
  expensive fast if unbounded, so cap batch size explicitly in that
  persona file once real tools are wired in.
- **`COST_LOG.md`** — the real ledger of anything here that actually
  spends money/credits (currently just Nova's Magic Patterns
  generations — see that file for what it can and can't tell you).
  Check it before deciding whether to scale up volume or arm a
  scheduler; Kevin asked for this 2026-08-03 specifically so that
  decision has real usage data behind it, not a guess.
