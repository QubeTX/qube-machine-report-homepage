import { defineComponents } from 'blume'
import SiteCursor from './components/SiteCursor.astro'
import SiteFooter from './components/SiteFooter.astro'
import SiteFonts from './components/SiteFonts.astro'

export default defineComponents({
  layout: { PageHeader: SiteFonts, PageFooter: SiteCursor, Footer: SiteFooter },
})
