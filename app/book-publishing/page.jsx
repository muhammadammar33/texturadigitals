"use client";

import Header from "../../components/Header";
import ServicesMenu from "../../components/ServicesMenu";
import ContactCTA from "../../components/ContactCTA";
import BookPublishingHero from "../../components/bookPublishing/BookPublishingHero";
import BookLaunchSection from "../../components/bookPublishing/BookLaunchSection";
import Recents from "../../components/bookPublishing/Recents"
import Footer from "../../components/Footer";
import AboutCTA from "../../components/AboutCTA";
import BookPackages from "../../components/bookPublishing/BookPackages";
import Services from "../../components/bookPublishing/Services";
import HowWeWork from "../../components/bookPublishing/HowWeWork";
import Testimonials from "../../components/Testimonials";
import Awards from "../../components/Awards"
import ContactUs from "../../components/ContactUs"

export default function BookPublishingPage() {
  return (
    <div className="min-h-screen">
        <Header />
        <ServicesMenu />
        <ContactCTA />
        <BookPublishingHero />
        <BookLaunchSection />
        <Recents />
        <AboutCTA />
        <BookPackages />
        <Services />
        <HowWeWork />
        <Testimonials />
        <Awards />
        <ContactUs />
        <Footer />
    </div>
  );
}
