'use client'
import React from 'react';
import Header from "@/components/header"
import Sectioncontact from "@/components/sectioncontact";
import Footer from "@/components/footer";
import { Poppins } from 'next/font/google';
import Car from '@/components/car';
import { cars } from '../../constants/Acars'

import { useSearchParams } from 'next/navigation'

const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const carImgPath = "/cars/";
const makeImgPath = "/makes/";



interface CarDetail { // Specify type for car property
    image: string;
    model: string;
    name: string;
    fuelType: string;
    seats: number;
    transmission: string;
    type: string;
    price: string;

  }



interface CarDetails {
    car: CarDetail; // Specify type for car property
    place: string;
    date1: string;
    date2: string;
  }



export default function Home() {
  // @ts-expect-error
 
        
  const searchParams = useSearchParams<Record<string, string | string[]>>();
  const search = searchParams.get('place')
  const date = searchParams.get('date')
  const date2 = searchParams.get('date2')

    return (

        <main className="flex  flex-col items-center justify-center ">

            <Header />
           
                

            <div className={`${poppins.className} flex justify-center items-center sm:flex-row sm:justify-between pt-10 pb-4`} >

                <div className=" sm:flex-row sm:bg-transparent sm:justify-between sm:w-[1200px] w-[200px] sm:h-[160px] sm:p-0 h-[100px]   rounded-xl flex-col justify-center items-center inline-flex gap-6">
                    <div className=" w-full  flex-col justify-center items-center gap-2 flex">
                        <div className=" w-full  text-center text-bold  text-[1.6rem] text-black1 sm:text-[52px] sm:leading-[px]"><span className='font-bold text-black1' >Select </span><span className='font-bold text-gold' >LUXURY </span><span className='font-bold text-black1' >car</span><span> </span></div>
                        <div className=" w-full text-[22px] text-center text-gray1  font-light  leading-6">RENT NOW</div>
                    </div>



                </div>
            </div>

            {!search ? <div className='sm:w-[1200px] w-11/12  flex text-light text-gold sm:justify-start   justify-center text-bold  items-center gap-2 pb-10 font-light text-[26px] '>
                Our Fleet
            </div> : 
                    <div className='sm:w-[1200px] w-11/12  flex text-light text-gold sm:justify-start   justify-center text-bold  items-center gap-2 pb-10 font-light text-[20px] '>
                    Availble cars from <span className='text-black1'>{date} </span> to <span className='text-black1'>{date2}</span> : 
                </div>
            }

           
            <div className='grid sm:grid-cols-4  grid-cols-1 gap-4'>



                {cars.map(function (car) {
                    return (
                        <Car key={car.model} car={car} place={search || ''} date1={date || ''} date2={date2|| ''} />
                    )
                })}

            </div>









            <Sectioncontact />
            <Footer />





        </main>
    );
}
