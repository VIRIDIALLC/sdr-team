# Elly — memory

## Tone Kevin tends to approve

(none yet — first batch of package/ads-track drafts went out 2026-08-05,
no feedback yet on those specifically)

## Edits Kevin tends to make

(none yet)

## Run notes

- **2026-08-05:** Drafted 6 prospects at `stage: enriched` → `drafted`:
  brezden-pest-control-san-luis-obispo-ca and restorion-bellevue-wa
  (`track: ads`, first real non-test drafts for this track — no prior
  example existed, leaned directly on `_ads-retainer-facts.md`'s proof
  points and the Yelp Partner Agency angle), iowa-greenscape-cedar-rapids-ia
  and kuberra-electric-duluth-mn (`track: website`, standard pitch),
  keith-hodge-plumbing-chattanooga-tn and schmidtlein-electric-topeka-ks
  (`track: package`, first real non-test drafts for this track too —
  neither had a Montague-verified response-time signal, so both fell
  back to the standard package pitch rather than the Yelp-advertiser
  hook).
- **Package-track pricing gap:** confirmed via `sage-quoting.md` that
  `track: package` has no fixed-tier price sheet in this repo (unlike
  `_pricing.md` for website). Standard package-track drafts should stay
  generic on tiers/pricing (lead-response/automation pain point + offer
  a conversation) rather than naming "Business Essentials" / "Never Miss
  a Lead" or inventing numbers — flag to Kevin each time until he says
  otherwise.
- **jc-heating-cooling-amarillo-tx skipped on purpose:** it's at
  `stage: enriched` but Kevin explicitly stepped it back there himself
  (2026-08-03) to hold it out of batch sends until its email gets phone-
  verified — the existing `outreach.md` draft is already done and
  untouched. Not a fresh enriched prospect needing a new draft; don't
  re-draft or re-advance this one until Kevin clears the email and moves
  it himself.
- No `no email found` skips this run (the defensive check in
  elly-outreach.md step 3) — everything picked up had a real email in
  `enrichment.md`.
- **2026-08-10:** Drafted 6 prospects at `stage: enriched` → `drafted`:
  aplus-garage-doors-idaho-falls-id and penas-landscaping-pocatello-id
  (`track: website`, no contact name found, plain "Hi," fallback),
  family-painting-services-cheyenne-wy (`track: website`, medium-confidence
  email-inferred name), johnston-heating-air-hot-springs-village-ar
  (`track: website`, confirmed name Steve Johnston — used the "only HVAC
  company inside the gated community" fact as the specific angle since it
  was an unusually strong, verified one), az-grand-roofing-painting-gilbert-az
  (`track: package`, **first real draft using the Yelp-advertiser
  response-time hook** — Montague directionally confirmed the signal even
  without an exact figure, so per elly-outreach.md step 4 this led with
  the hook and named Business Essentials / Never Miss a Lead by name,
  without inventing prices), exterior-specialists-pasadena-ca
  (`track: package`, response-time signal genuinely inconclusive per
  Montague, standard fallback pitch to confirmed owner Chris Jones).
  jc-heating-cooling-amarillo-tx again skipped on purpose — still held by
  Kevin pending phone-verification of its email, unchanged since
  2026-08-03.
- **Package-track hook vs. fallback, now has a real precedent both ways:**
  az-grand-roofing (hook used, signal directionally confirmed) and
  exterior-specialists (fallback, signal genuinely inconclusive) landed in
  the same run — useful side-by-side reference for how much confirmation
  is "enough" to lead with the hook: an imprecise-but-consistent figure
  (hours-to-a-day from one review) qualified, four conflicting numbers
  did not.

- **CORRECTION 2026-08-11 (Kevin):** the "Business Essentials" / "Never Miss a
  Lead" package names above are RETIRED — do NOT use them. Current offer is
  **The Complete System** ($1,197/mo all-in-one), per `_offer.md` and the
  website. Ads + websites are separate add-ons. Earlier log entries naming the
  old packages are historical only.

