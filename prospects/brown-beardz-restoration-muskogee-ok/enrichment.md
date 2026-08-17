## Company summary

Brown Beardz Restoration — water damage / mold remediation, Muskogee, OK
(with a mention specifically tying them to Fort Gibson, OK too — a
Facebook community-group post calls them "Fort Gibson's Brown Beardz
Restoration Service"). No independently-verifiable review content found —
Yelp was not opened directly (per policy) and Google's Yelp-search-snippet
for Muskogee-area restoration companies surfaced a different business, not
this one. The one "credibility" marker found — a qualitybusinessawards.com
"top 1% of American businesses" badge — is a paid/self-submitted SEO
directory-listicle pattern (the same site runs near-identical "Best X in Y"
pages for many towns), not real third-party evidence. Don't cite it to the
prospect as if it's a real award.

## Website-gap verification — CONFIRMED

Three plausible guessed domains (brownbeardzrestoration.com,
www.brownbeardzrestoration.net, brownbeardzconstruction.com) all failed DNS
resolution outright. A fourth guess hit this environment's egress block
rather than DNS, so it's inconclusive on its own, but combined with the
three clean failures and the search evidence below it doesn't change the
picture. Every search for the business (name, "website," "phone email
contact") returns only their Facebook page and the listicle-badge site
above — never an owned domain. Matches Rupika's original finding.

## Best contact — NOT FOUND

No owner name surfaced anywhere. Checked: Google searches for "owner,"
"yelp reviews," "BBB," "LLC Oklahoma" combined with the business name — all
empty on a name. No BBB profile found under this name at all (likely not
BBB-listed). Facebook About section could not be opened directly (blocked
by this environment's egress proxy). Oklahoma Secretary of State's entity
search is also blocked from this environment.

**One real, unexplored lead:** Bizapedia lists an entity called "BROWN
BEARDZ CONSTRUCTION LLC" in Fort Gibson, OK — same surname/branding, same
small town, adjacent trade (construction vs. restoration). Could be the
same family running both businesses, or a rebrand/pivot, or unrelated. The
Bizapedia page itself (which would likely list a registered agent/officer
name) was blocked from direct fetch this run — worth a follow-up pass with
working access, since it's the single most promising remaining lead for a
name.

## Email — GATE FAILED, held at `found`

No email surfaced anywhere (directories, Facebook snippets, BBB, targeted
"@gmail.com"/"@yahoo.com" searches). Since website-gap is confirmed above,
there's no domain to build a guessed pattern from. A personal Gmail/Yahoo
address is plausible for a small owner-operator but nothing surfaced one —
guessing a personal address would be fabrication, not inference, so none is
being proposed.

**Next step for a follow-up pass:** the Facebook page almost certainly has
the owner's name and a phone number — this session's egress proxy blocked
direct access to facebook.com. Someone with working Facebook access (or a
phone call) would likely close both the name and email gaps here.

## Gate outcome

- Website-gap gate: **PASS** (DNS failures + convergent search absence).
- Contact-name gate: not found — real effort made, genuinely no signal
  plus an environment access limitation on the one promising lead
  (Bizapedia).
- Email gate: **FAILED** — no domain to guess from, nothing found
  directly.

Held at `stage: found`, not advanced.
