import { useState, useEffect } from 'react'

// Share in-flight and completed reads across the hero, installer, and footer.
// A failed request is also cached briefly to avoid a rate-limit retry loop.
const releases = new Map()
const ttl = 5 * 60 * 1000
function latestRelease(repo) {
  const cached = releases.get(repo)
  if (cached && Date.now() - cached.time < ttl) return cached.promise
  const promise = fetch(`https://api.github.com/repos/${repo}/releases/latest`)
    .then(response => response.ok ? response.json() : null)
    .then(data => typeof data?.tag_name === 'string' ? data.tag_name.replace(/^v/i, '') : null)
    .catch(() => null)
  releases.set(repo, { time: Date.now(), promise })
  return promise
}

/**
 * Fetches the latest release version from a GitHub repo.
 * Returns the semver string without the leading 'v' (e.g., "3.9.0").
 * Falls back to the provided default on error or rate-limit.
 */
export default function useGitHubVersion(repo, fallback) {
  const [version, setVersion] = useState(fallback)

  useEffect(() => {
    let active = true
    latestRelease(repo).then(value => { if (active && value) setVersion(value) })
    return () => { active = false }
  }, [repo])

  return version
}

/** Format "3.9.0" → "3.9" (major.minor only) */
export function shortVersion(semver) {
  const parts = semver.split('.')
  return parts.length >= 2 ? `${parts[0]}.${parts[1]}` : semver
}
