import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Register from './pages/register.jsx';
import UserPage from './pages/user.jsx';
import HomePage from './pages/home.jsx';
import Login from './pages/login.jsx';
import { AuthWrapper } from './componnent/context/authContext.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'user',
        element: <UserPage />
      }
    ]
  },

  {
    path: 'register',
    element: <Register />
  },
  {
    path: 'login',
    element: <Login />
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <AuthWrapper>
      <RouterProvider router={router} />
    </AuthWrapper> */}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
