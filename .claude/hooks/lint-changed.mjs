#!/usr/bin/env node
// PostToolUse hook: run ESLint on the file that was just edited (.js/.jsx/.mjs/.cjs)
// and block (exit 2) if it has lint ERRORS, so they get fixed before moving on.
// Fails OPEN (exit 0) on any internal problem — a broken hook must never wedge a session.
//
// Cross-platform: invoked as `node .claude/hooks/lint-changed.mjs`. It resolves the
// project's own ESLint from node_modules (Node walks parent dirs up to the repo root),
// so it honors eslint.config.js with no extra config.

import { readFileSync } from 'node:fs'

function bail() { process.exit(0) } // fail-open helper

let raw = ''
try { raw = readFileSync(0, 'utf8') } catch { bail() }

let data
try { data = JSON.parse(raw || '{}') } catch { bail() }

const filePath = data?.tool_input?.file_path
if (!filePath) bail()

const normalized = String(filePath).replaceAll('\\', '/')
if (!/\.(jsx?|mjs|cjs)$/.test(normalized)) bail()
if (normalized.includes('/node_modules/')) bail()

let ESLint
try {
  ({ ESLint } = await import('eslint'))
} catch {
  bail() // ESLint not installed / not resolvable — nothing to do
}

try {
  // Use the hook's own working directory (Claude Code runs hooks from the project root,
  // where eslint.config.js lives). Don't trust data.cwd — it may arrive in a non-native
  // (e.g. msys `/c/...`) format that the native ESLint can't resolve config from.
  const eslint = new ESLint()

  if (await eslint.isPathIgnored(filePath)) bail()

  const results = await eslint.lintFiles([filePath])
  const errorCount = results.reduce((n, r) => n + r.errorCount, 0)
  const warningCount = results.reduce((n, r) => n + r.warningCount, 0)

  if (errorCount === 0 && warningCount === 0) bail()

  const formatter = await eslint.loadFormatter('stylish')
  const output = await formatter.format(results)

  if (errorCount > 0) {
    process.stderr.write(
      `ESLint found ${errorCount} error(s) in the file you just edited:\n\n${output}\n` +
      `Fix these lint errors before continuing.\n`
    )
    process.exit(2) // exit 2 → stderr is surfaced back to Claude as actionable feedback
  }

  // warnings only: surface but don't block
  process.stdout.write(`ESLint warnings in the edited file:\n${output}\n`)
  process.exit(0)
} catch (e) {
  process.stderr.write(`lint-changed hook skipped: ${e?.message || e}\n`)
  process.exit(0)
}
