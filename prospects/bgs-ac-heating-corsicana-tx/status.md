---
stage: sent
track: website
quote_stage: none
---

## Links
- maps: https://www.google.com/maps/search/BGS+AC+%26+Heating+LLC+Corsicana+TX

## Log

- 2026-08-30 (Rupika): found, added to pipeline. BGS AC & Heating LLC is a
  small HVAC outfit at 108 S. Beaton St. Suite C2, Corsicana, TX 75110 —
  no dedicated website found anywhere. Checked BBB, Angi, YellowPages-style
  directories, general Google search for name+website, and a Yelp
  site-search (BGS doesn't appear on Yelp's Corsicana HVAC results at all).
  Only real presence is Facebook (facebook.com/BGSACANDHEATING/), which
  lists a Gmail contact (bgac812@gmail.com), not a company domain —
  Facebook-only subtype. Two neighboring Corsicana HVAC companies checked
  in the same pass (Hood Service Company, Robinson Taylor Industries) both
  had real dedicated websites, confirming this isn't just an indexing gap.
  Owner not yet found — tried TX SOS/registered-agent search and TDLR
  TACLA/TACLB license lookup (name-only, no hit); the Gmail address itself
  isn't a personal-name pattern, unhelpful as a naming signal. Flagged for
  Montague: try TDLR's live license-search form directly (I could only
  reach indirect web results, not the database itself). Collision risk
  LOW — "BGS AC & Heating" is a distinctive compound name; only other "BGS"
  hits found were unrelated entities (British Geological Survey, Beta
  Gamma Sigma) and a differently-named dealer listing ("BG's Climate
  Control Service") — easily distinguished. No Yelp page exists for this
  business, so the `yelp:` line was correctly omitted rather than invented.
  Operating status: no closed/defunct signal found, but the only source
  confirming it's active is its own Facebook page — Montague should
  live-check (call or Playwright screenshot) before relying on it.
- 2026-08-30 (Montague): website-gap reconfirmed decisively — 2 guessed
  domains resolve but are registrar-parking pages (not live sites), 4
  more NXDOMAIN outright; a Yelp site-search confirms zero Yelp presence
  for this business at all. Owner name still NOT FOUND — TDLR's ACR
  license search and TX Comptroller's Taxable Entity Search (the two
  most likely name sources) are both form-based/interactive tools this
  environment's egress proxy blocks and search engines don't index;
  needs a live lookup from an unblocked session. Email
  (bgac812@gmail.com) and phone ((469) 478-9740) both confirmed via the
  business's own Facebook page — **email gate PASSED**, single-source
  (Facebook-derived via search index, not independently cross-verified
  on a second listing) but directly-listed, not guessed. Advanced to
  `enriched`. See enrichment.md.
- 2026-08-30 (Elly): drafted. Website track. Angle is the two different sales
  inside HVAC: a service call is a word-of-mouth purchase a Facebook page
  genuinely covers, a full system changeout is comparison shopped at a kitchen
  table in the evening and he is effectively absent from that half. Team
  greeting, since no owner name exists anywhere (TDLR and TX Comptroller both
  egress-blocked for both agents; a live lookup would likely close it and
  upgrade the email at the same time). Deliberately not the findability
  argument, seventh run running on this track, and the 84% BrightLocal stat is
  omitted again as a considered override. Runner-up dropped: the (469)
  Dallas-prefix number on a 903 business, same "your listing misrepresents you"
  mechanism as Powerhouse 08-27 and All Tech's runner-up 08-28. Email is
  directly listed but single-source (Facebook via search index); a glance at the
  Facebook About tab would confirm it. Live-operating status still rests only on
  that Facebook page. See outreach.md.
- 2026-08-31 (Kevin, via KIREEK): sent to bgac812@gmail.com.
