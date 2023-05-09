import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayoutOne from './Layout/LayoutOne.jsx'
import Homepage from './Component/Homepage/Homepage.jsx'
import AddCoffee from './Component/Coffee/AddCoffee'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutOne></LayoutOne>,
    children: [
      {
        path: '/',
        element: <Homepage></Homepage>
      },
      {
        path: '/add-coffee',
        element: <AddCoffee></AddCoffee>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
