import { useState, useEffect } from 'react'

/**
 * Fetches the latest release version from a GitHub repo.
 * Returns the semver string without the leading 'v' (e.g., "3.9.0").
 * Falls back to the provided default on error or rate-limit.
 */
export default function useGitHubVersion(repo, fallback) {
  const [version, setVersion] = useState(fallback)

  useEffect(() => {
    fetch(`https://api.github.com/repos/${repo}/releases/latest`)
      .then(res => {
        if (!res.ok) throw new Error(res.status)
        return res.json()
      })
      .then(data => {
        if (data.tag_name) {
          setVersion(data.tag_name.replace(/^v/i, ''))
        }
      })
      .catch(() => {})
  }, [repo])

  return version
}

/** Format "3.9.0" → "3.9" (major.minor only) */
export function shortVersion(semver) {
  const parts = semver.split('.')
  return parts.length >= 2 ? `${parts[0]}.${parts[1]}` : semver
}
