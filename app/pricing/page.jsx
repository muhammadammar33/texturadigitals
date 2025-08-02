"use client";

import Header from "../../components/Header";
import ServicesMenu from "../../components/ServicesMenu";
import ContactCTA from "../../components/ContactCTA";
import PricingHero from "../../components/PricingHero";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import Awards from "../../components/Awards";
import PricingPackages from "../../components/PricingPackages";
import ComboPackage from "../../components/ComboPackage";

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ServicesMenu />
      <ContactCTA />
      <PricingHero />
      <PricingPackages />
      <ComboPackage />
      <Awards />
      <ContactUs />
      <Footer />
    </div>
  );
}
