import type { Metadata } from "next"
import type { Product } from "./products"

export const siteConfig = {
  name: "Heladería Dulce Buenos Aires",
  description:
    "Los mejores helados artesanales de Buenos Aires. Sabores únicos, ingredientes naturales y entrega a domicilio. ¡Ordena online!",
  url: "https://dulceba.com",
  ogImage: "/og-image.jpg",
  links: {
    twitter: "https://twitter.com/dulceba",
    instagram: "https://instagram.com/dulceba",
    facebook: "https://facebook.com/dulceba",
  },
}

export function generateMetadata({
  title,
  description,
  image,
  url,
  type = "website",
}: {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: "website" | "article" | "product"
}): Metadata {
  const metaTitle = title ? `${title} | ${siteConfig.name}` : siteConfig.name
  const metaDescription = description || siteConfig.description
  const metaImage = image || siteConfig.ogImage
  const metaUrl = url ? `${siteConfig.url}${url}` : siteConfig.url

  return {
    title: metaTitle,
    description: metaDescription,
    keywords: [
      "helados artesanales",
      "heladería Buenos Aires",
      "delivery helados",
      "sabores únicos",
      "ingredientes naturales",
      "helados premium",
      "postres Buenos Aires",
    ],
    authors: [{ name: "Heladería Dulce Buenos Aires" }],
    creator: "Heladería Dulce Buenos Aires",
    publisher: "Heladería Dulce Buenos Aires",
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    openGraph: {
      type,
      locale: "es_AR",
      url: metaUrl,
      title: metaTitle,
      description: metaDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: metaImage,
          width: 1200,
          height: 630,
          alt: metaTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [metaImage],
      creator: "@dulceba",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    verification: {
      google: "your-google-verification-code",
      yandex: "your-yandex-verification-code",
    },
  }
}

export function generateProductMetadata(product: Product): Metadata {
  return generateMetadata({
    title: product.name,
    description: `${product.description} - ${product.flavors.join(", ")} - $${product.price} - Entrega a domicilio en Buenos Aires`,
    image: product.image,
    url: `/producto/${product.id}`,
    type: "website", 
  })
}


export function generateStructuredData(type: "organization" | "product" | "breadcrumb", data?: any) {
  switch (type) {
    case "organization":
      return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteConfig.name,
        description: siteConfig.description,
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.png`,
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+54-11-1234-5678",
          contactType: "customer service",
          areaServed: "AR",
          availableLanguage: "Spanish",
        },
        address: {
          "@type": "PostalAddress",
          streetAddress: "Av. Corrientes 1234",
          addressLocality: "Buenos Aires",
          addressRegion: "CABA",
          postalCode: "1000",
          addressCountry: "AR",
        },
        sameAs: [siteConfig.links.facebook, siteConfig.links.instagram, siteConfig.links.twitter],
      }

    case "product":
      if (!data) return null
      return {
        "@context": "https://schema.org",
        "@type": "Product",
        name: data.name,
        description: data.description,
        image: data.image,
        brand: {
          "@type": "Brand",
          name: siteConfig.name,
        },
        offers: {
          "@type": "Offer",
          price: data.price,
          priceCurrency: "ARS",
          availability: data.inStock ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
          seller: {
            "@type": "Organization",
            name: siteConfig.name,
          },
        },
        category: data.category,
        additionalProperty: data.flavors.map((flavor: string) => ({
          "@type": "PropertyValue",
          name: "Sabor",
          value: flavor,
        })),
      }

    case "breadcrumb":
      if (!data) return null
      return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: data.map((item: any, index: number) => ({
          "@type": "ListItem",
          position: index + 1,
          name: item.name,
          item: `${siteConfig.url}${item.url}`,
        })),
      }

    default:
      return null
  }
}
