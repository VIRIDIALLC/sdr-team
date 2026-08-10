---
to:            Web team — SDR
from:          SDR team (setup on Kevin's request)
status: open
created:       2026-08-10
---

## Subject
Adopt Playwright for prospect-site checks — read-only, and Yelp stays off-limits.

## Context
Kevin asked to make Playwright available to the Web team's SDR alongside
Rupika and Montague (already set up in the SDR-team repo). Good news:
Playwright is **already installed in the Claude Code environment**
(v1.56.1 + Chromium) — nothing to install, no per-call API cost. It's the
right tool when a lookup needs to actually load a page instead of reading
a search snippet.

## What you need done
Add Playwright to your SDR persona's allowed tools, mirroring the
guardrails in the SDR-team repo at `team/_tools.md` (Playwright section):

- **Use it for:** loading a prospect's own site to verify a
  website/quality gap, confirming a real contact email on an about/contact
  page, capturing reference screenshots.
- **Read-only.** Load, read, screenshot — never submit forms, log in, or
  click anything that contacts a prospect. Same approval gate as
  everywhere.
- **The Yelp no-scrape rule applies to Playwright too.** Yelp's ToS
  forbids automated access; a browser tool is not an exception. Keep
  working from what Google's results show about a Yelp listing, never open
  Yelp with the browser. Respect `robots.txt` and don't hammer small
  sites.
- Free — no cost-log entry needed.

## Reference
- `team/_tools.md` (Playwright section) in `viridiallc/sdr-team`
