import Navbar from "../components/layout/Navbar";

import HeroSection from "../components/sections/HeroSection";
import StatsSection from "../components/sections/StatsSection";
import ProcessSection from "../components/sections/ProcessSection";
import ServicesSection from "../components/sections/ServicesSection";
import IndustrySection from "../components/sections/IndustrySection";
import PortfolioSection from "../components/sections/PortfolioSection";
import TestimonialSection from "../components/sections/TestimonialSection";
import FAQSection from "../components/sections/FAQSection";
import ContactSection from "../components/sections/ContactSection";

import Footer from "../components/layout/Footer";

const HomePage = () => {
  return (
    <>
      <Navbar />

      <HeroSection />

      <StatsSection />

      <ProcessSection />

      <ServicesSection />

      <IndustrySection />

      <PortfolioSection />

      <TestimonialSection />

      <FAQSection />

      <ContactSection />

      <Footer />
    </>
  );
};

export default HomePage;