# Stranded work — found by the 2026-08-18 blocker audit, needs a one-line merge

Real work exists on remote branches that never reached master. It is invisible
to VEGA and to Kevin until merged. This session could not run `git merge`
(permission layer), so this file makes it visible and gives the exact commands.

| Branch | Date | What's on it |
|---|---|---|
| `origin/claude/phone-ui-overhaul-scaffold-vg0vek` | 08-15 | **SDR pipeline dashboard scaffold — 19 files, 3,852 lines.** Vite+TS app, additions only. |
| `origin/claude/playwright-higgsfield-setup-b06ke4` | 08-10 | Playwright/Higgsfield tooling docs + persona-file updates (nova-build, rupika). |
| `origin/montague-2026-08-13-recovery` | 08-13 | Montague's detached-history finding, 40 lines of memory. |

To recover (from a normal shell):
```
git merge --no-edit origin/claude/phone-ui-overhaul-scaffold-vg0vek
git merge --no-edit origin/claude/playwright-higgsfield-setup-b06ke4
git merge --no-edit origin/montague-2026-08-13-recovery
git push origin master
```
Then delete this file in the same commit.
