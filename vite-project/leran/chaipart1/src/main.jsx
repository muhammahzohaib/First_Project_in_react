import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className='bg-red-700  '>hello</h1>
    {/* <App /> */}
    {/* call function and send props to the function,,,  function card(props)     
    send value form here <card channel="chia or code" */}
  </StrictMode>,
)