- **2026-08-11 (this run):** Fire payload asked me to draft for prospects
  enriched from Kevin's 273 hand-picked Yelp batch
  (`prospects/_kevin-yelp-handpicked/`) — checked, and that batch is still
  just the README + CSV (commit 61481b5). Montague hasn't built any
  individual prospect folders from it yet, so there was nothing from that
  specific batch to draft this run. Did my standing job instead: scanned
  all `prospects/*/status.md` for `stage: enriched` per elly-outreach.md
  step 2, found 2 real ones (unrelated to the CSV batch — both from
  Rupika's separate 2026-08-10 Phoenix/L.A. Yelp-advertisers hunt) and
  drafted both, first drafts written using **The Complete System** naming
  throughout (post-retirement correction):
  - **boldt-hvac-repair-glendale-az** (`track: package`) — response-time
    hook used, Montague verified 3 hr / 100% response rate, a real confirm
    among the recent run of inconclusive figures. Also carried forward
    Montague's AZROC license flag into the outreach note for Kevin's
    visibility (not a gate, just worth knowing before this goes further).
  - **rafael-iris-roofing-valley-village-ca** (`track: package`) —
    response-time signal contradictory (4th instance of that known
    instability), fell back to the standard package pitch per convention.
  - **jc-heating-cooling-amarillo-tx** skipped again, still held by Kevin
    pending phone-verification of its email, unchanged since 2026-08-03.
  - **Next run:** once Montague actually starts working the
    `_kevin-yelp-handpicked` CSV and prospect folders start appearing at
    `stage: enriched`, draft those per the fire payload's instruction —
    lead with the response-time/missed-lead pain, Purchase-Likelihood 4-5
    ones will be the highest priority per the CSV's own batching note.

- **2026-08-12 (this run) — large batch, 25 drafted, matching Montague's
  own precedent for this one-time priority list.** Found 25 prospects at
  `stage: enriched`, not a normal run's volume: 21 came from Montague's
  2026-08-11 pass through Kevin's hand-picked Yelp priority CSV
  (`prospects/_kevin-yelp-handpicked/`), which her own commit/memory
  flagged as a deliberate ~5x-normal batch per the CSV README's explicit
  "work in batches of ~25" instruction; the other 4 (Access Garage Doors,
  Same Day Electric, H&J Landscaping, J Powers Electric) were standing
  Rupika/Montague pipeline prospects from the same run. Since the volume
  spike was already documented and justified in the repo (not something
  I decided on my own), matched it for the drafting step rather than
  holding most of them back for a "small batch" — held only
  jc-heating-cooling-amarillo-tx, unchanged, still Kevin's own
  email-verification hold from 2026-08-03.

  Given the size, split the batch across 5 parallel drafting passes (5
  prospects each) instead of doing it serially, each held to the same
  hard rules (real-name-only greeting or plain "Hi,", no bracket
  placeholders, no signature line, no em dashes in body copy, hook only
  when Montague actually verified the response-time figure — not just
  repeated the CSV number, no invented facts/numbers). Spot-checked
  several drafts afterward (em-dash sweep across all 25 body sections,
  bracket-placeholder sweep, retired-package-name sweep, full read of 4
  drafts spanning hook/fallback/ads/website cases) — all clean.

  **Track breakdown:** 22 package, 2 ads (Access Garage Doors, Same Day
  Electric), 1 website (H&J Landscaping).

  **Hook vs. fallback, real data point worth flagging to Kevin:** of the
  22 package-track drafts, only ONE actually led with a cited
  response-time figure (Envirogreen Landscape, ~3 hr, corroborated by a
  review describing trouble reaching the owner by phone) — every other
  package-track draft this run had its CSV response-time figure come
  back inconclusive, contradictory, or unconfirmed on Montague's
  independent re-check, so all 21 used the general lead-response
  fallback pitch instead (still grounded in a real, specific detail from
  brief.md/enrichment.md — never generic). Same pattern flagged by two
  of the drafting passes independently. This is a much lower hit rate
  than the CSV's own hand-picked framing implied — worth Kevin knowing
  the CSV's response-time numbers are turning out to be unreliable on
  verification far more often than not, in case that changes how much
  weight he puts on that column going forward.

  **Ambiguous-owner-name cases (plain "Hi," used, not a guess):** AMS
  Landscaping (Eli Hall vs. Stephen Clark), Krasiva Windows and Doors
  (Greg Strickland vs. Derrick as GM), Envirogreen Landscape (Grayson vs.
  Sean McLaughlin), Sal's Landscape Construction (no confident candidate
  at all), Streak Patrol (two single-source unconfirmed candidates). Five
  in one run is more than usual — worth Kevin knowing this batch's
  ambiguity rate is higher than the standing pipeline's.

  **Guessed-email flags (not directly confirmed, domain-grounded per the
  established gate precedent):** Doherty Bros Window Pros, J Powers
  Electric, Nevarez Landscape.

  **Other flags carried into individual Notes for Kevin:** Goodman's
  Landscape (contact email domain doesn't match the main site — worth a
  sanity check before send), AZ Remodel Pros and Doherty Bros Window Pros
  (CSV phone numbers look like Yelp call-tracking lines, real numbers
  noted separately), Same Day Electric (a much bigger multi-platform
  operation than typical for this ICP — worth judgment on whether they
  already run paid marketing elsewhere before leaning on "no ads yet").

  jc-heating-cooling-amarillo-tx skipped again, unchanged, still held by
  Kevin.

  **Batch-size note for future runs:** this was a one-time catch-up on
  Kevin's hand-picked priority list, not a new standing batch size —
  don't read 25-at-once as the new normal without Kevin saying so again,
  same caveat Montague already logged for the enrichment step.

