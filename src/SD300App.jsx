import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import SD300Hero from './components/SD300Hero'
import SD300Modes from './components/SD300Modes'
import SD300Sections from './components/SD300Sections'
import SD300Commands from './components/SD300Commands'
import SD300Keybindings from './components/SD300Keybindings'
import SD300Platform from './components/SD300Platform'
import SD300Install from './components/SD300Install'
import SD300Footer from './components/SD300Footer'

function SD300App() {
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
      <SD300Hero />
      <SD300Modes />
      <SD300Sections />
      <SD300Commands />
      <SD300Keybindings />
      <SD300Platform />
      <SD300Install />
      <SD300Footer />
    </>
  )
}

export default SD300App
