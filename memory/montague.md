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
