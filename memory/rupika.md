# Rupika — memory

## Criteria that worked well

- (website track) Yelp and YellowPages block direct fetches (403 on both,
  every time tried 2026-08-02) — don't bother fetching them directly.
  Instead: WebSearch scoped to `allowed_domains: ["facebook.com"]` for
  "[vertical] small business Facebook page [city]" surfaces real named
  businesses whose only presence is Facebook, which is exactly the
  website-track signal. Follow up with a plain named search
  ("[Business Name] [city] website") to confirm no domain turns up
  elsewhere (directories, reviews, etc.) before tagging it.
- Smaller/mid-size markets (tested: Enid OK, Bangor ME, Amarillo TX,
  Rapid City SD) turned up real no-website candidates faster than large
  metros would likely be — worth defaulting to smaller cities within the
  ICP verticals when picking a location for a run, even though the
  standing criteria is nationwide.
- A personal-looking email address (firstnamelastname@gmail/hotmail/etc.)
  is a real, usable signal for a likely owner name when nothing else
  turns one up — worth having Montague flag it as medium-confidence
  rather than skip it entirely. Worked for Chiliski's Painting
  (rosendovargas@hotmail.com -> likely "Rosendo").

- (package track) No website-gap filter needed, so this track can pull
  from bigger/more visible search results directly ("[vertical] company
  [city] family owned" / "locally owned") rather than needing the
  Facebook-only trick — those results reliably surface real SMB
  owner-operated shops (e.g. named-after-owner businesses, BBB profiles
  naming the owner) fast.
- (ads track, first run 2026-08-04) Yelp still blocks direct fetch
  (confirmed 403 again on a spot-check). `site:yelp.com [vertical]
  reviews` WebSearch surfaces individual business listing pages with
  review counts right in the search result title/snippet — usable as
  the "meaningful review count" signal. No "Sponsored" label showing in
  a listing's search-result title/snippet is the best available signal
  for "no visible ad activity" from search alone — genuinely can't
  confirm the sponsored badge without loading the live page, so this
  stays a Rupika-level guess same as the website track's convention;
  Montague needs a real way to check the live page during enrichment.
  Un-scoped `site:yelp.com` search results skewed toward big metros
  (NYC, Oakland, SF) rather than small markets — didn't scope by city
  this first run, worth trying a city-scoped version next time to see if
  it surfaces better SMB fits.
- `_template/brief.md` didn't have an "Ad activity status" field yet
  when the ads track was added 2026-08-04 — added it this run so future
  ads-track prospects have it by default.

- (run 2026-08-05) The "yelp advertisers in [market]" technique produces
  aggregated/multi-business search summaries more often than a single
  attributable response-time claim when scoped to a whole vertical+market
  (tried restoration/Spokane WA, pest control/Bozeman+Sioux
  Falls+Cheyenne) — didn't yield a usable single-business signal this
  run. Falling back to the family-owned/locally-owned search worked
  cleanly instead (Schmidtlein Electric, Topeka KS; SonRise Roofing,
  Wichita Falls TX) — both had real websites, which is fine, package
  track doesn't need a website gap.
- (website track) Confirmed again this run: plenty of Facebook-scoped
  hits turn out to have a real site once you do the named follow-up
  search (struck out on Cowboy Plumbing, Eagar Plumbing, Anderson's Pest
  Control, Uriar Turner Painting, Mosquito Solutions, Bob Eckert Painting
  — all had working dedicated domains). Budget for roughly 2 misses per
  hit when using this technique; the named follow-up search is doing real
  work, don't skip it. Hits this run: D&D Plumbing & Repair (Medford OR),
  Johnston Heating & Air / "Johnston Air" (Hot Springs Village AR),
  Peña's Landscaping (Pocatello ID).
- (website track) New small/mid markets that worked or are worth
  revisiting: Medford OR, Hot Springs Village AR, Pocatello ID (all
  yielded a real no-website hit this run). Already-used markets to avoid
  repeating: Enid OK, Bangor ME, Amarillo TX, Rapid City SD, Cedar Rapids
  IA, Duluth MN, Chattanooga TN, Boise ID, San Luis Obispo CA, Bellevue
  WA, Sioux Falls SD, Bismarck ND (checked this run, no-website hit
  didn't pan out there), Topeka KS, Wichita Falls TX, Spokane WA.

- (package/priority track, run 2026-08-10) First run of the Phoenix + L.A.
  "actual clients" priority hunt using the Yelp-advertisers response-time
  technique scoped to specific suburbs (not the whole metro). Whole-metro
  queries ("HVAC yelp advertisers in Phoenix") mostly return aggregated
  top-10-listing summaries dominated by fast (10-20 min) responders — not
  useful. What worked: scope to a specific suburb + vertical + the exact
  Yelp phrase `"responds in about" hours "locals recently requested a
  quote"` — this reliably surfaces individual businesses with slow (2hr+)
  response times despite real demand (the money signal). Budget roughly
  8-10 suburb/vertical combos to land 2 usable, nameable hits — most
  combos return only fast responders. Hits this run: Exterior Specialists
  (painting, Pasadena CA, ~1 day response despite 60 quote requests),
  AZ Grand Roofing and Painting (Gilbert AZ, ~2hr response, 33 reviews).
  Suburbs tried without a usable hit this run: Phoenix/Tempe/Chandler/
  Mesa/Surprise/Goodyear (HVAC, electrical, pest control, roofing),
  Los Angeles/Long Beach/Torrance/Redondo Beach/Whittier/Norwalk/Glendale
  CA/Pomona (plumbing, electrical, pest control) — several had a strong
  signal (e.g. a Glendale CA plumber at 5hrs/182 quote requests, a
  Chandler AZ roofer at 5hrs/150 requests) but the business name never
  resolved from search snippets alone — worth a repeat attempt with
  different phrasing next time rather than writing off those combos.
  Caution: WebSearch's summarized response-time figures aren't always
  consistent between two searches for the same business (Gomez Stone,
  Century City countertop repair, showed "12 hours" in one search and
  "20 min / 100% response rate" in a follow-up) — treat every figure as
  Rupika's usual unverified guess, don't over-trust the specific number,
  and prefer businesses independently corroborated (name, owner, years in
  business) across 2+ searches the way Exterior Specialists and AZ Grand
  were.
  Complaint-language searches ("hard to get ahold of", "never called
  back") surfaced businesses with real complaints but real risk too — one
  hit (Arizona Certified Remodeling, Glendale AZ) turned out to have a
  revoked contractor's license on follow-up check. Worth a quick "license
  revoked" / "out of business" sanity check before queuing any prospect
  sourced from a negative-review search, not just the response-time
  technique.
- (website track, run 2026-08-10) Bozeman MT, Cheyenne WY, and Missoula MT
  ran unusually cold this run — 7 named candidates checked (Harvey's
  Plumbing, Bob's Plumbing & Drain, Ranger Plumbing, Rocky Mountain
  Electric, Big Bird Landscaping, Q Lawn, CHP Paint, Custom West Pest
  Control, Bugmaster Pest Control) all turned out to have real dedicated
  websites — well over the usual ~2-misses-per-hit budget. Two hits
  eventually: Family Painting Service's (Cheyenne WY — only a free
  Ueniweb-builder subdomain page, no real domain) and A+ Garage Doors LLC
  (Idaho Falls, ID — confirmed no site at all, Facebook + Gmail only).
  Not marking these markets dead — just noting the miss rate was high, so
  don't over-invest another full pass there next time before trying fresh
  markets first.

- (package/priority track, run 2026-08-10 #2, fired by Kevin's scheduled
  "Phoenix + L.A. home-service owners, HVAC/plumbing/roofing/landscaping/
  painting/remodel" batch request) Tried ~19 suburb/vertical combos this
  run, mostly misses. What worked again: the exact Yelp phrase technique,
  but this time following up an *unnamed* strong signal (rating + review
  count + response time + quote-request volume, no business name in the
  first search) with a second, more specific WebSearch quoting those exact
  numbers back (e.g. `HVAC Glendale AZ yelp "5 hrs" response "4.9" 139
  reviews`) reliably resolved the business name where the first search
  alone didn't — worth doing as standard practice now, not just a
  fallback, since aggregated Yelp summaries very often don't name the
  business in the first pass. Hits this run: Boldt HVAC & Repair
  (Glendale AZ, ~5hr response/214 quote requests/4.9 stars/139 reviews —
  but flagged AZROC license shows inactive on BuildZoom, Montague should
  recheck), Rafael and Iris Roofing (office in Valley Village but surfaced
  under a Torrance CA search, ~8hr response/143 quote requests, BBB A+,
  active CA license), Radiant Remodeling Pros (Avondale AZ, ~1 day
  response but only 2 Yelp reviews found and the day-response figure
  didn't reconfirm on a follow-up search — queued as the weakest of the
  three, flagged for Montague to double check before leaning on it).
  Straight response-time-technique misses this run (fast responders only,
  no usable slow-response named hit): plumbing (Scottsdale, Mesa, Surprise,
  Pomona), landscaping (Peoria, Chandler, Gilbert, Long Beach), painting
  (Glendale AZ, Tempe, Pomona), remodeling (Long Beach), roofing (Anaheim —
  see below, Downey). One near-miss required dropping: an aggregated
  "Diaz Top Roofing Services, ~8hr response" figure from an Anaheim search
  turned out, on the named follow-up, to possibly be a *different* company
  than the well-reviewed "Top Roofing Services" at the same city — couldn't
  resolve the identity confusion cleanly, dropped rather than risk queuing
  the wrong business. Complaint-language searches ("never called back",
  "no call back") mostly surfaced either no results or businesses with
  quality/legitimacy red flags (e.g. Reimagine Roofing, Big Buckle Roofing,
  Icon Roofing all had "does not return calls" complaints paired with
  other bad-actor signs like no-shows or unresolved warranty disputes) —
  same caution as last run's revoked-license find, this sourcing angle
  skews toward genuinely bad contractors more than good-but-overwhelmed
  ones, so treat it as lower-priority than the Yelp response-time
  technique for this specific track.

- (package/priority track, run 2026-08-12) Ran research in parallel via
  three sub-agents this run (one per track) rather than sequentially — cut
  wall-clock significantly, worth doing again for future scheduled runs.
  Package track: tried ~30 fresh suburb/vertical combos across Phoenix and
  LA metros this run (Queen Creek, Buckeye, Fountain Hills, Apache
  Junction, Peoria AZ / El Monte, Anaheim, Inglewood, Torrance, Whittier,
  Santa Monica, Fullerton, Van Nuys, Burbank), mostly misses (fast <1hr
  responders or unresolved business names) — 3 hits landed: Partnership
  Painting (Pasadena CA painting, ~9hr response, 73 Yelp/271 Google
  reviews), Rebuild Arizona Construction (Phoenix AZ remodeling/GC, ~8hr-
  1day response, drifted between searches but pattern held, flagged a
  possible naming collision with "Rebuild Construction LLC" in Surprise AZ
  for Montague to check), J Powers Electric (Downey/LA CA electrical,
  ~11hr response, single-sourced figure, needs live re-check). Two
  specific misses worth noting: a "roofing" hit in Whittier turned out to
  be a supply company not a contractor (wrong ICP, watch for this —
  supply/wholesale businesses can surface under contractor-style Yelp
  searches), and a Van Nuys landscaping candidate (7hr/4.9star/210
  reviews) never resolved to one consistent business name across searches
  — worth a repeat attempt with a more targeted follow-up query rather
  than writing it off.
- (website track, run 2026-08-12) Billings MT and Dubuque IA both hit on
  first pass — 2 hits / 4 candidates checked, better than the usual
  ~1:2-3 ratio. Hits: H&J Landscaping LLC (Billings MT, Facebook +
  directories only, address inconsistent across listings — flagged for
  Montague), Casey Moriarty Pest Control (Dubuque IA, Facebook only,
  owner name confirmed via LinkedIn — a second usable owner-name source
  beyond the personal-email trick). Misses: Frickle's Lawn and Landscape
  (Billings, real site), McGraw Pest Control (Dubuque, real site since
  1975). Worth revisiting Billings MT and Dubuque IA again — didn't feel
  exhausted after just 2 candidates each.
- (ads track, run 2026-08-12) City-scoped `site:yelp.com [vertical]
  reviews [city]` continues to work well — Boise ID and Chattanooga TN
  (Hixson) both yielded usable hits this run: Same Day Electric (Boise,
  57 Yelp reviews, established 2000, but flagged as a high-volume
  multi-platform operator — 2,400+ reviews on Birdeye — worth Montague
  checking whether they already run paid marketing elsewhere despite no
  Yelp sponsored badge) and Access Garage Doors (Hixson TN/Chattanooga
  metro, 20 Yelp reviews, strong cross-platform ratings). Near-misses
  under the 20-review threshold: Beacon Plumbing (Boise, 12), Reliable
  Heating & Air Conditioning (Chattanooga, 19) — close enough to
  reconsider if the threshold gets relaxed. Backup candidate banked but
  not used: Boise Pest Control (33 reviews, no sponsored badge) — good
  fallback if either primary above gets disqualified during enrichment.
  Some listings (Chattanooga landscaping, Spokane roofing) don't surface
  review counts directly in the search snippet/title — needs a follow-up
  query to pin down, can't confirm "meaningful presence" from the first
  search alone in those cases.

- (run 2026-08-13) Session started on a detached HEAD unrelated to
  `origin/master` (a leftover from the multi-day history-desync Montague
  flagged the same day — see `memory/montague.md`'s 2026-08-13 entry on
  the recovery branch). By the time I checked, `origin/master` had
  already been fast-forwarded to the recovered tip (`f00c023`) — my
  local `master`/`origin/master` refs were just stale from container
  startup, fixed with `git fetch` + `git checkout -B master
  origin/master`. No data lost, nothing to flag to Kevin this run;
  noting the fix here in case another session hits the same stale-ref
  symptom.
- (package/priority track, run 2026-08-13) Ran the three tracks as
  parallel sub-agents again (continues working well). Package track
  tried ~26 fresh suburb/vertical combos (Gilbert/Cave Creek/Litchfield
  Park/Casa Grande/Maricopa AZ; Culver City/Hawthorne/Compton/Lakewood/El
  Segundo/Downey/West Covina/Rancho Cucamonga CA — see full miss list
  below) — 3 hits, none as clean as a first-pass slam dunk this time:
  Coleman Painting (Gilbert AZ, ~3hr response confirmed twice, 17yrs/
  5.0star/100 reviews, but AZROC license status conflicting
  active-vs-inactive across sources — reads like a stale directory
  record, not a revoked-for-cause case), Lansford Roofing (Pasadena CA,
  established 1989, identity rock-solid across searches but the exact
  response-time figure drifted 3hrs-5hrs-3days across 4 reads, all still
  over the 1hr threshold), Liquid Oak Painting (Hermosa Beach CA,
  founded 1999, identity solid but the specific response-time/quote-
  volume figure from the first search couldn't be reproduced in two
  follow-ups — queued as this run's weakest find, flagged for Montague
  to re-verify directly on Yelp before relying on it). Take-away: the
  "corroborate the exact number across 2+ searches" caution from
  2026-08-10 keeps mattering — identity (address/founding year/rating)
  tends to hold steady even when the specific response-time figure
  itself doesn't; treat number drift as a reason to flag, not
  automatically drop, as long as identity stays solid.
  Suburb/vertical combos tried this run without a usable hit (don't
  re-try as-is): HVAC Scottsdale AZ, electrical Gilbert AZ (resolved to
  a solar company, not a fit), roofing Cave Creek AZ, pest control
  Litchfield Park AZ, garage door Casa Grande AZ, restoration Maricopa
  AZ, remodeling Gilbert AZ, restoration Glendora AZ, remodeling Cave
  Creek AZ (had a 3hr/87-request candidate but name never resolved),
  plumber Litchfield Park AZ, electrician Casa Grande AZ, plumber Casa
  Grande AZ, HVAC Maricopa AZ (a 4hr/1939-established candidate also
  never resolved a name); roofing Pasadena CA (fast responders alongside
  the Lansford hit), HVAC Culver City CA, plumber Hawthorne CA, pest
  control Compton CA, garage door Lakewood CA, electrician El Segundo
  CA, landscaping Downey CA, remodeling West Covina CA (a "contractors
  don't respond" review theme surfaced but no resolvable business name),
  HVAC Rancho Cucamonga CA, pest control West Covina CA.
- (website track, run 2026-08-13) Joplin MO, Bemidji MN, Grand Junction
  CO, and a second pass at Dubuque IA and Billings MT — 3 hits from
  roughly the usual ~2-miss-per-hit rate: Crandell Pest Control (Joplin
  MO, Facebook-only; a same-named domain exists but confirmed via
  address/service-area check to be an unrelated business in Mesa AZ —
  worth remembering this "same name, different city, not a match"
  pattern can recur), Noska Lawncare (Bemidji MN, Facebook-only, several
  same-city competitors confirmed to have real sites so the gap is
  specific not market-wide), The 3 Roofers Construction (Dubuque IA —
  a *dead/suspended domain* case, not pure no-website: they own
  the3roofersconstructionllc.com but it now shows a Hostinger
  suspension page, BBB/Yelp/BuildZoom all route to Facebook instead —
  worth treating "owns a domain that's actually dead" as its own
  no-website-track subtype going forward, same as last run's
  free-builder-subdomain case). Grand Junction CO and Billings MT
  (electrical) both ran cold this pass (all real sites) — Grand Junction
  untried categories remain (Altitude/3C/SunShine Painting) but the
  pattern there looks like a low-yield market; Joplin MO pest control has
  one more untried name (Bug-A-Way/Logan's Termite) and Bemidji MN
  landscaping has untried names left (Aurora Landscapes, Finishing
  Touch, Northwoods Landscape) if either market gets revisited.
- (ads track, run 2026-08-13) Tried 13 city/vertical combos (Tulsa OK,
  Fort Wayne IN, Greenville SC, Des Moines IA, Shreveport LA, Fort
  Collins CO, Wichita KS, Huntsville AL, Lexington KY, Savannah GA,
  Baton Rouge LA, Colorado Springs CO, Amarillo TX) — wider net than
  usual since several were quick dead ends. 2 queued: The Paint Doctor
  (Colorado Springs CO, 29 reviews, independent, 18+ yrs, cleanest hit
  of the run) and Mr. Electric of Wichita (Bel Aire KS, 24 reviews, but
  it's a Neighborly-network franchise — flagged that franchise locations
  can carry corporate-level paid marketing invisible to a plain Yelp
  snippet check, worth weighing whether franchises are a good ads-track
  fit going forward given this risk). Dropped a third candidate (Duvall
  Plumbing, Tulsa OK, 22 reviews) rather than queue it — search summaries
  surfaced a conflicting/implausible "1,900+ reviews" claim elsewhere for
  the same name, an identity/data-quality red flag similar to last run's
  Anaheim roofing name-collision case, not worth the risk of queuing a
  possibly-misidentified business. Lexington KY's `site:yelp.com`
  painting query got swamped by paint-and-sip/pottery studios instead of
  house painters — worth adding "house painting" or "painting
  contractors" explicitly to the query if that city gets revisited.
  Near-miss backups banked under the 20-review threshold: Priority
  Electrical (Greenville SC, 15 reviews, 25yr master electrician) and
  Paul's Termite and Pest Control (Tallahassee FL, 15 reviews,
  established 1971) — good fallbacks if the threshold gets relaxed.

- (run 2026-08-14) Started on a detached HEAD again with a "forced update" on
  fetch — same stale-ref symptom as 2026-08-13, not an actual history problem.
  `git fetch` + `git checkout -B master origin/master` confirmed local master
  already matched origin's tip (`c67f5db`), nothing lost. Ran all three
  tracks as parallel sub-agents again (continues working well, ~6-9 min
  wall-clock per agent this run).
- (package/priority track, run 2026-08-14) 3 hits, all corroborated with 2+
  pain signals each: CVA Exterminators (Santa Clarita CA pest control, ~9hr
  Yelp response despite 4.9★/145 reviews + no self-serve booking for new
  leads, 28yr-established — clean "too busy for new leads" narrative), Fifth
  Element Landscape (Pasadena CA landscaping, ~2day response + a "Book
  Online" page that's non-functional — broken booking may read worse than no
  booking page), Scenic View Landscape (Glendora CA landscaping, ~9hr
  response + no booking found at all, no website found either — flagged for
  Montague's no-website-subset upsell tag). Both landscaping hits sourced
  from the same Diamond Bar CA search — Yelp's radius-listing behavior
  surfaces businesses from neighboring cities under one search, worth
  remembering when logging "tried" markets (the market searched isn't always
  the business's actual home city). Dropped rather than shipped: Gambit
  Roofing (Encino/LA) — response-time figure drifted 9hr/8hr/50min across
  three searches including one sub-1hr reading that directly contradicts the
  pain signal, identity was solid but the number wasn't trustworthy enough;
  Empowered Electrical Solutions (Sun City/Surprise AZ) — similar drift,
  3hr claim resolved to 10min on direct check; a Paradise Valley AZ
  remodeling signal ("1 day" response) never resolved to one company name
  across 3 candidates. Many suburb/vertical combos tried empty this run
  (Sun City/Sun Lakes/Fountain Hills/Ahwatukee/Laveen/San Tan Valley AZ;
  Arcadia/Alhambra/Cerritos/Santa Clarita/Palmdale/Montebello/Bellflower/
  Lancaster CA, various verticals) — see full list in the 2026-08-14 package
  research agent transcript if repeating this ground. Santa Clarita
  restoration resolved to Paul Davis, a national franchise — poor ICP fit,
  worth remembering franchises can surface under any vertical search, not
  just the ones flagged before.
- (website track, run 2026-08-14) Fresh small/mid markets tried: Kearney NE,
  Owensboro KY, Dothan AL, Great Falls MT, Tupelo MS — 3 clean hits (Al's
  Heating and Air Conditioning, Kearney NE, 40+yr family HVAC, Facebook +
  directories only; Bryan's Pest Control, Owensboro KY, ~33yr, Facebook +
  directories only, real owner name confirmed; Boricuas Painting LLC, Dothan
  AL, Facebook + Birdeye only, owner name NOT confirmed — flagged for
  Montague to try an AL LLC filing lookup). Watch for same-name-different-
  business collisions again this run (a Florida "Bryan Pest Control" with
  its own site is unrelated to the Owensboro KY hit — confirmed different,
  not counted as a miss). Banked but not used, worth a follow-up pass:
  Starkey Heating and Air LLC (Kearney NE, looked like a hit, not fully
  confirmed), Jones LawnCare & Landscaping LLC (Tupelo MS, free Ueniweb
  builder subdomain — a genuine hit by the free-builder-subdomain rule,
  just needs an owner-name pass), Hat Creek Lawn and Land (Tupelo MS,
  Facebook-only but unusually thin footprint, needs one more confirming
  search). Great Falls MT ran cold (all real sites: 4Aces Plumbing, Kindred
  Plumbing & Heating).
- (ads track, run 2026-08-14) 2 clean hits, city-scoped `site:yelp.com
  [vertical] reviews [city]` continues to work: Charleston Roofs + Windows
  (North Charleston SC roofing, 20-21 Yelp reviews, founded 2011, cleanest
  hit of the run, no flags) and Quality Overhead Door (Toledo OH garage
  doors, 41 Yelp reviews, family-owned since 1982, but flagged as a
  multi-platform operator — 882 reviews on Birdeye — worth Montague
  checking for paid marketing elsewhere despite no Yelp sponsored badge,
  same caution pattern as Same Day Electric from the 2026-08-12 run). A
  third candidate, Aaron's Plumbing (South Bend IN, 21 Yelp reviews, no
  sponsored badge), was found but deliberately NOT queued — 2.9-star rating
  with pricing complaints. New judgment call this run: a bad star rating is
  itself a reason to drop an ads-track candidate even if the review-count
  and no-ads signals are clean, since more ad traffic to a poorly-rated
  business doesn't convert — worth treating low rating (call it under
  ~3.5-4 stars) as a standing disqualifier for this track going forward, not
  just a "flag and queue anyway" case like franchise/multi-platform risk.
  Rocky Top HVAC (Knoxville TN) also dropped for a heavier multi-platform
  flag (1,148 aggregated reviews via a review-generation dashboard vs. 20 on
  Yelp — a much bigger gap than the Toledo case). Banked near-miss backups
  under the 20-review threshold if the threshold gets relaxed: John H.
  Coleman (Knoxville TN HVAC, 13), Easy Electrical Solutions (Columbia SC,
  15), Goodman Plumbing (Asheville NC, 14), Drain Surgeon (South Bend IN,
  10, 35+yrs). Franchise risks found and excluded per standing policy: Mr.
  Electric of Columbia (Neighborly network), Overhead Door Company of
  Little Rock (official brand distributor).

- (run 2026-08-15) Scheduled run scoped to two tracks only (package + website
  — ads track skipped per this run's task instructions). `git fetch` showed a
  force-updated `origin/master` and a detached HEAD again — same stale-ref
  symptom as 2026-08-13/14, confirmed HEAD already matched `origin/master`
  tip (`c5aac38`), fixed with `git checkout -B master origin/master`, nothing
  lost. Ran both tracks as parallel sub-agents again (continues working
  well).
- (package/priority track, run 2026-08-15) 3 hits, all flagged for
  response-time drift (a recurring pattern worth treating as normal, not
  alarming, as long as identity holds — see prior runs): Walnut Valley Pest
  Control (Walnut CA/LA metro, surfaced via a Fullerton CA search, 35+yr
  family-owned, 2hr/9hr drift on Yelp response, 67 reviews stable),
  America Plumbing LLC (Scottsdale AZ, surfaced via Apache Junction AZ
  search, "responds in about 1 day" — single-source but the sharpest signal
  this run, AZ ROC license active, only 3 reviews/likely small op), Design
  Array Garage Door Store (Peoria AZ, surfaced via Avondale AZ search, 1998/
  25+yr/BBB-accredited, ~2hr response — weakest of the three but most
  "stable" identity). New failure mode logged this run: several strong
  response-time hits (J Martin HVAC Anaheim 2hr/700+ reviews/5,000+
  customers since 2014; Green Machine Pest Control Queen Creek 2hr/579
  reviews; Black Diamond Paver Stones Diamond Bar 3hr/multi-location chain;
  Apex Garage Door Avondale 1hr exactly/513 reviews) turned out too
  large/scaled for the owner-drowning ICP despite clearing the >1hr
  threshold — review count/company scale needs cross-checking before
  finalizing a response-time hit, not just the number itself. Cross-suburb
  resolution keeps recurring too (a suburb-scoped search surfacing a
  business actually HQ'd in a neighboring suburb) — same as 2026-08-14's
  Diamond Bar/landscaping note, now confirmed again with Fullerton->Walnut,
  Apache Junction->Scottsdale, Avondale->Peoria. Flagged but NOT queued:
  Javier's Landscape (Huntington Beach CA, 10hr response/5.0star/solo
  owner — excellent signal but service area is Orange County, outside the
  stated LA-metro priority scope; worth promoting if Kevin loosens the
  geography). ~20 suburb/vertical combos tried this run to land 3 hits —
  felt like a lower hit-rate than prior runs, possibly because several
  "fresh" suburbs tried (Peoria/Buckeye/Apache Junction/Queen Creek AZ) are
  smaller markets with fewer Yelp-advertising businesses overall. Full
  empty-combo list (avoid re-trying as-is): plumbing (Peoria/Glendale/
  Buckeye AZ), roofing (Buckeye/Peoria/Queen Creek AZ, Inglewood CA),
  electrical (Apache Junction/Glendale/Buckeye AZ, Burbank CA), HVAC
  (Anaheim CA, Buckeye AZ), painting (Van Nuys/Diamond Bar CA), restoration
  (Santa Monica CA).
- (website track, run 2026-08-15) Fresh small/mid markets tried: Watertown SD
  (pop. ~22k) and Gillette WY (pop. ~33k) — neither tried before. 3 hits:
  Brudwick Heating & Cooling LLC (Watertown SD, 5.0star/20 reviews,
  Facebook-only, distinctive surname so near-zero collision risk), Dave's
  Plumbing Heating & Cooling Inc (Watertown SD, 25+yr established,
  Facebook-only, generic name but every source resolved to the same
  address/phone so no collision found in practice), High Country Lawn and
  Landscape LLC (Gillette WY, full-service year-round, Facebook +
  Bizapedia-filing-record only, personal Gmail signal
  highcountry307@gmail.com, ruled out two same-name decoys in PA and
  Casper WY before confirming). New website-gap subtype found this run:
  a business's own name resolving only to a manufacturer/vendor
  dealer-locator page (e.g. Aaron's Heating & Cooling, Watertown SD ->
  only surfaces trane.com, not an owned site) is functionally a
  no-website case even though a "website" technically appears in
  search — worth treating as its own subtype alongside dead-domain/
  free-builder-subdomain going forward. Runners-up banked, not used
  (worth a follow-up pass): Aaron's Heating & Cooling (Watertown SD,
  trane.com-only per above, owner name confirmed as Aaron Schmit), Zap
  Lawn Care LLC (Gillette WY, no site across Manta/Nextdoor/Angi/Yelp,
  skipped only to avoid two landscaping hits from the same city in one
  batch). Watertown SD has one more untried real-site miss on record
  (Joe's Heating, Cooling & Refrigeration — has a real site, not a fit).
  Alexandria MN (pest control) ran cold this pass (Heid N Seek and
  Reishus Pest Control both have real sites) — untried verticals remain
  there (HVAC, roofing, electrical, garage doors, window cleaning) if
  revisited. Gillette WY has untried verticals remaining too (roofing,
  electrical, garage doors, restoration, painting, remodeling).

- (run 2026-08-16) Scheduled run scoped to two tracks only (package + website —
  ads track not requested this run). `git fetch` showed a force-updated
  `origin/master` and a detached HEAD again — same recurring stale-ref symptom
  as prior runs, fixed with `git checkout -B master origin/master`, confirmed
  local already matched origin's tip (`cf84ba5`), nothing lost. Ran both
  tracks as parallel sub-agents again.
- (website track, run 2026-08-16) Two brand-new small markets (Fort Pierre/
  Pierre SD, Alamosa CO) plus one banked candidate closed out — 3 hits: Karber
  Plumbing (Fort Pierre SD, no web presence at all beyond Facebook/Yelp/state
  licensing directory, owner Jamie Lee Karber confirmed via SD contractor
  license lookup — cleanest hit), Pest Patrol of the SLV (Alamosa CO,
  Facebook-only, owner not yet found, flagged a pestpatrol.com collision with
  an unrelated San Diego business — do not attribute that domain to this
  prospect), Jones LawnCare & Landscaping LLC (Tupelo MS — closed out a
  banked candidate from 2026-08-14; could NOT confirm which of several
  similarly-named Ueniweb subdomains, if any, actually belongs to this
  business — direct fetch got blocked by egress proxy — so it's queued as a
  plain directory-only hit instead, with an explicit flag for Montague to
  verify the Ueniweb link directly before relying on it). Two other banked
  candidates (Starkey Heating and Air, Kearney NE; Aaron's Heating & Cooling,
  Watertown SD; Zap Lawn Care, Gillette WY) were re-confirmed as genuine hits
  but deliberately held back rather than queued — each city/vertical already
  has 1-2 entries in the pipeline and queuing a 2nd/3rd from the same small
  market felt like over-concentration; worth queuing them directly (skip
  re-verification, already done) if a future run wants a fast batch without
  fresh market research. Pierre/Fort Pierre SD had a normal miss rate (2 of 3
  plumbers checked had real sites). Craig CO (garage doors) came up cold — no
  local business surfaced at all for that combo.
- (package/priority track, run 2026-08-16) Pushed into the Inland Empire
  (Ontario/Fontana/Corona/Moreno Valley/Riverside/San Bernardino/Chino/Rialto/
  Redlands/Highland/Yucaipa/Colton CA) plus Tolleson/Paradise Valley/Yuma AZ
  and Costa Mesa/Orange CA — fresh territory, not tried before. Lower hit
  rate than usual: only 2 queued, both San Bernardino CA. All Professional
  Landscape (4.8star/89 reviews, "responds in about 2hrs" confirmed
  identically across 2 searches — stable, but the business itself couldn't be
  corroborated via any non-Yelp source, flagged for Montague to open the Yelp
  page directly) and Merican Plumbing Sewer Specialist (advertises 24/7 but
  "responds in about 6hrs" — sharp contradiction signal, address confirmed,
  but only 2 Yelp reviews so volume is thin/unconfirmed, queued with caution).
  Inland Empire read as a genuinely fast-responder-skewed market this run —
  roofing/garage door/HVAC/electrical/pest control/painting all came up empty
  across every suburb tried (see combo list below), only landscaping and
  plumbing in San Bernardino specifically broke through. New per-vertical
  observation: pest control was uniformly fast (10-30min) across every
  Inland Empire suburb tried — may be a saturated/competitive vertical there,
  worth deprioritizing pest control specifically in this sub-region if
  revisited. Dropped rather than queued: Garmar Roofing (San Bernardino/
  Rialto/Hesperia — response time contradicted itself 40min/50min/2hr across
  checks, only 3-4 reviews despite 20+ yrs, too inconsistent), Evergreen
  Landscaping And Design Corp (San Bernardino — good signal, 4hr response,
  but CSLB license #1060219 shows SUSPENDED as of 2026-06-17, a new concrete
  case for the standing license-check caution), Prestige Roofing (name
  collision across 3+ unrelated CA businesses, couldn't disambiguate which
  one a Redlands search snippet referred to), Orange County Plumbing Heating
  & Air Conditioning / Seaside Air Conditioning and Heating (both Orange
  County, both scale-disqualified — OC Plumbing self-describes as "one of
  California's primary" providers, founded 1958). One unresolved strong
  signal worth a repeat attempt next run: a Fontana/Ontario-area kitchen
  remodeler/GC surfaced twice at "responds in about 8hrs, 4.4star, 197 locals
  recently requested a consultation" (one of the sharpest pain combos found
  this run) but the exact business name never resolved across several
  follow-ups (JMJ Remodeling Experts, Harding Construction, Red Star
  Construction all tried and ruled out as the match) — try
  `site:yelp.com/biz` filtered directly or vary the exact quote-count number
  next time rather than dropping it. Empty combos this run (avoid repeating):
  roofing (Ontario/San Bernardino/Redlands/Riverside CA), garage door
  (Paradise Valley AZ/Redlands/Fontana/San Bernardino/Rialto/Colton CA), HVAC
  (Tolleson AZ/San Bernardino/Costa Mesa/Orange CA), electrical (Corona/San
  Bernardino/Fontana/Rialto CA), pest control (Moreno Valley/Rialto/Colton/
  Highland/Yucaipa/Fontana CA), painting (Chino/Rialto/Colton/San Bernardino
  CA).

- (run 2026-08-17) Scheduled run scoped to two tracks only (package + website — ads
  track not requested this run). `git fetch` again showed a force-updated
  `origin/master` and a detached HEAD — same recurring stale-ref symptom as every
  prior run since 2026-08-13, fixed with `git checkout -B master origin/master`,
  confirmed local already matched origin's tip (`a772eb5`), nothing lost. Ran
  package and website tracks as parallel sub-agents again; package track needed a
  third follow-up sub-agent this run (see below) to resolve names on strong
  signals the first pass couldn't nail down — worth budgeting for that as a
  normal second step when Yelp fetch is blocked, not a sign the technique failed.
- (package/priority track, run 2026-08-17) Direct Yelp fetches were blocked by
  the network egress proxy this run (`www.yelp.com` blocked) — had to work from
  Google/search-summary data only, which made name resolution much harder than
  usual. Net result: only 2 hits this run (thinner than the usual 3), both
  flagged for Montague to verify the live Yelp page once fetch access is
  restored: JNA Heating & Cooling (South Gate CA, 5.0star/56 reviews/family-
  owned/8yrs, "responds in about 4hrs" — high confidence, all 5 distinguishing
  facts matched together on one listing) and Nunez Painting Contractor
  (Litchfield Park AZ, serves Buckeye AZ, 4.3star/63 reviews, "responds in about
  3hrs"/11 quote requests, clean AZ license — moderate confidence only, since
  Litchfield Park itself is an already-exhausted suburb and one existing review
  praises the owner for being responsive by email, a mild contradiction to the
  Yelp figure). Four other strong signals (Yuma AZ electrician 4.7star/13
  reviews/3hr response; Monrovia CA roofing 73-quote-requests/2hr response;
  Pasadena CA plumbing 5.0star/29 reviews/2hr response, serving Highland Park)
  never resolved to a confidently-identified business despite the standard
  "quote the exact numbers back" follow-up technique and repeated candidate
  checks — worth a repeat attempt once direct Yelp access works again rather
  than writing them off; candidates checked and ruled out for each are logged in
  this run's sub-agent transcripts. New drop reasons this run: Affordable
  Garage Door Service (Chandler AZ, 5-6hr/263 reviews) dropped for an
  "Unlicensed Contractor" flag on HomeAdvisor despite a strong pain signal —
  worth treating an unlicensed flag as a hard disqualifier same tier as a
  revoked license, not just a caution; EcoEnergy Solutions (Yuma AZ, 2hr/124-142
  reviews) deprioritized for doing HVAC+roofing+insulation+solar, a multi-trade
  mix that reads more like a scaled regional outfit than an owner-operator.
  Several near-misses also turned out to actually be based in a different
  (often already-exhausted) city than the suburb searched — same cross-suburb
  resolution pattern noted in prior runs, now also seen with ROC Electric
  (matched "Diamond Bar" search, actually Whittier), Eguez Painting and Flex
  Painting (both matched "Pico Rivera," actually Tustin/Rowland Heights), and
  Phoenician Garage Door & Repair (matched "Peoria AZ" purely because its street
  address contains "Peoria Ave," actually Phoenix). Confirmed via
  `_kevin-yelp-handpicked` grep: no overlap between Nunez Painting and Kevin's
  separate handpicked Phoenix batch, safe to queue independently. Suburb/vertical
  combos tried this run without a usable hit (avoid re-trying as-is): garage
  door (Peoria AZ, Chandler AZ - licensing flag, Gilbert AZ), restoration
  (Buckeye AZ, Yuma AZ), HVAC (Yuma AZ - too scaled), electrician (Diamond Bar
  CA - mislocated), landscaping (Duarte CA - mislocated/thin), painting (Pico
  Rivera CA - mislocated x2), pest control (Azusa CA - nothing cleared the >1hr
  bar).
- (website track, run 2026-08-17) Strong run — 6 solid hits found across 5 fresh
  markets (Twin Falls ID, Hattiesburg/Petal MS, Rome GA, Gadsden AL, Muskogee
  OK), queued 4 to keep the batch disciplined: Vance Heating & Air Conditioning
  LLC (Twin Falls ID, Facebook-only, owner name "Austin" via LinkedIn, medium
  confidence), E-Z Garage Door Services LLC (Petal MS/Hattiesburg metro,
  Facebook-only + Clopay dealer-locator listing, owner Marion Jones confirmed
  via BBB — high confidence), Lolo Landscaping (Rome GA, Facebook-only, owner
  Jahaziel Vega via a personal Gmail found directly in search results — high
  confidence), Brown Beardz Restoration (Muskogee OK, Facebook-only, no owner
  name found yet). Held back rather than queued: a second Gadsden AL painting
  hit, It's Time 2 Paint (Facebook-only, 439 FB likes, no owner name found) —
  Paint Works for You was queued instead since it's better-documented (30yr
  established, full address); worth queuing It's Time 2 Paint directly next run
  if Gadsden gets a second pass, skip re-verification. New open question: a
  borderline case, Lambert's Lawn Care & Landscaping (Rome GA), runs on a free
  `godaddysites.com` subdomain — treated as "has a real site" (not queued) since
  the page is live and functional, unlike prior free-builder-subdomain hits
  (Ueniweb) that were queued as genuine gaps. Worth Kevin/Montague weighing in on
  whether a working free-builder site should count as a real site or a gap —
  inconsistent treatment risk otherwise. Cold markets this run (all real sites,
  don't re-try as-is): Twin Falls ID HVAC (rest of field, Vance was the one
  hit), Longview TX electrical (fully cold), Hattiesburg MS garage doors (rest
  of field), Cookeville TN roofing (fully cold, 2 untried names remain: Modern
  Roofing Group, American Roof and Construction), Bowling Green KY pest control
  (fully cold, 2 untried names remain: Commonwealth Pest Control, Home Pro Pest
  Control), Rome GA landscaping (rest of field), Muskogee OK restoration (rest
  of field). Presque Isle ME window cleaning came up cold too (no dedicated
  window-cleaning business found at all) but has one untried name worth a
  follow-up: "Island Shine Windows and Eaves" (found via Facebook, not yet
  confirmed).

- (run 2026-08-18) Scheduled run scoped to two tracks only (package + website — ads
  track not requested this run). `git fetch` again showed new branches and master
  fast-forwarded, and the container started on a detached HEAD unrelated to
  `origin/master` — same recurring stale-ref symptom as every prior run since
  2026-08-13, fixed with `git checkout master` (local already matched origin's tip
  `0429057`, just needed to leave detached HEAD), nothing lost. `_new-leads.md` had
  nothing dropped in. Ran both tracks as parallel sub-agents again (continues
  working well; package track ran ~90 searches this time, notably more than usual,
  reflecting how exhausted the easy suburbs have become).
- (package/priority track, run 2026-08-18) Pushed into newer Phoenix suburbs (San
  Tan Valley, Sun City West, El Mirage, Youngtown, Cave Creek, Anthem AZ) and LA
  suburbs (San Gabriel, Monterey Park, Alhambra, Covina, Claremont, Rosemead,
  Duarte, La Verne/San Dimas CA) — mostly cold, consistent with the trend of lower
  hit rates in fresher/smaller suburbs. 3 hits: Prima Painting (Cave Creek AZ,
  ~9hr response/12 quote requests, 4.3star/7 reviews — thin review count, genuine
  small owner-operator scale, AZ ROC #318828 active), Ramos Painting Services
  (Arcadia CA, surfaced via an Alhambra search — actual home city is Arcadia, ~3
  DAY response despite 4.7star/67 reviews — sharpest gap found this run but
  single-source only, no website found either so flagged as a possible no-website
  upsell case), Jesca Heating & Air Conditioning (Los Angeles/Glassell Park CA,
  surfaced via an Alhambra search — actual home city is LA, ~1 day response,
  5.0star/only 5 reviews, Yelp listing UNCLAIMED — weakest of the three, no
  quote-request volume figure could be confirmed). Cross-suburb resolution keeps
  recurring (2 of 3 hits this run alone) — an "Alhambra CA" search surfaced both
  Arcadia and LA/Glassell Park businesses; treat the suburb searched as a starting
  point only, always confirm actual home address. Coleman Painting (Cave Creek AZ
  listing) turned out to be the SAME company as the already-existing
  `coleman-painting-gilbert-az` prospect under a different service-area listing —
  worth remembering one business can surface under multiple city searches, check
  existing prospects by NAME not just by the searched city before queuing. Scale
  disqualifiers again this run: Pro Active Pest Control (Chandler AZ, 2hr response
  but 612+ Birdeye reviews since 2014 — too scaled), Air Mek and Next Level
  Heating and Cooling (both surfaced via Alhambra HVAC searches but resolved to
  Lake Elsinore and Anaheim respectively, both too big/far). San Tan Valley, Sun
  City West, El Mirage, Youngtown AZ and San Gabriel, Monterey Park, Covina,
  Claremont, Rosemead, Duarte, La Verne/San Dimas CA can likely be marked
  exhausted now (tried across most verticals, mostly cold) — Cave Creek AZ is the
  exception, worth a second pass on its untried verticals (HVAC, garage door,
  restoration came up empty this run but painting worked).
- (website track, run 2026-08-18) Two brand-new small markets, Meridian MS (pop.
  ~33k) and Bartlesville OK (pop. ~36k) — 3 hits: Watkins Plumbing And Drains
  (Meridian MS, pure Facebook-only, owner names Chris/Ashley Watkins found but
  unconfirmed independently — flagged since "Watkins Plumbing" is a very common
  name nationally, ruled out 4 same-named businesses elsewhere as unrelated),
  Lay's Electric (Bartlesville OK, established 1973, pure Facebook-only,
  distinctive name so low collision risk, but owner name conflicting between two
  sources — Payton Lay vs. Lloyd Lay, likely a multi-generation family shop,
  flagged for Montague to confirm which to use), RidgeTop Roofing and Repairs
  (Meridian MS, Facebook-only, no owner name found yet, flagged an LLC filing
  address in Ridgeland MS ~90mi away that's likely just a registered-agent address
  not a second business — not fully resolved). Banked backups, not queued (avoid
  stacking a 2nd same-city/vertical hit in one batch): S&S Electric (Bartlesville
  OK electrical, Facebook-only, owner-email signal mjserafin103@yahoo.com). Two
  more banked but need a collision/address check before queuing if revisited: B&B
  Painting (Salina KS — a same-named KC business may be unrelated, unconfirmed)
  and SK Painting Services LLC (Salina KS — BBB shows a Brookville KS address,
  not Salina, needs confirming). Salina KS (pest control, landscaping) and
  Jonesboro AR (garage doors) both ran fully cold this pass — all real sites
  found. Meridian MS has an untried vertical remaining if revisited (HVAC came up
  fully cold — 3 real sites checked, but septic/other trades untried).

- (run 2026-08-19) Scheduled run scoped to two tracks only (package + website — ads
  track not requested this run). `git fetch` showed new branches and master
  fast-forwarded (Sue joined 2026-08-18, a KIREEK follow-up stage commit, and the
  "Kevin works through several doors" standing-rule note) and the container started
  on a detached HEAD matching `origin/master`'s tip (`0a41511`) exactly — same
  recurring stale-ref symptom as every prior run since 2026-08-13, fixed with `git
  checkout -B master origin/master`, nothing lost. `_new-leads.md` had nothing
  dropped in. Ran both tracks as parallel sub-agents again (continues working
  well) — package track took ~5.5 min/57 tool calls, website track ~2 min/23 tool
  calls this run.
- (package/priority track, run 2026-08-19) Pushed into San Fernando Valley (Northridge,
  Canoga Park, Reseda) and South Bay/Gateway (Gardena, Bellflower, Hawthorne) CA plus
  fresh Phoenix-fringe suburbs (Cave Creek untried verticals, Laveen, Ahwatukee, Sun
  Lakes, Wickenburg, Florence, Eloy/Coolidge). 3 hits, all with response-time signals
  over 1hr: Reliant Pest Control (Northridge CA, veteran-owned since 2000, response
  drifted 2hr/10hr/4hr/7hr across 4 reads but identity — address, ~125 reviews — held
  steady each time; reviews independently mention "communication issues," corroborating
  the pain outside the Yelp figure alone), Casa Painting Services (Northridge CA, owner
  Carlos Casasola since 2006, ~5hr response corroborated twice, 299-301 reviews
  consistent, cleanest identity match of the three), New Light Electric (Bellflower CA,
  16yrs, 87 reviews, ~4hr response corroborated twice, Yelp-verified license — note a
  same-named "New Light Electric" in Long Beach CA is a different business, verified via
  address/phone/review count). Notable new disqualifier this run: one candidate
  (Extra Electrical Inc., Coolidge/Peoria AZ) showed two wildly inconsistent readings
  (5.0★/147 reviews/4hr vs. 3.5★/10 reviews/2hr) on the same business name across two
  searches — too far apart to be normal number drift, treated as likely listing
  conflation and dropped outright rather than picking one reading; worth adding this as
  a standing caution alongside the existing "corroborate before trusting" rule. Also
  dropped: Red Mountain Plumbing (Ahwatukee/Fountain Hills/Mesa AZ — BuildZoom shows no
  active license on file, license-status hard disqualifier), Dutchmen Construction
  (Bellflower roofing search, actually Irvine CA — too far + solar/roofing multi-trade
  sprawl), Tito Alcaraz Painting (Canoga Park search, actually San Fernando CA — heavy
  multi-trade sprawl reading as a general contractor, 263-301 reviews nearing scaled-
  regional-outfit territory), North Canyon Roofing and Coating (resolved to
  already-exhausted Glendale AZ, only 1 review), "Artificial Grass Arizona" (Cave Creek
  landscaping, 4hr/65-request signal never resolved to one confirmed business name
  despite trying — several similarly-named turf companies exist, none matched cleanly).
  Empty suburb/vertical combos this run (avoid re-trying as-is): HVAC (Cave Creek AZ,
  Palmdale CA — both fast only), garage door (Peoria/Cave Creek/Laveen AZ — all fast),
  plumber (Ahwatukee/Sun Lakes AZ — fast dominated), pest control (Fountain Hills AZ),
  roofing (Sun Lakes AZ — no data, Laveen AZ — fast), electrician (Wickenburg/Florence
  AZ — fast), HVAC (Eloy/Coolidge AZ — 6hr signal existed but only 6 quote requests, too
  thin to trust), restoration (Laveen/Fountain Hills AZ — fast), landscaping (Hawthorne
  CA — fast). All three finalists checked clean against `_kevin-yelp-handpicked` and the
  existing prospects/ directory — no overlap.
- (website track, run 2026-08-19) Two fresh small markets: Ardmore OK (roofing) and
  Dickinson ND (pest control) — both hit on or near first pass. Queued: Dorries Roofing
  (Ardmore OK, established 1980, Facebook-only across BBB/D&B/Manta, owner Shayne
  Dorries confirmed directly on the D&B listing — medium-high confidence) and J.A.M.
  Pest Control (Dickinson ND, ~27yrs per BBB, Facebook-only across DexKnows/Yellow
  Pages/Dickinson Press/BBB, owner John Mack confirmed via the business's own Facebook
  video — medium confidence). Held back rather than queued: Milton's Roofing (also
  Ardmore OK, also Facebook-only, address/phone confirmed but no owner name found) —
  the search technique surfaced two Ardmore roofers together, and stacking two
  same-city/same-vertical hits in one small batch felt like the same over-concentration
  risk flagged in the 2026-08-16 run notes; worth queuing directly (skip
  re-verification) if a future run wants a fast batch, or if Ardmore gets revisited and
  needs a second entry. Cold this run: Sheridan WY electrical (fully cold — Electric
  Solutions, Wyoming Electric, Sheridan Electric, Premier Electric all have real sites,
  mark exhausted), Alexandria MN HVAC + garage doors (cold — Mission Mechanical,
  Erickson's, Masters PHC, Ace Door Co, Viking Garage Door, MN Mobile Garage Door all
  have real sites; window cleaning/pest control/painting still untried there), Minot ND
  window cleaning (cold — Brite Way has a real site; HVAC/plumbing/roofing/electrical
  untried there). Ardmore OK roofing is now partially saturated (2 hits found, but
  Tornado(s) Roofing, Safe Roof, H&E Roofing, Bates Home Improvement, Seal-Tite Roofing
  all resolved to real sites) — other verticals there remain untried. Dickinson ND has
  other verticals untried beyond pest control.

- (run 2026-08-20) Scheduled run scoped to two tracks only (package + website, per
  this run's task instructions). `git fetch` again showed a force-updated
  `origin/master` and a detached HEAD — same recurring stale-ref symptom as every
  prior run since 2026-08-13, fixed with `git checkout -B master origin/master`,
  confirmed local already matched origin's tip, nothing lost. Ran both tracks as
  parallel sub-agents again (continues working well; package-track agent took
  ~8min/78 tool calls this run, notably longer than usual — worth budgeting for
  variance here rather than assuming something's wrong if a run takes longer).
- (package/priority track, run 2026-08-20) Pushed into fresh Phoenix suburbs (El
  Mirage, Sun City West, Prescott Valley, Anthem, Casa Grande, Yuma) and LA
  suburbs (Azusa, Duarte, Monrovia, Highland Park, Pico Rivera, Van Nuys) — 3
  hits, confidence ranged wider than usual (one high, one medium, one low-medium):
  Bright Ideas Painting Corp (South LA, ~3hr response corroborated 3x, 20
  reviews/12yrs, no dedicated site — cleanest hit of the run), Freedom Roofing &
  Coatings Inc. (Chandler AZ, surfaced via an El Mirage search then cross-suburb
  resolved to Chandler, ~8hr response confirmed twice, 16 reviews/20yrs — flagged
  for a genuine multi-city name-collision risk, other unrelated "Freedom Roofing"
  entities exist in Wickenburg/Lake Havasu/Houston), Westland Mechanical (Phoenix
  AZ, response drifted 6hr->1day but both over threshold and identity held, only
  2 reviews — weakest hit, flagged hard for Montague: a same-named but larger
  commercial HVAC company (westlandmechanical.net) exists and the two must not be
  confused before any outreach references specifics). New take-away: response-time
  drift between two over-threshold readings (e.g. 6hr vs 1day) that don't
  contradict each other's direction is fine to log-and-queue, same standing
  practice as before — only a drift that crosses below the 1hr threshold on a
  later check is a real disqualifier. Several strong unresolved signals worth a
  repeat attempt next run (name never resolved despite the quote-exact-numbers
  technique): Anthem AZ plumbing (10hr/191 reviews/4.5star — sharpest unresolved
  signal this run), Casa Grande AZ roofing (4hr/101 reviews/4.6star), Yuma AZ
  roofing (1day/55 locals) and landscaping (9hr/20 locals, partial match to
  "Arizona Quality Landscaping" but unconfirmed), Van Nuys landscaping (2hr/260
  locals, resolved to a business address in Mount Washington but no name — this
  exact signal has now gone unresolved across 2+ runs), Monrovia roofing (2hr
  signal present but every name cross-resolved to already-exhausted suburbs).
  Empty combos this run (avoid re-trying as-is): HVAC (Peoria AZ, Casa Grande AZ
  — all <1hr), roofing (Prescott Valley AZ — all <=2hr/thin), electrical (Yuma AZ
  — still unresolved from a prior run, Anthem AZ, Sun City West AZ — 89-151
  quote-requests reads too large-scale), pest control (Anthem/Prescott
  Valley/Casa Grande AZ — all fast, Casa Grande's 235-locals hit too large-scale
  even though unresolved), garage door (Yuma AZ, Prescott Valley AZ — both fully
  fast-responder markets, deprioritize this vertical in these suburbs), restoration
  (Prescott Valley AZ, Anthem AZ), remodeling (Yuma AZ — only 1-review shops, too
  thin), painting (Prescott Valley AZ — unresolved 5hr/33-locals signal), roofing
  (Highland Park CA plumbing note: the one 2hr/213-locals hit here also never
  resolved a name), electrical (Duarte CA — all <1hr), restoration (Pico Rivera CA
  — all <1hr), painting (Duarte CA — resolved to a business actually in Glendora
  CA, an already-exhausted combo, correctly not double-counted).
- (website track, run 2026-08-20) 3 hits, 2 fresh + 1 banked candidate closed out.
  Fresh: Guardian Pest & Termite Services (Ardmore OK, 31yr established, zero
  owned web presence confirmed across 2 follow-ups, directories/Facebook only,
  business Gmail found but no personal owner name yet), EMC Plumbing & Heating
  (Vernal UT, 30+yr established, Facebook + a Hitachi vendor listing only —
  flagged a same-name collision with an unrelated EMC Plumbing Inc. of Sacramento
  CA, confirmed different address, do not attribute that domain to this
  prospect). Banked-and-closed: Aaron's Heating & Cooling (Watertown SD, first
  banked 2026-08-15, "website" resolves only to a trane.com dealer-locator page,
  owner Aaron Schmit confirmed this run — also surfaced a NEW collision risk not
  caught in the original banked note: an unrelated, same-named "Aaron's Heating
  and Cooling" operates in Sioux Falls SD with a real working site, must not be
  confused with this Watertown prospect). Confirms the "queue banked candidates
  directly to save research time" approach from 2026-08-16's note works well, but
  worth always doing at least one quick collision-check pass even on a banked
  candidate — the Sioux Falls collision wasn't visible in the original note.
  Fresh markets that ran cold this run (real sites found, don't re-try as-is):
  Vernal UT plumbing/heating (rest of field: Make Your Mark Plumbing, Plummer's
  Plumbing, Downs Plumbing, Daniels Plumbing & Heating), Elko NV HVAC/plumbing
  (fully cold: Ruby Mountain HVAC, Snyder Mechanical, Parker Solutions), Corbin KY
  garage doors (fully cold: Durham Garage Doors, Holder Garage Door, Overhead
  Door Company of Corbin — a franchise). Ardmore OK pest control has 2 untried
  names remaining if revisited (Allstate Termite & Pest Control, Pro-Guard
  Termite and Pest Control — not individually verified this run). Fresh markets
  not yet tried at all: Marshalltown IA, Ottumwa IA, Del Rio TX, Vicksburg MS,
  Laurel MS, Middlesboro KY, Elizabethtown KY, Danville VA, Martinsville VA,
  Sheridan WY, Klamath Falls OR, Del Norte County CA, Susanville CA. Remaining
  banked candidates not yet closed out: Zap Lawn Care LLC (Gillette WY, no site
  across Manta/Nextdoor/Angi/Yelp), It's Time 2 Paint (Gadsden AL, Facebook-only,
  no owner name found), Starkey Heating and Air LLC (Kearney NE — was never fully
  confirmed in its original run, needs a real verification pass, not just a
  direct queue, before closing out).

- (run 2026-08-21) Kevin's fire-payload order: "FULL SOURCING DAY — volume day," golden
  signal (HIGH Yelp response rate + SLOW response time), Phoenix-metro first, and a NEW
  standing rule — every Yelp-sourced record must carry the actual `yelp.com/biz/<slug>`
  URL in `status.md`'s `## Links` block, captured at sourcing time, not guessed/
  constructed. `git fetch` showed a force-updated `origin/master` and a detached HEAD —
  same recurring stale-ref symptom as every prior run since 2026-08-13, fixed with `git
  checkout -B master origin/master`, confirmed local already matched origin's tip
  (`91d29a5`), nothing lost. Ran 4 parallel sub-agents this run instead of the usual 2-3
  (3x package-track batches split by sub-territory — Phoenix fringe, Yuma/Pinal/Prescott
  fringe, LA metro — plus 1 website-track batch) to genuinely source "multiple batches"
  per Kevin's order. Net result thinner than hoped on package track (2 hits total, not the
  usual 3 per batch) — most of the day's package-track search budget went to resolving
  and then correctly DISQUALIFYING strong-looking signals rather than queuing weak ones;
  see below. Website track had a strong day (5 hits). Did not touch any existing prospect
  folder — Montague is mid-Links-backfill per the order, only new slugs created.
- (package/priority track, run 2026-08-21) 2 hits, both weaker/thinner than the usual bar
  but genuinely corroborated: 1st Choice Plumbing, Air & Insulation (Phoenix AZ 85027,
  Deer Valley near the Cave Creek border — HVAC, ~3hr response corroborated twice, no
  sub-1hr drift, 4.4★/104-107 reviews, active AZ ROC license, family-owned), S & M
  Electric, Inc. (Prescott AZ — electrical, ~2hr response/7 quote requests/14 Yelp
  reviews, established 1982, family-owned, but flagged as OUTSIDE the Phoenix-metro
  priority area — Prescott is a separate ~100mi-away market — and a thinner signal than
  usual; queued under the standing nationwide package-track criteria but flagged for
  Sue/Kevin's call on fit). **New standing pattern worth logging: strong "yelp advertisers"
  signals in fresh/unresolved-signal territory are disproportionately resolving to
  DISQUALIFIED businesses, not new hits** — this run alone resolved and correctly dropped:
  Cave Creek Cooling Company (3hr reading contradicted by a 10min reading on direct
  check), Arizona's Finest Roofing (closes out the 2026-08-20 unresolved "Casa Grande
  roofing 4hr/101-review" signal — it's actually a 10min fast responder), McMillan
  Brothers Painting & Roofing (strong clean 4hr/139-147-review Casa Grande signal, but
  HQ'd in already-exhausted Gilbert AZ — a judgment call flagged, not unilaterally
  dropped, worth Sue/Kevin weighing in on whether a Gilbert HQ should hard-disqualify a
  business that dominates a fringe-suburb search), American Home Water and Air (closes
  out the 2026-08-20 unresolved "Anthem plumbing 10hr/191-review" signal — real business,
  too scaled: 440+ reviews at one location alone, multi-location, 40+ years), Action
  Termite & Pest Control (closes out Casa Grande's 4hr/235-quote pest control signal —
  too scaled, 5,000+ reviews, metro-wide), Tucker Hill Air/Plumbing/Electric (closes out
  Fountain Hills' 3hr electrical signal — too scaled, 15+ cities), Pacific Outdoor Living
  (closes out the Van Nuys landscaping "2hr/260 locals" signal that had gone unresolved
  across 2+ prior runs — too scaled, 10,000+ projects, multi-county). Take-away: these
  "unresolved signal, worth a repeat attempt" notes from past runs are working as
  intended — the repeat attempts ARE resolving them, just mostly to disqualified rather
  than queuable businesses. Worth expecting that ratio going forward rather than treating
  every unresolved signal as a banked future hit. New tooling constraint hit hard this
  run: direct `WebFetch` to yelp.com is blocked by the network egress proxy
  (`EGRESS_BLOCKED`) in this environment, and the LA-metro sub-agent exhausted its full
  200-call WebSearch budget mid-run without fully closing out every lead — worth
  budgeting for that ceiling on a "multiple batches" volume day, and flagging to
  Sue/Kevin that a direct-Yelp-fetch path would meaningfully improve name-resolution
  yield if it ever becomes available. Strong unresolved signals banked for next run:
  Anthem AZ plumbing (10hr/191 reviews/4.5★, corroborated identically across 5 searches
  this run alone, closest thing to a slam-dunk in the territory but the search tool's
  summarizer never surfaced an individual `/biz/` card for it — needs a direct-browser
  Yelp pass, not another search-engine attempt), Fountain Hills roofing (2hr/116
  reviews/143 quote requests) and electrical (2hr/109 quote requests), Gold Canyon HVAC/
  duct cleaning (3hr/45 quote requests), Anthem painting (8hr/141 quote requests), South
  Gate/Paramount CA electrician (10hr/32 locals/4.9★/~168 reviews), Lawndale CA HVAC
  (9hr/6 locals/4.9★/64 reviews — thin quote volume but clean signal otherwise). One
  scale judgment call flagged, not resolved: South Bay Electric Company (Harbor City CA,
  4.9★/441 reviews) reads single-location/owner-operated in its own page language despite
  441 reviews nudging into the usual "too scaled" zone — worth Sue/Kevin deciding whether
  review count alone should disqualify a genuinely single-location shop.
- (website track, run 2026-08-21) Strong run, 5 hits from 5 fresh small/mid markets
  (Vicksburg MS, Martinsville VA) plus one banked candidate closed out: C E H Painting LLC
  and Bennys Painting LLC (both Vicksburg MS, painting — deliberately queued both despite
  the usual same-city/same-vertical over-concentration caution, since this was an explicit
  volume day), MGM Painting and Wall CW Painting (both Martinsville VA, painting — same
  call), It's Time 2 Paint (Gadsden AL, banked since 2026-08-17, re-confirmed still no
  website). One banked candidate DISQUALIFIED this run: Zap Lawn Care LLC (Gillette WY) —
  previously banked as no-site 2026-08-16, but now has a real live site at zaplawncare.com
  — the gap closed since then; worth remembering banked candidates can go stale, always
  re-verify before closing one out, not just queue on the old note. Two markets ran cold
  (real sites found): Danville VA electrical, Sheridan WY landscaping (though Sheridan has
  2 untried near-misses if revisited: Walker Landscapes and Cowboy State Landscape LLC,
  both confirmed Facebook-only but no phone/owner surfaced yet; also Skipper's Lawn Care
  LLC in Vicksburg MS, same status). Fresh markets not yet tried at all remain: Marshalltown
  IA, Ottumwa IA, Del Rio TX, Laurel MS (pest control ran cold, other verticals untried),
  Middlesboro KY, Elizabethtown KY, Klamath Falls OR, Del Norte County/Crescent City CA,
  Susanville CA.

- (run 2026-08-21 #2) A second scheduled firing landed the same day as the "FULL SOURCING
  DAY" volume-day run above (that one already closed out Kevin's explicit fire-payload
  order). Treated this as a normal small-batch run rather than repeating the volume day —
  ran 2 parallel sub-agents (package + website), explicitly steered away from every
  suburb/vertical/market the earlier run that same day had already tried, and pointed the
  package-track agent at that run's own banked "strong unresolved signals" list first.
  `git fetch`/detached-HEAD stale-ref symptom recurred again as usual, fixed the same way,
  nothing lost.
- (package/priority track, run 2026-08-21 #2) 3 hits, all LA metro, all resolved via the
  Yelp-advertisers response-time technique: VigilAir Heating and Cooling (Cerritos CA HVAC,
  ~4hr response/24 quote requests, 153 reviews, family-owned since 2005 — also has a real
  site but the site itself states a 24hr email turnaround, a second pain signal beyond
  Yelp; cleanest identity, no flags), Pro Service Electricians Inc. (Whittier CA electrical,
  ~3hr response/79 quote requests, only 28 reviews after 20+yrs — thin review-generation
  rate despite volume; flagged for Montague to verify CSLB license, search-only access
  couldn't confirm it), On Point Exterminating (Long Beach CA pest control, surfaced via a
  Whittier search, ~3hr response/23 quote requests, only 33 reviews after 13yrs — same
  thin-reviews-despite-volume pattern; no website found, license unconfirmed, flagged for
  Montague). Closed out two carryover "strong unresolved signal" leads permanently this run:
  Anthem AZ plumbing (10hr/191 reviews/4.5star, chased across 3+ runs) resolved to ProSkill
  Services — ~51 employees, services 6 cities, too scaled, DO NOT re-chase. South Gate/
  Paramount CA electrician (10hr/32 locals/4.9star/~168 reviews) resolved to a listing that
  gave contradictory response times (10hr vs 10min) on two reads of the same business —
  listing-conflation disqualifier, DO NOT re-chase. Also found and dropped on licensing:
  Flex Painting Inc. (Rowland Heights, 2hr/5.0star/200+ reviews — CSLB painting license
  #1080550 confirmed EXPIRED as of Oct 2025, otherwise would've been a strong hit). New
  strong-but-unresolved signals banked for next run: Montebello CA HVAC (2hr/67 locals, but
  the matching Yelp listing reads as unclaimed — likely conflation with a different claimed
  listing, retry with a sharper query), Whittier CA remodeling (2hr/38 locals, candidate
  Persa General Construction 4.7star/139 reviews unconfirmed match), Goodyear AZ roofing
  (2hr/23 locals, name unresolved), Downey CA electrician (4hr/4.3star/19 reviews, distinct
  from the already-queued J Powers Electric, name unresolved and review count thin). Empty
  combos this run (avoid re-trying as-is): pest control (Litchfield Park, Apache Junction,
  Avondale AZ, Pasadena/Norwalk CA), garage door (Tolleson/Surprise AZ, Downey/San Gabriel
  Valley/Whittier CA), plumbing (Litchfield Park AZ, Norwalk/Alhambra/Downey/Whittier CA),
  roofing (Goodyear AZ, Downey/Pasadena/Montebello/Whittier CA), remodeling (Pomona CA),
  restoration (Alhambra CA), HVAC (Ontario CA — contradictory data, dropped), painting
  (Norwalk CA — only a 1-review business found).
- (website track, run 2026-08-21 #2) 3 hits from 3 fresh markets tried for the first time:
  JB Plumbing (Ottumwa IA, Facebook-only, phone found but owner name not yet found — flagged
  HIGH collision risk, "JB Plumbing" is a generic name with confirmed unrelated businesses
  in Wyoming/South Carolina/California), Ed-Pat Electric (Klamath Falls OR, Facebook-only
  despite 54 years of continuous Oregon CCB licensing since 1972 — a strong "decades of
  trust, zero web presence" pitch angle, owner Cary Michael Brennan confirmed via CCB
  license record + BuildZoom, low collision risk, cleanest identity of the run), Pinnacle
  Painting (Middlesboro KY, Facebook-only, owner unconfirmed — a "sanders128@hotmail.com"
  signal suggests a Sanders family business but no first name confirmed reliably; flagged
  MEDIUM-HIGH collision risk, "Pinnacle Painting" is a common name with unrelated real
  businesses in Indiana/Minnesota under similar names). Cold markets this run (all real
  sites, don't re-try as-is): Marshalltown IA HVAC (B&G HVAC has a full site), Del Rio TX
  roofing (all 4 candidates read as long-established/too-serious-to-be-siteless, not
  individually site-checked — worth a revisit if more candidates needed), Crescent City CA
  garage doors (nothing findable at all, market may be too small for this vertical),
  Susanville CA pest control (Smith's Small Town Pest Solutions has a real site,
  smalltownpestsolutions.com). Middlesboro KY landscaping came up cold too — Total Lawn Care
  & Landscaping is Facebook-only but collision risk was too high to queue (name collides
  with unrelated "Total Lawn Care" businesses in Paducah KY, Winder GA, and elsewhere,
  couldn't isolate a phone/owner match). Fresh markets not yet tried at all remain: Marshall-
  town/Ottumwa IA other verticals, Del Rio TX other verticals, Middlesboro KY other
  verticals, Elizabethtown KY, Del Norte County/Crescent City CA other verticals, Susanville
  CA other verticals, Laurel MS other verticals (pest control already cold there).

- (run 2026-08-22) Scheduled run scoped to two tracks only (package + website, per this run's
  task instructions — ads track not requested). `git fetch` showed new branches and a
  force-updated `origin/master`, and the container started on a detached HEAD — same recurring
  stale-ref symptom as every prior run since 2026-08-13, fixed with `git checkout -B master
  origin/master`, nothing lost. `_new-leads.md` had nothing dropped in. Ran both tracks as
  parallel sub-agents again (continues working well).
- (package/priority track, run 2026-08-22) 3 hits — 2 clean, 1 flagged for a real discrepancy.
  Linea Electric (San Pedro CA electrician, ~10hr response/100% response rate/15 quote
  requests, 4.6★/11-12 reviews, true one-man shop est. 1996, active CA license, no website
  found at all — San Pedro CA was a fresh untried suburb). Sierra Vista Roofing LLC (Mesa AZ
  roofing, surfaced via a Fountain Hills AZ search then cross-suburb resolved to Mesa — Mesa's
  roofing vertical specifically hadn't been tried even though other Mesa verticals were
  exhausted — ~6hr response/100% response rate/4.9★/15 reviews, two named owners Jose & Jorge,
  active AZ ROC license, existing site is only a bare GoDaddy site-builder page). Overson Pest
  Control (Mesa AZ, serves Queen Creek/Gilbert/Chandler) — queued WITH A FLAG: the
  resolving search reported 5hr response/114 quote requests/4.9★/119 reviews, but the
  independently-confirmed Yelp page for this business shows only 63 reviews — a real
  discrepancy, not just normal drift, that couldn't be resolved this run (possibly a second
  Yelp listing or search-tool conflation with a different pest control business). Identity
  (owner Brett Overson, ~11yr establishment) is solid even though the number isn't confirmed —
  explicit flag for Montague to verify directly on Yelp before Elly's draft leans on either
  reading. Also worth noting: Overson's own website (oversonpestcontrol.com) is a genuinely
  decent site already, unusual for this track. Dropped as disqualified: South Bay Electric
  Company (Harbor City CA, 4.9★/441 reviews, owner ~40yrs) — explicitly trips the "40+ years
  AND 400+ reviews" scale disqualifier despite reading as a genuine family shop in its own
  language, and had no response-time pain signal anyway; Penna Electric (Carson/Hawthorne/
  Redondo Beach CA) — review counts drifted 176/172/31 across reads, conflation across
  multiple same-name listings including one CLOSED LA location; AC Plumbing Heating & Air
  Conditioning (Harbor City CA) — three different review counts (111/68/97) across reads on
  the same listing, not trusted as a hit, flagged as "maybe, re-verify directly" rather than
  queued. New standing caution: the search tool itself sometimes blends numbers from adjacent
  Yelp listings rather than reflecting a real change in the underlying data (seen 4x this run
  alone: Controlled Comfort, AC Plumbing Harbor City, Overson Pest Control, Downey electrician,
  Penna Electric) — worth treating any single-run 2+ different review-count reading as reason
  to flag-not-drop (if identity holds) same as the existing drift guidance, but a 50%+ swing
  (like Overson's 63 vs 119) deserves an explicit "verify before use" flag rather than being
  treated as normal drift. Still-unresolved strong signals from prior runs, tried again, still
  not resolved: Fountain Hills AZ electrical (2hr/109 quote requests), Gold Canyon AZ HVAC/duct
  cleaning (3hr/45 quote requests), Anthem AZ painting (8hr/141 quote requests), Lawndale CA
  HVAC (9hr/6 locals/4.9★/64 reviews — closest candidate checked, Controlled Comfort, had wrong
  numbers), Whittier CA remodeling (2hr/38 locals — "Persa General Construction" guess still
  unconfirmed, no rating/response data found for it this run). Goodyear AZ roofing (2hr/23
  locals) wasn't attempted this run — ran out of budget, try fresh next time. Downey CA
  electrician (4hr/4.3★/19 reviews) got yet another different reading (11 reviews/6hr) — still
  dropped, now tried and failed to resolve across 2 separate runs. Empty suburb/vertical combos
  this run (avoid re-trying as-is): HVAC (El Mirage/Anthem/Yuma/Casa Grande AZ — all fast
  except Casa Grande's 3hr Just In Time Heating & Cooling, worth a closer look next run),
  garage door (Sun City West/Lakewood CA — no response-time data surfaced at all), plumbing
  (Baldwin Park/Rowland Heights CA — fast only), landscaping (La Puente CA — fast only), pest
  control (Florence/Coolidge/Eloy AZ — only 24hr-guarantee marketing language, no Yelp data),
  electrician/plumbing (Wilmington CA — fast only).
- (website track, run 2026-08-22) 3 hits from fresh/partially-tried small markets: Goodvin
  Plumbing (Ottumwa IA, Facebook-only/778 likes/16 reviews, owner Ryan Goodvin confirmed via
  active Iowa contractor license on BuildZoom — low collision risk, distinct spelling from
  "Goodin/Godwin/Goodwin"), Solid Rock Roofing LLC (Elizabethtown KY, Facebook+Instagram only,
  owner Drew Kenny via LinkedIn — medium collision risk, "Solid Rock/Rock Solid Roofing"
  recurs nationally but this one is cleanly isolated by phone/email/owner; flagged a specific
  same-market collision risk: "Rock Solid Roofing KY" in Frankfort/Eastview KY has its own real
  site, confirmed different business, don't attribute that domain here), Stanley Brooks
  Plumbing LLC (Klamath Falls OR, no domain across BBB/Yelp/HomeAdvisor/BuildZoom/Nextdoor/
  Facebook, BBB A+ since 2018, owners Margo Gonzalez Brooks + Stanley Ronald Brooks
  cross-confirmed BBB+LinkedIn — low collision risk). One near-miss ruled out: Maher Plumbing
  and Heating (Ottumwa IA) looked like a hit (no site, gmail) but BBB flags it as OUT OF
  BUSINESS — not queued, not viable; worth adding "check BBB for out-of-business status" as a
  standing quick sanity check alongside the existing license-check caution, not just for
  negative-review-sourced candidates. Cold markets this run (real sites found, don't re-try as
  a whole market, though see untried remnants below): Marshalltown IA (Sentry Plumbing, Ritter
  Plumbing, B&G HVAC, Elite Cool & Heat all real), Elizabethtown KY pest control (BCPC
  Exterminating, Singleton's Pest Solution, Perks Worx, E-Town Exterminating all real — this
  vertical is fully saturated there), Klamath Falls OR painting (Rolez Painting, Cascade
  Painting & Wallcovering both real — Cascade looked site-less at first pass, worth remembering
  a deeper check can reverse a first impression), Klamath Falls OR plumbing partial (Case
  Plumbing real), Klamath Falls OR garage doors (Valley Garage Door LLC real). Untried
  remnants worth a future pass: Elizabethtown KY roofing (7 more names not individually
  checked: Vessels Roofing, Bourbon Country Exteriors, Hyper Roofing KY, Borders Storm
  Restoration, Olympus Roofing LLC, D&C Premier Exteriors LLC, YETI Commercial Roofing),
  Klamath Falls OR (Precision Painting Inc., BNB Painting & Construction, Powley Plumbing Inc,
  Butler Sewer & Drain, Klamath Water Systems not checked; landscaping returned nothing
  findable at all). Two banked backups for next run: AB Plumbing LLC (Marshalltown IA — no
  site, gmail signal, owner unconfirmed, medium collision risk nationally) and Affordable
  Plumbing and Drain Cleaning Service (Klamath Falls OR — no site, yahoo email signal, owner
  not yet identified). Still fully untouched: Del Rio TX, Middlesboro KY, Del Norte
  County/Crescent City CA, Susanville CA, Laurel MS, plus the older banked-not-yet-verified
  Starkey Heating and Air LLC (Kearney NE) and Walker Landscapes/Cowboy State Landscape LLC
  (Sheridan WY).

## Dead ends to stop searching

- Van Nuys CA landscaping "2hr response / 260 locals" signal (unresolved across 3 prior
  runs, 2026-08-14/19/20) — resolved 2026-08-21 to Pacific Outdoor Living, a 10,000+
  project multi-county operator. Too scaled, hard disqualify. Stop re-chasing this one.
- Zap Lawn Care LLC (Gillette WY) — had a real no-site website gap through 2026-08-16, but
  now has a live site at zaplawncare.com as of 2026-08-21. Gap closed, not a prospect.
- Anthem AZ plumbing "10hr response / 191 reviews / 4.5star" signal (chased across 3+ runs
  since 2026-08-20) — resolved 2026-08-21 to ProSkill Services, ~51 employees across 6
  cities. Too scaled, hard disqualify. Stop re-chasing this one.
- South Gate/Paramount CA electrician "10hr response / 32 locals / 4.9star / ~168 reviews"
  signal — resolved 2026-08-21 to a listing that gave contradictory response times (10hr vs
  10min) across two reads of the same business. Listing-conflation, not trustworthy. Stop
  re-chasing this one.
- Flex Painting Inc. (Rowland Heights CA) — strong 2hr/5.0star/200+ review pain signal but
  CSLB painting license #1080550 confirmed EXPIRED (exp. 08-31-2025, still expired as of Oct
  2025). Do not queue unless license is reinstated.
