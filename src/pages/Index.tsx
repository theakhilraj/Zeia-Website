import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import NewArrivals from "@/components/NewArrivals";
import CollectionsSection from "@/components/CollectionsSection";
import AboutSection from "@/components/AboutSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import NewsletterSection from "@/components/NewsletterSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <NewArrivals />
      <CollectionsSection />
      <AboutSection />
      <TestimonialsSection />
      <NewsletterSection />
      <FooterSection />
    </main>
  );
};

export default Index;
