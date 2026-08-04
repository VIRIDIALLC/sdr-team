# Standing prospecting criteria

Source of truth for what Rupika searches for each run. Two tracks — every
prospect gets tagged with which one it's for (see `_template/status.md`).

## Track: package

Leads for the 3-tiered packages.

- **Verticals:** Home and field service businesses — HVAC, plumbing,
  electrical, roofing, restoration, pest control, landscaping, painting.
- **Segments:** (1) SMB, 1 to 4 locations, owner-operated or owner plus
  one ops person, the owner is often still doing sales/ops themselves.
  (2) Larger multi-location operators. (Mirrors KIREEK's `PROSPECTING_ICP`
  in `voice-agent/backend/main.py` — keep these in sync if that changes.)
- **Location:** United States, nationwide — no state/metro restriction.

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
