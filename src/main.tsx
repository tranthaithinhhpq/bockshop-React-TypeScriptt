import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Layout from './layout'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/about",
        element: <div>Hello world about!</div>,
      },

    ]
  },

  {
    path: "/login",
    element: <div>Hello world login!</div>,
  },

]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
