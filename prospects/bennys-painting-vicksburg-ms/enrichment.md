```
CALL CARD
  Ask for:   NO NAME FOUND
  Phone:     NOT CONFIRMED — Yelp/Facebook/BBB listings blocked from direct
             fetch, phone/address not recovered this run
  Response:  n/a (website track)
  Hook:      "Right now if someone looks you up online, all they find is a
              Facebook page and a Yelp listing — no website, no way to see
              your work or reach you outside a phone call."
```

## Company summary

Bennys Painting LLC — Vicksburg, MS. Confirmed as the correct entity across
a dozen+ query variants (Facebook page `bennyspainting3`, Yelp listing
`bennys-painting-vicksburg`) — every collision checked and ruled out (Round
Rock/Austin TX, Rhode Island, Massachusetts, Edmonton/St. Albert Ontario/
Alberta, Chicago, Lynn MA, Mellenville NY, and a UK entity), none tied to
Vicksburg, MS.

## Website-gap — CONFIRMED, no dedicated site

DNS-checked 4 guessed domains (bennyspaintingvicksburg.com,
bennyspaintingms.com, bennyspaintingvicksburgms.com/.net) — all NXDOMAIN.
One lookalike domain, bennyspaintingllc.com, does resolve but confirmed via
search to be the unrelated Round Rock, TX business — not this one. No
independent website surfaced for the Vicksburg entity in any search
phrasing.

## Email, phone, address — NOT FOUND (a real tooling wall, not a shortfall)

No email surfaced anywhere. Phone and address also couldn't be confirmed
this run: direct WebFetch on every plausible source (Facebook, Yelp, BBB,
Houzz, YellowPages) returned EGRESS_BLOCKED, and WebSearch confirmed the
listings exist without ever surfacing phone/address text in result
snippets, despite ~10 different query phrasings (area-code-anchored,
zip-anchored, street-name-anchored). This reads as a genuine tooling
ceiling this run, not an under-effort miss.

One very weak, uncorroborated signal from a people-search/data-broker site
("Benny M Terrell in Vicksburg, MS") surfaced — **not used**, data-broker
name matches are notoriously unreliable and this wasn't independently
confirmed.

## Response-time / pain signal

No review text was retrievable to quote directly. The honest pitch angle
is structural, not anecdotal: zero owned web presence means every prospect
has to scroll Facebook or dig through Yelp just to find a phone number.

## Gate outcome

- Website-gap: **CONFIRMED**.
- Email gate: **FAILED** — genuinely not found, no domain to guess a
  pattern from.

**Held at `stage: found`.** Not a dead end on the business — a real
website-track fit once contact info can be pinned down (Kevin dialing the
listed Yelp/Facebook pages directly, or a session with unblocked fetch
access, is the concrete next step).

*Sourcing note: facebook.com, yelp.com, bbb.org, houzz.com, yellowpages.com
all returned EGRESS_BLOCKED this run.*
