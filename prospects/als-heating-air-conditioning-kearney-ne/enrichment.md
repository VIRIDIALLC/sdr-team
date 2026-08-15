```
CALL CARD
  Ask for:   Don Trew (BBB profile — medium-high confidence, single
             underlying source relayed through search snippets)
  Phone:     (308) 237-3062
  Response:  n/a (website track)
  Hook:      "You've got 40+ years in Kearney and real reviews, but no
              actual website — just directory listings. That's leads
              going to whoever else shows up when someone searches
              instead of scrolling Facebook."
```

## Company summary

Al's Heating and Air Conditioning — family-owned residential/light-
commercial HVAC contractor in Kearney, NE. Business started 1/1/1983,
changed ownership 1/1/1994, incorporated 5/14/1999 — roughly 43 years
operating under some form of this name. Services: furnace repair, A/C
repair, sheet metal work, Goodman equipment installs, retrofits for new
construction/remodels. Licensed and active per BuildZoom (score 90,
license #s 76353-26 and 28298-25). Presence spread across 15+ directory/
aggregator sites (Yelp, BBB, Facebook, Nextdoor, YellowPages, SuperPages,
Birdeye [25 reviews], Chamber of Commerce, BuildZoom, Bluebook, Manta,
homeyou) with no evidence of any coordinated web/SEO strategy — pure
organic directory sprawl, consistent with the no-website pattern. No red
flags found (no BBB accreditation, but no complaint pattern in search
snippets — BBB page itself couldn't be read directly, see caveat below).

**Address discrepancy worth fixing:** Rupika's brief says "5308 E
Saddlehorse Dr." Multiple independent sources (Yelp, SuperPages,
YellowPages, pr.business) consistently say "5308 **W** Saddlehorse Dr,
Kearney, NE 68847." Trusting the directory consensus (W) over the single
unverified brief — worth a map-lookup confirmation before it goes into
any draft.

## Best contact

**Don Trew** — sourced from a BBB Business Profile snippet (WebSearch
only; direct WebFetch of bbb.org was blocked by this environment's egress
proxy, so this is a search-snippet citation, not a page read directly).
Appeared consistently across two independent search queries with matching
business details (start date 1/1/1983, ownership change 1/1/1994,
incorporation 5/14/1999), which raises confidence — but it's still a
single underlying source (BBB) relayed through search snippets, not
independently corroborated elsewhere. Confidence: medium-high, not fully
verified firsthand.

## Email

**NOT FOUND.** Checked (via search snippets, direct fetch blocked by the
egress proxy for all of these): BBB profile, Facebook page About section,
YellowPages, SuperPages, Birdeye, Nextdoor, Chamber of Commerce
(chambermaster.kearneycoc.org). None expose an email address in what's
indexed/snippeted — one aggregator explicitly returned "Email: N/A."
Since there's no confirmed owned domain, declining to guess a pattern —
there's nothing to ground a guess in. **Email gate: FAILED.**

## Website-gap verification

**Confirmed — no independent custom website, matches Rupika's brief.**
Checked domain guesses alsheatingandair.com and alsheatingac.com — both
DNS-fail/ENOTFOUND, don't resolve. A `site:alsheatingandair.com` search
returned only a generic, unrelated "Contact/About" template snippet with
no Kearney/NE/phone-number match — almost certainly a *different*
"Al's Heating & Air" business elsewhere (the name is common nationally;
also surfaced alsairandheating.com, alsacheating.com, alsheatandairok.com,
and unrelated "Al's Heating & Air" businesses in White Plains NY and
Flushing NY). No domain-squat/lead-gen trap bearing this business's real
phone number or address was found.

One nuance: a Google-Business-Profile auto-generated microsite exists at
`als-heating-air-conditioning.business.site` — Google's free auto-built
page from GBP data (couldn't fetch directly to confirm content, but the
URL pattern is unambiguously Google's business.site template, not a
custom site). Not a real owned website — no independent SEO value — but
worth knowing in case a prospect points to it and says "we have a
website."

**Website-gap gate: CONFIRMED, Rupika's guess was correct.**

## Other notes

- Egress limitation: this environment's proxy blocked direct WebFetch to
  bbb.org, facebook.com, yellowpages.com, birdeye.com, and business.site
  — all findings from those sources are search-snippet-sourced, not
  page-rendered. Treat the owner name and business.site detail as
  "needs a human eyeball" rather than fully closed.
- Reputation signals: Birdeye page title shows 25 reviews (rating not
  visible in snippet); no complaint pattern or negative signal surfaced
  anywhere.

## Stage decision

Website-gap gate: PASSED (confirmed no real site). **Email gate: FAILED**
— no address found anywhere, and no domain exists to ground a guess in.
Per the required-email-gate rule, holding at `stage: found` rather than
advancing — this is a real, established, otherwise-good prospect, just
not currently reachable by email.
