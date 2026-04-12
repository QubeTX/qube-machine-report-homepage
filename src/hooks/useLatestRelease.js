import { useState, useEffect } from 'react'

const FALLBACK_VERSION = 'V1.2.0'
const API_URL = 'https://api.github.com/repos/RealEmmettS/shaughvOS/releases/latest'

export default function useLatestRelease() {
  const [version, setVersion] = useState(FALLBACK_VERSION)

  useEffect(() => {
    fetch(API_URL)
      .then(res => {
        if (!res.ok) throw new Error(res.status)
        return res.json()
      })
      .then(data => {
        if (data.tag_name) {
          setVersion(data.tag_name.toUpperCase().replace(/^V/, 'V'))
        }
      })
      .catch(() => {})
  }, [])

  return version
}
