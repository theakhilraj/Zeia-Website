import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import FooterSection from "@/components/FooterSection";
import { Link } from "react-router-dom";

const faqs = [
  {
    category: "Orders & Shipping",
    questions: [
      {
        question: "How long does shipping take?",
        answer: "Standard shipping within India takes 5-7 business days. Express shipping is available for select locations and typically arrives within 2-3 business days. You'll receive a tracking number once your order ships.",
      },
      {
        question: "Do you ship internationally?",
        answer: "Currently, we only ship within India. We're working on expanding our shipping to international destinations soon. Sign up for our newsletter to be the first to know when we launch international shipping.",
      },
      {
        question: "How can I track my order?",
        answer: "Once your order is shipped, you'll receive an email with your tracking number and a link to track your package. You can also track your order by logging into your account on our website.",
      },
      {
        question: "What are the shipping charges?",
        answer: "We offer free shipping on all orders above ₹2,000. For orders below ₹2,000, a flat shipping fee of ₹150 applies.",
      },
    ],
  },
  {
    category: "Returns & Exchanges",
    questions: [
      {
        question: "What is your return policy?",
        answer: "We accept returns within 14 days of delivery. Items must be unworn, unwashed, and with all original tags attached. Please visit our Returns page for detailed instructions.",
      },
      {
        question: "How do I initiate a return?",
        answer: "To initiate a return, please contact our customer service team via email at hello@ziea.in or WhatsApp at +91 8301 027 765. We'll guide you through the process and arrange for pickup.",
      },
      {
        question: "When will I receive my refund?",
        answer: "Once we receive and inspect your return, refunds are processed within 5-7 business days. The amount will be credited to your original payment method.",
      },
      {
        question: "Can I exchange an item for a different size?",
        answer: "Yes! We offer free exchanges for different sizes, subject to availability. Contact our customer service to arrange an exchange.",
      },
    ],
  },
  {
    category: "Products & Sizing",
    questions: [
      {
        question: "How do I find my size?",
        answer: "Each product page includes a detailed size guide. We recommend measuring yourself and comparing with our size chart for the best fit. If you're between sizes, we generally recommend sizing up for a relaxed fit or sizing down for a more fitted look.",
      },
      {
        question: "Are your products true to size?",
        answer: "Our products are designed with a relaxed, comfortable fit. Most customers find our sizing true to standard Indian sizes. Check the product description for specific fit details.",
      },
      {
        question: "What materials do you use?",
        answer: "We use premium, sustainably-sourced fabrics including organic cotton, linen, and natural fiber blends. Each product page lists the specific materials used.",
      },
      {
        question: "How should I care for my ZIEA products?",
        answer: "Care instructions vary by product and are listed on the product page and garment label. Generally, we recommend gentle machine wash or hand wash in cold water, and air drying to maintain the quality of the fabric.",
      },
    ],
  },
  {
    category: "Payment & Security",
    questions: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit/debit cards (Visa, Mastercard, Rupay), UPI, net banking, and popular wallets like Paytm and PhonePe. All payments are processed securely.",
      },
      {
        question: "Is my payment information secure?",
        answer: "Yes, absolutely. We use industry-standard SSL encryption to protect your data. We never store your full payment details on our servers.",
      },
      {
        question: "Do you offer Cash on Delivery?",
        answer: "Yes, we offer Cash on Delivery (COD) for orders within India. A nominal COD fee of ₹50 applies to all COD orders.",
      },
    ],
  },
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container-custom">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-foreground">FAQ</span>
          </nav>

          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="font-display text-4xl md:text-5xl font-medium mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-muted-foreground">
                Find answers to common questions about orders, shipping, returns, and more.
              </p>
            </div>

            <div className="space-y-12">
              {faqs.map((section) => (
                <div key={section.category}>
                  <h2 className="text-xl font-display font-medium mb-6 pb-2 border-b border-border">
                    {section.category}
                  </h2>
                  <Accordion type="single" collapsible className="space-y-2">
                    {section.questions.map((faq, index) => (
                      <AccordionItem
                        key={index}
                        value={`${section.category}-${index}`}
                        className="border border-border rounded-lg px-4"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-4">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>

            <div className="mt-16 p-8 bg-secondary/30 rounded-lg text-center">
              <h3 className="text-xl font-display font-medium mb-2">Still have questions?</h3>
              <p className="text-muted-foreground mb-6">
                Can't find the answer you're looking for? Our team is here to help.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center h-11 px-6 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>

      <FooterSection />
    </div>
  );
};

export default FAQ;
