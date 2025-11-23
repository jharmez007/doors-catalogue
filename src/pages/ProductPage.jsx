import React from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { products } from '../data/product'
import ProductDetail from '../features/ProductDetail'

export default function ProductPage() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)

  return (
    <>
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-10">
        <ProductDetail product={product} />
      </main>
      <Footer />
    </>
  )
}
