import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './components/Pages/Home';
import Root from './Root';
import Services from './components/Pages/Services';
import Login from './components/Pages/Login';
import SignUp from './components/Pages/SignUp';
import AuthProvider from './Provider/AuthProvider';
import ProvideRouter from './Router Provider/ProvideRouter';
import Profile from './components/Pages/Profile';
import ServicesDetails from './components/Pages/ServicesDetails';
import ForgatePass from './components/Pages/ForgatePass';



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
          path: '/services',
          Component: Services
        },
        {
          path: '/login',
          element:<Login></Login>
        },
        {
          path: '/signup',
          Component: SignUp
        },
        {
          path: '/myprofile',
          element: <ProvideRouter><Profile></Profile></ProvideRouter>
        },
        {
          path: '/details/:Id',
          element: <ProvideRouter><ServicesDetails></ServicesDetails></ProvideRouter>
        },
        {
          path: '/forget/:email',
          element: <ForgatePass></ForgatePass>
        }
      ]
    }
])

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <RouterProvider router={router}></RouterProvider>
  </AuthProvider>
)
