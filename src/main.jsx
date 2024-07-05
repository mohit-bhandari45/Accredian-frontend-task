import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BooleanProvider } from './context/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BooleanProvider>
    <App />
  </BooleanProvider>
)
