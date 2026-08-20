```
CALL CARD
  Ask for:   NO NAME FOUND — checked FB, Birdeye, AL Secretary of State,
             BBB (a review names "Rafael and Coraly" as on-site workers,
             neither confirmed as owner — do not guess between them)
  Phone:     (334) 344-9061
  Response:  n/a (website track)
  Hook:      "You've got 4.7 stars and real reviews, but no actual
              website — just Facebook and directory listings. That's
              leads going to whoever else shows up when someone searches
              instead of scrolling Facebook."
```

## Links
- maps: https://www.google.com/maps/search/Boricuas+Painting+Dothan+AL

## Company summary

Boricuas Painting LLC — residential painting contractor at 209 May St,
Dothan, AL 36303 (also appears under a Daleville, AL address — 114
Patricia Ln — on HomeAdvisor, likely a service-area listing rather than a
second office). Offers interior/exterior painting, house remodeling, and
light carpentry; claims 10+ years of experience. Reputation is solid:
4.7 stars/15 reviews on Birdeye, reviews describing fast turnaround,
efficient work, quality prep. New/unreviewed on Angi and HomeAdvisor. No
BBB profile found. No red flags in available review snippets.

Method note: direct WebFetch to facebook.com, birdeye.com,
cca.dothan.com, arc-sos.state.al.us, and boricuaspaintingllc.com was
blocked by this environment's egress proxy in every case — everything
below is search-snippet-sourced only, not page-rendered.

## Best contact

**NOT FOUND / AMBIGUOUS.** Checked the Facebook page (fetch blocked, no
About-section detail surfaced in snippets), the Birdeye listing (fetch
blocked, no owner field in snippets), the Alabama Secretary of State
business entity search (fetch blocked at both arc-sos.state.al.us and
sos.alabama.gov; general searches for "Boricuas Painting LLC" +
registered agent/organizer returned only generic SOS how-to pages, no
actual entity record), and BBB (no listing exists for this business). The
only lead is a review naming "Rafael and Coraly" as the people who did
the on-site work ("Rafael and Coraly worked early and efficiently...
exceptional prep work") — consistent with Rupika's original brief, but
nothing identifies either as the LLC's owner/organizer. Left blank per
the placeholder rule rather than guessing which one to use as a merge
tag.

## Email

**NOT FOUND.** Checked Facebook page/About (fetch blocked, no email in
any search snippet), Birdeye listing (fetch blocked, no email surfaced —
one search summary incorrectly offered "profiles@birdeye.com," which is
Birdeye's own platform address, not the business's — disregarded), Manta
listing, HomeAdvisor, Dothan Area Chamber of Commerce member listing
(fetch blocked), BBB (no listing found). No confirmed domain exists to
guess a pattern from. **Email gate: FAILED.**

## Website-gap verification

Confirmed no independently-owned functioning website found, with one
flag worth Kevin/Elly's attention. Checked: direct domain guess
"boricuaspainting.com" (no evidence of existence), "boricuaspaintingllc.com"
(see flag below), a `site:boricuaspaintingllc.com` search (zero indexed
pages returned — none of the actual result links were ever on that
domain), general web searches for the company name (only directory/
aggregator results: Birdeye, Facebook, Manta, HomeAdvisor, Chamber of
Commerce, toptenpainters.com — no owned site). Direct WebFetch to
boricuaspaintingllc.com was blocked by the egress proxy, so it couldn't
be confirmed/denied by loading it directly.

**Flag:** several WebSearch result summaries flatly asserted "their
website is boricuaspaintingllc.com," but this domain never once appeared
as an actual clickable/cited source link across ~10 queries, including
the `site:` search that returned zero pages from it. This has the
signature of the search summarizer pattern-matching a plausible domain
from the company name rather than finding real evidence of it — treat
"boricuaspaintingllc.com" as unconfirmed, not as a found website.
Recommend a direct browser check of that URL outside this environment if
precision matters before it's referenced in a draft; proceeding on
Rupika's original "no website" assumption for now, flagged in outreach as
something to sanity-check.

**Website-gap gate: reasonably confirmed** (no evidence of a real site
found through any channel), with the domain-guess caveat above noted for
whoever finalizes the draft.

## Other notes

No LinkedIn presence found for the business or an identifiable owner. No
red flags on reputation (no complaints, no BBB alerts — absence of a BBB
profile isn't itself negative for a small local painter).

## Stage decision

Website-gap gate: reasonably confirmed, not contradicted. **Email gate:
FAILED** — no address found anywhere, no domain to ground a guess in.
Owner name also unresolved (not a gate on its own, but compounds the
reachability problem — outreach would need to go by phone or Facebook).
Per the required-email-gate rule, holding at `stage: found` rather than
advancing.
