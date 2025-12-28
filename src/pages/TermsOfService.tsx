import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">Terms of Service</span>
          </nav>

          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-medium mb-4">
                Terms of Service
              </h1>
              <p className="text-muted-foreground">
                Last updated: December 2024
              </p>
            </div>

            <div className="prose prose-neutral max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-display font-medium mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using the ZIEA website ("Site"), you accept and agree to be bound 
                  by these Terms of Service. If you do not agree to these terms, please do not use our Site.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-medium mb-4">2. Use of Website</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You agree to use this Site only for lawful purposes. You are prohibited from:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Using the Site in any way that violates applicable laws or regulations</li>
                  <li>Attempting to interfere with the proper functioning of the Site</li>
                  <li>Using automated systems to access the Site without permission</li>
                  <li>Impersonating another person or entity</li>
                  <li>Collecting information about other users without consent</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-medium mb-4">3. Products and Pricing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All prices displayed on our Site are in Indian Rupees (₹) and are inclusive of applicable taxes 
                  unless otherwise stated. We reserve the right to modify prices at any time without prior notice. 
                  In the event of a pricing error, we reserve the right to cancel any orders placed at the incorrect price.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-medium mb-4">4. Orders and Payment</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By placing an order, you are making an offer to purchase products. We reserve the right to 
                  accept or reject any order for any reason. Payment must be received before we process your order. 
                  We accept various payment methods as displayed during checkout.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-medium mb-4">5. Shipping and Delivery</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Shipping times and costs vary depending on your location and selected shipping method. 
                  While we strive to meet estimated delivery dates, these are not guaranteed. ZIEA is not 
                  responsible for delays caused by shipping carriers or customs processes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-medium mb-4">6. Returns and Refunds</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our return and refund policy is detailed on our Returns page. By making a purchase, 
                  you agree to the terms outlined in our return policy. Items must be returned in their 
                  original condition within the specified timeframe.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-medium mb-4">7. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All content on this Site, including but not limited to text, graphics, logos, images, 
                  and software, is the property of ZIEA and is protected by intellectual property laws. 
                  You may not reproduce, distribute, or create derivative works without our express written consent.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-medium mb-4">8. User Accounts</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you create an account on our Site, you are responsible for maintaining the confidentiality 
                  of your account information and for all activities that occur under your account. 
                  You agree to notify us immediately of any unauthorized use of your account.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-medium mb-4">9. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  ZIEA shall not be liable for any indirect, incidental, special, consequential, or punitive 
                  damages arising out of your use of the Site or products purchased through the Site. 
                  Our liability shall not exceed the amount paid for the products in question.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-medium mb-4">10. Indemnification</h2>
                <p className="text-muted-foreground leading-relaxed">
                  You agree to indemnify and hold harmless ZIEA and its officers, directors, employees, 
                  and agents from any claims, damages, losses, or expenses arising from your use of the 
                  Site or violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-medium mb-4">11. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with the laws of India. 
                  Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, India.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-medium mb-4">12. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. Changes will be effective 
                  immediately upon posting on this page. Your continued use of the Site after any changes 
                  constitutes acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-medium mb-4">13. Contact Information</h2>
                <p className="text-muted-foreground leading-relaxed">
                  For questions about these Terms of Service, please contact us:
                </p>
                <div className="mt-4 p-6 bg-secondary/30 rounded-lg">
                  <p className="text-foreground font-medium">ZIEA</p>
                  <p className="text-muted-foreground">Email: hello@ziea.in</p>
                  <p className="text-muted-foreground">Phone: +91 8301 027 765</p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default TermsOfService;
