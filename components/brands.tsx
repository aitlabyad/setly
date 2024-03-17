'use client'

import React from 'react'

import { useState } from 'react'
import Image from 'next/image'
// @ts-ignore
import ItemsCarousel from 'react-items-carousel';
import { useMediaQuery } from 'react-responsive'





export default function Brands() {

    const [activeItemIndex, setActiveItemIndex] = useState(3);
    const chevronWidth = 40;
    const isBigScreen = useMediaQuery({ query: '(min-width: 1100px)' })

    let nOc = 3;
    if (isBigScreen) {
        nOc = 8;
    }
    return (



        <div className="w-[360px] sm:w-[1200px] justify-center items-center mt-10 mx-10  " style={{ padding: `  1.2${chevronWidth}px` }}>
            <div className='sm:w-[1200px] w-[360px]  flex text-light text-black1 sm:justify-start mt-10  justify-center text-bold text-[22px] items-center gap-2 pb-6'>
                Brands
            </div>
            <div className=" items-center justify-center ">
                <ItemsCarousel 
                activePosition = "center"
                
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={nOc}
                gutter={8}
                leftChevron={<button className=''>{'<'}</button>}
                rightChevron={<button className=''>{'>'}</button>}
                outsideChevron = {true}
                chevronWidth={chevronWidth}
                alwaysShowChevrons = {true}
            >
                <div className='flex items-center justify-center bg-white  w-[110px] h-[110px] p-2 rounded-xl'>
                    <Image className=''
                        src="/brands/bda85f9de95a21baec13788b6dc2e724.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />

                </div>
                <div className='flex items-center justify-center bg-white  w-[110px] h-[110px] p-2 rounded-xl'>
                    <Image className=' '
                        src="/brands/Audi.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />

                </div>
                <div className='flex items-center justify-center bg-white  w-[110px] h-[110px] p-2 rounded-xl'>
                    <Image className=''
                        src="/brands/Land Rover.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />

                </div>
                <div className='flex items-center justify-center bg-white  w-[110px] h-[110px] p-2 rounded-xl'>
                    <Image className=''
                        src="/brands/Hyundai.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />

                </div>
                <div className='flex items-center justify-center bg-white  w-[110px] h-[110px] p-2 rounded-xl'>
                    <Image className=''
                        src="/brands/Mercedes Benz.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />

                </div>
                <div className='flex items-center justify-center bg-white  w-[110px] h-[110px] p-2 rounded-xl'>
                    <Image className=''
                        src="/brands/Peugeot.png"
                        width={60}
                        height={60}
                        alt="Picture of the author"
                    />

                </div>
                <div className='flex items-center justify-center bg-white  w-[110px] h-[110px] p-2 rounded-xl'>
                    <Image className=''
                        src="/brands/Citroen.png"
                        width={60}
                        height={60}
                        alt="Picture of the author"
                    />

                </div>
                <div className='flex items-center justify-center bg-white  w-[110px] h-[110px] p-2 rounded-xl'>
                    <Image className=''
                        src="/brands/Fiat.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />

                </div>
                <div className='flex items-center justify-center bg-white  w-[110px] h-[110px] p-2 rounded-xl'>
                    <Image className=''
                        src="/brands/Renault.png"
                        width={60}
                        height={60}
                        alt="Picture of the author"
                    />

                </div>
                <div className='flex items-center justify-center bg-white  w-[110px] h-[110px] p-2 rounded-xl'>
                    <Image className=''
                        src="/brands/Jeep.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />

                </div>
                <div className='flex items-center justify-center bg-white  w-[110px] h-[110px] p-2 rounded-xl'>
                    <Image className=''
                        src="/brands/Volkswagen.png"
                        width={100}
                        height={100}
                        alt="Picture of the author"
                    />

                </div>
            
            </ItemsCarousel>
            </div>
            
        </div>

    );
}