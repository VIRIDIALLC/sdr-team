```
CALL CARD
  Ask for:   NO NAME FOUND — checked Facebook About, BBB, Yelp, targeted
             name-guess searches
  Phone:     (641) 799-5136
  Response:  n/a (website track)
  Hook:      "You're on Facebook but nowhere else online — anyone who
              searches 'plumber Ottumwa' before calling you finds three
              other companies first."
```

## Company summary

JB Plumbing — Ottumwa, IA. General plumbing service: new construction,
remodeling, water service, sewer repair, water heaters, residential and
commercial. Serves Ottumwa plus Centerville, Albia, Oskaloosa, Bloomfield,
Agency. Only known presence is a Facebook page.

## Website-gap — CONFIRMED ABSENT

DNS-checked six guessed domains for this exact business
(jbplumbingottumwa.com, jbplumbingiowa.com, jbplumbingia.com,
jbplumbingottumwaiowa.com, jbplumbingofottumwa.com,
jbplumbingiowaservices.com) — all NXDOMAIN. Domains that DO resolve
(jbplumbing.com, jbplumbingllc.com, jb-plumbing.com, jbplumbingservices.com)
trace to unrelated "JB Plumbing" businesses in other states (see collision
section). No owned domain surfaced anywhere tied to phone (641) 799-5136
or Ottumwa, IA across BBB, Angi, Yelp category pages, or general search.
Decisive — website-gap gate satisfied.

## Owner/contact name — NOT FOUND

Tried the Facebook page's About section (blocked by this environment's
egress proxy, could not read directly), BBB Ottumwa listings, Yelp,
targeted first-name guesses. One "Jeff Belleville, JB Plumbing" hit
surfaced but traces to the already-known La Verne, CA collision — not
this business. Left blank per the never-placeholder rule.

## Email — NOT FOUND (required gate, not cleared)

No website/domain exists to derive a pattern from. Facebook page, BBB, and
directory searches returned no email string tied to this phone/location.
**Holding at `stage: found` on the email gate** — this is not a dead end
on the business itself, just currently unreachable by email.

## Collision risk — several ruled out, one unresolved lead flagged

"JB Plumbing" is a very generic name. Ruled out this run (different
address/phone/state, confirmed via search snippets): La Verne CA (Jeff
Belleville, already known), Wyoming (jbplumbingwyo.com), South
Carolina/Greenville (jbplumbingsc.com, jb-plumbing.com), Harriman TN
(jbplumber.com, phone 865-970-9157), plus Brooklyn/Centereach NY, Kennesaw
GA, Peabody MA, Odenville AL, Sharon Hill PA, Calgary AB.

**Unresolved, worth a flag for a future pass:** a "JB Plumbing LLC" at
18949 30th St, Blakesburg, IA (~9 miles from Ottumwa, same county) appears
on BuildZoom/Yelp/Birdeye/BBB with contractor license C140373 (inactive),
also tied in search results to "B and G Enterprises LLC," phone (641)
938-2631, admin Jeff Bernard — a **different** phone number than this
prospect's (641) 799-5136. Could be the same business listed under a
nearby town's address, or a genuinely separate entity. Not merged into
this record — treat as unconfirmed/separate until someone verifies the
phone number matches.

## Gate outcome

- Website-gap: **CONFIRMED**.
- Email gate: **FAIL** — no domain to guess from, nothing found directly.
- Owner-name: not found, left blank.

**Held at `stage: found`.** Not a dead end — real, verifiable business
with a confirmed website gap and a working phone number, just not
currently reachable by email.

*Sourcing note: facebook.com, bbb.org, yelp.com, jbplumber.com, and
birdeye.com were all egress-blocked to direct WebFetch this run — findings
above are search-snippet-sourced except the DNS resolution checks, which
were direct and decisive.*
