# Stranded work — found by the 2026-08-18 blocker audit

Update 2026-08-23 (Claude Code session, weekly audit): the two clean branches
were merged to master as this file instructed:

- `origin/claude/phone-ui-overhaul-scaffold-vg0vek` — MERGED (dashboard scaffold, 19 files)
- `origin/claude/playwright-higgsfield-setup-b06ke4` — MERGED (Playwright/Higgsfield tooling + persona updates)

One branch remains, and it does NOT merge clean — it conflicts with master and
needs human eyes before merging:

| Branch | Date | What's on it |
|---|---|---|
| `origin/montague-2026-08-13-recovery` | 08-13 | Montague's detached-history finding, 40 lines of memory. Conflicts with current memory/montague.md. |

To recover (resolve conflicts by hand):
```
git merge --no-edit origin/montague-2026-08-13-recovery
```
Then delete this file in the same commit.
