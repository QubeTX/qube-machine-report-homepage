import useSmoothScroll from './hooks/useSmoothScroll'
import ND300Hero from './components/ND300Hero'
import ND300Modes from './components/ND300Modes'
import ND300Install from './components/ND300Install'
import ND300Commands from './components/ND300Commands'
import ND300Footer from './components/ND300Footer'
import ND300SampleOutput from './components/ND300SampleOutput'
import DocumentationLinks from './components/DocumentationLinks'
import ND300Diagnostics from './components/ND300Diagnostics'
import ND300Capabilities from './components/ND300Capabilities'

export default function ND300App() {
  useSmoothScroll()
  return <>
    <ND300Hero />
    <main id="main-content" tabIndex={-1}>
      <ND300Modes />
      <ND300Diagnostics />
      <ND300SampleOutput />
      <ND300Commands />
      <ND300Capabilities />
      <ND300Install />
      <DocumentationLinks product="ND-300" links={[{"href":"/docs/nd300/diagnostics","title":"Read the diagnostics","description":"Understand the checks and what their results can tell you."},{"href":"/docs/nd300/speedqx","title":"SpeedQX guide","description":"Test limits, provider consent, and interpreting speed results."},{"href":"/docs/nd300/recovery","title":"DNS and recovery","description":"Inspect proposed changes and restore a previous configuration."}]} />
    </main>
    <ND300Footer />
  </>
}
