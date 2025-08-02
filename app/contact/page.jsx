"use client";

import Header from "../../components/Header";
import ServicesMenu from "../../components/ServicesMenu";
import ContactCTA from "../../components/ContactCTA";
import ContactHero from "../../components/ContactHero";
import ContactUs from "../../components/ContactUs";
import Footer from "../../components/Footer";
import Awards from "../../components/Awards";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <ServicesMenu />
      <ContactCTA />
      <ContactHero />
      <Awards />
      <ContactUs />
      <Footer />
    </div>
  );
}
