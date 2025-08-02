"use client";

import Header from "../../components/Header";
import ServicesMenu from "../../components/ServicesMenu";
import ContactCTA from "../../components/ContactCTA";
import PortfolioHero from "../../components/PortfolioHero";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import Awards from "../../components/Awards";
import Portfolio from "../../components/Portfolio";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ServicesMenu />
      <ContactCTA />
      <PortfolioHero />
      <Portfolio />
      <Awards />
      <ContactUs />
      <Footer />
    </div>
  );
}
