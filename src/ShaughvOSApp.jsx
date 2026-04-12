import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import ShaughvOSHero from './components/ShaughvOSHero'
import ShaughvOSPitch from './components/ShaughvOSPitch'
import ShaughvOSOverview from './components/ShaughvOSOverview'
import ShaughvOSFeatures from './components/ShaughvOSFeatures'
import ShaughvOSCommands from './components/ShaughvOSCommands'
import ShaughvOSHardware from './components/ShaughvOSHardware'
import ShaughvOSInstall from './components/ShaughvOSInstall'
import ShaughvOSFooter from './components/ShaughvOSFooter'

function ShaughvOSApp() {
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
      <ShaughvOSHero />
      <ShaughvOSPitch />
      <ShaughvOSOverview />
      <ShaughvOSFeatures />
      <ShaughvOSCommands />
      <ShaughvOSHardware />
      <ShaughvOSInstall />
      <ShaughvOSFooter />
    </>
  )
}

export default ShaughvOSApp
