import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [sectionRef, isVisible] = useScrollAnimation<HTMLElement>();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setEmail("");
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="container-custom">
        <div
          className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-sm tracking-[0.25em] uppercase text-muted-foreground mb-4">
            Newsletter
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-4">
            Stay in the Loop
          </h2>
          <p className="text-muted-foreground mb-10">
            Get updates on new drops, restocks, and exclusive offers. 
            Be the first to know.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-12"
              required
            />
            <Button type="submit" variant="accent" size="lg" className="h-12">
              {isSubmitted ? (
                <span className="flex items-center gap-2">
                  <Check className="h-4 w-4" />
                  Subscribed!
                </span>
              ) : (
                "Subscribe"
              )}
            </Button>
          </form>

          <p className="text-xs text-muted-foreground mt-6">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
