# Standing prospecting criteria

Source of truth for what Rupika searches for each run. Two tracks — every
prospect gets tagged with which one it's for (see `_template/status.md`).

## FLOOD GATES (Kevin's ruling, 2026-09-03) — every major metro, big batches

Kevin, 2026-09-03, after a zero-draft day: *"All metro areas big cities. Open
the flood gates."* This supersedes the Phoenix/LA-only restriction below for
the package track. Phoenix and LA stay first in the rotation because he can
drive to them, but they read as picked over with the search technique in
use (110 queries on 09-03 for 2 hits), so the hunt is now national:

- **Markets (package track):** every major US city. Kevin's own list, in
  his order, is the first rotation: **Los Angeles, San Francisco, San
  Diego, Portland, Seattle, Oakland, Phoenix, Denver, Austin, Dallas.**
  Then every other metro of roughly 500k+ (Inland Empire, Las Vegas,
  Tucson, Salt Lake, Sacramento, San Jose, Houston, San Antonio,
  Albuquerque, Oklahoma City, Tulsa, Kansas City, Minneapolis, Chicago,
  Detroit, Columbus, Indianapolis, Nashville, Atlanta, Charlotte, Raleigh,
  Tampa, Orlando, Jacksonville, Miami, DC, Philadelphia, New York, Boston,
  and the rest). Work 3 to 4 metros per run, log in `memory/rupika.md`
  which metro+vertical combos you covered, and move on next run. Never
  stall on a dry metro.
- **Batch size per run: 12 package + 3 website.** "Small batch" is retired
  for Rupika. She is search-only, so volume costs nothing but run time.
  Every prospect still needs a named pain signal and a reachable channel
  (below); volume is not a license to lower the bar, it is a reason to
  search more places.
- **Vertical spread:** cover at least 4 verticals per run so one dry
  vertical in one metro doesn't zero the batch.

## PRIORITY (2026-08-09, Kevin): actual clients first — Phoenix + L.A. (markets superseded 09-03, see above)

The #1 motion right now is **actual (recurring) clients for the Complete System** —
home-service owners who visibly have the pain (missed calls, slow follow-up, no system,
lost revenue). Run this as the **primary** track using the **icp-pain-prospecting** skill and
the **`_icp-home-service.md`** dossier. **Target markets: Phoenix and Los Angeles metros** —
NOT nationwide (the US-wide locations in the tracks below are superseded for the primary hunt).
Keep a **mix**: the web-design (one-time) track still runs as a secondary lane, but weight the
volume toward actual Complete System clients, not one-time web leads. Every prospect needs a
named pain signal (see the skill) — no signal, not a prospect yet.

## Batch weighting and reachability (Kevin's ruling, 2026-09-02)

- **Per run: four `package` prospects for every one `website`.** Runs had
  drifted to three website for every two package, the reverse of the
  priority above. `ads` stays opportunistic (only when you happen to see a
  clean fit), not a quota.
- **A package prospect must have a reachable channel written into
  `brief.md` at sourcing time**: a real domain, OR a listed email, OR a
  confirmed phone number plus the owner's name. Say which. A prospect with
  none of the three is not a prospect yet. Reason: 88 prospects were stuck
  at `found` on 2026-09-02 because Montague's email gate failed, and most of
  them had no domain to find an email on. Sourcing for reachability is
  cheaper than enriching into a wall.
- **Phoenix and LA first in the rotation, then every other major metro**
  (flood-gates ruling above). Small markets stay legitimate for the website
  track.

## Track: package

Leads for The Complete System — the all-in-one ($1,197/mo). See _offer.md and the website.

- **Verticals:** Home and field service businesses — HVAC, plumbing,
  electrical, roofing, restoration, pest control, landscaping, painting.
- **Segments:** (1) SMB, 1 to 4 locations, owner-operated or owner plus
  one ops person, the owner is often still doing sales/ops themselves.
  (2) Larger multi-location operators. (Mirrors KIREEK's `PROSPECTING_ICP`
  in `voice-agent/backend/main.py` — keep these in sync if that changes.)
- **Location:** United States, nationwide — no state/metro restriction.
- **High-intent sourcing technique (added 2026-08-04, Kevin's idea):**
  search Google for `[niche] yelp advertisers in [market]`. Either the
  first few results are the businesses' own Yelp pages, or Google's AI
  overview gives a short summary — either way, look specifically for a
  stated response time to leads. A response time over 1 hour is the
  signal to act on: they're already paying Yelp to generate leads but
  responding slowly enough to be losing them, which is exactly the pain
  The Complete System solves. Note the observed
  response time in `brief.md`'s "Response-time signal" field (see
  template) — unverified guess convention, same as the other tracks'
  fields, Montague confirms before it advances past `found`. Google's
  results/AI overview will often surface the business's own website
  directly — capture that URL in `brief.md`'s "Source" field so Montague
  doesn't have to re-find it during enrichment.
- **No-website subset — routing decision (added 2026-08-04):** some of
  these Yelp advertisers won't have a real website. They stay
  `track: package` and go through the normal automations pitch — do NOT
  route them to `track: website` first. Kevin's real proof point (S&P
  Lawn Care) shows the automations offer works entirely off Yelp's own
  lead flow with no website involved at all, so a missing site doesn't
  weaken this pitch. Montague still notes the website-gap (reusing the
  "Website status" field below) purely as a **future upsell flag** —
  once enrolled, it becomes a real `no-website` tag on the GHL contact
  (see `montague-enrichment.md`) so a website-upsell campaign can target
  that segment later, once they're already a paying automations client.
  Not a routing gate, not built as an active campaign yet.

## Track: website

Leads for the "build you a website" offer. Same verticals as the package
track, filtered further by web presence.

- **Verticals:** Same as package track above.
- **Website-gap filter:** No live website at all (social/Google Business
  Profile only counts as "no website"), OR a website that's clearly
  outdated, broken, or not mobile-friendly. Rupika notes what she
  observed in `brief.md`'s "Website status" field — Montague verifies and
  documents it properly before the prospect advances past `stage: found`.
- **Location:** United States, nationwide — no state/metro restriction.

## Track: ads

Leads for the ad-management retainer (10% of ad spend, run today by
Kevin's AE) — added 2026-08-04, Kevin's own ask to get an outbound lane
going for this business alongside the package/website tracks. See
`_ads-retainer-facts.md` for the real numbers and angle Elly pitches
from.

- **Verticals:** Same as package track above.
- **Ad-activity filter:** Established business with a real, active Yelp
  presence (meaningful review count — they're already listed where this
  pitch lands hardest) but no visible sign of currently running Yelp ads
  (no "sponsored"/ad badge on their Yelp page). Rupika notes what she
  observed in `brief.md`'s "Ad activity status" field — same
  unverified-guess convention as the website track's "Website status"
  field, not a confirmed fact yet. Montague verifies it properly before
  the prospect advances past `stage: found` (see the ads-track
  verification gate in `montague-enrichment.md`).
- **Location:** United States, nationwide — no state/metro restriction
  (remote ad management, no on-site requirement).
