import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({ product }) {
  return (
    <article className="bg-white rounded-lg overflow-hidden shadow-soft">
      <Link to={`/product/${product.id}`} className="block">
        <div className="w-full h-52 bg-gray-100 flex items-center justify-center">
          <img src={product.image} alt={product.name} className="object-cover w-full h-52" />
        </div>
        <div className="p-4">
          <h3 className="text-base font-semibold text-brand-dark">{product.name}</h3>
          <p className="text-sm text-gray-500 mt-1">{product.description}</p>
          <div className="mt-3 flex items-center justify-between">
            <span className="text-sm font-medium">{product.price}</span>
            <span className="text-xs px-2 py-1 bg-gray-100 rounded">{product.specs.material}</span>
          </div>
        </div>
      </Link>
    </article>
  )
}
