import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>();

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-padding bg-background"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Visual Element */}
          <div
            className={`relative transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-secondary to-muted rounded-lg" />
            <div className="absolute -bottom-6 -right-6 w-2/3 aspect-square border-2 border-accent/30 rounded-lg" />
            
            {/* Stats */}
            <div className="absolute -bottom-8 left-8 bg-card p-8 rounded-lg shadow-lg">
              <div className="flex gap-10">
                <div>
                  <p className="font-display text-4xl font-medium text-accent">15+</p>
                  <p className="text-xs tracking-wider uppercase text-muted-foreground mt-1">
                    Years
                  </p>
                </div>
                <div>
                  <p className="font-display text-4xl font-medium text-accent">100%</p>
                  <p className="text-xs tracking-wider uppercase text-muted-foreground mt-1">
                    Sustainable
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-12"
            }`}
          >
            <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-6">
              Our Story
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium mb-8 leading-tight">
              Crafted with Purpose,
              <br />
              Made to Last
            </h2>
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                At Èlan, we believe in the power of thoughtful design. 
                Each piece in our collection is created with meticulous attention 
                to detail, using only the finest natural materials sourced responsibly.
              </p>
              <p className="leading-relaxed">
                Our commitment to sustainability means every garment is made to 
                last, transcending seasonal trends in favor of timeless elegance. 
                We work directly with artisan workshops across Europe and Asia to ensure 
                ethical production and exceptional quality.
              </p>
            </div>
            <div className="mt-10">
              <Button variant="outline" size="lg">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
