'use client'
import { useState } from 'react'
import React from "react";
import Car from "@/components/car"

import ItemsCarousel from b
import { useMediaQuery } from 'react-responsive'
import MediaQuery from 'react-responsive'
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
  place?: string;
  date1?: string;
  date2?: string;

}



interface CarDetails {
  car: CarDetail; // Specify type for car property
  place: string;
  date1: string;
  date2: string;
}


export default function Cars() {


    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;
    const isBigScreen = useMediaQuery({ query: '(min-width: 1100px)' })

    let nOc = 1;
    if (isBigScreen) {
        nOc = 4;
    }

    const cars =  [
        {
            name: "Audi",
            model: "Q3",
            type: "SUV",
            year: 2023,
            doors: 5,
            seats: 5,
            transmission: "Automatic",
            fuelType: "GASOLINE",
            fuelConsumption: "5.5 L/100 km",
            price: "4.9",
            isActive: true,
            showInMain: false,
            image: carImgPath + "audi-q3-2023.webp",
          },
          {
            name: "Hyundai",
            model: "Tucson",
            type: "SUV",
            year: 2023,
            doors: 5,
            seats: 5,
            transmission: "Automatic",
            fuelType: "GASOLINE",
            fuelConsumption: "6 L/100 km",
            price: "4.7",
            isActive: true,
            showInMain: true,
            image: carImgPath + "hyundai-tucson-2023.webp",
          },
          {
            name: "Porsche",
            model: "Macan",
            type: "SUV",
            year: 2023,
            doors: 5,
            seats: 5,
            transmission: "Automatic",
            fuelType: "GASOLINE",
            fuelConsumption: " L/100 km",
            price: "4.8",
            isActive: true,
            showInMain: true,
            image: carImgPath + "porsche-macan-2023.webp",
          },
          {
            name: "Hyundai",
            model: "Creta",
            type: "SUV",
            year: 2021,
            doors: 5,
            seats: 5,
            transmission: "Manual",
            fuelType: "Diesel",
            fuelConsumption: " L/100 km",
            price: "4.6",
            isActive: true,
            showInMain: true,
            image: carImgPath + "hyundai-creta-2022.webp",
          },
          {
            name: "Volkswagen",
            model: "Touareg",
            type: "SUV",
            year: 2017,
            doors: 5,
            seats: 5,
            transmission: "Automatic",
            fuelType: "GASOLINE",
            fuelConsumption: " L/100 km",
            price: "5",
            isActive: true,
            showInMain: true,
            image: carImgPath + "volkswagen-touareg.webp",
          },
          {
            name: "Mercedes-Benz",
            model: "A-Class",
            type: "SEDAN",
            year: 2022,
            doors: 5,
            seats: 5,
            transmission: "Automatic",
            fuelType: "GASOLINE",
            fuelConsumption: " L/100 km",
            price: "5",
            isActive: true,
            showInMain: false,
            image: carImgPath + "mercedes-benz-a-class.webp",
          },
          {
            name: "Mercedes-Benz",
            model: "Mercedes-AMG G-Class",
            type: "SUV",
            year: 2023,
            doors: 5,
            seats: 5,
            transmission: "Automatic",
            fuelType: "Diesel",
            fuelConsumption: "14.07 L/100 km",
            price: "4.6",
            isActive: true,
            showInMain: false,
            image: carImgPath + "mercedes-benz-mercedes-amg-g-class-2023.webp",
          },
    ]

    return (
        <>
            <div className='sm:w-[1200px] w-11/12  flex text-light text-black1 sm:justify-between mt-10  justify-between text-bold text-[22px] items-center gap-2 '>
            <div >
                Fleet
            </div>
            <div className='text-gold text-[12px] font-light'><a href="/fleet">See more</a></div>
            </div>
            <div className="w-[340px] sm:w-[1200px] justify-center items-center  px-8 pt-6  " >

                <ItemsCarousel
                    activePosition="center"
                    requestToChangeActive={setActiveItemIndex}
                    activeItemIndex={activeItemIndex}
                    numberOfCards={nOc}
                    gutter={8}
                    leftChevron={<button className='text-[20px]'>{'<'}</button>}
                    rightChevron={<button className='text-[20px]'>{'>'}</button>}
                    outsideChevron
                    chevronWidth={chevronWidth}
                    alwaysShowChevrons={true}
                >


                    {cars.slice(0, 10).map(function (car) {
                        return (
                          <Car key={car.model} car={{ 
                            ...car, 
                            place: car.place, 
                            date1: car.date1, 
                            date2: car.date2 
                        }}/>
                        )
                    })}


                </ItemsCarousel>
            </div>



        </>
    );
}
