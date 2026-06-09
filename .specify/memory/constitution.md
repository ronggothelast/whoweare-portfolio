# whoWeAre ?? - Product Constitution

## Product Vision
Premium portfolio website for a software house group. Clean, dark-tech aesthetic 
with high-contrast grid layouts inspired by Exercism's design DNA, elevated with 
premium dark-mode textures and sophisticated spacing.

## Tech Stack
| Technology | Version / Source |
|---|---|
| HTML5 | Semantic elements, no div soup |
| CSS3 | Custom Properties, BEM naming, Grid/Flexbox |
| JavaScript | ES Modules, no framework |
| Tailwind CSS | CDN (play) for utility classes |
| Google Fonts | Inter (body), JetBrains Mono (code/accents) |
| FontAwesome | 6.5 CDN for icons |

## Design Governance (taste-skill)
- DESIGN_VARIANCE: 7 (offset layouts, asymmetric)
- MOTION_INTENSITY: 5 (CSS transitions, IntersectionObserver reveals)
- VISUAL_DENSITY: 4 (airy, generous spacing)

## Engineering Principles
1. Separation of concerns: tokens / base / components / utilities are distinct CSS files
2. Single responsibility: each JS module handles one concern
3. BEM naming for custom components, Tailwind utilities for spacing/layout overrides
4. No inline styles. All styling via CSS classes.
5. Semantic HTML5: header, nav, main, section, article, footer. No div-as-section.
6. Accessibility first: focus-visible, aria-labels, semantic landmarks, prefers-reduced-motion
7. Performance: no render-blocking JS, passive scroll listeners, IntersectionObserver for reveals
8. Mobile-first responsive: base styles = mobile, breakpoints scale up
