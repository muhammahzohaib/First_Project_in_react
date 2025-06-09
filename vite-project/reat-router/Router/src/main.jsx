import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { About, Home, Contact, User,  Github } from './Components/index.js'
import { githubinforloader } from './Components/GitHub/Github.jsx'

const router = createBrowserRouter([

  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/contact',
        element: <Contact />
      },
        {
          path: 'user/:id',
          element: <User />
        },
        {
          loader: githubinforloader,
          path: 'github',
          element: <Github />
        },

    ]
  }
])






createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
