import useSmoothScroll from './hooks/useSmoothScroll'
import ExecutablesHero from './components/ExecutablesHero'
import ExecutablesContent from './components/ExecutablesContent'
import ExecutablesFooter from './components/ExecutablesFooter'

export default function ExecutablesApp() {
  useSmoothScroll()
  return <>
    <ExecutablesHero />
    <main id="main-content" tabIndex={-1}><ExecutablesContent /></main>
    <ExecutablesFooter />
  </>
}
