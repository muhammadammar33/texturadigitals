"use client";

import Header from "../../components/Header";
import ServicesMenu from "../../components/ServicesMenu";
import ContactCTA from "../../components/ContactCTA";
import WebsiteHero from "../../components/website/WebsiteHero";
import WhyUs from "../../components/website/WhyUs";
import Recents from "../../components/website/Recents"
import Footer from "../../components/Footer";
import AboutCTA from "../../components/AboutCTA";
import WebsitePackages from "../../components/website/WebsitePackages";
import HowWeWork from "../../components/website/HowWeWork";
import Testimonials from "../../components/Testimonials";
import Awards from "../../components/Awards"
import ContactUs from "../../components/ContactUs"
import Expertise from "../../components/website/Expertise";

export default function WebsitePage() {
  return (
    <div className="min-h-screen">
        <Header />
        <ServicesMenu />
        <ContactCTA />
        <WebsiteHero />
        <WhyUs />
        <Recents />
        <AboutCTA />
        <WebsitePackages />
        <Expertise />
        <HowWeWork />
        <Testimonials />
        <Awards />
        <ContactUs />
        <Footer />
    </div>
  );
}
