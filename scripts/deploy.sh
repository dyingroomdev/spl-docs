#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
COMPOSE_FILE="$ROOT_DIR/docker-compose.yml"

if ! command -v docker >/dev/null 2>&1; then
  echo "Error: docker is not installed or not in PATH" >&2
  exit 1
fi

if ! docker compose version >/dev/null 2>&1; then
  echo "Error: docker compose plugin is required (Docker 20.10+)." >&2
  exit 1
fi

export VITE_SITE_ENV="production"

echo "Building and deploying the SPL Shield docs container..."
docker compose -f "$COMPOSE_FILE" build

echo "Starting container in detached mode on port 53121..."
docker compose -f "$COMPOSE_FILE" up -d

echo "Deployment complete. Active containers:"
docker compose -f "$COMPOSE_FILE" ps

echo "If this is the first deployment ensure your reverse proxy points to :53121"
