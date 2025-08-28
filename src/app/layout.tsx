import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mxklabs/vst",
  description: "Virtual Instruments powered by AI/ML",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
