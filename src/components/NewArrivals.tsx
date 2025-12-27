import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

const products = [
  {
    id: 1,
    name: "Linen Essential Shirt",
    description: "Breathable organic linen",
    price: 89,
    image: product1,
  },
  {
    id: 2,
    name: "Tailored Wool Trousers",
    description: "Italian merino wool blend",
    price: 145,
    image: product2,
  },
  {
    id: 3,
    name: "Cashmere Knit Sweater",
    description: "100% Mongolian cashmere",
    price: 195,
    image: product3,
  },
  {
    id: 4,
    name: "Linen Blazer",
    description: "Relaxed fit, unlined",
    price: 220,
    image: product4,
  },
  {
    id: 5,
    name: "Organic Cotton Tee",
    description: "GOTS certified organic",
    price: 45,
    image: product5,
  },
  {
    id: 6,
    name: "Linen Shorts",
    description: "Lightweight summer essential",
    price: 75,
    image: product6,
  },
];

const NewArrivals = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="new-arrivals"
      className="section-padding bg-background"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-4">
            Just Dropped
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium">
            New Arrivals
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <article
              key={product.id}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-secondary rounded-lg mb-5">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />
                
                {/* Quick Add Button */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <Button variant="default" className="w-full bg-background text-foreground hover:bg-background/90">
                    Add to Cart
                  </Button>
                </div>
              </div>
              
              <div className="space-y-1">
                <h3 className="font-medium text-lg">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.description}</p>
                <p className="text-base font-medium">₹{product.price}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
