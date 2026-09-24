import { useState } from 'react'

// These are desktop installers. Unknown/mobile visitors retain the existing
// default and can choose the computer they intend to install on.
function initialPlatform() {
  if (typeof navigator === 'undefined') return 'macos'

  const hints = navigator.userAgentData
  const platform = navigator.platform || ''
  const userAgent = navigator.userAgent || ''
  const signals = [hints?.platform || '', platform, userAgent]

  if (
    hints?.mobile ||
    /Android|iPhone|iPad|iPod|iOS|Windows Phone|CrOS|Chrome\s?OS/i.test(signals.join(' ')) ||
    (/Mac/i.test(platform) && navigator.maxTouchPoints > 1)
  ) return 'macos'

  // Prefer client hints when available, with synchronous fallbacks for browsers
  // that do not expose them. This is a default suggestion, not a compatibility gate.
  for (const signal of signals) {
    if (/Windows|^Win/i.test(signal)) return 'windows'
    if (/Mac/i.test(signal)) return 'macos'
    if (/Linux/i.test(signal)) return 'linux'
  }
  return 'macos'
}

export default function useInstallPlatform() {
  // Lazy initialization avoids a wrong-tab flash or a later effect overriding
  // the visitor's manual choice. No storage, permissions or network calls.
  return useState(initialPlatform)
}
