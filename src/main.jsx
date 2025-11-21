import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './components/Pages/Home';
import Login from './components/Pages/Login';
import Root from './Root';


const router = createBrowserRouter([
    {
      path: '/',
      Component: Root,
      children: [
        {
          index: true,
          Component: Home
        },
        {
          path: '/login',
          Component: Login
        }
      ]
    }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}></RouterProvider>
)
