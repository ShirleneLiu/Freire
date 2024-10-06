'use client';

// components/Header.tsx
import React from "react";
// import Image from 'next/image';
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import Link from 'next/link';
import { usePathname } from 'next/navigation';



const Header: React.FC = () => {
  
  const pathname = usePathname();
  const isHome = pathname === '/';

  return (
    <div className="flex justify-between items-center p-4 bg-black px-8">
      <div className="flex items-center">
        <img src="/Freire-White.svg" alt="Freire white" className="w-6 h-10" />
        <div className="ml-2 [font-family:'Poppins',Helvetica] font-semibold text-white text-3xl leading-none">
          Freire
        </div>
      </div>
      <div className="flex gap-4 items-center">
      {isHome ? (
          <span className="text-center [font-family:'Poppins',Helvetica] font-normal text-[#9e9e9e] text-sm tracking-[0] whitespace-nowrap">
            Home
          </span>
        ) : (
          <Link href="/" className="text-center [font-family:'Poppins',Helvetica] font-normal text-[#9e9e9e] text-sm tracking-[0] whitespace-nowrap">
            Home
          </Link>
        )}
        <WalletMultiButton className="ml-4" />
      </div>
    </div>
  );
};


export default Header;