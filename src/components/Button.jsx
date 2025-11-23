import React from 'react'

export default function Button({ children, variant = 'primary', onClick, className = '', ...rest }) {
  const base = "inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-offset-2"
  const variants = {
    primary: "bg-brand-gold text-white hover:brightness-95 focus:ring-brand-gold-2",
    ghost: "bg-transparent text-brand-dark border border-gray-200 hover:bg-gray-50",
    neutral: "bg-white text-brand-dark border"
  }
  return (
    <button
      onClick={onClick}
      className={`${base} ${variants[variant] || variants.primary} ${className} btn-shadow`}
      {...rest}
    >
      {children}
    </button>
  )
}
