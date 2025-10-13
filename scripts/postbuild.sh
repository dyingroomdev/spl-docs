#!/usr/bin/env bash
set -euo pipefail

cd "$(dirname "$0")/.."

if [ "${VITE_SITE_ENV:-production}" = "production" ] && [ -f deploy/static-manifest.json ]; then
  manifest=deploy/static-manifest.json
  echo "Refreshing CDN cache with manifest $manifest"
  while IFS= read -r path; do
    curl -fsS "https://docs.splshield.com${path}" >/dev/null || true
  done < <(jq -r '.paths[]' "$manifest")
fi
