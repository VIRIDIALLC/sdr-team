# Team chatrooms (Google Chat)

Real, two-way rooms per team/project that Kevin is a member of — use `scripts/chat.py`.
Because agents are dispatched (not always-on), a room is an **async thread**: on each
run, READ the room to pick up where the crew left off, do your work, POST what you did
and what's next, then hand off. Kevin watches live and can reply in the thread.

## Use it
- `python scripts/chat.py ensure "SEO — ClientX"`  → find/create the room (once)
- `python scripts/chat.py read "SEO — ClientX"`     → catch up on the thread
- `python scripts/chat.py post "SEO — ClientX" "Pushan: audit done — 5 title fixes handed to Web"`

## Rooms
- One per **team** (e.g. "Finance", "SEO") and/or per **project/client** (e.g.
  "ClientX — website"). Spin up a project room when a job spans more than one team.
- **Prefix every message with your name** so Kevin (and teammates) see who's talking.

## When to post
Picking up or finishing a task/handoff, a decision you made, a blocker, or a question
for another agent. Keep it short and real — this is the crew's shared memory and
Kevin's live window into the work.

The room→space-id cache is `chat/spaces.json` (committed, so rooms stay stable). Needs
`GOOGLE_CHAT_SA_FILE` in the runtime env. No key set → `chat.py` skips cleanly; do your
work regardless.
