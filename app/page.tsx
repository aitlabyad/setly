
import "./globals.css";
import React from 'react';
import Header from "@/components/header"
import Hero from "@/components/hero"
import Booking from "@/components/booking"
import Cars from "@/components/cars"
import Brands from "@/components/brands";
import Whyus from "@/components/whyus";
import Sectioncontact from "@/components/sectioncontact";
import Footer from "@/components/footer";
import WhatsApp from "@/components/whatsApp";


export default function Home() {


  return (
    <main className="flex  flex-col items-center justify-center ">

      <Header />
      <Hero />
      <Booking />
      <Cars />
      <Brands />
      <Whyus />
      <Sectioncontact />
      <Footer />
      <WhatsApp />
    </main>
  );
}
