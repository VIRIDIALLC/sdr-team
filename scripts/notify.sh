#!/usr/bin/env bash
# Post a one-line status to the crew's Google Chat feed — Kevin's live visibility
# stream. Reads the webhook from $GOOGLE_CHAT_WEBHOOK_URL; never hardcode it here.
# No-ops (exit 0) if the webhook isn't set, so it never blocks your real work.
# Usage: scripts/notify.sh "✅ Sato: drafted July Yelp reimbursement invoices (2)"
set -u
msg="${1:-}"
[ -z "$msg" ] && { echo "usage: notify.sh <message>"; exit 1; }
[ -z "${GOOGLE_CHAT_WEBHOOK_URL:-}" ] && { echo "GOOGLE_CHAT_WEBHOOK_URL not set — skipped"; exit 0; }
python3 - "$msg" <<'PY'
import json, os, sys, urllib.request
msg = sys.argv[1]
url = os.environ["GOOGLE_CHAT_WEBHOOK_URL"]
data = json.dumps({"text": msg}).encode()
req = urllib.request.Request(url, data=data, headers={"Content-Type": "application/json"})
try:
    urllib.request.urlopen(req, timeout=15)
    print("posted to Chat")
except Exception as e:
    print(f"Chat post failed (non-fatal): {e}")
PY
