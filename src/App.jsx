import useSmoothScroll from './hooks/useSmoothScroll'
import Hero from './components/Hero'
import Features from './components/Features'
import Install from './components/Install'
import Commands from './components/Commands'
import Footer from './components/Footer'
import SampleOutput from './components/SampleOutput'
import DocumentationLinks from './components/DocumentationLinks'

export default function App() {
  useSmoothScroll()
  return <>
    <Hero />
    <main id="main-content" tabIndex={-1}>
      <Features />
      <Install />
      <Commands />
      <SampleOutput />
      <DocumentationLinks product="TR-300" links={[{"href":"/docs/tr300/examples","title":"Reporting examples","description":"Save a report for support and understand what it contains."},{"href":"/docs/tr300/shell-integration","title":"Terminal startup","description":"Set up or remove the optional quick startup summary."},{"href":"/docs/tr300/advanced","title":"Automation and JSON","description":"Use structured output in scripts and workflows."}]} />
    </main>
    <Footer />
  </>
}
