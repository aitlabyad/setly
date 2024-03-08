'use client'
import React from 'react'
import Image from 'next/image'
import { Menu, MenuHandler, MenuList, MenuItem, Button, } from "@material-tailwind/react";

import { usePathname } from 'next/navigation'




export default function Header() {

  const pathname = usePathname()



  return (
    <nav className='flex  bg-gray1 h-10 sm:w-[1200px] w-11/12  items-center justify-between  pt-4 sm:pt-8'>


      <div className='cursor-pointer' ><a href="https://api.whatsapp.com/send?phone=212661343109"><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 19 19" fill="none">
          <g clipPath="url(#clip0_163_12019)">
            <path d="M5.02323 16.2727L5.33373 16.4263C6.62767 17.1938 8.07675 17.552 9.5259 17.552C14.0803 17.552 17.8066 13.8677 17.8066 9.3645C17.8066 7.2153 16.9267 5.11723 15.3741 3.58205C13.8215 2.04686 11.7513 1.17697 9.5259 1.17697C4.97151 1.17697 1.24513 4.86136 1.29692 9.41571C1.29692 10.9508 1.76271 12.4349 2.539 13.7141L2.746 14.0212L1.918 17.0404L5.02323 16.2727Z" fill="#EAB738" />
            <path d="M16.2541 2.76329C14.4944 0.972301 12.062 0 9.57773 0C4.29884 0 0.0549611 4.24727 0.106674 9.41564C0.106674 11.0532 0.572462 12.6396 1.34883 14.0723L0.00317383 18.9337L5.02335 17.6544C6.42071 18.422 7.97329 18.7802 9.52602 18.7802C14.7532 18.7802 18.9971 14.5329 18.9971 9.36458C18.9971 6.85709 18.0136 4.50315 16.2541 2.76329ZM9.57773 17.1939C8.18036 17.1939 6.783 16.8358 5.59263 16.1193L5.28213 15.9658L2.2804 16.7334L3.05669 13.8166L2.84969 13.5095C0.572463 9.87633 1.65933 5.06603 5.38563 2.81442C9.11194 0.562884 13.9251 1.63752 16.2023 5.32191C18.4795 9.00629 17.3926 13.7653 13.6664 16.0169C12.476 16.7845 11.0269 17.1939 9.57773 17.1939ZM14.1321 11.5139L13.5628 11.258C13.5628 11.258 12.7348 10.8998 12.2172 10.6439C12.1655 10.6439 12.1137 10.5927 12.062 10.5927C11.9067 10.5927 11.8032 10.6439 11.6997 10.6951C11.6997 10.6951 11.648 10.7462 10.9234 11.565C10.8716 11.6673 10.7681 11.7185 10.6646 11.7185H10.6128C10.5611 11.7185 10.4576 11.6673 10.4058 11.6162L10.147 11.5139C9.57773 11.258 9.06023 10.9509 8.64615 10.5416C8.54265 10.4392 8.38736 10.3369 8.28386 10.2345C7.92158 9.87633 7.55929 9.46692 7.30057 9.00637L7.24879 8.90403C7.19707 8.85283 7.19707 8.8017 7.14529 8.69936C7.14529 8.59702 7.14529 8.49469 7.19707 8.44348C7.19707 8.44348 7.40407 8.18761 7.55929 8.03414C7.66286 7.93173 7.71457 7.77826 7.81808 7.67593C7.92158 7.52239 7.97336 7.31772 7.92158 7.16418C7.86986 6.9083 7.24879 5.52665 7.09357 5.21965C6.99 5.06611 6.88657 5.01497 6.73129 4.96377H6.162C6.05842 4.96377 5.955 5.01497 5.85142 5.01497L5.79963 5.0661C5.69613 5.11731 5.59263 5.21965 5.48913 5.27078C5.38563 5.37319 5.33385 5.47545 5.23035 5.57786C4.86806 6.03841 4.66106 6.60129 4.66106 7.16418C4.66106 7.57352 4.76456 7.98294 4.91984 8.34115L4.97163 8.49469C5.43742 9.46692 6.05842 10.3369 6.88657 11.1044L7.09357 11.3091C7.24879 11.4627 7.40407 11.565 7.50757 11.7185C8.59444 12.6396 9.83652 13.3048 11.2339 13.6631C11.3892 13.7142 11.5962 13.7142 11.7515 13.7654H12.269C12.5277 13.7654 12.8382 13.6631 13.0453 13.5607C13.2005 13.4584 13.304 13.4584 13.4075 13.356L13.5111 13.2536C13.6146 13.1513 13.7181 13.1002 13.8216 12.9978C13.9251 12.8955 14.0286 12.7932 14.0804 12.6908C14.1839 12.4861 14.2356 12.2302 14.2874 11.9744V11.6162C14.2874 11.6162 14.2356 11.565 14.1321 11.5139Z" fill="white" />
          </g>
          <defs>
            <clipPath id="clip0_163_12019">
              <rect width="19" height="19" fill="white" />
            </clipPath>
          </defs>
        </svg></a>
        
      </div>

      <div><a href="/">
        <Image
          src="/c270571a9f742c205fc1784dc88c2760.png"
          width={56 * 2}
          height={14 * 2}
          alt="setly luxuty cars logo"
        />
      </a></div>

      <div >
        <Menu placement="bottom-end">
          <MenuHandler>
            <Button className='bg-transparent' placeholder={undefined}><svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 15 15" fill="none">
              <path d="M1.85229 4.32197H12.9659" stroke="#596780" strokeWidth="0.926137" strokeLinecap="round" />
              <path d="M1.85229 7.4091H12.9659" stroke="#596780" strokeWidth="0.926137" strokeLinecap="round" />
              <path d="M1.85229 10.4962H12.9659" stroke="#596780" strokeWidth="0.926137" strokeLinecap="round" />
            </svg></Button>
          </MenuHandler>
          <MenuList  placeholder={undefined}>
          <MenuItem className='p-0 m-0 w-full text-[16px] text-center text-gray1  font-light  leading-6 hover:text-gold' placeholder={undefined}><a href="/">Home</a> </MenuItem>
            <MenuItem className='p-0 m-0 w-full text-[16px] text-center text-gray1  font-light  leading-6 hover:text-gold' placeholder={undefined}><a href="/">About</a> </MenuItem>
            <MenuItem className='p-0 m-0 w-full text-[16px] text-center text-gray1  font-light  leading-6 hover:text-gold'  placeholder={undefined}>Contact</MenuItem>
            <MenuItem className='p-0 m-0 w-full text-[16px] text-center text-gray1  font-light  leading-6 hover:text-gold' placeholder={undefined}><a href="/fleet"></a>Fleet</MenuItem>
          </MenuList>
        </Menu>
        
      </div>
    </nav>
  )
}
