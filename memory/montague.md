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
