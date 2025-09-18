import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { XCircle, RefreshCw, ArrowLeft } from "lucide-react"

export default function CheckoutFailurePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <XCircle className="h-24 w-24 text-red-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4 text-red-700">Pago No Completado</h1>
            <p className="text-lg text-muted-foreground">Hubo un problema al procesar tu pago</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>¿Qué puedes hacer?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <RefreshCw className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold">Intentar nuevamente</h3>
                  <p className="text-sm text-muted-foreground">
                    Verifica los datos de tu tarjeta y vuelve a intentar el pago.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <ArrowLeft className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h3 className="font-semibold">Revisar tu carrito</h3>
                  <p className="text-sm text-muted-foreground">
                    Asegúrate de que todos los productos estén disponibles.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="space-y-4">
            <Button asChild size="lg" className="w-full">
              <Link href="/checkout">
                <RefreshCw className="h-5 w-5 mr-2" />
                Intentar Nuevamente
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full bg-transparent">
              <Link href="/carrito">
                <ArrowLeft className="h-5 w-5 mr-2" />
                Volver al Carrito
              </Link>
            </Button>
          </div>

          <div className="mt-8 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              Si el problema persiste,
              <Link href="/contacto" className="text-primary hover:underline ml-1">
                contáctanos
              </Link>{" "}
              y te ayudaremos a completar tu pedido.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
