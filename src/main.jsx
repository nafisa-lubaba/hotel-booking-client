import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import ErrorPage from './pages/ErrorPage';
import AuthProvider from './authProvider/AuthProvider';
import Home from './pages/Home';
import Registration from './pages/Registration';
import SignIn from './pages/SignIn';
import Rooms from './pages/Rooms';
import MyBooking from './pages/MyBooking';
import ContactUs from './pages/ContactUs';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element:<Home></Home> ,
       
      },
      {
        path: '/signup',
        element:<Registration></Registration>,
       
      },
      {
        path: '/signin',
        element:<SignIn></SignIn>,
       
      },
      {
        path: '/rooms',
        element:<Rooms></Rooms>,
       
      },
      {
        path: '/my-booking',
        element:<MyBooking></MyBooking>,
       
      },
      {
        path: '/contact-us',
        element:<ContactUs></ContactUs>,
       
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <AuthProvider>
      <RouterProvider router={router} />
      </AuthProvider>
  </React.StrictMode>,
)
