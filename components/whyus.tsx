'use client'
import React from 'react'
import Image from 'next/image'


 

import MediaQuery from 'react-responsive'

export default function whyus() {
    return (
        <div id="first-section">
            <div className='flex flex-col sm:flex-row w-[390px]  sm:w-[1200px] pt-10 items-center'>
                <MediaQuery minWidth={904}>
                    <div className='items-center justify-center  sm:w-1/2  p-2  '>
                        <Image className=' '
                            src="/Range-Rover 1.png"
                            width={600}
                            height={600}
                            alt="RANGE ROVER"
                        />

                    </div>
                </MediaQuery>


                <div className='flex flex-col pt-4 sm:w-1/2 justify-center items-center  sm:gap-6 m-6'>
                    <div className='flex justify-center items-center text-gold text-bold w-40    bg-lightGold rounded-md px-3 p-2  text-[14px]'>WHY CHOOSE US</div>
                    <div className=' text-black1 font-medium leading-tight text-center text-[36px] pt-4'>

                        We offer the best experience with our rental deals
                    </div>
                    <MediaQuery maxWidth={904}>
                        <div className='items-center justify-center  sm:w-1/2  p-2  '>
                            <Image className=' '
                                src="/c1c4611fa73c17b6ff64b96a0aaff7f2.png"
                                width={600}
                                height={600}
                                alt="RANGE ROVER"
                            />

                        </div>
                    </MediaQuery>
                    <div className='flex flex-row gap-3 pt-6'>
                        <div className='flex justify-center items-center  w-16 h-16    bg-lightGold rounded-[20px] px-3 p-2  '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 10 10" fill="none">
                                <path d="M4.72625 1.4134L3.77564 3.62624H2.82503C2.66725 3.62624 2.51341 3.63807 2.36353 3.66962L2.75797 2.72296L2.77375 2.68746L2.79741 2.62435C2.80925 2.59674 2.81714 2.57307 2.82897 2.55335C3.28653 1.49229 3.7993 1.16096 4.72625 1.4134Z" fill="#EAB738" />
                                <path d="M7.40475 3.7327L7.39687 3.72876C7.1602 3.6617 6.91959 3.6262 6.67503 3.6262H4.20581L5.09331 1.56326L5.10514 1.53564C5.16037 1.55537 5.21953 1.58298 5.2787 1.6027L6.15042 1.96953C6.63559 2.1707 6.97481 2.37976 7.18387 2.6322C7.21937 2.67953 7.25092 2.72292 7.28248 2.7742C7.31798 2.82942 7.34559 2.88464 7.36137 2.94381C7.37714 2.97931 7.38898 3.01087 7.39687 3.04637C7.45603 3.24753 7.45998 3.47631 7.40475 3.7327Z" fill="#EAB738" />
                                <path d="M4.95508 7.50758H5.05369C5.17202 7.50758 5.27063 7.40108 5.27063 7.27092C5.27063 7.10525 5.2233 7.08158 5.12074 7.04214L4.95508 6.98297V7.50758Z" fill="#EAB738" />
                                <path d="M7.23098 4.29678C7.05348 4.24551 6.86809 4.2179 6.67481 4.2179H2.82504C2.55681 4.2179 2.30437 4.26917 2.0677 4.37173C1.38137 4.66756 0.900146 5.34995 0.900146 6.14278V6.91195C0.900146 7.00662 0.908035 7.09734 0.919869 7.19201C1.00665 8.44634 1.6772 9.1169 2.93154 9.19973C3.02226 9.21156 3.11298 9.21945 3.21159 9.21945H6.28826C7.7477 9.21945 8.51687 8.52523 8.59181 7.14467C8.59576 7.06973 8.5997 6.99084 8.5997 6.91195V6.14278C8.5997 5.27106 8.01987 4.5374 7.23098 4.29678ZM5.25481 6.65556C5.43626 6.71867 5.68081 6.85278 5.68081 7.2709C5.68081 7.62984 5.40076 7.91778 5.05365 7.91778H4.95504V8.00456C4.95504 8.11895 4.86431 8.20967 4.74992 8.20967C4.63554 8.20967 4.54481 8.11895 4.54481 8.00456V7.91778H4.50931C4.13065 7.91778 3.81904 7.59828 3.81904 7.20384C3.81904 7.08945 3.90976 6.99873 4.02415 6.99873C4.13854 6.99873 4.22926 7.08945 4.22926 7.20384C4.22926 7.36951 4.35548 7.50756 4.50931 7.50756H4.54481V6.84095L4.24504 6.73445C4.06359 6.67134 3.81904 6.53723 3.81904 6.11912C3.81904 5.76017 4.09909 5.47223 4.4462 5.47223H4.54481V5.38545C4.54481 5.27106 4.63554 5.18034 4.74992 5.18034C4.86431 5.18034 4.95504 5.27106 4.95504 5.38545V5.47223H4.99054C5.3692 5.47223 5.68081 5.79173 5.68081 6.18617C5.68081 6.30056 5.59009 6.39128 5.4757 6.39128C5.36131 6.39128 5.27059 6.30056 5.27059 6.18617C5.27059 6.02051 5.14437 5.88245 4.99054 5.88245H4.95504V6.54906L5.25481 6.65556Z" fill="#EAB738" />
                                <path d="M4.22925 6.11911C4.22925 6.28478 4.27658 6.30845 4.37914 6.34789L4.5448 6.40706V5.88245H4.44619C4.32391 5.88245 4.22925 5.98895 4.22925 6.11911Z" fill="#EAB738" />
                            </svg>
                        </div>
                        <div className='flex flex-col justify-start p-2 gap-4 '>
                            <h3 className='text-black1 leading-3 font-medium text-[20px]'>Best price guaranteed</h3>
                            <p className='text-[#6D6D6D] sm:leading-3 font-normal text-[16px]'>We guaranties the best prices in the market.</p>
                        </div>

                    </div>
                    <div className='flex flex-row items-center gap-3 '>
                        <div className='flex justify-center items-center  w-16 h-16    bg-lightGold rounded-[20px] px-3 p-2  '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 10 11" fill="none">
                                <path d="M4.74981 6.1972C2.77364 6.1972 1.16431 7.52254 1.16431 9.15554C1.16431 9.26598 1.25108 9.35276 1.36153 9.35276H8.13808C8.24853 9.35276 8.33531 9.26598 8.33531 9.15554C8.33531 7.52254 6.72597 6.1972 4.74981 6.1972Z" fill="#EAB738" />
                                <path d="M4.75005 1.46387C4.28461 1.46387 3.85861 1.62559 3.51939 1.89776C3.06578 2.2567 2.77783 2.81287 2.77783 3.43609C2.77783 3.80687 2.88039 4.15398 3.06578 4.44981C3.405 5.02176 4.02822 5.40831 4.75005 5.40831C5.24705 5.40831 5.70067 5.22687 6.04778 4.91526C6.20161 4.78509 6.33572 4.62731 6.43828 4.44981C6.61972 4.15398 6.72228 3.80687 6.72228 3.43609C6.72228 2.34742 5.83872 1.46387 4.75005 1.46387ZM5.77167 3.22309L4.7185 4.19342C4.6475 4.26048 4.55678 4.29203 4.46605 4.29203C4.37139 4.29203 4.27672 4.25653 4.20572 4.18553L3.72055 3.69642C3.57461 3.55048 3.57461 3.31776 3.72055 3.17181C3.8665 3.02587 4.09922 3.02587 4.24517 3.17181L4.47789 3.40453L5.27072 2.67481C5.42061 2.53676 5.65333 2.54464 5.79139 2.69453C5.92944 2.84837 5.92155 3.08503 5.77167 3.22309Z" fill="#EAB738" />
                            </svg>
                        </div>
                        <div className='flex flex-col justify-start  gap-3 p-2 '>
                            <h3 className='text-black1 leading-3 font-medium text-[20px]'>Experience driver</h3>
                            <p className='text-[#6D6D6D] font-normal text-[16px]'>Don&rsquo;t have driver? Don&rsquo;t worry, we have many<br /> experienced driver for you.</p>
                        </div>

                    </div>
                    <div className='flex flex-row items-center gap-3 '>
                        <div className='flex justify-center items-center  w-16 h-16    bg-lightGold rounded-[20px] px-3 p-2  '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 10 11" fill="none">
                                <path d="M7.11662 1.70831H2.38328C1.72851 1.70831 1.19995 2.23292 1.19995 2.87981V7.1832C1.19995 7.83009 1.72851 8.3547 2.38328 8.3547H2.68306C2.99862 8.3547 3.2984 8.47698 3.51928 8.69787L4.19378 9.36448C4.50145 9.6682 5.0024 9.6682 5.31006 9.36448L5.98456 8.69787C6.20545 8.47698 6.50917 8.3547 6.82078 8.3547H7.11662C7.7714 8.3547 8.29995 7.83009 8.29995 7.1832V2.87981C8.29995 2.23292 7.7714 1.70831 7.11662 1.70831ZM4.11095 6.05115C4.27267 6.05115 4.40678 6.18526 4.40678 6.34698C4.40678 6.5087 4.27267 6.64281 4.11095 6.64281H3.05384C2.88028 6.64281 2.71856 6.55998 2.61601 6.41798C2.5174 6.28387 2.49373 6.1182 2.54106 5.96042C2.67912 5.53837 3.01834 5.30959 3.31812 5.10448C3.63367 4.89148 3.81117 4.75737 3.81117 4.52859C3.81117 4.32348 3.64551 4.15781 3.4404 4.15781C3.23528 4.15781 3.07356 4.32742 3.07356 4.53254C3.07356 4.69426 2.93945 4.82837 2.77773 4.82837C2.61601 4.82837 2.4819 4.69426 2.4819 4.53254C2.4819 4.00398 2.91184 3.57009 3.44434 3.57009C3.97684 3.57009 4.40678 4.00004 4.40678 4.53254C4.40678 5.0887 3.98867 5.3727 3.6534 5.60148C3.44434 5.74348 3.24712 5.87759 3.14851 6.05509H4.11095V6.05115ZM6.72217 6.07876H6.63934V6.35092C6.63934 6.51265 6.50523 6.64676 6.34351 6.64676C6.18178 6.64676 6.04767 6.51265 6.04767 6.35092V6.07876H5.27456C5.27456 6.07876 5.27456 6.07876 5.27062 6.07876C5.07734 6.07876 4.89984 5.9762 4.80123 5.81053C4.70262 5.64092 4.70262 5.43187 4.80123 5.2662C5.06945 4.8047 5.38106 4.28009 5.66506 3.82254C5.79128 3.62137 6.0319 3.53065 6.25673 3.59376C6.48156 3.66081 6.63934 3.86592 6.6354 4.10259V5.49104H6.72217C6.8839 5.49104 7.01801 5.62515 7.01801 5.78687C7.01801 5.94859 6.8839 6.07876 6.72217 6.07876Z" fill="#EAB738" />
                                <path d="M6.0477 5.48712V4.32745C5.81498 4.70612 5.57437 5.1124 5.35742 5.48318H6.0477V5.48712Z" fill="#EAB738" />
                            </svg>
                        </div>
                        <div className='flex flex-col justify-start  gap-3 p-2 '>
                            <h3 className='text-black1 leading-3 font-medium text-[20px]'>24 hour car delivery</h3>
                            <p className='text-[#6D6D6D] font-normal text-[16px]'>Book your car anytime and we will  deliver it <br />directly to you.</p>
                        </div>

                    </div>
                    <div className='flex flex-row items-center gap-3 '>
                        <div className='flex justify-center items-center  w-16 h-16    bg-lightGold rounded-[20px] px-3 p-2  '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 10 10" fill="none">
                                <path d="M7.30197 6.80237L7.45581 8.04881C7.49525 8.3762 7.1442 8.60498 6.86414 8.43537L5.49936 7.62281C5.4047 7.56759 5.38103 7.44926 5.43231 7.35459C5.62953 6.9917 5.73603 6.58148 5.73603 6.17126C5.73603 4.72759 4.49747 3.55215 2.97492 3.55215C2.66331 3.55215 2.35958 3.59948 2.07558 3.69415C1.92964 3.74148 1.78764 3.60737 1.82314 3.45748C2.18208 2.0217 3.56264 0.952759 5.21142 0.952759C7.13631 0.952759 8.69436 2.40826 8.69436 4.20298C8.69436 5.26798 8.14608 6.2107 7.30197 6.80237Z" fill="#EAB738" />
                                <path d="M5.14431 6.1713C5.14431 6.64069 4.97075 7.07458 4.67886 7.41775C4.28836 7.89108 3.66909 8.1948 2.97486 8.1948L1.94536 8.80619C1.77181 8.91269 1.55092 8.76675 1.57459 8.56558L1.6732 7.78853C1.14464 7.42169 0.80542 6.83397 0.80542 6.1713C0.80542 5.47708 1.1762 4.86569 1.7442 4.5028C2.09525 4.27403 2.51731 4.14386 2.97486 4.14386C4.17398 4.14386 5.14431 5.05108 5.14431 6.1713Z" fill="#EAB738" />
                            </svg>
                        </div>
                        <div className='flex flex-col justify-start  gap-3 p-2 '>
                            <h3 className='text-black1 leading-3 font-medium text-[20px]'>24/7 technical support</h3>
                            <p className='text-[#6D6D6D] font-normal text-[16px]'>Have a question? Contact Rentcars support <br />any time when you have problem.</p>
                        </div>

                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    )
}
