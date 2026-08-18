# Decisions

## 2026-08-18 - Lean Engineering Harness V2

Context: the repository had no shared AI engineering guidance and contains multiple landing-page
artifacts with different rendering/deployment roles.

Decision: introduce a proportional harness with canonical local Skills, concise adapters, only two
optional specialists, and durable docs that explicitly preserve artifact boundaries.

Why: the site needs low-overhead guidance while preventing accidental drift between static, React,
and generated design-component artifacts.

Consequences: no CRUD or database Skills are created; `plan.md` is reserved for unfinished Tier
2/3 work and source-of-truth must be confirmed for edits that could affect multiple artifacts.