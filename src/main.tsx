import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { currentStage } from './data/season'

// Seasonal accent: the site's small highlights follow the real orchard calendar
document.documentElement.style.setProperty('--season', currentStage().color)

// Stop the loading sheen on each photo once it has arrived (load/error don't bubble, so capture)
const markLoaded = (e: Event) => {
  if (e.target instanceof HTMLImageElement) e.target.dataset.loaded = ''
}
document.addEventListener('load', markLoaded, true)
document.addEventListener('error', markLoaded, true)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
