import { Link } from "react-router-dom";
import { ArrowLeft, Truck, Clock, MapPin, Package } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import CartDrawer from "@/components/CartDrawer";

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />
      
      <main className="pt-32 pb-20">
        <div className="container-custom max-w-4xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="font-display text-4xl md:text-5xl mb-8">Shipping Information</h1>

          <div className="space-y-12">
            {/* Delivery Options */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Truck className="h-6 w-6 text-accent" />
                <h2 className="font-display text-2xl">Delivery Options</h2>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="font-medium text-lg mb-2">Standard Delivery</h3>
                  <p className="text-muted-foreground mb-4">5-7 business days</p>
                  <p className="text-sm">
                    Free on orders above ₹2,000<br />
                    ₹99 for orders below ₹2,000
                  </p>
                </div>
                <div className="p-6 border border-border rounded-lg">
                  <h3 className="font-medium text-lg mb-2">Express Delivery</h3>
                  <p className="text-muted-foreground mb-4">2-3 business days</p>
                  <p className="text-sm">
                    ₹199 for all orders<br />
                    Available in select cities
                  </p>
                </div>
              </div>
            </section>

            {/* Processing Time */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-6 w-6 text-accent" />
                <h2 className="font-display text-2xl">Processing Time</h2>
              </div>
              <div className="prose prose-neutral max-w-none">
                <p className="text-muted-foreground">
                  All orders are processed within 1-2 business days. Orders placed after 2 PM IST 
                  will be processed the next business day. You will receive a confirmation email 
                  with tracking information once your order has been shipped.
                </p>
              </div>
            </section>

            {/* Delivery Areas */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <MapPin className="h-6 w-6 text-accent" />
                <h2 className="font-display text-2xl">Delivery Areas</h2>
              </div>
              <div className="prose prose-neutral max-w-none">
                <p className="text-muted-foreground mb-4">
                  We currently deliver across India. Delivery times may vary based on your location:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li><strong className="text-foreground">Metro Cities:</strong> Delhi, Mumbai, Bangalore, Chennai, Kolkata, Hyderabad - 3-5 business days</li>
                  <li><strong className="text-foreground">Tier 2 Cities:</strong> Pune, Ahmedabad, Jaipur, Lucknow, etc. - 5-7 business days</li>
                  <li><strong className="text-foreground">Other Areas:</strong> 7-10 business days</li>
                </ul>
              </div>
            </section>

            {/* Order Tracking */}
            <section>
              <div className="flex items-center gap-3 mb-6">
                <Package className="h-6 w-6 text-accent" />
                <h2 className="font-display text-2xl">Order Tracking</h2>
              </div>
              <div className="prose prose-neutral max-w-none">
                <p className="text-muted-foreground">
                  Once your order is shipped, you will receive an email with your tracking number. 
                  You can track your order status through our shipping partner's website or by 
                  contacting our customer support team at{" "}
                  <a href="mailto:support@ziea.in" className="text-accent hover:underline">
                    support@ziea.in
                  </a>
                </p>
              </div>
            </section>

            {/* Important Notes */}
            <section className="bg-secondary/30 p-6 rounded-lg">
              <h2 className="font-display text-xl mb-4">Important Notes</h2>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Delivery times are estimates and may vary during peak seasons or due to unforeseen circumstances.</li>
                <li>• We do not deliver on Sundays and public holidays.</li>
                <li>• Please ensure someone is available to receive the package at the delivery address.</li>
                <li>• For any delivery-related queries, please contact us within 48 hours of receiving your order.</li>
              </ul>
            </section>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default Shipping;
