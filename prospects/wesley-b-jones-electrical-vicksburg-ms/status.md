---
stage: found
track: website
quote_stage: none
---

## Links
- yelp: https://www.yelp.com/biz/jones-wesley-b-electrical-vicksburg
- maps: https://www.google.com/maps/search/Wesley+B+Jones+Electrical+Inc+Vicksburg+MS

## Log

- 2026-08-30 (Rupika): found, added to pipeline. Wesley B. Jones Electrical,
  Inc. (d/b/a Wesley B Jones Electric Co.), 6611 Paxton Rd, Vicksburg, MS
  39180 — no dedicated website found despite an unusually extensive online
  footprint. Checked BBB (A+ accredited since 2004), Yelp, Angi (5.0
  rating), Yellow Pages, Nextdoor, BuildZoom, TheBlueBook, chamber
  directory, GovTribe/USAspending (also does federal contracting work),
  and Facebook — all third-party listings, none link to a company-owned
  domain. Guessed plausible domains (wesleybjoneselectrical.com,
  wbjoneselectric.com) directly — no matches. One BBB-sourced AI search
  summary claimed "Website: elhorn.com" — verified independently and this
  is FALSE, elhorn.com belongs to an unrelated water-treatment company in
  Mason, MI; flagging explicitly so nobody downstream trusts that stray
  line. Owner: Wesley B. Jones, President — high confidence, from BBB's
  licensed-business profile corroborated by a Mississippi State Board of
  Contractors license (#17422-MC, valid through 1/14/2027) attached to the
  same profile. Collision risk LOW-MEDIUM: "Jones" is a common surname but
  "Wesley B. Jones Electrical" plus the Vicksburg address/license number is
  specific enough — a name-only search outside Vicksburg/MS only surfaced
  this same business's own federal-contractor records, no distinct
  same-named entity found elsewhere. Operating status solid (BBB A+, active
  MS license through 2027, 5.0 Angi rating, no closed signal anywhere). One
  oddity flagged for Montague: one federal-contracting directory snippet
  described the company as "woman-owned, economically disadvantaged small
  business" — inconsistent with the owner name; could be a spouse/co-owner
  certification detail or a database quirk, not itself a red flag but worth
  a sanity check.
- 2026-08-30 (Montague): website-gap reconfirmed - 12 guessed domains all
  ENOTFOUND; one coincidental resolving domain (jones-electrical.com)
  checked and ruled out, nothing ties it to this specific Vicksburg
  business. The false "Website: elhorn.com" claim resurfaced on a second
  independent aggregator (Buzzfile, in addition to BBB's AI summary) -
  reconfirmed FALSE (unrelated Mason, MI company), now flagged twice so
  it doesn't get trusted downstream. Phone (601) 636-9591 reconfirmed;
  MS contractor license #17422-MC (exp. 1/14/2027) reconfirmed. Real
  texture: BBB-accredited since 2004 (22+ yrs), active federal contractor
  (CAGE 1UU37, ~$2.69M in federal obligations per USAspending), 5.0/5
  rating, no negative reviews found - a genuinely established,
  well-regarded, ~26-year business with zero web presence beyond
  directories, sharp fit for the pitch. **Email gate FAILED** - checked
  BBB, Facebook, federal contractor POC fields (GovTribe/USAspending/
  HigherGov), TheBlueBook, chamber directory; no email surfaced anywhere,
  and several of the most likely pages (BBB, TheBlueBook contacts,
  GovTribe) were egress-blocked to direct fetch this run, so absence in
  search isn't the same as confirmed absence-on-page - worth a retry if
  fetch access to those specific domains ever opens up. Held at `found`,
  phone-only reachable for now. See memory/montague.md.
