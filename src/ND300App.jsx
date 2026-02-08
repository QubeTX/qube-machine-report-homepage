import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import ND300Hero from './components/ND300Hero'
import ND300Modes from './components/ND300Modes'
import ND300Diagnostics from './components/ND300Diagnostics'
import ND300SampleOutput from './components/ND300SampleOutput'
import ND300Commands from './components/ND300Commands'
import ND300Features from './components/ND300Features'
import ND300Install from './components/ND300Install'
import ND300Footer from './components/ND300Footer'

function ND300App() {
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
      <ND300Hero />
      <ND300Modes />
      <ND300Diagnostics />
      <ND300SampleOutput />
      <ND300Commands />
      <ND300Features />
      <ND300Install />
      <ND300Footer />
    </>
  )
}

export default ND300App
