# AgentOps Landing Engineering Harness

## Repository

This repository contains the AgentOps marketing landing page. The production static artifact is
`index.html`; the editable React/Vite implementation is in `react-app/`. The design-component
artifact and generated `support.js` are not edited unless the task explicitly targets them.

The React app uses React 19, TypeScript, and Vite. Its essential commands, run in `react-app/`, are
`npm run typecheck`, `npm run build`, and `npm run dev`. Static HTML can be served with a local HTTP
server when relevant assets or media need browser verification.

## Working Agreement

- Locate the rendered implementation before editing: `index.html` and `react-app/` are separate
  artifacts and should not silently drift.
- Make surgical, user-focused changes; preserve real links, checkout behavior, assets, accessibility,
  responsive layout, and performance.
- Do not hand-edit generated `support.js`, add dependencies, change deployment workflow, or touch
  large media assets without a concrete reason.
- Canonical reusable workflows live in `.agents/skills/`; adapters and instructions reference them.

## Adaptive Execution

| Tier | Use for | Default execution |
|---|---|---|
| 0 | copy, label, localized style, link | edit and quick visual/type check |
| 1 | component bug, isolated CTA/form behavior, small section | precedent, one Skill, targeted validation |
| 2 | multi-section flow, analytics/integration, asset strategy | compact plan, optional specialist, build, checkpoint if unfinished |
| 3 | payment/privacy/security flow, destructive deployment, broad conversion regression | risk map, Technical Lead, checkpoints, Quality Engineer |

The Main Agent implements by default. Tier 0/1 uses no subagents. Tier 2/3 has at most two total
specialist calls, only when uncertainty or independent verification can alter the decision.

## Context Economy

- Search before broad reading and use one relevant component as a precedent.
- Do not load every Skill, `docs/ai`, or `plan.md` automatically.
- Delegations receive a Task Packet with files, known facts, risk, and one question; they do not
  rediscover the site.

## Definition of Done

The requested change is implemented in the correct artifact, key behavior and links are preserved,
text fits at relevant viewport sizes, and the applicable build/type or visual check passes. Report
any necessary synchronization between static and React artifacts.

## Durable Memory

Use `plan.md` only for unfinished Tier 2/3 work. Record significant architecture/asset decisions in
`docs/ai/decisions.md` and repeated verified lessons in `docs/ai/learnings.md`.