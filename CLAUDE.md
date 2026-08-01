# SDR Team — working agreement

Shared workspace for Kevin's SDR/BDR team: scheduled Claude Code routines
that hand off work to each other through this folder, plus Kevin can open
any of them directly as an individual chat.

## Who's here

- **Rupita** — prospecting. See `team/rupita-prospecting.md`.
- **Montague** — enrichment. See `team/montague-enrichment.md`.
- **(third role, name TBD)** — outreach drafting. See
  `team/outreach-agent.md` (placeholder — rename the file and update this
  list once Kevin names this one).

## Known overlap with KIREEK — not yet resolved

KIREEK (`VIRIDIALLC/KIREEK`, `voice-agent/backend/main.py`) already has its
own voice-triggerable prospecting tools (`build_prospect_list`,
`run_research_agent`, `draft_outreach_message`,
`enroll_prospects_in_pipeline`) and a dormant autonomous scheduler
(`PROSPECTING_SCHEDULE_ENABLED`, off by default). It also reserves
`BDR_TEAM_CHAT_WEBHOOK_URL` in `backend/.env` for this team's Google Chat
space.

Before this team runs for real, decide with Kevin: does this repo's Rupita
replace KIREEK's built-in scheduler, or do they cover different scope
(e.g. KIREEK handles voice-requested one-off lookups, this repo handles the
standing daily pipeline)? Don't let both run the same job independently —
that's a silent way to double API spend. Flag this to Kevin rather than
guessing if it's ever unclear which one should act.

## How handoff works

Every prospect is a file under `prospects/<company-slug>/status.md`, copied
from `prospects/_template/`. `stage` field:

```
found -> enriched -> drafted -> approved -> sent
```

- **Rupita** finds new prospects (`stage: found` created by her), and
  reviews `prospects/_new-leads.md` if Kevin drops raw leads there.
- **Montague** picks up `stage: found`, enriches (company info, contact
  info, why-they-fit), advances to `stage: enriched`.
- **Outreach agent** picks up `stage: enriched`, drafts an outreach message
  into `outreach.md`, advances to `stage: drafted`.
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
