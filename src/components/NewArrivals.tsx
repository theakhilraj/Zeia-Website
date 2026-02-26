import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useProducts } from "@/contexts/ProductsContext";
import ProductCard from "@/components/ProductCard";

const NewArrivals = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>();
  const { products } = useProducts();

  return (
    <section
      ref={sectionRef}
      id="new-arrivals"
      className="section-padding bg-background"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
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
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {products.slice(0, 3).map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
