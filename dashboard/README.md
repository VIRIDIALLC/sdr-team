# SDR Pipeline Dashboard

A live progress board for the SDR pipeline. It reads `prospects/**/*.md` directly —
the markdown stays the source of truth, and this never writes back to it.

Scaffolded 2026-08-15 from a phone session. **This is a runnable skeleton, not a
finished product.** It starts, it renders your real 81 prospects, and it's meant to
be something you can react to and redirect rather than a thing to accept as-is.

## Run it

```bash
cd dashboard
npm install
npm run dev          # http://localhost:5173
```

That's it — no env vars, no services, no API keys. The dev server regenerates its
data snapshot on start and again whenever any file under `prospects/` changes, so
when Rupika or Montague commits, the board updates without a restart.

```bash
npm run build        # regenerate data + typecheck + production bundle -> dist/
npm run data         # regenerate the snapshot only
npm run typecheck
```

## What's in it

Three views, all reading the same snapshot:

**Pipeline** — the `found → enriched → drafted → approved → sent` board, one column
per stage, each column labeled with what has to happen next. Cards show track,
location/trade, and days since last touch (amber past 4 days). Top row counts active
prospects, what's waiting on *you*, what's stalled, and what's been sent.

**Team progress** — a panel per agent: how many prospects are waiting on them right
now, how long the oldest one has waited, actions in the last 7 days, and time since
their last action. This is the view that answers "who's the bottleneck." Right now
it says Montague — 25 waiting, oldest 10 days — while Elly, Sage and Nova are clear.

**Activity** — every log line from every `status.md`, newest first, filterable by
agent. 280 entries as of scaffolding.

Clicking anything anywhere opens a detail drawer: stage, track, next action and
who owns it, which files exist on disk, the parsed brief fields, the full `outreach.md`
/ `reply.md` / `quote.md` text, and the complete history timeline.

## How ownership is decided

`src/lib/pipeline.ts` encodes the handoff contract from the root `CLAUDE.md`:

| Waiting on | When |
| --- | --- |
| Montague | `stage: found` |
| Elly | `stage: enriched` |
| Kevin | `stage: drafted` or `approved` (the approval gate) |
| Sage | `track: website` + `sent` + a `reply.md` exists + `quote_stage: none` |
| Nova | `quote_stage: ready_to_build` |
| Rupika | nothing — she produces work, so her panel shows output instead of a queue |

If that contract changes in `CLAUDE.md`, change `AGENTS` in `pipeline.ts` and every
view follows. That's the one place ownership lives.

## Matching KIREEK's frontend

You asked for this to match KIREEK's look. **It doesn't yet, and I want to be straight
about why:** `VIRIDIALLC/KIREEK` wasn't reachable from the phone session — adding the
repo needed an approval I couldn't get mid-run, and there are no git credentials in
that container. So rather than guess at KIREEK's palette, I built the theme so
matching it later is a one-file edit.

Every color, radius, shadow and font in this app resolves to a custom property in
`src/theme.css`. No component hardcodes a color. To match KIREEK: open its stylesheet,
copy its values into the `:root` block in `theme.css`, and the whole board follows.
The current values are Viridia-brand defaults (green accent, dark-first, with a light
palette for daylight).

Tomorrow on your PC, with KIREEK checked out, this is a 20-minute job.

## Architecture

```
scripts/build-data.mjs     markdown -> src/generated/pipeline.json  (never writes to prospects/)
vite.config.ts             dev plugin: regenerate + hot-reload on prospects/ changes
src/lib/types.ts           the shape of a prospect
src/lib/pipeline.ts        ownership rules, queues, throughput, staleness  <- the domain logic
src/theme.css              design tokens  <- the only place colors live
src/components/            Board, Teams, Activity, ProspectDetail, primitives
```

The generated JSON is gitignored — it's derived, and it rebuilds on every dev start
and build.

### The markdown parser is the fragile part

`brief.md`'s `**Company:**` line has no consistent format. All of these are real:

```
AAA Landscape -- Phoenix metro, AZ (Landscaping)
Krasiva Windows and Doors (Phoenix, AZ (2432 W Peoria Ave, Ste 1186))
AMS Landscaping (Arizona Maintenance Services) (Phoenix, AZ (11035 N 23rd Dr); services Glendale)
A+Weed and Pest Control
```

`splitCompany()` handles all four and currently resolves a location for 76 of 81
prospects (the other 5 genuinely don't state one). If a new brief format shows up and
a card renders oddly, that function is where to look — not the UI.

## Known gaps — deliberately left for tomorrow

- **Not wired to KIREEK's design system** (above).
- **Read-only.** Approving from the UI would mean writing `status.md` and committing,
  which crosses the approval gate in `CLAUDE.md`. That's a decision, not an oversight —
  worth talking through before building it.
- **No tests.** The parser is the thing that deserves them; the fixtures are already
  sitting in `prospects/`.
- **Days-in-*current*-stage** isn't derived — cards show days since last touch, which
  is close but not the same for a prospect that's been edited without advancing.
- **`COST_LOG.md`, `approvals/` and `handoffs/`** aren't surfaced. All three are
  parseable the same way if you want them on the board.
