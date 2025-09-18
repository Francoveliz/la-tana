import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/colorful-ice-cream-shop-interior-with-pastel-color.jpg"
          alt="Interior de Heladería Dulce Buenos Aires con colores pasteles y ambiente acogedor"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance">
          Los Mejores Helados
          <span className="block text-primary">Artesanales</span>
          de Buenos Aires
        </h1>

        <p className="text-lg md:text-xl mb-8 text-balance max-w-2xl mx-auto opacity-90">
          Sabores únicos creados con ingredientes naturales y mucho amor. Descubre nuestra colección de helados
          artesanales y disfruta de la entrega a domicilio.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" className="text-lg px-8 py-6">
            <Link href="/productos">Explorar Sabores</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20"
          >
            <Link href="/sobre-nosotros">Nuestra Historia</Link>
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
