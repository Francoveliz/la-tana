"use client"

import { useState, useMemo } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductFilters } from "@/components/product-filters"
import { ProductGrid } from "@/components/product-grid"
import { products, getProductsByCategory, searchProducts } from "@/lib/products"
import { generateStructuredData } from "@/lib/seo"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("todos")
  const [searchQuery, setSearchQuery] = useState("")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000])
  const [showInStockOnly, setShowInStockOnly] = useState(false)

  const filteredProducts = useMemo(() => {
    let filtered = products

    // Filter by category
    if (selectedCategory !== "todos") {
      filtered = getProductsByCategory(selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      filtered = searchProducts(searchQuery).filter((product) =>
        selectedCategory === "todos" ? true : product.category === selectedCategory,
      )
    }

    // Filter by price range
    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    // Filter by stock
    if (showInStockOnly) {
      filtered = filtered.filter((product) => product.inStock)
    }

    return filtered
  }, [selectedCategory, searchQuery, priceRange, showInStockOnly])

  const breadcrumbData = generateStructuredData("breadcrumb", [
    { name: "Inicio", url: "/" },
    { name: "Productos", url: "/productos" },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Nuestros Helados</h1>
            <p className="text-lg text-muted-foreground text-balance">
              Descubre nuestra amplia variedad de sabores artesanales, hechos con ingredientes frescos y naturales.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filters Sidebar */}
            <div className="lg:col-span-1">
              <ProductFilters
                onCategoryChange={setSelectedCategory}
                onSearchChange={setSearchQuery}
                onPriceRangeChange={setPriceRange}
                onInStockChange={setShowInStockOnly}
                selectedCategory={selectedCategory}
                searchQuery={searchQuery}
                priceRange={priceRange}
                showInStockOnly={showInStockOnly}
              />
            </div>

            {/* Products Grid */}
            <div className="lg:col-span-3">
              <ProductGrid products={filteredProducts} />
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
