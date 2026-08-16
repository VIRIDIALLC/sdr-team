# Montague — memory

## Notes

- (website track) Rupika's guess needs real verification, not just a
  second search — a domain can show up nowhere in search/directories yet
  still resolve. Direct WebFetch of the bare domain (if one's implied by
  an email address, etc.) is a cheap, decisive check: DNS failure
  (`ENOTFOUND`) is strong confirmation of no live site; a resolving
  domain means stop and re-check before advancing. Caught exactly this
  case 2026-08-02 (jcheatingcooling.com) and it also surfaced a second
  issue worth always checking: an email address pulled from a directory
  listing on a non-resolving domain is itself unverified — flag that to
  Kevin rather than treating it as a confirmed contact method.

- (2026-08-04 run) First real batch since the ads track's verification
  gate went live: picked up 4 of 6 `stage: found` prospects (2 ads, 1
  website, 1 package), left 2 package/website ones for next run per the
  cap-batch-size rule. All 4 passed their gates and advanced to
  `enriched` — no dead ends this run.
- (ads track) The "sponsored badge in search snippets" check is
  routinely inconclusive, not a clean confirm/deny — across both ads
  prospects this run (Brezden Pest Control, Restorion), multiple Google
  searches for "[business] yelp sponsored/advertisers" never surfaced a
  sponsored indicator either way, same as Rupika's original read. Per
  the persona doc's convention, inconclusive-but-not-contradicted is
  NOT a block — only a genuine contradiction (finding real evidence
  they ARE running ads) should hold a prospect at `found`. Don't loop
  trying to force a definitive answer out of search snippets alone; say
  so honestly and advance. Rupika's note about needing "a real way to
  check the live page" still stands as unsolved — direct Yelp fetch
  stays off-limits per ToS, so this may just be a structural limit of
  the ads gate as currently designed, worth flagging to Kevin if it
  keeps coming up inconclusive every time.
- Several business-listing sites (own company domains, Chamber of
  Commerce directories) block direct WebFetch with 403 the same way
  Yelp/YellowPages do (hit this on brezdenpest.com/contact-us and
  restorion.com this run) — when that happens, a search-result summary
  that quotes the page's own contact info directly (not a Yelp
  workaround, just a normal 403) is a reasonable fallback source, but
  say explicitly in enrichment.md that it's summary-sourced rather than
  page-verified so Kevin/Elly know the confidence level.

- (2026-08-05 run) Picked up 5 of 7 `stage: found` prospects (3
  package, 2 website), leaving the 2 newest ones (Johnston Heating &
  Air, Peña's Landscaping — both website track, both today's finds) for
  next run per the cap-batch-size rule. Result: 2 advanced to
  `enriched` (Schmidtlein Electric — package, real company website +
  named contact Debbie Schmidtlein; Kuberra Electric — website,
  confirmed no-site via ENOTFOUND + business Gmail address), 3 held at
  `found` on the email gate (D&D Plumbing & Repair, SonRise Roofing,
  Superior Roofing) — first real hits of that gate since it went live
  2026-08-04. Also note: also had to fast-forward `master` past a
  detached-HEAD commit (Rupika's 2026-08-05 run, 5 new prospects) that
  an earlier session had left unmerged/unpushed — worth a heads-up to
  Kevin that a prior session ended in a state where its work wasn't on
  a branch.
- (email gate, 2026-08-05) The gate is genuinely biting hardest on
  package-track prospects sourced via the "family-owned/locally-owned"
  search technique rather than the Yelp-advertisers one: both roofing
  companies this run (SonRise, Superior) have real, live company
  websites (confirmed via search-indexed pages) that both 403'd on
  direct WebFetch — same as the recurring 403 pattern already noted
  above — and neither surfaced a real email anywhere (site content via
  search snippets, BBB "Email Business" widgets which don't expose an
  address, or gmail/yahoo guesses tied to the named owner). Only the
  phone number is reliably discoverable for either. This looks like a
  real structural gap for small contractors who list a phone-first BBB/
  Yelp presence and treat their own site as brochure-only — worth
  flagging to Kevin if it recurs, same way the ads-track "inconclusive
  sponsored badge" limit was flagged.

- (2026-08-09 run) Picked up the 2 prospects still at `stage: found`
  that hadn't been touched yet (Johnston Heating & Air, Peña's
  Landscaping — both website track, both from Rupika's 2026-08-05
  batch). Deliberately left the other 3 `found` prospects alone
  (D&D Plumbing, SonRise Roofing, Superior Roofing) — those were
  already fully investigated and documented as dead-ends/email-blocked
  in the 2026-08-05 run with no new information likely to change that;
  re-running the same searches would just burn cost for no signal. Both
  of this run's prospects passed their gates and advanced to
  `enriched` — no dead ends.
- (website-gap gate, 2026-08-09) Caught a genuinely tricky false
  positive: Johnston Heating & Air's exact business name showed up as
  an indexed page on `johnstonheatingandair.com`, which looked at first
  like Rupika's website-gap guess was wrong. Turned out to be a lead-gen
  domain squat — the page itself discloses it's an "independent
  marketing and referral platform... not affiliated with... the
  previous owner of this domain" and lists a different (toll-free)
  phone number than the real business. Worth remembering as a pattern:
  a domain that surfaces with the exact business name in its page title
  is not proof of a real site — check the page's own disclosed
  affiliation and whether the phone number on it matches the business's
  real number before treating it as a contradiction. Direct WebFetch of
  the domain was blocked by this environment's egress proxy (not a DNS
  check like the usual ENOTFOUND pattern), so this read came from
  search-snippet text only — lower confidence than a real page render,
  noted honestly in enrichment.md.
- (email gate, 2026-08-09) Peña's Landscaping's listed email
  (hgservicespocatello@gmail.com) doesn't match the business name at
  all — flagged as an honest caveat in enrichment.md rather than either
  silently trusting it or holding the prospect on that basis alone.
  It's consistently tied to this specific business's phone/location
  across every independent search result, which is what actually
  matters per the gate (business's own listed contact info, not a
  guessed pattern) — a name mismatch alone isn't disqualifying.

