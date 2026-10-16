# Project working rules

## Autonomy and cost

- Work proactively through implementation, repair, and appropriate verification. Make routine design and technical decisions without repeated confirmation.
- Whenever a website update makes sense within the current work, implement it, verify that the affected experience works as intended, and fix any issues found before calling it complete.
- The owner's hard constraint is no spending money. Use existing tools, assets, and confirmed free services. Do not purchase anything, enable paid usage or overages, start billable resources, or enter a trial that can automatically charge. Check uncertain costs before proceeding.
- Treat this as broad authorization for work on the website, while continuing to follow higher-priority safety, privacy, and tool requirements.

## Token efficiency and delegation

- Optimize total tokens across the whole team, including agent context, tool output, and repeated work. Use subagents when a bounded task can reduce the primary agent's context or complete useful independent work in parallel; handle trivial edits directly.
- Give subagents narrow objectives, relevant file paths, constraints, and a concise requested output. Prefer minimal context over copying the entire conversation when the task is self-contained.
- Assign separate file ownership where practical. Avoid duplicate investigations, overlapping edits, and unnecessary agents. Reuse an existing agent for related follow-up work.
- Ask agents to return findings, changed files, verification results, and unresolved issues concisely. Inspect the relevant result instead of repeating their whole investigation.
- Search narrowly with `rg`, read targeted file ranges, batch independent reads, and limit command output. Reuse verified findings until something relevant changes.
- Run checks proportional to the change. Repeat checks only after new changes, failures, or unresolved concerns. Do not sacrifice correctness, visual quality, or completion merely to save tokens.
- Keep user updates and final responses concise and focused on outcomes, material limitations, and decisions.

## Website design rules

- Make the website as interactive as possible. Favor meaningful interactions: let visitors explore, manipulate, discover, and act through the interface.
- Keep every element purposeful. If text, backgrounds, decoration, controls, or sections feel unnecessary, leave them out or remove them. Do not add filler copy or visual clutter.
- Apply these rules together: rich interaction with a minimal visible interface. Reveal contextual information when it is useful.
- Keep interactions usable with keyboard, touch, and reduced-motion preferences, with clear feedback and accessible names.
- Proactively improve the look and feel when working on the website: composition, typography, spacing, color, lighting, motion, and responsive behavior should feel intentional and cohesive.
- Favor distinctive visual craft and direct interaction over generic layouts, explanatory filler, and decorative clutter. Preserve the site's creative identity while improving clarity and polish.
- Check meaningful visual changes in a browser at desktop and mobile sizes, including relevant hover, focus, active, and reduced-motion states. Repair observed layout and interaction issues before calling the work complete.
- Preserve supplied originals and use verified owner content. Do not invent biography, clients, credits, testimonials, statistics, or portfolio work.
