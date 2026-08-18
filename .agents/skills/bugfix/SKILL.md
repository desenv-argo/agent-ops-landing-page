---
name: bugfix
description: "Use when diagnosing and fixing a landing-page rendering, interaction, layout, media, or link defect. Do not use for speculative redesign."
---

# Bugfix Workflow

Follow expected -> actual -> reproduce -> isolate artifact/component -> root cause -> minimal fix ->
regression check. Verify the browser-facing result at the affected viewport and confirm whether the
same issue exists in the static and React artifacts. Change one hypothesis at a time.