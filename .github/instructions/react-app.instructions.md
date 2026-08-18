---
applyTo: "react-app/src/**/*.ts,react-app/src/**/*.tsx"
---

# React Source - AgentOps Landing

- Follow the existing functional component and CSS conventions in `react-app/src/`; use a nearby
  section as precedent before introducing a new local pattern.
- Keep copy and CTA URLs centralized in `react-app/src/config.ts` when they are shared values.
- Preserve keyboard semantics, focus behavior, reduced-motion friendliness, responsive layout, and
  stable media sizing. Use the existing assets; do not replace product media with decorative SVGs.
- Never include secrets or credentials in browser code. Checkout and external links must preserve
  secure URLs and appropriate `rel` attributes when opening a new tab.
- Do not modify `react-app/public/staticwebapp.config.json` or dependency manifests unless the task
  explicitly requires deployment or a dependency decision.