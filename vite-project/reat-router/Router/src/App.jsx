
import React from 'react' 

import {Outlet} from 'react-router-dom'


import { About,Home, Contact,Footer, Header } from './Components'
function App() {
  

  return (
    <>
      <Header />
      <Outlet />
      <Footer />

     
    </>
  )
}

export default App
