```
CALL CARD
  Ask for:   Robert            (owner/founder; Susy Vigil — wife, office —
             also safe if he's out on a job)
  Phone:     (562) 818-5001    (search-snippet sourced, not page-verified —
             confirm on answer)
  Response:  no verified hook — see note below, don't quote a number
  Hook:      "Your own site tells people you'll respond to their contact
              form within 24 hours — but the second someone needs an HVAC
              fix, they're already calling the next name on the list."
```

## Company summary

VigilAir Heating and Cooling — Cerritos, CA, serving greater LA metro
including the Alhambra area. Family-owned since 2005, founded by Robert
Vigil (got his CA contractor's license at 23, trained at UTI Technical
Institute). Wife Susy Vigil — a former schoolteacher — joined later on the
office/phones side. Deliberately stayed owner-operated/small rather than
scaling into a call-center model. 153 Yelp reviews.

## Owner name — Robert Vigil, HIGH confidence

Confirmed independently across multiple sources: a Voyage LA Magazine
feature interview ("Hidden Gems: Meet Susy Vigil of VigilAir Heating and
Cooling"), the business's own About-page copy (search-snippet sourced —
founded by Robert in 2005, Susy joined later), and numerous Yelp review
snippets naming both by name ("Robert is very kind and patient..." across
~92 reviews; "Susy was very informative..." across ~10). Safe to use either
first name on the call; lead with Robert since he's the field-facing
founder/technician.

## Website — real, live (informational only, package track)

vigilairandheat.com — DNS-confirmed live (A record 160.153.0.54). The site
itself routes leads through a contact form/email with a stated "we'll
respond within 24 hours" turnaround — no real-time capture. That's the
hook above: a structural, site-confirmed friction point independent of the
contradicted Yelp response-time figure below. (Direct WebFetch of the site
was blocked by this environment's egress proxy this run, same as prior
runs — this detail carries forward from Rupika's original sourcing, not
re-verified today, flagged accordingly.)

## Response-time signal — CONTRADICTED, dropped

Rupika's brief: ~4hr Yelp response time despite 24 locals recently
requesting a quote. This run's reconfirmation found the opposite —
multiple independent Yelp/directory listings for this same business
(Cerritos, San Pedro, Norwalk, Buena Park pages) show sub-hour figures
("about 10 min," "about 30 min," "about 1 hr," "36 minutes"), and none
reproduced anything near 4 hours. No source reproduced the "24 quotes
requested" figure at all. Per the CVA Exterminators/Prima Painting
contradictory-figure precedent, **not using any number** — and worth
flagging that if the real figure is actually sub-hour, the response-time
angle doesn't work as a pain point here at all; the site's own 24-hour
contact-form language (above) is the real, still-valid hook.

## Email — GUESSED, domain confirmed live

No single email traced to an actual quoted source this run (WebFetch to
vigilairandheat.com/contact was blocked). Domain confirmed live via DNS
(160.153.0.54). Using the standard guessed-pattern-on-confirmed-live-domain
precedent: **info@vigilairandheat.com** (GUESSED, not confirmed). Two
other candidates surfaced on older directory/aggregator listings
(vigilair@yahoo.com, vigilair11@outlook.com) — noted as fallback options
only, lower confidence than the domain guess, not primary.

## Gate outcome

- Email gate: **PASS** (GUESSED on a confirmed-live domain).
- Owner-name: pass, high confidence (Robert; Susy also safe).
- Response-time: contradicted, dropped — real hook substituted (24-hour
  contact-form turnaround, from original sourcing).
- Collision risk: none found — same business across multiple service-area
  Yelp/directory pages, not competing companies.

**Advanced to `stage: enriched`.**

*Sourcing note: vigilairandheat.com and voyagela.com were both
egress-blocked to direct WebFetch this run — findings above are
search-snippet-sourced except the DNS resolution check, which was direct
and decisive.*
