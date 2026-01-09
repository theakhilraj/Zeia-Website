import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Button } from "@/components/ui/button";

const Careers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-foreground mb-6">
            Careers
          </h1>
          <p className="text-muted-foreground mb-12">
            Join the ZIEA family
          </p>
          
          <div className="bg-secondary/30 rounded-2xl p-12 md:p-16">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <svg 
                className="w-8 h-8 text-primary" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
                />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              No Vacancies Open
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              We don't have any open positions at the moment. Please check back later or follow us on social media for updates on future opportunities.
            </p>
          </div>

          <div className="mt-12 bg-secondary/30 rounded-2xl p-12 md:p-16">
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <svg 
                className="w-8 h-8 text-primary" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={1.5} 
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" 
                />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif text-foreground mb-4">
              Bulk Orders
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto mb-6">
              Interested in placing a bulk order for your business or event? Get in touch with us for special pricing and customization options.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default Careers;
