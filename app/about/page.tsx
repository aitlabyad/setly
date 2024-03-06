
import React from 'react';
import Header from "@/components/header"
import Hero from "@/components/hero"
import Booking from "@/components/booking"
import Cars from "@/components/cars"
import Brands from "@/components/brands";
import Whyus from "@/components/whyus";
import Sectioncontact from "@/components/sectioncontact";
import Footer from "@/components/footer";


export default function Home() {
  return (
    <main className="flex  flex-col items-center justify-center ">
    
        <Header />


        
       
    


  
  
        <Whyus />
        <Sectioncontact/> 
        <Footer />


        
       

    </main>
  );
}
