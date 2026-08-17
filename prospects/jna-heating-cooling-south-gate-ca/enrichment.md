```
CALL CARD
  Ask for:   Hector           (full name uncertain — see below, "Hector"
             alone is well corroborated)
  Phone:     (323) 251-0769
  Response:  ~4 hours          (Yelp's own figure, reconfirmed across 4 of 5
              independent searches this run)
  Hook:      "Your Yelp shows about a 4 hour response time on quote
              requests despite the 5.0 rating and 56 reviews — is that
              still about right?"
```

## Company summary

JNA Heating & Air Inc (dba JNA Heating & Cooling), South Gate, CA — family-
owned HVAC shop. 5.0-star, 56-review Yelp listing, Yelp Guaranteed +
verified license (CSLB #1090606, "Warm Air Heating, Ventilating and Air
Conditioning," issued 4/24/2022, expires 4/30/2026). Multiple listings note
the crew has "been in the field since 2015" (7+ years hands-on experience)
even though the current licensed entity is newer — reconciles Rupika's
"8 years in business" claim; worth phrasing as team experience rather than
incorporation date if Elly cites it.

## Response-time signal — RECONFIRMED

4 of 5 independent Google searches returned the same figure — "responds in
about 4 hours" — sourced to Yelp's own listing snippet, consistently paired
with the same distinguishing facts (5.0 rating, 56 reviews, verified
license, 8 years in business), good corroboration this is one real
listing. One outlier (Yahoo Local aggregator) returned "1 week," which is
internally inconsistent with that same page's "same day service" note —
almost certainly stale/generic Yahoo metadata, not a second real data
point. Treat ~4hr as usable, still phrased as a soft question on the CALL
CARD per the response-time-signal gate's convention, not asserted as flat
fact.

## Best contact

**Hector** — first name well corroborated: multiple independent review
snippets and the Yelp business-owner field show "Hector E." responding to
reviews and communications directly ("Hector wasted no time in
communicating with us"). A BuildZoom listing ties a fuller name, **Hector
Esquivel Lopez**, to "JNA Heating & Air Inc" — but at a Los Angeles address
(7226 Parmelee Ave), not South Gate, so this may be a second listing/DBA
variant of the same company rather than a clean match; shared company name,
matching CSLB #1090606, and matching phone number across listings all point
to the same operation, but the LA/South Gate address mismatch means the
surname is single-sourced and unverified against CSLB. Use "Hector" alone
with confidence; hold the surname as unconfirmed.

## Email — CONFIRMED (Facebook-sourced), PASSED

**jna.ac@yahoo.com** — surfaced in two independent searches, both tracing
to the company's Facebook business page (facebook.com/JNA.HEATINGANDAIR),
paired consistently with the same phone number that appears on every other
verified listing (Yelp, HomeAdvisor, jnaair.com, Homeyou, Thumbtack). A
real discovered address, not a pattern guess. Direct WebFetch of the
Facebook page was blocked by this environment's egress proxy, so this is
via Google's indexed snippet, not a live re-confirmation.

## Website status (informational only, package track)

Real, active website: **jnaair.com** — indexed by Google with matching
phone, hours, and South Gate service area; corroborated by multiple
independent aggregator cross-references (Homeyou, HomeAdvisor, hvacservice.io
all list it as the company's site). Direct WebFetch was blocked by the
egress proxy, so this is snippet-sourced. Not a gate for package track, but
notable — this business has a real site, not a website-upsell candidate.

## Gate outcome

- Response-time gate: reconfirmed, one discardable outlier — usable as a
  soft question.
- Contact-name gate: pass ("Hector" solid; surname low-confidence, don't
  use).
- Email gate: **PASSED** — real address found via Facebook, not guessed.

Advancing to `enriched`.
