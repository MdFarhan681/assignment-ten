import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Routers/Router.jsx'
import AuthProvider from './Pages/Provider/AuthProvider.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>

      <Toaster position='top-center'></Toaster>

    </AuthProvider>
   
  </StrictMode>,
)
