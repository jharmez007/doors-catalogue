import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { categories, products } from '../data/product'
import CatalogFilters from '../features/CatalogFilters'
import CatalogGrid from '../features/CatalogGrid'
// import { Link } from 'react-router-dom'

export default function Home() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('')

  const filtered = products.filter(p => {
    const matchesSearch = search.trim() === '' || (
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      (p.specs && Object.values(p.specs).join(' ').toLowerCase().includes(search.toLowerCase()))
    )
    const matchesCat = !activeCategory || p.category === activeCategory
    return matchesSearch && matchesCat
  })

  return (
    <>
      <Header />
      <main className="max-w-6xl mx-auto px-6 py-10">
        <section className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-bold text-brand-dark">Our Doors Catalogue</h2>
              <p className="text-gray-500 mt-2">Explore our HDF, Pivot, Turkish security and Wooden doors.</p>
            </div>
            {/* <div className="hidden md:block">
              <Link to="/category/hdf-wooden-doors" className="text-sm text-gray-500">View categories →</Link>
            </div> */}
          </div>
        </section>

        <section className="mb-6">
          <CatalogFilters
            search={search}
            setSearch={setSearch}
            categories={categories}
            activeCategory={activeCategory}
            setActiveCategory={setActiveCategory}
          />
        </section>

        <section>
          <CatalogGrid products={filtered} />
        </section>
      </main>

      <Footer />
    </>
  )
}
