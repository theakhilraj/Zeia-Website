import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-foreground text-background">
      {/* Newsletter Section */}
      <div className="border-b border-background/10">
        <div className="container mx-auto px-6 lg:px-12 py-16 lg:py-20">
          <div className="max-w-xl mx-auto text-center">
            <h3 className="font-serif text-3xl md:text-4xl mb-4">
              Join Our World
            </h3>
            <p className="text-background/70 mb-8">
              Subscribe to receive updates on new collections, exclusive offers, 
              and our latest stories.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-background/10 border-background/20 text-background placeholder:text-background/50 focus:border-background/40"
              />
              <Button 
                type="submit" 
                className="bg-background text-foreground hover:bg-background/90 whitespace-nowrap"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="/" className="font-serif text-2xl tracking-widest">
              ATELIER
            </a>
            <p className="mt-4 text-sm text-background/60 leading-relaxed">
              Timeless elegance meets modern sensibility. 
              Crafted for those who appreciate the art of dressing well.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6">Shop</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Outerwear</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Knitwear</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Accessories</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Our Story</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Craftsmanship</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-xs tracking-[0.2em] uppercase mb-6">Support</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li><a href="#" className="hover:text-background transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-background transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-background transition-colors">FAQ</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-background/50">
            © 2024 Atelier. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="#" className="text-background/70 hover:text-background transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
