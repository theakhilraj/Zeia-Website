import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { Product } from "@/data/products";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  index?: number;
  isVisible?: boolean;
}

const ProductCard = ({ product, index = 0, isVisible = true }: ProductCardProps) => {
  const { addItem } = useCart();

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: "M", // Default size for quick add
    });
    toast.success(`${product.name} added to cart`, {
      description: "Size M selected",
    });
  };

  return (
    <article
      className={`group cursor-pointer transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <Link to={`/product/${product.id}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary rounded-lg mb-5">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />

          {/* Quick Add Button */}
          <div className="absolute bottom-4 left-4 right-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
            <Button
              variant="default"
              className="w-full bg-background text-foreground hover:bg-background/90 active:scale-95 transition-transform"
              onClick={handleQuickAdd}
            >
              Quick Add
            </Button>
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="font-medium text-lg group-hover:text-accent transition-colors">{product.name}</h3>
          <p className="text-sm text-muted-foreground">{product.description}</p>
          <p className="text-base font-medium">₹{product.price.toLocaleString()}</p>
        </div>
      </Link>
    </article>
  );
};

export default ProductCard;
