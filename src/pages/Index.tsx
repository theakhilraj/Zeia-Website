import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NewArrivals from "@/components/NewArrivals";
import CollectionsSection from "@/components/CollectionsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import FooterSection from "@/components/FooterSection";
import CartDrawer from "@/components/CartDrawer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <CartDrawer />
      <HeroSection />
      <NewArrivals />
      <CollectionsSection />
      <AboutSection />
      <TestimonialsSection />
      <NewsletterSection />
      <FooterSection />
    </div>
  );
};

export default Index;
