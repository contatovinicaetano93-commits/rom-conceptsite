# AGENTS.md

## Cursor Cloud specific instructions

This repo is a single **Next.js 16** app (`rom-concept-app`) — a static marketing/landing page for the "ROM Concept" beauty salon. There is no backend, database, or environment variables required to run it.

- Standard commands live in `package.json` scripts: `npm run dev` (Turbopack dev server on port 3000), `npm run build`, `npm start`, and `npm run lint` (ESLint).
- Dev server: `npm run dev` starts on `http://localhost:3000`. It uses Turbopack and is ready in well under a second.
- There are no automated tests in this repo; verification is manual via the dev server / browser.
- `npm run lint` currently reports one pre-existing error in `src/app/page.tsx` (`@next/next/no-html-link-for-pages`). This is unrelated to environment setup — do not treat it as a setup failure.
- The landing page has an intro overlay animation on load and interactive UI (music play/pause button, carousels, unit tabs). Give the intro a couple of seconds to finish, or interact once to dismiss it, before testing other UI.