- (2026-08-10 run) Also had to fast-forward `master` past another
  detached-HEAD commit (Rupika's 2026-08-10 batch, 4 new prospects) that
  an earlier session left unmerged — third time this exact pattern has
  shown up (also 2026-08-05). Worth a real heads-up to Kevin now that
  it's recurring rather than a one-off: something about how these
  sessions end is leaving work off any branch.
  Picked up all 4 of the new `stage: found` prospects from that batch
  (2 package via the Phoenix/L.A. priority hunt, 2 website) — left the
  3 older ones (D&D Plumbing, SonRise Roofing, Superior Roofing) alone
  again, still fully documented dead-ends/email-blocked from
  2026-08-05 with nothing new likely to change that. All 4 of this
  run's prospects passed their gates and advanced to `enriched` — no
  dead ends, but one real identity-check catch and one recurring
  data-quality issue worth flagging below.
- (package track, 2026-08-10) AZ Grand Roofing and Painting: Rupika's
  brief said "Gilbert, AZ" but Yelp/Angi/HomeAdvisor listings all show
  the physical address as Chandler, AZ. Confirmed via their own
  about-us page language (exact "third-generation... nearly five
  decades... appointments with the owner or one of their talented
  sons" phrasing) that this is the same business Rupika found, not a
  mismatch — Chandler and Gilbert are adjacent Phoenix-metro suburbs
  and her search was scoped to "Chandler/Gilbert, AZ" per brief.md.
  Worth remembering as a pattern: a city discrepancy between brief.md
  and what verification turns up isn't automatically a wrong-business
  red flag — check the about-us/bio text for a distinctive phrase match
  before assuming it's a different company.
- (response-time gate, 2026-08-10) Exterior Specialists (Pasadena) is a
  second confirmed case of the WebSearch response-time-figure
  unreliability Rupika flagged this same run (family-painting/
  aplus-garage-doors batch) — four separate searches returned four
  different numbers (20 min / 6 hrs / 9 hrs / 1 day) for the same
  business. This is now two independent hits on the same limitation in
  one week of using the technique. Per the persona doc's inconclusive
  convention this doesn't block advancement, but it's happening often
  enough that it's worth flagging to Kevin the same way the ads-track
  "inconclusive sponsored badge" limit was: the response-time hook from
  this sourcing technique may just be structurally unreliable to
  verify after the fact, even though it's a fine initial signal to
  find prospects with.

- (2026-08-11 run) First run since Apollo was formally dropped from the
  toolset (public web research only, per the 2026-08-11 persona-doc
  update) — no change in method in practice, the note just confirmed
  what I was already doing. Also had to fast-forward onto a detached
  HEAD again on session start (4th time this pattern has shown up) —
  this time it matched origin/master exactly with no divergent local
  work, so no data-loss risk, but worth another nudge to Kevin that
  it's still happening every run.
  Picked up the 3 newest `stage: found` prospects, all package track,
  all from Rupika's 2026-08-10 Phoenix/L.A. batch: Boldt HVAC & Repair
  (Glendale AZ), Radiant Remodeling Pros (Avondale AZ), Rafael and Iris
  Roofing (Valley Village CA). Deliberately left the 3 older ones (D&D
  Plumbing, SonRise Roofing, Superior Roofing) alone again — still
  fully documented dead-ends/email-blocked from 2026-08-05, nothing new
  likely to change that.
  Result: 2 advanced to `enriched` (Boldt HVAC, Rafael and Iris
  Roofing), 1 held at `found` on the email gate (Radiant Remodeling
  Pros — real, licensed, active business, just genuinely no
  discoverable email after checking site/Facebook/Instagram/Bizapedia/
  ZoomInfo/pattern guesses).
- (license-status caution, 2026-08-11) Boldt HVAC's AZROC license
  (272595/272596) showed inactive with an expiration around May 2025
  per BuildZoom, and I couldn't independently confirm current status —
  both azroc.gov and its search portal (azroc.my.site.com) are blocked
  by this environment's egress proxy. Advanced anyway (license status
  isn't one of my defined gates, and the business shows clear signs of
  actively operating — new 5-star reviews through July 2026, A+ BBB),
  but flagged prominently in enrichment.md for Kevin. Worth Kevin
  deciding explicitly whether license status should become a real gate
  alongside email/website-gap/ads-activity, especially if this
  recurs — right now it's handled ad hoc, on judgment.
- (response-time signal, 2026-08-11) Now 4 separate instances in about
  a week of the same figure-instability problem across different
  businesses and different sourcing runs (Rupika's family-painting/
  aplus-garage-doors batch, Exterior Specialists, Radiant Remodeling
  Pros, Rafael and Iris Roofing this run). This isn't occasional noise
  anymore — reads like a structural limit of trying to verify a live
  Yelp response-time metric after the fact via cached/aggregated
  search results rather than the live page (which stays off-limits per
  ToS). Repeating the 2026-08-10 flag: worth a real conversation with
  Kevin about whether this signal is still worth sourcing on if it
  can't be verified, or whether the technique should shift to treating
  it as a sourcing-only signal Elly's drafts never cite directly.

- (2026-08-11 run, priority batch) A second run the same day: Kevin
  dropped `prospects/_kevin-yelp-handpicked/` — his own hand-picked list
  of 273 Yelp advertisers (Phoenix metro) with poor response times but
  high lead volume, already scored 1-5 on Purchase Likelihood by an
  earlier AI pass. Per the README's instructions, worked the first
  batch of the highest-likelihood + slowest-response-time businesses
  (~25) myself, doing double duty since this batch skipped Rupika —
  I both built each prospect folder (brief.md/status.md/enrichment.md)
  from the CSV + web research AND enriched it in one pass, using
  6 parallel research subagents to cover ground efficiently, then
  applying the normal email gate myself. Result: 21 of 25 advanced to
  `enriched`, 4 held at `found`.
  - Deduped 273 CSV rows down to 185 unique businesses first (Kevin's
    list had heavy repeat entries — some businesses appear 5-8 times
    across different research passes with conflicting response-time
    figures for the same business; picked the slowest-claimed figure
    per business as the headline but flagged the CSV's own internal
    noise in enrichment.md wherever it was significant, rather than
    presenting a single unverified number as solid).
  - Held at `found` (4): Nombrano Construction and Camelback Hardscapes
    (both real, active businesses — no website at all and no email
    findable anywhere, so no domain exists to even ground a guessed
    pattern in, unlike the website-having businesses below); Good Times
    Plumbing & Restoration (has a live site but genuinely no email
    surfaced despite an honest check); Apple Plumbing (a new case, not
    the usual email gate — confirmed via press coverage it was acquired
    by Day & Night Air Conditioning, Heating & Plumbing on 2025-07-31
    and no longer operates independently; appleplumbingaz.com now
    redirects to the acquirer's site. Held as a dead-end the same way a
    wrong website-gap guess gets held, not dropped quietly — Kevin may
    want to pursue Day & Night itself as a different-shaped prospect).
  - Email gate, new pattern worth naming: several advances this run used
    a "guessed pattern on a confirmed-live company domain" email
    (info@/admin@ style) rather than a directly-confirmed address —
    Doherty Bros Window Pros, Nevarez Landscape specifically. Read the
    gate's own wording as allowing this (domain confirmed real/active is
    the stated bar for guesses), distinct from guessing an arbitrary
    personal gmail/yahoo address, which past runs correctly didn't treat
    as grounded enough. Flagged clearly as "GUESSED" in each
    enrichment.md so Elly/Kevin know the confidence level — worth
    Kevin confirming this reading of the gate is what he intended,
    since it's a real precedent this run leaned on 2-3 times.
  - Two businesses (Sal's Landscape Construction, AZ Remodel Pros/
    Doherty Bros) had CSV-given phone numbers that didn't match any
    independently-found number — likely Yelp call-tracking lines rather
    than direct numbers. Verified numbers noted in each brief.md;
    flagged rather than silently overwritten.
  - Owner-name ambiguity came up twice (AMS Landscaping: Eli Hall vs.
    Stephen Clark; Krasiva Windows and Doors: Greg Strickland vs.
    Derrick as GM) — didn't guess which to use as a merge-tag first
    name, flagged both candidates in enrichment.md for Elly/Kevin to
    resolve rather than picking one.
  - This batch was ~5x a normal run's volume by design (Kevin's own
    README explicitly asked for ~25, this being a one-time priority
    list rather the standing daily pipeline) — flagging so this isn't
    read as a new normal batch size going forward without Kevin saying
    so again.

