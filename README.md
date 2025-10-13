# SPL Shield Documentation Site

React + Vite front-end for the SPL Shield client documentation. It covers product guides, a searchable knowledge base, and an online whitepaper, and ships with Docker assets for VPS deployment.

The knowledge base now reads from `faq.json` and ships with fuzzy search (Fuse.js) so operators can locate answers by question, answer text, or tags with typo tolerance.

## Requirements

- Node.js 20+
- npm 10+
- Docker (optional, for containerized deployments)

## Local Development

```bash
npm install
npm run dev
```

The dev server runs on `http://localhost:5173` by default.

## Environment Configuration

Environment variables prefixed with `VITE_` are exposed to the front-end. Copy `.env.example` to the mode you need:

- `.env.development` – values used by `npm run dev`
- `.env.production` – values baked into the production build

`VITE_SITE_ENV` controls the environment banner in the UI, `VITE_SUPPORT_EMAIL` feeds footer contact info, and `VITE_WHITEPAPER_VERSION` labels the whitepaper badge.

## Building

```bash
npm run build
npm run preview
```

`npm run preview` serves the production bundle locally for smoke-testing.

The build command also executes `scripts/postbuild.sh`, which optionally warms CDN caches by hitting every path listed in `deploy/static-manifest.json` (only when `VITE_SITE_ENV=production`).

## Docker Workflow

The project ships with a multi-stage `Dockerfile` (Vite build + Nginx runtime) and `docker-compose.yml` for production hosting. A helper script gives you a one-click deployment flow:

```bash
./scripts/deploy.sh
```

This script:

1. Ensures Docker + the compose plugin are available.
2. Exports `VITE_SITE_ENV=production` for the build stage.
3. Runs `docker compose build` to produce the Nginx image.
4. Starts the container in detached mode on host port `53121` (mapped to container port `80`).

Point your reverse proxy (Caddy/Nginx/Traefik/etc.) at `localhost:53121` and terminate TLS there. To stop the container run `docker compose down`.

## Deployment Checklist

- Build the image (`docker compose build` or CI pipeline).
- Push the image to your registry or copy it to the VPS.
- Run the container and ensure your reverse proxy routes `docs.splshield.com` to the container.
- Upload the signed whitepaper assets (`public/whitepaper_v101.pdf`, `public/whitepaper_v101.epub`) or update `src/pages/Whitepaper.tsx` if you change the filenames.

## Project Structure Highlights

- `src/pages` – high-level routes (Overview, Product Guides, Knowledge Base, Whitepaper).
- `src/components` – shared layout and UI pieces.
- `src/content` – MDX source files plus helpers that index docs by slug and category.
- `src/data` – structured data for the knowledge base cards and FAQ content.
- `docker/` – Nginx config used in the production container.
- `faq.json` – source-of-truth for knowledge base FAQs; edit this file to publish new answers.
- `spl_shield_product_guides_training.json` – product playbooks used to generate the Product Guidebook doc.
- `spl_shield_overview.json` – master overview copy rendered on the Overview documentation page.

Extend the content files or swap them for a CMS/markdown loader as the documentation scales.
