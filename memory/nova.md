# Nova — memory

## Notes

- **Contrast checks need real math, not eyeballing.** Kevin caught a real
  WCAG failure (S&P Lawn Care, 2026-08-11): `blaze` orange text on
  `evergreen` backgrounds computed to ~3.5:1, below the 4.5:1 AA minimum
  for normal text — looked fine by eye against a photo+gradient
  backdrop, wasn't. When a design uses a saturated accent color as text
  on a dark/photo background, compute the actual relative-luminance
  contrast ratio (standard WCAG formula) before shipping, don't just
  judge it visually. If it's close, verify with a script.
- **When a token fails contrast, add a variant, don't blanket-rename
  it.** Fixed the above by adding `blaze.light` alongside the existing
  `blaze`/`blaze.dark` in `tailwind.config.js`, and repointing only the
  actual `text-blaze`-on-evergreen instances to it. Left `bg-blaze`/
  `border-blaze` (buttons, badges, hover shadows) on the original
  darker hex — those weren't the reported problem, and renaming the
  base token would've silently changed backgrounds Kevin didn't flag
  and introduced a new white-text-on-lighter-bg contrast question
  nobody asked about.
- **When told to fix an instance "not just the one you saw," actually
  grep every usage and check each one's real background before
  editing.** Several `text-blaze` instances turned out to be on light/
  white backgrounds (ServiceCard, Services/ServiceArea pages,
  ContactForm, SectionHeading's `dark` tone, Header's mobile nav) —
  those were fine as-is and left untouched. Only the ones actually
  sitting on `evergreen`/`evergreen-deep` were real failures.
- **S&P Lawn Care build history (SaaS-vs-landscaper lesson):** first
  mockup round read as a SaaS product (monospace/uppercase labels
  everywhere, segmented pill toggles, spec-sheet data panels) — this is
  what produced the standing direction now in
  `prospects/_build-standards.md`'s 2026-08-05 addendum. Revised same
  day into a warmer, photography-led, home-service-appropriate version
  before Kevin quoted against it. Worth re-reading that build-standards
  section before starting any new home-service build — it's the
  concrete "don't do this" reference, not just an abstract rule.
- **Reusing an existing catalog image for a new slot is fine, but check
  it isn't already visible elsewhere on the same page first.** When
  swapping the S&P hero photo, `images.tools` was already used further
  down the same Home page (contact section) — reusing it for the hero
  too would've put the same photo twice on one screen. Went with
  `images.pines` instead (only used on a different page). Also softer/
  less busy imagery reads better under a hero text scrim than a sharp
  detailed shot (mower stripes, edged mulch lines) — worth favoring
  lower-detail, evenly-toned photos for hero backgrounds specifically.
- **Code-first edits (`write_artifact_files` + `publish_artifact`) don't
  spend Magic Patterns generation credits** — confirmed again on this
  round, consistent with the note already in `COST_LOG.md`. Only
  `create_design`/`send_prompt` are metered. Prefer code-first for
  targeted fixes like this one; it's also more precise than re-prompting
  the whole design and hoping it doesn't disturb anything else.
