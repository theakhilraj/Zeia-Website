import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import CartDrawer from "@/components/CartDrawer";
import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";
import heroImage from "@/assets/hero-image.jpg";

const lookbookImages = [
  { id: 1, image: heroImage, title: "Eternal Elegance", season: "Winter 2024" },
  { id: 2, image: product1, title: "Urban Grace", season: "Winter 2024" },
  { id: 3, image: product2, title: "Soft Mornings", season: "Winter 2024" },
  { id: 4, image: product3, title: "City Walks", season: "Winter 2024" },
  { id: 5, image: product4, title: "Quiet Luxury", season: "Winter 2024" },
  { id: 6, image: product5, title: "Timeless Moments", season: "Winter 2024" },
  { id: 7, image: product6, title: "Modern Heritage", season: "Winter 2024" },
];

const Lookbook = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">Lookbook</span>
          </nav>

          <div className="text-center mb-16">
            <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-4">
              Winter 2024
            </p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-medium mb-4">
              The Lookbook
            </h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Discover our latest collection through curated looks that embody 
              the essence of modern minimalism and timeless elegance.
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {lookbookImages.map((item, index) => (
              <div
                key={item.id}
                className="break-inside-avoid group cursor-pointer"
                onClick={() => setSelectedImage(item.id)}
              >
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                      index % 3 === 0 ? "aspect-[3/4]" : index % 3 === 1 ? "aspect-square" : "aspect-[4/5]"
                    }`}
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <div className="bg-background/90 backdrop-blur-sm p-4 rounded-lg">
                      <p className="text-xs tracking-wider uppercase text-muted-foreground mb-1">
                        {item.season}
                      </p>
                      <h3 className="font-display text-xl font-medium">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Link
              to="/#new-arrivals"
              className="inline-flex items-center justify-center h-12 px-8 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors"
            >
              Shop the Collection
            </Link>
          </div>
        </div>
      </main>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center text-foreground hover:text-muted-foreground transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <img
            src={lookbookImages.find(img => img.id === selectedImage)?.image}
            alt=""
            className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      <FooterSection />
    </div>
  );
};

export default Lookbook;
