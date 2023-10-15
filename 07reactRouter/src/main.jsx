import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Contact from './components/contactus/Contact.jsx'

const router = createBrowserRouter([

  {
    path:'/',
    element: <Root/>,
    children: [
      {
        path:'/',
        element: <Home/>
      },
      {
        path:'about',
        element:<About/>
      },
      {
        path:'contact',
        element:<Contact/>
      }
    ]
  }





])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* the routerprovider will take a props as router  */}
   <RouterProvider router={router} />
  </React.StrictMode>,
)
