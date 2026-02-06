import { useEffect } from 'react'
import Lenis from 'lenis'
import 'lenis/dist/lenis.css'
import Hero from './components/Hero'
import Features from './components/Features'
import SampleOutput from './components/SampleOutput'
import Demos from './components/Demos'
import Commands from './components/Commands'
import Install from './components/Install'
import Quote from './components/Quote'
import Footer from './components/Footer'

function App() {
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
      <Hero />
      <Features />
      <SampleOutput />
      <Demos />
      <Commands />
      <Install />
      <Quote />
      <Footer />
    </>
  )
}

export default App
