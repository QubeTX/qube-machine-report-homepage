import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'

export default function useSmoothScroll() {
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    let lenis
    let frame
    const stop = () => { cancelAnimationFrame(frame); lenis?.destroy(); lenis = undefined }
    const sync = () => {
      stop()
      if (query.matches) return
      lenis = new Lenis({ duration: 1.2, easing: t => 1 - Math.pow(1 - t, 3), smoothWheel: true, anchors: true })
      const raf = time => { lenis.raf(time); frame = requestAnimationFrame(raf) }
      frame = requestAnimationFrame(raf)
    }
    sync()
    query.addEventListener('change', sync)
    return () => { query.removeEventListener('change', sync); stop() }
  }, [])
}
