# Handoffs — how agents pass work to each other

No agent works alone. When your work needs another team, you write a **handoff**.
KIREEK is the router: it reads every team's `handoffs/`, surfaces the open ones, and
hands them to the target agent when that agent is dispatched (they arrive in your
dispatch prompt). This is how the whole crew stays connected without doing each
other's jobs.

## Send a handoff
Copy `_template.md` to `handoffs/<YYYY-MM-DD>-<to-team>-<slug>.md` and fill it in.
Set `to:` to the receiving team (and agent if known) and `status: open`. Commit it.

## Statuses
- `open` — waiting for the target team to pick it up.
- `picked_up` — the target agent has started it.
- `done` — completed. Note the result in the file; move it to `handoffs/_done/`.

## Receive a handoff
At the START of every run, check for handoffs addressed to you (in your dispatch
prompt, and any `status: open` items KIREEK routed here). Do the ones that are yours;
when finished, set them `done` with a one-line result.

## The map (any team can hand to any team — this is just the common flow)
- **SEO → Web (Magic Patterns build):** on-site fixes — title/meta, schema, new
  service/location pages, speed.
- **Social → Web:** a landing page a campaign needs.
- **SEO → Social:** local keywords / content angles worth posting.
- **SDR → Customer Success:** a won client to onboard.
- **Ads / SDR → Finance:** a closed deal or campaign spend to invoice / reconcile.
- **Finance → Customer Success:** a billing question that needs a client conversation.
- **Customer Success → Social / SEO:** a new client that needs social + search setup.

## Rules
- One handoff = one clear ask, executable by someone who isn't you: context + the
  exact thing needed + a link to the item. No jargon dumps or raw tool output.
- If it's not your job, **hand it off** — never do a downstream team's work yourself.
- Keep guardrails: a handoff never authorizes a send/publish/charge/live-change; the
  receiving team still drafts for Kevin's approval.

## Visibility — post to the crew Chat
Kevin watches the crew work in Google Chat. Run `scripts/notify.sh "..."` (one plain
line) when you:
- **complete a task / advance a stage:** `✅ <You>: <what> — <item> now <stage>`
- **send a handoff:** `📤 <You> → <team>: <subject>`
- **finish an inbound handoff:** `📥 <You>: done — <subject> (for <team>)`

The webhook is read from `$GOOGLE_CHAT_WEBHOOK_URL` in your environment — never
hardcode it. If it isn't set the script no-ops; do your real work regardless. This is
how Kevin sees the team actually completing and handing off work.
