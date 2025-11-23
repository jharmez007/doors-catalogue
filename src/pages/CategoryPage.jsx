import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { categories, products } from '../data/product'
import CatalogGrid from '../features/CatalogGrid'

export default function CategoryPage() {
  const { slug } = useParams()
  const category = categories.find(c => c.slug === slug)
  const items = products.filter(p => p.category === slug)

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-10">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-brand-dark">{category ? category.name : 'Category'}</h1>
          {category && <p className="text-gray-500 mt-1">{category.description}</p>}
        </div>

        <CatalogGrid products={items} />
      </main>
      <Footer />
    </>
  )
}
