# For Kevin — first-touch drafts waiting on you (LIVE QUEUE)

status: open
Last regenerated: 2026-08-30 (Elly)

> **This is the only first-touch approval file. It is regenerated from scratch
> every run** and lists every prospect currently sitting at `stage: drafted`,
> not just what was added today. `prospects/<slug>/status.md` is the source of
> truth; this file is a display of it. Per your 08-25 ruling after the "19
> approvals but really nothing" incident, there are no more dated first-touch
> files. If this file says the queue is empty, the queue is empty.

## The queue: 8 drafts

| Prospect | Track | Contact | Hook | Email confidence |
|---|---|---|---|---|
| **Horizon Roofing (Irvine CA)** — new today | package | Frank Garcia | There's a review on your own site from a guy who called you 9pm to 1am with a roof leaking. Is that up there on purpose? | **Aggregator-sourced** (real domain, not page-verified) |
| **BGS AC & Heating (Corsicana TX)** — new today | website | no name found (team greeting) | Service calls or full changeouts? A Facebook page covers one of those and not the other. | **Directly listed, single-source** (his own Facebook page) |
| Local Choice Pest & Landscape Nutrition (Cave Creek AZ) | package | Sage Garvey | You ran customer care at Burns for 23 years. Now the messages wait until you're out of the crawlspace. | **Guessed** (info@ on a confirmed-live domain) |
| KJC Roofing (Mission Viejo CA) | package | Randy Holmes | You answer 100% of them, nine hours later. Which pile is waiting? | **Guessed** (info@ on a DNS-confirmed live domain) |
| All Tech Plumbing (Rock Springs WY) | website | Jeff (first name only) | There's an All Tech Plumbing in New Jersey, and another three states. None of them are you. | **Strong** (directly found, recurs across independent listings) |
| Nelson Landscaping (Willmar MN) | website | Lee Nelson | Where do you send somebody who wants to see a patio you built? | **Uncertain** (one of two conflicting candidates) |
| Josh's Plumbing (Crescent City CA) | website | Josh Williamson | Three addresses for you online, one phone number, and you made none of them. | **Single-sourced** (his own Facebook page, snippet-sourced) |
| Powerhouse Electrical Services (Vernal UT) | website | Robert (first name only) | Listings say Electrical, the LLC says Construction. Which is it? | **Medium** (Vernal-specific Facebook listing, not page-rendered) |

Nothing has been sent. Full drafts and reasoning live in each prospect's
`outreach.md`.

## Two things need a check before they send, and one is new

**Horizon Roofing — the CSLB licence. NEW, and this is the serious one.**
Montague could not tie any licence number to this Frank Garcia / Irvine entity.
Four numbers surfaced under "Horizon Roofing Company" and she cross-checked them
to a **different business** (122 S Kingsley St, Anaheim, owner Manuel Gonzales
Jr). cslb.ca.gov and BuildZoom were both egress-blocked. Genuinely unresolved
rather than contradicted, but an unlicensed roofer is a hard disqualifier under
our own criteria. **Do a name-specific Check-A-License lookup, not a
business-name one** — a business-name search is exactly what produced the wrong
company. Nothing in the draft depends on it, so a bad result costs a send, not a
rewrite.

**Local Choice Pest — the Arizona PCO licence.** Unchanged from yesterday, still
open. Rupika flagged it, Montague could not close it (searchagriculture.az.gov
is a form-based tool neither environment can reach). Also a hard disqualifier.

## One judgment call on Horizon I want you to actually look at

Horizon's opener cites a negative review. I have kept negative reviews out of
bodies three times on the grounds that quoting a stranger's complaint at
somebody is the one door that isn't face-saving (Reliant Pest 08-19, Owen
Plumbing 08-25, All Tech 08-28). Those were all reviews about the **owner's
character**, relayed from a platform he does not control. This one is about a
phone not being answered at 1am, which is structural and which nobody should be
ashamed of, and it is sitting on **his own homepage** via the Trustindex widget,
so the email points at something he publishes rather than repeating gossip. The
question asked is about the widget, not about his performance, and the second
line moves off the review immediately.

I think it holds, but you know the tone that works on a roofer in Orange County.
**A clean substitute opener is already written into `outreach.md`** if you
disagree: cut the first paragraph, open with "When a roof starts leaking at
eleven at night, who takes that call?", and everything after it stands
unchanged. Weaker only because it's generic enough that any roofer could have
received it.

## Queue age

Josh's Plumbing and Powerhouse have been sitting here since 08-27, KJC, All Tech
and Nelson since 08-28, Local Choice since 08-29. The oldest two are now four
days old. Not chasing, just noting.

---

## ⚠️ KIREEK's sync loop looks down, second day running

`_fleet-state.md` was generated **2026-08-28 21:59 UTC** and I read it at
2026-08-30 17:08 UTC. That is **43 hours old**, against the ~12 hour staleness
line CLAUDE.md draws. Yesterday it was 17 hours old and I flagged it as a
caveat; today it has not moved at all in two days, so this is a real systems
problem on your PC rather than a slow refresh, and I am saying it louder than a
footnote as I said I would.

**What it costs:** nothing on this seat. Everything I need is in
`prospects/*/status.md`, which is the source of truth anyway, and I recounted
every stage by hand rather than trusting the file's summary. What is lost is the
fleet-wide view. Every team's `_fleet-state.md` is stale by the same two days,
so any agent quoting live MRR, systems health, or another team's state right now
is quoting Thursday evening.

**Live pipeline counts, recounted from `prospects/*/status.md` this run:**
78 found · 1 enriched · 8 drafted · 2 approved · 97 sent · 6 closed · 3
dismissed.

**Upstream, and this has now grown every single day for eleven days:** 78
prospects are stacked at `stage: found`, up from 74 yesterday, 69 on 08-28, 66
on 08-27, 62 on 08-26. Montague advanced 2 and held 4 on the email gate today
while Rupika added 6, so the gap widened again. First touches will keep arriving
in ones and twos regardless of how often this seat runs. The constraint is the
enrichment step, not the drafting step.

**Still open elsewhere:** `approvals/2026-08-21-followup-drafts-held-lane.md`
has 10 second-touch drafts waiting on you, and 11 more prospects in the
`followup: held` lane have never had a second touch written at all. That remains
the one place spare capacity on this seat would actually convert, since those
are people who already received a first email and got nothing after it.

All four dated first-touch approval files (08-21 batch 2, 08-22, 08-23, 08-24)
were already `status: superseded`; nothing to close this run. Left
`2026-08-21-followup-drafts-held-lane.md` open on purpose (not a first-touch
file) and left `2026-08-28-realestate-batch-01-cold-emails.md` alone (a
different workflow's batch staged in your Gmail, not this pipeline's queue).
