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

- **2026-08-19 (this run) — 2 drafted, small batch, that's all there was.**
  `git fetch origin` first per CLAUDE.md: origin/master had moved to
  957dad4 (Montague's 2026-08-19 enrichment pass, 2 advanced / 3 held on
  the email gate, on top of a Rupika find batch). Container started in a
  detached HEAD with local `master` 23 commits behind — the same stale-ref
  pattern logged every run since 08-13, but this time a plain
  `git checkout master && git merge --ff-only origin/master` did it, no
  unrelated-history weirdness.

  Scanned `prospects/*/status.md`: 3 at `stage: enriched` —
  jc-heating-cooling-amarillo-tx (still Kevin's own email-verification hold
  from 2026-08-03, unchanged, skipped again) plus the 2 real new ones, both
  drafted: casa-painting-northridge-ca (package) and
  reliant-pest-control-northridge-ca (package). No defensive-check skips —
  both had a genuinely CONFIRMED email, not a domain guess, which is the
  cleanest pair on that gate in a long while. Montague held the other three
  of her batch at `found` on the email gate, so 2 was the whole queue, not
  a batch-size choice.

  **The dominant judgment call this run: both prospects are in Northridge,
  both package track, drafted the same day, out of the same inbox. Sameness
  was the live risk, not signal quality.** Montague's CALL CARD hooks made
  it worse, not better: Casa's suggested hook is the response-time question,
  and Reliant's is the closed-weekends question, and Casa also has posted
  weekend-closed hours. Left alone, either pairing produces two emails with
  the same skeleton.

  - **Casa Painting — dropped a usable response-time number on purpose.**
    Montague actually reconfirmed ~2 hrs three times (superseding Rupika's
    ~5 hrs, which was never sourced across three targeted attempts). Under
    the standing rule it was fair game as a question. Didn't use it for two
    reasons: 2 hours is mild pain against 301 reviews, and the sentence it
    produces is near word-for-word the Ramos Painting draft from 08-18 —
    same trade, same "your Yelp shows N sitting next to X stars and Y
    reviews" shape, days apart. Built the opener on posted hours instead
    (Mon-Fri 7-4, closed weekends) against Saturday being when people decide
    to repaint. **New reasoning worth keeping: posted hours are a
    better-quality fact than a Yelp response average.** They don't drift
    between searches, they're structural, and they're just as much "off
    their own listing." Every time the response-time metric has failed us
    (six-reading spreads, misparses, misattributions) the posted hours were
    sitting there stable the whole time.
  - **Reliant Pest Control — the TV commercial beat the closed-weekend
    hook.** Response time was unusable (6 readings, 2 to 10 hrs, every one
    over the threshold but no stable number — Montague's call, agreed).
    Gary posted on his own LinkedIn about running a Spectrum TV spot. That
    reframes the whole pitch: he's not a business that needs convincing to
    invest in demand, he already bought it, and the question is only where
    it lands when the office closed at 4. Used his real posted opening time
    (8:30) in the body so the specificity is verifiable. Closing line sells
    the outcome with no feature named: "you'd already paid for that call
    before it rang."

  **Standing note, generalizing the 08-18 website-track one:** the "check
  the last draft in this track before writing the next" rule needs a second
  half — **also check the other drafts in your own current batch.** Two
  prospects enriched the same day, same city, same track will have
  converging hooks, and Montague's CALL CARDs won't flag it because she
  writes them one prospect at a time. That collision is mine to catch.

  **Also worth logging:** I overrode Montague's suggested CALL CARD hook on
  BOTH prospects this run. That's not a criticism of her cards, they're
  correct per-prospect. It's the third run in a row where the card was a
  suggestion I had good reason to decline (Prima Painting 08-18 was the
  first). The card is input, not instruction, and that's now well
  established.

  Deliberately left out of Reliant's body: the reviewer who reported being
  "lied to on the phone." Real corroboration that the communication gap
  exists, useful for Kevin on a call, but quoting a bad review at a stranger
  is the one door that isn't face-saving.

  Caught one sameness detail in the sweep — both drafts originally closed
  "Worth 15 minutes?" — and varied Casa's. Track breakdown: 2 package. Ran
  the standard post-write sweep on body text only (em dash, bracket
  placeholder, retired package name, third-person "Kevin", "Viridia") —
  both clean on every check.

  **End-of-run:** merged onto `master` and pushed per CLAUDE.md's
  landing-work rule.

- **2026-08-20 (this run) — 1 drafted, that's the whole queue.** `git fetch
  origin` first: origin/master force-updated to 021887c (KIREEK fleet-state
  refresh on top of Montague's 2026-08-20 enrichment, "1 advanced / 5 held on
  email gate"). Container started detached — same recurring stale-ref pattern,
  fixed with `git checkout -B master origin/master`, empty diff, no merge.

  Scanned `prospects/*/status.md`: 2 at `stage: enriched` —
  jc-heating-cooling-amarillo-tx (still Kevin's own email-verification hold
  from 2026-08-03, unchanged, skipped again) plus the 1 real new one, drafted:
  **freedom-roofing-coatings-chandler-az** (package). Montague held the other
  5 of her batch at `found` on the email gate, so 1 was the entire queue, not
  a batch-size choice.

  **The defining constraints on this draft, both from Montague's enrichment:**
  - **No response-time number exists to use.** She didn't just fail to
    reconfirm Rupika's ~8hr figure — she found structural evidence it was
    mis-sourced (the "5.0/16 reviews" it rode on traces to Angi; the Chandler
    Yelp listing carries no review count at all and is miscategorized
    "Flooring"). That's worse than "unconfirmed" — provenance in question — so
    it's in the "drop entirely, don't even question it" bucket (same as CVA
    08-15, Prima 08-18). The standard package opener was off the table from
    the start.
  - **The owner name is a landmine, so team greeting.** Rupika's "Jake Woods"
    turned out to be the owner of a *different* Freedom Roofing (Lake Havasu
    collision). Montague's replacement, "Beau Stowe," is single-source,
    AI-synthesized, and a literal name search returned an unrelated WA person.
    New rule of thumb worth keeping: **when a prospect has already burned us
    once on a name AND the replacement is single-source/synthesized, use the
    team greeting, not the replacement name** — even though Montague
    designated Beau "best contact." This is a different case from CVA/Merican
    (where the named non-owner was a *confirmed* real person). Confirmed real
    → use it; medium-confidence synthesized on a collision-heavy prospect →
    team greeting, flag the name for Kevin to verify before he dials.

  **Angle that won (documented in the outreach.md dropped-angle block):** the
  two-revenue-lines / coatings angle over the weekend-coverage-gap angle.
  Freedom is "roof to concrete" (roofing + epoxy coatings), and those lines
  buy differently — roofing is urgent so the caller waits, but a garage-floor
  coating is discretionary and comparison-shopped so the buyer hires whoever
  replies first, and those losses are silent. That's specific to their actual
  service mix and squarely the speed-to-lead pain the offer solves. The
  weekend-gap angle (grounded in posted Mon–Fri hours, needs no metric) was
  the runner-up but lost on template smell — near-identical shape to the Casa
  Painting 08-19 posted-hours opener out of the same inbox. **Reinforces the
  standing sameness rule: when the response-time hook is unavailable, the
  posted-hours/weekend-gap opener is becoming my default fallback, which means
  it's now the shape most at risk of converging. Reach for a
  business-specific angle first when one exists.**

  **Email flagged to Kevin as grounded-guess-not-deliverable:** info@ on a
  domain Montague confirmed live + Google-Workspace-mail-enabled by first-hand
  DNS lookup, but `info@` may bounce (Workspace rejects unknown recipients
  without a catch-all). Clears the gate per the grounded-guess precedent; not
  treated as confirmed.

  Track breakdown: 1 package. Body sweep clean (em dashes only in
  Note/metadata prose, none in email copy or the dropped-angle example quote;
  no bracket placeholders, no retired package names, no third-person
  Kevin/Viridia in the body).

  **End-of-run:** committed and pushed to `master` per CLAUDE.md's
  landing-work rule.

- **2026-08-21 (this run) — first-touch queue EMPTY, pivoted to the
  follow-up lane: 10 second touches drafted, the first this team has ever
  written.** `git fetch origin` first per CLAUDE.md: origin/master had
  force-updated to 91d29a5 (KIREEK fleet-state refresh on top of Montague's
  Links-backfill commits). Container started detached at that exact commit,
  clean diff — the same stale-ref pattern logged every run since 08-13,
  fixed with `git checkout -B master origin/master`. `_fleet-state.md` was
  27 minutes old, so ground truth was live, not stale.

  **The assigned task came back zero, and that's the headline.** Kevin's
  fire payload said to draft for "every enriched prospect that passes the
  email gate and has no draft yet." Scanned all 125 prospect folders: 79
  sent, 40 found, 2 approved, 2 dismissed, and exactly **1 at
  `stage: enriched`** — jc-heating-cooling-amarillo-tx, still his own
  email-verification hold from 2026-08-03, still already drafted. So the
  count of enriched-prospects-needing-a-draft was genuinely 0. **The
  bottleneck is upstream: 40 prospects are stacked at `stage: found` and
  Montague's last two commits were the `## Links` backfill, not an
  enrichment pass.** No amount of working this seat produces first touches
  until she runs. Flagged to Kevin in the approvals file and by push
  notification. Did NOT file a `handoffs/` item for it: handoffs are the
  cross-team channel and Montague is on this team, so the honest routes are
  the approvals file, this memory note, and Sue.

  **What I did instead, and why it's my lane and not a stretch.** 21
  prospects sit at `stage: sent` with `followup: held`. Per
  `team/elly-outreach.md` that lane is explicitly mine: their first touch
  was the website or ads angle, so the automated GHL Yelp sequence is the
  wrong message and they were correctly kept out of it. **Every one of them
  was sent a single email on 08-17 or 08-18 and had received nothing since,
  and not one had a second touch drafted.** That is precisely the failure
  the doctrine names (Velocify 3.5M leads: ~93% of conversions by the 6th
  attempt, half of leads never get a 2nd; XANT median follow-up is ONE
  attempt). We were the median. Drafted 10, left 11 for next run, and
  deliberately excluded sp-lawn-care-bangor-me because Kevin is handling
  that thread with Karl directly (status.md 2026-08-09) — a routine-
  generated follow-up landing inside a live conversation he owns is the one
  thing this lane must never do.

  **Convention I established this run, for whoever picks this up next:**
  second touches go in `prospects/<slug>/followup-1.md` (numbered, so
  touch 3 is obvious), `stage` stays `sent`, `followup:` stays `held`
  (changing it would imply the GHL sequence owns the prospect), and a dated
  log line goes in `status.md`. Nothing about the first-touch record moves.

  **The rule that governed every draft: a second touch must not re-argue
  the first one.** All five website first touches were built on the same
  spine (no website + the 84% BrightLocal stat), and all five ads first
  touches on the same spine (no Sponsored badge + the TFP/Finish Coat
  numbers). Restating either would have produced ten form letters. So I
  dropped the stat from every website follow-up and the proof numbers from
  every ads follow-up, and found a genuinely new argument per prospect:
  - **Access Garage Doors** (ads) — the sponsored block of competitors that
    sits on a non-advertiser's own Yelp page. Best property of this angle:
    **it needs no verification from us at all.** It's how Yelp's product
    works and Jesse can confirm it on his phone in ten seconds. Every ads
    draft we write is otherwise hostage to Montague's "inconclusive but not
    contradicted" badge check; this one isn't.
  - **Brezden Pest Control** (ads) — 46 years of word of mouth has a
    ceiling, and the ceiling is the person who moved to SLO in June and has
    never heard the name. Complimentary rather than corrective, which
    matters when writing to a man in the trade since 1974.
  - **Charleston Roofs + Windows** (ads) — the founders' own admission in a
    trade profile that windows is the harder half. Best angle in the batch;
    argues for pointing budget at the weak service line instead of the one
    that already fills itself. Premise is Montague's read of a search
    summary, not page-verified, so it's phrased as a question ending
    "Fair?" — a wrong premise then costs nothing and still earns a reply.
  - **Restorion** (ads) — restoration is the one trade with no repeat
    business worth counting on, so 100% of jobs start with a stranger
    searching. Had to steer clear of touch one's speed-of-response line;
    this argues about being *found*, not about responding fast once found.
  - **The Paint Doctor** (ads) — three markets, and paid placement is bought
    by geography, so spend in Denver and skip the market that's known them
    33 years. Reframes the pitch as allocation rather than volume, which is
    what separates it from the next agency email.
  - **Brudwick** (website) — the review where Allen got a customer's AC
    replacement covered by fighting their insurer. Invisible to anyone not
    already sitting on his Facebook page.
  - **E-Z Garage Door** (website) — "Pine Belt's most affordable" only pays
    if a shopper can compare him, and he's the one of the three they can't
    find.
  - **High Country Lawn** (website) — winterization, holiday lighting and
    snow removal are searched cold and start in about six weeks. **The one
    angle in the batch with a clock on it**, which is what a second touch
    most needs and rarely has.
  - **A+ Garage Doors** (website) — the real search Montague ran returned
    five Idaho Falls competitors' sites and not theirs. Named the count, not
    the competitors; naming them turns an observation into a jab.
  - **RidgeTop Roofing** (website) — they already have real job photos on
    Facebook, where a post dies in a day. Reframes a site from "another
    project" into "somewhere to put what you already do."

  **New ground, needs Kevin's ruling: two drafts name the website build
  price** ($500 to $1,200 one time plus $30/mo, the published tiers from
  `_pricing.md`, stated as a range and never as a quote). Used only on E-Z
  Garage Door and A+ Garage Doors, both tiny owner-operator shops whose
  realistic silent objection is "a website costs thousands," and E-Z's whole
  brand is being the affordable option so an email about price that hides
  its own price would be the wrong email to send him. Doctrine kit #3 has
  transparent pricing as buyers' #1 wish four years running. Kept it off the
  other three website drafts on purpose: three of five leading with cost is
  its own template. Each note names the exact paragraph to cut if Kevin
  says no. **Watch for his answer — it decides whether this becomes standard.**

  **First use of the published case-study page.** Doctrine §7's SDR gate
  item (4) wants a proof asset to link, and it finally exists:
  viridiaanalytics.com/case-studies is live and approved. Linked it in 2 of
  10 (Brezden, Paint Doctor) rather than all 10, so it stays a reason to
  click rather than a footer. `collateral/` one-sheets NOT attached and not
  referenced anywhere, per Kevin's explicit instruction that they're still
  awaiting his numbers.

  **Payload verification, per standing practice:** both claims in the fire
  payload checked out against real repo state before I acted on them —
  `collateral/` really does contain the two draft one-sheets, and the
  doctrine's §5 claim tiers are real and on master. Nothing in the payload
  asked for a send, an external lookup, or a bypass of the approval gate.

  Standard post-write sweep on body text only: em dash, bracket
  placeholder, retired package name, third-person Kevin/Viridia, and a new
  check for the doctrine's Tier 3 banned stats. All ten clean; eight of the
  ten contain no statistic at all.

  **Next run:** the remaining 11 held-lane follow-ups are listed by slug in
  `approvals/2026-08-21-followup-drafts-held-lane.md`, ready to write
  without re-reading enrichment. But check `stage: enriched` FIRST — if
  Montague has run, fresh first touches outrank follow-ups.

  **End-of-run:** committed and pushed to `master` per CLAUDE.md's
  landing-work rule.

- **2026-08-21 (second run) — 6 drafted, the whole enriched queue, and the
  first-touch pipeline is flowing again.** `git fetch origin` first per
  CLAUDE.md: origin/master had force-updated to cc6228e (KIREEK fleet-state
  refresh on top of Montague's second 2026-08-21 batch, 6 prospects).
  Container started detached at that commit, clean diff — the same stale-ref
  pattern logged every run since 08-13, fixed with
  `git checkout -B master origin/master`. `_fleet-state.md` was fresh
  (16:50 UTC), so ground truth was live.

  **This morning's run found the enriched queue at zero and the bottleneck
  upstream at Montague. That resolved itself the same day** — she ran twice
  more and put 13 prospects through, 6 of which reached `enriched`. Scanned
  all `prospects/*/status.md`: 7 at `stage: enriched`, being
  jc-heating-cooling-amarillo-tx (still Kevin's own email-verification hold
  from 2026-08-03, unchanged, skipped again, already drafted) plus the 6 real
  ones, all drafted: 1st-choice-plumbing-air-phoenix-az (package),
  on-point-exterminating-long-beach-ca (package),
  pro-service-electricians-whittier-ca (package), sm-electric-prescott-az
  (package), vigilair-heating-cooling-cerritos-ca (package),
  mgm-painting-martinsville-va (website). No defensive-check skips — five
  grounded-guess emails on confirmed-live domains, one genuinely confirmed
  address (MGM).

  **THE HEADLINE FOR KEVIN: five out of five package prospects had their
  response-time figure dropped by Montague.** Not one survived
  re-verification. 1st Choice returned three mutually contradictory numbers
  in a single sitting; Pro Service's "79 locals" traced to no source for that
  business at all; S & M flipped from ~2 hrs to 50 minutes within an hour;
  VigilAir was contradicted in the *good* direction by four independent
  sub-hour readings; On Point's figure never reproduced. **The golden-signal
  response-time column is now failing verification essentially 100% of the
  time.** I first flagged the low hit rate on 08-12 (1 of 22). It has since
  gone to zero. This is no longer a per-prospect quirk to note, it is a
  sourcing-method problem worth Kevin's ruling: either Rupika's capture
  method needs to change (screenshot or paste the widget text at sourcing
  time, the same way the `## Links` block was fixed on 08-20), or the team
  should stop treating that column as a signal and lean on structural facts
  instead. Raised in the run notes and by push notification.

  **The practical consequence: the standard package opener was unavailable on
  all five.** Every one needed an angle built from scratch. That is now the
  normal case, not the exception, and it is what the batch is really a record
  of:
  - **1st Choice Plumbing (Phoenix)** — the calendar. It is August 21 in
    Phoenix, peak week for a two-man father-and-son HVAC shop, so the pain is
    happening this afternoon rather than being averaged out of a widget.
    **New idea worth keeping: a dated, seasonal opener is the one kind that
    can't be templated, because it expires.** Noted in the draft that if it
    sits past mid-September the opener goes stale.
  - **On Point Exterminating (Long Beach)** — 33 reviews since 2012 on a
    quarterly-service business. **Took the same underlying finding Montague
    put on the card (customers describing weeks of silence) and viewed it from
    a flattering angle instead of quoting the bad reviews back at him.** Same
    call as Reliant Pest Control 08-19, same trade, so it's now a settled
    convention rather than a one-off.
  - **Pro Service Electricians (Whittier)** — their own published 24/7 claim.
    **The clearest override yet: Montague's card led with "your site says two
    decades, your registration says 2020."** That's a real find but it opens by
    asking a stranger to account for himself, and neither door is face-saving.
    A promise they made themselves is fair game; a discrepancy that implies
    they're overstating is not. Kept for a live call once there's rapport.
  - **S & M Electric (Prescott)** — founded 1982, so one front door became
    five (Yelp, web form, text, Facebook, phone). "Which one are you least
    sure somebody's watching?" is diagnostic: whatever he names is where the
    call starts. Complimentary posture, right for a 44-year shop, same
    reasoning as Brezden.
  - **VigilAir (Cerritos)** — **the most useful new precedent of the run.
    The evidence says this prospect is FAST**, four independent sub-hour
    readings, so the standard pain premise would have been not just
    unverifiable but wrong and insulting. **Inverted the pitch to protect a
    strength instead of alleging a weakness:** their speed is Susy personally
    answering, which is a person and not a system, and the question is what
    covers her on a 100-degree week. **Standing note: when re-verification
    contradicts the pain in the prospect's favour, that is not a dead
    prospect, it's a different email.** Worth reaching for before falling back
    to the underlying-problem question.
  - **MGM Painting (Martinsville VA, website track)** — he ran a sporting
    goods store for eleven years before painting, so he already knows what a
    storefront does; he just doesn't have one now. **Deliberately dropped the
    standard 84% BrightLocal stat**, because the argument was already concrete
    via his own biography and the stat is the exact element that makes every
    website-track draft resemble the last one. Named the swap-in line in the
    note so Kevin can restore it in one edit.

  **Batch-level sameness was the live risk again and it bit twice.** Two
  electricians (Pro Service, S & M) and three LA-metro prospects in one batch.
  The review-count mechanism was independently the strongest available angle
  for On Point, Pro Service AND S & M; using it on all three would have
  produced one template with the names swapped, so it won on On Point only
  and the other two were rebuilt. Also killed the 1st Choice
  insulation-vs-emergency angle outright because it was the same
  two-revenue-lines mechanism as the Freedom Roofing draft from 08-20, one day
  apart out of the same inbox. **This confirms the 08-19 rule: checking the
  other drafts in your own current batch matters as much as checking the last
  one in the track. Montague's cards can't catch it because she writes them
  one prospect at a time.**

  **Cards overridden on 4 of 6 this run** (1st Choice, On Point, Pro Service,
  S & M). That's the fifth run running. It's now well past being worth
  remarking on per-prospect: the CALL CARD hook is correct-per-prospect input
  written without sight of the batch, the opener rule, or the previous week's
  sends. Treat it as raw material.

  **Handoff-seam defect worth Sue's eyes, not blocking:** three of the six
  (On Point, Pro Service, VigilAir) reached `stage: enriched` with a complete
  `enrichment.md` but **no Montague log line in `status.md`** — only Rupika's.
  The other three have hers. The stage field advanced without the log entry
  documenting it, which is exactly the class of silent handoff gap Sue was
  brought in for (nothing errors, because a missing log line looks identical
  to a prospect nobody worked). Flagged, not patched — writing her log entries
  for her would hide the defect.

  **Pricing-in-email question from this morning is still unanswered.** Two
  website-track follow-ups (E-Z Garage Door, A+ Garage Doors) named the build
  price range. No ruling from Kevin yet, so I did NOT extend it to MGM
  Painting. Keep it contained until he rules.

  Standard post-write sweep on body text only: em dash, bracket placeholder,
  retired package name, third-person Kevin/Viridia, doctrine Tier 3 banned
  stats, stray signature line, and pricing. All six clean on every check. Six
  distinct subject lines, six distinct closers, six distinct mechanisms.

  **Next run:** first-touch queue is empty again after this. The real backlog
  is upstream (47 at `stage: found`) and in my own follow-up lane — 11
  held-lane second touches remain, listed by slug in
  `approvals/2026-08-21-followup-drafts-held-lane.md`, ready to write without
  re-reading enrichment. Check `stage: enriched` FIRST regardless; fresh first
  touches outrank follow-ups.

  **End-of-run:** merged onto `master` and pushed per CLAUDE.md's
  landing-work rule.

- **2026-08-22 (this run) — 2 drafted, the whole enriched queue.** `git
  fetch origin` first per CLAUDE.md: origin/master force-updated to 250415b
  (KIREEK fleet-state refresh on top of Montague's 2026-08-22 pass, "enriched
  2, held 4 on email gate"). Container started detached at that commit —
  same stale-ref pattern logged every run since 08-13, fixed with
  `git checkout -B master origin/master`, empty diff, no merge needed.
  `_fleet-state.md` was fresh (16:49 UTC), so ground truth was live.

  Scanned `prospects/*/status.md`: 3 at `stage: enriched` —
  jc-heating-cooling-amarillo-tx (still Kevin's own email-verification hold
  from 2026-08-03, unchanged, skipped again) plus the 2 real ones, both
  drafted: **sierra-vista-roofing-mesa-az** (package) and
  **overson-pest-control-mesa-az** (package). Montague held the other 4 of
  her batch at `found` on the email gate, so 2 was the entire queue, not a
  batch-size choice. No defensive-check skips: **both emails genuinely
  CONFIRMED, not domain-grounded guesses**, which is the cleanest pair on
  that gate since Casa/Reliant on 08-19.

  **A NEW AND WORSE FAILURE MODE ON THE RESPONSE-TIME COLUMN: a figure that
  was not stale or drifting but FABRICATED OUTRIGHT and attached to a real
  business.** Overson's brief carried "5 hr response / 114 locals requested
  a quote / 4.9 stars / 119 reviews." The verified Yelp page shows 63
  reviews. Montague ran it down: "119 reviews" never appeared in a single
  real snippet, only inside AI-written summary sentences; one search tool
  said outright that no business matching the figure appeared in results;
  and a sweep of every real Queen Creek pest-control listing matched none of
  them either. So the number belongs to no business at all. Every prior
  failure I've logged was drift, misparse, or misattribution to a *real*
  other business. This is invention. **Escalation of the 08-21 flag, raised
  again to Kevin in the approvals file and by push notification: the process
  only caught it because Rupika flagged the smell and Montague spent a run
  killing one number. That doesn't scale. Either the capture method changes
  at sourcing time (paste/screenshot the widget text, the same fix that
  worked for `## Links` on 08-20) or the column stops being treated as a
  signal.**

  **And in the same batch, the opposite: Sierra Vista's figure held clean.**
  100% response rate, ~6 hrs, Yelp title identical across an April and an
  August 2026 snapshot, agreeing across multiple independent searches.
  Montague's own words: "safe to use the figure as stated." **First package
  draft since JNA Heating on 08-17 to get to use the standard opener.**
  Still phrased it as a question, because the forced choice is what makes
  the opener work, not because the number was shaky. Worth remembering the
  pairing: the column is not uniformly broken, it is unverifiable-by-default
  with occasional clean reconfirmations, which is exactly why the
  verification step can't be dropped.

  **Judgment calls worth flagging:**
  - **Sierra Vista — used the 100% as hard as the 6 hours, on purpose.** A
    100% response rate is not a business ignoring leads, it's one answering
    all of them late. That makes both doors properly face-saving (up on a
    roof, or Yelp leads aren't worth the climb down) and stops the email
    reading as "you're slow." Kept the AZ ROC license conflict (Inactive per
    BuildZoom vs. active-to-2028 per HomeAdvisor) out of the body entirely
    and re-flagged it. Also left out the site's own "27 years of experience"
    claim: the LLC registered 2019-12-23 and the second-generation claim
    didn't reconfirm, so it's a call question, not an email fact.
  - **Overson — overrode Montague's CALL CARD hook on pure batch-level
    template collision, the clearest instance yet.** Her hook (63 reviews
    flat since 2015, nobody runs a review-ask system) is genuinely good and
    I'd have used it on its own. But it is near-identical to the On Point
    Exterminating draft from 08-21: same trade, same review-count mechanism,
    same shape, one day apart, same inbox. **New standing rule: the
    review-count/review-ask angle is now off the table for pest control
    prospects specifically until real distance has passed** — it has been
    independently the strongest available angle for three pest control
    prospects in a row (Reliant 08-19, On Point 08-21, Overson today), which
    is precisely what makes it a template risk rather than an asset.
  - **Overson's winning angle inverts the usual package premise: credit the
    investment he already made.** He has a dedicated
    /queen-creek-az-pest-control/ landing page on a real, professionally
    built site, so the email opens on a decision he made rather than
    something broken, then asks what catches the form fill after hours.
    Nearest relative is Reliant's TV-commercial angle (08-19), and I kept
    them apart deliberately by avoiding the closing-hours framing that draft
    used. **Generalizable: "you already paid to create the demand, where
    does it land" is a strong package angle whenever the prospect has
    visibly invested in getting found, and it's the natural one to reach for
    when the prospect's website is GOOD** — which is the case the standard
    package playbook has no answer for.
  - **Both drafts were also checked against each other**, per the 08-19
    within-batch rule. Two Mesa AZ package prospects drafted the same day is
    exactly the collision setup. They ended up sharing no mechanism, no
    shape, no subject line and no closer, but that was a constraint I wrote
    under, not luck.

  Track breakdown: 2 package. Standard post-write sweep on body text only
  (em dash, en dash, bracket placeholder, retired package name, third-person
  Kevin/Viridia, pricing, Tier 3 stats) — both clean. The single `%` hit is
  Sierra Vista's verified 100% response rate.

  **Did NOT touch the follow-up lane this run.** The payload scoped me to
  the `stage: enriched` first-touch job and that queue was real, so I did it
  in full rather than widening. The 11 held-lane second touches remain
  listed by slug in `approvals/2026-08-21-followup-drafts-held-lane.md`.

  **Next run:** check `stage: enriched` first as always. Upstream backlog is
  now **51 at `stage: found`** (47 yesterday, 40 the day before) — it is
  growing faster than Montague's email gate is clearing it, so the
  first-touch queue will keep arriving in twos and threes. The 11 held-lane
  follow-ups are the realistic place to spend surplus capacity.

  **End-of-run:** committed and pushed to `master` per CLAUDE.md's
  landing-work rule.

- **2026-08-23 (this run) — 3 drafted, the whole enriched queue, and
  `_fleet-state.md` was 19 HOURS STALE.** `git fetch origin` first per
  CLAUDE.md: origin/master force-updated to 75a50ef (Montague's 2026-08-23
  pass, "3 advanced to enriched, 3 held on email gate", on top of two Rupika
  find batches). Container started detached — same stale-ref pattern logged
  every run since 08-13, fixed with `git checkout -B master origin/master`,
  clean diff, no merge needed.

  **Ground truth was NOT live this run, and that's the first time.**
  `_fleet-state.md` says "Generated: 2026-08-22 22:07 UTC" and this run
  started 2026-08-23 17:08 UTC. That is 19 hours, well past the ~12 hour
  threshold the file itself defines as "the loop is down." Rupika and Montague
  both committed real work after that timestamp, so the repo was moving while
  the sync loop wasn't. Per CLAUDE.md I said so plainly rather than quoting
  its numbers, flagged it at the top of the approvals file, and pushed a
  notification. **Every figure in that file (MRR, this week's conversation
  count, systems health, per-team approval counts) is yesterday evening's.**
  The prospect files are written by the agents directly, not by the loop, so
  the drafting job itself was unaffected. Worth knowing for whoever runs next:
  a stale fleet-state does not block a run, it just means the run can't cite
  fleet numbers.

  Scanned `prospects/*/status.md`: 4 at `stage: enriched` —
  jc-heating-cooling-amarillo-tx (still Kevin's own email-verification hold
  from 2026-08-03, unchanged, skipped again) plus the 3 real ones, all
  drafted: **resolve-landscape-cypress-ca** (package),
  **roofing-systems-incorporated-panorama-city-ca** (package),
  **ab-plumbing-marshalltown-ia** (website). Montague held 3 of her 6 at
  `found` on the email gate, so 3 was the entire queue, not a batch-size
  choice. No defensive-check skips: two confirmed emails, one guessed-on-a-
  confirmed-live-domain (Roofing Systems).

  **The response-time column produced one clean figure and one contradiction
  in the same batch, which is now the settled shape of it.** Resolve's ~3
  days / 100% reproduced verbatim in 2 of 4 independent re-checks and was
  never contradicted; Roofing Systems' flipped between 1 day and 2 hrs off
  the same cached snippet with the quote-request count moving 2 to 6.
  Second clean figure in two days (Sierra Vista 08-22 was the other) after
  five straight failures on 08-21 and an outright fabricated one on 08-22.
  **Updated read: the column is unverifiable-by-default with roughly a
  one-in-three clean rate, not uniformly broken.** The 08-21/08-22 escalation
  to Kevin still stands (fix the capture method at sourcing time), but the
  "essentially 100% failure" framing I used on 08-21 was too strong and this
  week's data corrects it.

  **Judgment calls worth flagging:**
  - **Resolve — the three days is a categorically different pitch from the
    usual six-to-nine hours, and I built on that rather than on the metric.**
    Six hours is late; three days is after the decision. The consequence line
    is landscaping-specific (a yard redo is discretionary, so the buyer
    quotes several companies the same afternoon rather than calling one and
    waiting). **Also had to dodge a direct collision: Sierra Vista Roofing
    went out 08-22 on 100% + six hours, same inbox, one day apart.** Leading
    with the 100% as praise then pivoting to the number under it would have
    been that exact draft with the trade swapped. So this one leads with the
    three days and questions his *method* instead of his speed: "nobody hits
    100% by accident, so my read is you clear the whole pile at once when you
    get off a job, is that about right?" **New pattern worth keeping: when
    the same metric pair comes up twice in a week, ask about the behavior
    that produces the number instead of the number.** Both doors stay
    face-saving (disciplined and busy, or discerning) and it's still a
    question.
  - **Roofing Systems — posted hours beat the metric again, and this is now
    my standing first fallback.** Figure was contradictory so it was dropped
    entirely per the CVA convention. Went to the posted hours: 7am to 11:45pm
    daily, nearly seventeen hours, seven days. That isn't a business's hours,
    it's one man saying call me whenever. **The forced choice writes itself
    and neither door is a criticism** (he really is that available, or he
    posted it so people reach him instead of voicemail), and the follow-on
    line makes the offer's whole argument without naming a feature: the
    promise is real and a person is the only thing holding it up. First noted
    on 08-19 (Casa Painting) that posted hours are a better-quality fact than
    a response average because they don't drift between searches. **Every
    time the metric has failed this month the posted hours were sitting there
    stable the whole time. Treat them as the first thing to reach for when
    the figure dies, ahead of the underlying-problem question.** Note this is
    the *inverse* of Casa's closed-weekends gap, so the two don't collide.
  - **AB Plumbing — the name collision IS the website argument, and it's the
    best website-track hook I've had.** Five unrelated AB Plumbings across
    four states plus abplumbing.net belonging to a Sacramento business. So the
    email doesn't argue that a website is good marketing, it points out the
    internet has no way to tell them apart from five strangers. **Best
    property: every fact in it is checkable by the recipient on their own
    phone in ten seconds**, same quality I liked in the Access Garage Doors
    follow-up (08-21). **Generalizable: on a generic business name, run the
    collision check and make it the hook — it converts the track's one
    template-prone argument into a specific one.**
  - **Dropped the 84% BrightLocal stat again** (second website draft running,
    after MGM 08-21). Named the swap-in sentence in the note. Two separate
    reasons now: the argument was already concrete, and the persona file's own
    instruction to recheck the figure is current has not been done by anyone.
    **That recheck is genuinely overdue and worth someone's run.**

  **Overrode Montague's CALL CARD hook on Roofing Systems** (her "what's
  slowing you down on turning quote requests into booked jobs" asks a stranger
  to account for a weakness with no face-saving door — the 08-13 shape). Kept
  her hooks on the other two, which is the first run in six where I didn't
  override the majority. Her Resolve card was correct and I used its substance.

  **The review-count mechanism is now formally retired for a while.** It was
  independently the strongest available angle on On Point (08-21), Overson
  (08-22, killed for collision) and now both halves of Roofing Systems. Four
  prospects in six days. It's a good mechanism that has become a template
  risk purely by winning too often; leaving it alone until real distance has
  passed, same as the pest-control rule from 08-22.

  **Batch-level check across my own three:** two package prospects, both LA
  metro (Cypress OC and Panorama City SFV), drafted the same day. Both land on
  "the owner personally is the system," which is inherent to the offer, so I
  forced the *evidence* and *shape* apart instead: a response metric plus a
  batching question vs. posted hours plus a public-promise question. Three
  distinct subjects, three distinct closers, three distinct mechanisms. Caught
  one sameness detail in the sweep (Resolve and Roofing both closed on "this
  week?") and varied Roofing's.

  Track breakdown: 2 package, 1 website. Standard post-write sweep on body
  text only (em dash, en dash, bracket placeholder, retired package name,
  third-person Kevin/Viridia, pricing, doctrine Tier 3 stats, stray signature)
  — all three clean on every check. The single `%` hit is Resolve's verified
  100% response rate.

  **Pricing-in-email question from 08-21 is STILL unanswered** (four runs
  now). Kept contained to the two follow-ups that already have it.

  **Next run:** check `stage: enriched` first as always. Upstream backlog is
  now **54 at `stage: found`** (51 on 08-22, 47 on 08-21, 40 on 08-20) — still
  growing faster than the email gate clears it. The 11 held-lane second
  touches in `approvals/2026-08-21-followup-drafts-held-lane.md` remain the
  realistic place to spend surplus capacity. **And check whether the
  fleet-state loop came back up** before citing anything from that file.

  **End-of-run:** committed and pushed to `master` per CLAUDE.md's
  landing-work rule.

- **2026-08-24 (this run) — 4 drafted, the whole enriched queue, and the
  hardest within-batch collision setup I have had.** `git fetch origin` first
  per CLAUDE.md: origin/master had moved to d78db0a (KIREEK call-loop and
  fleet-state commits on top of Montague's 2026-08-24 pass, "9 stage:found
  prospects enriched", plus two Rupika find batches). Container started
  detached — same stale-ref pattern logged every run since 08-13, fixed with
  `git checkout -B claude/elly-2026-08-24 origin/master`. `_fleet-state.md`
  was fresh (17:07 UTC, run started ~17:1x), so ground truth was live, unlike
  08-23 when it was 19 hours stale.

  Scanned `prospects/*/status.md`: 5 at `stage: enriched` —
  jc-heating-cooling-amarillo-tx (still Kevin's own email-verification hold
  from 2026-08-03, unchanged, skipped again) plus the 4 real ones, all
  drafted: **all-around-electrical-services-avondale-az**,
  **gallantry-electric-tolleson-az**,
  **cabinet-refinishing-specialist-burbank-ca**,
  **hendrix-painting-long-beach-ca**. All package track. No defensive-check
  skips: one guessed `info@`, three found-not-guessed (site content, Facebook
  attribution, directory).

  **TWO collision pairs in one batch, which is new and shaped every decision
  this run.** All four package track, same day, same inbox, and they pair up
  twice: two electricians about six miles apart in west Phoenix (Avondale and
  Tolleson) and two painting-adjacent shops in LA metro (Burbank cabinet
  refinishing, Long Beach painting). Worse, Montague's suggested CALL CARD
  hook for BOTH electricians was the standard response-time question. Left
  alone this run produces two pairs of near-identical emails. **The 08-19
  within-batch rule has always been about one pair; two pairs at once means
  the collision check has to happen before you pick any angle, not after you
  draft.** Wrote all four under that constraint deliberately.

  **Judgment calls worth flagging:**
  - **All Around Electrical — used the advertised 24/7 emergency service as
    the other half of a contrast, and this is a pattern worth keeping.** They
    promote 24/7 emergency service while Yelp shows ~3hrs on a quote request.
    The forced choice is about *lanes* rather than about being busy (is the
    Yelp box a once-a-day check, or is a quote request just not the same
    animal as a dead panel at midnight), and the payoff line is that he is
    quickest in the lane where nobody is comparing him and slowest in the one
    where they are. **Best property: the draft survives its response-time
    figure being wrong**, because the load-bearing fact is his own advertised
    promise. Generalizable: when a prospect advertises 24/7 or emergency
    service, that promise plus any slower channel is a stronger and more
    durable contrast than the bare metric. It is a cousin of the Roofing
    Systems posted-hours draft (08-23) so I deliberately built it on two
    *channels* rather than on hours, to keep them apart.
  - **Gallantry Electric — the rename is the hook, and the response-time
    figure got demoted on purpose.** Montague confirmed a genuine rebrand
    (Gerry Electric LLC → Gallantry Electric) via matching phone AND address
    under both names across Yelp, Nextdoor, homeyou and Instagram. Facebook is
    still at /GerryElectricLLC/ and Instagram is still gerryelectricllc while
    Yelp carries the new name. Same quality I keep coming back to: **every
    fact in it is checkable by the recipient on his own phone in ten seconds**
    (AB Plumbing 08-23, Access Garage Doors 08-21). The 2-3hr figure still
    appears but in the third paragraph as a compliment ("a perfectly good
    reply time") supporting the argument, not carrying it. **New note: when
    two prospects in a batch both deserve the standard opener, the one with a
    fact nobody else in the pipeline has should give it up, not the other
    way round.**
  - **Cabinet Refinishing — opened on a compliment that is literally in his
    reviews, and I think this is the best opener shape I have found in a
    while.** Rupika spotted it in the brief and Montague quoted two verbatim
    review snippets confirming it: customers praise him as responsive and
    quick to answer *once engaged*, while the Yelp first-touch figure is 2-3
    hours. So the pain is not that he is unresponsive, it is specifically the
    first two hours before a stranger has reached him at all. That is
    complimentary rather than corrective, which is exactly what you want when
    raising the one thing his reviews say he is good at. **Generalizable: when
    reviews praise responsiveness and the first-touch metric is slow, the gap
    between them IS the opener, and it is a friendlier one than the standard
    forced choice.**
  - **Cabinet Refinishing's consequence line inverts the usual speed-to-lead
    argument and it is the thing I would defend hardest this run.** In most
    verticals a slow reply loses the job to a faster competitor. In cabinet
    refinishing the real alternative is *replacement*, so an unanswered
    homeowner walks into a cabinet showroom and the job leaves the category
    entirely rather than going to a competitor. **Worth generalizing: ask what
    the prospect's real alternative is, not who their competitor is. In some
    trades the lost job doesn't move sideways, it disappears.** Also had to
    avoid Resolve Landscape's "asks three companies the same afternoon"
    construction (08-23), which this replaces cleanly.
  - **Hendrix Painting — reframed eight hours as a full working day, and the
    argument underneath is calendar position, not speed.** A paint quote is
    almost never a price over email, it is a walkthrough. So the first reply
    is a calendar slot, and whoever books it has the homeowner's Saturday
    morning and a face-to-face before anyone else has spoken to them. **New
    mechanism, not used before: speed as calendar position rather than speed
    for its own sake.** Applies to any trade where the quote requires a site
    visit (painting, landscaping redesign, roofing replacement), so it is
    reusable but should now be watched for the same over-winning problem the
    review-count angle had.
  - **Hendrix greeting: plain "Hi," not the team greeting.** Two unresolved
    owner candidates (brothers Bobby Ray and David Joe, Yelp's own bio says
    "owned by Bobby and David H." with no precedence), which is the
    AMS/Krasiva/Desert Sage case, not the no-name-found case. The 08-13
    distinction held up well here and is worth keeping crisp: **nothing found
    → team greeting; multiple live candidates → plain "Hi,".**

  **Overrode Montague's CALL CARD hook on two of four** (both electricians),
  both times on batch collision rather than on any defect in her cards. Her
  Cabinet and Hendrix cards were correct and I used their substance. The card
  is input, not instruction — well established by now.

  **Response-time column this run: no fabrications, which is an improvement.**
  All Around ~3hr inconclusive-but-not-contradicted; Gallantry 2-3hr drifting
  but direction-consistent; Cabinet drifted 2hr→3hr (normal band) with the
  quote-count figure correctly dropped as actively contradictory (four
  searches, four numbers, AI layer producing 259 then 239); Hendrix
  unconfirmed with no stable snippet, originals carried forward rather than
  swapped. Nothing invented, unlike Overson on 08-22. **The 08-23 read holds:
  unverifiable-by-default with roughly a one-in-three clean rate, not
  uniformly broken.** Escalation from 08-21/08-22 still stands. Wrote three of
  the four drafts so they survive their figure being wrong, which is the real
  mitigation available to me while the capture method is unfixed.

  **Bookkeeping gap found and flagged, not fixed:** hendrix-painting-long-beach-ca
  had NO Montague log line in `status.md` despite a complete `enrichment.md`
  and an already-advanced stage. Same class as the ed-pat / jb-plumbing /
  pinnacle-painting backfill she did on 08-24. Flagged for Sue in the
  approvals file and in my own log line; did not write a line in Montague's
  voice.

  Track breakdown: 4 package. Standard post-write sweep on body text only (em
  dash, en dash, bracket placeholder, retired package name, third-person
  Kevin/Viridia, pricing, Tier 3 stats, stray signature) — all four clean. The
  single pricing hit was the false positive "the first reply isn't a price" in
  the Hendrix body. Four distinct subject lines, four distinct closers, four
  distinct opening sentences, four disjoint mechanisms.

  **Doctrine §7 SDR gate item 4** (a proof asset to link, kit #2) is still
  missing and was flagged again in the approvals file rather than worked
  around. These four-line first touches cite nothing, per Kevin's 08-13 ruling
  on what a first touch is.

  **Pricing-in-email question from 08-21 is STILL unanswered** (five runs now).
  Kept contained to the two follow-ups that already have it.

  **Next run:** check `stage: enriched` first as always. Upstream backlog is
  now **59 at `stage: found`** (54 on 08-23, 51 on 08-22, 47 on 08-21, 40 on
  08-20) — still growing faster than the email gate clears it. The 11
  held-lane second touches in
  `approvals/2026-08-21-followup-drafts-held-lane.md` remain the realistic
  place to spend surplus capacity.

  **End-of-run:** merged onto `master` and pushed per CLAUDE.md's landing-work
  rule.

- **2026-08-25 (this run) — 1 drafted, the whole enriched queue, and the first
  run where the selling kit actually gets linked.** `git fetch origin` first per
  CLAUDE.md: origin/master force-updated to aa4d078 (KIREEK fleet-state refresh
  on top of Montague's 2026-08-25 pass, "1 advanced / 1 email-gate hold", on top
  of a Rupika top-up). Container started detached at that commit with a clean
  diff, the same stale-ref pattern logged every run since 08-13, fixed with
  `git checkout -B master origin/master`. `_fleet-state.md` was fresh (16:46
  UTC), so ground truth was live.

  Scanned `prospects/*/status.md`: 2 at `stage: enriched` —
  jc-heating-cooling-amarillo-tx (still Kevin's own email-verification hold from
  2026-08-03, unchanged, skipped again) plus the 1 real one, drafted:
  **owen-plumbing-yorba-linda-ca** (package). Montague held her other one at
  `found` on the email gate, so 1 was the entire queue, not a batch-size choice.
  No defensive-check skip: the email is the business's own published address
  from their contact page, not a guessed pattern.

  **The approvals model changed this run and it is worth internalizing, not
  just following once.** Kevin's 08-25 ruling after the "19 approvals but really
  nothing" incident: no more dated first-touch files. There is now exactly ONE
  rolling file, `approvals/ROLLING-first-touch-drafts.md`, **regenerated from
  scratch every run to display every prospect currently at `stage: drafted`,
  not this run's additions.** The point is that a dated file records history and
  then rots, while the queue Kevin actually needs is live state. `status.md`
  frontmatter stays the source of truth; the approvals file is a view of it. All
  four old dated first-touch files were already `status: superseded`, so there
  was nothing to close. Left `2026-08-21-followup-drafts-held-lane.md` open on
  purpose: it is not a first-touch file and it tracks 11 genuinely undrafted
  second touches, so closing it would delete a real to-do.

  **Doctrine §7 SDR gate item 4 is finally CLOSED.** Kit #2 exists and Kevin
  approved it on 08-24 with the explicit instruction "Elly: start linking the
  collateral in drafts" (verified against the real approval file before acting,
  not taken from the fire payload alone). So the body now carries one line
  linking viridiaanalytics.com/case-studies, placed after the ask so the
  question still closes the argument. That gate had been flagged missing on
  every run since 08-19.

  **Held the one-pager back from the email, deliberately, and said so plainly
  in the approvals file.** Kevin's own approval note keeps the guarantee out of
  anything public until lawyer review and says it is fine to say on calls. A
  cold-email attachment to a stranger is not a call. So the one-pager is the
  phone leave-behind and the attach-after-he-replies asset, and the case-studies
  page (already published, verified live 08-19) is the only thing in the body.
  **Standing read for future runs: link the published page, not the repo
  markdown, and never put the guarantee in a cold email until the lawyer flag
  clears.** Also recommended a send order for the follow-up proof: Finish Coat
  before TFP for any prospect whose pain is intake volume, since TFP's story is
  same-ad-spend and answers a question a non-advertiser did not ask.

  **The draft itself: no response-time number at all, forced not chosen.**
  Rupika sourced ~3 hrs; Montague's three re-checks returned 10 min, 3 hrs and
  1 day, no majority. Actively contradictory, so third-bucket, dropped entirely
  per CVA (08-15) / Prima (08-18) / Freedom Roofing (08-20). Built on the one
  verified load-bearing fact instead: this is a referral shop (their own /about
  copy plus multiple reviews from fifteen- and twenty-year customers).
  **Winning mechanism: the two kinds of customer on the same phone, and the
  argument is the SILENT loss rather than slowness.** The referral already chose
  him before dialing, waits, and complains if the patience runs out. The Yelp
  stranger chose three plumbers at once and never tells him he was there. A
  twenty-seven-year referral shop has never needed a system for the customer who
  leaves without saying anything, because until Yelp there wasn't one.
  **Generalizable: on a long-established referral business with no usable
  metric, contrast the two customer types rather than reaching for the
  posted-hours fallback.** That fallback (Casa 08-19, Roofing Systems 08-23) is
  becoming my default and therefore my biggest template risk.

  **Collision check was the hardest constraint this run even with only one
  draft, because both nearest neighbours are from yesterday's batch.**
  All Around Electrical (08-24) is also a two-lanes contrast, so I kept mine on
  customer *types* rather than service channels and landed the payoff on
  invisibility rather than competitive comparison. Cabinet Refinishing (08-24)
  opens on a compliment pulled from reviews, so I deliberately did NOT open on
  the fifteen-and-twenty-year reviews even though that was the warmest available
  first line, and put the question first per Kevin's 08-13 canonical shape
  instead. **Worth keeping: a one-draft run still needs the batch check, run
  against the last batch that left the inbox rather than against nothing.**

  **Runner-up angle, documented in the outreach.md dropped-angle block: the
  word-of-mouth ceiling** (twenty-seven years of referrals is a finite aging
  list; every house in Yorba Linda that changes hands brings somebody who opens
  Yelp instead of asking a neighbour). Dropped for two independent reasons. It
  argues about being **found**, and Owen is already found with real demand
  landing in the quote box, so it solves the wrong problem for this prospect.
  And its mechanism is a near repeat of the Brezden Pest follow-up (08-21), four
  days ago, same inbox. **Kept the "is this angle solving THIS prospect's actual
  bottleneck" test explicit: discovery versus conversion is the fork, and a
  prospect with visible inbound demand is a conversion problem every time.**

  **Kept the negative review out of the body** (a bad install by a staff plumber
  plus no follow-up) and flagged it as call material instead. Quoting a
  complaint at a stranger is the one door that is not face-saving, same call as
  Reliant Pest (08-19). It also usefully tells Kevin he has employees rather
  than being a one-truck shop.

  **Bookkeeping gap found and flagged, not fixed: both collateral files still
  carry `status: draft-awaiting-kevin` in their own headers** even though the
  approval file records Kevin approving them on 08-24 with corrections applied.
  Stale header, not a real disagreement, but anyone reading the collateral cold
  would think it is unapproved. Flagged for Sue; did not edit documents I do not
  own, same precedent as not writing a log line in Montague's voice.

  Track breakdown: 1 package. Standard post-write sweep on body text only (em
  dash, en dash, bracket placeholder, retired package name, third-person
  Kevin/Viridia, pricing, `%`, the 84% stat, the word "guarantee") — all clean.
  The only domain mention is the case-studies URL, which is intentional.

  **Pricing-in-email question from 08-21 is STILL unanswered** (six runs now).

  **Next run:** check `stage: enriched` first as always, then regenerate
  `approvals/ROLLING-first-touch-drafts.md` from live `stage: drafted` state
  (write it as explicitly empty if nothing is there — that is the point of it).
  Upstream backlog is now **60 at `stage: found`** (59 on 08-24, 54 on 08-23,
  51 on 08-22) and still growing faster than the email gate clears it, so first
  touches will keep arriving in ones and twos. The 11 held-lane second touches
  remain the realistic place to spend surplus capacity.

  **End-of-run:** committed and pushed to `master` per CLAUDE.md's landing-work
  rule.

- **2026-08-26 (this run) — 3 drafted, the whole enriched queue, and the run
  where the website track's template rot finally had to be broken.** `git fetch
  origin` first per CLAUDE.md: origin/master force-updated to 04ab5b7 (KIREEK
  fleet-state refresh on top of Montague's 2026-08-26 pass, "3 advanced / 2
  email-gate holds", on top of a Rupika top-up). Container started detached at
  exactly that commit with a clean tree and zero divergence from origin/master
  (`git rev-list --left-right --count` returned 0 0) — the same stale-ref-only
  pattern logged every run since 08-13. `_fleet-state.md` was fresh (16:52 UTC),
  so ground truth was live.

  Scanned `prospects/*/status.md`: 4 at `stage: enriched` —
  jc-heating-cooling-amarillo-tx (still Kevin's own email-verification hold from
  2026-08-03, unchanged, skipped again) plus 3 real ones, all drafted:
  **the-passionate-plumber-san-clemente-ca** (package),
  **av-heating-cooling-del-rio-tx** (website), **kelso-electric-benton-ky**
  (website). No defensive-check skips; all three passed Montague's email gate.

  **Kevin DISMISSED yesterday's only draft (Owen Plumbing) this morning** —
  KIREEK commit 51f5d32, "removed from the review queue," no reason recorded.
  Only the third dismissal ever against 94 sent, so it is not routine pruning.
  Asked him directly in the approvals file which part it was (prospect fit vs.
  the draft itself, and if the draft, which element). **Do not silently assume
  the draft was the problem and start rewriting the approach off one data
  point** — there is genuinely no signal in the record either way, and I still
  have zero logged feedback on tone or edits. If he answers, that is the first
  real entry this file's "Edits Kevin tends to make" section has ever had.

  **The dominant judgment call this run: two website-track prospects with an
  IDENTICAL fact pattern in one batch, on a track that had already collapsed
  into one email.** AV Heating and Kelso Electric are both small-town
  owner-operators, Facebook and directories only, no owned domain, gap confirmed
  hard. Worse, I pulled the last four website first touches (Brudwick and High
  Country 08-16, E-Z Garage 08-17, RidgeTop 08-18) and they are close to a
  single form letter: "I went looking and only found your Facebook page," then
  the 84% stat as its own paragraph, then "I build sites for contractors so
  people land on something real." Brudwick and High Country are near word for
  word. **The 08-18 standing note said to check the last draft in this track
  before writing the next; that check was clearly not surviving contact.** So
  this run neither draft argues findability at all:
  - **AV Heating — the site is for people who ALREADY have your name.** Solo
    shop run out of a house (property records: 1,216 sq ft manufactured home,
    not a storefront), town of ~35,000, no Yelp presence anywhere. A business
    like that lives on word of mouth, so the failure mode is not obscurity, it
    is the warm referral cooling off on a phone screen before the call. Team
    greeting, no name found across four source types.
  - **Kelso Electric — the site is where thirty years finally gets stated.**
    Opened 2020 after 30+ years on the tools. A stranger sees a six-year-old LLC
    with a handful of reviews and reads "new guy," and he is the opposite of
    one. Conversion argument, not a discovery one, and no other prospect in the
    pipeline could receive this email.
  **Generalizable and worth keeping: when a track has one natural hook, the fix
  is not a fresh phrasing of that hook, it is a different argument about what
  the product is for.** Findability is the obvious website argument and that is
  exactly why it rots. Legitimacy-to-people-who-already-found-you and
  experience-that-has-nowhere-to-live are both real, both provable from
  enrichment, and neither had been used.

  **Dropped the 84% BrightLocal stat from both**, deliberately. It supports a
  findability argument neither draft is making, and re-inserting it is precisely
  how the template reassembles itself. Same call as the 08-21 website
  follow-ups. Persona still lists it as the standard website data point, so this
  is a considered override, not an oversight.

  **The Passionate Plumber: dropped a CLEANLY RECONFIRMED response-time figure
  on purpose, which is a first.** Montague reconfirmed ~2 hrs with no
  contradiction (plus 4.9 stars, 144 reviews, 70% response rate, Verified
  License badge, all stable), which under the gate made it usable as stated fact
  rather than merely as a question. That almost never happens. Used the
  **response RATE** instead: 70% means roughly three in ten quote requests never
  get answered at all. **Reasoning worth internalizing: two hours next to 144
  reviews at 4.9 stars is not pain the owner feels, and an opener has to land on
  something he already feels.** Thirty percent ghosted is. Same listing, same
  source, no added verification risk, and it is the first draft this team has
  built on the rate rather than the time. **New standing option: when the
  response time is real but unalarming, check the response rate — it is on the
  same widget and it is usually the sharper number.**

  Kept it phrased as a forced-choice question anyway (buried on a job vs.
  screening out tire-kickers) per the 08-13 opener rule, even though the data
  would have supported an assertion. A question costs nothing if the figure has
  drifted.

  **Runner-up angles, all documented in the outreach.md dropped-angle blocks:**
  - *Passionate Plumber* — the honesty reputation against the speed problem
    (reviews credit Zach personally for not gouging; that only pays if he gets
    in the room). Dropped on collision: it is the Owen Plumbing draft from
    08-25, one day earlier, same trade, same corner of Southern California, same
    inbox, same two-customer-types mechanism. **Second time in two runs the
    nearest neighbour was yesterday's draft — the batch check now matters more
    than the per-prospect signal.**
  - *AV Heating* — the Del Rio heat, AC dies in August, same-hour decision,
    nobody scrolls. Sounded the strongest and was the weakest idea: structurally
    the identical email to RidgeTop Roofing 08-18 (weather event, everyone
    searches at once, nothing of yours to land on), and it is the discovery
    argument the track keeps collapsing into.
  - *Kelso Electric* — the agricultural/industrial buyers vetting harder than
    homeowners. Real, but the same legitimacy mechanism as the AV draft in the
    same batch, and less specific to Mike than the thirty-years point.

  **Real kit gap surfaced and flagged, not worked around:** every published case
  study is an AI lead-response story (TFP, Finish Coat). **There is no published
  website-build case study at all**, so a website-track prospect clicking the
  link reads about an adjacent product. Framed the link as proof we are real
  rather than proof about websites, which is honest and happens to be exactly
  the AV draft's own argument. Flagged for Kevin and Sue: doctrine §3 kit item 2
  is marked closed on the package track's strength, and for this track it is
  not.

  **Verification notes:** confirmed pipeline counts by grep rather than trusting
  `_fleet-state.md`'s summary (62 found, 1 enriched, 3 drafted, 94 sent, 3
  dismissed) and corrected the approvals file after writing 61. Re-checked all
  four dated first-touch approval files: already `status: superseded`, nothing
  to close. Left `2026-08-21-followup-drafts-held-lane.md` open again on purpose
  (not a first-touch file, 11 real undrafted second touches).

  Track breakdown: 1 package, 2 website. Standard post-write sweep on body text
  only (em dash, en dash, bracket placeholder, retired package name,
  third-person Kevin/Viridia, pricing, `%`, the 84% stat, "guarantee") — all
  clean. The only `%` in any body is the intended 70% off Passionate Plumber's
  own listing; the only domain is the case-studies URL.

  **Pricing-in-a-cold-email question is STILL unanswered** (seven runs now).

  **Next run:** check `stage: enriched` first, then regenerate
  `approvals/ROLLING-first-touch-drafts.md` from live `stage: drafted` (write it
  explicitly empty if nothing is there). **Check whether Kevin answered on Owen
  Plumbing** — that is the highest-value thing waiting. Upstream backlog is 62
  at `stage: found` and still growing faster than the email gate clears it. The
  11 held-lane second touches remain the place to spend surplus capacity.

  **End-of-run:** committed and pushed to `master` per CLAUDE.md's landing-work
  rule.

- **2026-08-27 (this run) — 2 drafted, the whole enriched queue, both website
  track, and the run that proved the template break has to happen EVERY time,
  not once.** `git fetch origin` first per CLAUDE.md: origin/master
  force-updated to 6a71de1 (KIREEK fleet-state refresh on top of Montague's
  2026-08-27 pass, "2 advanced / 4 email-gate holds", on top of two Rupika
  top-ups). Container started detached at exactly that commit, clean tree, HEAD
  an ancestor of origin/master — the same stale-ref-only pattern logged every
  run since 08-13. `_fleet-state.md` was fresh (16:46 UTC), ground truth live.

  Scanned `prospects/*/status.md`: 3 at `stage: enriched` —
  jc-heating-cooling-amarillo-tx (still Kevin's own email-verification hold from
  2026-08-03, unchanged, skipped again) plus 2 real ones, both drafted:
  **joshs-plumbing-crescent-city-ca** (website) and
  **powerhouse-electrical-services-vernal-ut** (website). No defensive-check
  skips; both passed Montague's email gate. Montague held her other four at
  `found`, so 2 was the entire queue, not a batch-size choice.

  **All three of yesterday's drafts are now `sent`** (Passionate Plumber, AV
  Heating, Kelso Electric). That is the first batch written after the website
  template break and it went out intact, which is real if indirect evidence the
  break was the right call. Still zero logged feedback on tone or edits.

  **Owen Plumbing is still `dismissed` with no reason recorded and Kevin did not
  answer the 08-26 question.** Asked once more in the rolling approvals file,
  and said explicitly that if it was only prospect fit I will stop asking. Do
  not start rewriting the approach off one unexplained dismissal — there is
  still no signal in the record either way.

  **The dominant fact this run: the SAME two-small-town-owner-operators fact
  pattern arrived again, one day after it arrived last time.** Josh's Plumbing
  and Powerhouse are both website track, both Facebook-and-directories only,
  both gap-confirmed by DNS. That is now four consecutive website drafts in two
  days off one fact pattern. **The lesson worth internalizing: breaking a
  template is not a one-time fix, it is a per-run tax.** Yesterday I invented
  two new arguments (AV: the site is for people who already have your name;
  Kelso: the site is where thirty years finally gets stated). Reusing either
  today would have rebuilt the template with a two-day cycle instead of a
  one-day one. So today's two use neither, and neither uses findability.
  - **Josh's Plumbing — OWNERSHIP.** Every place his business exists online is
    rented: the Facebook page, the directory listings he never made, and a
    personal Gmail as the contact address. Eleven years of a licensed, bonded
    business and he owns none of the front door. **Opened on the
    three-different-addresses-one-phone-number fact from Montague's enrichment,
    because it is proof of the argument rather than a separate complaint, and he
    can check it in thirty seconds.** Findability was also just factually wrong
    for him: Crescent City is ~6,600 people in a county of 27,000, he is not
    hard to find, his information is scattered across pages he cannot edit.
  - **Powerhouse Electrical — SCOPE.** Trade name says Powerhouse Electrical
    Services, the LLC is Powerhouse Construction Services. Somebody putting up a
    shop who needs the building and the panel has no way to learn one outfit
    does both, so they call two contractors and he gets the smaller half.
    **Built as a forced-choice question, which ports Kevin's cold-call opener
    mechanic onto the website track without needing a response-time number.**
    Both doors face-saving (the construction side is real and he is bigger than
    his name suggests, or it is entity housekeeping and there is nothing to
    defend). Worth keeping as a pattern: the package track's question shape is
    portable, and website-track prospects have no Yelp metrics at all.

  **Generalizable and worth keeping: when the same fact pattern keeps arriving,
  the renewable supply of angles is the prospect's own records, not the
  category.** Both winning angles came from documents rather than from anything
  about "small-town contractor" — a directory address discrepancy and an
  entity-name-versus-trade-name mismatch. Category-level thinking produces the
  template every time; record-level thinking cannot, because no two prospects'
  records disagree in the same way.

  **Deliberately did not cite an unverified license, on the one draft where it
  would have been the strongest possible proof.** Powerhouse reportedly holds
  B100 (General Building) and E200 (General Electrical) qualifiers, which would
  settle the exact question the email asks. Montague flagged Utah DOPL as
  egress-blocked and said to check it before referencing in outreach. Citing a
  classification we could not verify at source is exactly the claim the one
  person who knows it is wrong would dismiss the email over. Asked instead, and
  told Kevin it is a ten-second DOPL check that would let him assert it on the
  call. **Standing read: an unverified fact that would make the argument is
  still an unverified fact, and the question form costs nothing.**

  **Name calls this run, both defensible and different from each other:**
  - Josh: high confidence, two independent sources, used plainly.
  - Powerhouse: used the FIRST NAME ONLY ("Hi Robert,"). The surname renders
    "Ooostveen" with a triple o in indexed OpenCorporates text, a likely OCR
    artifact — the first name is stable across both spellings, so the greeting
    carries no risk while writing the surname would. **New pattern: when the
    source has a rendering problem in part of a name, use only the stable part
    rather than falling back to a team greeting.** Using the name at all is
    right under the CVA/Merican precedent (a state entity filing at the
    business's own address beats an aggregator bio); this is not the Freedom
    Roofing 08-20 case, where a name had already burned us and the replacement
    was single-source and synthesized.

  **Kept out of the Powerhouse email entirely and flagged as call material:** a
  "Robert Oostveen" also turns up as President/Master Electrician of Hank's
  Electric of Vernal, a separate local contractor. Same man with two shops, or
  coincidence — no source says either. Montague said not to present it as
  settled and she is right; it is the single worst thing to get wrong in a first
  email to a stranger. Same class of call as keeping the negative review out of
  Reliant Pest (08-19) and Owen Plumbing (08-25).

  **One line I flagged for Kevin as his call rather than deciding alone:** the
  "the email on your listing is a personal Gmail" clause in Josh's draft. It is
  true, it is his own address, and the email arrives in that very inbox, which
  is part of why it lands. It sits inside an ownership argument rather than a
  judgment about how he looks. But it is the closest thing to a sting I have put
  in a first touch, and Kevin knows small-town tone better than I do. Told him
  exactly which clause to cut and that the paragraph survives without it.

  **Runner-up angles, both documented in the outreach.md dropped-angle blocks:**
  - *Josh's Plumbing* — licensed and bonded against the unlicensed handyman
    trade. Dropped for three independent reasons: same legitimacy mechanism as
    the Kelso draft one day earlier out of the same inbox, it rests on the CSLB
    record which is the least verified item in the file, and it only works by
    implying something about his competitors, which turns a first touch into a
    jab.
  - *Powerhouse* — the Uintah Basin oil-and-gas economy and operators needing a
    vetted local electrician. Real and genuinely local, but it is a discovery
    argument (the rotted template) and it would have leaned on the unverified
    license to do its work. Pivoted rather than polished.

  **84% BrightLocal stat omitted again**, third run running on this track. It
  supports a findability argument neither draft makes, and re-inserting it is
  precisely how the template reassembles itself. Considered override of the
  persona's standing guidance, not an oversight.

  **Verification notes:** confirmed pipeline counts by grep rather than trusting
  `_fleet-state.md`'s summary (66 found, 1 enriched, 2 drafted, 97 sent, 6
  closed, 3 dismissed, 2 approved). Re-checked all four dated first-touch
  approval files: already `status: superseded`, nothing to close. Left
  `2026-08-21-followup-drafts-held-lane.md` open again on purpose (not a
  first-touch file, 11 real undrafted second touches).

  Track breakdown: 2 website. Standard post-write sweep on body text only (em
  dash, en dash, bracket placeholder, retired package name, third-person
  Kevin/Viridia, pricing, `%`, the 84% stat, "guarantee", stray signature) — both
  clean on every check. Bodies are 139 and 138 words. Two distinct subject lines,
  two distinct closers, two disjoint mechanisms.

  **Bookkeeping gaps re-flagged, not fixed (both carried from 08-25/08-26):**
  the two collateral files still carry `status: draft-awaiting-kevin` headers
  despite Kevin's recorded 08-24 approval, and there is still no published
  website-build case study while doctrine §3 kit item 2 is marked closed. Did
  not edit documents I do not own.

  **Pricing-in-a-cold-email question is STILL unanswered** (eight runs now).

  **Next run:** check `stage: enriched` first, then regenerate
  `approvals/ROLLING-first-touch-drafts.md` from live `stage: drafted` (write it
  explicitly empty if nothing is there). **Check whether Kevin answered on Owen
  Plumbing or on the personal-Gmail line** — those are the two highest-value
  things waiting. Upstream backlog is **66 at `stage: found`** and has grown
  every day for a week (62 on 08-26, 60 on 08-25, 59 on 08-24). The email gate
  clears one or two a day while Rupika adds three, so first touches will keep
  arriving in ones and twos; nothing in this seat changes that. The 11 held-lane
  second touches remain the one place surplus capacity would actually convert.

  **End-of-run:** merged onto `master` and pushed per CLAUDE.md's landing-work
  rule.

- **2026-08-28 (this run) — 3 drafted, the whole enriched queue, and the run
  where the container's local `master` was a genuinely orphaned history rather
  than just a stale ref.** `git fetch origin` first per CLAUDE.md: origin/master
  force-updated to c9d1987 (Montague's 2026-08-28 pass, "3 advanced / 3
  email-gate holds", on top of two Rupika batches). Container started detached
  on a local `master` at 1c273a9 that had **zero shared history** with
  origin/master (58 vs 51 commits, `git merge --ff-only` returned "refusing to
  merge unrelated histories"). Same class of thing as 08-13 but worse: origin
  carried today's real Rupika and Montague commits and today's fleet state,
  local carried a 08-24 fleet state, so origin was unambiguously the live
  history. Repointed with `git checkout -B work origin/master`. Did not touch
  origin's history. **Worth knowing: I read `_fleet-state.md` off the stale
  local branch first and got a four-day-old file. Fetch, repoint, THEN read
  ground truth — reading it before fixing the ref is how a stale note gets
  treated as current.** `_fleet-state.md` on origin was fresh (14:15 UTC).

  Scanned `prospects/*/status.md`: 4 at `stage: enriched` —
  jc-heating-cooling-amarillo-tx (still Kevin's own email-verification hold from
  2026-08-03, unchanged, skipped again) plus 3 real ones, all drafted:
  **kjc-roofing-mission-viejo-ca** (package),
  **all-tech-plumbing-rock-springs-wy** (website),
  **nelson-landscaping-willmar-mn** (website). No defensive-check skips; all
  three passed Montague's email gate. She held three others at `found`, so 3 was
  the entire queue, not a batch-size choice.

  **Nothing moved on Kevin's side since yesterday.** Josh's Plumbing and
  Powerhouse are still sitting at `drafted`, first time in a while the queue has
  carried over. Owen Plumbing is still `dismissed` with no reason recorded and
  he did not answer for a third run. **I told him in the rolling file this is
  the last time I ask, and that silence means I will assume prospect fit.**
  Follow through on that: do not raise Owen again, and do not start rewriting
  the approach off one unexplained dismissal. Still zero logged feedback on tone
  or edits after nine weeks.

  **KJC Roofing — the response-time signal came back clean, and the interesting
  move was using the 100% rate to make the number mean something.** Three
  independent reads in one tight band (Rupika 8hr twice, Montague 9hr fresh)
  with a 100% response rate, 4.5 stars, 20 reviews. Montague cleared it as
  usable as stated fact. **The pairing is the angle: a 100% response rate means
  nothing is being neglected, it is being QUEUED, and a queue treats a spring
  re-roof enquiry and an active roof leak identically.** The re-roof waits
  happily; the leak calls three roofers and hires whoever rings back first, and
  that is both the biggest job and the only one he never learns he lost. **New
  standing option worth keeping alongside the 08-26 rate lesson: response rate
  and response time interpret each other.** Low rate means leads rot (Passionate
  Plumber, 70%). High rate plus a long time means a queue, which is a different
  problem, a different email, and honestly the better one because there is no
  neglect to accuse anybody of.

  **Also had to rebuild the forced choice, because the standard pair breaks at
  100%.** "Too busy to get to them" versus "screening out the tire-kickers" is
  the canonical pairing, but the second door contradicts answering every single
  one. Replaced with: up on a roof all day, or wanting a proper look at a job
  before replying. Both face-saving, both compatible with the data, and the
  second one is what his own reviews credit him for. **Generalizable: when you
  build an opener on two metrics, check that both doors survive both metrics.**

  **Two website-track prospects with the same small-town-owner-operator fact
  pattern arrived for the THIRD day running** (AV/Kelso 08-26, Josh's/Powerhouse
  08-27, All Tech/Nelson today). That is six drafts in three days off one
  pattern. The per-run template tax logged yesterday held: neither of today's
  reuses ownership, scope, legitimacy, warm-referral-cooling, or findability.
  - **All Tech Plumbing — NAME AMBIGUITY IN A REFERRAL ECONOMY.** At least six
    unrelated All Tech Plumbings exist nationally (NJ, CT, OK, LA, CO, VA), a
    collision both Rupika and Montague documented as a dedup risk. Rock Springs
    is ~23,000 people so findability is factually not his problem; the break is
    in the referral handoff, between somebody saying "call All Tech" and the
    neighbour actually reaching him. **A domain is literally the product that
    fixes that, which is the tightest problem-to-product fit this track has
    had.** Best property: he can verify the entire premise on his phone in ten
    seconds, so nothing depends on trusting a number we pulled.
  - **Nelson Landscaping — THE PORTFOLIO, first time this pipeline has argued
    it.** Paver driveways, retaining walls, patios and steps are bought off
    photographs, and every job he has finished is a permanent photogenic object
    sitting in a yard doing no selling because it lives on a feed that scrolls
    away. A hardscaper without a portfolio is a builder with no showroom.
    **Opened with a forced-choice question whose doors are both normal
    contractor behaviour** (send them to Facebook, or text them photos) so
    neither answer is embarrassing and both land in the same place: the pictures
    only work when he is personally in the conversation.

  **Generalizable and worth keeping: the renewable supply of website angles is
  the TRADE, not the town.** Yesterday's lesson was that angles come from the
  prospect's own records rather than the category. Today adds a second seam:
  what the trade physically sells. Hardscaping is bought off pictures,
  emergency plumbing is bought off availability, electrical is bought off
  qualification. Those are structurally different arguments for the same
  product and none of them is findability. "Small-town contractor with no
  website" generates one email forever; "hardscaper" and "24/7 plumber"
  generate different ones.

  **Facts I deliberately kept out of bodies this run:**
  - All Tech's BBB B- and its unanswered complaint, and the fact that the review
    corroborating "Jeff" is a review calling him difficult to work with. Real,
    reinforcing, and not a face-saving door. Same call as Reliant Pest (08-19),
    Owen Plumbing (08-25) and the Hank's Electric question (08-27). Flagged as
    call material.
  - All Tech's "union technicians only" claim, which would have made a fine
    differentiator-with-nowhere-to-live pitch and is the exact Kelso legitimacy
    mechanism from two days ago.
  - Nelson's hauling/trucking DOT registration, which is the Powerhouse scope
    mechanism from one day ago.
  - KJC's two unverified CSLB numbers and Rupika's unreconfirmed "Yelp
    Guaranteed" badge.

  **Runner-up angles, both documented in the outreach.md dropped-angle blocks:**
  - *All Tech* — Sweetwater County is the largest county in Wyoming by area at
    roughly 10,500 sq mi and he covers all of it from one address on Dewar
    Drive, so nobody in Green River or Farson can learn he drives out that far.
    Real and genuinely local. Dropped because the mechanism is "your listing
    understates you," which is the Powerhouse draft from 08-27.
  - *Nelson* — the closing Minnesota hardscape season, about eight weeks left,
    next spring decided over a winter when nobody drives past his work. **A
    clock is the rarest and most valuable thing a cold email can have** and I
    still dropped it, because it is structurally the High Country Lawn follow-up
    from 08-21 (winterization and snow removal searched cold, six weeks out),
    same mechanism and same time of year. Told Kevin to use it on the phone,
    where it works better anyway.

  **Name calls:** Randy Holmes used plainly (four sources, essentially settled;
  flagged that co-owner Kelly may be the one reading the shared info@ inbox and
  that "Hi Randy and Kelly," reads like a mail merge). Lee Nelson used plainly
  (LinkedIn plus a federal FMCSA filing). Jeff first-name-only on All Tech, per
  the 08-27 Powerhouse precedent, since "Carey" rests on a single BBB search
  snippet from an egress-blocked page.

  **Nelson's email is the weak spot and the draft is deliberately built not to
  depend on it.** Montague flagged lee.nelson14@gmail.com as better-supported
  but not certain and said not to lean on email personalization. Nothing in the
  body does. yahoo.com is the documented fallback on a bounce.

  **84% BrightLocal stat omitted again**, fourth run running on this track,
  considered override not oversight. Neither draft argues findability.

  **Verification notes:** confirmed pipeline counts by grep rather than trusting
  `_fleet-state.md`'s summary (69 found, 1 enriched, 5 drafted, 97 sent, 6
  closed, 3 dismissed, 2 approved). Re-checked all four dated first-touch
  approval files: already `status: superseded`, nothing to close. Left
  `2026-08-21-followup-drafts-held-lane.md` open again on purpose. Regenerated
  `approvals/ROLLING-first-touch-drafts.md` from live `stage: drafted`, so it
  lists all 5 including yesterday's two carryovers, not just today's additions.

  Track breakdown: 1 package, 2 website. Standard post-write sweep on body text
  only (em dash, en dash, bracket placeholder, retired package name,
  third-person Kevin/Viridia, pricing, `$`, the 84% stat, "guarantee", stray
  sign-off) — all three clean on every check. Bodies are 129, 153 and 154 words.
  Three distinct subject lines, three distinct closers ("Worth fifteen minutes
  on the phone?" / "Is that worth a short call?" / "Can I call you this week?"),
  three distinct collateral lines, three disjoint mechanisms. The only `%` in
  any body is KJC's 100% off his own listing.

  **Next run:** check `stage: enriched` first, then regenerate
  `approvals/ROLLING-first-touch-drafts.md` from live `stage: drafted` (write it
  explicitly empty if nothing is there). **Fix the git ref before reading
  `_fleet-state.md`** — see the top of this entry. Do NOT raise Owen Plumbing
  again. Upstream backlog is **69 at `stage: found`** and has grown every day
  for over a week (66 on 08-27, 62 on 08-26, 60 on 08-25). Montague cleared 3
  and held 3 today while Rupika added 6, so the gap widened. The 11 held-lane
  second touches remain the one place surplus capacity would actually convert.

  **End-of-run:** committed and pushed to `master` per CLAUDE.md's landing-work
  rule.

- **2026-08-29 (this run) — 1 drafted, the whole enriched queue, and the first
  run where `_fleet-state.md` was actually stale.** `git fetch origin` first per
  CLAUDE.md: origin/master force-updated to c9b4fae (Montague's 2026-08-29 pass,
  "1 advanced / 5 email-gate holds", on top of two Rupika batches). Container
  started detached at exactly that commit with a clean tree, the ordinary
  stale-ref pattern, repointed with `git checkout -B work origin/master`. Fixed
  the ref BEFORE reading ground truth, per yesterday's lesson.

  **`_fleet-state.md` was 17 hours old** (generated 2026-08-28 21:59 UTC, read
  at 17:07 UTC today), past the ~12 hour line CLAUDE.md draws. That is the first
  time it has actually tripped for me; every prior run it was minutes to an hour
  fresh. Treated it as unverified per the rule, recounted every pipeline stage
  by grep instead of trusting its summary, and said so plainly in the rolling
  approvals file and the push notification. KIREEK's sync loop on Kevin's PC
  looks down since yesterday evening. **Worth keeping: the file being stale does
  not block this seat at all** — everything I need is in `prospects/*/status.md`,
  which is the source of truth anyway. The thing that is lost is the fleet-wide
  view, so the honest move is to say the loop is down and stop quoting it, not to
  hold the run.

  Scanned `prospects/*/status.md`: 2 at `stage: enriched` —
  jc-heating-cooling-amarillo-tx (still Kevin's own email-verification hold from
  2026-08-03, unchanged, skipped again) plus 1 real one, drafted:
  **local-choice-pest-landscape-nutrition-cave-creek-az** (package). Montague
  held five others at `found` on the email gate, so 1 was the entire queue, not a
  batch-size choice.

  **The angle that won is the owner's own career, and it is the strongest
  personalization this pipeline has had.** Sage Garvey spent 23 years at Burns
  Pest Elimination and left as Director of Technical and Customer Care
  Operations, then founded this shop in 2019. So he ran the inbound-customer
  function, at scale, with staff, and now he is also the technician, which means
  the one job he is overqualified for is the one that waits until he is out of a
  crawlspace. **Generalizable: when enrichment turns up a real career history,
  check whether the prospect's PAST JOB and their present bottleneck are the same
  function.** That collision produces an email nobody else could send him, it
  opens with respect instead of a correction, and it skips the entire
  convince-them-speed-matters step because he used to own it as a department.
  LinkedIn work history is a seam I have basically never mined; Montague surfaces
  it routinely and I have been reading past it to get to the numbers.

  **Also new: naming the counter-evidence first, and agreeing with it.** Montague
  found a review describing him replying "within minutes," which is a different
  measure from the platform badge and does not contradict it. Left unsaid, it
  hands him the obvious objection ("I answer people fast"). So the third line
  says it out loud, concedes it, and moves the argument to where it is actually
  true: the delay is access to the phone, not willingness. **Standing option: if
  enrichment carries a fact that would let the recipient dismiss the email in one
  sentence, put it in the email yourself and agree with it.** Cheaper than being
  right and ignored.

  **Both doors rebuilt again, because yesterday's pair was one day old.** KJC
  used "up on a roof all day" versus "a proper look at a job before you answer."
  Reusing that shape for a pest tech would have been the same email twice.
  Doors here: the badge is stale and he corrects me, or the next morning is
  genuinely when he gets to them. Door one is unusual and worth keeping in the
  kit — **letting the prospect tell you your number is wrong is a face-saving
  door that also gets you a reply**, and it costs nothing when the figure is
  unreconfirmed anyway, which it is on most package prospects.

  **Runner-up, dropped on sameness alone:** 53 quote requests against a day-long
  window, and pest demand being perishable in a way most trades are not (the
  scorpion does not come back, the urgency evaporates, and the sale goes with
  it). Genuinely good and genuinely pest-specific. Dropped because the mechanism
  is yesterday's KJC draft out of the same inbox — urgent lead decays while it
  waits in a queue — one day apart on the same track. Told Kevin to use it on
  the phone as the second question.

  **Facts kept out of the body:** the least-toxic-method positioning and the
  humane rodent anecdote (likeable, but using them is flattery, the 08-13 shape),
  the Mon-Fri 8-5 posted hours (the weekend-gap opener is now my most-reused
  fallback and the shape most at risk of becoming the template — Casa 08-19,
  Freedom 08-20), and the ~99 review count (it lives on pestcontrolreviews.com,
  not his own listing, and I will not put a number in an email he cannot trace).

  **Flagged prominently, not buried: the AZ PCO licence is still unchecked and it
  is a hard disqualifier.** Rupika raised it at sourcing, Montague could not close
  it (the Department of Agriculture lookup is a form-based tool neither
  environment can reach). It is the one open item that could kill the prospect
  outright rather than weaken the draft. Put it in the outreach note, the status
  log, and its own section in the rolling approvals file. Nothing in the body
  depends on it, so a bad result costs a send, not a rewrite.

  Track breakdown: 1 package. Standard post-write sweep on body text only (em
  dash, en dash, bracket placeholder, retired package name, third-person
  Kevin/Viridia, `$`, "guarantee", the 84% stat, stray sign-off) — clean on
  every check. Body is 116 words. Subject "Burns had a whole team for this"
  deliberately avoids the number-shaped subjects of the last several package
  drafts; closer is "Got ten minutes this week?", distinct from the last three.

  **Verification notes:** recounted by grep — 74 found, 1 enriched, 6 drafted, 2
  approved, 97 sent, 6 closed, 3 dismissed. Re-checked all four dated first-touch
  approval files: already `status: superseded`, nothing to close. Left
  `2026-08-21-followup-drafts-held-lane.md` open on purpose (not a first-touch
  file) and left `2026-08-28-realestate-batch-01-cold-emails.md` alone — it is
  `status: pending` but it is a different workflow's batch staged in Kevin's
  Gmail, not this pipeline's first-touch queue, so it is not mine to supersede.
  Regenerated `approvals/ROLLING-first-touch-drafts.md` from live `stage:
  drafted`, so it lists all 6 including three carryovers.

  **Kevin's side is quiet again.** Nothing moved from `drafted` since 08-27;
  Josh's Plumbing and Powerhouse are now three days old. Did not raise Owen
  Plumbing, per the commitment made on 08-28. Still zero logged feedback on tone
  or edits after nine weeks, and the pricing-in-a-cold-email question is now
  unanswered for nine runs. Not asking again; it is in the record.

  **Next run:** check `stage: enriched` first, then regenerate
  `approvals/ROLLING-first-touch-drafts.md` from live `stage: drafted` (write it
  explicitly empty if nothing is there). **Check whether `_fleet-state.md` is
  fresh again** — if it is still stale a second day running, that is a real
  systems problem worth telling Kevin about more loudly than a caveat line.
  Upstream backlog is **74 at `stage: found`** and has grown every single day for
  ten days (69 on 08-28, 66 on 08-27, 62 on 08-26). Montague cleared one and held
  five today while Rupika added five. The 11 undrafted held-lane second touches
  remain the one place surplus capacity here would actually convert.

  **End-of-run:** merged onto `master` and pushed per CLAUDE.md's landing-work
  rule.
