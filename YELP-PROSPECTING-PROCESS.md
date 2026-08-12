# Yelp advertiser prospecting — the locked-in process

**Written 2026-08-12.** How Viridia finds, enriches, and works slow-response Yelp
advertisers. Read this before changing the pipeline.

---

## 1. The target: what we're actually looking for

**The golden signal is HIGH response rate + SLOW response time.**

| Signal | Why it matters |
|---|---|
| **High response rate (90-100%)** | The owner CARES and is already trying. He will actually use the system. Predicts RETENTION — the opposite of Kevin's churn profile. |
| **Slow response time (hours, not minutes)** | He's losing anyway and already feels it. The pain is self-evident. Predicts CONVERSION. |

Why the other combinations are worse:
- **Low response rate** → doesn't care → buys and ghosts → churn. **Avoid.**
- **Fast response time** → doesn't need us.
- Sweet spot is precisely: **tries hard, still loses the race.**

The mechanism that makes it undeniable: on Yelp Request-a-Quote the customer
contacts 3-5 businesses at once and hires whoever answers first. A 5-hour
responder is almost never first — he does 100% of the work for a fraction of the
reward.

Supporting signals: high RAQ volume ("171 locals recently requested a quote"),
high-ticket services (irrigation, installs, tree removal, fencing — not $80
mow-and-blow), long owner-operator hours, lean systems (gmail address, no CRM).

**Reference example:** EAP Landscaping (Ernesto, Houston) — 100% response rate,
5 hours, 171 quote requests. That is the profile.

---

## 2. Where the data can and cannot come from

**There is no API that returns Yelp response time for a prospect.** Checked
2026-08-12:

| Source | Gives us | Verdict |
|---|---|---|
| Yelp Fusion API (public) | name, URL, phone, categories, rating, review count | No response time, no ad status |
| Yelp Reporting API (Partner) | leads, calls, clicks, spend | **Our own CLIENTS only** — not prospects |
| Scraping Yelp pages | everything | **Prohibited.** Against their ToS. Do not do this. |
| Google search results about a Yelp listing | whatever Google's snippet surfaces | **This is the compliant method** |

**So the response-time signal has to be observed, not queried.**

A human browsing Yelp normally is not scraping — Kevin building a list by hand
is completely fine, and is where the current 274-row list came from. What agents
must never do is fetch/browse Yelp pages programmatically.

### The practical split

- **Signal capture (response time, response rate, RAQ count):** human. Kevin or a
  VA, browsing normally, recording what's on the page.
- **Everything downstream (contact, email, verification, drafting):** agents.

This is the honest division. Don't ask an agent to produce response-time data it
cannot legitimately obtain — it will either guess or stall.

---

## 3. What a prospect needs before it can be worked

A row is only useful if it has **the business name plus at least one of**:

1. **Phone** → Kevin cold-calls it (highest converting path right now)
2. **Email** → goes into the GHL "Viridia Yelp Prospecting" sequence
3. **Yelp URL** → lets an agent verify and enrich the rest

Without any of those it's dead weight. On the 2026-08-12 list, 174 unique
businesses produced 66 callable (phone) and only ~20 emailable — the email gap is
the real bottleneck, not the pipeline.

**Names are optional. Placeholders are forbidden.** See
`team/montague-enrichment.md` — "Unknown"/"Not specified" must be blanked, never
passed through, because GHL merges the first name into the real email a real
person reads.

---

## 4. Montague's enrichment parameters (what he actually does)

Full rules in `team/montague-enrichment.md`. Summary:

**Method — public web research only:**
- The business's own site (contact/about pages)
- Google + Google Business Profile
- Facebook page About section
- Customer reviews (owners replying often sign their name; reviewers name them)
- LLC / AZ Corporation Commission filings, ROC licensing, BBB

**Yelp rule:** never fetch a Yelp page directly. Search Google for the business +
"yelp" and work from what Google's own results display.

**Gates:**
- **Email = hard gate.** A prospect without a real email doesn't advance to Elly.
- **Name = not a gate.** Missing is fine and expected for this ICP; a placeholder
  is not.
- **Never invent an email.** A wrong address burns the prospect and hurts sender
  reputation.

**Not used:** Apollo. Public web research is the enrichment method.

**Throughput — set expectations honestly:** enrichment is per-business manual
research, not a bulk lookup. A scheduled run works a batch, not a whole list.
The 2026-08-12 run covered ~38 of 174 businesses (~22%). Assume tens per run,
not hundreds, and dispatch repeatedly rather than expecting one pass to finish.

**Output goes in the CSV.** Enrichment written only into per-prospect folders is
invisible and unusable — that happened on 2026-08-11 and 41 emails sat stranded
until they were merged by hand. One row per unique business, in the sheet.

---

## 5. The end-to-end flow

```
Kevin browses Yelp, captures the signal      (human — response time/rate, RAQ)
        |
        v
Raw CSV                                       (business, phone, Yelp URL, likelihood)
        |
        v
DEDUPE                                        (274 rows -> 174 unique; always do this)
        |
        v
Montague enriches                             (email + real name, public web only)
        |
        +--> has phone  -> ICP-ranked CALL LIST -> Kevin dials
        |
        +--> has email  -> GHL "Viridia Yelp Prospecting"
                              Yelp Prospect
                                -> Email Sequence Running
                                -> Engaged / Booked Call / No Response
```

**Ranking for the call list:** likelihood 4-5 first, then SLOWEST response time
first — the slowest responders are the easiest pitches ("I called twice, both
went to voicemail; that's the leak").

**Sanitize names on the way into GHL.** Any placeholder must become an empty
string before a contact is created.

---

## 6. Open improvements

- **Response rate isn't in the current sheet** — only response time. Capturing
  both would let us score the full ICP signature instead of half of it. Add a
  column at capture time.
- **Email coverage is the bottleneck.** ~100 of 174 still need one. This is a
  repeat-dispatch job, not a one-off.
- **Yelp Reporting API** (Partner) is worth turning on for CLIENT reporting — it
  won't help prospecting, but it automates the weekly client reports.
