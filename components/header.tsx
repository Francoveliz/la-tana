"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, Search } from "lucide-react"
import { useState } from "react"
import { CartDrawer } from "@/components/cart-drawer"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">🍦</span>
          </div>
          <span className="font-bold text-xl text-foreground">La Tana</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-foreground hover:text-primary transition-colors">
            Inicio
          </Link>
          <Link href="/productos" className="text-foreground hover:text-primary transition-colors">
            Productos
          </Link>
          <Link href="/sobre-nosotros" className="text-foreground hover:text-primary transition-colors">
            Sobre Nosotros
          </Link>
          <Link href="/contacto" className="text-foreground hover:text-primary transition-colors">
            Contacto
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Search className="h-5 w-5" />
          </Button>
          <CartDrawer />
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link href="/" className="text-foreground hover:text-primary transition-colors">
              Inicio
            </Link>
            <Link href="/productos" className="text-foreground hover:text-primary transition-colors">
              Productos
            </Link>
            <Link href="/sobre-nosotros" className="text-foreground hover:text-primary transition-colors">
              Sobre Nosotros
            </Link>
            <Link href="/contacto" className="text-foreground hover:text-primary transition-colors">
              Contacto
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
