# AgentOps Landing - Claude Adapter

Follow [AGENTS.md](AGENTS.md). The canonical workflows live in `.agents/skills/`.

- Determine first whether the task targets the deployed static page, the React/Vite source, or both.
- Tier 0/1 uses no subagents. Main Agent owns normal analysis, implementation, visual checks, and
  testing. Do not recreate a PM -> Architect -> Principal -> SE -> QA chain.
- Use Technical Lead only for material conversion, asset, integration, security, or deployment
  uncertainty; use Quality Engineer only for independent Tier 2/3 regression review.
- Search before reading broadly, preserve the existing visual language, and make surgical changes.

For `/retomar`, `retomar`, `continue de onde paramos`, `onde paramos`, `continuar trabalho`, or
`resume work`, use `resume-work`: read `plan.md`, validate referenced files, inspect `git status`
and the relevant diff, then continue without a repository tour.

Read durable docs only when the current decision needs them. Update `plan.md` only for unfinished
cross-session Tier 2/3 work.