# AgentOps Landing - Copilot Adapter

Follow [AGENTS.md](../AGENTS.md) and infer intent from natural language; users do not need slash
commands or role prompts.

- Apply Progressive Governance: Tier 0/1 has no delegation; Tier 2/3 uses the two specialists only
  for real risk, uncertainty, or independent verification.
- Select one relevant Skill from `.agents/skills/` only when needed. Use `resume-work` for natural
  language resume intent and `plan.md` only for persistent work.
- Apply the React path instruction automatically. Preserve the distinction between production
  `index.html`, React source, and generated design-component support files.
- Avoid new dependencies, unrelated redesigns, destructive deployment commands, and sensitive data
  in client code. Run `npm run build` for changed React code when available.