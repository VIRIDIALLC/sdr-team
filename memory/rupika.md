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

## Dead ends to stop searching

(none yet)
