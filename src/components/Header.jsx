import React from 'react'
import { Link } from 'react-router-dom'

// Use provided logo path directly:
import logoUrl from "../assets/logo.png";

export default function Header() {
  return (
    <header className="bg-white border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoUrl} alt="Jidak Standard" className="h-20 w-auto object-contain" />
          <div>
            <div className="text-ld font-semibold text-brand-dark">JIDAK STANDARD</div>
            <div className="text-sm text-gray-500">Door Catalogue</div>
          </div>
        </Link>

        {/* <nav className="flex items-center gap-4">
          <Link to="/" className="text-sm text-gray-700 hover:text-brand-dark">Home</Link>
          <Link to="/category/hdf-wooden-doors" className="text-sm text-gray-700 hover:text-brand-dark">Categories</Link>
        </nav> */}
      </div>
    </header>
  )
}
