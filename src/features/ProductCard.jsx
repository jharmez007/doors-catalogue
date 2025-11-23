import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <Link to={`/product/${product.id}`} className="block bg-white rounded-lg shadow-soft overflow-hidden">
      <div className="h-48 bg-gray-50 flex items-center justify-center">
        <img src={product.image} alt={product.name} className="object-cover w-full h-48" />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-base text-brand-dark">{product.name}</h3>
        <p className="text-sm text-gray-500 mt-1">{product.description}</p>
      </div>
    </Link>
  )
}
