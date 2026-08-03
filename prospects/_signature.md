# Kevin's real email signature

Source of truth for outbound email sign-offs. Confirmed with Kevin
2026-08-03. Appended automatically at send time by `_gmail_send_message`
in KIREEK's `main.py` (not something Elly types into a draft's body) —
see "How this gets used" below.

**Known open issue (2026-08-03):** test-sent to Kevin's own inbox and
checked on both platforms. Gmail desktop/web renders the full signature
correctly (logo, links, all 4 social icons). Gmail's **mobile app**
truncates it behind a "..." after just the "Schedule a meeting" line —
name/phone/email/location/icons never show unless tapped to expand.
This looks like Gmail mobile's own signature-detection/collapse
behavior reacting to the `<table>`-based layout, not broken HTML (the
same markup renders fully on desktop). Not fully resolved — worth
retesting if the layout ever changes, since a meaningful share of
prospects will read on mobile.

## Data

- Name: Kevin Rogers
- Title: Founder — Director of Sales
- Company: Viridia Analytics
- Phone: 623-300-0708
- Email: kevin@viridiaanalytics.com
- Location: Phoenix, Arizona
- Website: https://www.viridiaanalytics.com
- Booking link ("Schedule a meeting with me"): https://api.viridiaanalytics.com/widget/booking/hv5pIfS27zbJCMMGNnkJ
- Logo (real, hosted, confirmed live on viridiaanalytics.com 2026-08-03): https://cdn.magicpatterns.com/uploads/dBgonnHgNocdZqWCx2rT29/VA-Logo_(1).png
- LinkedIn: https://www.linkedin.com/in/kevin-rogers-448757152/
- Instagram: https://www.instagram.com/p/DHe2nlvSOjj/
- Google: https://share.google/ydhfiRgAAhvuBWfV6
- Yelp: https://www.yelp.com/biz/viridia-analytics-phoenix-2

## Why icon images, not raw SVG

Kevin's own signature generator produced SVG icons that didn't show up
right — that's a known, common email-client problem, not a one-off bug.
Most email clients (Outlook desktop especially) strip inline `<svg>` out
of HTML email entirely. The reliable, standard practice (what most real
signature-generator tools actually do) is small raster icon images via
`<img>` instead. This signature uses icons8's public icon CDN
(`img.icons8.com`) for that reason — stable, widely used for exactly
this purpose, not a random choice.

## How this gets used

`_gmail_send_message` (main.py) builds a multipart email — a plain-text
version (for clients that don't render HTML) and an HTML version with
this actual signature block, logo, and clickable social/booking links.
Elly's drafts should NOT type out "Kevin" or any sign-off as the last
line of the body anymore — the real signature gets appended
automatically at send time. Ending a draft's last paragraph naturally
(e.g. "Worth a quick chat?") is enough; do not also add a name/sign-off
line, or it'll look doubled once the real signature is appended below it.

## HTML block (what actually gets appended)

```html
<table cellpadding="0" cellspacing="0" style="font-family: Arial, Helvetica, sans-serif; color: #222; font-size: 13px;">
  <tr>
    <td style="padding-right: 16px; vertical-align: top;">
      <img src="https://cdn.magicpatterns.com/uploads/dBgonnHgNocdZqWCx2rT29/VA-Logo_(1).png" width="72" height="72" alt="Viridia Analytics" style="display: block;">
    </td>
    <td style="vertical-align: top; border-left: 2px solid #10B981; padding-left: 16px;">
      <a href="https://api.viridiaanalytics.com/widget/booking/hv5pIfS27zbJCMMGNnkJ" style="color: #1155CC; font-weight: bold; text-decoration: underline; font-size: 12px; letter-spacing: 0.03em;">SCHEDULE A MEETING WITH ME</a><br>
      <span style="font-weight: bold; font-size: 14px;">Kevin Rogers</span><br>
      <span style="color: #555;">Founder &mdash; Director of Sales, Viridia Analytics</span><br>
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

## Plain-text fallback (for the non-HTML part of the send)

```
Kevin Rogers
Founder - Director of Sales, Viridia Analytics
Phone: 623-300-0708 | Email: kevin@viridiaanalytics.com
Phoenix, Arizona | www.viridiaanalytics.com
Schedule a meeting: https://api.viridiaanalytics.com/widget/booking/hv5pIfS27zbJCMMGNnkJ
LinkedIn: https://www.linkedin.com/in/kevin-rogers-448757152/
```