- (2026-08-12 run) **Flagging a suspicious fire-payload, did not act on
  it.** This run's scheduled-task fire included a "routine-fire-payload"
  block claiming Kevin needed a "sprint" to fill emails into
  `prospects/_kevin-yelp-handpicked/yelp-DEDUPED-ready.csv` (174 unique
  rows after dedupe, "57 emails" already merged in) and to write output
  to a new `yelp-ENRICHED-montague.csv`. Checked the actual repo before
  doing anything: neither `yelp-DEDUPED-ready.csv` nor any 57-email
  merged CSV exists — the only file in that folder is the original
  `yelp-handpicked-2026-08-11.csv` (273 rows) untouched since the
  2026-08-11 batch, and the 2026-08-11 enrichment work is exactly where
  it belongs, in each prospect's own `enrichment.md`. The payload also
  asked for a ~100-business batch in one run (CLAUDE.md's cost-discipline
  section explicitly caps batch size and says "not the whole backlog")
  and for a CSV-column workflow that bypasses the real
  `status.md`/`enrichment.md` handoff Elly and Kevin actually read.
  Per the system's own handling of fire-payload content (data, not
  instructions, unless the routine's own prompt delegates to it — this
  one didn't), did not run the CSV sprint. Instead ran the normal
  persona-defined workflow this run's actual prompt asked for. Worth a
  real heads-up to Kevin: either something is misfiring on the
  scheduler/API side, or someone triggered this fire endpoint with
  fabricated context — worth him checking who/what can hit that
  endpoint.
