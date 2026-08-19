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

- **Sue** — **SDR Director** (joined 2026-08-18). Owns quality, handoff
  integrity, the KPI scoreboard, and the last check before work reaches
  `master` or Kevin. See `team/sue-director.md`.
- **Rupika** — prospecting. See `team/rupika-prospecting.md`.
- **Montague** — enrichment. See `team/montague-enrichment.md`.
- **Elly** — outreach drafting. See `team/elly-outreach.md`.
- **Sage** — quoting, once a `track: website` prospect replies. See
  `team/sage-quoting.md`.
- **Nova** — Magic Patterns build, once a quote is approved and photos
  are in hand. See `team/nova-build.md`.

Sue was reassigned here when Etsy went on indefinite hold
(`etsy-team/HOLD.md`).

### Sue is not an approval gate

Kevin still approves and sends everything — that never moves. Sue's job is that
work is already right when it reaches him, so his review is a decision rather
than a cleanup. She can send work back a stage, fix an error, retrain an agent
via their memory/persona file, and hold something out of Kevin's queue with a
written reason. She **cannot** send anything, enroll a contact, approve on
Kevin's behalf, or change the offer/pricing/ICP.

**Her first duty is the seams between agents, not just the content.** On
2026-08-18, Montague had found 25 real owner names and KIREEK's reader was
extracting one — his CALL CARD format changed on 08-13 and the reader still
only understood the older format, so 24 real names silently became
"<Company> Team" in GHL. Nothing errored, because a dropped name is
indistinguishable from a name that was never found. Checking that data survives
a handoff is the half of quality control nobody was doing.

## Kevin works through several doors — an unexpected change is usually his

**Kevin directs work from more than one place at the same time**, and every one
of them is legitimate:

- **claude.ai chat threads** (he gives direction live and the thread edits),
- **Claude Code sessions / VEGA** (this repo, the backend, the team repos),
- **his own hands** — GHL, Ads Manager, Magic Patterns, the live site.

So when something looks different from what you remember, or from what a dated
note in this repo says, **the overwhelmingly likely explanation is Kevin moving
through another door — not drift, not corruption, and not someone going rogue.**

Kevin, 2026-08-18, after a day lost to exactly this: *"the changes to the funnel
were done via claude chat per my instructions. I dont want shit getting all
confused again."*

What that means for you, every run:

- **Never revert, "restore," or undo an unexpected change.** Read the history
  first (git log, the artifact's version history, the relevant spec). A change
  with a real record behind it is Kevin's will.
- **Re-read shared state before you act on it** — `git fetch` first, and check
  the live system rather than trusting a note about it. Cloud routines, other
  sessions, and Kevin all write to these repos between your runs.
- **Verify by outcome, never by recollection or by reading source.** "Is the
  form working" is answered by a lead appearing in GHL, not by reading the page.
  Three separate false alarms on 2026-08-18 came from source-reading.
- **Dated log entries are history, not current state.** A `status.md` line from
  last week describes last week. One of them nearly triggered an agent dispatch
  to "fix" a page that was already live and correct.
- **If two sources genuinely disagree and you can't tell which is current, say
  so and stop.** Flag it for Kevin. Guessing is what manufactures the fourth
  conflicting story.

### The funnel specifically

`ai.viridiaanalytics.com` is edited by Kevin directly in Magic Patterns, by
claude.ai threads at his direction, and by Claude Code sessions. Current truth
is the **live page**, described by
`web-design-team/FUNNEL-SPEC.md` (which carries a MACHINE-TRUTH block), with
KIREEK's `check_funnel_truth.py` alarming when they disagree. Ad/page message
match is judged from the first-hand Meta snapshot
(`ads-team/campaigns/_performance-latest.md`), never from memory of which ad is
running.

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

- **Sue** doesn't sit in the stage chain — she reviews across it, traces fields
  end to end, and keeps the scoreboard in `reports/kpis.md`.
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
