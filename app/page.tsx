import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturedProducts } from "@/components/featured-products"
import { Footer } from "@/components/footer"
import { generateStructuredData } from "@/lib/seo"

export default function HomePage() {
  const breadcrumbData = generateStructuredData("breadcrumb", [{ name: "Inicio", url: "/" }])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData),
        }}
      />
      <div className="min-h-screen">
        <Header />
        <main>
          <HeroSection />
          <FeaturedProducts />
        </main>
        <Footer />
      </div>
    </>
  )
}
