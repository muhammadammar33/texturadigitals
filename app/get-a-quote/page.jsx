"use client";

import Header from "../../components/Header";
import ServicesMenu from "../../components/ServicesMenu";
import ContactCTA from "../../components/ContactCTA";
import QuoteHero from "../../components/QuoteHero";
import GetAQuoteForm from "../../components/GetAQuoteForm";
import Footer from "../../components/Footer";

export default function GetAQuotePage() {
    return (
        <div className="min-h-screen">
        <Header />
        <ServicesMenu />
        <ContactCTA />
        <QuoteHero />
        <GetAQuoteForm />
        <Footer />
        </div>
    );
}