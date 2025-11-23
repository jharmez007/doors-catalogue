import React from 'react'
import Card from '../components/Card'

export default function CatalogGrid({ products }) {
  if (!products || products.length === 0) {
    return <div className="text-gray-500 p-6">No products found.</div>
  }

  // Shuffle once per render
  const shuffled = [...products].sort(() => Math.random() - 0.5)

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {shuffled.map(p => (
        <Card key={p.id} product={p} />
      ))}
    </div>
  )
}
