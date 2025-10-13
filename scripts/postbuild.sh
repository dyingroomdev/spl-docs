#!/bin/sh
set -eu

ROOT_DIR=$(cd "$(dirname "$0")/.." && pwd)
cd "$ROOT_DIR"

if [ "${VITE_SITE_ENV:-production}" = "production" ] && [ -f deploy/static-manifest.json ]; then
  if command -v jq >/dev/null 2>&1 && command -v curl >/dev/null 2>&1; then
    manifest=deploy/static-manifest.json
    echo "Refreshing CDN cache with manifest $manifest"
    jq -r '.paths[]' "$manifest" | while IFS= read -r path; do
      if [ -n "$path" ]; then
        curl -fsS "https://docs.splshield.com${path}" >/dev/null || true
      fi
    done
  else
    echo "Skipping CDN refresh (jq or curl unavailable)."
  fi
fi
