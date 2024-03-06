import React from 'react'
import Image from 'next/image'

import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});




export default function hero() {
  return (
    <>
    
    <div className={`${poppins.className} flex justify-center items-center sm:flex-row sm:justify-between pt-10 pb-4`} >
        
            <div className=" sm:flex-row sm:bg-transparent sm:justify-between sm:w-[1200px] w-11/12 sm:h-[280px] sm:p-0 h-[400px] p-4 pt-6 bg-white rounded-xl flex-col justify-center items-center inline-flex gap-6">
            <div className=" w-full  flex-col justify-center items-center gap-2 flex">
            <div className=" w-full pt-2 text-center text-bold  text-[2rem] text-black1 sm:text-[46px] sm:leading-[px]"><span className='font-bold text-black1' >Find, book and<br/> rent a </span><span className='font-bold text-gold' >LUXURY </span><span className='font-bold text-black1' >car</span><span> </span></div>
            <div className=" w-full text-[22px] text-center text-gray1  font-light  leading-6">Get a car wherever and whenever<br/> you need it from your phone.</div>
            </div>

            <img className={`object-fill h-[264.016px;] sm:h-[260px]`} src="/hero-img-1.png" />

            </div>
    </div>
    </>
  )
}
