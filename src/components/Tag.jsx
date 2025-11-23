import React from 'react'

export default function Tag({ children }) {
  return (
    <span className="inline-block text-xs px-2 py-1 rounded bg-gray-100 text-gray-600">
      {children}
    </span>
  )
}
