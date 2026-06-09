# Architecture Constitution

## Layer Definitions

### Token Layer (src/tokens/)
Design decisions as CSS custom properties. No selectors, no layout, no components.
Files: colors.css, typography.css, spacing.css

### Base Layer (src/styles/)
Global resets, base element styles, layout primitives.
Files: reset.css, base.css, layout.css

### Component Layer (src/styles/)
BEM-structured component styles. Each component is self-contained.
Files: components.css

### Script Layer (src/scripts/)
ES modules, one concern per file. No global state pollution.
Files: main.js (orchestrator), scroll-reveal.js, navigation.js

## Project Invariants
- Tokens MUST be imported first (colors, typography, spacing)
- Base/reset MUST be imported second
- Components MUST be imported third
- No CSS @import (use <link> in HTML for proper cascade)
- No !important declarations
- No inline styles on HTML elements
- JS modules use export/import, not global variables
- All interactive elements must have focus-visible styles
- All animations must respect prefers-reduced-motion

## Folder Structure
```
whoWeAre-portfolio/
├── .specify/memory/          # Project governance
├── src/
│   ├── tokens/               # Design tokens (CSS custom properties)
│   │   ├── colors.css
│   │   ├── typography.css
│   │   └── spacing.css
│   ├── styles/               # Stylesheets
│   │   ├── reset.css
│   │   ├── base.css
│   │   ├── layout.css
│   │   └── components.css
│   ├── scripts/              # JavaScript modules
│   │   ├── main.js
│   │   ├── scroll-reveal.js
│   │   └── navigation.js
│   └── components/           # HTML partials (reference only)
├── public/                   # Static assets (images, icons)
├── index.html                # Entry point
├── .gitignore
└── README.md
```
