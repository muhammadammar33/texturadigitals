"use client";

import Header from "../../components/Header";
import ServicesMenu from "../../components/ServicesMenu";
import ContactCTA from "../../components/ContactCTA";
import AboutHero from "../../components/AboutHero";
import AboutDifferentiators from "../../components/AboutDifferentiators";
import AboutCTA from "../../components/AboutCTA";
import Awards from "../../components/Awards";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ServicesMenu />
      <ContactCTA />
      <AboutHero />
      <AboutDifferentiators />
      <AboutCTA />
      <Awards />
      <ContactUs />
      <Footer />
    </div>
  );
}