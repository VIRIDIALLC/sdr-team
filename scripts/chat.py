#!/usr/bin/env python3
"""Crew chatrooms via the Google Chat API — real, two-way team/project rooms
Kevin is a member of. An agent creates a room per team/project, POSTS updates,
and READS what others said (so a dispatched session can pick up the thread on
its next run). Prefix your message with your name so Kevin sees who's talking.

Auth: a Google Cloud service account with domain-wide delegation, impersonating
Kevin (owner of the viridiaanalytics.com Workspace). Environment:
  GOOGLE_CHAT_SA_FILE      path to the service-account JSON key   (required)
  GOOGLE_CHAT_IMPERSONATE  user to act as (default kevin@viridiaanalytics.com)
If GOOGLE_CHAT_SA_FILE isn't set the script SKIPS cleanly (exit 0) so it never
blocks your real work. Room name -> space id is cached in chat/spaces.json so a
room is stable across runs.

Usage:
  chat.py ensure "SEO — ClientX"                       # find/create room, print space id
  chat.py post   "SEO — ClientX" "Pushan: audit done, handing title fixes to Web"
  chat.py read   "SEO — ClientX" [N]                   # print the last N messages
"""
import json
import os
import sys
import pathlib
import urllib.parse
import urllib.request
import urllib.error

SCOPES = [
    "https://www.googleapis.com/auth/chat.spaces",
    "https://www.googleapis.com/auth/chat.messages",
    "https://www.googleapis.com/auth/chat.memberships",
]
IMPERSONATE = os.environ.get("GOOGLE_CHAT_IMPERSONATE", "kevin@viridiaanalytics.com")
CACHE = pathlib.Path("chat/spaces.json")


def _token():
    sa_file = os.environ.get("GOOGLE_CHAT_SA_FILE", "").strip()
    if not sa_file or not os.path.isfile(sa_file):
        print("GOOGLE_CHAT_SA_FILE not set / not found — chat skipped (see chat/README.md)")
        sys.exit(0)  # skip cleanly, never block the agent's real work
    try:
        from google.oauth2 import service_account
        from google.auth.transport.requests import Request
    except ImportError:
        print("google-auth not installed — run: pip install google-auth  (chat skipped)")
        sys.exit(0)
    creds = service_account.Credentials.from_service_account_file(
        sa_file, scopes=SCOPES, subject=IMPERSONATE
    )
    creds.refresh(Request())
    return creds.token


def _api(method, path, token, body=None):
    url = "https://chat.googleapis.com/v1/" + path.lstrip("/")
    data = json.dumps(body).encode() if body is not None else None
    req = urllib.request.Request(
        url, data=data, method=method,
        headers={"Authorization": f"Bearer {token}", "Content-Type": "application/json"},
    )
    try:
        with urllib.request.urlopen(req, timeout=20) as r:
            return json.loads(r.read() or "{}")
    except urllib.error.HTTPError as e:
        sys.exit(f"Chat API {method} {path} failed: {e.code} {e.read().decode()[:400]}")


def _load_cache():
    try:
        return json.loads(CACHE.read_text())
    except Exception:
        return {}


def _save_cache(c):
    CACHE.parent.mkdir(parents=True, exist_ok=True)
    CACHE.write_text(json.dumps(c, indent=2))


def ensure(name, token):
    cache = _load_cache()
    if name in cache:
        return cache[name]
    resp = _api("POST", "spaces:setup", token,
                {"space": {"spaceType": "SPACE", "displayName": name}})
    space = resp.get("name") or (resp.get("space") or {}).get("name")
    if not space:
        sys.exit(f"space setup returned no name: {resp}")
    cache[name] = space
    _save_cache(cache)
    return space


def main():
    if len(sys.argv) < 3:
        sys.exit(__doc__)
    cmd, name = sys.argv[1], sys.argv[2]
    token = _token()
    if cmd == "ensure":
        print(ensure(name, token))
    elif cmd == "post":
        if len(sys.argv) < 4:
            sys.exit("post needs a message")
        space = _load_cache().get(name) or ensure(name, token)
        _api("POST", f"{space}/messages", token, {"text": sys.argv[3]})
        print("posted")
    elif cmd == "read":
        n = int(sys.argv[3]) if len(sys.argv) > 3 else 20
        space = _load_cache().get(name) or ensure(name, token)
        q = urllib.parse.urlencode({"pageSize": n, "orderBy": "createTime desc"})
        resp = _api("GET", f"{space}/messages?{q}", token)
        for m in reversed(resp.get("messages", [])):
            print(f"[{m.get('createTime','')[:19]}] {m.get('text','')}")
    else:
        sys.exit(f"unknown command {cmd}")


if __name__ == "__main__":
    main()
