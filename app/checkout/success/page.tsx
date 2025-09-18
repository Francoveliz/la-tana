import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { CheckCircle, Package, Home } from "lucide-react"

export default function CheckoutSuccessPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <CheckCircle className="h-24 w-24 text-green-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4 text-green-700">¡Pago Exitoso!</h1>
            <p className="text-lg text-muted-foreground">Tu pedido ha sido procesado correctamente</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 justify-center">
                <Package className="h-5 w-5" />
                ¿Qué sigue?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  1
                </div>
                <div>
                  <h3 className="font-semibold">Confirmación por email</h3>
                  <p className="text-sm text-muted-foreground">
                    Recibirás un email con los detalles de tu pedido en los próximos minutos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="font-semibold">Preparación</h3>
                  <p className="text-sm text-muted-foreground">
                    Comenzaremos a preparar tus helados frescos inmediatamente.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  3
                </div>
                <div>
                  <h3 className="font-semibold">Entrega</h3>
                  <p className="text-sm text-muted-foreground">
                    Tu pedido llegará en 30-60 minutos, manteniendo la cadena de frío.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Button asChild size="lg" className="w-full">
              <Link href="/">
                <Home className="h-5 w-5 mr-2" />
                Volver al Inicio
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full bg-transparent">
              <Link href="/productos">Seguir Comprando</Link>
            </Button>
          </div>

          <div className="mt-8 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              ¿Tienes alguna pregunta sobre tu pedido?
              <Link href="/contacto" className="text-primary hover:underline ml-1">
                Contáctanos
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
