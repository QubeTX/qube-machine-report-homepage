import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import SD300App from './SD300App.jsx'
import ND300App from './ND300App.jsx'

const path = window.location.pathname
const Page =
  path === '/sd300' || path === '/sd300/' ? SD300App :
  path === '/nd300' || path === '/nd300/' ? ND300App :
  App

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page />
  </StrictMode>,
)
