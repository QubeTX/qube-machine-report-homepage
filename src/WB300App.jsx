import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import WB300Hero from './components/WB300Hero'
import WB300Modes from './components/WB300Modes'
import WB300Diagnostics from './components/WB300Diagnostics'
import WB300SampleOutput from './components/WB300SampleOutput'
import WB300Commands from './components/WB300Commands'
import WB300Features from './components/WB300Features'
import WB300Install from './components/WB300Install'
import WB300Footer from './components/WB300Footer'

function WB300App() {
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
      <WB300Hero />
      <WB300Modes />
      <WB300Diagnostics />
      <WB300SampleOutput />
      <WB300Commands />
      <WB300Features />
      <WB300Install />
      <WB300Footer />
    </>
  )
}

export default WB300App