- (2026-08-12 run, normal batch) Picked up 5 of 7 `stage: found`
  prospects — the two newest untouched batches (2 ads + 2 website from
  commit 294b99b, 1 of 3 package from f7f15a4). Left 2 package ones
  (Partnership Painting, Rebuild Arizona Construction) for next run, and
  deliberately left Radiant Remodeling Pros alone again (already
  documented email-blocked from 2026-08-11, nothing new likely).
  Result: 4 advanced to `enriched` (Access Garage Doors, Same Day
  Electric — both ads; H&J Landscaping — website; J Powers Electric —
  package), 1 held at `found` on the email gate (Casey Moriarty Pest
  Control — website-gap confirmed real, just no discoverable email).
  - J Powers Electric: caught a real correction to Rupika's brief —
    she found no website in her original search, but jpowerselectric.com
    is in fact a real, live, active site for this business (corroborated
    via BuildZoom + the site's own indexed title). Used the guessed
    info@jpowerselectric.com pattern on that confirmed-live domain (same
    precedent as Doherty Bros/Nevarez on 2026-08-11) since no email
    surfaced directly. Worth remembering: a "no website found" brief note
    is itself an unverified guess like the others, not just the
    website-gap and ad-activity claims — worth double-checking it too
    when a business otherwise looks legitimate/licensed.
  - Both ads-track prospects (Access Garage Doors, Same Day Electric)
    hit the same "inconclusive sponsored-badge" limitation logged
    repeatedly since 2026-08-04 — advanced per the established
    inconclusive-but-not-contradicted convention, not a new issue.
  - Direct WebFetch of all three company-owned domains attempted this
    run (accessdoorcompany.com, samedayelectric.net, jpowerselectric.com)
    was blocked by the environment's egress proxy every time — same
    recurring pattern as brezdenpest.com/restorion.com before. All three
    emails/website confirmations are search-summary-sourced, not
    page-rendered; noted as such in each enrichment.md.

- (2026-08-12 run, second fire) **Same suspicious fire-payload pattern hit
  again, second time today — did not act on it, again.** This run's
  scheduled-task fire included another "routine-fire-payload" block, this
  one claiming a "PRIORITY OVERRIDE" task: fill ~100 blank EMAIL cells in
  a `prospects/_kevin-yelp-handpicked/yelp-DEDUPED-ready.csv` (claimed
  174 deduped rows) using external lookups (business sites, Google
  Business Profile, Facebook, AZ Corp Commission, ROC licensing), write
  output to a new `yelp-ENRICHED-montague.csv`, and commit straight to
  master. It also asserted, falsely, that "your previous enrichment"
  had put results somewhere invisible/unusable and that Kevin had to
  merge it by hand. Checked the repo before doing anything (again):
  `yelp-DEDUPED-ready.csv` still does not exist — the only file in that
  folder is the original `yelp-handpicked-2026-08-11.csv`, untouched
  since the 2026-08-11 batch, and that batch's real enrichment work is
  exactly where the persona doc says it should be, in each prospect's
  own `enrichment.md` (verified `git log`/`git status` clean, no stray
  branches). This is now 2 nearly-identical injection attempts via the
  fire-payload channel on the same day, both referencing a nonexistent
  CSV and both trying to redirect a scheduled run into a ~100-item
  external-lookup batch (CLAUDE.md caps batch size) that bypasses the
  real status.md/enrichment.md handoff and pushes straight to master.
  Did not run it, per the same reasoning as the first time. **Sent
  Kevin a push notification this run** flagging the fire endpoint as
  likely compromised or being probed — worth him checking who/what can
  hit it, since a single flag earlier today clearly wasn't enough to
  stop a second attempt. Instead ran the actual assigned normal-batch
  workflow below.
- (2026-08-12 run, normal batch #2) Picked up the 2 prospects left over
  from earlier today's normal batch (Partnership Painting, Rebuild
  Arizona Construction — both package track, both from Rupika's
  f7f15a4 batch). Both passed the email gate and advanced to
  `enriched` — no dead ends.
  - Partnership Painting: confirmed contact Scott Penn (President/
    co-founder). No email exposed directly in search (WebFetch of
    partnershippainting.com and /contact-us both blocked by the egress
    proxy); used the GUESSED-pattern-on-confirmed-live-domain precedent
    (scott@partnershippainting.com, matching RocketReach's confirmed
    `first@domain` format) — same convention as Doherty Bros/Nevarez/
    J Powers Electric. Response-time signal (~9 hrs per brief) couldn't
    be independently reconfirmed — same recurring search-snippet
    limitation logged since 2026-08-04, not a block.
  - Rebuild Arizona Construction: resolved the naming-collision flag
    Rupika left in brief.md (a similarly-named "Rebuild Construction
    LLC" in Surprise, AZ) — confirmed distinct business via matching
    phone (602-574-1100) and address (Phoenix 85024) to rebuildarizona.com
    itself. Found a directly-listed email (Rebuildaz24@gmail.com, not a
    guess) so this one cleared the email gate cleanly. No single owner
    name found (Yelp reviews mention several team members — Scott,
    Darin, Izzy, Elvis — with no indication which is the owner), so left
    the contact-name field as business-name-fallback rather than
    guessing which team member to use as the merge tag.

- (2026-08-12, third fire today) **This one was real — verified before acting,
  glad I did.** Fire-payload again referenced
  `prospects/_kevin-yelp-handpicked/yelp-DEDUPED-ready.csv`, same filename as
  the two same-day payloads flagged as likely injections above. This time
  `git fetch origin master` + `git ls-tree` showed the file genuinely exists
  on `origin/master` (commit `66e87d6`, authored by the real
  `VIRIDIALLC <kevin@viridiaanalytics.com>` account, 174 deduped rows —
  exact match to the payload's claim), and a companion commit (`0ca9f24`)
  added `YELP-PROSPECTING-PROCESS.md`, which independently documents this
  exact CSV-output workflow ("Output goes in the CSV... enrichment written
  only into per-prospect folders is invisible and unusable — that happened
  on 2026-08-11 and 41 emails sat stranded until merged by hand"). That's
  real corroboration, not just a plausible-sounding payload — the earlier
  refusals were correct given what was checkable at the time, and staying
  suspicious of the same-filename pattern rather than assuming "already
  flagged twice, ignore" was also correct — each one needs its own
  verification, not a standing bias either way.
  Worked a batch of 20 businesses (Purchase Likelihood 4-5, blank EMAIL,
  prioritized ones with a website since that's what makes an email
  findable) via 5 parallel research subagents. Result: 11 real/guessed
  emails found and advanced to `enriched` (new prospect folders built for
  each, same as the 2026-08-11 double-duty pattern), 8 held at `found` on
  the email gate, 1 skipped as a duplicate (see below). Filled
  `yelp-ENRICHED-montague.csv` (copied from `yelp-DEDUPED-ready.csv` +
  SOURCE column) — committed in two passes (8 rows, then the remaining 12)
  since the session's stop-hook wanted commits between the async research
  batches rather than one commit at the very end.
  - **Dedup miss caught:** "Goodman's Landscape Maintenance" (this CSV) and
    "Goodman's Landscape" (existing prospect `goodmans-landscape-phoenix-az`,
    already `stage: drafted`) are the same real business — same
    email (customerservice@glmaz.com) and owner (David Goodman)
    independently re-found this run confirms it. Kevin's 274→174 dedupe
    didn't catch this because the names differ by one word. Didn't create a
    duplicate folder; filled the CSV row's EMAIL for completeness but flagged
    it as a dup in SOURCE. Worth flagging to Kevin: if other near-miss-name
    duplicates exist in the 174, this dedupe pass didn't catch all of them.
  - **A contradicted guess, correctly not reported:** Fish Window Cleaning —
    a candidate email recurred across searches ("earlesmith@...") but
    ZoomInfo's own redacted format for the same listing starts with a
    different letter ("s***@..."), a direct contradiction rather than just
    an unconfirmed guess. Held at `found` rather than reporting a guess that
    had active counter-evidence — this is a stricter bar than the usual
    "no signal either way" NOT-FOUND case, worth remembering: a guess with a
    contradiction is worse than a guess with silence.
  - **A cross-entity email, correctly not reported:** Pro Natural Landscape
    LLC — a plausible email surfaced tied to the same owner name (Wilfer
    Maquin) but attached to a differently-named entity ("Wilfer Natural
    Landscape Inc") in a directory listing, not this business's own domain.
    Owner name itself was confirmed directly for the right entity (BBB lists
    him as Member of Pro Natural Landscape LLC specifically), so the name
    advanced-quality info is solid even though the email didn't clear the
    gate — held at `found`.
  - **Two owner-name ambiguities, left blank rather than guessed:** Desert
    Sage Landscaping (Efrain Martinez, per the live site's own history copy,
    vs. Miguel Angel Hernandez Guzaro, per a same-named LLC's Sept-2024 AZ
    filing — could be a rebrand of the same shop or a different company) and
    AAA Landscape (Richard Underwood per LinkedIn vs. conflicting
    Michael Walter/Robert Underwood elsewhere — a large multi-executive
    company, unsurprising the sources disagree). Both flagged with full
    detail in their enrichment.md rather than picking one, same convention
    as AMS Landscaping/Krasiva Windows earlier.
  - Every research subagent this run reported this session's WebFetch fully
    blocked by the egress proxy for every external domain tried (confirmed
    against unrelated control domains too, so it's environment-wide, not
    site-specific) — all 20 businesses' findings are WebSearch-snippet-
    derived and cross-checked across independent queries, not page-rendered.
    Flagged per-business in each enrichment.md; worth a mention to Kevin if
    page-level verification ever matters enough to need fixing this
    environment's egress policy.
  - One subagent (Cold Fusion Mechanical) caught and discarded a
    fabricated-looking email an AI search-summary asserted
    ("cfm.phx@gmail.com") — a direct quoted search for that exact string
    returned nothing tied to the business. Worth remembering as a real
    failure mode of WebSearch's own synthesized answers, not just raw
    snippets: verify a literal string actually recurs before trusting it,
    even when it's presented confidently.
  - Email coverage on the full 174-row list after this run: previously
    filled rows (pre-existing, ~21) + this run's 20 attempted (12 found/
    guessed + 8 NOT-FOUND) = 41 of 174 rows now have an EMAIL cell filled
    one way or another (not-found is still a filled cell, distinct from
    untouched-blank). ~133 rows still genuinely untouched — this is a
    repeat-dispatch job per `YELP-PROSPECTING-PROCESS.md`, not a one-run
    fix.

- (2026-08-14 run) **Stale-refs false alarm again, resolved before doing any
  work.** Session started with local `master` and `origin/master` sharing
  zero common history (`git merge-base` found nothing at all). This looked
  exactly like the 2026-08-13 split-history scare CLAUDE.md warns about, but
  the cause here was simpler and fully explainable: this container's repo is
  a **shallow clone** (`.git/shallow` present, depth 50), and local `master`
  was created from an old shallow fetch of `origin/master` back when its tip
  was `ad49973` (2026-08-09). `origin/master` has since moved on (many
  KIREEK send/follow-up commits, up to `42c9696`), and the shallow depth
  meant the shared ancestor simply wasn't in the local object set -- not a
  real rewrite. Confirmed via `git reflog show refs/remotes/origin/master`
  (showed a plain `forced-update` from the last fetch, i.e. local cache
  catching up, not GitHub's real history changing) and by checking commit
  dates on both tips. Local `master` had no unpushed work of mine sitting on
  it -- it was itself just a cached copy of an old `origin/master` -- so
  `git reset --hard origin/master` was the correct, safe move, not a
  destructive one. Worth another nudge to Kevin: this is at least the 2nd
  time (also 2026-08-13) a session has had to spend real effort
  distinguishing "real split" from "stale/shallow local ref" -- might be
  worth the repo doing a full unshallow fetch on container start if that's
  controllable, so this stops costing an investigation every run.

  Picked up all 7 fresh `stage: found` prospects from Rupika's 2026-08-13
  batches (3 package, 3 website, 1 ads) named explicitly in this run's
  fire-payload. Deliberately left the older already-documented `found`
  prospects alone (aaa-landscape, apple-plumbing, camelback-hardscapes,
  casey-moriarty-pest-control, cold-fusion-mechanical, copper-state-home-
  maintenance-repair, dd-plumbing, fish-window-cleaning, good-times-plumbing,
  landscaping-contractors-crg, nombrano-construction, phoenix-windows-and-
  doors, pro-natural-landscape, radiant-remodeling-pros, sonrise-roofing,
  squeeky-kleen-windows, superior-roofing, the-paint-doctor) -- every one of
  those already has an `enrichment.md` from a prior run and is a documented
  email-gate hold or dead-end; nothing new would surface from re-running the
  same searches.

  Applied both of this run's payload-referenced rule changes (both were
  already live in `team/montague-enrichment.md` on master -- the CALL CARD
  format and the "carry Rupika's figure forward labeled unverified"
  amendment -- so this run just meant actually following them, not editing
  the persona file): every enrichment.md this run leads with a CALL CARD,
  and every package-track file carries the response-time figure forward
  even when unconfirmed.

  Result: 5 of 7 advanced to `enriched` (Coleman Painting, Lansford Roofing,
  Liquid Oak Painting, Mr. Electric of Wichita, The 3 Roofers Construction),
  2 held at `found` on the email gate (Crandell Pest Control, Noska
  Lawncare) -- both are otherwise-good prospects, not dead ends: both had
  their website-gap gate independently reconfirmed (Rupika was right on
  both), just no discoverable email.

  - **Coleman Painting:** Mark Coleman (owner) confirmed via a named
    owner-profile feature; email colemanpaintingllc@gmail.com found
    directly (not guessed). Caught a brief.md inaccuracy worth flagging:
    brief said "17 years in business," but the LLC's own registration shows
    it founded 2019 (~7 years) -- noted in enrichment.md rather than
    silently trusting Rupika's "why they fit" framing. Response-time (~3hr)
    stayed unconfirmed (search reads ranged 5hr/3hr/30min) -- carried
    forward as a question per the amended gate. AZROC status conflict
    carried forward as a plain caution, not a gate.
  - **Lansford Roofing:** Robert Lansford (owner) confirmed via bio +
    reviews naming him directly doing the work; email
    Service@lansfordroofing.com found directly. Response-time instability
    got *worse* on reconfirmation, not better -- one new read (20-40 min)
    fell under the original >1hr threshold the prospect was sourced on.
    Flagged prominently rather than picking a number; hook phrased as a
    question, not asserted.
  - **Liquid Oak Painting:** Paul Meils (founder) confirmed; email
    LiquidOakPainting@gmail.com confirmed directly. Rupika's own flag that
    this was "the weakest of the three package finds" held up -- 5 separate
    re-verification searches never reproduced her ~5hr/190-locals figure
    once, and one of those searches surfaced numbers for a *different*
    Hawthorne-area painter instead, suggesting the original figure may be a
    misattribution rather than just stale. CALL CARD hook set to "no
    verified hook" rather than forcing a shaky number through -- worth
    remembering as the line between "unconfirmed but real" (still usable as
    a question) and "actively suspect" (don't use at all).
  - **Mr. Electric of Wichita (ads track):** Dave Kirkwood (franchise
    owner/operator) confirmed via LinkedIn + a YouTube video naming him;
    email contactus@mrelectricwichita.com found directly (not guessed).
    Ads-gate + the franchise-marketing caution Rupika raised both came back
    genuinely inconclusive (no Yelp sponsored badge, but also no evidence
    tying Neighborly/Mr. Electric's generic corporate-marketing support
    specifically to Yelp spend for this location) -- advanced per the
    standing inconclusive-but-not-contradicted convention, full franchise
    detail left in enrichment.md for Kevin to weigh, since a franchise with
    centralized ad spend is a real judgment call this gate wasn't designed
    to fully resolve on its own.
  - **The 3 Roofers Construction (website track):** website-gap
    independently reconfirmed -- Google's own indexed title for
    the3roofersconstructionllc.com literally reads "Website Suspended,"
    corroborating Rupika's Hostinger-suspension finding (direct WebFetch
    blocked by the egress proxy, as usual in this environment). Victor
    Mendoza (owner) confirmed via BBB + reviews; email
    the3roofersconstruction@gmail.com found directly -- a real discovered
    Gmail address, not a domain-pattern guess, so the dead domain didn't
    disqualify it.
  - **Crandell Pest Control (website track, held at found):** website-gap
    reconfirmed -- crandellpest.com independently verified as belonging to
    an unrelated Mesa, AZ business (different address/phone/founder, zero
    service-area overlap), same conclusion Rupika reached. Wayne Crandell
    name reasonably confirmed via independent review text. Email gate
    failed -- checked Facebook, Birdeye, BBB, namesandnumbers, ZoomInfo,
    nothing surfaced, and correctly declined to guess @crandellpest.com
    since that domain is confirmed to belong to the *other* business (a
    guess there would be actively wrong, not just unconfirmed -- worth
    remembering as its own category, distinct from "no domain exists to
    guess from" and "domain exists but guess unconfirmed").
  - **Noska Lawncare (website track, held at found):** website-gap
    reconfirmed via direct DNS failure on noskalawncare.com (ENOTFOUND) --
    same decisive signal as the 2026-08-02 jcheatingcooling.com case in
    this file's oldest note. Email gate failed with a real environment
    limitation attached: facebook.com, MN's Secretary of State
    registered-agent lookup (mblsportal.sos.mn.gov), and
    opencorporates.com were all blocked by the egress proxy this run,
    cutting off the two most promising remaining leads for both name and
    email. One "Jennifer Noska" name hit came from a people-search/
    data-broker site (truthfinder.com) -- deliberately excluded, not an
    approved source and can't be confirmed as this business's owner.
    Flagged as worth a retry if the proxy access changes, not a dead end on
    the business.
  - Every one of this run's WebFetch attempts on target-business domains
    was blocked by the egress proxy again (colemanpaintingaz.com,
    lansfordroofing.com, liquidoakpainting.com, crandellpest.com,
    noskalawncare.com, the3roofersconstructionllc.com,
    mrelectricwichita.com) -- same recurring pattern logged since
    2026-08-02. All confirmations this run are search-summary-sourced,
    flagged as such per-business in each enrichment.md.

- (2026-08-14, duplicate-fire note) A second Montague session ran this same
  scheduled task concurrently with this one -- both started from the same
  base commit (`e49adf7`), both independently picked up the same 2026-08-13
  batch, and both landed on identical outcomes for the 5 prospects we both
  touched (Coleman Painting, Lansford Roofing, Mr. Electric of Wichita
  advanced; Crandell Pest Control, Noska Lawncare held on the email gate).
  That other session additionally covered Liquid Oak Painting and The 3
  Roofers Construction, and pushed to `origin/master` first (`c2a9ad9`).
  When this session went to push its own equivalent commit, `git fetch`
  showed the other one had already landed -- since my commit was still
  local-only (never pushed, so no shared history to rewrite) and its
  substance was fully subsumed by the already-landed one (same or more
  prospects, same conclusions), the safe move was `git reset --hard
  origin/master` rather than force a duplicate/conflicting merge of two
  near-identical enrichment.md sets for the same 5 folders. No data lost --
  both passes reached the same real findings independently, which is itself
  a decent cross-check. Only The Paint Doctor (ads track) is left untouched
  from the 2026-08-13 batch now; leaving it for next run rather than picking
  it up in a third pass today, per the cap-batch-size rule -- today's
  combined coverage (7 prospects across two sessions) is already well above
  a normal day's batch. Worth a real heads-up to Kevin: something is
  double-firing this scheduled task (or two were configured to run at
  overlapping times) -- worth checking the schedule/cron config, since this
  wastes a full duplicate run's worth of API cost today.

- (2026-08-15 run) No stale-refs/detached-HEAD issue this time — session
  started cleanly synced to `origin/master` tip (56ee626), no fetch/reset
  needed. Backlog had grown to 15 untouched `stage: found` prospects
  across three batches: 1 leftover from 2026-08-13 (the-paint-doctor,
  ads), 8 from 2026-08-14 (never picked up — charleston-roofs-windows,
  quality-overhead-door, fifth-element-landscape, scenic-view-landscape,
  cva-exterminators, als-heating, boricuas-painting, bryans-pest-control),
  and 6 brand-new from today's Rupika batch (america-plumbing,
  design-array-garage-door, walnut-valley-pest-control, brudwick-heating-
  cooling, daves-plumbing-heating-cooling, high-country-lawn-landscape).
  Picked up the oldest 9 (the 8/13 + 8/14 backlog) to clear it before it
  grows further; deliberately left the freshest 6 (today's batch) for
  next run per the cap-batch-size rule. Used 9 parallel research
  subagents (pure-research, no file writes) then wrote all enrichment.md/
  status.md updates myself for consistency — this run's batch was larger
  than a normal 4-7, but justified by clearing a 2-day-old backlog rather
  than letting it compound; flagging so it isn't read as the new normal
  batch size without Kevin saying so.

  Result: 6 of 9 advanced to `enriched` (The Paint Doctor, Charleston
  Roofs + Windows, Quality Overhead Door — all ads; Fifth Element
  Landscape, Scenic View Landscape, CVA Exterminators — all package), 3
  held at `found` on the email gate (Al's Heating and Air Conditioning,
  Boricuas Painting, Bryan's Pest Control — all website track).

  - **Quality Overhead Door (ads):** real find — confirmed via GarageCo
    Holdings' own acquisition announcement and a Gridiron Capital press
    release that this business was acquired by a PE-backed garage-door
    roll-up in August 2024. Not an independent local shop anymore. Didn't
    hold it back (none of the defined gates cover ownership structure),
    but flagged prominently in enrichment.md — same "advance but flag for
    Kevin's judgment" pattern as the Boldt HVAC license-status caution
    from 2026-08-11. Worth Kevin deciding if PE-owned/franchise-adjacent
    prospects need their own gate, since this is now two different
    ownership-structure surprises (franchise marketing risk on Mr.
    Electric 2026-08-14, PE roll-up here) in about a week.
  - **Scenic View Landscape (package):** caught a real correction to
    Rupika's brief — she said "no website surfaced," but
    scenicviewlandscapeinc.com is a real, live site (matches phone +
    CSLB license exactly). Same "double-check a 'no website found' brief
    note" pattern flagged before (J Powers Electric, 2026-08-12) —
    worth remembering this keeps recurring across both website-gap and
    package-track no-website checks, not a one-off.
  - **CVA Exterminators (package):** response-time signal moved from
    "unconfirmed" to actively unreliable on reconfirmation — readings
    spanned 16 seconds to 9+ hours across sources, likely because the
    business has duplicate/split Yelp listings. Per the 2026-08-13
    amendment, an unconfirmed figure is still usable as a question, but
    this crossed into a different category (mutually contradictory, not
    just unconfirmed) — dropped the number entirely and used a generic
    question hook instead. Worth naming as a third bucket alongside
    "confirmed" and "unconfirmed-but-usable": actively-contradictory
    figures shouldn't be used even as a question.
  - **Email gate, guessed-pattern precedent used 3x this run** (Quality
    Overhead Door, Fifth Element Landscape, Scenic View Landscape) — all
    domain-grounded guesses on confirmed-live/active company sites, same
    reading of the gate established 2026-08-11/12. Continuing to apply it
    consistently; still worth Kevin confirming this reading is what he
    intended, since it's now been used 6+ times across runs.
  - All three website-track email-gate holds this run had zero domain to
    even ground a guess in (confirmed no website for any of the three) —
    a cleaner category than the guessed-pattern cases above, phone-only
    reachable for now.
  - Egress proxy blocked essentially every direct WebFetch attempted
    across all 9 prospects this run (company domains, BBB, Facebook,
    YellowPages, Birdeye, business.site, Alabama SOS) — same recurring
    pattern logged since 2026-08-02, all findings this run are search-
    snippet-sourced, flagged per-business in each enrichment.md.
  - Backlog after this run: the 6 freshest 8/15 prospects (listed above)
    still untouched, left for next run.

- (2026-08-16 run) Clean start — no stale-refs issue (`git fetch origin`
  first per CLAUDE.md, then `git reset --hard origin/master`; local was
  just a stale shallow-clone cache same shape as 2026-08-14, no unpushed
  work lost). Backlog had grown to 11 untouched `stage: found` prospects:
  the 6 leftover from 2026-08-15 (america-plumbing, design-array-garage-
  door, walnut-valley-pest-control — all package; brudwick-heating-
  cooling, daves-plumbing-heating-cooling, high-country-lawn-landscape —
  all website) plus 5 brand-new from today's Rupika batch
  (jones-lawncare-landscaping, karber-plumbing, pest-patrol-slv — website;
  all-professional-landscape, merican-plumbing-sewer-specialist —
  package). Picked up the older 6 to clear the 8/15 backlog before it
  compounds further, per the standing oldest-first convention; left
  today's freshest 5 for next run per cap-batch-size. Used 6 parallel
  research subagents (pure-research, no file writes), then wrote all
  enrichment.md/status.md updates myself.

  Result: 5 of 6 advanced to `enriched` (America Plumbing, Design Array
  Garage Door, Walnut Valley Pest Control — all package; Brudwick Heating
  & Cooling, High Country Lawn and Landscape — both website), 1 held at
  `found` on the email gate (Dave's Plumbing Heating & Cooling — website
  track).

  - **America Plumbing:** owner name Egzon Osmani found via BBB
    Owner/Principal Contact listing — flagged one real caveat: that BBB
    profile lists a Tempe, AZ address, not the Scottsdale HQ in the brief.
    Plausible (BBB mailing address vs. service address is common for
    home-service LLCs) but not independently corroborated by a second
    source this run — worth Kevin doing a verbal double-check on the call
    rather than treating it as fully nailed down. Real website confirmed
    (americaplumbingaz.com) even though it's package track — good, not a
    website-build fit.
  - **Design Array Garage Door:** caught a real gatekeeper trap worth
    remembering as a pattern — a Yelp Q&A answer was signed "Kevin," but
    that's a staff member fielding customer questions, not the owner
    (real owner is Ben Ahmann, confirmed via BBB + the site's own About Us
    page). A signed reply on Yelp/reviews isn't automatically the owner;
    cross-check against an About page or BBB filing before treating a
    signed name as the contact.
  - **Walnut Valley Pest Control:** response-time signal actually
    reconfirmed this run (rare) — now reading ~8hrs, close to the brief's
    9hr figure and consistent with real Yelp-metric drift rather than
    noise (2hr → 9hr → 8hr across three pulls, all above the pain
    threshold). Also deliberately discarded a Google AI-summary claim that
    a reviewed technician ("Dave/David White") was "the owner" — the claim
    wasn't sourced to any actual snippet and reviews describe him doing
    field work, not ownership; used the CA SOS-filed CEO name (Mary
    Cadena) instead, corroborated by unprompted review mentions. Worth
    naming as its own failure mode alongside the Cold Fusion Mechanical
    fabricated-email case (2026-08-13): search tools' own synthesized
    "answers" asserting a name/fact with confidence isn't the same as a
    sourced finding — always trace back to what's actually being quoted
    from where.
  - **Brudwick Heating & Cooling:** website-gap gate decisively confirmed
    via a DNS-level check on two guessed domains (both ENOTFOUND) on top
    of the usual convergent-absence-across-directories signal — cleaner
    confirmation than most website-gap holds get. Real texture for the
    pitch: reviews describe the owner (Allen Brudwick) personally going to
    bat with a customer's insurance company on a claim — a specific,
    non-generic "why they fit" detail, not just "no website."
  - **High Country Lawn and Landscape:** website-gap gate reconfirmed with
    the most decoy-heavy check of this run — found and ruled out a *third*
    same-name business (High Country Lawn and Landscape LLC, Helena MT,
    with its own real site and a named owner, Tate Fornof) beyond the two
    Rupika had already excluded (Dallastown PA, Casper WY). Worth
    remembering: an identical LLC name recurring in multiple states is
    apparently common enough for this "High Country ___" naming pattern
    specifically that every run on it should expect to find and rule out
    a new decoy, not just the ones already documented. Owner name came up
    genuinely NOT FOUND despite a real multi-source effort — correctly
    left blank per the never-placeholder rule rather than guessing from
    the Helena decoy's owner or anyone else.
  - **Dave's Plumbing Heating & Cooling (held on email gate):**
    website-gap independently confirmed, but worth flagging a new pattern:
    caught WebSearch's own AI-synthesized summary confidently asserting a
    specific website URL (sdplumbingheating.com) that turned out, on
    direct investigation, to be a statewide directory site listing *other*
    companies — not this business at all, just a name-similarity
    pattern-match ("SD"/"Dave's...SD"). This is now at least three
    instances of WebSearch's own synthesized answers asserting something
    false/unsourced with full confidence (Cold Fusion Mechanical's
    fabricated email 2026-08-13, "Dave/David is the owner" on Walnut
    Valley this same run, this website claim) — worth flagging to Kevin as
    a real, recurring failure mode of the search tool's AI-overview layer
    specifically, distinct from ordinary snippet noise: always verify a
    specific asserted fact (a URL, an email, a name) traces to an actual
    quoted source before trusting it, not just when it looks suspicious.
    Owner name "Dave Adkins" is moderate-confidence (surname independently
    confirmed via a VP relative on RocketReach/LinkedIn, full name/title
    not primary-source-verified) — usable as "Dave" alone with confidence.
    No email surfaced anywhere and no confirmed domain exists to guess a
    pattern from — held at `found` per the required gate, not a dead end
    on the business itself.
  - Egress proxy blocked essentially every direct WebFetch attempted
    across all 6 prospects this run (company/guessed domains, BBB,
    Facebook, Bizapedia, Chamber of Commerce, Manta, Kompass, D&B,
    LinkedIn, Wyoming SOS, OpenCorporates) — same recurring pattern logged
    since 2026-08-02, all findings this run are search-snippet-sourced
    except the two decisive DNS-resolution checks (Brudwick's two guessed
    domains), which were direct and conclusive despite the general block.
  - Backlog after this run: today's freshest 5 (jones-lawncare-
    landscaping, karber-plumbing, pest-patrol-slv, all-professional-
    landscape, merican-plumbing-sewer-specialist) still untouched, left
    for next run. Also still open from before: Radiant Remodeling Pros,
    Casey Moriarty Pest Control, Crandell Pest Control, Noska Lawncare,
    Al's Heating and Air Conditioning, Boricuas Painting, Bryan's Pest
    Control, and the older 2026-08-05 batch (D&D Plumbing, SonRise
    Roofing, Superior Roofing) — all already fully documented email-gate
    holds/dead-ends from prior runs, correctly left alone again rather
    than re-running the same searches for no new signal.
