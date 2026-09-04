# CALL-READY — email gate failed, phone is confirmed, Kevin can dial today

Rendered by Montague each run from every `prospects/*/status.md` carrying
`call_ready: yes` (see `team/montague-enrichment.md`, "Email-gate hold with
a confirmed phone"). One rolling file, never dated copies. `CALL-LIST.md`
is a different list (email sequence finished); this one is prospects that
never had an email to begin with. Say "prep me for a call with <name>" for
the pre-call card.

**Last regenerated: 2026-09-04 (Montague), first real verified render.** The
2026-09-02 seed render (53 rows, regex-built from prose, not Montague's
two-source check) has been fully retired — every row below is a real
`call_ready: yes` flag on that prospect's own `status.md`, set after an
actual two-source phone check this run or a prior one. This is a big drop
from 53 rows to 3: that's expected and correct, not a data loss — the seed
was never verified to begin with, and the standing "sweep a few existing
holds each run" practice hadn't produced any real verified rows since
2026-09-02 until today. It will grow gradually as more holds get swept.

**Note on the seed's dropped rows:** most of the 53 seed rows are still real,
untouched `found`-stage prospects sitting in `prospects/*/status.md` — they
just don't carry a verified `call_ready: yes` yet. One seed row,
`apple-plumbing-scottsdale-az`, should NOT be re-added when swept: it's a
documented dead-end (acquired by Day & Night Air Conditioning 7/31/2025, no
longer an independent solo-operator prospect) — see its own status.md.

Order: package track in Phoenix/LA metro, then package elsewhere, then
website/ads.

| Prospect | Track | Ask for | Phone | Source | Hook |
|---|---|---|---|---|---|
| camelback-hardscapes-scottsdale-az | package | Jake (Jacob Fowler) | (480) 600-8011 | Yelp + bizprofile.net | no verified hook — response-time signal actually contradicted by reviews calling them "very responsive"; lead with no-website/no-email instead |
| all-service-painting-portland-or | package | Allen | (503) 251-5944 | Angi + Yahoo Local | A couple of past customers have said they had to chase you down for updates and never heard back — after 30 years in business, I don't think that's who you actually are |
| edward-romero-roofing-hayward-ca | package | Edward (or "Eddie," his grandson) | (510) 581-8626 | BBB + BuildZoom | A tenant was told to expect a call back with roof-inspection findings and it never came — a full month later, still nothing |

_3 verified call-ready rows as of 2026-09-04. The prior 53-row seed is
retired — see note above._
