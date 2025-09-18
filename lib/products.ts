export interface Product {
  id: number
  name: string
  description: string
  price: number
  image: string
  category: string
  flavors: string[]
  size: string
  ingredients: string[]
  nutritionalInfo?: {
    calories: number
    fat: number
    sugar: number
    protein: number
  }
  featured: boolean
  inStock: boolean
}

export const categories = [
  { id: "todos", name: "Todos", count: 24 },
  { id: "clasicos", name: "Clásicos", count: 8 },
  { id: "frutales", name: "Frutales", count: 6 },
  { id: "chocolates", name: "Chocolates", count: 5 },
  { id: "especiales", name: "Especiales", count: 5 },
]

export const products: Product[] = [
  {
    id: 1,
    name: "Dulce de Leche Artesanal",
    description: "Nuestro clásico dulce de leche con trozos de alfajor y merengue",
    price: 850,
    image: "/dulce-de-leche-ice-cream-with-alfajor-pieces.jpg",
    category: "clasicos",
    flavors: ["Dulce de Leche"],
    size: "500ml",
    ingredients: ["Leche", "Dulce de leche", "Alfajor", "Merengue", "Vainilla"],
    nutritionalInfo: {
      calories: 280,
      fat: 15,
      sugar: 25,
      protein: 6,
    },
    featured: true,
    inStock: true,
  },
  {
    id: 2,
    name: "Frutilla & Crema",
    description: "Helado de frutillas frescas con crema batida y trozos de frutilla",
    price: 780,
    image: "/strawberry-and-cream-ice-cream-with-fresh-strawber.jpg",
    category: "frutales",
    flavors: ["Frutilla", "Crema"],
    size: "500ml",
    ingredients: ["Frutillas frescas", "Crema", "Leche", "Azúcar", "Vainilla"],
    nutritionalInfo: {
      calories: 240,
      fat: 12,
      sugar: 22,
      protein: 5,
    },
    featured: true,
    inStock: true,
  },
  {
    id: 3,
    name: "Chocolate Marroc",
    description: "Intenso chocolate con trozos de marroc y almendras",
    price: 920,
    image: "/rich-chocolate-ice-cream-with-chocolate-chunks.jpg",
    category: "chocolates",
    flavors: ["Chocolate"],
    size: "500ml",
    ingredients: ["Chocolate belga", "Marroc", "Almendras", "Leche", "Cacao"],
    nutritionalInfo: {
      calories: 320,
      fat: 18,
      sugar: 28,
      protein: 7,
    },
    featured: true,
    inStock: true,
  },
  {
    id: 4,
    name: "Limón & Menta",
    description: "Refrescante helado de limón con hojas de menta fresca",
    price: 750,
    image: "/lemon-mint-ice-cream-with-fresh-mint-leaves.jpg",
    category: "frutales",
    flavors: ["Limón", "Menta"],
    size: "500ml",
    ingredients: ["Limón", "Menta fresca", "Leche", "Azúcar"],
    nutritionalInfo: {
      calories: 200,
      fat: 8,
      sugar: 20,
      protein: 4,
    },
    featured: true,
    inStock: true,
  },
  {
    id: 5,
    name: "Vainilla Bourbon",
    description: "Clásico helado de vainilla con esencia de vainilla bourbon",
    price: 720,
    image: "/vanilla-bourbon-ice-cream.jpg",
    category: "clasicos",
    flavors: ["Vainilla"],
    size: "500ml",
    ingredients: ["Vainilla bourbon", "Leche", "Crema", "Azúcar"],
    nutritionalInfo: {
      calories: 260,
      fat: 14,
      sugar: 24,
      protein: 5,
    },
    featured: false,
    inStock: true,
  },
  {
    id: 6,
    name: "Chocolate Blanco & Frambuesa",
    description: "Cremoso chocolate blanco con salsa de frambuesa",
    price: 890,
    image: "/white-chocolate-raspberry-ice-cream.jpg",
    category: "especiales",
    flavors: ["Chocolate Blanco", "Frambuesa"],
    size: "500ml",
    ingredients: ["Chocolate blanco", "Frambuesas", "Leche", "Crema"],
    nutritionalInfo: {
      calories: 300,
      fat: 16,
      sugar: 30,
      protein: 6,
    },
    featured: false,
    inStock: true,
  },
  {
    id: 7,
    name: "Pistacho Siciliano",
    description: "Auténtico helado de pistacho con pistachos sicilianos",
    price: 980,
    image: "/pistachio-ice-cream-with-sicilian-pistachios.jpg",
    category: "especiales",
    flavors: ["Pistacho"],
    size: "500ml",
    ingredients: ["Pistachos sicilianos", "Leche", "Crema", "Azúcar"],
    nutritionalInfo: {
      calories: 290,
      fat: 17,
      sugar: 22,
      protein: 8,
    },
    featured: false,
    inStock: true,
  },
  {
    id: 8,
    name: "Mango Tropical",
    description: "Helado de mango con trozos de mango fresco",
    price: 820,
    image: "/tropical-mango-ice-cream-with-fresh-mango-pieces.jpg",
    category: "frutales",
    flavors: ["Mango"],
    size: "500ml",
    ingredients: ["Mango fresco", "Leche de coco", "Azúcar", "Limón"],
    nutritionalInfo: {
      calories: 220,
      fat: 10,
      sugar: 26,
      protein: 4,
    },
    featured: false,
    inStock: true,
  },
  {
    id: 9,
    name: "Cookies & Cream",
    description: "Helado de vainilla con trozos de galletas Oreo",
    price: 860,
    image: "/cookies-and-cream-ice-cream-with-oreo-pieces.jpg",
    category: "clasicos",
    flavors: ["Vainilla", "Chocolate"],
    size: "500ml",
    ingredients: ["Vainilla", "Galletas Oreo", "Leche", "Crema"],
    nutritionalInfo: {
      calories: 310,
      fat: 16,
      sugar: 28,
      protein: 6,
    },
    featured: false,
    inStock: true,
  },
  {
    id: 10,
    name: "Café Espresso",
    description: "Intenso helado de café con granos de café molidos",
    price: 840,
    image: "/espresso-coffee-ice-cream-with-coffee-beans.jpg",
    category: "especiales",
    flavors: ["Café"],
    size: "500ml",
    ingredients: ["Café espresso", "Leche", "Crema", "Azúcar"],
    nutritionalInfo: {
      calories: 270,
      fat: 13,
      sugar: 24,
      protein: 5,
    },
    featured: false,
    inStock: true,
  },
  {
    id: 11,
    name: "Chocolate Amargo 70%",
    description: "Helado de chocolate amargo con 70% de cacao",
    price: 900,
    image: "/dark-chocolate-ice-cream-70--cocoa.jpg",
    category: "chocolates",
    flavors: ["Chocolate"],
    size: "500ml",
    ingredients: ["Chocolate 70% cacao", "Leche", "Crema", "Azúcar"],
    nutritionalInfo: {
      calories: 290,
      fat: 16,
      sugar: 22,
      protein: 7,
    },
    featured: false,
    inStock: true,
  },
  {
    id: 12,
    name: "Banana Split",
    description: "Helado de banana con trozos de banana y nueces",
    price: 790,
    image: "/banana-split-ice-cream-with-banana-pieces-and-nuts.jpg",
    category: "frutales",
    flavors: ["Banana"],
    size: "500ml",
    ingredients: ["Banana", "Nueces", "Leche", "Crema", "Vainilla"],
    nutritionalInfo: {
      calories: 250,
      fat: 12,
      sugar: 25,
      protein: 5,
    },
    featured: false,
    inStock: false,
  },
]

export function getProductsByCategory(category: string): Product[] {
  if (category === "todos") {
    return products
  }
  return products.filter((product) => product.category === category)
}

export function searchProducts(query: string): Product[] {
  const lowercaseQuery = query.toLowerCase()
  return products.filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.description.toLowerCase().includes(lowercaseQuery) ||
      product.flavors.some((flavor) => flavor.toLowerCase().includes(lowercaseQuery)) ||
      product.ingredients.some((ingredient) => ingredient.toLowerCase().includes(lowercaseQuery)),
  )
}

export function getProductById(id: number): Product | undefined {
  return products.find((product) => product.id === id)
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured)
}
