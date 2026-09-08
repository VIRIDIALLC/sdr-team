# Kevin's hand-picked Yelp prospects (2026-08-11) — PRIORITY BATCH

Source: `yelp-handpicked-2026-08-11.csv` — **273** businesses Kevin hand-selected over time:
current/past **Yelp advertisers with POOR response times but HIGH lead volume (100+ recent
Request-A-Quotes)**. This is the exact ICP the lookalike audience was built on. Kevin needs
clients NOW (one offer + easy onboarding), so these are the top priority.

Columns: Category, Business Name, Owner Name, Response Time, Phone, Website, Yelp URL,
Purchase Likelihood (1-5), Likelihood Reasoning, EMAIL, SUBJECT.

## The job — Montague leads, then Elly (work in batches of ~25, highest-likelihood first)
1. **MONTAGUE:** go through the list. PRIORITIZE **Purchase Likelihood 4–5** + **slow
   Response Time** (the slow-response signal is the hook). For each, build a prospect
   folder (owner name, phone, website, Yelp URL are already provided). If `EMAIL` is blank
   and a `Website` exists, find the real contact email from the site.
   **Yelp blocks scraping — do NOT scrape the Yelp URLs.** Use the CSV data + the business
   website only. Kevin already verified RAQ volume when hand-picking, so trust the list.
2. **ELLY:** draft outreach for the qualified ones. Pitch **The Complete System** per
   `_offer.md` + viridiaanalytics.com — NEVER the retired "Business Essentials / Never Miss
   a Lead" names. Lead with the response-time / missed-lead pain. DRAFT ONLY — Kevin
   approves before anything sends.

Commit prospects as you go so they show up for Kevin's review.

## Re-score 2026-09-08 — `RESCORE-2026-09-08.csv`

Kevin found rows on the call list that are not current advertisers and have
only a handful of recent requests. The 2026-08-11 CSV never recorded advertiser
status or request volume; its 1–5 score measured "likelihood of adopting
analytics." So the list was re-scored on what IS on file, with two blank columns
for the two things only Kevin's Yelp view can answer:

- `Score v2` (0–110): response pain (slower = higher, the hook), reachability
  (phone / email / website), GHL state (sequence finished > never emailed > not
  loaded > running), core-trade fit, minus the CSV's own negatives.
- 274 rows collapsed to 174 unique businesses (the CSV carried duplicates with
  different response times; the strongest row was kept, contact fields merged).
- `Advertiser? (Kevin)`, `Recent RAQs (Kevin)`, `Verdict (keep/drop)`: fill in
  from the Yelp page in `Verify rank` order. Do not scrape Yelp for these.
- A `drop` verdict means: close the GHL opportunity and mark the prospect
  folder `stage: closed` with the reason.
