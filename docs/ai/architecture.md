# Architecture

## Confirmed

- `index.html` is the lightweight static production landing artifact.
- `AgentOps Landing.dc.html` is an editable design-component artifact and `support.js` is its
  generated runtime; do not modify `support.js` manually.
- `react-app/` is a separate React 19/Vite 6 TypeScript implementation with sections in
  `src/components/`, shared copy/configuration in `src/config.ts`, and public assets in `public/`.
- Azure Static Web Apps workflow deploys the repository's static page; its build/deployment inputs
  must be confirmed before assuming React source is what production serves.

## Unknown

The source-of-truth synchronization process between `index.html` and `react-app/` is not validated
in code. Confirm target artifact whenever a request could affect both.