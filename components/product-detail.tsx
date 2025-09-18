"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ShoppingCart, Heart, Share2 } from "lucide-react"
import type { Product } from "@/lib/products"
import { useCart } from "@/contexts/cart-context"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1)
  const [isFavorite, setIsFavorite] = useState(false)
  const { addItem } = useCart()

  const handleAddToCart = () => {
    addItem(product, quantity)
    // Optional: Show success message or open cart drawer
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Button variant="ghost" asChild className="mb-4">
          <Link href="/productos" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Volver a Productos
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        {/* Product Image */}
        <div className="space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-lg">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            {!product.inStock && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <Badge variant="destructive" className="text-lg px-4 py-2">
                  Agotado
                </Badge>
              </div>
            )}
          </div>
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              {product.featured && <Badge className="bg-primary">Destacado</Badge>}
              <Badge variant="secondary">{product.category}</Badge>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-foreground text-balance">{product.name}</h1>
            <p className="text-lg text-muted-foreground text-pretty">{product.description}</p>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-primary">${product.price}</span>
            <span className="text-muted-foreground">por {product.size}</span>
          </div>

          {/* Flavors */}
          <div>
            <h3 className="font-semibold mb-2">Sabores:</h3>
            <div className="flex flex-wrap gap-2">
              {product.flavors.map((flavor) => (
                <Badge key={flavor} variant="outline">
                  {flavor}
                </Badge>
              ))}
            </div>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <label htmlFor="quantity" className="font-semibold">
                Cantidad:
              </label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  disabled={!product.inStock}
                >
                  -
                </Button>
                <span className="w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                  disabled={!product.inStock}
                >
                  +
                </Button>
              </div>
            </div>

            <div className="flex gap-3">
              <Button size="lg" className="flex-1" onClick={handleAddToCart} disabled={!product.inStock}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                {product.inStock ? "Agregar al Carrito" : "Agotado"}
              </Button>
              <Button variant="outline" size="lg" onClick={() => setIsFavorite(!isFavorite)}>
                <Heart className={`h-5 w-5 ${isFavorite ? "fill-current text-red-500" : ""}`} />
              </Button>
              <Button variant="outline" size="lg">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Ingredients */}
        <Card>
          <CardHeader>
            <CardTitle>Ingredientes</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-1">
              {product.ingredients.map((ingredient, index) => (
                <li key={index} className="text-muted-foreground">
                  • {ingredient}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* Nutritional Information */}
        {product.nutritionalInfo && (
          <Card>
            <CardHeader>
              <CardTitle>Información Nutricional</CardTitle>
              <p className="text-sm text-muted-foreground">Por porción de 100g</p>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span>Calorías</span>
                <span className="font-semibold">{product.nutritionalInfo.calories} kcal</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span>Grasas</span>
                <span className="font-semibold">{product.nutritionalInfo.fat}g</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span>Azúcares</span>
                <span className="font-semibold">{product.nutritionalInfo.sugar}g</span>
              </div>
              <Separator />
              <div className="flex justify-between">
                <span>Proteínas</span>
                <span className="font-semibold">{product.nutritionalInfo.protein}g</span>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
