import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Clock, Mail, Home } from "lucide-react"

export default function CheckoutPendingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="mb-8">
            <Clock className="h-24 w-24 text-yellow-500 mx-auto mb-6" />
            <h1 className="text-3xl font-bold mb-4 text-yellow-700">Pago Pendiente</h1>
            <p className="text-lg text-muted-foreground">Tu pago está siendo procesado</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2 justify-center">
                <Mail className="h-5 w-5" />
                Te mantendremos informado
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-left">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  1
                </div>
                <div>
                  <h3 className="font-semibold">Procesando pago</h3>
                  <p className="text-sm text-muted-foreground">
                    Estamos verificando tu pago con el banco. Esto puede tomar unos minutos.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  2
                </div>
                <div>
                  <h3 className="font-semibold">Confirmación automática</h3>
                  <p className="text-sm text-muted-foreground">
                    Una vez aprobado, recibirás un email de confirmación y comenzaremos a preparar tu pedido.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-yellow-500 text-white rounded-full flex items-center justify-center text-sm font-bold mt-0.5">
                  3
                </div>
                <div>
                  <h3 className="font-semibold">Notificación de estado</h3>
                  <p className="text-sm text-muted-foreground">
                    Te notificaremos por email sobre cualquier cambio en el estado de tu pago.
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
              ¿Tienes preguntas sobre tu pago?
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
