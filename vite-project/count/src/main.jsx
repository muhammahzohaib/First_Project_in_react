import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
   </StrictMode>,
)
//  {/* Hooks  */}
//     {/* react fiber also check 2 diff treee , 1 is browser and 2 is React virtual Dom  */}
//     {/* Props Concept + Tailwind */  }