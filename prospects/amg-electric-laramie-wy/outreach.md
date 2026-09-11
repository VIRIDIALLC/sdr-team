# Outreach draft

**Greeting: "Adam."** First name only, no surname found anywhere. Montague
checked BBB, the Wyoming SOS (CAPTCHA-gated, unreachable) and LinkedIn, and
correctly refused to attach either of the two same-first-name LinkedIn profiles
that surfaced, since neither has any tie to Laramie or to electrical work. A real
first name with no surname is a confirmed name, not a partial one, so this takes
"Hi Adam," rather than a team greeting.

**Channel:** Email (Adam@amgelectric.biz, **medium-high confidence**. This is a
discovered address rather than a guessed pattern, corroborated across Facebook,
Angi and D&B against the correct phone and address, and the domain's mail
infrastructure is genuinely live: Google Workspace MX records plus an active SPF
and site-verification TXT record. The website is dead and the mailbox is not.
Nobody has confirmed the mailbox is actually monitored.)

**Subject:** amgelectric.biz

**Body:**

> Hi Adam,
>
> Your email address ends in amgelectric.biz, so everybody who has ever gotten an invoice or a card from you knows you own that domain. Some of them type it into a browser.
>
> I did. It comes back 404, and the https version won't connect at all. The mail side is set up properly and running fine. There just isn't a site behind it.
>
> The people landing on that aren't strangers. They already have your name and they're checking you out before they call, which is usually right before a bigger job gets decided.
>
> Putting a real site on the domain you already pay for is a few days of work and a one time build cost. Want me to show you what that would look like?
>
> Some of the shops I work with are at viridiaanalytics.com/case-studies.

---

**Note for Kevin:** Website track. Website build (Starter 500 / Growth 850 /
Premium 1,200+, plus 30 a month hosting). No price named in the email, per the
standing rule that the CTA is the call.

**The mechanism is that his own email address is the thing sending people to the
broken door, and that is new for this track.** Every website-track draft in this
repo so far argues some version of "you cannot be found" (worn many times over),
"somebody else owns your name" (Ken Adams, Bilskie, Johnston), "your site is
broken" (Al Jeffers) or "I could not reach you" (Expert Paint). This one argues
something narrower and more uncomfortable: the traffic hitting the 404 is not cold
search traffic, it is people who already have his card in their hand and are
looking him up on purpose. Those are the highest-intent visitors he will ever get
and they are the exact ones the dead domain catches.

**It is face-saving by construction.** The premise is that he did the organized
thing. He bought the domain, he set up real Workspace mail on it, he has been
running his business email through it for years. The site is the one piece missing,
which makes this "you are one step from done" rather than "you have neglected
this."

**Both technical claims are first-hand and Adam can check them in ten seconds.**
Rupika direct-fetched the domain and got HTTP 404 with a `ghs` server header;
Montague independently re-fetched and got the same, plus a failed TLS handshake on
both `https://amgelectric.biz` and the www variant, plus DNS A records pointing
into Google's parked-domain anycast block. Two people, two fetches, same answer.
The email says only what those fetches show.

**The 84% BrightLocal stat is out of the body again, and that conflict is now on
its third live draft.** `team/elly-outreach.md` names it as this track's standard
data point. `_acquisition-doctrine.md` §5 does not list it in Tier 1 or Tier 2, and
§8 says every claim we ship is Tier 1/2 sourced, our own measured data, or absent.
Doctrine wins under its own terms so it stayed out, and the email did not need it.
**This came up on Ken Adams (09-07), Expert Paint (09-09) and now here. I am still
not editing my own persona file to settle it**, because rewriting my own
instructions to resolve a conflict I found is Sue's seam, not mine. It wants a
ruling.

**The kit gap behind the last line.** There is still no website-track case study
anywhere in the selling kit. Both one-sheets in
`collateral/case-study-onesheets.md` are lead-response stories for The Complete
System, so the proof asset this email reaches for argues a different offer than
the email does. That is why the closing line points at the page generically, to
show him who I work with rather than to claim a result I do not have for this
offer. **One completed website build with a before-and-after attached to it is the
single most useful thing you could add to this track.** Nineteen prospects are now
sitting behind that gap.

**Before you dial:** phone **(307) 277-9832**, confirmed across four independent
sources, no conflicting number anywhere. 402 Corthell Road is the "Rock Laramie"
building, shared with a church and at least two unrelated LLCs' registered
addresses, so treat it as a mail drop rather than a shop until he says otherwise.
**Several unrelated "AMG Electric" businesses exist** in Mooresville NC, Tampa,
Victoria TX, Martinez CA, Boston and Edmonton. None are this one. Do not let any of
their details or domains bleed into the conversation.

---

**Angle considered and dropped:** the straight version of Montague's CALL CARD
hook, which is that he already owns the domain so he is one step from having a real
site, and it is probably costing him jobs to competitors who do show up in search.

Dropped because it is the generic website pitch with a domain detail bolted on, and
because the second half asserts a consequence nobody has measured. It also collapses
into "you cannot be found," which is the most worn mechanism on this entire track.
The version above keeps the same fact and gives it a specific victim, which is what
makes it an email rather than a brochure.
