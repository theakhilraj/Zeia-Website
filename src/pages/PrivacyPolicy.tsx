import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">Privacy Policy</span>
          </nav>

          <div className="max-w-3xl mx-auto">
            <div className="mb-12">
              <h1 className="font-display text-4xl md:text-5xl font-medium mb-4">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">
                Last updated: December 2024
              </p>
            </div>

            <div className="prose prose-neutral max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-display font-medium mb-4">1. Introduction</h2>
                <p className="text-muted-foreground leading-relaxed">
                  At ZIEA ("we," "our," or "us"), we are committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                  information when you visit our website or make a purchase.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-medium mb-4">2. Information We Collect</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We collect information you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Name, email address, and phone number</li>
                  <li>Billing and shipping addresses</li>
                  <li>Payment information (processed securely through our payment partners)</li>
                  <li>Order history and preferences</li>
                  <li>Communications with our customer service team</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-medium mb-4">3. How We Use Your Information</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Process and fulfill your orders</li>
                  <li>Send order confirmations and shipping updates</li>
                  <li>Respond to your questions and requests</li>
                  <li>Send marketing communications (with your consent)</li>
                  <li>Improve our website and services</li>
                  <li>Prevent fraud and ensure security</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-medium mb-4">4. Information Sharing</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. 
                  We may share your information with trusted service providers who assist us in 
                  operating our website, conducting our business, or serving you, so long as those 
                  parties agree to keep this information confidential.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-medium mb-4">5. Data Security</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We implement appropriate security measures to protect your personal information. 
                  All payment transactions are encrypted using SSL technology. However, no method of 
                  transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-medium mb-4">6. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your browsing experience, 
                  analyze site traffic, and understand where our visitors come from. You can control 
                  cookies through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-medium mb-4">7. Your Rights</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-4">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-display font-medium mb-4">8. Children's Privacy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our website is not intended for children under 13 years of age. We do not knowingly 
                  collect personal information from children under 13.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-medium mb-4">9. Changes to This Policy</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-display font-medium mb-4">10. Contact Us</h2>
                <p className="text-muted-foreground leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
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

export default PrivacyPolicy;
