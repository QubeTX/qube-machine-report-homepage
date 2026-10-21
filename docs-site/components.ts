import { defineComponents } from 'blume'
import SiteCursor from './components/SiteCursor.astro'
import SiteFooter from './components/SiteFooter.astro'

export default defineComponents({
  layout: { PageFooter: SiteCursor, Footer: SiteFooter },
})
