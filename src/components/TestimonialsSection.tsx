import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const testimonials = [
  {
    id: 1,
    quote: "The quality is exceptional. These pieces have become the foundation of my wardrobe. Simple, elegant, and incredibly well-made.",
    author: "Abi Varghese",
    location: "New York, NY",
  },
  {
    id: 2,
    quote: "I appreciate the attention to sustainability without compromising on style. The fit is perfect and the fabrics feel luxurious.",
    author: "James L.",
    location: "London, UK",
  },
  {
    id: 3,
    quote: "Finally, a brand that understands minimalism. Every piece I own from Èlan gets complimented regularly.",
    author: "Emma K.",
    location: "Stockholm, SE",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>();

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-secondary/30"
    >
      <div className="container-custom">
        <div
          className={`max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-4">
              Testimonials
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-medium">
              What Our Customers Say
            </h2>
          </div>

          {/* Testimonial Card */}
          <div className="relative bg-card rounded-xl p-10 md:p-16 shadow-md">
            <Quote className="absolute top-8 left-8 w-12 h-12 text-muted/50" />
            
            <div className="text-center relative z-10">
              <p className="font-display text-xl md:text-2xl leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </p>
              <div>
                <p className="font-medium">{testimonials[currentIndex].author}</p>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].location}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-10">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? "bg-accent w-6"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
