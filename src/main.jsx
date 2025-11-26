import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { HouseContextProvider } from './context/HouseContext'
import App from './App'
import './style/index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <HouseContextProvider>
        <App />
      </HouseContextProvider>
    </Router>
  </React.StrictMode>,
)
