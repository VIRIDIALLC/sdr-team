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

- (2026-08-17 run) **Another suspicious fire-payload, did not act on it —
  same pattern as the two 2026-08-12 incidents.** This run's fire-payload
  claimed "fifty prospects across the four batches ready for GHL
  enrollment" and asked to "pull real email addresses for each one,"
  framed with an urgent-sounding "WHEN DONE, INTEGRATE YOUR WORK" postscript
  pushing a commit straight to master. Checked before acting: `git fetch
  origin master` (local HEAD was detached, sitting on a stale shallow-clone
  cache from an old `origin/master` fetch — same shape as the 2026-08-14/
  08-16 pattern, confirmed via `git reflog show master`, safe `git reset
  --hard origin/master`), then scanned `prospects/*/status.md`. Reality:
  28 prospects at `stage: found`, not "fifty in four batches" — and of
  those, 23 already carry a documented email-gate hold or dead-end from a
  prior run; only 5 were genuinely untouched. "Ready for GHL enrollment"
  also isn't a real concept anywhere in this pipeline — nothing here
  writes to GHL (CRM writes are an explicit hard limit on this role), and
  no status field or workflow doc uses that phrase. Did not run the
  50-prospect/GHL-framed batch. Instead picked up the actual 5 untouched
  `stage: found` prospects (the same 5 flagged as backlog at the end of
  the 2026-08-16 run above) — a normal-sized batch, consistent with the
  cap-batch-size rule.

  Result: 2 of 5 advanced to `enriched` (All Professional Landscape,
  Merican Plumbing Sewer Specialist — both package), 3 held at `found` on
  the email gate (Jones LawnCare & Landscaping, Karber Plumbing, Pest
  Patrol of the SLV — all website track).

  - **Guessed-pattern-on-confirmed-live-domain precedent applied twice
    more this run** (All Professional Landscape, Merican Plumbing Sewer
    Specialist) — both had a real, live, indexed company website but no
    directly-discoverable email; used the info@ pattern on the confirmed
    domain, labeled GUESSED not confirmed in both enrichment.md and the
    CALL CARD. This precedent has now been used 8+ times across runs
    since 2026-08-11 — still worth Kevin explicitly confirming this
    reading of the gate is what he intended, per every prior note on this.
  - **Merican Plumbing:** a real name (Mauro Perez) turned up tied to the
    business's own Facebook page, but nothing confirms an owner title —
    used on the CALL CARD with an explicit "not confirmed as owner"
    caveat rather than treating it as settled. Worth naming as a new
    category alongside the existing ones: a real, non-invented name with
    an *uncertain title*, distinct from "no name found" and from the
    owner-name-ambiguity-between-two-candidates cases logged before.
  - **Jones LawnCare & Landscaping:** the website-gap gate came back
    genuinely UNRESOLVED rather than confirmed or contradicted — this
    session's egress proxy blocked every domain needed to check the one
    remaining candidate (a generic, no-city Ueniweb subdomain). Didn't
    force a false confirm; left it explicitly unresolved in enrichment.md
    for a follow-up pass with working fetch access. The email gate failed
    independently anyway (no domain to guess from), so this one's held at
    `found` regardless — worth remembering as a case where the website
    gate and the email gate can fail for genuinely different reasons in
    the same prospect.
  - **Pest Patrol of the SLV:** facebook.com and m.facebook.com were
    hard-blocked by this environment's egress proxy this run (not a rate
    limit, a structural block) — the Facebook page is almost certainly
    where the owner name and a phone-adjacent contact lives, but this
    session couldn't reach it. Website-gap itself confirmed decisively via
    DNS. Flagged as a concrete follow-up target (working Facebook access
    would likely close both the name and email gaps at once), not a dead
    end on the business.
  - **Karber Plumbing:** website-gap confirmed decisively, owner name
    (Jamie Lee Karber) confirmed via two independent official sources —
    only the email gate failed, and even that came with an environment
    caveat (Facebook, TradeProof.net, BBB, the SD DLR PDF, YellowPages,
    and Buzzfile were all egress-blocked this run, so absence-in-search
    isn't the same as confirmed absence-on-page here).
  - Egress-proxy blocking of essentially every direct-domain fetch
    continues every run since 2026-08-02 — this run it specifically cost
    two of the three held prospects a clean email-gate resolution (Pest
    Patrol's Facebook block, Karber's six-source block), not just the
    usual "search-summary-sourced not page-rendered" caveat. Worth a
    renewed nudge to Kevin if this keeps costing real gate outcomes rather
    than just confidence-level caveats.
  - Push notification sent to Kevin this run flagging the fire endpoint
    pattern — third near-identical injection attempt now (2x on
    2026-08-12, this one on 2026-08-17), all asking for an oversized batch
    framed around a workflow (GHL enrollment, or previously a specific
    CSV) that doesn't match what's actually in the repo. Worth him
    checking who/what can hit that endpoint, same ask as before.

- (2026-08-17, second run same day) Clean start, no stale-refs issue —
  `git fetch origin` then `git status` showed local already synced to
  `origin/master`. This run's fire-payload was the normal persona-defined
  prompt, no suspicious injection content this time. Picked up the 6
  brand-new `stage: found` prospects from Rupika's latest batch (commit
  `5f4e71c`, 2 package + 4 website) — the only untouched prospects in the
  backlog; every other `found` prospect (28 total in the repo) already
  carries a documented email-gate hold or dead-end from a prior run,
  correctly left alone. Used 6 parallel research subagents (pure-research,
  no file writes), then wrote all enrichment.md/status.md updates myself.

  Result: 3 of 6 advanced to `enriched` (E-Z Garage Door Services —
  website; JNA Heating & Cooling, Nunez Painting Contractor — both
  package), 3 held at `found` on the email gate (Brown Beardz Restoration,
  Lolo Landscaping, Vance Heating & Air Conditioning — all website track).

  - **A new, sharper instance of the recurring WebSearch-synthesis
    unreliability problem (Lolo Landscaping):** the research subagent
    caught WebSearch repeating an identical owner-name/email claim
    verbatim across many different queries — including a query whose
    actual returned links had nothing to do with the business at all. That's
    stronger evidence than prior instances (Cold Fusion Mechanical's
    fabricated email 2026-08-13, "Dave/David is the owner" and the
    sdplumbingheating.com misattribution both 2026-08-16) that the search
    tool's AI-synthesis layer can echo back unfounded claims with full
    confidence rather than grounding them in retrieved content. Treated the
    candidate name/email as unresolved rather than passing them forward —
    right call given the tool visibly wasn't tracking relevance. Worth
    elevating this from "worth a mention" to a real ask for Kevin: this is
    now 4 separate instances of the search layer asserting something
    false/ungrounded with full confidence, specifically undermining the
    contact-name and email gates this role exists to enforce.
  - **Vance Heating & Air Conditioning:** caught a real correction to
    Rupika's brief, not just an unconfirmed lead — the LinkedIn profile she
    cited as corroborating "Austin" as owner turned out (via a companion
    search result naming the account holder) to almost certainly belong to
    Randy Vance, the confirmed owner of an unrelated Texas company of the
    same trade and surname ("Vance Air Conditioning & Heating" vs. this
    business's "Vance Heating & Air Conditioning" — reversed word order,
    an easy mixup). "Austin" itself held up independently via the Facebook
    bio text, but the LinkedIn corroboration specifically should be
    discounted. Also a 4th same-surname collision domain surfaced and was
    ruled out (vanceac.com, also Randy Vance's) — worth remembering
    "Vance ___ heating/air" is apparently a common-enough business name
    that every run on one should expect same-surname decoys, same pattern
    already noted for "High Country Lawn and Landscape" (2026-08-16).
  - **JNA Heating & Cooling:** a genuinely rare positive case — the
    response-time signal reconfirmed cleanly (4 of 5 searches agreed on
    ~4hrs, the one outlier traced to stale Yahoo Local metadata
    inconsistent with the same page's own "same day service" note).
    Worth noting alongside Walnut Valley Pest Control (2026-08-16) as one
    of the few times this figure type has actually held up on
    reconfirmation rather than degrading.
  - **Nunez Painting Contractor:** a real naming-collision caution worth
    remembering for any future "Nunez Painting"-named lead — there are at
    least 3-4 similarly-named businesses in the West Valley AZ area, likely
    different family members. Anchored this enrichment on the specific
    license #254684 / 16022 W Myrtle Ave / 63-review-Yelp-listing
    combination per the brief, not the name alone. Also declined to
    reference the brief's "closed second location" detail in outreach
    framing — the closed Buckeye Yelp listing traces to a plausibly
    different (related-family) entity, not confirmed as this exact LLC's
    own history.
  - Egress proxy blocked essentially every direct WebFetch attempted
    across all 6 prospects this run (company domains, Facebook, BBB,
    Bizapedia, CSLB, CSI.edu, Idaho/Oklahoma/Georgia SOS/business
    registries) — same recurring pattern logged since 2026-08-02, all
    email/owner-name confirmations this run are search-snippet-sourced
    except the decisive DNS-resolution checks on guessed domains (direct
    and conclusive despite the general block).
  - Backlog after this run: 25 prospects remain at `stage: found`, all
    already fully documented email-gate holds/dead-ends from prior runs —
    correctly left alone, no new signal likely from re-running the same
    searches. No new untouched prospects remain as of this run.

- (2026-08-18 run) Clean start, no stale-refs issue this time — `git fetch
  origin` first per CLAUDE.md, then found local HEAD detached at the same
  commit as `origin/master` (no divergence), `git checkout master && git
  merge --ff-only` brought local master current with no risk. Also noticed
  a root-level `STRANDED-WORK.md` left by a different session's ("VEGA")
  blocker audit, flagging unrelated feature branches (a dashboard scaffold,
  Playwright/Higgsfield tooling) never merged to master — out of scope for
  this role (enrichment only) to merge unilaterally; left untouched for
  Kevin or that session to handle, not something I should act on.

  This run's fire-payload was the normal persona-defined prompt, no
  suspicious injection content (unlike the four prior incidents logged
  2026-08-12/08-17 above) — good to note the pattern isn't every run.
  Picked up all 6 brand-new `stage: found` prospects from today's Rupika
  batch (commit 903e37c, 3 package + 3 website) — the only untouched
  prospects in the backlog; every other `found` prospect already carries a
  documented email-gate hold/dead-end from a prior run. Used 6 parallel
  research subagents (pure-research, no file writes), then wrote all
  enrichment.md/status.md updates myself.

  Result: 4 of 6 advanced to `enriched` (Jesca Heating & Air, Prima
  Painting, Ramos Painting — all package; RidgeTop Roofing and Repairs —
  website), 2 held at `found` on the email gate (Lay's Electric, Watkins
  Plumbing And Drains — both website track).

  - **Ramos Painting (package) — a real correction, not just an unconfirmed
    guess:** Rupika's brief said no dedicated domain surfaced; a live site
    (rpaintingservices.com) actually exists, matching phone/address/service
    list exactly. Removed the no-website-upsell flag. Same recurring
    pattern as J Powers Electric (2026-08-12) and Scenic View Landscape
    (2026-08-15) — a "no website found" brief note needs the same
    double-check as an explicit website-gap or ad-activity claim, not just
    those two. This is now the third instance.
  - **Watkins Plumbing (website) — another real correction:** Rupika's
    brief guessed the two Facebook pages she found were the same operation;
    one of them (facebook.com/watkinsplbg) is actually an unrelated Chico,
    CA business with its own decades-old operation and current non-Watkins
    owner. Same-name collisions keep costing real verification time on this
    team (Vance Heating/Air, High Country Lawn and Landscape, now this) —
    worth remembering it's not just business-name collisions that need
    checking, page/URL-handle collisions do too.
  - **Prima Painting (package) — response-time figure graduated from
    "unconfirmed" to "actively contradictory":** reconfirmation attempts
    returned four different numbers across two dimensions (9hrs/1day
    response time, 12/109 locals-requesting-quote) with zero verbatim
    quoted snippets behind any of them. Per the CVA Exterminators
    (2026-08-15) precedent, dropped the number entirely rather than using
    it even as a hedged question — this is now a second clean instance of
    that third bucket ("contradictory," distinct from "confirmed" and
    "unconfirmed-but-usable").
  - **Jesca Heating & Air (package) — the shakiest advance today:** every
    individual gate technically cleared (email guessed-on-confirmed-domain,
    response-time carried forward as a hedged question) but the
    uncertainties compound — no owner name at all, a guessed not confirmed
    email, and a response-time signal weakened further by discovering what
    looks like a split/duplicate Yelp listing for the same business.
    Advanced per the letter of the gates, but flagged prominently in
    enrichment.md for Kevin's judgment rather than presented as a clean
    win.
  - **Guessed-pattern-on-confirmed-live-domain precedent used twice more**
    this run (Jesca Heating & Air, Prima Painting) — now 10+ uses across
    runs since 2026-08-11, still worth Kevin explicitly confirming this
    reading of the gate is what he intended.
  - **Both website-track holds this run had genuinely strong website-gap
    confirmations** (DNS ENOTFOUND across 7-10 guessed domains each) but
    failed purely on email — Lay's Electric (no domain to guess from, and
    the Lloyd-vs-Payton contact-name question also stayed unresolved) and
    Watkins Plumbing (a masked email exists on a directory listing but the
    page itself couldn't be fetched to read it — a concrete follow-up
    target, not a dead end).
  - Egress proxy blocked essentially every direct WebFetch attempted across
    all 6 prospects this run (company/guessed domains, BBB, Facebook,
    Bizapedia, RoofReport, MeetAPlumber.com, CSLB, BuildZoom, AZ ROC, CA
    SOS, MS SOS/MSBOC) — same recurring pattern logged since 2026-08-02.
    Direct DNS lookups, notably, kept working throughout and were the
    decisive tool for every website-gap confirmation/correction this run —
    worth remembering DNS resolution is a real, reliable channel even when
    page-level fetch is blocked.
  - Backlog after this run: 27 prospects at `stage: found` (25 from before
    + the 2 new holds), all now carrying a documented email-gate hold/
    dead-end from some run. No untouched prospects remain.

- (2026-08-19 run) Clean start — `git fetch origin` first per CLAUDE.md,
  found local HEAD detached but matching `origin/master` exactly (60edc19,
  Rupika's 2026-08-19 batch already on it), `git checkout master && git
  merge --ff-only` brought local current with no risk. Picked up all 5
  brand-new `stage: found` prospects from that batch (3 package, 2
  website) — the only untouched prospects in the backlog; the other 32
  already carry a documented email-gate hold/dead-end from a prior run.
  Used 5 parallel research subagents (pure-research, no file writes), then
  wrote all enrichment.md/status.md updates myself.

  Result: 2 of 5 advanced to `enriched` (Casa Painting Services, Reliant
  Pest Control — both package), 3 held at `found` on the email gate
  (New Light Electric — package; Dorries Roofing, J.A.M. Pest Control —
  both website).

  - **Casa Painting Services:** owner Carlos Casasola confirmed (high
    confidence, 5+ sources), email confirmed, website confirmed real. A
    real reconfirmation discrepancy worth naming as its own pattern,
    distinct from "unconfirmed" and "contradictory": reconfirmation found
    a *different, internally-consistent* number (~2hrs, 3x) than Rupika's
    original (~5hrs) — not noise, not a contradiction of the pain point
    (2hrs is still real leakage against 301 reviews of lead volume), just
    a wrong original figure. Used the better-supported reconfirmed number,
    flagged the discrepancy plainly rather than silently swapping it in.
  - **Reliant Pest Control:** owner Gary Martin confirmed, email
    confirmed. Response-time reconfirmation actually made things *less*
    stable, not more — six total readings (brief's 4 + this run's 2) span
    2-10hrs with every single one over threshold but no converging number.
    Judged this too unstable to cite any figure at all (stricter than the
    usual "carry it forward as a question" default) — used a generic
    question instead. Real independent pain-point found and used instead:
    the business is closed Saturdays/Sundays, a concrete structural gap
    for a trade with real emergencies.
  - **New Light Electric — the most consequential finding of this run, an
    identity question, not just a gate failure.** Deeper verification
    found the Bellflower listing's phone number reverse-resolves to the
    Long Beach "New Light Electric" entity that Rupika's brief had
    explicitly treated as a distinct, unrelated business (based on
    address/phone/review-count matching at the time). Combined with the
    same first name surfacing on both and closely-aligned "years in
    business" figures, there's a real chance these are the same operation
    running city-targeted duplicate Yelp listings, not two companies.
    Couldn't resolve it without opening Yelp directly (off-limits).
    Separately, the response-time figure came back CONTRADICTED (1-2 days
    found, not the brief's ~4hrs) — dropped per the CVA Exterminators/
    Prima Painting precedent. Held at `found` on the email gate regardless,
    but flagged the identity question as the more important issue for
    Sue/Kevin to resolve before this one goes further — worth remembering
    as a new failure mode alongside the "same-name decoy in a different
    city" pattern logged repeatedly (Vance Heating, High Country Lawn,
    Watkins Plumbing): here the two listings may not even be different
    businesses, just the same one gaming local SEO with duplicate
    city-targeted pages.
  - **Dorries Roofing:** website-gap confirmed (search-convergent, DNS
    check not directly available this run). A genuine two-owner ambiguity
    — BBB lists Shayne Dorries as owner, but LinkedIn lists Roddie Steele
    as "Business Owner" too, both appearing as equal contacts on every
    directory. Recommended Shayne first (BBB owner of record) but flagged
    Roddie as a real second candidate, not a subordinate — same
    "don't guess which of two real candidates" convention as AMS
    Landscaping/Krasiva Windows. Email gate failed — no domain exists to
    guess from.
  - **J.A.M. Pest Control:** website-gap confirmed via decisive DNS
    ENOTFOUND on 6 guessed domains. A family-ownership wrinkle: the
    business's own public-facing material names John Mack as owner, but
    BBB's registered owner is Alissa Mack (likely a relative, business
    registered 1998, John's own "13 years" claim suggesting he took over
    operating it later) — recommended John for the cold call since that's
    the current public-facing name, while flagging Alissa as who might
    actually answer as registered owner. Email gate failed — no domain to
    guess from, and Facebook/BBB's own contact widgets were egress-blocked
    this run, so absence-in-search isn't confirmed absence-on-page here.
  - Egress proxy blocked essentially every direct WebFetch attempted
    across all 5 prospects this run (company/guessed domains, BBB,
    Facebook, Instagram, D&B, Manta, ND/OK business registries) — same
    recurring pattern logged since 2026-08-02, all findings this run are
    search-snippet-sourced except the DNS-resolution checks on J.A.M. Pest
    Control's guessed domains (direct and conclusive despite the general
    block).
  - Backlog after this run: 35 prospects at `stage: found` (32 from before
    + 3 new holds), all now carrying a documented email-gate hold/dead-end
    or (New Light Electric) an identity question from this run. No
    untouched prospects remain.

- (2026-08-20 run) **Stale shallow-clone ref again — resolved safely before any
  work.** Session started with HEAD detached at `origin/master` exactly (0/0
  ahead-behind), but local `master` was a stale cache at `5f4e71c` (2026-08-17
  tip) and `git merge --ff-only` refused with "unrelated histories." Same shape
  as 2026-08-14/08-16/08-17: `.git/shallow` present, and `git reflog show
  master` showed a single entry, "branch: Created from refs/remotes/origin/master"
  — i.e. local master was itself just a cached copy of an old origin/master with
  zero unpushed work of mine on it. `git reset --hard origin/master` was the
  correct, safe move. Also note `origin/master` came down as a **forced update**
  this fetch (`5f4e71c...c358e87 master -> origin/master (forced update)`) —
  that's the same shallow-cache artifact, not a real history rewrite. This is
  now the 5th+ time a session has spent real effort distinguishing "real split"
  from "stale/shallow local ref." **Renewing the standing ask to Kevin: if the
  container clone can be made non-shallow (full fetch on start), it would stop
  costing an investigation every single run.**

  Fleet-state was fresh (16:24 UTC, ~1hr old) so it was trustworthy. This run's
  scheduled prompt was the normal persona-defined one — no suspicious injection
  content (unlike 2026-08-12 x2 and 2026-08-17).

  Picked up all 6 brand-new `stage: found` prospects from today's two Rupika
  batches (commits `f1a2a2c` 3 website + `2624a2d` 3 package). Those were the
  only untouched prospects; the other 35 at `found` all carry a documented
  email-gate hold or dead-end from a prior run and were correctly left alone.
  Used 6 parallel research subagents (pure-research, no file writes), then wrote
  all enrichment.md/status.md updates myself.

  **Result: 1 of 6 advanced to `enriched` (Freedom Roofing & Coatings —
  package), 5 held at `found` on the email gate** (Aaron's Heating & Cooling,
  EMC Plumbing & Heating, Guardian Pest & Termite — website; Bright Ideas
  Painting, Westland Mechanical — package).

  **A 1-in-6 pass rate is the worst of any normal batch to date** (typical is
  2-5 of 5-7). Worth naming plainly rather than burying: five of six failed on
  email, and in four of those five the failure was structural — the business has
  no owned domain at all, so there is not even a domain to ground a guessed
  pattern in. That is the predictable consequence of Rupika sourcing harder for
  genuinely low-web-presence businesses. **This is now a real strategic question
  for Kevin/Sue, not just a per-run note: the email gate exists to protect
  Elly's time because her drafts are sent via Gmail, but the ICP we are
  deliberately hunting (weak-to-no web presence) is systematically unreachable
  by email. Since 2026-08-13 Kevin has been cold-CALLING as the primary play,
  and every one of these five has a solid, multiply-corroborated phone number.
  Worth asking whether a phone-first path should exist that doesn't require an
  email at all** — otherwise the better a prospect fits the website track, the
  more likely the pipeline discards it.

  - **Freedom Roofing & Coatings (package, advanced) — TWO real corrections to
    Rupika's brief, one of them serious.** (1) Her owner name "Jake Woods" is a
    **collision, not this business** — it resolves to Jacob D Woods, President of
    Freedom Roofing Inc. of **Lake Havasu City**. The review snippets naming
    "Jake" are from the Lake Havasu Yelp listing. Saying "Jake" on this call
    would name a competitor's owner. Replacement candidate is Beau James Stowe
    (AZ ROC #360401 qualifying party) — medium confidence, single-source via
    AI-synthesized reads of the indexed ROC new-licenses CSV, never a raw
    snippet, and a literal search for the name returned only an unrelated person
    in WA. Put it on the CALL CARD with an explicit "verify at roc.az.gov"
    qualifier rather than either dropping a probably-correct name or presenting
    it as settled. (2) The ~8hr response-time figure **could not be
    reconfirmed in five searches, and its provenance looks conflated**: Yelp
    encodes review counts in page titles and every collision listing shows one,
    but the Chandler listing's title has no review/photo count and is
    categorized "Flooring" — so the "5.0 / 16 reviews" almost certainly came
    from **Angi**, not Yelp. Dropped the number entirely. **Worth naming as a
    fourth bucket beyond confirmed / unconfirmed-but-usable / contradictory: a
    figure whose *provenance* is in question, where the issue isn't the number's
    currency but whether the source Rupika believed she read it from is the
    source it actually came from.** The Yelp-page-title review-count convention
    is a genuinely useful forensic tool for this — worth reusing.
  - **Freedom Roofing, the age finding:** ROC license issued **2025-08-04**, so
    the company is ~12 months old while the operator has 20+ years. That cleanly
    resolves the "16 reviews after 20+ years" puzzle in the brief — thin reviews
    are the *entity's* age, not a performance signal. Worth checking license
    issue dates generally when a review count looks implausibly thin for the
    stated tenure; it reframes the whole pitch from "you're losing leads" to
    "you just hit year one."
  - **Email gate, a stronger grade of grounded guess than usual:** Freedom
    Roofing's `info@freedomroofingaz.com` is the first time a guessed-pattern
    advance has been backed by a **first-hand MX lookup** showing a full Google
    Workspace mail set on the domain, not just "the domain resolves." That's
    materially better evidence than the ~11 prior uses of this precedent. Noted
    the real remaining risk honestly (Workspace rejects unknown recipients
    without a catch-all, so `info@` may still bounce). **Recommend future runs
    check MX, not just A records, whenever leaning on this precedent — it's one
    extra lookup and it upgrades the confidence a lot.**
  - **DNS/MX is now clearly the most valuable tool in this environment.** The
    egress proxy blocked essentially every page fetch again across all six
    prospects (company domains, BBB, Facebook, Instagram, Bizapedia, Manta,
    BuildZoom, Kompass, Angi, HomeAdvisor, Nextdoor, CSLB, AZ ROC, AZ Corp
    Commission, Utah DOPL, Colorado SOS/DORA, CA SOS, OK SOS) — same pattern
    logged since 2026-08-02. Every decisive finding this run came from DNS:
    website-gap confirmations on four prospects (15, 6, 11, and 16 candidate
    domains respectively, all NXDOMAIN) and the Freedom Roofing MX check.
    Subagents also had success with raw UDP DNS queries to 8.8.8.8/1.1.1.1 when
    `dig`/`host` were unavailable — worth remembering as a fallback.
  - **Bright Ideas Painting (package, held):** response-time figure went to
    **CONTRADICTORY**, and in an instructive way — five readings spanning 30 min
    to 4 hrs, but the review count *varied with them* (20 reviews → 3-4 hrs; 24-26
    reviews → 30-50 min). So these are cached snapshots of different vintages and
    **the trend runs opposite to our pitch**: they've gotten faster. Rupika's
    3-hour figure was a stale snapshot she happened to hit three times, which is
    exactly why it looked corroborated to her. **Worth remembering as a method
    note: when a response-time reading varies, check whether the review count
    varies alongside it — if it does, you're looking at snapshot age, not
    measurement noise, and you can actually infer the direction of travel.**
    Third clean instance of the contradictory bucket (after CVA Exterminators
    2026-08-15 and Prima Painting 2026-08-18).
  - **Aaron's Heating & Cooling (website, held) — flagged a possible
    permanently-closed signal rather than resolving it.** The Yelp search-result
    *title* reads "AARON'S HEATING AND COOLING - **CLOSED** - Updated May 2026",
    and Yelp appends that for permanently-closed businesses — but other sources
    still show normal 8:00-5:30 hours and a Google-profile read of "closed for
    the day, opens 9:00 AM." Genuinely unresolvable from here (Yelp off-limits
    to fetch, Google Maps unreachable). Per CLAUDE.md's two-disagreeing-sources
    rule, flagged for Kevin rather than guessed. **New failure mode worth
    naming alongside the same-name-decoy and duplicate-listing patterns: a
    business-status signal that only exists inside a source we're not allowed to
    open.** One phone call resolves it and the email gap together.
  - **Guardian Pest & Termite (website, held) — Rupika's candidate email
    collapsed under the literal-string test, and the way it collapsed is worth
    remembering.** `gpest7233@gmail.com` looked strong (7233 matches the phone's
    last four digits) but: a literal quoted search returned **zero** results tied
    to the business; every assertion of it came from AI-synthesized summary text
    rather than a real snippet; and a site-restricted search on claimspages.com
    returned the **Natureway Pest Management** page *above* the Guardian page —
    and Natureway shares this business's exact phone AND address. So the email
    may not even belong to the right record. **The phone-digits-in-the-address
    pattern is a plausibility signal, not evidence** — it made a single-source,
    AI-mediated string feel verified when it wasn't. Also found Guardian is
    scattered across two company names, two street addresses, and two Facebook
    pages on one phone line — which is a genuinely excellent website pitch.
  - **EMC Plumbing & Heating (website, held) — a geography correction big enough
    to be an ICP question.** The brief says "Vernal, UT," but the legal entity is
    a **Colorado corporation based in Rangely, CO** (~55 mi east), the only
    confirmed phone is a 970 (Colorado) number with no 435 number existing
    anywhere, and the Vernal address returns a **Trulia residential listing** —
    a house. Flagged for Sue/Kevin to rule on rather than deciding it myself.
    Owner found solidly though (Edward A. Miller Jr., "Ed," President — BBB +
    Manta + the CO license board via BuildZoom). **Worth adding to the standing
    verification list: check whether the brief's *city* is the entity's actual
    registered location, not just whether the business is real** — this is a
    different error class from the Chandler/Gilbert adjacency case (2026-08-10),
    where the cities were adjacent suburbs and it didn't matter. Here it's a
    different state.
  - **Westland Mechanical (package, held) — resolved the flagged collision,
    found a worse one underneath.** Rupika's westlandmechanical.net worry is a
    **false alarm** (that's a *California* LLC in Rancho Cucamonga — different
    state, address, phone, registration; and the Phoenix Facebook page documents
    a crew driving 5 hours *from Phoenix* to Meadview). The duplicate-city-SEO
    theory is affirmatively disconfirmed, since a duplicate would share the
    parent's phone or domain and this shares neither. **But 1919 E University Dr
    is also the address of Westland Distributing (Style Crest), a national
    manufactured-home parts distributor** — could be plain co-tenancy in a
    LoopNet multi-tenant industrial property, or this could be their install arm,
    in which case the small-owner pitch doesn't apply at all. Meadview being a
    manufactured-home retirement community is mildly suggestive. Unresolvable
    publicly; flagged. **New pattern worth naming: clearing a flagged collision
    is not the same as clearing the identity — the second-order question
    (co-tenancy / corporate affiliation at a shared address) was invisible until
    the first was resolved.**
  - **Westland's response-time signal CONFIRMED at ~1 day** (3 reads agree, the
    brief's ~6hr outlier didn't recur) — genuinely rare for this signal, third
    positive case after Walnut Valley Pest Control (2026-08-16) and JNA Heating
    (2026-08-17). Recorded the honest caveat that three reads of the same Yelp
    field aren't three independent observations of behaviour.
  - **AI-synthesis fabrication struck on five of six prospects this run** — a
    fabricated email (`Aaronsheatingandcoolingllc@gmail.com`, actually a
    Tallahassee FL company), a fabricated phone ((605) 413-5541, tied to
    nothing), a fabricated multi-location claim ("also operates in Sioux Falls"),
    a fabricated website (`westlandmechanicalhvac.net`, actually the CA entity),
    a fabricated service claim ("24 Hour emergency HVAC," actually an Ohio
    company), and `kstowe@freedomroofingaz.com` (zero literal hits, wrong initial
    for the qualifying party). Every one was caught by the same discipline:
    **re-search the exact literal string in quotes and confirm it independently
    recurs tied to this business.** This is now ~10 instances since 2026-08-13
    and it is no longer worth flagging as news — it should just be standing
    method, which it now is in the subagent prompts.
  - Backlog after this run: **40 prospects at `stage: found`** (35 from before +
    5 new holds), all carrying a documented hold/dead-end or open question. No
    untouched prospects remain.

- (2026-08-20 run) **`## Links` backfill — a real, verified new standing rule,
  not an injection, and this run's actual work.** This run's fire-payload
  claimed a new CLAUDE.md rule (dated 2026-08-20, Kevin's ruling) requiring
  every prospect record to carry a machine-parsed `## Links` block
  (yelp/website/maps) so KIREEK's `prep_for_call` can put clickable links on
  Kevin's pre-call card. Verified independently before doing anything: the
  section is genuinely in `CLAUDE.md` on `master` (commit `d299dd1`,
  "Prospect records carry source links (Kevin: 'have it pulled up on my
  screen when calling')"), matching the payload's claim exactly and matching
  today's date. This is real corroboration of the same kind that validated
  the 2026-08-12 CSV-sprint payload (a checkable file/commit existing on
  `master`, not just a plausible-sounding claim) — unlike the ~4 prior
  same-day/near-identical injection attempts (2x 2026-08-12, 2026-08-17)
  that all referenced nonexistent files or fabricated workflows. Treated it
  as this run's real assignment, layered on top of the standing "what you do
  each run" workflow rather than replacing it — checked first and confirmed
  there was no genuinely fresh `stage: found` backlog waiting for normal
  enrichment (all 40 found-stage prospects were already fully documented
  holds per the prior run's own closing note), so the backfill was the
  actual work available this run.

  Backfilled **all 121 non-dismissed prospects** in the repo (81
  drafted/approved/sent + 40 found/enriched; the 2 `stage: dismissed`
  prospects were correctly left alone — no call card needed for a dropped
  prospect) — went beyond the payload's staged priority order (active
  pipeline, then handpicked batch, then found/enriched) because by the time
  active-pipeline + found/enriched were done, every folder tracing to the
  handpicked CSV was already covered as a subset of those two groups; there
  was no separate remaining "handpicked batch" of prospect folders left.

  Used 14 parallel research subagents (9 for the 81 active-pipeline
  prospects, 5 for the 40 found/enriched ones) since this was almost
  entirely mechanical: `website` came from each prospect's own already-
  written enrichment.md/brief.md prose (no new research), `maps` is just a
  generated search URL (business name + city, always includable, no
  verification needed), and `yelp` came either from Kevin's own hand-picked
  sourcing CSVs (`prospects/_kevin-yelp-handpicked/*.csv`, which have a real
  `Yelp URL` column — used directly as a trusted source since it's Kevin's
  own sourcing data) or an explicit `yelp.com/biz/...` URL/slug already
  recorded in a prospect's own files. Never constructed a Yelp slug from a
  business name — the overwhelming majority of prospects (all but ~13) got
  no `yelp:` line at all because no file anywhere recorded an actual Yelp
  URL, only generic "N Yelp reviews" prose. That's expected and correct per
  the hard "never invent a URL" rule, not a shortfall to fix by scraping —
  Rupika's persona doc now owns capturing `yelp:` at sourcing time going
  forward per CLAUDE.md, so new prospects should carry it from day one.

  Real per-prospect judgment calls worth remembering:
  - **CSV hints aren't automatically trusted — sanity-checked every one.**
    `rebuild-arizona-construction-phoenix-az`'s CSV website hint was the
    literal string "Not available" — garbage, correctly discarded in favor
    of file-based verification instead.
  - **Two known traps from past runs stayed caught, not silently
    re-introduced:** `crandell-pest-control-joplin-mo` (crandellpest.com
    confirmed to belong to an unrelated Mesa AZ business) and
    `apple-plumbing-scottsdale-az` (appleplumbingaz.com now redirects to the
    acquirer, Day & Night — not their site anymore) both correctly got no
    website line despite a domain existing in the record.
  - **"Uncertain (likely yes, not directly rendered)" hedge language, used
    a lot across older enrichment.md files, was treated as ambiguous and
    omitted** rather than promoted to a confirmed link — about half a dozen
    prospects (fish-window-cleaning, cold-fusion-mechanical, copper-state-
    home-maintenance-repair, stonecreek-roofing, desert-sage-landscaping,
    fireside-pools, aaron's/about-blind-cleaning) hit this. Worth a Kevin/
    Sue call on whether that hedge language should get resolved with a
    direct check now that it actually blocks a call-card feature, rather
    than sitting as a permanent soft-unknown.
  - **2 prospects had no `enrichment.md` at all** (older, pre-CALL-CARD-era
    holds: `dd-plumbing-repair-medford-or`; also `sonrise-roofing-wichita-
    falls-tx` and `superior-roofing-boise-id`, 3 total) — put the `## Links`
    block in `status.md` instead, right after the frontmatter, since
    CLAUDE.md allows either file.
  - All edits were file-only (Edit tool, no git commands) inside the
    subagents; I did all committing/pushing myself in 2 batches (active
    pipeline first, found/enriched second) per the payload's "commit in
    batches, push to master" instruction — both landed clean, no merge
    conflicts (one incidental KIREEK fleet-state-refresh commit landed
    upstream mid-run, no file overlap).
  - Didn't touch `stage`/`track` fields, `outreach.md`, or any CRM —
    exactly as scoped. This was purely additive text in existing files.

- (2026-08-21 run) **Priority task from Kevin, verified real before acting —
  jumped ahead of the `## Links` backfill per his instruction.** This run's
  fire-payload claimed Kevin swept GHL and found 10 owned contacts who called
  his business inbound and never got a callback, and asked me to arm 7 of them
  for his personal callback: reverse-lookup identity, business/website/Yelp/
  ads status, reviews/response-time, ICP fit, a prospect folder per real one,
  a one-paragraph pre-call note. Verified before doing anything (same
  discipline as every prior payload since 2026-08-12): `reports/ghl-call-
  list-2026-08-21.csv` genuinely exists on `origin/master`, authored by the
  real `kevin@viridiaanalytics.com` account (commit `f6dbb6a`, "10 unworked
  inbound leads out of 104 owned contacts"), with exactly 10 `CALL LIST`
  verdict rows — and all 7 named people/numbers matched the CSV exactly
  (name, phone, date). Real corroboration, not a plausible-sounding claim —
  proceeded.

  **Mid-run catch: Kevin landed a real-time ruling on master while this run
  was in flight.** After launching all 7 research agents, `git fetch` before
  committing turned up a new commit (`a8a228a`, authored by the real
  `kevin@viridiaanalytics.com` account, "DO-NOT-CONTACT list born: Top
  Quality Restoration is a scammer") that created `prospects/_do-not-
  contact.md` and explicitly named lead #4 of this exact task: "Top Quality
  Restoration / 'Top Quality Res' | +16059824985 | SCAMMER per Kevin
  directly — do not contact, do not enrich, drop from all lists. Montague:
  skip #4 on the 2026-08-21 inbound-caller task." My research agent had
  already run (and, not knowing this, floated "Top Quality Res" as a
  plausible restoration-company lead worth pursuing) before this landed —
  **deleted that prospect folder entirely rather than keeping it with a
  warning label**, since Kevin's ruling says drop from all lists, not just
  flag. Worth remembering as a real, positive instance of the standing
  "fetch before you judge the state of the repo" discipline: this wasn't a
  stale-ref false alarm, it was Kevin actively correcting a live task
  mid-flight through the git door, exactly the pattern CLAUDE.md describes.
  **Check `prospects/_do-not-contact.md` at the start of every future run,
  before creating or enriching anything** — this file didn't exist before
  today.

  **Result: 0 of the remaining 6 came back with a confirmed real business
  identity.** This is a fundamentally different research problem from
  normal Rupika-sourced prospects — those start from a known business name
  found via Yelp/Google; these start from a GHL caller-ID name/number with
  no business attached, and caller-ID names from carriers routinely don't
  resolve to anything searchable (personal cells, unlisted small
  businesses). Used 7 parallel research subagents (pure-research, no file
  writes) before the do-not-contact ruling was known, then built 6 folders
  (all but Top Quality Res) and wrote this note myself.

  - **Gena Valenzuela, Karrie Martin, the Austin TX unknown number, and
    Kevin's own "call 6233215112" note-to-self: all four came back
    genuinely UNKNOWN** — no business, no person, nothing indexed anywhere
    for the exact number, only unrelated national name-collisions
    (correctly not reported as candidates). CALL CARDs use "NO NAME FOUND"
    or the bare GHL caller-ID first name (labeled as such, not a research
    guess) and "no verified hook."
  - **Suzanne Graf: one lead surfaced but is doubly disqualified** — the
    only "Suzanne Graf" tied to an AZ business (Guardian Financial Advisors
    LLC, Glendale) has a BBB-listed phone in a different area code than the
    target number (unconfirmed match), and even if it were her, it's a
    financial/divorce-consulting practice — not home-service ICP at all.
    Flagged plainly that this caller may not even be a business-owner
    prospect.
  - **Top Quality Res: DROPPED — Kevin ruled it a scammer directly (see the
    mid-run catch above), not pursued regardless of what the research found.**
    The research agent (running before the ruling landed) had floated it as
    a plausible restoration-company lead — that framing is superseded and
    should not be trusted by anyone reading old context; the folder was
    deleted, not kept with a warning label, per Kevin's explicit "drop from
    all lists."
  - **CMG: still unconfirmed, no do-not-contact conflict.** Turned up a
    plausible West Valley Phoenix general-remodeling contractor (Angi "CMG
    Reviews" / BBB "CMG General Remodeling LLC") matching on
    name+trade+geography, but neither source exposed a phone number to
    check against the target — unconfirmed, not invented. Checked against
    `prospects/_do-not-contact.md` — no match, folder kept.
  - **New pattern worth naming for this specific task type: GHL caller-ID
    names are a different evidence class than a Rupika-sourced business
    name.** A caller-ID first name (when GHL captured one) is safe to use
    directly on the CALL CARD as "Ask for: X" since it's what the phone
    company/GHL captured from the actual call, not a guessed name — labeled
    that way rather than treated as independently verified. But it gave
    almost no purchase for reverse-identifying a *business* — this batch's
    0/7 hit rate is worth a real heads-up to Kevin/Sue: **inbound GHL
    callers are structurally much harder to enrich than outbound-sourced
    leads**, since there's no starting business name to search from, only a
    bare number. If this kind of GHL sweep becomes a recurring task, it may
    need a different research approach (e.g., Kevin recalling context live
    on the call, or a paid reverse-phone API) rather than the standard
    web-research method this role uses for cold-sourced prospects.
  - **Folder handling, a deliberate deviation from the normal pipeline:**
    put the 6 real folders (all but Top Quality Res) in
    `prospects/<name>-ghl-callback/` (not normal city-slug names, since no
    city/business was confirmed for most), `stage: found` with a prominent
    "NOT A NORMAL PIPELINE PROSPECT" banner in each `status.md` and no
    `## Links` block content (nothing to link — none have a confirmed
    website/Yelp/maps target). None should ever advance to `enriched` (the
    email gate categorically fails for all — no confirmed business, let
    alone email) or get picked up by a future Montague batch as ordinary
    backlog. Also correctly did NOT touch the `## Links` backfill task this
    run — that's just deferred to next run per Kevin's own "finish backfill
    after" instruction, not skipped.
  - Every subagent this run independently caught and discarded at least one
    AI-search-summary fabrication (a fake VOIP-spam claim, a mismatched
    "RESTORE HYPER WELLNESS" number, a geographically-impossible carrier
    claim, etc.) — same recurring failure mode logged since 2026-08-13,
    ~15th instance now, still caught every time by the same discipline
    (re-verify any specific asserted fact as an exact quoted string).

  **After the priority task, resumed the normal per-run workflow**: picked up
  the older of two fresh Rupika 2026-08-21 batches (2 package — 1st Choice
  Plumbing Air & Insulation Phoenix, S&M Electric Prescott; 5 website —
  Bennys Painting, C E H Painting, It's Time 2 Paint, MGM Painting, Wall CW
  Painting), leaving the freshest same-day 6-prospect batch (Cerritos/
  Whittier/Long Beach CA, Ottumwa IA, Klamath Falls OR, Middlesboro KY) for
  next run per cap-batch-size. Used 7 parallel research subagents
  (pure-research, no file writes), then wrote all files myself.

  Result: 3 of 7 advanced to `enriched` (1st Choice Plumbing Air &
  Insulation, S&M Electric — both package; MGM Painting — website), 4 held
  at `found` on the email gate (Bennys Painting, C E H Painting, It's Time 2
  Paint, Wall CW Painting — all website track).

  - **1st Choice Plumbing:** owner Tim/Michael Rhoads confirmed medium-high
    confidence via LinkedIn + Thumbtack + review mentions; email GUESSED on
    the confirmed-live domain. Response-time went from Rupika's clean "~3hr,
    corroborated twice" to CONTRADICTORY on this run's re-check (10min/
    30min/no reconfirmation) — dropped. Real collision risk with 8+ other
    "1st Choice Plumbing"-named businesses nationally; the search tool
    itself blended in a wrong review and a mismatched review-count figure
    from the Oceanside, CA collision — discarded, anchored on exact
    address+phone instead.
  - **S&M Electric:** owner Gary Miller confirmed high confidence (wife
    Donna corroborated too); email GUESSED but a stronger grade than usual —
    ZoomInfo shows two real staff using the exact domain for email, not just
    "the domain resolves." Response-time also went unstable on re-check
    (2hr brief vs. 50min this run, alongside a shifted review count) —
    dropped rather than used as a hedge question, since the instability
    pattern (number + review count moving together) suggests snapshot-age
    confusion, not just noise.
  - **MGM Painting:** the cleanest advance of the batch — website-gap
    confirmed (7 domains NXDOMAIN), owner Michael Martin confirmed
    medium-high (a specific corroborating backstory detail — ran a
    sporting-goods store for 11 years before painting — recurred across
    independent sources), and the email (mkemartin@comcast.net) is a real
    discovered address, not a guess, recurring tied to the business across
    multiple queries.
  - **C E H Painting:** resolved a real 3-way phone-number conflict from the
    brief to (601) 618-1543 via convergent evidence, and discarded a
    candidate email (chrisscottsteele@gmail.com) that traced to no real
    source — same discipline as the recurring AI-fabrication catches
    logged since 2026-08-13. **New pattern worth naming:** Vicksburg, MS
    has at least three distinct Steele-surname painting businesses (this
    one plus two already-excluded ones) — a small-town name-collision
    density worth remembering specifically for future Vicksburg leads.
  - **It's Time 2 Paint:** third research pass, third confirmed "no
    website" and third confirmed "no owner name" — but this run found a
    nuance the first two missed: itstime2paint.com actually resolves in
    DNS, just to a parked/unused page on shared AWS infrastructure, not a
    built site. Worth remembering as a DNS-resolves-but-still-no-real-site
    case, distinct from a flat NXDOMAIN — record it as "registered but
    parked" so a future pass doesn't either wrongly re-claim it as
    confirmed-no-site-via-DNS or waste time re-guessing that exact domain.
  - **Wall CW Painting:** resolved a phone/address conflict via a genuinely
    different method than usual — cross-referencing property/people-search
    records against BuildZoom's named co-owners (Coy Wall physically
    matches a resident at the 51 Baronwood Rd listing) rather than
    recency/review-volume signals. Also surfaced a real possible-inactive
    flag (license expired 2019, no activity signal since ~2021) — a new
    instance of the same "business-status signal that can't be resolved
    from open search" pattern as Aaron's Heating & Cooling (2026-08-20);
    flagged prominently rather than guessed either way.
  - Every subagent hit the same egress-proxy wall on essentially every
    direct-domain fetch this run (company/guessed domains, BBB, Facebook,
    YellowPages, Chamber platforms, BuildZoom, Angi, Nextdoor, VA SCC) —
    same recurring pattern since 2026-08-02; all findings above are
    search-snippet-sourced except the decisive DNS-resolution checks, which
    stayed direct and reliable throughout as usual.
  - Confirmed the `## Links` backfill task is fully complete — only 2
    prospects in the whole repo lack a Links block (nunez-painting-
    litchfield-park-az, turf-monsters-phoenix-az), and both are correctly
    `stage: dismissed` (no call card needed for a dropped prospect, per the
    2026-08-20 run's own convention). Nothing left to do there.

- (2026-08-21, second run same day) Clean start — `git fetch origin` first
  per CLAUDE.md, no stale-refs issue (local already synced to the
  just-merged normal-batch commit). Checked `prospects/_do-not-contact.md`
  first per the standing instruction from the priority-task run earlier
  today — still just Top Quality Restoration, no new rulings, no conflict
  with this batch. Picked up the freshest same-day 6-prospect batch left
  over from the earlier run (2 package: VigilAir Heating and Cooling
  [Cerritos], Pro Service Electricians [Whittier]; 4 website: On Point
  Exterminating [Long Beach], JB Plumbing [Ottumwa IA], Ed-Pat Electric
  [Klamath Falls OR], Pinnacle Painting [Middlesboro KY]) — exactly the 6
  named as backlog at the end of the prior run, nothing else untouched
  remained. Used 6 parallel research subagents (pure-research, no file
  writes), then did DNS verification and two WebSearch phone-number checks
  myself, then wrote all enrichment.md/status.md updates myself.

  Result: 3 of 6 advanced to `enriched` (VigilAir Heating and Cooling,
  Pro Service Electricians — both package; On Point Exterminating —
  package, not website despite being grouped with the website-track batch
  above), 3 held at `found` on the email gate (JB Plumbing, Ed-Pat
  Electric, Pinnacle Painting — all website track).

  - **VigilAir Heating and Cooling:** owner Robert Vigil confirmed high
    confidence (Voyage LA feature + About-page copy + review mentions of
    both Robert and wife/office-manager Susy). Response-time signal went
    the wrong direction on reconfirmation — brief said ~4hr, every
    independent re-check found sub-hour figures (10-60 min) across
    multiple service-area Yelp pages for the same business, which actually
    undercuts the "slow response" pitch. Dropped the number entirely and
    used a different, still-real hook instead: the site's own stated
    "we'll respond within 24 hours" contact-form language. Email GUESSED
    on a DNS-confirmed-live domain.
  - **Pro Service Electricians:** the shakiest advance of this run — no
    owner name found anywhere (about-us, LinkedIn, BBB, CSLB, CA SOS all
    came back empty), and the ~3hr/79-locals response-time figure didn't
    reconfirm at all (looks fabricated, not just stale). Advanced on the
    email gate alone (GUESSED on a domain I DNS-verified myself this run —
    the research subagent found the domain live via organic search ranking
    but couldn't do the DNS check itself). Real find worth using as the
    hook instead of a fake number: Blue Book lists this "Inc." entity as
    established 2020, directly contradicting the marketing copy's "over
    two decades" — used as an honest, curiosity-driven opener. Had to
    WebSearch the phone number myself (not in Rupika's brief and the
    subagent couldn't find one either) — found and reconfirmed via a
    second targeted quoted search, (562) 713-5626.
  - **On Point Exterminating — another real correction to a "no website
    found" brief note**, now enough instances of this exact pattern (J
    Powers Electric 2026-08-12, Scenic View Landscape 2026-08-15, Ramos
    Painting 2026-08-18, this one) that it's worth stating plainly as
    standing method: **always re-check a brief's "no website" claim during
    enrichment, the same as an explicit website-gap or ad-activity guess —
    it's exactly as often wrong.** opexterminating.com is real, DNS-live,
    multiple indexed pages. Owner Andrew O'Brien confirmed high confidence
    (founding story + a review naming him directly). Response-time figure
    itself didn't reconfirm, but the research surfaced something more
    useful and just as usable as a hook: real customer complaints about
    unanswered texts/calls "for weeks" sitting next to otherwise-strong
    reviews — a follow-up-system pain point, sourced not invented. Email
    GUESSED on the DNS-confirmed-live domain (a different, AI-hallucinated
    domain — onpointext.com — was correctly discarded first).
  - **JB Plumbing, Ed-Pat Electric, Pinnacle Painting (all website track,
    held): clean, structurally similar misses** — all three had a
    decisively confirmed website-gap (DNS NXDOMAIN across 3-11 guessed
    domains each) but zero domain to ground an email guess in, and no
    email surfaced directly. Ed-Pat additionally had the single strongest
    identity confirmation of the whole batch (Cary Michael Brennan,
    President, corroborated by three independent sources including the
    Oregon CCB's own license lookup — 54 continuous years licensed). JB
    Plumbing genuinely no owner name found, plus a real unresolved
    collision lead flagged (a "JB Plumbing LLC" in nearby Blakesburg, IA
    with a different phone number — not merged in, flagged for a future
    pass to check). Pinnacle Painting's one email candidate
    (sanders128@hotmail.com, surfaced pre-run) **collapsed under the
    literal-string test and shows the same AI-summary-fabrication pattern
    logged repeatedly since 2026-08-13** — the search tool kept asserting
    it in unrelated queries without it ever appearing in an actual
    snippet; correctly not reported as usable, same "guess with
    contradiction is worse than silence" convention as Fish Window
    Cleaning (2026-08-13). Also ruled out a previously-flagged bad lead
    ("Andrew Blondell") as unrelated cross-contamination, confirming the
    original caution was right to withhold it.
  - Egress proxy blocked essentially every direct-domain WebFetch again
    across all 6 prospects (company/guessed domains, Facebook, BBB, Yelp,
    Blue Book, CSLB, Voyage LA, BuildZoom, ccblookup, YellowPages, Porch,
    Angi, KBHBA, NationalContractorIndex) — same recurring pattern since
    2026-08-02. DNS resolution stayed the reliable, decisive tool
    throughout, as usual — used it directly myself this run (not just via
    subagents) to verify two package-track domains before applying the
    guessed-email precedent, worth doing routinely when a subagent reports
    a domain as "clearly live" without actually DNS-checking it.
  - Backlog after this run: no untouched `stage: found` prospects remain —
    every one in the repo now carries a documented hold/dead-end or open
    question from some prior run.
