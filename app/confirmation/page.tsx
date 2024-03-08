'use client'

import React from 'react';
import Header from "@/components/header"
import Whyus from "@/components/whyus";
import Footer from "@/components/footer";
import { Poppins } from 'next/font/google';
import { useState } from 'react';
import { Input } from "@material-tailwind/react";
import { useSearchParams } from 'next/navigation'



const poppins = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});
const carImgPath = "/cars/";


let searchParam ={
    name: "Audi",
    model: "A6",
    type: "SEDAN",
    year: 2023,
    doors: 5,
    seats: 5,
    transmission: "Automatic",
    fuelType: "Diesel",
    fuelConsumption: "8 L/100 km",
    price: "4.0",
    isActive: true,
    showInMain: false,
    image: carImgPath + "audi-a6-2023.webp",
  }
  


export default function Home() 
{


    const searchParams = useSearchParams();
    const name = searchParams.get('name')
    const model = searchParams.get('model')
    const type = searchParams.get('type')
    const year = searchParams.get('year')
    const doors = searchParams.get('doors')
    const seats = searchParams.get('seats')
    const transmission = searchParams.get('transmission')
    const fuelType = searchParams.get('fuelType')
    const fuelConsumption = searchParams.get('fuelConsumption')
    const price = searchParams.get('price')
    const isActive = searchParams.get('isActive')
    const showInMain = searchParams.get('showInMain')
    const image = searchParams.get('image')
    const date = searchParams.get('date')
    const date2 = searchParams.get('date2')





    return (

        <main className="flex  flex-col items-center justify-center ">

            <Header />





            <div className={`${poppins.className} flex justify-center items-center sm:flex-row sm:justify-between pt-10 pb-4`} >

                <div className=" sm:flex-row sm:bg-transparent sm:justify-between sm:w-[1200px] w-[200px] sm:h-[160px] sm:p-0 h-[100px]   rounded-xl flex-col justify-center items-center inline-flex gap-6">
                    <div className=" w-full  flex-col justify-center items-center gap-2 flex">
                        <div className=" w-full  text-center text-bold  text-[1.6rem] text-black1 sm:text-[52px] sm:leading-[px]"><span className='font-bold text-black1' > </span><span className='font-bold text-gold' >Confirmation Page </span><span className='font-bold text-black1' ></span><span> </span></div>

                    </div>



                </div>
            </div>

            <div className='sm:w-[1200px] w-11/12  flex text-light text-gold sm:justify-start   justify-center text-bold  items-center gap-2 pb-10 font-light text-[26px] '>
                Reservation{date}
            </div>

            <div className='flex sm:flex-row flex-col gap-10'>

                <div className='flex justify-center items-center'>
                    <div className="w-[280px] bg-white p-2 rounded-xl ">
                        <div className="flex flex-row justify-between items-center">
                            <div className="flex flex-row mt-2">
                                <div>

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 8 8"
                                        fill="none"
                                    >
                                        <g clip-path="url(#clip0_162_11237)">
                                            <path
                                                d="M1.28567 4.12772L2.20075 4.79604L1.85322 5.87229C1.79706 6.03921 1.79635 6.21981 1.85119 6.38717C1.90604 6.55453 2.0135 6.69969 2.15756 6.80099C2.29916 6.90555 2.47075 6.96157 2.64676 6.96069C2.82278 6.95981 2.99379 6.90208 3.13434 6.79611L4.02911 6.13756L4.92414 6.79534C5.06548 6.8993 5.23614 6.95577 5.4116 6.95662C5.58705 6.95748 5.75825 6.90268 5.9006 6.8001C6.04294 6.69752 6.14909 6.55244 6.20379 6.38573C6.25848 6.21902 6.25891 6.03926 6.205 5.87229L5.85747 4.79604L6.77256 4.12772C6.91371 4.02452 7.01864 3.87935 7.07236 3.71295C7.12608 3.54655 7.12584 3.36743 7.07167 3.20117C7.01751 3.03492 6.91219 2.89003 6.77076 2.78721C6.62933 2.68438 6.45903 2.62888 6.28417 2.62863H5.16011L4.81901 1.5655C4.76537 1.39815 4.65997 1.25216 4.518 1.14858C4.37604 1.04501 4.20484 0.989197 4.02911 0.989197C3.85338 0.989197 3.68218 1.04501 3.54022 1.14858C3.39825 1.25216 3.29285 1.39815 3.23921 1.5655L2.89811 2.62863H1.77508C1.60022 2.62888 1.42992 2.68438 1.28849 2.78721C1.14706 2.89003 1.04174 3.03492 0.987577 3.20117C0.933413 3.36743 0.933173 3.54655 0.986892 3.71295C1.04061 3.87935 1.14554 4.02452 1.28669 4.12772H1.28567Z"
                                                fill="#EAB738"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_162_11237">
                                                <rect
                                                    width="6.16909"
                                                    height="6.16909"
                                                    fill="white"
                                                    transform="translate(0.944336 0.940247)"
                                                />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                </div>
                                <h3 className="flex items-center">
                                    <span className="text-gold text-sm">{searchParam.price}</span>
                                    <span className="text-gray2 text-sm">/5.0</span>
                                </h3>
                            </div>
                            <div className="flex justify-center items-center text-gold text-bold bg-lightGold rounded-md px-2 p-1  text-[8px]">Available now</div>
                        </div>
                        <div className="pt-2 items-center">
                            <img src={searchParam.image} alt={searchParam.model} />
                        </div>

                        <div className="flex flex-col text-black1  text-[14px] tracking-tight  text-bold leading-[1rem]">
                            <h3 className="">{searchParam.name}</h3>
                            <h3 className="text-black1 text-[12px] font-extralight">{searchParam.model}</h3>

                        </div>

                        <div className="Line1 w-full h-[0px] border border-lightGold my-2"></div>


                        <div className="flex flex-row   justify-center gap-0">



                            <div className="  flex flex-row items-center justify-between">
                                <div className="items-center p-1"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 9 9" fill="none">
                                    <g clip-path="url(#clip0_149_9363)">
                                        <path d="M8.05535 2.73361C8.04626 2.23618 7.84404 1.76179 7.49146 1.41079L6.67598 0.596279C6.61538 0.53775 6.53422 0.505365 6.44998 0.506097C6.36573 0.506829 6.28514 0.54062 6.22557 0.600193C6.166 0.659766 6.1322 0.740354 6.13147 0.824599C6.13074 0.908845 6.16313 0.990007 6.22165 1.05061L6.77013 1.59908V2.42998C6.77013 2.60041 6.83783 2.76386 6.95834 2.88437C7.07886 3.00488 7.24231 3.07259 7.41274 3.07259V6.28565C7.41274 6.37087 7.37889 6.4526 7.31863 6.51285C7.25837 6.57311 7.17665 6.60696 7.09143 6.60696C7.00622 6.60696 6.92449 6.57311 6.86423 6.51285C6.80398 6.4526 6.77013 6.37087 6.77013 6.28565V5.96435C6.77013 5.7087 6.66857 5.46352 6.4878 5.28275C6.30703 5.10198 6.06185 5.00043 5.80621 5.00043H5.4849V2.10867C5.48439 1.68275 5.31497 1.27442 5.01379 0.973242C4.71262 0.672069 4.30429 0.502646 3.87837 0.502136L1.95053 0.502136C1.5246 0.502646 1.11627 0.672069 0.8151 0.973242C0.513927 1.27442 0.344504 1.68275 0.343994 2.10867L0.343994 6.60696C0.344504 7.03288 0.513927 7.44122 0.8151 7.74239C1.11627 8.04356 1.5246 8.21298 1.95053 8.21349H3.87837C4.30429 8.21298 4.71262 8.04356 5.01379 7.74239C5.31497 7.44122 5.48439 7.03288 5.4849 6.60696V5.64304H5.80621C5.89142 5.64304 5.97315 5.67689 6.0334 5.73715C6.09366 5.79741 6.12751 5.87913 6.12751 5.96435V6.28565C6.12751 6.5413 6.22907 6.78648 6.40984 6.96725C6.59061 7.14802 6.83578 7.24957 7.09143 7.24957C7.34708 7.24957 7.59226 7.14802 7.77303 6.96725C7.9538 6.78648 8.05535 6.5413 8.05535 6.28565C8.05535 6.28565 8.05535 2.73939 8.05535 2.73361ZM1.95053 1.14475L3.87837 1.14475C4.13401 1.14475 4.37919 1.2463 4.55996 1.42707C4.74073 1.60784 4.84229 1.85302 4.84229 2.10867V3.3939L0.986607 3.3939V2.10867C0.986607 1.85302 1.08816 1.60784 1.26893 1.42707C1.4497 1.2463 1.69488 1.14475 1.95053 1.14475ZM4.84229 6.60696C4.84229 6.86261 4.74073 7.10779 4.55996 7.28856C4.37919 7.46933 4.13401 7.57088 3.87837 7.57088H1.95053C1.69488 7.57088 1.4497 7.46933 1.26893 7.28856C1.08816 7.10779 0.986607 6.86261 0.986607 6.60696L0.986607 4.03651H4.84229V6.60696Z" fill="#0F0D0E" />
                                    </g>

                                </svg></div>

                                <p className=" text-gray2  text-[12px] font-light tracking-wide ">{searchParam.fuelType}</p>
                            </div>
                            <div className=" flex flex-row items-center justify-between">
                                <div className="items-center p-1"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 9 9" fill="none">
                                    <g clip-path="url(#clip0_162_11249)">
                                        <rect width="7.71136" height="7.71136" transform="translate(0.156738 0.447449)" fill="white" />
                                        <path d="M4.01256 4.30313C4.39385 4.30313 4.76657 4.19006 5.08361 3.97823C5.40064 3.76639 5.64773 3.46531 5.79365 3.11304C5.93956 2.76077 5.97774 2.37315 5.90335 1.99919C5.82897 1.62522 5.64536 1.28171 5.37574 1.0121C5.10613 0.742487 4.76262 0.558879 4.38866 0.484492C4.01469 0.410106 3.62707 0.448284 3.2748 0.594198C2.92254 0.740111 2.62145 0.987207 2.40962 1.30424C2.19778 1.62127 2.08472 1.994 2.08472 2.37529C2.08523 2.88643 2.2885 3.37648 2.64993 3.73791C3.01136 4.09934 3.50142 4.30262 4.01256 4.30313ZM4.01256 1.09006C4.26675 1.09006 4.51523 1.16544 4.72659 1.30666C4.93794 1.44788 5.10267 1.64861 5.19995 1.88345C5.29723 2.1183 5.32268 2.37671 5.27309 2.62602C5.2235 2.87533 5.10109 3.10434 4.92135 3.28408C4.74161 3.46382 4.5126 3.58623 4.26329 3.63582C4.01398 3.68541 3.75557 3.65996 3.52072 3.56268C3.28588 3.46541 3.08515 3.30068 2.94393 3.08932C2.80271 2.87797 2.72733 2.62948 2.72733 2.37529C2.72733 2.03443 2.86274 1.70752 3.10376 1.4665C3.34479 1.22547 3.67169 1.09006 4.01256 1.09006Z" fill="#0F0D0E" />
                                        <path d="M4.01236 4.94574C3.24568 4.94659 2.51065 5.25153 1.96852 5.79366C1.4264 6.33578 1.12146 7.07082 1.12061 7.8375C1.12061 7.92271 1.15446 8.00444 1.21471 8.0647C1.27497 8.12495 1.3567 8.1588 1.44191 8.1588C1.52713 8.1588 1.60885 8.12495 1.66911 8.0647C1.72937 8.00444 1.76322 7.92271 1.76322 7.8375C1.76322 7.24099 2.00018 6.66891 2.42198 6.24711C2.84377 5.82532 3.41585 5.58835 4.01236 5.58835C4.60888 5.58835 5.18095 5.82532 5.60275 6.24711C6.02455 6.66891 6.26151 7.24099 6.26151 7.8375C6.26151 7.92271 6.29536 8.00444 6.35562 8.0647C6.41588 8.12495 6.4976 8.1588 6.58282 8.1588C6.66803 8.1588 6.74976 8.12495 6.81002 8.0647C6.87027 8.00444 6.90412 7.92271 6.90412 7.8375C6.90327 7.07082 6.59833 6.33578 6.05621 5.79366C5.51408 5.25153 4.77905 4.94659 4.01236 4.94574Z" fill="#0F0D0E" />
                                    </g>

                                </svg></div>

                                <p className=" text-gray2  text-[12px] font-light tracking-wide ">{searchParam.seats}</p>
                            </div>
                            <div className=" flex flex-row items-center justify-between">
                                <div className="items-center p-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 9 9" fill="none">
                                        <path d="M1.01148 1.73264C1.01153 1.61606 1.0433 1.50168 1.10338 1.40178C1.16346 1.30187 1.24959 1.22018 1.35254 1.16548C1.45549 1.11077 1.57139 1.0851 1.68781 1.09122C1.80423 1.09734 1.9168 1.13501 2.01345 1.2002C2.1101 1.2654 2.18719 1.35566 2.23647 1.46131C2.28575 1.56697 2.30536 1.68404 2.29319 1.79999C2.28103 1.91594 2.23756 2.02639 2.16742 2.11952C2.09729 2.21265 2.00314 2.28494 1.89507 2.32866V4.06211H3.98356V2.32866C3.84531 2.27274 3.73082 2.17047 3.6597 2.03939C3.58859 1.90831 3.56527 1.75658 3.59376 1.6102C3.62225 1.46381 3.70076 1.33189 3.81584 1.23705C3.93092 1.1422 4.07541 1.09033 4.22454 1.09033C4.37367 1.09033 4.51816 1.1422 4.63324 1.23705C4.74832 1.33189 4.82684 1.46381 4.85532 1.6102C4.88381 1.75658 4.8605 1.90831 4.78938 2.03939C4.71826 2.17047 4.60377 2.27274 4.46552 2.32866V4.06211H5.50977C5.81951 4.06211 6.02771 4.06147 6.1829 4.04091C6.33103 4.02066 6.39465 3.98628 6.43642 3.94451C6.47819 3.90274 6.51257 3.83913 6.53281 3.69068C6.55337 3.53581 6.55401 3.32761 6.55401 3.01787V2.32866C6.41577 2.27274 6.30127 2.17047 6.23016 2.03939C6.15904 1.90831 6.13573 1.75658 6.16421 1.6102C6.1927 1.46381 6.27121 1.33189 6.38629 1.23705C6.50138 1.1422 6.64586 1.09033 6.79499 1.09033C6.94412 1.09033 7.08861 1.1422 7.20369 1.23705C7.31878 1.33189 7.39729 1.46381 7.42577 1.6102C7.45426 1.75658 7.43095 1.90831 7.35983 2.03939C7.28871 2.17047 7.17422 2.27274 7.03597 2.32866V3.03457C7.03597 3.32311 7.03597 3.56409 7.01027 3.75494C6.98328 3.95672 6.92352 4.1389 6.777 4.2851C6.63081 4.43161 6.44863 4.49138 6.24685 4.51837C6.05599 4.54407 5.81533 4.54407 5.52648 4.54407H4.46552V6.27752C4.60377 6.33344 4.71826 6.43571 4.78938 6.56679C4.8605 6.69787 4.88381 6.84961 4.85532 6.99599C4.82684 7.14237 4.74832 7.27429 4.63324 7.36914C4.51816 7.46398 4.37367 7.51585 4.22454 7.51585C4.07541 7.51585 3.93092 7.46398 3.81584 7.36914C3.70076 7.27429 3.62225 7.14237 3.59376 6.99599C3.56527 6.84961 3.58859 6.69787 3.6597 6.56679C3.73082 6.43571 3.84531 6.33344 3.98356 6.27752L3.98356 4.54407H1.89507L1.89507 6.27752C2.03332 6.33344 2.14781 6.43571 2.21893 6.56679C2.29004 6.69787 2.31336 6.84961 2.28487 6.99599C2.25638 7.14237 2.17787 7.27429 2.06279 7.36914C1.94771 7.46398 1.80322 7.51585 1.65409 7.51585C1.50496 7.51585 1.36047 7.46398 1.24539 7.36914C1.13031 7.27429 1.05179 7.14237 1.02331 6.99599C0.994822 6.84961 1.01813 6.69787 1.08925 6.56679C1.16037 6.43571 1.27486 6.33344 1.41311 6.27752L1.41311 2.32866C1.2944 2.28064 1.19274 2.19825 1.12118 2.09205C1.04962 1.98585 1.01141 1.8607 1.01148 1.73264Z" fill="#0F0D0E" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.91162 5.26704C5.91162 5.20313 5.93701 5.14184 5.9822 5.09664C6.02739 5.05145 6.08869 5.02606 6.1526 5.02606H6.88711C7.3289 5.02606 7.67881 5.39042 7.67881 5.82933C7.67939 5.99448 7.62909 6.15581 7.53475 6.29136C7.44041 6.42692 7.30661 6.53014 7.15154 6.58697L7.64314 7.39024C7.65968 7.41722 7.67075 7.4472 7.6757 7.47846C7.68066 7.50971 7.67941 7.54164 7.67202 7.57242C7.66464 7.6032 7.65126 7.63222 7.63266 7.65782C7.61406 7.68343 7.5906 7.70512 7.56362 7.72166C7.53664 7.7382 7.50666 7.74927 7.4754 7.75422C7.44414 7.75918 7.41221 7.75793 7.38144 7.75054C7.35066 7.74316 7.32164 7.72978 7.29603 7.71118C7.27042 7.69258 7.24873 7.66912 7.23219 7.64214L6.61432 6.63259H6.39358V7.51619C6.39358 7.5801 6.36819 7.64139 6.323 7.68659C6.27781 7.73178 6.21651 7.75717 6.1526 7.75717C6.08869 7.75717 6.02739 7.73178 5.9822 7.68659C5.93701 7.64139 5.91162 7.5801 5.91162 7.51619V5.26704ZM6.39358 6.15064H6.88711C7.05354 6.15064 7.19685 6.01151 7.19685 5.82933C7.19685 5.64715 7.05354 5.50802 6.88711 5.50802H6.39358V6.15064Z" fill="#0F0D0E" />
                                    </svg>
                                </div>

                                <p className=" text-gray2  text-[12px] font-light tracking-wide ">{searchParam.transmission}</p>
                            </div>
                            <div className="  flex flex-row items-center justify-between">
                                <div className="items-center p-1"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 9 9" fill="none">
                                    <g clip-path="url(#clip0_162_11259)">
                                        <path d="M8.29266 3.17858C8.29266 3.05076 8.24188 2.92817 8.15149 2.83779C8.06111 2.7474 7.93852 2.69662 7.8107 2.69662C7.8107 2.69662 7.62305 2.69662 7.60988 2.6992C7.36962 2.25404 7.09436 1.82868 6.78669 1.42714C6.62615 1.21839 6.40369 1.06577 6.15115 0.99113C5.58533 0.716091 3.28863 0.716091 2.72281 0.99113C2.47026 1.06577 2.2478 1.21839 2.08726 1.42714C1.7796 1.82868 1.50433 2.25404 1.26408 2.6992C1.2509 2.69662 1.06326 2.69662 1.06326 2.69662C0.935435 2.69662 0.812847 2.7474 0.722462 2.83779C0.632077 2.92817 0.581299 3.05076 0.581299 3.17858L0.581299 5.26708C0.581361 5.49262 0.640776 5.71418 0.753575 5.90949C0.866374 6.1048 1.02858 6.26699 1.22391 6.37976V6.87361C1.22391 7.12926 1.32547 7.37443 1.50624 7.5552C1.68701 7.73597 1.93218 7.83753 2.18783 7.83753C2.44348 7.83753 2.68866 7.73597 2.86943 7.5552C3.0502 7.37443 3.15175 7.12926 3.15175 6.87361V6.5523H5.7222V6.87361C5.7222 7.12926 5.82376 7.37443 6.00453 7.5552C6.1853 7.73597 6.43048 7.83753 6.68612 7.83753C6.94177 7.83753 7.18695 7.73597 7.36772 7.5552C7.54849 7.37443 7.65004 7.12926 7.65004 6.87361V6.37976C7.84537 6.26699 8.00758 6.1048 8.12038 5.90949C8.23318 5.71418 8.29259 5.49262 8.29266 5.26708V3.17858ZM2.59718 1.81817C2.67589 1.71666 2.78461 1.64257 2.90788 1.60643C3.39594 1.36513 5.47833 1.36513 5.96608 1.60643C6.08934 1.64257 6.19807 1.71666 6.27678 1.81817C6.76472 2.45798 7.16657 3.15906 7.47204 3.90345C5.45932 3.60978 3.41463 3.60978 1.40192 3.90345C1.70738 3.15906 2.10923 2.45798 2.59718 1.81817ZM2.50914 6.87361C2.50914 6.95883 2.47529 7.04055 2.41503 7.10081C2.35477 7.16107 2.27305 7.19492 2.18783 7.19492C2.10262 7.19492 2.02089 7.16107 1.96063 7.10081C1.90038 7.04055 1.86653 6.95883 1.86653 6.87361L1.86653 6.5523H2.50914L2.50914 6.87361ZM7.00743 6.87361C7.00743 6.95883 6.97358 7.04055 6.91332 7.10081C6.85307 7.16107 6.77134 7.19492 6.68612 7.19492C6.60091 7.19492 6.51918 7.16107 6.45893 7.10081C6.39867 7.04055 6.36482 6.95883 6.36482 6.87361V6.5523H7.00743V6.87361ZM7.00743 5.90969H1.86653C1.69609 5.90969 1.53264 5.84199 1.41213 5.72147C1.29162 5.60096 1.22391 5.43751 1.22391 5.26708V4.57852C2.28768 4.4159 3.36105 4.32391 4.43698 4.30316C5.5129 4.32391 6.58627 4.4159 7.65004 4.57852V5.26708C7.65004 5.43751 7.58234 5.60096 7.46183 5.72147C7.34131 5.84199 7.17786 5.90969 7.00743 5.90969ZM2.50914 5.26708C2.50914 5.35229 2.47529 5.43402 2.41503 5.49428C2.35477 5.55453 2.27305 5.58838 2.18783 5.58838C2.10262 5.58838 2.02089 5.55453 1.96063 5.49428C1.90038 5.43402 1.86653 5.35229 1.86653 5.26708C1.86653 5.18186 1.90038 5.10014 1.96063 5.03988C2.02089 4.97962 2.10262 4.94577 2.18783 4.94577C2.27305 4.94577 2.35477 4.97962 2.41503 5.03988C2.47529 5.10014 2.50914 5.18186 2.50914 5.26708ZM7.00743 5.26708C7.00743 5.35229 6.97358 5.43402 6.91332 5.49428C6.85307 5.55453 6.77134 5.58838 6.68612 5.58838C6.60091 5.58838 6.51918 5.55453 6.45893 5.49428C6.39867 5.43402 6.36482 5.35229 6.36482 5.26708C6.36482 5.18186 6.39867 5.10014 6.45893 5.03988C6.51918 4.97962 6.60091 4.94577 6.68612 4.94577C6.77134 4.94577 6.85307 4.97962 6.91332 5.03988C6.97358 5.10014 7.00743 5.18186 7.00743 5.26708Z" fill="#0F0D0E" />
                                    </g>

                                </svg></div>

                                <p className=" text-gray2  text-[12px] font-light tracking-wide ">{searchParam.type}</p>
                            </div>



                        </div>
                        <div className="Line1 w-full h-[0px] border border-lightGold my-2"></div>

                        <div className="flex justify-center ">




                        </div>
                    </div>
                </div>




                <form className='flex flex-col sm:flex-col items-center  justify-center   w-[380px] bg-white gap-2 rounded-[20px] p-4'   >
                    <div className="relative   rounded-xl w-full items-center  justify-center ">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 22 18" fill="none">
                                <path d="M14 6H17.75M14 9H17.75M14 12H17.75M3.5 16.5H18.5C19.7426 16.5 20.75 15.4926 20.75 14.25V3.75C20.75 2.50736 19.7426 1.5 18.5 1.5H3.5C2.25736 1.5 1.25 2.50736 1.25 3.75V14.25C1.25 15.4926 2.25736 16.5 3.5 16.5ZM9.5 6.375C9.5 7.41053 8.66053 8.25 7.625 8.25C6.58947 8.25 5.75 7.41053 5.75 6.375C5.75 5.33947 6.58947 4.5 7.625 4.5C8.66053 4.5 9.5 5.33947 9.5 6.375ZM10.7939 12.7114C9.84894 13.2147 8.77021 13.5 7.62484 13.5C6.47948 13.5 5.40074 13.2147 4.45581 12.7114C4.92986 11.4207 6.16983 10.5 7.62484 10.5C9.07986 10.5 10.3198 11.4207 10.7939 12.7114Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>

                        <Input className="w-full rounded-xl border-0 py-2 pl-10 text-black1 text-sm ring-0 ring-inset bg-white1 ring-transparent placeholder:text-black1  placeholder:text-[12px] focus:ring-0 focus:ring-inset focus:ring-transparent  sm:leading-4"
                        size="lg"
                        placeholder="Full Name" crossOrigin={undefined}

                        />


                    </div>
                    <div className="relative   rounded-xl w-full items-center  justify-center ">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 22 22" fill="none">
                                <path d="M1.25 5.75C1.25 14.0343 7.96573 20.75 16.25 20.75H18.5C19.7426 20.75 20.75 19.7426 20.75 18.5V17.1284C20.75 16.6121 20.3987 16.1622 19.8979 16.037L15.4747 14.9312C15.0355 14.8214 14.5734 14.9855 14.3018 15.3476L13.3316 16.6412C13.05 17.0166 12.563 17.1827 12.1223 17.0212C8.81539 15.8098 6.19015 13.1846 4.97876 9.87766C4.81734 9.43699 4.98336 8.94998 5.3588 8.6684L6.65242 7.69818C7.01453 7.4266 7.17861 6.96445 7.06883 6.52533L5.96304 2.10215C5.83783 1.60133 5.38785 1.25 4.87163 1.25H3.5C2.25736 1.25 1.25 2.25736 1.25 3.5V5.75Z" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>

                        <Input className="w-full rounded-xl border-0 py-2 pl-10 text-black1 text-sm ring-0 ring-inset bg-white1 ring-transparent placeholder:text-black1  placeholder:text-[12px] focus:ring-0 focus:ring-inset focus:ring-transparent  sm:leading-4"
                        size="lg"
                        placeholder="Phone Number"
                        type="tel" crossOrigin={undefined}

                        />


                    </div>

                    <div className="relative   rounded-xl w-full items-center  justify-center ">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 ">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M21.75 6.75V17.25C21.75 18.4926 20.7426 19.5 19.5 19.5H4.5C3.25736 19.5 2.25 18.4926 2.25 17.25V6.75M21.75 6.75C21.75 5.50736 20.7426 4.5 19.5 4.5H4.5C3.25736 4.5 2.25 5.50736 2.25 6.75M21.75 6.75V6.99271C21.75 7.77405 21.3447 8.49945 20.6792 8.90894L13.1792 13.5243C12.4561 13.9694 11.5439 13.9694 10.8208 13.5243L3.32078 8.90894C2.65535 8.49945 2.25 7.77405 2.25 6.99271V6.75" stroke="#0F172A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>

                        <Input className="w-full rounded-xl border-0 py-2 pl-10 text-black1 text-sm ring-0 ring-inset bg-white1 ring-transparent placeholder:text-black1  placeholder:text-[12px] focus:ring-0 focus:ring-inset focus:ring-transparent  sm:leading-4"
                        size="lg"
                        placeholder="Email" crossOrigin={undefined}

                        />


                    </div>




                    <button className='bg-gold rounded-xl p-3 text-white1  w-full text-[16px] font-normal  leading-[10px] tracking-wide' >
                        Book by mail
                    </button>


                    <button className='cursor-pointer bg-gold rounded-xl p-3 text-white1  w-full text-[16px] font-normal  leading-[10px] tracking-wide' >
                        <a href="https://api.whatsapp.com/send?phone=212661343109">
                            Send a whatsApp
                        </a>
                    </button>

                </form>

            </div>



















            <Whyus />
            <Footer />





        </main>
    );
}
