import { useState, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import CartDrawer from "@/components/CartDrawer";
import ProductCard from "@/components/ProductCard";
import { Product } from "@/data/products";
import { useProducts } from "@/contexts/ProductsContext";
import { siteImages } from "@/data/siteContent";

type SortOption = "featured" | "price-low" | "price-high" | "newest";
interface CollectionInfo {
  name: string;
  description: string;
  image: string;
  tagline: string;
}

const collectionData: Record<string, CollectionInfo> = {
  all: {
    name: "All Products",
    description: "Explore our complete collection of sustainable, ethically crafted pieces. From everyday essentials to statement pieces, find everything you need here.",
    image: siteImages.hero,
    tagline: "Complete Collection",
  },
  motherhood: {
    name: "Motherhood",
    description: "Celebrate the beautiful journey of motherhood with our specially curated collection. Comfortable, elegant pieces designed for the modern mother.",
    image: siteImages.collectionMotherhood,
    tagline: "Embrace the Journey",
  },
  women: {
    name: "Women",
    description: "Elegant pieces with timeless appeal. Our women's collection features sophisticated designs crafted for the confident, modern woman.",
    image: siteImages.collectionWomen,
    tagline: "Timeless Elegance",
  },
  essentials: {
    name: "Essentials",
    description: "Wardrobe staples, elevated. Build your capsule wardrobe with our essential pieces that form the foundation of effortless style.",
    image: siteImages.collectionEssentials,
    tagline: "Everyday Luxury",
  },
};

const getCollectionProducts = (slug: string, products: Product[]): Product[] => {
  if (slug === "all") {
    return products;
  }
  return products.filter((product) => product.collection === slug);
};

const Collection = () => {
  const { slug } = useParams<{ slug: string }>();
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const collection = slug ? collectionData[slug] : null;
  const { products } = useProducts();

  const collectionProducts = useMemo(() => {
    const baseProducts = slug ? getCollectionProducts(slug, products) : [];
    const sorted = [...baseProducts];
    switch (sortBy) {
      case "price-low":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high":
        return sorted.sort((a, b) => b.price - a.price);
      case "newest":
        return sorted.sort((a, b) => b.id - a.id);
      case "featured":
      default:
        return sorted;
    }
  }, [products, slug, sortBy]);

  if (!collection) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-24 pb-16">
          <div className="container-custom text-center">
            <h1 className="font-display text-4xl font-medium mb-4">Collection Not Found</h1>
            <p className="text-muted-foreground mb-8">The collection you're looking for doesn't exist.</p>
            <Link
              to="/"
              className="inline-flex items-center justify-center h-11 px-6 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </main>
        <FooterSection />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />

      <main>
        {/* Hero Banner */}
        <section className="relative h-[50vh] min-h-[400px] flex items-center">
          <div className="absolute inset-0">
            <img
              src={collection.image}
              alt={collection.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
          </div>
          <div className="relative container-custom">
            <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-4">
              {collection.tagline}
            </p>
            <h1 className="font-display text-5xl md:text-6xl font-medium mb-4">
              {collection.name}
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              {collection.description}
            </p>
          </div>
        </section>

        {/* Breadcrumb */}
        <div className="container-custom py-6">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link to="/#collections" className="hover:text-foreground transition-colors">Collections</Link>
            <span>/</span>
            <span className="text-foreground">{collection.name}</span>
          </nav>
        </div>

        {/* Products Grid */}
        <section className="container-custom pb-16">
          <div className="flex items-center justify-between mb-8">
            <p className="text-muted-foreground">{collectionProducts.length} Products</p>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-transparent border border-border rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-accent cursor-pointer"
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest</option>
            </select>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
            {collectionProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} isVisible={true} />
            ))}
          </div>
        </section>
      </main>

      <FooterSection />
    </div>
  );
};

export default Collection;
