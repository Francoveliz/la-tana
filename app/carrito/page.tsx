"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Plus, Minus, Trash2, ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"

export default function CartPage() {
  const { cart, updateQuantity, removeItem, clearCart } = useCart()

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center py-12">
            <ShoppingCart className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Tu carrito está vacío</h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Parece que aún no has agregado ningún helado a tu carrito. ¡Explora nuestros deliciosos sabores!
            </p>
            <Button asChild size="lg">
              <Link href="/productos">Explorar Productos</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/productos" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Continuar Comprando
            </Link>
          </Button>
          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold">Carrito de Compras</h1>
            <Button variant="outline" onClick={clearCart}>
              <Trash2 className="h-4 w-4 mr-2" />
              Vaciar Carrito
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cart.items.map((item) => (
              <Card key={item.product.id}>
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                      <Image
                        src={item.product.image || "/placeholder.svg"}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <h3 className="font-semibold text-lg">{item.product.name}</h3>
                          <p className="text-muted-foreground text-sm">{item.product.size}</p>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => removeItem(item.product.id)}
                          className="text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-12 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">${item.product.price} c/u</p>
                          <p className="text-lg font-semibold text-primary">${item.product.price * item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="sticky top-4">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold mb-4">Resumen del Pedido</h2>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span>Subtotal ({cart.itemCount} productos)</span>
                    <span>${cart.total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Envío</span>
                    <span className="text-green-600">Gratis</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-primary">${cart.total}</span>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <Button asChild size="lg" className="w-full">
                    <Link href="/checkout">Proceder al Pago</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="w-full bg-transparent">
                    <Link href="/productos">Continuar Comprando</Link>
                  </Button>
                </div>
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">Envío gratis en pedidos superiores a $500</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
