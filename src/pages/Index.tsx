import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import FeaturedCollection from "@/components/FeaturedCollection";
import BrandStory from "@/components/BrandStory";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <FeaturedCollection />
      <BrandStory />
      <Footer />
    </main>
  );
};

export default Index;