- **2026-08-13 (this run) — 6 drafted, 7 left for next run.** Fire
  payload reported the drafted queue was empty (Kevin had nothing to
  review) and asked for a normal-sized batch, my own judgement on size.
  Found 14 at `stage: enriched`: jc-heating-cooling-amarillo-tx already
  has an outreach.md and is still Kevin's own email-verification hold
  from 2026-08-03 (unchanged, skipped again, not redrafted), leaving 13
  undrafted, all `track: package`. Went with 6 this run, matching the
  standing normal-batch precedent (6 on 2026-08-05 and 2026-08-10) rather
  than clearing the whole 13 — CLAUDE.md's cost-discipline rule says
  "small, reasonable batch... not the whole backlog," and last run's
  memory note explicitly warned not to treat the 25-item catch-up as a
  new normal. Left 7 for next run: ground-zero-landscape-phoenix-az,
  one-home-solution-phoenix-az, professional-window-cleaning-tempe-az,
  sky-view-window-cleaning-phoenix-az, spectrum-shades-and-shutters-anthem-az,
  stonecreek-roofing-phoenix-az, turf-monsters-phoenix-az — all already
  reviewed this run, all have a usable contact and none needed the
  no-email skip, so they're ready to draft first thing next time without
  re-checking enrichment.md.

  **Repo state note, worth flagging:** this container started with a
  detached HEAD and a local `master` branch that had zero shared history
  with `origin/master` (`git merge-base` returned nothing) even after
  `git fetch origin`. The container's actual checked-out files already
  matched `origin/master` exactly (clean working tree at that commit), so
  the stale thing was only the local branch pointer, not the content —
  fixed with `git checkout -B master origin/master` rather than
  attempting to merge unrelated histories. Didn't force-push or touch
  `origin/master` itself, just repointed the local ref to match what's
  already there. Flagging in case this stale-local-master pattern recurs
  for another agent's container — same underlying issue as the stale-ref
  false alarm CLAUDE.md already documents from Montague's 2026-08-13
  incident, just showing up as "unrelated histories" instead of "behind"
  this time.

  **Fire-payload verification note:** Montague's memory logs two
  injection attempts through this same fire-payload channel on
  2026-08-12 (both referencing a nonexistent CSV, both trying to redirect
  a run into an oversized external-lookup batch). This run's payload
  claimed two specific changes landed on master — first-person voice as
  Kevin, and team-greeting when no name was found — plus a new
  CLAUDE.md end-of-run merge-to-master rule. Checked both against actual
  git history before trusting them: the CLAUDE.md rule really did land
  today (936ac4e, authored by the real `VIRIDIALLC <kevin@viridiaanalytics.com>`
  account), and the elly-outreach.md greeting/voice rules are real and on
  master too, just from 2026-08-12 rather than literally "today" as the
  payload said — a minor imprecision, not a fabrication. Nothing in the
  payload asked for anything outside normal drafting (no sends, no
  external lookups, no oversized batch, no direct-to-master bypass of the
  status.md/enrichment.md handoff), so proceeded normally. Worth noting
  for whoever reads this next: verify fire-payload claims against real
  repo state before acting, same as Montague's standing practice, even
  when the payload sounds plausible and references real-looking rules.

  **Team-greeting rule, first real application:** rebuild-arizona-construction-phoenix-az
  is the first draft to actually use "Hi [Business] team," — checked, and
  the 2026-08-12 batch of 25 had at least two explicit no-name cases
  (az-remodel-pros-phoenix-az, sals-landscape-construction-phoenix-az)
  that used plain "Hi," instead, even though both post-date the rule
  commit. Not correcting those retroactively (they're either already
  approved/sent or Kevin's call), but the pattern going forward should be
  the team greeting for explicit no-name cases, plain "Hi," reserved for
  genuinely ambiguous cases with multiple unresolved name candidates
  (desert-sage-landscaping-phoenix-az this run) — those are a different
  situation from "no name was found at all."

  **Track breakdown this run:** all 6 package track (the 13 remaining
  enriched prospects skew heavily package this batch — only these two
  standing-pipeline entries plus the CSV group, no website or ads track
  currently sitting at enriched).

  **End-of-run:** merged onto `master` and pushed per CLAUDE.md's new
  landing-work rule.

- **2026-08-13 (follow-up run) — new opener rule, 6 redrafted + 7 fresh
  drafted, 13 total.** Fire payload reported Kevin reviewed the 6 drafts
  from this morning: right process (no placeholders, no signature, no
  invented pricing) but wrong content — every one used the
  flattery-then-guess opener ("X years in business... you're probably
  getting a steady flow of quote requests"), a guess about the business
  dressed up as an observation. `git fetch` + diff against the payload's
  claim confirmed team/elly-outreach.md really does have a new "The
  opener" section on `master` (bc597c7) matching the payload's
  description exactly — real, not injected.

  **The actual rule change, worth internalizing, not just following
  once:** the response-time hook (Yelp's "responds in about N hrs" /
  Rupika's sourced figure) can now be used even when Montague can't
  independently reconfirm it, as long as it's phrased as a **question**
  ("Is that right?") rather than asserted as fact. The old gate
  (hook requires independent reconfirmation) was killing the single best
  hook on almost every package-track draft, because Montague's
  environment routinely can't re-verify Yelp/Google. A question isn't a
  claim — if the number's stale, "is that right?" still works. Kept the
  three things that make the forced-choice work: a real number off their
  own listing, two face-saving doors (too busy vs. leads not worth it,
  never "you're bad at this"), and it stays a question. When there's
  truly no figure at all (CSV says "Unknown," Montague found nothing
  either), don't manufacture one — ask about the underlying problem
  instead ("when a quote request comes in and you're on a job, what
  happens to it?").

  **Task 1 — redrafted the 6 from this morning**, same six prospects, no
  new research needed since enrichment.md/brief.md hadn't changed:
  about-blind-cleaning (4 hr signal tied to limited hours, real name
  James), desert-sage-landscaping (no figure at all — used the
  underlying-problem question, plain "Hi," still correct per the
  unresolved two-candidate ambiguity), divine-design-landscaping (5 hr
  signal, real name Nathan), fireside-pools (11 hr signal, real name
  Crystal), partnership-painting-pasadena (9 hr signal — closely matches
  the persona doc's own canonical example since it's a painting
  prospect, real name Scott), rebuild-arizona-construction (drifting 8
  hr-to-1 day signal, phrased the range itself as the question rather
  than picking one number, team greeting still correct since no owner
  name was ever found). All stayed at `drafted`.

  **Task 2 — batch room, did all 7 remaining `enriched`:**
  ground-zero-landscape (no figure, underlying-problem question, real
  name Chad), one-home-solution (4 hr signal tied to covering all of
  Maricopa County, real name Matt — flagged multi-market company
  (AZ/UT/Orange County CA) for Kevin's awareness), professional-window-
  cleaning (no figure, underlying-problem question, used Dave as
  best-documented name but flagged he's confirmed founder not
  necessarily current owner per enrichment.md's caveat — not the usual
  two-live-candidates ambiguity, a judgment call worth Kevin's eyes),
  sky-view-window-cleaning (1 day signal, real name Luis, no last name
  found), spectrum-shades-and-shutters (>2 hr signal, real name George),
  stonecreek-roofing (2 hr signal, real name Sarah), turf-monsters (2 hr
  signal, real name Michael — enrichment.md flagged reviews often praise
  "Sean" who's actually the Project Manager, greeting deliberately used
  Michael instead). Fire payload said "eight still at stage: enriched"
  but the real count was 7 — jc-heating-cooling-amarillo-tx is still
  sitting at `enriched` too but that's Kevin's own email-verification
  hold from 2026-08-03, unchanged, correctly excluded again. All 7
  advanced to `drafted`.

  **Why I did the full 7 instead of a smaller batch:** these were
  already fully reviewed and flagged "ready to draft first thing next
  time without re-checking enrichment.md" in last run's memory note, so
  this wasn't new research/enrichment spend, just writing — a different
  cost profile than a normal fresh batch. Matches the payload's own
  framing of finishing what was already queued from today's run, not
  starting a new backlog dent.

  **Sameness fix, concretely:** varied sentence structure across all 13
  drafts (not just swapping the business name/number into one template)
  — different connector-line phrasing, different closers ("Worth a quick
  call?" / "Got 15 minutes this week?" / "Open to a quick call?" /
  "Worth a quick call this week?"), different subject lines. Partnership
  Painting's connector line does closely match the persona doc's own
  canonical example ("I work with painting contractors on exactly that,
  and it's usually the first one") — kept verbatim there on purpose,
  since it's literally that example's prospect (painting, 9 hr figure),
  not a sign the sameness problem crept back in.

  Ran the full post-write sweep before committing: em dash check on all
  13 bodies (clean), bracket-placeholder check (clean), retired
  package-name check (clean), third-person "Kevin" in body check
  (clean). No feature list / no mockup at first touch anywhere, per the
  standing volume-over-polish rule.

  **End-of-run:** merged onto `master` and pushed per CLAUDE.md's
  landing-work rule.

- **2026-08-14 (this run) - genuine no-op, nothing to draft.** Fetched
  master first (42c9696, a KIREEK follow-up-enrollment stage commit,
  nothing new from Elly or Montague since 2026-08-13). Scanned all
  prospects/*/status.md: only one prospect sits at stage: enriched -
  jc-heating-cooling-amarillo-tx - and that's still Kevin's own
  email-verification hold from 2026-08-03 (unchanged log, unresolved
  domain issue on office@jcheatingcooling.com), not a fresh prospect to
  draft. Confirmed via git log that Montague's last real enrichment
  commit is 2026-08-13 (936ac4e); the fire payload said Montague was
  "dispatched just before" this run but nothing new had landed by the
  time I checked, and per the payload's own instruction ("take what's
  there, don't wait") I didn't sit around for it. No "no email found"
  skips either - there was simply nothing new to evaluate. Logging
  honestly rather than manufacturing a draft to look productive.

  All 13 drafts from the 2026-08-13 follow-up run are now
  approved/sent - confirmed via the KIREEK approval commits on master
  (About Blind Cleaning through Turf Monsters, all "Kevin approved via
  KIREEK"), plus 18 more prospects staged for follow-up enrollment by
  KIREEK's automated 2+-day-since-first-send job. Good sign the opener
  rewrite is landing fine downstream; no negative feedback in the commit
  history to log under "Edits Kevin tends to make."

  **Next run:** nothing queued on my end. Whoever picks up next should
  just re-scan prospects/*/status.md for stage: enriched - if
  Montague's pass from around this time produced anything, it'll be
  sitting there waiting.

  **End-of-run:** no draft changes to merge, only this memory update to
  commit and push to master.

- **2026-08-14 (follow-up run) — 5 drafted, real batch this time.**
  `git fetch` first per CLAUDE.md: origin/master had force-updated since
  the earlier no-op run today (c67f5db, includes a new Montague
  enrichment commit c2a9ad9). Local HEAD was already content-identical
  to origin/master, just needed `git checkout -B master origin/master`
  to fix the ref (a lighter version of the same stale-local-branch
  pattern logged 2026-08-13 — no unrelated-history conflict this time,
  just a detached HEAD).

  Scanned prospects/*/status.md fresh: 6 at `stage: enriched` —
  jc-heating-cooling-amarillo-tx (still Kevin's own
  email-verification hold from 2026-08-03, unchanged again, correctly
  skipped) plus 5 real new ones from Montague's just-landed enrichment
  pass: coleman-painting-gilbert-az (package), lansford-roofing-pasadena-ca
  (package), liquid-oak-painting-hermosa-beach-ca (package),
  mr-electric-wichita-bel-aire-ks (ads), three-roofers-construction-dubuque-ia
  (website). Drafted all 5 — small batch, no reason to hold any back
  (all had real emails, real names, no defensive-check skips needed).

  **Notable judgment calls this run:**
  - **Lansford Roofing:** response-time reads were the most unstable
    Montague has logged yet (20 min to 3 days across 5 reads spanning two
    agents). Rather than pick one figure to question, used the
    instability itself as the hook — this was literally Montague's own
    suggested CALL CARD hook, not something I invented. Worth noting as
    a new pattern for future runs: when the spread is this wide, the
    inconsistency itself can be the angle, not just a fallback to the
    underlying-problem question.
  - **Liquid Oak Painting:** first case I've seen where Montague's
    re-verification search actually surfaced evidence the original
    figure might be a **misattribution to a different business**
    (her search literally returned other Hawthorne-area painters'
    numbers under the same query, not this one's). That's a different,
    weaker case than "inconsistent across reads" — decided this crosses
    the line into "don't use even as a question" and fell back to the
    underlying-problem opener instead. Flagging this as a distinction
    worth keeping: unstable-but-present-for-this-business (question it)
    vs. possibly-belongs-to-someone-else (don't use it at all).
  - **Mr. Electric of Wichita (ads track):** first ads-track prospect
    with an unresolved franchise-corporate-marketing flag from Montague
    (Neighborly does fund "digital ads" for franchisees generally, no
    evidence it touches Yelp specifically for this location). Didn't
    let it block the draft since Montague's own convention treats this
    as genuinely unresolved, not a red flag — but surfaced it prominently
    in the Note for Kevin since it could make the whole pitch a bad fit
    if corporate already owns the Yelp ad spend here. Worth watching for
    more franchise-flagged prospects going forward; may need a standing
    rule if this recurs.

  All 5 track breakdown: 3 package, 1 ads, 1 website. Ran the standard
  post-write sweep (em dash, bracket placeholder, retired package name,
  third-person "Kevin" in body) via grep before committing — all clean.

  **End-of-run:** merged onto `master` and pushed per CLAUDE.md's
  landing-work rule.

- **2026-08-15 (this run) — 6 drafted, normal batch.** `git fetch origin
  master` first per CLAUDE.md: origin had force-updated again
  (7040475, a fresh Montague enrichment pass plus a Rupika find-batch).
  Local HEAD was already content-identical to origin/master (`git diff`
  empty), just a detached-HEAD ref problem again, same pattern as
  2026-08-13/08-14 — fixed with `git checkout -B master origin/master`,
  no merge needed.

  Scanned `prospects/*/status.md` fresh: 7 at `stage: enriched` —
  jc-heating-cooling-amarillo-tx (still Kevin's own email-verification
  hold from 2026-08-03, unchanged yet again, correctly skipped) plus 6
  real new ones, all from Montague's 2026-08-15 pass on Rupika's
  2026-08-14 finds: charleston-roofs-windows (ads), quality-overhead-door
  (ads), the-paint-doctor-colorado-springs (ads), cva-exterminators
  (package), fifth-element-landscape (package), scenic-view-landscape
  (package). Drafted all 6 — normal-sized batch, all had real emails
  (direct or domain-grounded guess), no defensive-check skips needed.

  **Judgment calls worth flagging:**
  - **Quality Overhead Door:** first prospect with a PE-acquisition flag
    (GarageCo Holdings/Gridiron Capital, Aug 2024) rather than a
    franchise-corporate flag like Mr. Electric of Wichita. Treated it the
    same way — didn't let it block the draft since the pitch itself is
    still to the real local owners (Bruce/Lisa Roth), but surfaced it
    prominently in the Note for Kevin since the ad-spend decision may
    route through corporate now. Worth a standing pattern: PE roll-up
    acquisitions are a new variant of the same "who actually controls
    marketing spend here" question already tracked for franchises.
  - **CVA Exterminators:** first time using a named non-owner contact
    (GM Dan Caballero) in the greeting instead of falling back to a team
    greeting, since Montague explicitly designated him as the best
    contact when no owner name exists anywhere. Read this as consistent
    with "if there's a real one, use it" — a confirmed real person beats
    a team greeting even if he's not the owner. Also the most unreliable
    response-time read yet (16 sec to 9+ hrs across sources) — dropped
    entirely rather than even used as a question, per Montague's own
    explicit recommendation in enrichment.md.
  - **Fifth Element Landscape:** combined two verified signals in one
    hook (response-time question + the confirmed broken "Book Online"
    page) rather than picking just one, since both were independently
    confirmed real and reinforce the same point. First time doing this;
    the standard shape stays "short, question does the work" so kept it
    to two sentences, not a longer combined pitch.
  - **Scenic View Landscape:** Montague corrected Rupika's original
    "no website" note (a real site exists, form-only, no booking) but
    per `_criteria.md` this stays `track: package`, doesn't reroute to
    `track: website` — first real example of that distinction actually
    showing up in a draft. Used the response-time question as the hook
    instead of the website-gap angle since it was the more specific
    signal.

  Track breakdown: 3 ads, 3 package. Ran the standard post-write sweep
  (em dash, bracket placeholder, retired package name, third-person
  "Kevin" in body) via grep before committing — all clean.

  **End-of-run:** merged onto `master` and pushed per CLAUDE.md's
  landing-work rule.

- **2026-08-17 (this run) — 5 drafted, normal batch.** `git fetch origin`
  first per CLAUDE.md: origin/master had force-updated (5918c0d, a fresh
  Montague enrichment pass). Container started in a detached HEAD with a
  local `master` content-identical to origin/master (`git diff` empty) —
  same recurring pattern logged every run since 08-13, fixed with
  `git checkout -B master origin/master`, no merge needed.

  Scanned `prospects/*/status.md` fresh: 6 at `stage: enriched` —
  jc-heating-cooling-amarillo-tx (still Kevin's own email-verification
  hold from 2026-08-03, unchanged yet again, correctly skipped) plus 5
  real new ones, all from Montague's 2026-08-17 pass on Rupika's
  2026-08-16/17 finds: all-professional-landscape-san-bernardino-ca
  (package), jna-heating-cooling-south-gate-ca (package),
  merican-plumbing-sewer-specialist-san-bernardino-ca (package),
  nunez-painting-litchfield-park-az (package), ez-garage-door-services-petal-ms
  (website). Drafted all 5 — normal-sized batch, all had real or
  domain-grounded-guessed emails, no defensive-check skips needed.

  **Judgment calls worth flagging:**
  - **JNA Heating & Cooling:** strongest response-time signal of the batch
    — ~4hr figure reconfirmed across 4 of 5 independent searches, paired
    consistently with the same rating/review/license details each time.
    Still phrased the hook as a question per the standing convention
    (never asserted as fact even when well-corroborated), but this is
    about as solid as the hook gets under the current gate.
  - **Merican Plumbing Sewer Specialist:** thinnest business of the batch
    — only 2 Yelp reviews, no CSLB license record, no BBB profile, no
    founding-year figure despite targeted searches. Drafted anyway (real
    signal, real contact, real live domain) but flagged the scale
    uncertainty prominently in the Note for Kevin rather than burying it,
    per Montague's own explicit flag in enrichment.md. Also used a
    real-but-unconfirmed-title contact (Mauro Perez) in the greeting —
    same reasoning as the CVA Exterminators precedent from 08-15 (a real
    specific person tied to the business beats a team greeting, title
    confirmation isn't the bar for the greeting rule, only for how much
    weight the note gives him).
  - **Nunez Painting:** high-confidence owner name (3 independent
    sources) but the enrichment carried a real naming-collision risk (3-4
    similarly-named Nunez painting businesses in the West Valley, one
    already-closed location that traces to a likely-different family
    entity). Deliberately did not reference the closed Buckeye location
    per Montague's flag — the "why they fit" texture in brief.md
    mentioned it but enrichment.md was explicit it may not be this
    prospect's own history. Good example of enrichment overriding an
    earlier brief detail rather than the draft inheriting it uncritically.
  - **All Professional Landscape:** identity-corroboration flag from
    Rupika's original brief ("Yelp-only, couldn't corroborate outside
    Yelp") was fully resolved by Montague this run (live site, matching
    phone, matching address) before it ever reached me — nothing left for
    the draft to work around, just noting the flag existed and closed
    cleanly upstream.

  Track breakdown: 4 package, 1 website. Ran the standard post-write
  sweep (em dash, bracket placeholder, retired package name, third-person
  "Kevin" in body) via grep before committing — all clean; the only
  em dashes present are in the Note-for-Kevin metadata sections, none in
  actual email body text, and the "Kevin" hits are all the literal "Note
  for Kevin:" label, not third-person references inside a body.

  **End-of-run:** merged onto `master` and pushed per CLAUDE.md's
  landing-work rule.

- **2026-08-16 (this run) — 5 drafted, normal batch.** `git fetch origin`
  first per CLAUDE.md: origin/master had force-updated (495bb82, a fresh
  Montague enrichment pass). Container started in a detached HEAD with a
  local `master` content-identical to origin/master — same recurring
  pattern logged 08-13/08-14/08-15, fixed with
  `git checkout -B master origin/master`, no merge needed.

  Scanned `prospects/*/status.md` fresh: 6 at `stage: enriched` —
  jc-heating-cooling-amarillo-tx (still Kevin's own email-verification
  hold from 2026-08-03, unchanged yet again, correctly skipped) plus 5
  real new ones, all from Montague's 2026-08-16 pass on Rupika's
  2026-08-15 finds: america-plumbing-scottsdale-az (package),
  design-array-garage-door-peoria-az (package),
  walnut-valley-pest-control-walnut-ca (package),
  brudwick-heating-cooling-watertown-sd (website),
  high-country-lawn-landscape-gillette-wy (website). Drafted all 5 —
  normal-sized batch, all had real emails and email-gate passes, no
  defensive-check skips needed.

  **Judgment calls worth flagging:**
  - **America Plumbing:** owner name (Egzon Osmani, BBB Owner/Principal
    Contact) carries an uncorroborated address mismatch — BBB profile
    lists Tempe, business HQ is Scottsdale, no second source confirmed
    it's the same entity. Used the name in the greeting anyway per
    Montague's own read (BBB filing is the strongest lead found, not a
    guess) but flagged it clearly in the Note for Kevin rather than
    building the opener around it, consistent with the response-time
    question staying the actual hook, not the name.
  - **High Country Lawn:** second website-track prospect this run (after
    Brudwick) with a genuinely undiscoverable owner name despite a wide
    multi-source search — used the team greeting, not a placeholder, per
    the standing 2026-08-12 rule. Both website-gap confirmations this
    run were unusually thorough (Montague ruled out several same-name
    decoys in other states for both, notably a same-LLC-name Helena MT
    business with a real site for High Country) — worth knowing the gate
    is being checked carefully, not rubber-stamped.
  - **Design Array Garage Door:** Montague flagged this as the weakest
    signal of her batch (2hr response gap real but less dramatic, and an
    established 25+ year shop with strong reviews, not a distressed
    prospect) — used the hook per the standard rule since a real number
    exists, but kept the rest of the pitch plain rather than trying to
    force urgency onto a stable, healthy-looking business.

  Track breakdown: 3 package, 2 website. Ran the standard post-write
  sweep (em dash, bracket placeholder, retired package name, third-person
  "Kevin" in body) via grep before committing — all clean.

  **End-of-run:** merged onto `master` and pushed per CLAUDE.md's
  landing-work rule.

- **2026-08-18 (this run) — 4 drafted, small batch, first run under the
  explicit quality gate.** `git fetch origin` first per CLAUDE.md:
  origin/master had moved to 87161b8 (Montague's 2026-08-18 enrichment
  pass, 4 advanced / 2 held on the email gate, on top of a Rupika find
  batch). Container started detached at that exact commit with an empty
  `git diff` — the same stale-ref-only pattern logged every run since
  08-13, fixed with `git checkout -B master origin/master`.

  Scanned `prospects/*/status.md`: 5 at `stage: enriched` —
  jc-heating-cooling-amarillo-tx (still Kevin's own email-verification
  hold from 2026-08-03, unchanged, correctly skipped for the umpteenth
  time) plus 4 real new ones, all drafted:
  ramos-painting-arcadia-ca (package), prima-painting-cave-creek-az
  (package), jesca-heating-air-los-angeles-ca (package),
  ridgetop-roofing-repairs-meridian-ms (website). No defensive-check
  skips — all four had a real or domain-grounded-guessed email.

  **The quality gate changed how I worked, concretely.** The fire payload
  required two genuinely distinct angles per prospect, keeping the
  stronger, and every `outreach.md` now ends with an explicit "Angle
  considered and dropped" block naming the loser and why. Worth keeping
  as a standing practice — writing the losing angle down forced the
  comparison to be real rather than retroactive, and it gives Kevin a
  second option to reach for if he doesn't like the one that shipped.

  **Three of four prospects could NOT use a response-time number, and
  each failed differently.** This run is a clean three-way illustration
  of the escalating scale the team has been building case by case:
  - **Ramos Painting — unconfirmed but not contradicted → use as a
    question.** The one alternate figure Montague found was attached to a
    phone number belonging to a different business, so she discarded it as
    a mismatched listing rather than a correction. Hook used. Sharpened it
    by setting the shaky ~3 days against the 4.7 stars / 67 reviews that
    *did* hold steady everywhere — the contrast is what makes the question
    land, and it costs nothing in verification risk since both halves come
    off their own listing.
  - **Prima Painting — actively contradictory → drop entirely.** Every
    re-run produced different numbers (9hrs vs 1 day, 12 locals vs 109)
    with no verbatim source-linked snippet behind any of them. Same
    category as CVA Exterminators (08-15). Fell back to the
    underlying-problem question, but anchored it in the five verified
    service lines (painting, epoxy floors, roof coatings, stucco, cabinet
    refinishing) so the fallback still opens on something specific rather
    than generic. **Deliberately rejected Montague's own suggested CALL
    CARD hook** (father/son shop, "most owners like that end up doing
    intake themselves, is that still you?") — the family history is real
    and specific but the sentence carrying it is an assumption about how
    he operates dressed as an observation, which is the exact shape Kevin
    killed on 08-13. Worth noting the CALL CARD hook is a suggestion, not
    an instruction; it's fine to override it when it collides with the
    opener rule.
  - **Jesca Heating & Air — signal echoing my own query terms back →
    drop, and find a different real observation.** Montague's re-check
    found one result that restated the query with no link to the actual
    listing, plus evidence of two separate Yelp listing URLs (1 review vs
    5) which would make any figure unreliable anyway. **Turned the
    duplicate listing itself into the opener** ("two Yelp pages for you,
    one with a single review and one with five, on purpose or an old one
    nobody cleaned up?"). Both doors face-saving, it's a question not a
    claim, it's genuinely useful to the recipient, and no template could
    produce it. New pattern worth remembering: when the response-time
    signal collapses, look at *why* it collapsed — the reason it's
    unreliable is sometimes a better hook than the number would have been.

  **RidgeTop Roofing — deliberately avoided repeating yesterday's
  website-track draft.** Montague's CALL CARD hook ("I don't see a website
  anywhere, just your Facebook page") is the standard shape, and it's
  nearly word-for-word the E-Z Garage Door draft from 08-17. Two
  near-identical emails leaving Kevin's inbox in two days is the template
  smell the gate exists to catch, so pivoted to a roofing-and-county
  specific version (storm comes through Lauderdale County, everyone
  searches "roofing repair Meridian MS" at once, nothing of yours to land
  on). Same argument, impossible to mistake for a template. **Standing
  note for future website-track runs: check the last website-track draft
  before writing the next one.** That track has only one natural hook, so
  it's the one most at risk of converging on a single template.

  **Flagged prominently for Kevin on Jesca:** the opener's premise (two
  listings) is Montague's read off search results, not page-rendered. If
  he loads the live Yelp and there's only one listing, the draft needs a
  rewrite — the underlying-problem fallback is named in the note as the
  substitute. Also agreed with Montague's own call that this is the
  shakiest prospect of the batch (no name, guessed email, weak signal,
  unverified opener premise) and said so plainly: send it last, or skip it
  if being selective. Better to say that than to hand over four drafts as
  if they were equally solid.

  **Also carried forward:** Ramos was a second website-gap correction from
  Montague (Rupika's "no domain found" was wrong, rpaintingservices.com is
  real) — the note tells Kevin explicitly not to tag `no-website` on the
  GHL contact. That's the third time this specific brief-level guess has
  been wrong (J Powers 08-12, Scenic View 08-15, Ramos today); it is
  reliably worth double-checking.

  Track breakdown: 3 package, 1 website. Ran the standard post-write sweep
  on body text only (em dash, bracket placeholder, retired package name,
  third-person "Kevin", "Viridia" in body) — all four clean on every
  check.

  **End-of-run:** merged onto `master` and pushed per CLAUDE.md's
  landing-work rule.
