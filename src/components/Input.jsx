import React from 'react'

export default function Input({ value, onChange, placeholder, icon, className = '' }) {
  return (
    <div className={`flex items-center gap-2 bg-white rounded-lg px-3 py-2 border ${className}`}>
      {icon && <span className="text-gray-400">{icon}</span>}
      <input
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="w-full bg-transparent outline-none text-sm"
      />
    </div>
  )
}
