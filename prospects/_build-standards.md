# Build standards (source of truth for Sage and Nova)

Rules for what a delivered site must be — referenced by Sage (to know
what to ask the prospect for) and Nova (to know what it's building
toward and to gate on before starting).

## No cookie-cutter sites

Every business gets at least two "signature" components suited to its
vertical and what makes it specific — not the same hero-then-services-
then-contact template reused verbatim across prospects. Vary layout
order, imagery treatment, and accent styling business to business.
Examples of signature components (pick what fits, don't reuse the same
pair every time): a review/testimonial carousel, a service-area map, a
before/after project gallery, an interactive pricing/estimate widget, a
seasonal-services callout. The goal is the business owner opens it and
it looks made for them, not templated.

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
