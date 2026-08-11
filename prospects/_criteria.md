# Standing prospecting criteria

Source of truth for what Rupika searches for each run. Two tracks — every
prospect gets tagged with which one it's for (see `_template/status.md`).

## PRIORITY (2026-08-09, Kevin): actual clients first — Phoenix + L.A.

The #1 motion right now is **actual (recurring) clients for the Complete System** —
home-service owners who visibly have the pain (missed calls, slow follow-up, no system,
lost revenue). Run this as the **primary** track using the **icp-pain-prospecting** skill and
the **`_icp-home-service.md`** dossier. **Target markets: Phoenix and Los Angeles metros** —
NOT nationwide (the US-wide locations in the tracks below are superseded for the primary hunt).
Keep a **mix**: the web-design (one-time) track still runs as a secondary lane, but weight the
volume toward actual Complete System clients, not one-time web leads. Every prospect needs a
named pain signal (see the skill) — no signal, not a prospect yet.

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
