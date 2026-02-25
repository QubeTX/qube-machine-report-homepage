import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import InstallGuideHero from './components/InstallGuideHero'
import InstallGuideContent from './components/InstallGuideContent'
import InstallGuideFooter from './components/InstallGuideFooter'

function InstallGuideApp() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3),
      smoothWheel: true
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (
    <>
      <InstallGuideHero />
      <InstallGuideContent />
      <InstallGuideFooter />
    </>
  )
}

export default InstallGuideApp
