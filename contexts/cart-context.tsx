"use client"

import type React from "react"
import { createContext, useContext, useReducer, useEffect } from "react"
import type { Product } from "@/lib/products"
import type { Cart } from "@/lib/cart"
import {
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  clearCart,
  calculateCartTotal,
  calculateItemCount,
} from "@/lib/cart"

interface CartContextType {
  cart: Cart
  addItem: (product: Product, quantity?: number) => void
  removeItem: (productId: number) => void
  updateQuantity: (productId: number, quantity: number) => void
  clearCart: () => void
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

type CartAction =
  | { type: "ADD_ITEM"; product: Product; quantity: number }
  | { type: "REMOVE_ITEM"; productId: number }
  | { type: "UPDATE_QUANTITY"; productId: number; quantity: number }
  | { type: "CLEAR_CART" }
  | { type: "LOAD_CART"; cart: Cart }
  | { type: "OPEN_CART" }
  | { type: "CLOSE_CART" }

interface CartState {
  cart: Cart
  isOpen: boolean
}

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        cart: addToCart(state.cart, action.product, action.quantity),
      }
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: removeFromCart(state.cart, action.productId),
      }
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: updateCartItemQuantity(state.cart, action.productId, action.quantity),
      }
    case "CLEAR_CART":
      return {
        ...state,
        cart: clearCart(),
      }
    case "LOAD_CART":
      return {
        ...state,
        cart: action.cart,
      }
    case "OPEN_CART":
      return {
        ...state,
        isOpen: true,
      }
    case "CLOSE_CART":
      return {
        ...state,
        isOpen: false,
      }
    default:
      return state
  }
}

const initialCart: Cart = {
  items: [],
  total: 0,
  itemCount: 0,
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, {
    cart: initialCart,
    isOpen: false,
  })

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("heladeria-cart")
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart)
        // Recalculate totals in case of data inconsistency
        const cart: Cart = {
          items: parsedCart.items || [],
          total: calculateCartTotal(parsedCart.items || []),
          itemCount: calculateItemCount(parsedCart.items || []),
        }
        dispatch({ type: "LOAD_CART", cart })
      } catch (error) {
        console.error("Error loading cart from localStorage:", error)
      }
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("heladeria-cart", JSON.stringify(state.cart))
  }, [state.cart])

  const addItem = (product: Product, quantity = 1) => {
    dispatch({ type: "ADD_ITEM", product, quantity })
  }

  const removeItem = (productId: number) => {
    dispatch({ type: "REMOVE_ITEM", productId })
  }

  const updateQuantity = (productId: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", productId, quantity })
  }

  const clearCartHandler = () => {
    dispatch({ type: "CLEAR_CART" })
  }

  const openCart = () => {
    dispatch({ type: "OPEN_CART" })
  }

  const closeCart = () => {
    dispatch({ type: "CLOSE_CART" })
  }

  return (
    <CartContext.Provider
      value={{
        cart: state.cart,
        addItem,
        removeItem,
        updateQuantity,
        clearCart: clearCartHandler,
        isOpen: state.isOpen,
        openCart,
        closeCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
