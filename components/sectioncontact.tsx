import React from 'react'
import Image from 'next/image'

export default function sectionContact() {
  return (
    <div>
      <div className='flex sm:flex-row flex-col sm:w-[1200px] pt-20 p-2 items-center justify-center gap-12'>
        <div className="rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3331.933447238747!2d-7.580605399999999!3d33.372803499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzPCsDIyJzIyLjEiTiA3wrAzNCc1MC4yIlc!5e0!3m2!1sen!2sma!4v1681678854883!5m2!1sen!2sma"
            className="h-[220px] w-[380px]"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className='flex flex-col items-center justify-center w-[380px] sm:w-1/2 gap-4'>
          <h1 className='text-black1 text-[36px]  font-medium  leading-[46px] pt-6'>Book your next trip </h1>
          <h3 className='text-black1 text-[16px] font-normal  leading-[16px]'>Operators available 24/7</h3>
          <div className='flex flex-col sm:flex-row justify-center items-center gap-6 pt-12 w-full'>
            <div className='flex flex-row justify-center  items-center w-1/2'>
              <div className='flex flex-col justify-center items-center '>
                <div className='flex items-center justify-center  w-16 h-16  bg-lightGold rounded-[20px]'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 23" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.3973 8.0102C15.8899 7.49948 15.2862 7.09452 14.6212 6.81878C13.9562 6.54304 13.2431 6.402 12.5232 6.40383C9.50443 6.40383 7.04698 8.86067 7.04576 11.8806C7.04576 12.8458 7.29773 13.7878 7.77665 14.6187L7 17.4563L9.90343 16.6943C10.7066 17.1315 11.6063 17.3607 12.5207 17.3611H12.5232C15.5413 17.3611 17.9988 14.9043 18 11.8843C18.0021 11.1647 17.8615 10.4518 17.5864 9.78683C17.3113 9.12187 16.9071 8.51803 16.3973 8.0102ZM12.5232 16.4368H12.5213C11.706 16.4369 10.9056 16.2175 10.2042 15.8017L10.0383 15.7029L8.31536 16.1549L8.77476 14.4754L8.66677 14.3033C8.21091 13.5776 7.96958 12.7377 7.97066 11.8806C7.97188 9.37071 10.0139 7.32873 12.525 7.32873C13.123 7.3274 13.7154 7.44469 14.2678 7.67383C14.8202 7.90296 15.3217 8.23938 15.7432 8.66361C16.167 9.08582 16.5029 9.58784 16.7315 10.1406C16.9601 10.6935 17.0769 11.2861 17.0751 11.8843C17.0739 14.3942 15.0319 16.4368 12.5232 16.4368ZM15.0203 13.027C14.883 12.9581 14.2107 12.6274 14.085 12.5816C13.9599 12.5359 13.869 12.5133 13.7775 12.65C13.686 12.7866 13.4237 13.0947 13.3437 13.1862C13.2638 13.2777 13.1839 13.2887 13.0472 13.2204C12.9106 13.1521 12.4695 13.0075 11.9466 12.5414C11.5397 12.1784 11.2652 11.7305 11.1852 11.5933C11.1053 11.456 11.1767 11.3822 11.2456 11.3139C11.3073 11.2528 11.3823 11.154 11.4506 11.0741C11.519 10.9942 11.5415 10.9374 11.5873 10.8459C11.633 10.7544 11.6105 10.6745 11.5757 10.6061C11.5415 10.5372 11.2676 9.86366 11.1535 9.58973C11.0431 9.32434 10.9302 9.35973 10.846 9.35607C10.7588 9.3525 10.6716 9.35087 10.5843 9.35119C10.5149 9.35295 10.4466 9.36904 10.3837 9.39844C10.3208 9.42783 10.2647 9.4699 10.2189 9.52201C10.0932 9.65928 9.73993 9.98995 9.73993 10.6635C9.73993 11.337 10.2304 11.988 10.2988 12.0795C10.3671 12.171 11.2639 13.5529 12.6367 14.1459C12.9637 14.2868 13.2187 14.371 13.417 14.4345C13.7446 14.5388 14.0429 14.5236 14.279 14.4888C14.542 14.4497 15.0886 14.1581 15.2027 13.8384C15.3168 13.5187 15.3168 13.2448 15.2826 13.1875C15.2485 13.1301 15.1563 13.0953 15.0203 13.027Z" fill="#EAB738" />
                  </svg>

                </div>
                <div className='flex flex-col justify-center items-center pt-6'>
                  <h4 className='text-gray2 text-[12px] font-medium uppercase leading-[12px] '>PHONE NUMBER</h4>
                  <p className='text-black1 text-[14px] font-normal uppercase leading-[18px] pt-2'><a href="tel:+212661343109">+212 661343109</a></p>
                </div>

              </div>

            </div>
            <div className='flex flex-row justify-center  '>
              <div className='flex flex-col justify-center items-center '>
                <div className='flex items-center justify-center  w-16 h-16    bg-lightGold rounded-[20px]   '>
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 12 9" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.27832 10.1894C10.8617 10.1894 11.7783 9.34914 11.7783 5.14775C11.7783 0.946357 10.8617 0.106079 6.27832 0.106079C1.69499 0.106079 0.77832 0.946357 0.77832 5.14775C0.77832 9.34914 1.69499 10.1894 6.27832 10.1894ZM10.6744 7.48391C10.797 6.95091 10.8617 6.20739 10.8617 5.14775C10.8617 4.18183 10.8079 3.47858 10.7056 2.95803C10.4582 3.28569 10.1352 3.68543 9.75837 4.08655C9.37613 4.49347 8.93091 4.91008 8.44592 5.25478C9.08818 5.85744 9.70334 6.47582 10.1875 6.97558C10.3699 7.16386 10.534 7.33567 10.6744 7.48391ZM10.2806 8.40305C10.2709 8.39275 10.2611 8.38218 10.2509 8.37134C10.0768 8.1852 9.82784 7.92177 9.5291 7.6134C9.00052 7.06777 8.31917 6.38456 7.6226 5.74059C7.19964 5.93747 6.74643 6.06441 6.27832 6.06441C5.81021 6.06441 5.357 5.93747 4.93404 5.74059C4.23747 6.38456 3.55612 7.06777 3.02754 7.6134C2.7288 7.92177 2.47983 8.1852 2.30571 8.37134C2.29558 8.38217 2.2857 8.39275 2.27608 8.40305C2.32429 8.46448 2.37529 8.51916 2.42898 8.56838C2.66267 8.78259 3.0282 8.96768 3.66315 9.09322C4.30408 9.21994 5.14897 9.27275 6.27832 9.27275C7.40767 9.27275 8.25256 9.21994 8.89349 9.09322C9.52844 8.96768 9.89397 8.78259 10.1277 8.56838C10.1814 8.51916 10.2323 8.46448 10.2806 8.40305ZM1.88219 7.48391C1.75965 6.95091 1.69499 6.20739 1.69499 5.14775C1.69499 4.18183 1.74872 3.47859 1.85104 2.95803C2.09844 3.28569 2.42149 3.68543 2.79827 4.08655C3.18051 4.49347 3.62573 4.91008 4.11072 5.25478C3.46846 5.85744 2.8533 6.47582 2.36916 6.97558C2.18676 7.16386 2.02261 7.33567 1.88219 7.48391ZM10.1277 1.72712C10.1937 1.78765 10.2556 1.85643 10.3134 1.93587C10.2552 2.02034 10.1822 2.12391 10.0961 2.24155C9.85181 2.57514 9.50442 3.01802 9.09024 3.45895C8.67445 3.90158 8.20174 4.33108 7.7083 4.64725C7.21164 4.96549 6.72709 5.14775 6.27832 5.14775C5.82955 5.14775 5.345 4.96549 4.84834 4.64725C4.3549 4.33108 3.88219 3.90158 3.4664 3.45895C3.05222 3.01802 2.70483 2.57514 2.46056 2.24155C2.37442 2.12391 2.30146 2.02034 2.24329 1.93587C2.301 1.85643 2.36295 1.78765 2.42898 1.72712C2.66267 1.51291 3.0282 1.32781 3.66315 1.20228C4.30408 1.07556 5.14897 1.02275 6.27832 1.02275C7.40767 1.02275 8.25256 1.07556 8.89349 1.20228C9.52844 1.32781 9.89397 1.51291 10.1277 1.72712Z" fill="#EAB738" />
                  </svg>

                </div>
                <div className='flex flex-col justify-center items-center pt-6'>
                  <h4 className='text-gray2 text-[12px] font-medium uppercase leading-[12px] '>Email address</h4>
                  <p className='text-black1 text-[12px] font-normal uppercase leading-[18px] pt-2'><a href="mailto: contact@setlyluxurycar.comm">contact@setlyluxurycar.com</a></p>
                </div>

              </div>

            </div>

          </div>





        </div>
      </div>
      <div>

      </div>
    </div >
  )
}
