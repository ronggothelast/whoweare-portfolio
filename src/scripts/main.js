/**
 * Main Entry - whoWeAre ?? Portfolio
 * Orchestrates all JS modules.
 */

import { init as initScrollReveal } from './scroll-reveal.js';
import { init as initNavigation } from './navigation.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initScrollReveal();
});
