import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import PropertyDetails from './pages/PropertyDetails'
import './style/index.css'

function App() {
  return (
    <div className="App" dir="rtl" lang="ar">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
      </Routes>
    </div>
  )
}

export default App
