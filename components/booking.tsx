'use client'

import React from 'react'
import { useState } from 'react';
import Example from '@/components/datePicker'
import { Input, Popover, PopoverHandler, PopoverContent, } from "@material-tailwind/react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link"
import moment from"moment";










export default function reservation() {

  const places = [
    {
      name: "Agadir-Al Massira Airport",

    },
    {
      name: "Al Hoceima - Cherif-Al-Idrissi Airport",

    },
    {
      name: "Béni Mellal Airport",

    },
    {
      name: "Casablanca - Mohammed V International Airport",

    },
    {
      name: "Casa Port Train Station",

    },
    {
      name: "Casa Voyageurs Train Station",

    },
    {
      name: "Errachidia-Moulay Ali Chérif Airport",

    },
    {
      name: "Essaouira-Mogador Airport",

    },
    {
      name: "Fès-Saïss Airport",

    },
    {
      name: "Guelmim Airport",

    },
    {
      name: "Khouribga Train Station",

    },
    {
      name: "Marrakech-Ménara Airport",

    },
    {
      name: "Marrakech Train Station",

    },
    {
      name: "Mohammédia Train Station",

    },
    {
      name: "Nador-Al Aroui Airport",

    },
    {
      name: "Ouarzazate Airport",

    },
    {
      name: "Oujda-Angads Airport",

    },
    {
      name: "Rabat-Salé ",

    },
    {
      name: "Safi Train Station",

    },
    {
      name: "Settat Train Station",

    },
    {
      name: "Sidi Kacem Train Station",

    },
    {
      name: "Tanger-Ibn Battouta Airport",

    },
    {
      name: "Tan Tan-Plage Blanche Airport",

    },
    {
      name: "Tétouan - Sania R'mel Airport",

    },
    {
      name: "Zagora Airport",

    },
    {
      name: "Dakhla Airport",

    },
    {
      name: "Laâyoune - Hassan Ier Airport",

    },
  ];

  

  const [date, setDate] = useState<Date>();
  const [date2, setDate2] = useState<Date>();
  const [place, setplace] = useState();

 

  return (
    <div className='flex flex-col  justify-start items-center  gap-2  '>


      <div className='sm:w-[1200px] w-11/12  flex text-light text-black1 sm:justify-start  justify-center text-bold text-[22px] items-center gap-2 '>
        Book a car now
      </div>










      <div className='sm:w-[1200px] w-full flex flex-row items-center  justify-center bg-white rounded-[12px] pt-2 pb-2 sm:pt-0 px-4 sm:pb-0 sm:px-2 '>



        <form className='flex flex-col sm:flex-row items-center  justify-center  sm:w-[1200px] w-[380px] bg-white gap-2 '   >
          <div className="relative   rounded-xl w-full items-center  justify-center ">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 ">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 7 7" fill="none">
                <g clip-path="url(#clip0_162_11101)">
                  <path d="M6.76996 6.35432L5.27771 4.86207C5.68436 4.36472 5.8843 3.7301 5.83617 3.08946C5.78803 2.44883 5.49551 1.85121 5.0191 1.4202C4.5427 0.989201 3.91886 0.757796 3.27662 0.773854C2.63438 0.789912 2.02288 1.0522 1.56861 1.50648C1.11434 1.96075 0.852046 2.57225 0.835988 3.21448C0.81993 3.85672 1.05133 4.48056 1.48234 4.95697C1.91334 5.43338 2.51096 5.7259 3.1516 5.77403C3.79223 5.82217 4.42686 5.62223 4.92421 5.21557L6.41646 6.70782C6.46361 6.75336 6.52676 6.77856 6.59231 6.77799C6.65786 6.77742 6.72056 6.75113 6.76691 6.70478C6.81326 6.65843 6.83956 6.59572 6.84013 6.53017C6.8407 6.46462 6.8155 6.40147 6.76996 6.35432ZM3.34321 5.28107C2.94764 5.28107 2.56096 5.16378 2.23207 4.94401C1.90317 4.72425 1.64682 4.41189 1.49545 4.04644C1.34407 3.68099 1.30447 3.27885 1.38164 2.89089C1.45881 2.50293 1.64929 2.14656 1.92899 1.86686C2.2087 1.58715 2.56506 1.39667 2.95303 1.3195C3.34099 1.24233 3.74312 1.28194 4.10857 1.43331C4.47403 1.58469 4.78638 1.84103 5.00615 2.16993C5.22591 2.49883 5.34321 2.88551 5.34321 3.28107C5.34261 3.81132 5.13171 4.31969 4.75676 4.69463C4.38182 5.06957 3.87346 5.28048 3.34321 5.28107Z" fill="#0F0D0E" />
                </g>
                <defs>
                  <clipPath id="clip0_162_11101">
                    <rect width="6" height="6" fill="white" transform="translate(0.843262 0.781067)" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <select id="countries" onChange={event => setplace(event.target.value)} className="w-full rounded-xl border-0 py-2 pl-10 text-black1 text-sm ring-0 ring-inset bg-white1 ring-transparent placeholder:text-black1  placeholder:text-[12px] focus:ring-0 focus:ring-inset focus:ring-transparent  sm:leading-4">


              <option selected>Pick up location</option>

              {
                places.map(plase =>

                  <option value={plase.name}>{plase.name}</option>

                )}


            </select>
          </div>

          <div className=' flex flex-row gap-2 rounded-xl  w-full'>
            <div className="relative  rounded-xl w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 10 10" fill="none">
                  <path d="M6.34351 4.79085C5.37876 4.79085 4.59351 5.57585 4.59351 6.54085C4.59351 7.50035 5.37876 8.2811 6.34351 8.2811C7.30826 8.2811 8.09351 7.4961 8.09351 6.5311C8.09351 5.5716 7.30826 4.79085 6.34351 4.79085ZM6.34351 7.7811C5.65426 7.7811 5.09351 7.2246 5.09351 6.54085C5.09351 5.8516 5.65426 5.29085 6.34351 5.29085C7.03276 5.29085 7.59351 5.84735 7.59351 6.5311C7.59351 7.22035 7.03276 7.7811 6.34351 7.7811ZM6.77026 6.60435C6.86801 6.7021 6.86801 6.8601 6.77026 6.95785C6.72151 7.0066 6.65751 7.0311 6.59351 7.0311C6.52951 7.0311 6.46551 7.0066 6.41676 6.95785L6.16676 6.70785C6.11976 6.66085 6.09351 6.59735 6.09351 6.5311V6.0311C6.09351 5.8931 6.20526 5.7811 6.34351 5.7811C6.48176 5.7811 6.59351 5.8931 6.59351 6.0311V6.4276L6.77026 6.60435ZM8.09351 4.0311V4.5311C8.09351 4.6691 7.98176 4.7811 7.84351 4.7811C7.70526 4.7811 7.59351 4.6691 7.59351 4.5311V4.0311C7.59351 3.6176 7.25701 3.2811 6.84351 3.2811H3.34351C2.93001 3.2811 2.59351 3.6176 2.59351 4.0311V4.2811H4.84351C4.98151 4.2811 5.09351 4.3931 5.09351 4.5311C5.09351 4.6691 4.98151 4.7811 4.84351 4.7811H2.59351L2.59351 7.0311C2.59351 7.4446 2.93001 7.7811 3.34351 7.7811H4.34351C4.48151 7.7811 4.59351 7.8931 4.59351 8.0311C4.59351 8.1691 4.48151 8.2811 4.34351 8.2811H3.34351C2.65426 8.2811 2.09351 7.72035 2.09351 7.0311L2.09351 4.0311C2.09351 3.34185 2.65426 2.7811 3.34351 2.7811H3.59351V2.5311C3.59351 2.3931 3.70551 2.2811 3.84351 2.2811C3.98151 2.2811 4.09351 2.3931 4.09351 2.5311V2.7811H6.09351V2.5311C6.09351 2.3931 6.20526 2.2811 6.34351 2.2811C6.48176 2.2811 6.59351 2.3931 6.59351 2.5311V2.7811H6.84351C7.53276 2.7811 8.09351 3.34185 8.09351 4.0311Z" fill="#0F0D0E" />
                </svg>
              </div>
              <div className="mt-2">
                <Popover placement="bottom">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2  ">

                  </div>
                  <PopoverHandler>
                    <Input
                      className='w-full rounded-xl border-0 py-2 pl-10 text-black1 ring-0 ring-inset bg-white1 ring-transparent placeholder:text-black1  placeholder:text-[12px] focus:ring-0 focus:ring-inset focus:ring-transparent sm:text-sm sm:leading-4'
                     
                      value={date ? format(date, "MM/dd/yyyy") : ""}
                      placeholder="Pick up date"
                    />
                  </PopoverHandler>
                  <PopoverContent >
                    <DayPicker

                      mode="single"
                      selectedDays={date}
                      onSelect={setDate}
                      showOutsideDays
                      className="border-0"
                      classNames={{
                        caption: "flex justify-center py-2 mb-4 relative items-center",
                        nav: "flex items-center",
                        nav_button:
                          "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-200",
                        nav_button_previous: "absolute left-1.5",
                        nav_button_next: "absolute right-1.5",
                        table: "w-full border-collapse",
                        head_row: "flex font-medium text-gray-900",
                        head_cell: "m-0.5 w-9 font-normal text-sm",
                        row: "flex w-full mt-2",
                        cell: "",
                        day: "h-9 w-9 p-0 font-normal",
                        day_range_end: "day-range-end",
                        day_selected:
                          "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                        day_today: "rounded-md bg-gray-200 text-gray-900",
                        day_outside:
                          "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                        day_disabled: "text-gray-500 opacity-50",
                        day_hidden: "invisible",
                      }}
                      components={{
                        IconLeft: ({ ...props }) => (
                          <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
                        ),
                        IconRight: ({ ...props }) => (
                          <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
                        ),
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>


            </div>
            <div className="relative  rounded-xl w-full">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 10 10" fill="none">
                  <path d="M6.34351 4.79085C5.37876 4.79085 4.59351 5.57585 4.59351 6.54085C4.59351 7.50035 5.37876 8.2811 6.34351 8.2811C7.30826 8.2811 8.09351 7.4961 8.09351 6.5311C8.09351 5.5716 7.30826 4.79085 6.34351 4.79085ZM6.34351 7.7811C5.65426 7.7811 5.09351 7.2246 5.09351 6.54085C5.09351 5.8516 5.65426 5.29085 6.34351 5.29085C7.03276 5.29085 7.59351 5.84735 7.59351 6.5311C7.59351 7.22035 7.03276 7.7811 6.34351 7.7811ZM6.77026 6.60435C6.86801 6.7021 6.86801 6.8601 6.77026 6.95785C6.72151 7.0066 6.65751 7.0311 6.59351 7.0311C6.52951 7.0311 6.46551 7.0066 6.41676 6.95785L6.16676 6.70785C6.11976 6.66085 6.09351 6.59735 6.09351 6.5311V6.0311C6.09351 5.8931 6.20526 5.7811 6.34351 5.7811C6.48176 5.7811 6.59351 5.8931 6.59351 6.0311V6.4276L6.77026 6.60435ZM8.09351 4.0311V4.5311C8.09351 4.6691 7.98176 4.7811 7.84351 4.7811C7.70526 4.7811 7.59351 4.6691 7.59351 4.5311V4.0311C7.59351 3.6176 7.25701 3.2811 6.84351 3.2811H3.34351C2.93001 3.2811 2.59351 3.6176 2.59351 4.0311V4.2811H4.84351C4.98151 4.2811 5.09351 4.3931 5.09351 4.5311C5.09351 4.6691 4.98151 4.7811 4.84351 4.7811H2.59351L2.59351 7.0311C2.59351 7.4446 2.93001 7.7811 3.34351 7.7811H4.34351C4.48151 7.7811 4.59351 7.8931 4.59351 8.0311C4.59351 8.1691 4.48151 8.2811 4.34351 8.2811H3.34351C2.65426 8.2811 2.09351 7.72035 2.09351 7.0311L2.09351 4.0311C2.09351 3.34185 2.65426 2.7811 3.34351 2.7811H3.59351V2.5311C3.59351 2.3931 3.70551 2.2811 3.84351 2.2811C3.98151 2.2811 4.09351 2.3931 4.09351 2.5311V2.7811H6.09351V2.5311C6.09351 2.3931 6.20526 2.2811 6.34351 2.2811C6.48176 2.2811 6.59351 2.3931 6.59351 2.5311V2.7811H6.84351C7.53276 2.7811 8.09351 3.34185 8.09351 4.0311Z" fill="#0F0D0E" />
                </svg>
              </div>
              <div className="mt-2">
                <Popover placement="bottom">
                  <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2  ">

                  </div>
                  <PopoverHandler>
                    <Input
                      className='w-full rounded-xl border-0 py-2 pl-10 text-black1 ring-0 ring-inset bg-white1 ring-transparent placeholder:text-black1  placeholder:text-[12px] focus:ring-0 focus:ring-inset focus:ring-transparent sm:text-sm sm:leading-4'
                      onChange={() => null}
                      value={date2 ? format(date2, "MM/dd/yyyy") : ""}
                      placeholder="return date"
                    />
                  </PopoverHandler>
                  <PopoverContent >
                    <DayPicker
                      mode="single"
                      selected={date2}
                      onSelect={setDate2}
                      showOutsideDays
                      className="border-0"
                      classNames={{
                        caption: "flex justify-center py-2 mb-4 relative items-center",

                        nav: "flex items-center",
                        nav_button:
                          "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-200",
                        nav_button_previous: "absolute left-1.5",
                        nav_button_next: "absolute right-1.5",
                        table: "w-full border-collapse",
                        head_row: "flex font-medium text-gray-900",
                        head_cell: "m-0.5 w-9 font-normal text-sm",
                        row: "flex w-full mt-2",
                        cell: "",
                        day: "h-9 w-9 p-0 font-normal",
                        day_range_end: "day-range-end",
                        day_selected:
                          "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                        day_today: "rounded-md bg-gray-200 text-gray-900",
                        day_outside:
                          "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                        day_disabled: "text-gray-500 opacity-50",
                        day_hidden: "invisible",
                      }}
                      components={{
                        IconLeft: ({ ...props }) => (
                          <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
                        ),
                        IconRight: ({ ...props }) => (
                          <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
                        ),
                      }}
                    />
                  </PopoverContent>
                </Popover>
              </div>


            </div>







          </div>


          <button className='bg-gold rounded-xl p-3 text-white1  w-full text-[16px] font-normal  leading-[10px] tracking-wide' >
            <Link
              href={{
                pathname: "/fleet",
                query: { date:  moment(date).format("DD/MM/YYYY") , date2:  moment(date2).format("DD/MM/YYYY"), place: place,},
              }}
            >
              Search for car
            </Link>


          </button>
        </form>
      </div>






    </div>
  )
}
