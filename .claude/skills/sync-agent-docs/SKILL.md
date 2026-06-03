---
name: sync-agent-docs
description: >-
  Propagate a convention/architecture change across this repo's three parallel agent-guidance
  files so they don't drift: CLAUDE.md (Claude Code), AGENTS.md (Codex), and CODEX_PROJECT.md
  (project summary + canonical file tree). Use whenever you edit one of those files, or when asked
  to "sync the agent docs", "update AGENTS.md to match CLAUDE.md", "keep the docs aligned", or after
  changing a repo convention (install contract, routing, styling, source-repo paths, commands).
---

# Sync Agent Docs

This repo carries three overlapping docs that must agree. They have drifted before (e.g. a
cargo-dist asset alias documented in one but not the others). When a convention changes, update
**all three in the same commit**.

## The three files and how they relate

| File | Audience | Shape | Relationship |
|------|----------|-------|--------------|
| `CLAUDE.md` | Claude Code | Full guidance, section-based | Source of truth for prose conventions |
| `AGENTS.md` | Codex | **Near-mirror of CLAUDE.md** | Same sections, lightly condensed; only the intro line ("guidance to Codex…") differs |
| `CODEX_PROJECT.md` | Codex (project brief) | TL;DR + Current Status bullets + Project Goals + **Workspace File Tree** | NOT a mirror — re-express the same facts in its own format; it also owns the canonical file tree |

## Workflow

1. **Identify what changed** in the file you just edited (the diff). Classify each change:
   - *Convention/contract* (install steps, routing, styling tokens, source-repo resolution, command list) → belongs in all three.
   - *File added/removed/moved* → must update the **Workspace File Tree** in `CODEX_PROJECT.md`.
   - *Cosmetic wording* in one file only → may not need propagation; use judgment.

2. **CLAUDE.md ↔ AGENTS.md** — these mirror section-for-section. Apply the same change to the
   matching section in the other file, keeping AGENTS.md's slightly more condensed tone and its
   "guidance to Codex" intro. If a section exists in one but not the other, that's drift — reconcile it.

3. **CODEX_PROJECT.md** — don't paste CLAUDE.md sections in. Instead:
   - Update the relevant **Current Status** bullet(s) to state the new fact in summary form.
   - If files changed, update the **Workspace File Tree** block so it matches the real tree
     (`git ls-files` / a recursive listing is the ground truth).
   - Update **Project Goals** only if the goal itself changed.

4. **Verify alignment** before finishing:
   - Diff the "Install Documentation Contract" (or whichever section changed) between CLAUDE.md and
     AGENTS.md — the substantive facts must match.
   - Confirm CODEX_PROJECT.md's file tree has no missing/extra entries vs. the actual repo.
   - Confirm all three still agree on: install one-liners, cargo-dist asset names, source-repo
     resolution (`$HOME/git/<repo>` + public GitHub fallback), and routing.

5. **Report** which files you changed and the one-line summary of the propagated change.

## Notes

- A `doc-sync-reminder` PostToolUse hook (`.claude/hooks/`) nudges you automatically when one of
  these files is edited — this skill is the procedure for acting on that nudge.
- Keep the **Changelog rule** consistent across CLAUDE.md and AGENTS.md too (CHANGELOG.md ↔
  HUMAN_CHANGELOG.md must move together).
