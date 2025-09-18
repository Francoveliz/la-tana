import type { Metadata } from "next"
import Image from "next/image"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Heart, Award, Users, Leaf } from "lucide-react"

export const metadata: Metadata = {
  title: "Sobre Nosotros - Dulce BA | Heladería Artesanal en Buenos Aires",
  description:
    "Conoce la historia de Dulce BA, heladería artesanal familiar en Buenos Aires. Más de 15 años creando helados únicos con ingredientes naturales y recetas tradicionales.",
  keywords: "heladería artesanal, Buenos Aires, historia, familia, ingredientes naturales, tradición",
  openGraph: {
    title: "Sobre Nosotros - Dulce BA",
    description: "Conoce la historia de nuestra heladería artesanal familiar en Buenos Aires",
    images: ["/colorful-ice-cream-shop-interior-with-pastel-color.jpg"],
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  mainEntity: {
    "@type": "LocalBusiness",
    "@id": "https://dulceba.com",
    name: "Dulce BA",
    description: "Heladería artesanal familiar en Buenos Aires",
    foundingDate: "2008",
    founder: {
      "@type": "Person",
      name: "María y Carlos Rodríguez",
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Av. Corrientes 1234",
      addressLocality: "Buenos Aires",
      addressCountry: "AR",
    },
  },
}

export default function SobreNosotrosPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <div className="min-h-screen">
        <Header />

        <main className="bg-gradient-to-b from-orange-50 to-white">
          {/* Hero Section */}
          <section className="relative py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <Badge className="mb-4 bg-orange-100 text-orange-800 hover:bg-orange-200">Nuestra Historia</Badge>
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
                  Más que helados, <span className="text-orange-500">creamos momentos</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto text-pretty">
                  Desde 2008, somos una heladería familiar que combina tradición italiana con el sabor único de Buenos
                  Aires, creando helados artesanales que despiertan sonrisas en cada cucharada.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <Image
                    src="/colorful-ice-cream-shop-interior-with-pastel-color.jpg"
                    alt="Interior de Dulce BA con colores pasteles y ambiente acogedor"
                    width={600}
                    height={400}
                    className="rounded-2xl shadow-2xl"
                    priority
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center gap-2">
                      <Heart className="w-5 h-5 text-red-500" />
                      <span className="font-semibold text-gray-900">15+ años</span>
                    </div>
                    <p className="text-sm text-gray-600">de tradición familiar</p>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 p-3 rounded-full">
                      <Users className="w-6 h-6 text-orange-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Familia Rodríguez</h3>
                      <p className="text-gray-600">
                        María y Carlos comenzaron este sueño en 2008, inspirados por las recetas tradicionales de la
                        nonna italiana y el amor por los sabores auténticos de Argentina.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 p-3 rounded-full">
                      <Leaf className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Ingredientes Naturales</h3>
                      <p className="text-gray-600">
                        Seleccionamos cuidadosamente cada ingrediente: frutas frescas de estación, leche de tambos
                        locales y los mejores chocolates para garantizar calidad excepcional.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <Award className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Proceso Artesanal</h3>
                      <p className="text-gray-600">
                        Cada helado se elabora en pequeños lotes con técnicas tradicionales, sin conservantes
                        artificiales, manteniendo la cremosidad y sabor que nos caracteriza.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Valores Section */}
          <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nuestros Valores</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Los principios que guían cada día nuestro trabajo y nos conectan con la comunidad porteña.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center p-8 border-2 hover:border-orange-200 transition-colors">
                  <CardContent className="pt-6">
                    <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Heart className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Pasión Familiar</h3>
                    <p className="text-gray-600">
                      Cada helado lleva el amor y dedicación de tres generaciones que han perfeccionado nuestras recetas
                      únicas.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-8 border-2 hover:border-green-200 transition-colors">
                  <CardContent className="pt-6">
                    <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Leaf className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Calidad Natural</h3>
                    <p className="text-gray-600">
                      Comprometidos con ingredientes frescos y naturales, apoyando a productores locales y cuidando el
                      medio ambiente.
                    </p>
                  </CardContent>
                </Card>

                <Card className="text-center p-8 border-2 hover:border-blue-200 transition-colors">
                  <CardContent className="pt-6">
                    <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Users className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Comunidad</h3>
                    <p className="text-gray-600">
                      Somos parte del barrio, creando momentos especiales y siendo el punto de encuentro de familias y
                      amigos.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Ubicación y Horarios */}
          <section className="py-20 px-4 bg-gradient-to-r from-orange-50 to-pink-50">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Visitanos</h2>
                <p className="text-lg text-gray-600">Te esperamos en el corazón de Buenos Aires</p>
              </div>

              <div className="grid md:grid-cols-2 gap-12">
                <Card className="p-8">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-6">
                      <MapPin className="w-6 h-6 text-orange-600" />
                      <h3 className="text-xl font-semibold text-gray-900">Nuestra Ubicación</h3>
                    </div>
                    <div className="space-y-3 text-gray-600">
                      <p className="font-medium">Av. Corrientes 1234</p>
                      <p>Barrio San Nicolás</p>
                      <p>Ciudad Autónoma de Buenos Aires</p>
                      <p className="text-sm mt-4">A pocas cuadras del Obelisco, fácil acceso en transporte público</p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-8">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-6">
                      <Clock className="w-6 h-6 text-orange-600" />
                      <h3 className="text-xl font-semibold text-gray-900">Horarios de Atención</h3>
                    </div>
                    <div className="space-y-3 text-gray-600">
                      <div className="flex justify-between">
                        <span>Lunes a Viernes</span>
                        <span className="font-medium">14:00 - 23:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sábados</span>
                        <span className="font-medium">12:00 - 24:00</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Domingos</span>
                        <span className="font-medium">12:00 - 23:00</span>
                      </div>
                      <p className="text-sm mt-4 text-orange-600 font-medium">
                        ¡También hacemos delivery hasta las 22:00!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
