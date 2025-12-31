import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import CartDrawer from "@/components/CartDrawer";

const Returns = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />
      
      <main className="container-custom pt-32 pb-20">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        <h1 className="font-display text-4xl md:text-5xl mb-8">Returns & Exchanges</h1>
        
        <div className="prose prose-neutral max-w-3xl">
          <section className="mb-12">
            <h2 className="font-display text-2xl mb-4">Return Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We want you to love your ZIEA purchase. If you're not completely satisfied, 
              we offer easy returns within 14 days of delivery.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl mb-4">How to Return</h2>
            <ol className="list-decimal list-inside space-y-3 text-muted-foreground">
              <li>Contact us via WhatsApp or email with your order number</li>
              <li>Receive your return authorization and shipping label</li>
              <li>Pack items in original packaging with tags attached</li>
              <li>Ship the package using the provided label</li>
              <li>Refund processed within 5-7 business days after receipt</li>
            </ol>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl mb-4">Exchange Policy</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Need a different size? We offer free exchanges for the same item in a different size, 
              subject to availability.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl mb-4">Non-Returnable Items</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Items marked as final sale</li>
              <li>Items without original tags</li>
              <li>Items that have been worn, washed, or altered</li>
              <li>Intimates and swimwear for hygiene reasons</li>
            </ul>
          </section>

          <section>
            <h2 className="font-display text-2xl mb-4">Questions?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Reach out to us on{" "}
              <a 
                href="https://wa.me/918301027765"
                target="_blank" 
                rel="noopener noreferrer"
                className="text-foreground underline hover:no-underline"
              >
                WhatsApp
              </a>{" "}
              or email us at support@ziea.in
            </p>
          </section>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default Returns;
