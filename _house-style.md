# House style — every agent, every repo

Machine-written by KIREEK (`voice-agent/backend/house_style.py`). Do not hand-edit;
edit the module.

Kevin's ruling, 2026-09-08: **"Em dashes are a dead giveaway. Every agent should
know this by now."** Before this file the rule existed only in people's heads.

## Never ship these characters

| Character | Instead |
|---|---|
| `—` em dash | a comma, a period, or a colon |
| `–` en dash | "to" in a range, or a hyphen |
| `'` `'` curly apostrophes | straight `'` |
| `"` `"` curly quotes | straight `"` |
| `…` ellipsis character | three periods, or cut the sentence |
| non-breaking / zero-width spaces | a normal space |

The em dash is the loudest one. A contractor reading a LinkedIn post does not
type em dashes on a phone, so seeing one tells them who wrote it before they
read a word of the argument.

## Never ship these phrases

delve · leverage · seamless · robust · tapestry · testament to · navigate the ·
dive in · game-changer · unlock the · elevate your · in today's · fast-paced ·
cutting-edge · it's not just · isn't just about · moreover · furthermore ·
in conclusion · landscape of · at the end of the day · revolutionize ·
transformative · holistic · synergy · best-in-class ·
"I hope this email finds you well" · "I wanted to reach out"

## Also a tell, and harder to grep for

- **The three-part list, every time.** Real writing varies. Two items, or four.
- **"It's not X. It's Y."** as a rhythm, repeated.
- **A summary paragraph that restates what was just said.** Stop at the point.
- **Every paragraph the same length.** Vary it. A one-line paragraph lands.
- **Hedging everything.** Pick a side; Kevin's voice is direct.

## Where this applies

Anything a person outside Viridia reads: post copy, ad copy, email bodies,
landing pages, client reports, text set inside a creative. Internal notes,
rationale sections and commit messages are exempt, but do not paste from a
notes section into copy without cleaning it first, which is exactly how a dash
gets out.

## Check yourself before scheduling

```python
import house_style
bad = house_style.scan(copy_text)     # [] means clean
```

Or from the repo root:

```
python3 -c "import sys,house_style;print(house_style.scan(open(sys.argv[1]).read()))" FILE
```
