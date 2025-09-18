import type { Product } from "./products"

export interface CartItem {
  product: Product
  quantity: number
}

export interface Cart {
  items: CartItem[]
  total: number
  itemCount: number
}

export function calculateCartTotal(items: CartItem[]): number {
  return items.reduce((total, item) => total + item.product.price * item.quantity, 0)
}

export function calculateItemCount(items: CartItem[]): number {
  return items.reduce((count, item) => count + item.quantity, 0)
}

export function addToCart(cart: Cart, product: Product, quantity = 1): Cart {
  const existingItemIndex = cart.items.findIndex((item) => item.product.id === product.id)

  let newItems: CartItem[]
  if (existingItemIndex >= 0) {
    // Update existing item
    newItems = cart.items.map((item, index) =>
      index === existingItemIndex ? { ...item, quantity: item.quantity + quantity } : item,
    )
  } else {
    // Add new item
    newItems = [...cart.items, { product, quantity }]
  }

  return {
    items: newItems,
    total: calculateCartTotal(newItems),
    itemCount: calculateItemCount(newItems),
  }
}

export function removeFromCart(cart: Cart, productId: number): Cart {
  const newItems = cart.items.filter((item) => item.product.id !== productId)
  return {
    items: newItems,
    total: calculateCartTotal(newItems),
    itemCount: calculateItemCount(newItems),
  }
}

export function updateCartItemQuantity(cart: Cart, productId: number, quantity: number): Cart {
  if (quantity <= 0) {
    return removeFromCart(cart, productId)
  }

  const newItems = cart.items.map((item) => (item.product.id === productId ? { ...item, quantity } : item))

  return {
    items: newItems,
    total: calculateCartTotal(newItems),
    itemCount: calculateItemCount(newItems),
  }
}

export function clearCart(): Cart {
  return {
    items: [],
    total: 0,
    itemCount: 0,
  }
}
