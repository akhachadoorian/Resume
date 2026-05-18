# Alex — Portfolio / Resume Site

Personal portfolio and resume website built with React, TypeScript, and Vite.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite** — build tool and dev server
- **React Router DOM** — client-side routing
- **GSAP** + **ScrollTrigger** — animations
- **Lenis** — smooth scroll (synced to GSAP ticker)
- **SCSS** — custom design token system (color, spacing, typography, breakpoints)

## Getting Started

```bash
npm install
npm run dev
```

Other scripts:

| Command | Description |
|---|---|
| `npm run build` | Type-check and build for production |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project Structure

```
src/
├── data/          # Static content and nav items
├── hooks/         # Custom React hooks
├── layout/        # Persistent UI (Navigation, etc.)
├── pages/         # Route-level page components
├── styles/        # Global SCSS — tokens, base, mixins, utilities
├── types/         # Shared TypeScript types
└── util/          # Small utility components (LenisLink, SEO, etc.)
```

## Design Tokens

The SCSS token system lives in `src/styles/tokens/` and is re-exported from `src/styles/_variables.scss`. Tokens cover:

- **Colors** — Cobalt (primary), Neutral (warm gray), Vermillion (accent)
- **Typography** — Geist / Geist Mono / Space Grotesk, fluid type scale
- **Spacing, Breakpoints, Radii, Layout**

Light and dark mode semantic tokens are defined in `_variables.scss`.
