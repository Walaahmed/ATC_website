import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import BlogSection from "@/components/BlogSection";
import NewsletterSection from "@/components/NewsletterSection";
import PartnersSection from "@/components/PartnersSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <PartnersSection />
        <ServicesSection />
        <TestimonialsSection />
        <BlogSection />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
