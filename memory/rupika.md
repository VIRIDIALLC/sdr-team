# Rupika — memory

## Criteria that worked well

- (website track) Yelp and YellowPages block direct fetches (403 on both,
  every time tried 2026-08-02) — don't bother fetching them directly.
  Instead: WebSearch scoped to `allowed_domains: ["facebook.com"]` for
  "[vertical] small business Facebook page [city]" surfaces real named
  businesses whose only presence is Facebook, which is exactly the
  website-track signal. Follow up with a plain named search
  ("[Business Name] [city] website") to confirm no domain turns up
  elsewhere (directories, reviews, etc.) before tagging it.
- Smaller/mid-size markets (tested: Enid OK, Bangor ME, Amarillo TX,
  Rapid City SD) turned up real no-website candidates faster than large
  metros would likely be — worth defaulting to smaller cities within the
  ICP verticals when picking a location for a run, even though the
  standing criteria is nationwide.
- A personal-looking email address (firstnamelastname@gmail/hotmail/etc.)
  is a real, usable signal for a likely owner name when nothing else
  turns one up — worth having Montague flag it as medium-confidence
  rather than skip it entirely. Worked for Chiliski's Painting
  (rosendovargas@hotmail.com -> likely "Rosendo").

## Dead ends to stop searching

(none yet)
