
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Suspense } from 'react';
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SETLY LUXURY CARS",
  description: "Your trusted car rental agency in Morocco.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex justify-center items-center bg-[#F8F8F8]`}>
        <Suspense>
          {children}
        </Suspense>
      </body>
    </html>
  );
}
