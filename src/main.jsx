import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import LayoutOne from './Layout/LayoutOne.jsx'
import Homepage from './Component/Homepage/Homepage.jsx'
import AddCoffee from './Component/Coffee/AddCoffee'
import UpdateCoffee from './Component/Coffee/UpdateCoffee'
import CoffeeDetails from './Component/Coffee/CoffeeDetails'

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
      },
      {
        path: '/update-coffee/:id',
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({params})=> fetch(`http://localhost:7000/coffee/${params.id}`)
      },
      {
        path: '/coffee/:id',
        element: <CoffeeDetails></CoffeeDetails>,
        loader: ({params})=> fetch(`http://localhost:7000/coffee/${params.id}`)
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
    </RouterProvider>
  </React.StrictMode>,
)
