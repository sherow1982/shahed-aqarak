import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { HiBars3, HiXMark } from 'react-icons/hi2'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="bg-primary text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold flex items-center gap-2">
          🏠 موقع العقارات
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-8">
          <Link to="/" className="hover:text-secondary transition">الرئيسية</Link>
          <Link to="/" className="hover:text-secondary transition">عن الموقع</Link>
          <Link to="/" className="hover:text-secondary transition">اتصل بنا</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiXMark /> : <HiBars3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <nav className="md:hidden bg-primary p-4 border-t border-secondary">
          <Link to="/" className="block py-2 hover:text-secondary">الرئيسية</Link>
          <Link to="/" className="block py-2 hover:text-secondary">عن الموقع</Link>
          <Link to="/" className="block py-2 hover:text-secondary">اتصل بنا</Link>
        </nav>
      )}
    </header>
  )
}
