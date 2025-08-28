'use client'

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar.tsx";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

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

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="bg-mxk-white h-screen ">
        <header className="sticky top-0 z-50"><Navbar /></header>
          {/* <div className="bg-white max-w-6xl mx-auto py-16 px-1 space-y-8"> */}
          <div className="border-1 border-white">
            {children}
            </div>
          {/* </div> */}
        </div>
      </body>
    </html>
  );
}
