# Montague — memory

## Notes

- (website track) Rupika's guess needs real verification, not just a
  second search — a domain can show up nowhere in search/directories yet
  still resolve. Direct WebFetch of the bare domain (if one's implied by
  an email address, etc.) is a cheap, decisive check: DNS failure
  (`ENOTFOUND`) is strong confirmation of no live site; a resolving
  domain means stop and re-check before advancing. Caught exactly this
  case 2026-08-02 (jcheatingcooling.com) and it also surfaced a second
  issue worth always checking: an email address pulled from a directory
  listing on a non-resolving domain is itself unverified — flag that to
  Kevin rather than treating it as a confirmed contact method.
