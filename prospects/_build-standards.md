# Build standards (source of truth for Sage and Nova)

Rules for what a delivered site must be — referenced by Sage (to know
what to ask the prospect for) and Nova (to know what it's building
toward and to gate on before starting).

## No cookie-cutter sites

Before starting any build, apply the `distinctive-web-design` skill
(global, `~/.claude/skills/distinctive-web-design/`) — it's the real
source of truth on *how* to avoid the generic look: real design tokens
before decoration, one committed aesthetic direction, purposeful (not
decorative) motion, and an honest take on when 3D is actually worth it
versus just more of the same generic-SaaS decoration it warns against.
That skill also covers which direction fits a prospect/client site
(conversion-and-trust-first) versus Viridia's own flagship site
(brand-statement-first) — use whichever applies.

On top of that, every business gets at least two "signature" components
suited to its vertical and what makes it specific — not the same hero-
then-services-then-contact template reused verbatim across prospects.
Vary layout order, imagery treatment, and accent styling business to
business. Examples of signature components (pick what fits, don't reuse
the same pair every time): a review/testimonial carousel, a service-area
map, a before/after project gallery, an interactive pricing/estimate
widget, a seasonal-services callout. The goal is the business owner
opens it and it looks made for them, not templated.

## Home service businesses sell on visuals, not on spec sheets (added 2026-08-05)

Kevin's real, standing direction, confirmed against a real build
(`sp-lawn-care-bangor-me`, first version came back reading as a SaaS
product, not a landscaping company): home service customers buy with
their eyes. The `distinctive-web-design` skill's caution against generic
decoration is still real, but avoid overcorrecting into *tech-product*
visual language — a real difference from avoiding genericness.

Concretely, treat these as signals a build has drifted toward
SaaS/dashboard territory instead of home-service warmth, and fix them:

- Monospace, uppercase, letter-spaced micro-labels used everywhere
  (stat labels, badges, eyebrows) — that's a design-system/dev-tool
  pattern, not a trade business one. Fine sparingly, not as the default
  voice for every label on the page.
- Segmented pill toggles with spring-animated sliding indicators
  (`role="tablist"` UI controls) — reads like a SaaS product's settings
  panel, not a lawn care site choosing a season.
- "Spec-sheet" or "work order" style data panels for what should be a
  warm trust-building callout.
- Numbered lists styled like a product changelog instead of a real
  process explanation.

What to lean into instead (see `www.tfplandscaping.com` as a real
reference Kevin's actually shipped and likes): big, warm, photography-
led sections; plain trust signals (real testimonials with names and
towns once available, straightforward stat callouts); a straightforward
step-by-step process section; a grounded, local feel over a polished
tech-product feel.

Real photos of the specific business come later (see the hard gate
below) — a client only sends those once he's actually decided to move
forward. Until then, use generic decorative stock/photography that
still feels warm and real (grass, tools, seasonal imagery), not a
photography-light, label-and-icon-heavy layout that ends up reading as
a tech product because there wasn't real photography to lean on yet.

## SEO and AI-crawlability, baked in from Starter up

This isn't a Growth/Premium-only feature — every tier, including
Starter, ships with:

- Semantic HTML landmarks (proper heading structure, `<nav>`, `<main>`,
  etc. — not div soup)
- Per-page meta title and description
- Alt text on every image
- LocalBusiness schema markup (name, address, phone, hours, service area)
- Fast-loading images (properly sized/compressed, not raw uploads)

This is deliberate: it's the technical foundation for the post-delivery
upsell (Google Search Console setup, ongoing on-page SEO work) — a site
that isn't crawlable well can't credibly be upsold on SEO later.

## Real photos only — hard gate before any build starts

Never build or deliver a site using stock photography or AI-generated
images depicting the business itself (fake storefronts, fake staff,
fake job-site photos). Generic decorative stock (icons, abstract
backgrounds) is fine; anything meant to represent *this business* must
be a real photo the business owner sent.

This is a hard gate, not a preference: Nova does not start a build for a
prospect at `quote_stage: ready_to_build` without confirming real photos
are actually on file. If they aren't, stop and flag back to Kevin —
don't fill the gap with stock or AI imagery and don't wait for Kevin to
notice after the fact.
