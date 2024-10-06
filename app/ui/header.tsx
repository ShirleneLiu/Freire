'use client';

// components/Header.tsx
import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";



const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-black px-8">
      {/* <div className="">
        <img src="/Freire-White.svg" alt="Site Icon" className="w-10 h-10" />
      </div> */}
      <div className="flex items-center">
        <img src="/Freire-White.svg" alt="Freire white" className="w-6 h-10" />
        <div className="ml-2 [font-family:'Poppins',Helvetica] font-semibold text-white text-3xl leading-none">
          Freire
        </div>
      </div>
      <div className="flex gap-4">
        <WalletMultiButton className="ml-4" />
      </div>
    </div>
  );
};

export default Header;