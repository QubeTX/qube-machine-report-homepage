import { Component, lazy, startTransition, Suspense, useEffect, useLayoutEffect, useRef, useState, ViewTransition } from 'react'
import PageNavigationContext from '../hooks/pageNavigationContext'

const loaders = {
  '/': () => import('../App.jsx'),
  '/nd300': () => import('../ND300App.jsx'),
  '/sd300': () => import('../SD300App.jsx'),
  '/executables': () => import('../ExecutablesApp.jsx'),
}
const pages = Object.fromEntries(Object.entries(loaders).map(([path, load]) => [path, lazy(load)]))
const pathFor = pathname => pathname.replace(/\/$/, '') || '/'
const positions = new Map()
let sequence = 0
const entryKey = () => `${Date.now()}-${++sequence}`

function RouteContent({ route }) {
  const Page = pages[route.path] || pages['/']
  useLayoutEffect(() => {
    if (route.initial && !route.hash) return
    let target
    try { target = route.hash ? document.getElementById(decodeURIComponent(route.hash.slice(1))) : null } catch { /* Invalid fragment: use the top of the page. */ }
    window.scrollTo({ top: route.restore ?? (target ? target.getBoundingClientRect().top + window.scrollY : 0), behavior: 'instant' })
    if (!route.history && !route.initial) (target || document.querySelector('h1'))?.focus({ preventScroll: true })
  }, [route])
  return <PageNavigationContext value={!route.initial}><Page /></PageNavigationContext>
}

class RouteError extends Component {
  state = { failed: false }
  static getDerivedStateFromError() { return { failed: true } }
  render() {
    if (this.state.failed) return <main style={{ padding: 'var(--section-space) var(--page-gutter)' }}><h1>This page could not load.</h1><p style={{ margin: '1rem 0' }}>Your connection may have changed. Reload to try again.</p><a href={window.location.href}>Reload this page →</a></main>
    return this.props.children
  }
}

export default function MarketingRouter() {
  const [route, setRoute] = useState(() => ({ path: pathFor(location.pathname), hash: location.hash, initial: true }))
  const currentEntry = useRef(null)
  useEffect(() => {
    const previousRestoration = history.scrollRestoration
    history.scrollRestoration = 'manual'
    currentEntry.current = history.state?.qubetxEntry || entryKey()
    history.replaceState({ ...history.state, qubetxEntry: currentEntry.current }, '')
    const save = () => positions.set(currentEntry.current, window.scrollY)
    const click = event => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const anchor = event.target.closest?.('a[href]')
      if (!anchor || anchor.target || anchor.hasAttribute('download') || anchor.rel.includes('external')) return
      const url = new URL(anchor.href, location.href)
      const path = pathFor(url.pathname)
      if (url.origin !== location.origin || !pages[path] || url.search !== location.search || path === pathFor(location.pathname)) return
      event.preventDefault()
      save()
      const key = entryKey()
      history.pushState({ qubetxEntry: key }, '', url)
      currentEntry.current = key
      startTransition(() => setRoute({ path, hash: url.hash }))
    }
    const pop = () => {
      save()
      const path = pathFor(location.pathname)
      if (!pages[path]) { location.reload(); return }
      currentEntry.current = history.state?.qubetxEntry || entryKey()
      startTransition(() => setRoute({ path, hash: location.hash, history: true, restore: positions.get(currentEntry.current) }))
    }
    document.addEventListener('click', click)
    window.addEventListener('popstate', pop)
    return () => {
      document.removeEventListener('click', click)
      window.removeEventListener('popstate', pop)
      history.scrollRestoration = previousRestoration
    }
  }, [])
  return <RouteError>
    <Suspense fallback={<ViewTransition enter="content-change"><main aria-busy="true" style={{ minHeight: '80vh', padding: 'var(--section-space) var(--page-gutter)' }}><p role="status">Loading QubeTX…</p><a href="/docs">Open documentation →</a></main></ViewTransition>}>
      <ViewTransition key={route.path} name="marketing-page" default="none" share="page-change" enter="content-change">
        <div><RouteContent route={route} /></div>
      </ViewTransition>
    </Suspense>
  </RouteError>
}
