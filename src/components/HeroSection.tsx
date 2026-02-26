import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { siteImages } from "@/data/siteContent";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={siteImages.hero}
          alt="Elegant fashion model wearing premium clothing"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-background/30" />
      </div>

      {/* Content */}
      <div className="relative container-custom pt-24">
        <div className="max-w-2xl">
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-6 opacity-0 animate-fade-up stagger-1">
            Premium Collection 2024
          </p>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-medium leading-[1.1] mb-6 opacity-0 animate-fade-up stagger-2">
            Timeless Essentials for Everyday Wear
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg mb-10 opacity-0 animate-fade-up stagger-3">
            Minimalist, sustainable apparel designed for comfort and style.
            Crafted with intention, made to last.
          </p>
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-4">
            <Button variant="accent" size="lg" asChild>
              <Link to="/collection/all">Shop Collection</Link>
            </Button>
          </div>
        </div>
      </div>

    </section>
  );
};

export default HeroSection;
