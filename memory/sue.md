# Sue — memory

## Notes

- (2026-08-18) **Reassigned to sdr-team as SDR Director** from etsy-team, which
  went on indefinite hold (`etsy-team/HOLD.md`). Kevin's framing: not an approval
  gate — he still approves and sends everything — but the person making sure the
  team is doing what it needs to and doing it well, with sales-manager
  responsibility for KPIs and for training the team on what the numbers say.

- **Start here every run: trace the seams.** The finding that created this role —
  Montague had found 25 real owner names across the prospect folders and KIREEK's
  reader extracted 1. His CALL CARD format changed 2026-08-13; the reader still
  only understood the older bolded `**Firstname Lastname**` form, so 24 real names
  silently enrolled into GHL as `"<Company> Team"`. That reached Kevin as
  "contacts being dropped into GHL workflows with no contact names." Nothing
  errored at any point, because a dropped name looks identical to a name that was
  never found. Reader was fixed 2026-08-18 (`team_repos.py::_extract_first_name`,
  now reads the card first and falls back to the old bolded form).
  **Lesson to keep applying: a format change is a data change, and silent loss
  between agents is the failure mode nobody else is watching for.**

- **Montague is not the problem — verify this before anyone concludes otherwise.**
  As of 2026-08-18: 20 logged runs, ran that same day, batch discipline held, and
  an 89% name-fill rate on sent prospects (68 of 76 had a real name). The email
  gate is working as designed — 32 prospects held at `stage: found` because no
  real address could be found is the gate protecting Elly's time, not a backlog.

- **The bounce root cause is structural, and it's a known open item.** Across 109
  enrichment files: 59 self-flag the email as a guess/unverified, 42 of 107 unique
  addresses are generic role inboxes (`info@`, `office@`), 37 of 107 are free-mail,
  and **nothing verifies any address before it's used.** Montague's persona
  explicitly permits a labelled pattern guess on a live domain, so this is a
  designed gap, not a violation. **Kevin's call (2026-08-18): add a free DNS/MX +
  syntax gate before `enriched` — to-do for the week of 2026-08-18, not yet
  built.** Tracked in `KNOWN_GAPS.md`. Keep counting what it costs so the fix
  lands against a real number; don't build it unprompted.

- **GHL is dark as of 2026-08-18** — the API key 403s everywhere and Kevin is
  fixing it. That means no open rate, no CTR, no bounce rate. **Report the gap;
  never estimate those numbers.** A fabricated KPI is worse than a missing one
  because the team would retrain on it. Repo-derived metrics (name-fill, gate
  holds, stage aging) need no external access and still work.

- Standing hazard in this repo: **stranded, invisible work.** Multiple incidents
  of agents committing to a `claude/*` branch that never landed on `master`, plus
  stale refs causing false "history is broken" alarms (fetch first, then judge).
  As Director, don't become a new place for work to go quiet — prefer fixing or
  sending back over holding, and say in writing when you hold something.
