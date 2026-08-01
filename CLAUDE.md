# SDR Team — working agreement

Shared workspace for Kevin's SDR/BDR team: scheduled Claude Code routines
that hand off work to each other through this folder, plus Kevin can open
any of them directly as an individual chat.

## Who's here

- **Rupika** — prospecting. See `team/rupika-prospecting.md`.
- **Montague** — enrichment. See `team/montague-enrichment.md`.
- **Elly** — outreach drafting. See `team/elly-outreach.md`.

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

- **Rupika** finds new prospects (`stage: found` created by her), and
  reviews `prospects/_new-leads.md` if Kevin drops raw leads there.
- **Montague** picks up `stage: found`, enriches (company info, contact
  info, why-they-fit), advances to `stage: enriched`.
- **Elly** picks up `stage: enriched`, drafts an outreach message into
  `outreach.md`, advances to `stage: drafted`.
- **Nothing sends automatically.** `drafted` -> `approved` -> `sent` is
  Kevin's call — see "Approval gate."

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
