"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CheckoutForm } from "@/components/checkout-form"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import type { CustomerInfo, OrderSummary } from "@/lib/checkout"

export default function CheckoutPage() {
  const { cart } = useCart()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  // Redirect if cart is empty
  useEffect(() => {
    if (cart.items.length === 0) {
      router.push("/productos")
    }
  }, [cart.items.length, router])

  const orderSummary: OrderSummary = {
    items: cart.items.map((item) => ({
      id: item.product.id,
      name: item.product.name,
      price: item.product.price,
      quantity: item.quantity,
    })),
    subtotal: cart.total,
    shipping: 0, // Will be calculated in the form
    total: cart.total, // Will be updated in the form
  }

  const handleCheckoutSubmit = async (customerInfo: CustomerInfo, finalOrderSummary: OrderSummary) => {
    setIsLoading(true)

    try {
      // Create Mercado Pago preference
      const response = await fetch("/api/create-preference", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          orderSummary: finalOrderSummary,
          customerInfo,
        }),
      })

      if (!response.ok) {
        throw new Error("Error al crear la preferencia de pago")
      }

      const preference = await response.json()

      // Redirect to Mercado Pago
      // In production, use preference.init_point
      // In development/testing, use preference.sandbox_init_point
      const paymentUrl = process.env.NODE_ENV === "production" ? preference.init_point : preference.sandbox_init_point

      window.location.href = paymentUrl
    } catch (error) {
      console.error("Error during checkout:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  if (cart.items.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <div className="max-w-2xl mx-auto text-center py-12">
            <ShoppingCart className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4">Tu carrito está vacío</h1>
            <p className="text-muted-foreground mb-8 text-lg">
              Agrega algunos productos antes de proceder al checkout.
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
        <div className="max-w-2xl mx-auto">
          <div className="mb-6">
            <Button variant="ghost" asChild className="mb-4">
              <Link href="/carrito" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Volver al Carrito
              </Link>
            </Button>
            <h1 className="text-3xl font-bold">Checkout</h1>
            <p className="text-muted-foreground">Completa tu información para finalizar la compra</p>
          </div>

          <CheckoutForm orderSummary={orderSummary} onSubmit={handleCheckoutSubmit} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
