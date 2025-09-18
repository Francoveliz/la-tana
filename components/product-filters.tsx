"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Search, Filter, X } from "lucide-react"
import { categories } from "@/lib/products"

interface ProductFiltersProps {
  onCategoryChange: (category: string) => void
  onSearchChange: (search: string) => void
  onPriceRangeChange: (range: [number, number]) => void
  onInStockChange: (inStock: boolean) => void
  selectedCategory: string
  searchQuery: string
  priceRange: [number, number]
  showInStockOnly: boolean
}

export function ProductFilters({
  onCategoryChange,
  onSearchChange,
  onPriceRangeChange,
  onInStockChange,
  selectedCategory,
  searchQuery,
  priceRange,
  showInStockOnly,
}: ProductFiltersProps) {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false)

  const clearFilters = () => {
    onCategoryChange("todos")
    onSearchChange("")
    onPriceRangeChange([0, 1000])
    onInStockChange(false)
  }

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        <Input
          placeholder="Buscar helados, sabores, ingredientes..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      {/* Mobile Filter Toggle */}
      <div className="lg:hidden">
        <Button variant="outline" onClick={() => setIsFiltersOpen(!isFiltersOpen)} className="w-full justify-between">
          <span className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            Filtros
          </span>
          {isFiltersOpen ? <X className="h-4 w-4" /> : <Filter className="h-4 w-4" />}
        </Button>
      </div>

      {/* Filters */}
      <div className={`space-y-6 ${isFiltersOpen ? "block" : "hidden lg:block"}`}>
        {/* Categories */}
        <div>
          <Label className="text-base font-semibold mb-3 block">Categorías</Label>
          <div className="space-y-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "ghost"}
                className="w-full justify-between"
                onClick={() => onCategoryChange(category.id)}
              >
                <span>{category.name}</span>
                <span className="text-xs bg-muted px-2 py-1 rounded">{category.count}</span>
              </Button>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <Label className="text-base font-semibold mb-3 block">Rango de Precio</Label>
          <div className="px-2">
            <Slider
              value={priceRange}
              onValueChange={(value) => onPriceRangeChange(value as [number, number])}
              max={1000}
              min={0}
              step={50}
              className="mb-2"
            />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
        </div>

        {/* Stock Filter */}
        <div className="flex items-center space-x-2">
          <Checkbox
            id="inStock"
            checked={showInStockOnly}
            onCheckedChange={(checked) => onInStockChange(checked as boolean)}
          />
          <Label htmlFor="inStock" className="text-sm">
            Solo productos en stock
          </Label>
        </div>

        {/* Clear Filters */}
        <Button variant="outline" onClick={clearFilters} className="w-full bg-transparent">
          Limpiar Filtros
        </Button>
      </div>
    </div>
  )
}
