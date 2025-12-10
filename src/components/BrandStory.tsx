import { Button } from "@/components/ui/button";

const BrandStory = () => {
  return (
    <section id="about" className="py-24 lg:py-32 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text Content */}
          <div className="lg:order-2">
            <p className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
              Our Philosophy
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
              Crafted with
              <br />
              <span className="italic">Intention</span>
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                At Atelier, we believe in the power of thoughtful design. 
                Each piece in our collection is created with meticulous attention 
                to detail, using only the finest natural materials.
              </p>
              <p className="leading-relaxed">
                Our commitment to sustainability means every garment is made to 
                last, transcending seasonal trends in favor of timeless elegance. 
                We work directly with artisan workshops across Europe to ensure 
                ethical production and exceptional quality.
              </p>
            </div>
            <div className="mt-10">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-muted to-secondary" />
              <div className="absolute -bottom-6 -right-6 w-3/4 aspect-square border-2 border-foreground/10" />
              
              {/* Stats */}
              <div className="absolute -bottom-12 left-6 bg-background p-8 shadow-soft">
                <div className="flex gap-12">
                  <div>
                    <p className="font-serif text-4xl mb-1">15+</p>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      Years
                    </p>
                  </div>
                  <div>
                    <p className="font-serif text-4xl mb-1">100%</p>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground">
                      Natural
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandStory;
