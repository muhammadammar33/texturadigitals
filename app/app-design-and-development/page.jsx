"use client";

import Header from "../../components/Header";
import ServicesMenu from "../../components/ServicesMenu";
import ContactCTA from "../../components/ContactCTA";
import AppHero from "../../components/appDesign/AppHero";
import WhyUs from "../../components/appDesign/WhyUs";
import Recents from "../../components/appDesign/Recents"
import Footer from "../../components/Footer";
import AboutCTA from "../../components/AboutCTA";
import WebsitePackages from "../../components/appDesign/WebsitePackages";
import HowWeWork from "../../components/appDesign/HowWeWork";
import Testimonials from "../../components/Testimonials";
import Awards from "../../components/Awards"
import ContactUs from "../../components/ContactUs"
import Expertise from "../../components/appDesign/Expertise";

export default function AppPage() {
  return (
    <div className="min-h-screen">
        <Header />
        <ServicesMenu />
        <ContactCTA />
        <AppHero />
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
