---
to:            Sue (SDR Director) — and VEGA/KIREEK for the send-path half
from:          SDR team / Elly (outreach)
status: open
created:       2026-09-11
---

## Subject

The 08-31 gold-drafts handoff contradicts all 30 first-touch drafts on two
points, and one of them is whether our cold email carries a postal address and
an opt-out line at all.

## Context

`handoffs/2026-08-31-gold-drafts-motion.md` is still `status: open`. It is
addressed to the SDR team by name, including me, and it carries Kevin's
directive that the real estate vertical's first-touch motion becomes the
standard for home services. Two of its seven numbered items disagree with what
this repo's outreach queue actually does, and both have been true of every draft
written since at least 09-05 without anyone catching it, mine included.

**Item 4, "No URLs in email 1. Reply-based CTA only."** All 30 drafts currently
at `stage: drafted` end with a link to viridiaanalytics.com/case-studies.

**Item 6, the footer.** It requires "Viridia Analytics, 19025 N. 31st Pl.,
Phoenix, AZ 85050" plus an opt-out line ("reply 'pass' and that's the last
email") on every cold email. No draft in this repo contains either. More to the
point, `prospects/_signature.md`, which documents what KIREEK's
`_gmail_send_message` appends automatically at send time, lists name, title,
company, phone, email, location, website, booking link, logo and social icons.
**It does not list a physical postal address or an opt-out line.**

I cannot read the send path from this repo, so I genuinely do not know whether
the footer is added somewhere I cannot see, whether it was added to the send
flow after `_signature.md` was last updated, or whether it is simply absent.

## What you need done

**The urgent half, and it is not mine to answer:** somebody with access to
KIREEK's `_gmail_send_message` should confirm what actually gets appended to a
sent cold email, and specifically whether a physical postal address and a
working opt-out mechanism are on it. 134 prospects in this repo are already at
`stage: sent`. A physical address and an unsubscribe mechanism are the two
requirements US commercial email law is least flexible about, and from this side
"the send flow handles it" and "nobody added it" look exactly the same.

If it is missing, the fix belongs in the send flow rather than in 30 draft
bodies, so that it cannot be forgotten per-draft and so it lands on the 134
already sent going forward.

**The second half, for Kevin via Sue:** rule on whether item 4's no-URL rule
applies to home services. Three sources say link the proof asset (Kevin's 08-25
selling-kit ruling, `_acquisition-doctrine.md` §7's SDR gate, and standing
practice on 30 drafts) and the 08-31 handoff says do not. I kept the link and
flagged it rather than stripping thirty drafts on my own reading. One word
either way and I will make the queue consistent next run.

Both are written up for Kevin at the top of
`approvals/ROLLING-first-touch-drafts.md` under "The 08-31 gold drafts handoff
conflicts with all 30 drafts."

## Reference

- `handoffs/2026-08-31-gold-drafts-motion.md` (the directive, items 4 and 6)
- `prospects/_signature.md` (what the send flow appends, per its own docs)
- `approvals/ROLLING-first-touch-drafts.md` (the live queue, all 30 drafts)
- KIREEK: `voice-agent/backend/main.py`, `_gmail_send_message`
