import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"
import { generateMetadata } from "@/lib/seo"

export const metadata = generateMetadata({
  title: "Contacto - Dulce BA Heladería",
  description:
    "Contáctanos para consultas, pedidos especiales o visítanos en nuestro local en Buenos Aires. Horarios, ubicación y formulario de contacto.",
  keywords: ["contacto heladería", "ubicación dulce ba", "horarios heladería buenos aires", "consultas helados"],
  path: "/contacto",
})

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Contáctanos</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Estamos aquí para ayudarte. Envíanos un mensaje o visítanos en nuestro local
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5 text-primary" />
                Envíanos un mensaje
              </CardTitle>
              <CardDescription>Completa el formulario y te responderemos a la brevedad</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-2">
                      Nombre *
                    </label>
                    <Input id="nombre" name="nombre" type="text" required placeholder="Tu nombre" className="w-full" />
                  </div>
                  <div>
                    <label htmlFor="apellido" className="block text-sm font-medium text-foreground mb-2">
                      Apellido *
                    </label>
                    <Input
                      id="apellido"
                      name="apellido"
                      type="text"
                      required
                      placeholder="Tu apellido"
                      className="w-full"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email *
                  </label>
                  <Input id="email" name="email" type="email" required placeholder="tu@email.com" className="w-full" />
                </div>

                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-2">
                    Teléfono
                  </label>
                  <Input id="telefono" name="telefono" type="tel" placeholder="+54 11 1234-5678" className="w-full" />
                </div>

                <div>
                  <label htmlFor="asunto" className="block text-sm font-medium text-foreground mb-2">
                    Asunto *
                  </label>
                  <Input
                    id="asunto"
                    name="asunto"
                    type="text"
                    required
                    placeholder="¿En qué podemos ayudarte?"
                    className="w-full"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-2">
                    Mensaje *
                  </label>
                  <Textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    placeholder="Escribe tu mensaje aquí..."
                    className="w-full min-h-[120px]"
                  />
                </div>

                <Button type="submit" className="w-full">
                  <Send className="h-4 w-4 mr-2" />
                  Enviar mensaje
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Location */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-primary" />
                  Ubicación
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">Dulce BA Heladería</p>
                  <p className="text-muted-foreground">Av. Corrientes 1234</p>
                  <p className="text-muted-foreground">Barrio Norte, Buenos Aires</p>
                  <p className="text-muted-foreground">Argentina (C1043AAZ)</p>
                </div>
                <div className="mt-4 bg-muted rounded-lg p-4">
                  <p className="text-sm text-muted-foreground mb-2">Cómo llegar:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Subte: Línea B - Estación Callao (3 cuadras)</li>
                    <li>• Colectivos: 5, 7, 23, 50, 60, 152</li>
                    <li>• Estacionamiento disponible en la zona</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  Horarios de atención
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Lunes a Viernes</span>
                    <span className="text-muted-foreground">10:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Sábados</span>
                    <span className="text-muted-foreground">10:00 - 23:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Domingos</span>
                    <span className="text-muted-foreground">12:00 - 22:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Feriados</span>
                    <span className="text-muted-foreground">14:00 - 20:00</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium">¡Abierto todos los días del año!</p>
                </div>
              </CardContent>
            </Card>

            {/* Contact Details */}
            <Card>
              <CardHeader>
                <CardTitle>Información de contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Teléfono</p>
                    <p className="text-muted-foreground">+54 11 4567-8901</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">hola@dulceba.com.ar</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Special Services */}
            <Card>
              <CardHeader>
                <CardTitle>Servicios especiales</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Pedidos especiales para eventos y cumpleaños</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Tortas heladas personalizadas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Delivery en CABA (pedido mínimo $3000)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary">•</span>
                    <span>Catering para empresas</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
