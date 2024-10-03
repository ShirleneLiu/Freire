'use client';

// components/Header.tsx
import React from "react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";



const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-20 right-0 flex justify-between items-center p-4 bg-gray-100 shadow-md z-10">
      <div className="text-xl font-bold">non-tech-commit-tracker</div>
      <WalletMultiButton style={{}} />
    </header>
  );
};

export default Header;