import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
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
            <Button variant="accent" size="lg">
              Shop Collection
            </Button>
            <Button variant="outline" size="lg">
              View Lookbook
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>
        <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-foreground/40 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;
