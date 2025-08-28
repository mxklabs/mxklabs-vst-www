'use client'

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar.tsx";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect, useState } from 'react';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Removed metadata export to comply with Next.js rules for client components

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  // State to control navbar visibility
  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > window.innerHeight * 0.7) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-mxk-white h-screen ">
          {/* Hide navbar initially, show after scrolling past hero */}
          <header className={`sticky top-0 z-50 transition-opacity duration-500 ${showNavbar ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <Navbar />
          </header>
          <div className="border-1 border-white">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
