import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SignupContextProvider } from './context/SignupContextProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SignupContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </SignupContextProvider>,
)
