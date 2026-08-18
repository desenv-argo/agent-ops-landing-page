---
name: testing
description: "Use when selecting or running validation for landing-page React/Vite source, links, responsive behavior, or visual regressions."
---

# Testing Workflow

Use the smallest validation that can falsify the change: TypeScript/build for React source, local
HTTP browser verification for static assets and links, and desktop/mobile checks for layout or CTA
behavior. Do not run deployment workflows as a substitute for targeted validation. Add automated
tests only when the behavior has enough logic or regression risk to justify maintenance.