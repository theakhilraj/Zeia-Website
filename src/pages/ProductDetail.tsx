import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ChevronRight, Minus, Plus, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getProductById, products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import ProductCard from "@/components/ProductCard";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import CartDrawer from "@/components/CartDrawer";
import { toast } from "sonner";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(Number(id));
  const { addItem } = useCart();

  const [selectedSize, setSelectedSize] = useState<string>("");
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  // Scroll to top when component mounts or product changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-display mb-4">Product not found</h1>
          <Link to="/" className="text-accent hover:underline">
            Return to home
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products.filter((p) => p.id !== product.id).slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedSize) {
      toast.error("Please select a size");
      return;
    }

    setIsAddingToCart(true);
    
    // Add animation delay
    setTimeout(() => {
      for (let i = 0; i < quantity; i++) {
        addItem({
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          size: selectedSize,
        });
      }
      toast.success(`${product.name} added to cart`, {
        description: `Size ${selectedSize} × ${quantity}`,
      });
      setIsAddingToCart(false);
    }, 300);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />

      <main className="pt-24 pb-20">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 animate-fade-in">
            <Link to="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/#new-arrivals" className="hover:text-foreground transition-colors">
              New Arrivals
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-foreground">{product.name}</span>
          </nav>

          {/* Product Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Image Gallery */}
            <div className="space-y-4 animate-fade-in">
              {/* Main Image */}
              <div
                className="relative aspect-[3/4] overflow-hidden bg-secondary rounded-xl cursor-zoom-in"
                onMouseEnter={() => setIsZoomed(true)}
                onMouseLeave={() => setIsZoomed(false)}
                onMouseMove={handleMouseMove}
              >
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className={`w-full h-full object-cover transition-transform duration-300 ${
                    isZoomed ? "scale-150" : "scale-100"
                  }`}
                  style={
                    isZoomed
                      ? {
                          transformOrigin: `${zoomPosition.x}% ${zoomPosition.y}%`,
                        }
                      : undefined
                  }
                />
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`w-20 h-24 rounded-lg overflow-hidden transition-all duration-200 ${
                      selectedImage === idx
                        ? "ring-2 ring-accent ring-offset-2"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} view ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="animate-fade-in" style={{ animationDelay: "100ms" }}>
              <h1 className="font-display text-3xl md:text-4xl font-medium mb-2">
                {product.name}
              </h1>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-lg text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                <span className="text-sm font-semibold text-destructive bg-destructive/10 px-2 py-1 rounded">{product.discount}% OFF</span>
                <span className="text-2xl font-semibold text-foreground">₹{product.price.toLocaleString()}</span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-8">
                {product.details}
              </p>

              {/* Size Selector */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium">Size</span>
                  <button className="text-sm text-muted-foreground hover:text-foreground underline transition-colors">
                    Size Guide
                  </button>
                </div>
                <div className="flex gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-14 h-14 rounded-lg border-2 font-medium transition-all duration-200 ${
                        selectedSize === size
                          ? "border-accent bg-accent text-accent-foreground scale-105"
                          : "border-border hover:border-foreground"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity Selector */}
              <div className="mb-8">
                <span className="font-medium block mb-3">Quantity</span>
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-border rounded-lg">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-secondary transition-colors rounded-l-lg"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-secondary transition-colors rounded-r-lg"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-4 mb-10">
                <Button
                  variant="accent"
                  size="xl"
                  className={`flex-1 transition-all duration-300 ${
                    isAddingToCart ? "scale-95 opacity-80" : "active:scale-95"
                  }`}
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                >
                  {isAddingToCart ? "Adding..." : "Add to Cart"}
                </Button>
                <Button variant="outline" size="xl" className="px-4">
                  <Heart className="h-5 w-5" />
                </Button>
              </div>

              {/* Product Details Accordion */}
              <div className="space-y-4 border-t border-border pt-8">
                <details className="group">
                  <summary className="flex items-center justify-between cursor-pointer py-3 font-medium">
                    Fabric & Material
                    <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                  </summary>
                  <p className="pb-4 text-muted-foreground">{product.fabric}</p>
                </details>

                <details className="group border-t border-border">
                  <summary className="flex items-center justify-between cursor-pointer py-3 font-medium">
                    Care Instructions
                    <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                  </summary>
                  <ul className="pb-4 text-muted-foreground space-y-1">
                    {product.care.map((instruction, idx) => (
                      <li key={idx}>• {instruction}</li>
                    ))}
                  </ul>
                </details>

                <details className="group border-t border-border">
                  <summary className="flex items-center justify-between cursor-pointer py-3 font-medium">
                    Shipping & Returns
                    <ChevronRight className="h-4 w-4 transition-transform group-open:rotate-90" />
                  </summary>
                  <div className="pb-4 text-muted-foreground space-y-2">
                    <p>• Free shipping on orders above ₹2,999</p>
                    <p>• Standard delivery: 5-7 business days</p>
                    <p>• Express delivery: 2-3 business days</p>
                    <p>• Easy returns within 30 days</p>
                  </div>
                </details>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <section className="mt-24">
            <h2 className="font-display text-3xl font-medium mb-10 text-center">
              You May Also Like
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} isVisible={true} />
              ))}
            </div>
          </section>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default ProductDetail;
