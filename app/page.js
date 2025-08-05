import Header from "../components/Header";
import ServicesMenu from "../components/ServicesMenu";
import HeroSection from "../components/HeroSection";
import ContactCTA from "../components/ContactCTA";
import CarousalPage from "../components/CarousalPage";
import Portfolio from "../components/Portfolio";
import PricingPackages from "../components/PricingPackages";
import BrandingSolution from "../components/BrandingSolution";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import Awards from "../components/Awards";
import Industries from "../components/Industries";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen text-white overflow-x-hidden">
      <Header />
      <ServicesMenu />
      <HeroSection />
      <ContactCTA />
      <CarousalPage />
      <Portfolio />
      <PricingPackages />
      <BrandingSolution />
      <HowItWorks />
      <Testimonials />
      <Awards />
      <Industries />
      <ContactUs />
      <Footer />
    </div>
  );
}