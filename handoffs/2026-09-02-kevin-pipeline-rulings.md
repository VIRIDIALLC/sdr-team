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

## Addendum, 2026-09-03 evening: "find me 10 clients, emailing, replying, selling"

Kevin: *"I shouldn't be waking up to 0 prospects with emails waiting. I want
the whole SDR team to read my entire website, the offer, and go find me 10
clients. They need to be emailing, replying, selling. Every major city."*

### What is already true, so nobody re-does it

- **The offer is in this repo.** `_offer.md`, `prospects/_icp-home-service.md`,
  `collateral/complete-system-one-pager.md`, `collateral/case-study-onesheets.md`,
  `collateral/pitch-card.md`. Read all five at the start of every run. The
  live site is canonical and these must not drift from it, but as of
  2026-09-03 **no agent sandbox can open viridiaanalytics.com at all** (the
  Claude Code session that wrote this was egress-blocked on the same
  domain, from the same environment). Until Kevin flips the environment's
  network access to full, these files are the website.
- **Kevin's metro list is first in the rotation** (`prospects/_criteria.md`):
  LA, San Francisco, San Diego, Portland, Seattle, Oakland, Phoenix, Denver,
  Austin, Dallas, then every other major city.

### Why today was zero, in one line each

1. Network: Montague cannot open a prospect's website, so the email gate
   fails on almost everyone. Fix is a settings switch only Kevin can flip.
2. Caps: "small batch" on every seat. Fixed in this commit.
3. Send: nothing in this pipeline sends. Elly drafts; Kevin sends one by one.

### The send channel (proposed design, needs Kevin's one-time yes)

Nothing sends today without Kevin's per-item approval. That rule is written
in this repo and enforced by KIREEK's hooks; no agent can lift it and none
will. Kevin can, once, by changing the status line below. The design that
makes "emailing, replying, selling" real without burning his Gmail domain:

- **First touches go out through GoHighLevel, not Gmail.** GHL already
  runs the Yelp follow-up sequence. Elly's quality-gated first touch becomes
  a GHL contact + a one-step workflow enrollment, sent from the GHL sending
  domain, tracked, with unsubscribe handled. Gmail stays for replies and
  for Kevin's own hand-written notes.
- **Cold volume beyond ~30/day goes through Instantly on the warmed
  cold domain** (aiviridia.com, warming since 08-31, blend ~09-18). The
  real estate campaign is already specced there; the home-service lane
  gets its own campaign. Instantly handles rotation, warm-up and bounces.
  Sending 100 cold emails a day from kevin@viridiaanalytics.com would put
  the domain in spam within a week and take client mail down with it.
- **Replies are triaged, then drafted, never auto-sent.** A morning pass
  reads the GHL/Instantly inbox, classifies (interested / question /
  not-now / unsubscribe / bounce), drafts the reply, and puts interested
  ones on Kevin's CALL-READY list the same hour. Kevin sends replies. That
  is where the selling happens and it is the one step that should stay
  human until there is a transcript record showing the drafts convert.
- **Kevin's daily touch becomes one item:** "review the SDR drafts" in
  KIREEK, batch-approve, done. Not one email at a time.

**STANDING APPROVAL, PROPOSED (status: proposed):** Elly's first-touch
drafts that pass the quality gate may be enrolled and sent through GHL
without per-item review, capped at 30 per day, home-service package track
only, never to a domain already in the CRM, never to anyone who replied
"unsubscribe" anywhere. Every send is logged in the prospect's status.md
and in a daily digest in reports/. Kevin's kill switch is absolute: one
word and the enrollment routine is disabled.

Kevin turns this on by changing `status: proposed` above to
`status: approved` and pushing. Until then it is a design, not a rule.

### What "10 clients" actually requires, so the target is honest

Kevin's own doctrine numbers: roughly 1 close per 40 to 60 real
conversations at this price point, 1 conversation per 15 to 25 qualified
first touches. Ten closes is on the order of 6,000 to 12,000 first touches,
or 500 conversations. At 30 sends a day that is a year. At 150 a day through
Instantly plus the call list it is a quarter. The volume settings in this
commit are the first step; the send channel above is the second; neither
works until the sandbox can open a website.

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
