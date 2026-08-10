# Shared tooling — Playwright & Higgsfield

Source of truth for the two cross-team tools set up 2026-08-10. Each
persona's own file lists its core tools; this is the shared reference for
these two, so guardrails live in one place instead of drifting across
five persona files. If you're a persona that's been granted one of these,
your file points here — read this before using it.

Same rules as everything else in this repo apply on top of what's below:
the approval gate (nothing sends/publishes/charges without Kevin), cost
discipline, and the quality gate.

---

## Playwright — headless browser automation

**For:** web-track SDR work — **Rupika** (prospecting) and **Montague**
(enrichment) here, plus the Web team's SDR (see the handoff). It's the
right tool when a lookup needs to *actually load a page* rather than read
what a search snippet already shows.

**Status: ready now.** Playwright is already installed in this
environment — v1.56.1 with Chromium, `PLAYWRIGHT_BROWSERS_PATH=/opt/pw-browsers`.
Nothing to install (`playwright install` is unnecessary and blocked). Drive
it headless. There is **no per-call API cost** — this is regular tool use
under the existing plan, so it does **not** go in `COST_LOG.md`.

**What it's genuinely useful for here:**
- Loading a `track: website` prospect's actual site to verify the gap
  Rupika guessed — does a site even exist, does it load, is it
  mobile-responsive, is it visibly outdated/broken — and capturing a
  screenshot into `prospects/<slug>/` as evidence for Elly's pitch.
- Confirming a business's own contact/about page for a real email
  (Montague's email gate) when a search snippet doesn't surface it.
- Capturing a reference screenshot of a prospect's current site for Nova
  to build against later.

**Guardrails — read these, they are not optional:**
- **The Yelp no-scrape rule fully applies to Playwright.** Yelp's ToS
  prohibits automated access; a browser tool does **not** create an
  exception. Never point Playwright at a Yelp page. Keep working from
  what Google's search results display about the Yelp listing, exactly
  as Montague's persona already requires. Same for any site whose ToS
  forbids automated access.
- **Read-only.** Load, read, screenshot. Never submit forms, never log
  in, never click anything that sends/contacts/charges. Same approval
  gate as everywhere: no reaching a real prospect.
- **Be a polite client.** One page at a time, don't hammer a small
  business's site with repeated hits, respect `robots.txt`.
- **No enrichment-spend duplication.** Rupika stays search/lookup only —
  using Playwright to eyeball a site is fine; it is not a license to do
  Montague's enrichment.

---

## Higgsfield — AI design / motion asset generation

**For:** design/creative work — **Nova** (build) here, plus **Ash**, the
**web-design team**, and the **ads team** (see the handoff; their persona
files live in other repos KIREEK routes, so they adopt this there).

**Status: not wired as a live tool yet.** There is currently **no
Higgsfield MCP connector** in Claude Code and **no API key** in this
environment, so it can't be called from a session the way Magic Patterns
or HeyGen can. Until that changes, treat Higgsfield as a **manual
web-app workflow**:

1. Kevin says go on a specific asset (same explicit-go gate as Nova's
   Magic Patterns builds — never generate speculatively).
2. Generate it in the Higgsfield web app on Kevin's account.
3. Save the output into the relevant `prospects/<slug>/` or project
   folder, and **log the generation in `COST_LOG.md`** — it spends real
   credits, exactly like a Magic Patterns generation.

When/if a real connector or API key lands, this doc and the persona
files get updated to point at it; the guardrails below don't change.

**Already-wired alternative:** if the need is talking-head / avatar
video rather than Higgsfield-style cinematic motion, **HeyGen** *is*
connected as a real tool in these sessions (`create_video_agent`, etc.)
and can be used directly under the same gates.

**What it's for:** decorative and brand/motion assets — hero motion
loops, animated backgrounds, brand illustration, ad-creative variations,
seasonal callout imagery. Warm, generic, decorative material of the kind
`_build-standards.md` already allows before real photos arrive.

**Hard guardrail — do not cross this:**
- **Never use Higgsfield (or any generator) to fabricate imagery
  depicting a specific business** — no fake storefronts, staff, trucks,
  or job-site "photos." That is exactly what `_build-standards.md`'s
  "Real photos only" hard gate forbids, and an AI generator makes it
  easy to violate by accident. Anything meant to represent *this
  business* must be a real photo its owner sent. Higgsfield is for
  generic/decorative/motion assets only — it never satisfies or
  shortcuts the real-photos gate.
- **Real credits, gated + logged.** Never auto-generate; only on Kevin's
  explicit go for a specific asset. Log every generation in
  `COST_LOG.md` — this is a metered spend, the same class as Nova's
  Magic Patterns generations.
- **Quality gate applies.** Assets are built for the specific
  client/brand, not the fastest generic loop — see the
  `craft-operating-system` skill.
