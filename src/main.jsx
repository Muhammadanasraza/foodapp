import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import StoreContextProvider from './Context/Context.jsx'
import AuthContextProvider from "./AuthContext/AuthContext.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>
      <StoreContextProvider>

        <App />
      </StoreContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
