# SDR KPI scoreboard

Sue's running scoreboard. **Real figures only.** If a number can't be pulled,
write that it can't — never estimate, model, or infer it. A fabricated KPI is
worse than a missing one, because the team retrains on it.

Newest entry first.

---

## 2026-08-18 — baseline

First entry, measured directly from the repo when the Director role was created.

### Repo-derived (no external access needed — these always work)

| Metric | Value | Note |
|---|---|---|
| Prospect folders | 122 | |
| `enrichment.md` files | 109 | |
| Stage: `sent` | 76 | |
| Stage: `found` | 32 | held on the email gate — see below |
| Stage: `approved` | 2 | |
| Stage: `enriched` | 1 | |
| Stage: `dismissed` | 2 | |
| Track split | 73 package / 32 website / 8 ads | |
| **Name-fill rate (sent)** | **68 / 76 = 89%** | Montague found a real owner name for all but 8 |
| Files honestly reporting "NO NAME FOUND" | 12 | correct behavior — blank is safe, placeholders are not |
| CALL CARD format adoption | 32 / 109 | card added 2026-08-13; older files predate it |
| Montague runs logged | 20 | most recent same-day (2026-08-18) |
| Rupika runs logged | 14 | |

### Send-side (GHL) — UNAVAILABLE

| Metric | Value |
|---|---|
| Open rate | **unavailable** — GHL API key 403s everywhere as of 2026-08-18 |
| CTR | **unavailable** — same |
| Bounce rate | **unavailable** — same |
| Reply rate | **unavailable** — same |

Kevin is fixing the GHL key. Until it's live there is no send-side measurement
at all, which is *itself* the most important number on this page: **the bounce
problem that prompted this role cannot currently be quantified.**

### Defects found this run

1. **Name extraction was dropping 24 of 25 real names (FIXED 2026-08-18).**
   Montague's CALL CARD format (added 08-13) writes the name unbolded and often
   as a bare first name; KIREEK's reader only matched the older bolded
   `**Firstname Lastname**` form inside a `**Best contact:**` field. Across 109
   files it extracted **1** name. The other 24 enrolled into GHL as
   `"<Company> Team"`. Nothing errored — a dropped name is indistinguishable
   from a name that was never found.
   Fix: `voice-agent/backend/team_repos.py::_extract_first_name` now reads the
   card first, falls back to the bolded form, and rejects placeholders
   independently. Verified against all 109 real files: **1 → 26 names**, zero
   placeholder leaks.

2. **No email verification anywhere in the pipeline (OPEN — scheduled).**
   59 of 109 files self-flag the address as a guess or unverified; 42 of 107
   unique addresses are generic role inboxes; 37 of 107 are free-mail. Nothing
   checks any of them before use. This is the structural bounce cause, and it is
   a *designed* gap — Montague's persona permits a labelled pattern guess on a
   confirmed-live domain.
   Kevin's call: free DNS/MX + syntax gate before `enriched`, to-do for the week
   of 2026-08-18. Tracked in `KNOWN_GAPS.md`.

### What this baseline says

The constraint on this team is **not** prospecting volume and **not** enrichment
effort. Montague is running and his hit rate is high. The losses are at the
seams (a silent parser mismatch) and at the reachability gate (unverified
addresses). Adding top-of-funnel volume before the MX gate lands would multiply
bounces against the sending domain, which compounds and is slow to reverse —
that's the reasoning behind making this role quality rather than volume.

### Next run should

- Recheck name-fill rate **as actually enrolled**, not just as written, now that
  the reader is fixed — that's the seam-level confirmation.
- Pull open/CTR/bounce the moment GHL is back, and set the first real baseline.
- Watch whether the `stage: found` count (32) keeps climbing — a rising number
  is a reachability problem, not idleness.
