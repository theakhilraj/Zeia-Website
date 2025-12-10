import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegant fashion model wearing cream coat"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-2xl">
          <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6 opacity-0 animate-fade-up stagger-1">
            Winter Collection 2024
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-normal leading-[0.9] mb-8 opacity-0 animate-fade-up stagger-2">
            Refined
            <br />
            <span className="italic">Elegance</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md mb-10 opacity-0 animate-fade-up stagger-3">
            Discover timeless pieces crafted with intention. 
            Where quality meets understated luxury.
          </p>
          <div className="flex flex-wrap gap-4 opacity-0 animate-fade-up stagger-4">
            <Button variant="heroFilled" size="lg">
              Shop Collection
            </Button>
            <Button variant="hero" size="lg">
              Our Story
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-0 animate-fade-up" style={{ animationDelay: '0.8s' }}>
        <span className="text-xs tracking-[0.2em] uppercase text-muted-foreground">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-foreground/50 to-transparent" />
      </div>
    </section>
  );
};

export default Hero;
