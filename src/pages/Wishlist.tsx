import { Link } from "react-router-dom";
import { Heart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import ProductCard from "@/components/ProductCard";
import CartDrawer from "@/components/CartDrawer";
import { useFavorites } from "@/contexts/FavoritesContext";
import { products } from "@/data/products";

const Wishlist = () => {
  const { favorites } = useFavorites();
  
  const favoriteProducts = products.filter((product) =>
    favorites.includes(String(product.id))
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />
      
      <main className="pt-32 pb-20">
        <div className="container-custom">
          {/* Header */}
          <div className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <div className="flex items-center gap-3">
              <Heart className="h-8 w-8 text-accent" fill="currentColor" />
              <h1 className="font-display text-4xl md:text-5xl">My Collection</h1>
            </div>
            <p className="text-muted-foreground mt-4 max-w-xl">
              Your curated selection of favorite pieces. Save items you love and come back to them anytime.
            </p>
          </div>

          {/* Wishlist Items */}
          {favoriteProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {favoriteProducts.map((product, index) => (
                <ProductCard key={product.id} product={product} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <Heart className="h-16 w-16 text-muted-foreground/30 mx-auto mb-6" />
              <h2 className="font-display text-2xl mb-4">Your collection is empty</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Start adding items to your wishlist by clicking the heart icon on products you love.
              </p>
              <Link to="/#new-arrivals">
                <Button variant="accent" size="lg">
                  Explore New Arrivals
                </Button>
              </Link>
            </div>
          )}
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default Wishlist;
