# Genezio Landing Page

## Overview
This is the Genezio landing page project — a React/Vite application in the `new-landing` directory. There is also a Hugo-based deployment platform in `deployment-platform/`.

## Project Structure
- `new-landing/` — Main frontend (React + Vite + TypeScript + Tailwind CSS)
  - Uses pnpm as the package manager
  - Uses React Router v7 for routing
  - Supports SSG (Static Site Generation) via `prerender.mjs`
- `deployment-platform/` — Hugo-based static site (secondary, not actively served)
- `genezio.yaml` — Genezio deployment configuration

## Running the App
The main workflow runs: `cd new-landing && pnpm run dev`
- Serves on port 5000 (configured in `vite.config.ts`)
- Host: `0.0.0.0` with `allowedHosts: true` for Replit proxy compatibility

## Development
```bash
cd new-landing
pnpm install
pnpm run dev
```

## Build
```bash
cd new-landing
pnpm run build          # Full SSG build
pnpm run build:client   # Client-only build (used for static deployment)
```

## Deployment
Configured as a static site deployment:
- Build command: `cd new-landing && pnpm run build:client`
- Public directory: `new-landing/dist`
