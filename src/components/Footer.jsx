import React from 'react'

export default function Footer() {
  return (
    <footer className="mt-12 py-8 bg-white border-t">
      <div className="max-w-6xl mx-auto px-6 text-sm text-gray-500">
        <div>© {new Date().getFullYear()} Jidak Standard. All rights reserved.</div>
      </div>
    </footer>
  )
}
