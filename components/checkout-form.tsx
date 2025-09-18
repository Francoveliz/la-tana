"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Loader2, CreditCard, Truck, MapPin } from "lucide-react"
import type { CustomerInfo, OrderSummary } from "@/lib/checkout"
import { PROVINCES, validateCustomerInfo, calculateShipping } from "@/lib/checkout"

interface CheckoutFormProps {
  orderSummary: OrderSummary
  onSubmit: (customerInfo: CustomerInfo, finalOrderSummary: OrderSummary) => Promise<void>
}

export function CheckoutForm({ orderSummary, onSubmit }: CheckoutFormProps) {
  const [customerInfo, setCustomerInfo] = useState<Partial<CustomerInfo>>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: {
      street: "",
      number: "",
      apartment: "",
      city: "",
      postalCode: "",
      province: "",
    },
  })

  const [errors, setErrors] = useState<string[]>([])
  const [isSubmitting, setIsSubmitting] = useState(false)

  const shipping = customerInfo.address?.province
    ? calculateShipping(orderSummary.subtotal, customerInfo.address.province)
    : 0

  const finalTotal = orderSummary.subtotal + shipping

  const handleInputChange = (field: string, value: string) => {
    if (field.startsWith("address.")) {
      const addressField = field.split(".")[1]
      setCustomerInfo((prev) => ({
        ...prev,
        address: {
          ...prev.address!,
          [addressField]: value,
        },
      }))
    } else {
      setCustomerInfo((prev) => ({
        ...prev,
        [field]: value,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const validationErrors = validateCustomerInfo(customerInfo)
    if (validationErrors.length > 0) {
      setErrors(validationErrors)
      return
    }

    setErrors([])
    setIsSubmitting(true)

    try {
      const finalOrderSummary: OrderSummary = {
        ...orderSummary,
        shipping,
        total: finalTotal,
      }

      await onSubmit(customerInfo as CustomerInfo, finalOrderSummary)
    } catch (error) {
      setErrors(["Error al procesar el pedido. Por favor, intenta nuevamente."])
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {errors.length > 0 && (
        <Alert variant="destructive">
          <AlertDescription>
            <ul className="list-disc list-inside space-y-1">
              {errors.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          </AlertDescription>
        </Alert>
      )}

      {/* Personal Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-5 w-5" />
            Información Personal
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="firstName">Nombre *</Label>
              <Input
                id="firstName"
                value={customerInfo.firstName || ""}
                onChange={(e) => handleInputChange("firstName", e.target.value)}
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <Label htmlFor="lastName">Apellido *</Label>
              <Input
                id="lastName"
                value={customerInfo.lastName || ""}
                onChange={(e) => handleInputChange("lastName", e.target.value)}
                placeholder="Tu apellido"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={customerInfo.email || ""}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="tu@email.com"
              />
            </div>
            <div>
              <Label htmlFor="phone">Teléfono *</Label>
              <Input
                id="phone"
                value={customerInfo.phone || ""}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+54 11 1234-5678"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Delivery Address */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Truck className="h-5 w-5" />
            Dirección de Entrega
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <Label htmlFor="street">Calle *</Label>
              <Input
                id="street"
                value={customerInfo.address?.street || ""}
                onChange={(e) => handleInputChange("address.street", e.target.value)}
                placeholder="Av. Corrientes"
              />
            </div>
            <div>
              <Label htmlFor="number">Número *</Label>
              <Input
                id="number"
                value={customerInfo.address?.number || ""}
                onChange={(e) => handleInputChange("address.number", e.target.value)}
                placeholder="1234"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <Label htmlFor="apartment">Piso/Depto</Label>
              <Input
                id="apartment"
                value={customerInfo.address?.apartment || ""}
                onChange={(e) => handleInputChange("address.apartment", e.target.value)}
                placeholder="5A (opcional)"
              />
            </div>
            <div>
              <Label htmlFor="city">Ciudad *</Label>
              <Input
                id="city"
                value={customerInfo.address?.city || ""}
                onChange={(e) => handleInputChange("address.city", e.target.value)}
                placeholder="Buenos Aires"
              />
            </div>
            <div>
              <Label htmlFor="postalCode">Código Postal *</Label>
              <Input
                id="postalCode"
                value={customerInfo.address?.postalCode || ""}
                onChange={(e) => handleInputChange("address.postalCode", e.target.value)}
                placeholder="1000"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="province">Provincia *</Label>
            <Select
              value={customerInfo.address?.province || ""}
              onValueChange={(value) => handleInputChange("address.province", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Selecciona una provincia" />
              </SelectTrigger>
              <SelectContent>
                {PROVINCES.map((province) => (
                  <SelectItem key={province} value={province}>
                    {province}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Order Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Resumen del Pedido</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            {orderSummary.items.map((item) => (
              <div key={item.id} className="flex justify-between text-sm">
                <span>
                  {item.name} x{item.quantity}
                </span>
                <span>${item.price * item.quantity}</span>
              </div>
            ))}
          </div>
          <Separator />
          <div className="flex justify-between">
            <span>Subtotal</span>
            <span>${orderSummary.subtotal}</span>
          </div>
          <div className="flex justify-between">
            <span>Envío</span>
            <span className={shipping === 0 ? "text-green-600" : ""}>{shipping === 0 ? "Gratis" : `$${shipping}`}</span>
          </div>
          <Separator />
          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span className="text-primary">${finalTotal}</span>
          </div>
          {shipping === 0 && orderSummary.subtotal >= 500 && (
            <p className="text-sm text-green-600">¡Envío gratis por compra superior a $500!</p>
          )}
        </CardContent>
      </Card>

      {/* Submit Button */}
      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? (
          <>
            <Loader2 className="h-5 w-5 mr-2 animate-spin" />
            Procesando...
          </>
        ) : (
          <>
            <CreditCard className="h-5 w-5 mr-2" />
            Proceder al Pago
          </>
        )}
      </Button>
    </form>
  )
}
