import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import React from "react";
import AppWalletProvider from "@/app/ui/contexts/AppWalletProvider";
import Sidebar from '@/app/ui/sidebar';
import Header from '@/app/ui/header';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Non-tech Commit Tracker",
  description: "Non-tech Commit Tracker",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}>
        <AppWalletProvider>
          <Sidebar />
          <div className="ml-20 flex-1 flex flex-col w-full">
            <Header />
            {children}
          </div>
        </AppWalletProvider>
      </body>
    </html>
  );
}
