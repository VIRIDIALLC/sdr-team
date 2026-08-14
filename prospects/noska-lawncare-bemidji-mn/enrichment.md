```
CALL CARD
  Ask for:   NO NAME FOUND — checked reviews, GBP, FB, BBB
  Phone:     not found
  Response:  n/a (website track)
  Hook:      "You've got a great Facebook page for Noska Lawncare, but no
              actual website — and a couple of the other lawn crews in
              Bemidji do have one. That's leads walking to them instead
              of you when someone searches instead of scrolling Facebook."
```

## Company summary

Noska Lawncare LLC — lawn care / landscaping business serving Bemidji, MN.
Sole confirmed online presence is a Facebook business page
(facebook.com/p/Noska-Lawncare-LLC-100087973611101). No other directory,
review, or registration presence turned up in this pass (see verification
sections below for exactly what was checked).

## Best contact

**NO NAME FOUND.** Checked and came up empty:
- Google search for `"Noska Lawncare" Bemidji owner` — no owner name in
  any snippet.
- Google search for `"Noska Lawncare" yelp reviews` — no Yelp listing for
  this business surfaced at all (see Yelp section below); nothing to read
  owner-reply or reviewer-mention text from.
- Facebook page About section — could not be checked this pass. The page
  itself is confirmed to exist (it's the only real hit across every
  search run), but `www.facebook.com` is blocked by this environment's
  egress proxy, so the About/contact fields on the page could not be
  read. This is a tooling gap, not a "checked and found nothing" — flag
  for Kevin or a future run with FB access to check the About tab
  directly.
- BBB — no profile for "Noska Lawncare" (only an unrelated "Noska
  Construction, LLC" in Browerville, MN, ~100 miles from Bemidji, and an
  unrelated Florida attorney named Frank Noska — neither is this
  business).
- MN Secretary of State business search / OpenCorporates — both blocked
  by this environment's egress proxy (`mblsportal.sos.mn.gov`,
  `opencorporates.com`), could not check registered-agent name directly.
  Flag for Kevin to check `sos.mn.gov` business search himself if he
  wants the LLC's registered agent name before calling.

One unverified lead surfaced and is being deliberately excluded from the
call card: a people-search/data-broker site (truthfinder.com) returned a
"Jennifer Noska" record. That site is not one of the approved sources
(reviews, GBP, Facebook, BBB, LLC registration) and gives no way to
confirm this person owns or works at Noska Lawncare LLC specifically —
using it would risk Kevin saying a stranger's name to a receptionist.
Not using it. If Kevin independently confirms this name (e.g. via the MN
SOS lookup above), it's worth having him relay it back for the file.

## Email

**NOT FOUND — gate fails.** Checked:
- No website exists (see below) so no contact/about page to pull from.
- Facebook page contact info — blocked, same egress issue as above.
- BBB — no listing.
- No Yelp listing found for this business (see below) — no email visible
  via Google's display of a Yelp page either.
- No other directory (Manta, Nextdoor, HomeAdvisor, Angi, Today's
  Homeowner) surfaced a listing with contact details for this specific
  business — those directories returned other Bemidji lawn-care
  companies instead.

No real domain is confirmed live for this business (see website-gap
section), so there's also no reasonable pattern-guess address to offer —
a guess would have nothing to point to as "this domain is confirmed
real and active." Not fabricating one.

**Per the required-email gate, this prospect stays at `stage: found`.**

## Website

No website. Confirmed, not a Facebook-search miss — see verification
below.

## Website-gap verification (the primary check for this prospect)

**Rupika's claim — CONFIRMED. No dedicated website exists for Noska
Lawncare LLC.**

What was checked:
1. **Direct domain guess:** `https://noskalawncare.com` — DNS lookup
   failed outright (`ENOTFOUND`), meaning no domain is even registered
   at that address, not just "site down." Tried this as the single most
   likely domain variant for the business name.
2. **Targeted Google searches**, three separate queries: `Noska Lawncare
   Bemidji MN website`, `"Noska Lawncare" Bemidji`, `"Noska Lawncare"
   Bemidji owner`. All three returned the same single real hit across
   every run — the Facebook page — with no dedicated domain anywhere in
   the result set.
3. **Comparison to the competitive set Rupika flagged:** the same
   searches surfaced T&K Outdoors (tkoutdoors.com), Bemidji Lawn Service
   (bemidjilawnservice.com), MJ's All Seasons (mjsallseasons.com), TG
   Sales & Services, Sunshine Lawn & Landscape, JH Lawn Solutions, and
   Northern LawnworX — all with real, working domains, all coming up
   ahead of or alongside Noska in the same searches. This confirms the
   "gap" framing: it's not that Bemidji lawn-care businesses generally
   lack sites, it's specifically this one.
4. **No listing on directory aggregators** (HomeAdvisor's Bemidji
   lawn-and-garden category page, Angi's Bemidji lawn-care list,
   Today's Homeowner's "9 Best Lawn Care in Bemidji" list) mentions
   Noska Lawncare at all — those pages list only the competitors named
   above. Consistent with a business that has no discoverable web
   footprint beyond Facebook.
5. **No Yelp listing found.** Searched `"Noska Lawncare" yelp reviews`
   and `"Noska Lawncare" Google reviews` — neither surfaced a Yelp or
   Google Business Profile page for this business in Google's own
   results (per the never-scrape-Yelp-directly rule, this was checked
   only via what Google's search results display, not by opening Yelp).
   Can't rule out a GBP/Yelp listing existing but not being surfaced by
   these queries, but multiple angles of search turned up nothing.

**Conclusion:** the gap is real. This is a legitimate `track: website`
prospect on the merits — the pitch hook in the call card above is
grounded in a confirmed absence, not a guess.

## Ad activity / response-time

n/a — website track.

## Bottom line for Kevin

Website-gap confirmed (advance-worthy on that gate alone), but the
required email gate fails — no discoverable email anywhere this pass —
so per the enrichment rules this stays at `stage: found` rather than
`enriched`. Name also came up empty through approved sources. Two of the
three blocked checks (Facebook About tab, MN SOS registered-agent
lookup) are environment/tooling gaps rather than dead ends — worth a
retry if egress access to `facebook.com`, `sos.mn.gov`, or
`opencorporates.com` opens up, since either could plausibly surface both
a name and an email in one shot.
