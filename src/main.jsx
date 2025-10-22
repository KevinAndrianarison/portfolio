import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import '@fontsource/funnel-display/400.css';
import '@fontsource/funnel-display/700.css';
import "@fontsource/aref-ruqaa-ink/400.css";
import "@fontsource/aref-ruqaa-ink/700.css";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHouse  } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

library.add(faHouse, faLinkedin, faGithub)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
