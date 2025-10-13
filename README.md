# SPL Shield Documentation Site

React + Vite front-end for the SPL Shield client documentation. It covers product guides, a searchable knowledge base, and an online whitepaper, and ships with Docker assets for VPS deployment.

The knowledge base now ships with fuzzy search (Fuse.js) so operators can locate answers by question, answer text, or tags with typo tolerance.

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

## Docker Workflow

The project includes a multi-stage `Dockerfile` that builds the static assets and serves them via Nginx with SPA routing. A convenience `docker-compose.yml` is provided for the VPS setup:

```bash
docker compose up --build
```

This binds the container’s port 80 to `53121` on the host (`http://localhost:53121`). Adjust the mapping if you need a different ephemeral port. Point your reverse proxy (e.g., Caddy, Nginx, Traefik) at that port and terminate TLS at the proxy.

## Deployment Checklist

- Build the image (`docker compose build` or CI pipeline).
- Push the image to your registry or copy it to the VPS.
- Run the container and ensure your reverse proxy routes `docs.splshield.com` to the container.
- Upload the signed whitepaper to `public/whitepaper.pdf` (or update the `Whitepaper` page link to match your asset location).

## Project Structure Highlights

- `src/pages` – high-level routes (Overview, Product Guides, Knowledge Base, Whitepaper).
- `src/components` – shared layout and UI pieces.
- `src/content` – MDX source files plus helpers that index docs by slug and category.
- `src/data` – structured data for the knowledge base cards and FAQ content.
- `docker/` – Nginx config used in the production container.

Extend the content files or swap them for a CMS/markdown loader as the documentation scales.
