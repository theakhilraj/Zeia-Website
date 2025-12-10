import { ArrowRight } from "lucide-react";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";

const products = [
  {
    id: 1,
    name: "Linen Essential Shirt",
    price: 180,
    image: product1,
    category: "Shirts",
  },
  {
    id: 2,
    name: "Tailored Wool Trousers",
    price: 290,
    image: product2,
    category: "Trousers",
  },
  {
    id: 3,
    name: "Cashmere Knit Sweater",
    price: 340,
    image: product3,
    category: "Knitwear",
  },
  {
    id: 4,
    name: "Linen Blazer",
    price: 420,
    image: product4,
    category: "Outerwear",
  },
];

const FeaturedCollection = () => {
  return (
    <section id="collections" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4">
              Featured
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl">
              New Arrivals
            </h2>
          </div>
          <a
            href="#"
            className="group flex items-center gap-2 text-sm tracking-widest uppercase mt-6 md:mt-0 hover:text-muted-foreground transition-colors"
          >
            View All
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {products.map((product, index) => (
            <article
              key={product.id}
              className="product-card group cursor-pointer opacity-0 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
              </div>
              <div className="space-y-2">
                <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                  {product.category}
                </p>
                <h3 className="font-serif text-lg">{product.name}</h3>
                <p className="text-sm text-muted-foreground">
                  ${product.price}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollection;
