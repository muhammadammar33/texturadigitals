"use client";

import Header from "../../components/Header";
import ServicesMenu from "../../components/ServicesMenu";
import ContactCTA from "../../components/ContactCTA";
import GraphicDesignHero from "../../components/graphicDesign/GraphicDesignHero";
import Recents from "../../components/graphicDesign/Recents"
import Footer from "../../components/Footer";
import AboutCTA from "../../components/AboutCTA";
import DesignPackages from "../../components/graphicDesign/DesignPackages";
import Services from "../../components/graphicDesign/Services";
import Identity from "../../components/graphicDesign/Identity";
import HowWeWork from "../../components/bookPublishing/HowWeWork";
import Testimonials from "../../components/Testimonials";
import Awards from "../../components/Awards"
import ContactUs from "../../components/ContactUs"

export default function GraphicDesignPage() {
  return (
    <div className="min-h-screen">
        <Header />
        <ServicesMenu />
        <ContactCTA />
        <GraphicDesignHero />
        <Services />
        <Recents />
        <AboutCTA />
        <DesignPackages />
        <Identity />
        <HowWeWork />
        <Testimonials />
        <Awards />
        <ContactUs />
        <Footer />
    </div>
  );
}
