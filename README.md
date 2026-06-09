# whoWeAre ?? - Portfolio Website

Premium digital studio portfolio. Dark-tech aesthetic with clean grid layouts.

## Tech Stack

- HTML5 (Semantic)
- CSS3 (Custom Properties + BEM)
- JavaScript (ES Modules)
- Google Fonts: Inter + JetBrains Mono
- FontAwesome 6.5

## Project Structure

```
src/
├── tokens/           # Design tokens (CSS custom properties)
│   ├── colors.css    # Color palette & semantic mappings
│   ├── typography.css # Font families, sizes, weights
│   └── spacing.css   # Spacing scale, radius, transitions
├── styles/           # Stylesheets (import order matters)
│   ├── reset.css     # Modern CSS reset
│   ├── base.css      # Global base styles
│   ├── layout.css    # Container & section primitives
│   └── components.css # BEM component styles
├── scripts/          # JavaScript modules
│   ├── main.js       # Entry point (orchestrator)
│   ├── scroll-reveal.js # IntersectionObserver reveals
│   └── navigation.js # Mobile menu + active link tracking
└── components/       # HTML partials (reference)
```

## Getting Started

```bash
# Any static server works. Examples:

# Python
python3 -m http.server 8080

# Node (if installed)
npx serve .

# PHP
php -S localhost:8080
```

Then open http://localhost:8080

## Design System

- **Palette:** Slate-950 base, Cyber Cyan (#06b6d4) accent, Emerald (#10b981) secondary
- **Typography:** Inter (body), JetBrains Mono (code/accents)
- **Spacing:** 8px base grid
- **Radius:** Sharp (3-8px), consistent scale
- **Borders:** Ultra-thin slate-800, no heavy shadows

## Architecture

See `.specify/memory/` for project constitutions:
- `constitution.md` - Product vision & principles
- `architecture_constitution.md` - Layer rules & invariants
- `security_constitution.md` - Security policies

