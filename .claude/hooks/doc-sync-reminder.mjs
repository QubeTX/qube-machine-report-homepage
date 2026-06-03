#!/usr/bin/env node
// PostToolUse hook: keep the repo's parallel docs in lockstep.
//   - Editing any of CLAUDE.md / AGENTS.md / CODEX_PROJECT.md  -> remind to mirror the other two.
//   - Editing CHANGELOG.md                                     -> remind to update HUMAN_CHANGELOG.md.
// It does NOT rewrite anything (that needs human/agent judgment) — it injects a specific
// instruction back to Claude via additionalContext. Non-blocking (exit 0) on purpose, so the
// follow-up sync edits don't trigger an endless reminder loop.

import { readFileSync } from 'node:fs'

function done() { process.exit(0) }

function emit(context) {
  process.stdout.write(JSON.stringify({
    hookSpecificOutput: { hookEventName: 'PostToolUse', additionalContext: context },
  }))
  process.exit(0)
}

let data
try { data = JSON.parse(readFileSync(0, 'utf8') || '{}') } catch { done() }

const fp = String(data?.tool_input?.file_path || '').replaceAll('\\', '/')
if (!fp) done()
const base = fp.split('/').pop()

const TRIAD = ['CLAUDE.md', 'AGENTS.md', 'CODEX_PROJECT.md']

if (TRIAD.includes(base)) {
  const others = TRIAD.filter((f) => f !== base)
  emit(
    `You just edited ${base}. This repo keeps three agent-guidance docs in lockstep — ` +
    `mirror any substantive change into ${others.join(' and ')} in this same session/commit ` +
    `(see the "Agent docs (keep in sync)" section). Ignore this if the edit was cosmetic or already synced.`
  )
}

if (base === 'CHANGELOG.md') {
  emit(
    `You just edited CHANGELOG.md. Per the repo's changelog rule, add the matching plain-English ` +
    `entry to HUMAN_CHANGELOG.md in the same commit (strip versions/paths/jargon; add a "why it matters" ` +
    `note; use Added / Improved / Fixed / Removed / Security / Behind the scenes). Ignore this if HUMAN_CHANGELOG.md is already updated.`
  )
}

done()
