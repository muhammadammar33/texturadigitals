"use client";

import Header from "../../components/Header";
import ServicesMenu from "../../components/ServicesMenu";
import ContactCTA from "../../components/ContactCTA";
import MarketingHero from "../../components/marketing/MarketingHero";
import WhyUs from "../../components/marketing/WhyUs";
import Recents from "../../components/marketing/Recents"
import Footer from "../../components/Footer";
import AboutCTA from "../../components/AboutCTA";
import HowWeWork from "../../components/marketing/HowWeWork";
import Testimonials from "../../components/Testimonials";
import Awards from "../../components/Awards"
import ContactUs from "../../components/ContactUs"
import Expertise from "../../components/marketing/Expertise";

export default function MarketingPage() {
    return (
        <div className="min-h-screen">
            <Header />
            <ServicesMenu />
            <ContactCTA />
            <MarketingHero />
            <WhyUs />
            <Recents />
            <AboutCTA />
            <Expertise />
            <HowWeWork />
            <Testimonials />
            <Awards />
            <ContactUs />
            <Footer />
        </div>
    );
}
