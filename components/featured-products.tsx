import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const featuredProducts = [
  {
    id: 1,
    name: "Dulce de Leche Artesanal",
    description: "Nuestro clásico dulce de leche con trozos de alfajor",
    price: 850,
    image: "/dulce-de-leche-ice-cream-with-alfajor-pieces.jpg",
  },
  {
    id: 2,
    name: "Frutilla & Crema",
    description: "Helado de frutillas frescas con crema batida",
    price: 780,
    image: "/strawberry-and-cream-ice-cream-with-fresh-strawber.jpg",
  },
  {
    id: 3,
    name: "Chocolate Marroc",
    description: "Intenso chocolate con trozos de marroc",
    price: 920,
    image: "/rich-chocolate-ice-cream-with-chocolate-chunks.jpg",
  },
  {
    id: 4,
    name: "Limón & Menta",
    description: "Refrescante helado de limón con hojas de menta",
    price: 750,
    image: "/lemon-mint-ice-cream-with-fresh-mint-leaves.jpg",
  },
]

export function FeaturedProducts() {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Sabores Destacados</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Descubre nuestros sabores más populares, creados con ingredientes frescos y naturales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={`${product.name} - Helado artesanal de ${product.name.toLowerCase()}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-foreground">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-3 text-pretty">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">${product.price}</span>
                  <Button size="sm" asChild>
                    <Link href={`/producto/${product.id}`}>Ver Más</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/productos">Ver Todos los Sabores</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
