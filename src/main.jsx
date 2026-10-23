import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MarketingRouter from './components/MarketingRouter.jsx'
import BackToTopButton from './components/BackToTopButton.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MarketingRouter />
    <BackToTopButton />
  </StrictMode>,
)
