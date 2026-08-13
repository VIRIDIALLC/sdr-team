# SDR Team — working agreement

## Landing your work — read this BEFORE you finish a run

**Work that is not on `master` does not exist.** Kevin and KIREEK both read
`master`. A commit sitting on your session's own `claude/*` branch is invisible
to both of them — from Kevin's side it looks exactly like you did nothing, and
he has spent real time believing his agents were blocked when in fact they had
finished the work and stranded it.

At the end of every run:

1. **`git fetch origin` FIRST, before you judge the state of the repo.** Fresh
   containers routinely start with stale refs. Multiple "the history is broken /
   master is frozen / my work is missing" alarms — from agents and from Claude
   sessions alike — have turned out to be nothing but an unfetched ref. Fetch,
   then look, then conclude. (2026-08-13: Montague correctly refused to
   force-merge what looked like a split history, and was right to refuse — but
   the split had already been reconciled; his container's refs were just stale.)
2. **Merge your work into `master` and push it.**
3. If merging would rewrite shared history, or it conflicts in a way you can't
   resolve safely, **stop.** Leave the work on a clearly named branch, push that
   branch so it's safe, and say so plainly in your run notes. Don't force it —
   reconciling shared history is Kevin's call, not yours.

Committing is not delivering. Landing on `master` is delivering.

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
The Complete System (the all-in-one $1,197/mo offer)), `website` (leads for the website-building offer, same
ICP but no site / a bad one), or `ads` (leads for the ad-management
retainer, same ICP with a real Yelp presence but no visible ad activity).
Standing criteria for all three tracks live in `prospects/_criteria.md`.
The track determines how Montague enriches and how Elly pitches — see
their persona files.

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
## Handoffs (cross-team)

This team is wired into the crew's handoff system — see `handoffs/README.md`. When a
job belongs to another team, write a handoff in `handoffs/` addressed `to:` them
instead of doing their work; inbound handoffs addressed to your agents arrive in
their dispatch prompt. KIREEK routes them.

## Quality gate — run before you ship ANYTHING

Quality over speed, always. Speed is worthless if the work is generic. Before you mark a task
done, advance a stage, or create a draft, stop and check — and if it fails, fix it or redo it,
don't ship it:

- **Purpose:** Do I know exactly what this is for and the ONE goal it must achieve? If I can't
  say it in a sentence, I'm not ready to produce.
- **Not cookie-cutter:** Is this built from the real client / ICP / goal and real data — not the
  fastest generic thing I could crank out? Would a competitor's could-be-anyone version look the
  same? If so, it isn't good enough.
- **Right, not just fast:** Did I do the thing *right*, or the quickest thing I could think of?
- **Would I put my name on it?** Would Kevin be proud to send, publish, or show this? If I'd
  hesitate, it's not done.

See the `craft-operating-system` skill for the full method: plan → ground in reality → produce
multiple distinct options → critique hard → pivot instead of polishing a weak idea → ship
quality → stay current. This applies to every deliverable, every agent, no exceptions.

## ⚠️ CURRENT OFFER (updated 2026-08-11) — read `_offer.md`

Pitch **The Complete System** ($1,197/mo all-in-one), per the live website
(viridiaanalytics.com/pricing, /, /blog). **"Business Essentials" and "Never
Miss a Lead" are RETIRED package names — never use them.** Ads and website
builds are separate add-ons. Full detail + how to pitch: `_offer.md`.
