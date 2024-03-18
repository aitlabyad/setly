'use client'
import React from 'react'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

const images = ['/hero-img-2.png', '/hero-img-3.png', '/hero-img-4.png'];


export default function Hero() {


  const [currentImage, setCurrentImage] = useState("/hero-img-1.png");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 2000)

    return () => clearInterval(intervalId);
  }, [])


  return (




    <div className="flex sm:flex-row  flex-col w-11/12 sm:bg-transparent justify-center bg-white rounded-xl  mt-10 p-6 ">
      <div className="flex  flex-col justify-center items-center gap-2 justify-self-center">
        <div className=" pt-2 text-center text-bold  text-[2rem] text-black1 sm:text-[46px] "><span className='font-bold text-black1' >Find, book and<br /> rent a </span><span className='font-bold text-gold' >LUXURY </span><span className='font-bold text-black1' >car</span><span> </span></div>
        <div className="  text-[22px] text-center text-gray1  font-light  leading-6">Get a car wherever and whenever<br /> you need it from your phone.</div>


      </div>
      <div className='flex'>
      <Image 
        src={currentImage}
        width={700}
        height={254}
        alt='hero car'
        quality={50}
      />
      </div>
      



    </div>


  )
}
