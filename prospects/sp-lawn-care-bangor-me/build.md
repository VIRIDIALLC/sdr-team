# Build — S&P Lawn Care (Bangor, ME)

Magic Patterns editor: https://www.magicpatterns.com/c/8jjfheyktxtqulpxluvpdl
Design system: "Viridia Analytics" (Kevin's real account/design system).

This is a mockup used to close the sale — Growth tier, quoted 2026-08-05
(see `quote.md`). Per `_build-standards.md`'s hard photo gate, everything
below is generic decorative stock; nothing here depicts S&P's actual
crew, trucks, or job sites. Real S&P photos are required before this
becomes the delivered site (`quote_stage: ready_to_build`, not yet
reached).

## Round 1 — initial mockup (2026-08-05)

First real Growth-tier build for a prospect. Used Karl's real logo
(`S&P logo.png`, from his reply — see `reply.md` Round 2) as the visual
anchor. Delivered against the quoted Growth-tier feature list from
`_pricing.md`: custom design, 5-7 pages, service-specific pages
including a dedicated snow-removal page (the real hook — see `quote.md`,
"a Facebook page doesn't rank for 'snow removal Bangor ME'"),
review/trust section, conversion CTAs, on-page SEO, Google Analytics.
Full technical SEO baseline per `_build-standards.md` regardless of
tier: semantic HTML, per-page meta, alt text, LocalBusiness schema.

Signature components: a seasonal green/snow toggle that reflows hero
copy, stats and photography across the whole site (the two-sided
"we don't disappear for six months" pitch), plus a service-area route
diagram for the seven towns S&P actually covers.

**Kevin's first pass on this version:** it read as a SaaS product, not
a landscaping company — monospace/uppercase micro-labels everywhere,
segmented pill toggles with sliding indicators, spec-sheet-style data
panels. This became the standing lesson written into
`_build-standards.md`'s 2026-08-05 addendum ("home service businesses
sell on visuals, not on spec sheets").

## Round 2 — SaaS-vs-landscaper revision (2026-08-05, same day)

Revised against that new standard: dropped the monospace/uppercase
default voice (kept it only for the one sparing eyebrow use the standard
allows), replaced the pill-toggle UI-control pattern, replaced spec-sheet
data panels with a warmer plain-stat callout, leaned into big
photography-led sections and a grounded local-business feel instead of a
tech-product one. This is the version Kevin approved to quote against —
the $850 + $30/mo Growth-tier number in `quote.md` reflects this
revision, not Round 1.

## Round 3 — contrast fix + hero image swap (2026-08-11)

Live-review feedback from Kevin, two concrete fixes:

**1. Contrast failure, confirmed by real math.** The `blaze` accent
(`#E8590C`) used as *text* on evergreen backgrounds computed to real
WCAG contrast ratios of:

- `blaze` vs `evergreen` (`#1B3A2B`): **3.48:1**
- `blaze` vs `evergreen-deep` (`#132A1F`): **4.25:1**

Both fail the 4.5:1 AA minimum for normal-size text (large/bold text
only needs 3:1, so headline-scale usage was marginally fine — the
smaller eyebrow/label instances were the real failure). Computed with a
standard WCAG relative-luminance script, not eyeballed.

Fix: added a new `blaze.light` token (`#F57D3D` — same hue/saturation as
the original blaze, just lighter) to `tailwind.config.js`, and swapped
every real text-on-evergreen instance of `text-blaze` to
`text-blaze-light` (left `bg-blaze`/`border-blaze` alone — those weren't
the reported failure and touching the base token would've also changed
button/badge backgrounds Kevin didn't flag). Verified result:

- `blaze-light` vs `evergreen`: **4.67:1** (passes AA)
- `blaze-light` vs `evergreen-deep`: **5.72:1** (passes AA)

Real instances found by searching every `text-blaze` usage across the
codebase (not just the hero) and checking each one's actual background:

- `components/Hero.tsx` — eyebrow label, headline accent line, "This
  season" stat-panel label, "Year-round, not seasonal." lead-in
- `components/EstimateBand.tsx` — eyebrow label
- `components/PageHeader.tsx` — breadcrumb current-page span, eyebrow
  label (affects every inner page's banner)
- `components/Footer.tsx` — three `hover:text-blaze` link states (footer
  bg is `evergreen-deep`)
- `pages/Home.tsx` — the year-round calendar section's `CalendarRangeIcon`
  (sits on the same evergreen surface)
- `contexts/SeasonContext.tsx` — the shared `accentText` token, since by
  its own doc comment it's meant to pair with `surface` (dark panels),
  even though nothing currently consumes it

Left unchanged, checked and confirmed not the same bug: `SectionHeading`
(its `text-blaze` only fires in the `dark` tone, which is used on
*light* birch backgrounds, not evergreen), `ServiceCard`,
`pages/Services.tsx`, `pages/ServiceArea.tsx`, `ContactForm` (all on
white/birch backgrounds — high contrast already), and the mobile-nav
active link in `Header.tsx` (also on a light background).

**2. Hero image swap.** Kevin wanted `data/images.ts`'s `heroGreen`
photo changed. Replaced the mowed-lawn/edged-mulch-bed shot with the
misty pine-and-spruce treeline photo (previously only used on the
Service Area page, under the `pines` key — both keys now point at the
same asset). Reasoning: the mulch-bed shot has sharp edge lines and
stripe detail that compete with the overlaid hero text; the misty
treeline is softer and more tonally even, which reads better under the
gradient scrim. Still generic decorative stock per the real-photo gate —
no change to that status. Note this same `heroGreen` entry also backs
the Services page banner (`pages/Services.tsx`), so that page's header
photo changed too as a side effect — not just the homepage hero.

No new Magic Patterns generation credits spent this round — this was a
pure code-first edit (`write_artifact_files` + `publish_artifact`), not
a `create_design`/`send_prompt` call. See `../../COST_LOG.md`.

## Status

Still a mockup, not a delivered build. `quote_stage: quoted` — waiting
on Karl's response to the sent quote. Real photos required before this
can move to `ready_to_build`/delivery per the hard gate in
`_build-standards.md`.
