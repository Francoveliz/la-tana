export interface CustomerInfo {
  firstName: string
  lastName: string
  email: string
  phone: string
  address: {
    street: string
    number: string
    apartment?: string
    city: string
    postalCode: string
    province: string
  }
}

export interface OrderSummary {
  items: Array<{
    id: number
    name: string
    price: number
    quantity: number
  }>
  subtotal: number
  shipping: number
  total: number
}

export interface PaymentPreference {
  id: string
  init_point: string
  sandbox_init_point: string
}

export const PROVINCES = [
  "Buenos Aires",
  "Catamarca",
  "Chaco",
  "Chubut",
  "Córdoba",
  "Corrientes",
  "Entre Ríos",
  "Formosa",
  "Jujuy",
  "La Pampa",
  "La Rioja",
  "Mendoza",
  "Misiones",
  "Neuquén",
  "Río Negro",
  "Salta",
  "San Juan",
  "San Luis",
  "Santa Cruz",
  "Santa Fe",
  "Santiago del Estero",
  "Tierra del Fuego",
  "Tucumán",
]

export function calculateShipping(subtotal: number, province: string): number {
  // Free shipping for orders over $500
  if (subtotal >= 500) return 0

  // Different shipping rates by province
  const shippingRates: Record<string, number> = {
    "Buenos Aires": 150,
    CABA: 100,
    Córdoba: 200,
    "Santa Fe": 180,
    Mendoza: 250,
    // Add more provinces as needed
  }

  return shippingRates[province] || 200
}

export function validateCustomerInfo(info: Partial<CustomerInfo>): string[] {
  const errors: string[] = []

  if (!info.firstName?.trim()) errors.push("El nombre es requerido")
  if (!info.lastName?.trim()) errors.push("El apellido es requerido")
  if (!info.email?.trim()) errors.push("El email es requerido")
  if (!info.phone?.trim()) errors.push("El teléfono es requerido")
  if (!info.address?.street?.trim()) errors.push("La calle es requerida")
  if (!info.address?.number?.trim()) errors.push("El número es requerido")
  if (!info.address?.city?.trim()) errors.push("La ciudad es requerida")
  if (!info.address?.postalCode?.trim()) errors.push("El código postal es requerido")
  if (!info.address?.province?.trim()) errors.push("La provincia es requerida")

  // Email validation
  if (info.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(info.email)) {
    errors.push("El email no es válido")
  }

  // Phone validation (basic)
  if (info.phone && !/^\+?[\d\s-()]+$/.test(info.phone)) {
    errors.push("El teléfono no es válido")
  }

  return errors
}
