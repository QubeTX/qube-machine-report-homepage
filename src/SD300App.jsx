import useSmoothScroll from './hooks/useSmoothScroll'
import SD300Hero from './components/SD300Hero'
import SD300Desktop from './components/SD300Desktop'
import SD300Install from './components/SD300Install'
import SD300Commands from './components/SD300Commands'
import SD300Footer from './components/SD300Footer'
import SD300Modes from './components/SD300Modes'
import DocumentationLinks from './components/DocumentationLinks'
import SD300Sections from './components/SD300Sections'
import SD300Keybindings from './components/SD300Keybindings'
import SD300Platform from './components/SD300Platform'

export default function SD300App() {
  useSmoothScroll()
  return <>
    <SD300Hero />
    <main id="main-content" tabIndex={-1}>
      <SD300Modes />
      <SD300Desktop />
      <SD300Sections />
      <SD300Commands />
      <SD300Keybindings />
      <SD300Platform />
      <SD300Install />
      <DocumentationLinks product="SD-300" links={[{"href":"/docs/sd300/desktop","title":"Desktop app guide","description":"Window, tray, monitoring, and update controls."},{"href":"/docs/sd300/terminal","title":"Terminal controls","description":"Navigate all nine sections and inspect readings with the keyboard."},{"href":"/docs/sd300/snapshots","title":"Snapshots and sensors","description":"Save a reading and understand missing measurements."}]} />
    </main>
    <SD300Footer />
  </>
}
