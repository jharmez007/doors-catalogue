import React from 'react'
import Button from '../components/Button'
import { Link } from 'react-router-dom'

export default function ProductDetail({ product }) {
  if (!product) return <div className="p-6 text-gray-500">Product not found.</div>

  return (
    <div className="bg-white rounded-lg shadow-soft overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="p-6 flex items-center justify-center bg-gray-50">
          <img src={product.image} alt={product.name} className="object-contain max-h-96" />
        </div>

        <div className="p-6">
          <h1 className="text-2xl font-semibold text-brand-dark">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>

          <div className="mt-4">
            <h3 className="font-medium text-sm text-gray-700">Specifications</h3>
            <ul className="mt-2 text-sm text-gray-600 space-y-1">
              {Object.entries(product.specs).map(([k, v]) => (
                <li key={k}><span className="font-medium capitalize">{k}:</span> <span className="ml-2">{v}</span></li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <Button variant="primary">
                <Link 
                  to="https://wa.me/message/5DJKOS4TRGBOF1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                    Request Quote
                </Link>
            </Button>
            <Link to="/" className="text-sm text-gray-500">Back to catalogue</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
