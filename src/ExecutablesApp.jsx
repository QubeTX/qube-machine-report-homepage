import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import ExecutablesHero from './components/ExecutablesHero'
import ExecutablesContent from './components/ExecutablesContent'
import ExecutablesFooter from './components/ExecutablesFooter'

function ExecutablesApp() {
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
      <ExecutablesHero />
      <ExecutablesContent />
      <ExecutablesFooter />
    </>
  )
}

export default ExecutablesApp
