import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  images: string[];
  fabric: string;
  care: string[];
  details: string;
  sizes: string[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Linen Essential Shirt",
    description: "Breathable organic linen",
    price: 2899,
    image: product1,
    images: [product1, product2, product3],
    fabric: "100% Organic Linen",
    care: ["Machine wash cold", "Tumble dry low", "Iron on medium heat"],
    details: "A timeless essential crafted from premium organic linen. The relaxed fit and breathable fabric make it perfect for warm days. Features mother-of-pearl buttons and a curved hem for effortless styling.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 2,
    name: "Tailored Wool Trousers",
    description: "Italian merino wool blend",
    price: 4599,
    image: product2,
    images: [product2, product1, product4],
    fabric: "80% Merino Wool, 20% Polyester",
    care: ["Dry clean only", "Steam to refresh", "Store folded"],
    details: "Impeccably tailored trousers in a luxurious Italian merino wool blend. The slim-straight cut offers a modern silhouette while maintaining comfort. Features a hidden clasp closure and side pockets.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Cashmere Knit Sweater",
    description: "100% Mongolian cashmere",
    price: 6199,
    image: product3,
    images: [product3, product5, product6],
    fabric: "100% Mongolian Cashmere",
    care: ["Hand wash cold", "Lay flat to dry", "Store folded with cedar"],
    details: "Luxuriously soft sweater knitted from the finest Mongolian cashmere. The relaxed fit and ribbed details create a refined yet effortless look. A versatile piece that elevates any wardrobe.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 4,
    name: "Linen Blazer",
    description: "Relaxed fit, unlined",
    price: 6999,
    image: product4,
    images: [product4, product1, product2],
    fabric: "100% European Linen",
    care: ["Dry clean recommended", "Steam to remove wrinkles", "Hang to store"],
    details: "An unstructured blazer that bridges casual and formal with ease. Crafted from European linen with a relaxed fit and patch pockets. The unlined construction ensures breathability.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 5,
    name: "Organic Cotton Tee",
    description: "GOTS certified organic",
    price: 1499,
    image: product5,
    images: [product5, product6, product3],
    fabric: "100% GOTS Certified Organic Cotton",
    care: ["Machine wash cold", "Tumble dry low", "Iron on low heat"],
    details: "The perfect everyday tee, crafted from GOTS certified organic cotton. Features a classic crew neck, relaxed fit, and reinforced seams for lasting wear. Available in essential neutral tones.",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 6,
    name: "Linen Shorts",
    description: "Lightweight summer essential",
    price: 2399,
    image: product6,
    images: [product6, product5, product1],
    fabric: "100% Organic Linen",
    care: ["Machine wash cold", "Tumble dry low", "Iron on medium heat"],
    details: "Effortless summer shorts in lightweight organic linen. Features an elastic waist with drawstring, side pockets, and a relaxed fit. The perfect companion for warm-weather days.",
    sizes: ["S", "M", "L", "XL"],
  },
];

export const getProductById = (id: number): Product | undefined => {
  return products.find((product) => product.id === id);
};
