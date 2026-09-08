# Email signature - read this before any agent sends mail

Kevin, 2026-09-08, after a batch went out with a hand-typed signature and a
mangled booking link: *"whats the fuckin deal with my email signature. this
needs to be fixed, i really dont know why this is so difficult"*

## Why it keeps happening

**Gmail does not attach your configured signature to a message created through
the API.** The signature in Gmail settings fires only when a human composes in
the Gmail web UI. Every send by an agent, whether through KIREEK's backend or
the Gmail MCP connector, arrives with exactly what the sender put in the body.

So an agent that types a signature by hand produces a plain-text imitation of
the real one: no logo, no green rule, no social icons, no booking button.

**Second trap.** On a plain-text-only send, Gmail rewrites bare URLs in the
delivered copy into `https://www.google.com/url?q=...&source=gmail&ust=...`.
The booking link then reads as a Google redirect. It looks like spam, and it
is a deliverability negative on a domain we just fixed SPF for.

## The rule

Every automated send passes **both** a plain-text body and an HTML body. The
HTML body ends with the block below, verbatim. Never retype it.

In KIREEK, import it, do not copy it:

```python
import signature
signature.HTML   # the real one
signature.TEXT   # plain-text fallback only
```

Through the Gmail MCP connector, pass `htmlBody` with this appended:

```html
<table cellpadding="0" cellspacing="0" style="font-family: Arial, Helvetica, sans-serif; color: #222; font-size: 13px;">
  <tr>
    <td style="padding-right: 16px; vertical-align: top;">
      <img src="https://cdn.magicpatterns.com/uploads/dBgonnHgNocdZqWCx2rT29/VA-Logo_(1).png" width="72" height="72" alt="Viridia Analytics" style="display: block;">
    </td>
    <td style="vertical-align: top; border-left: 2px solid #10B981; padding-left: 16px;">
      <a href="https://api.viridiaanalytics.com/widget/booking/hv5pIfS27zbJCMMGNnkJ" style="color: #1155CC; font-weight: bold; text-decoration: underline; font-size: 12px; letter-spacing: 0.03em;">SCHEDULE A MEETING WITH ME</a><br>
      <span style="font-weight: bold; font-size: 14px;">Kevin Rogers</span><br>
      <span style="color: #555;">Founder - Director of Sales, Viridia Analytics</span><br>
      <span style="color: #555;">Phone: 623-300-0708 &nbsp;|&nbsp; Email: <a href="mailto:kevin@viridiaanalytics.com" style="color: #555;">kevin@viridiaanalytics.com</a></span><br>
      <span style="color: #555;">Phoenix, Arizona &nbsp;|&nbsp; <a href="https://www.viridiaanalytics.com" style="color: #10B981;">www.viridiaanalytics.com</a></span><br>
      <div style="margin-top: 6px;">
        <a href="https://www.linkedin.com/in/kevin-rogers-448757152/" style="margin-right: 6px;"><img src="https://img.icons8.com/color/24/linkedin.png" width="20" height="20" alt="LinkedIn"></a>
        <a href="https://www.instagram.com/p/DHe2nlvSOjj/" style="margin-right: 6px;"><img src="https://img.icons8.com/color/24/instagram-new.png" width="20" height="20" alt="Instagram"></a>
        <a href="https://share.google/ydhfiRgAAhvuBWfV6" style="margin-right: 6px;"><img src="https://img.icons8.com/color/24/google-logo.png" width="20" height="20" alt="Google"></a>
        <a href="https://www.yelp.com/biz/viridia-analytics-phoenix-2"><img src="https://img.icons8.com/color/24/yelp.png" width="20" height="20" alt="Yelp"></a>
      </div>
    </td>
  </tr>
</table>
```

## Checks before sending

- The booking link is an `<a href="https://api.viridiaanalytics.com/widget/booking/...">`,
  never a bare URL in plain text.
- No em dash anywhere, including the signature. See `_house-style.md`.
- One signature only. If the message is a reply, the quoted thread already
  carries the old one; do not add a second.
