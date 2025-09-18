"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"
import { Grid, List, ShoppingCart } from "lucide-react"
import type { Product } from "@/lib/products"
import { useCart } from "@/contexts/cart-context"

interface ProductGridProps {
  products: Product[]
}

export function ProductGrid({ products }: ProductGridProps) {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const { addItem } = useCart()

  if (products.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground text-lg">No se encontraron productos que coincidan con tu búsqueda.</p>
        <p className="text-muted-foreground">Intenta ajustar los filtros o buscar algo diferente.</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {/* View Toggle */}
      <div className="flex justify-between items-center">
        <p className="text-muted-foreground">
          Mostrando {products.length} producto{products.length !== 1 ? "s" : ""}
        </p>
        <div className="flex gap-2">
          <Button variant={viewMode === "grid" ? "default" : "outline"} size="sm" onClick={() => setViewMode("grid")}>
            <Grid className="h-4 w-4" />
          </Button>
          <Button variant={viewMode === "list" ? "default" : "outline"} size="sm" onClick={() => setViewMode("list")}>
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Products */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <Badge variant="destructive">Agotado</Badge>
                  </div>
                )}
                {product.featured && <Badge className="absolute top-2 left-2 bg-primary">Destacado</Badge>}
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-foreground">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-3 text-pretty line-clamp-2">{product.description}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {product.flavors.slice(0, 2).map((flavor) => (
                    <Badge key={flavor} variant="secondary" className="text-xs">
                      {flavor}
                    </Badge>
                  ))}
                  {product.flavors.length > 2 && (
                    <Badge variant="secondary" className="text-xs">
                      +{product.flavors.length - 2}
                    </Badge>
                  )}
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">${product.price}</span>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline" asChild>
                      <Link href={`/producto/${product.id}`}>Ver</Link>
                    </Button>
                    <Button size="sm" disabled={!product.inStock} onClick={() => addItem(product, 1)}>
                      <ShoppingCart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-48 h-48 md:h-32">
                    <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
                    {!product.inStock && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <Badge variant="destructive">Agotado</Badge>
                      </div>
                    )}
                  </div>
                  <div className="flex-1 p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-semibold text-lg text-foreground">{product.name}</h3>
                      <span className="text-xl font-bold text-primary">${product.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm mb-3 text-pretty">{product.description}</p>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {product.flavors.map((flavor) => (
                        <Badge key={flavor} variant="secondary" className="text-xs">
                          {flavor}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" asChild>
                        <Link href={`/producto/${product.id}`}>Ver Detalles</Link>
                      </Button>
                      <Button size="sm" disabled={!product.inStock} onClick={() => addItem(product, 1)}>
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Agregar
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
