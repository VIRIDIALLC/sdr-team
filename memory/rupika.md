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

## Dead ends to stop searching

(none yet)
