import React from 'react'
import Input from '../components/Input'
import Button from '../components/Button'

export default function CatalogFilters({ search, setSearch, categories, activeCategory, setActiveCategory }) {
  return (
    <div className="bg-white p-4 rounded-lg flex flex-col md:flex-row gap-4 items-center justify-between">
      <div className="flex items-center gap-4 w-full md:w-1/2">
        <Input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search doors or specs..." />
      </div>

      <div className="flex gap-3 items-center flex-wrap">
        <Button variant={activeCategory ? 'ghost' : 'primary'} onClick={() => setActiveCategory('')}>
          All
        </Button>

        {categories.map(cat => (
          <Button key={cat.id} variant={activeCategory === cat.slug ? 'primary' : 'ghost'} onClick={() => setActiveCategory(cat.slug)}>
            {cat.name}
          </Button>
        ))}
      </div>
    </div>
  )
}
