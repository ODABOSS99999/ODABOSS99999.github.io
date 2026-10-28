# Project working rules

## Autonomy and cost

- Work proactively through implementation, repair, and appropriate verification. Make routine design and technical decisions without repeated confirmation.
- Whenever a website update makes sense within the current work, implement it, verify that the affected experience works as intended, and fix any issues found before calling it complete.
- The owner's hard constraint is no spending money. Use existing tools, assets, and confirmed free services. Do not purchase anything, enable paid usage or overages, start billable resources, or enter a trial that can automatically charge. Check uncertain costs before proceeding.
- Treat this as broad authorization for work on the website, while continuing to follow higher-priority safety, privacy, and tool requirements.

## Token efficiency and delegation

- Maximize completed, verified work per total team token. Count agent setup, inherited context, tool output, coordination, and rework; more agents do not automatically save tokens.
- Handle small, tightly coupled changes directly. Delegate bounded independent implementation, investigation, or review when it reduces context or enables useful parallel progress. Start with one helper; add others only for distinct useful work.
- For self-contained subtasks, use `fork_turns: "none"` when supported. Supply only the objective, relevant paths, essential facts, constraints, file ownership, and acceptance checks; inherit full history only when necessary.
- Keep delegation one level deep by default. Subagents should not spawn more agents unless the parent assigns that need. Reuse agents for related follow-ups; avoid duplicate investigation and overlapping edits.
- Require compact handoffs: findings with file references, changed files, checks/results, and blockers. Keep large logs and artifacts in files. Inspect relevant diffs and evidence without repeating the investigation.
- Continue independent work while helpers run. Wait for completion signals instead of frequent polling; integrate results and run shared checks once after changes converge.

## Efficient execution and delivery

- Start repository work with `docs/agent-workflow.md` for the entry map and check commands; verify only the relevant paths. Consult deeper guides on demand, not all at startup.
- Use deterministic scripts for bulk edits, calculations, file inventories, and log summaries instead of processing each item through the model. Preview representative results and validate the full batch with programmatic assertions.
- For a focused fix, run relevant test files first (`npm test -- src/<file>.test.ts`); run broader required checks after integration. Use `node scripts/agent-check.mjs` for compact check output and inspect saved logs when needed.
- Keep reusable instructions short and link task-specific detail instead of duplicating it. Update the workflow map when changing an entry point or validation command. Do not save task transcripts as permanent instructions.
- Identify the requested outcome and acceptance checks first. Keep a short checklist for multi-part work; complete every item or report a concrete blocker. Skip elaborate plans for simple tasks.
- Locate files with scoped `rg` searches; read targeted ranges before whole files. Exclude generated output, dependencies, and large assets unless relevant. Expand searches only when narrower searches fail.
- Batch independent searches and reads. Prefer structured APIs or local scripts over repeated UI actions. Bound tool output and summarize large datasets locally before returning only useful results.
- Reuse verified facts, file maps, and successful checks within the task. Re-read only after relevant changes or conflicting evidence. Keep handoff notes short: decisions, paths, checks, and next steps.
- Make the smallest coherent change that fully solves the request. Avoid unrelated refactors, speculative features, new dependencies, and repeated planning. Make routine reversible decisions autonomously.
- Verify affected behavior with proportional checks; preserve required build, test, accessibility, and browser QA. Repeat checks only for new changes, failures, or unresolved risks. After repeated identical failures, change strategy instead of rerunning blindly.
- Keep progress updates brief and meaningful. Deliver artifacts and working changes instead of lengthy narration; final replies state outcome, validation, and material limitations. Provide detail when requested or necessary for use.
- Never trade correctness, security, visual quality, or requested scope for token savings. Do not claim measured savings without usage evidence.

## Website design rules

- Make the website as interactive as possible. Favor meaningful interactions: let visitors explore, manipulate, discover, and act through the interface.
- Keep every element purposeful. If text, backgrounds, decoration, controls, or sections feel unnecessary, leave them out or remove them. Do not add filler copy or visual clutter.
- Apply these rules together: rich interaction with a minimal visible interface. Reveal contextual information when it is useful.
- Keep interactions usable with keyboard, touch, and reduced-motion preferences, with clear feedback and accessible names.
- Proactively improve the look and feel when working on the website: composition, typography, spacing, color, lighting, motion, and responsive behavior should feel intentional and cohesive.
- Favor distinctive visual craft and direct interaction over generic layouts, explanatory filler, and decorative clutter. Preserve the site's creative identity while improving clarity and polish.
- Check meaningful visual changes in a browser at desktop and mobile sizes, including relevant hover, focus, active, and reduced-motion states. Repair observed layout and interaction issues before calling the work complete.
- Preserve supplied originals and use verified owner content. Do not invent biography, clients, credits, testimonials, statistics, or portfolio work.
