import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css' // optional; if not using, create a simple CSS file or remove

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
