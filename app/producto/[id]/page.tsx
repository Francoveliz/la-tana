import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetail } from "@/components/product-detail"
import { getProductById } from "@/lib/products"
import { generateProductMetadata, generateStructuredData } from "@/lib/seo"

interface ProductPageProps {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: ProductPageProps) {
  const product = getProductById(Number.parseInt(params.id))
  if (!product) return {}
  return generateProductMetadata(product)
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(Number.parseInt(params.id))

  if (!product) {
    notFound()
  }

  const productStructuredData = generateStructuredData("product", product)
  const breadcrumbData = generateStructuredData("breadcrumb", [
    { name: "Inicio", url: "/" },
    { name: "Productos", url: "/productos" },
    { name: product.name, url: `/producto/${product.id}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productStructuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
      <div className="min-h-screen">
        <Header />
        <main>
          <ProductDetail product={product} />
        </main>
        <Footer />
      </div>
    </>
  )
}

export async function generateStaticParams() {
  return [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
    { id: "6" },
    { id: "7" },
    { id: "8" },
    { id: "9" },
    { id: "10" },
    { id: "11" },
    { id: "12" },
  ]
}
