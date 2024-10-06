/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";

interface Props {
  className: string;
}

export const Group = ({ className }: Props): JSX.Element => {
  return (
    <div className={`relative w-[1440px] h-[360px] ${className}`}>
      <div className="absolute w-[1440px] h-[268px] top-0 left-0 bg-[#18181c]">
        <div className="absolute w-[1440px] h-[268px] top-0 left-0 bg-[#18181c]" />
        <p className="absolute w-[420px] top-[124px] left-[165px] [font-family:'Poppins',Helvetica] font-normal text-[#9e9e9e] text-sm tracking-[0] leading-7">
          Freire is a decentralized empowerment tool for community contributors based on the concept of liquid
          participatory democracy.
        </p>
        <div className="absolute w-[143px] top-[82px] left-[1000px] [font-family:'Poppins',Helvetica] font-normal text-[#9e9e9e] text-sm tracking-[0] leading-[38px]">
          Home
          <br />
          Explore
          <br />
          Create Community
          <br />
          Get in Touch
        </div>
        <div className="absolute w-[100px] top-[82px] left-[1189px] [font-family:'Poppins',Helvetica] font-normal text-[#9e9e9e] text-sm tracking-[0] leading-[38px]">
          <br />
          Collaboration
          <br />
          Feedback
          <br />
          Log out
        </div>
        <div className="absolute top-[49px] left-[1000px] [font-family:'Poppins',Helvetica] font-semibold text-white text-base text-center tracking-[0] leading-8 whitespace-nowrap">
          Guide
        </div>
        <img className="absolute w-[27px] h-[45px] top-[60px] left-[165px]" alt="Group" src="/img/group-128.png" />
      </div>
      <div className="absolute w-[1442px] h-[92px] top-[268px] left-0">
        <div className="relative w-[1440px] h-[92px] bg-black">
          <p className="absolute top-8 left-[145px] [font-family:'Poppins',Helvetica] font-normal text-[#9e9e9e] text-sm tracking-[0] leading-7 whitespace-nowrap">
            All Rights Reserved by Freire
          </p>
          <div className="absolute w-10 h-10 top-[26px] left-[1235px] bg-[#18181c] rounded-2xl">
            <img className="absolute w-[19px] h-4 top-3 left-[11px]" alt="Telegram" src="/img/telegram.svg" />
          </div>
          <div className="absolute w-10 h-10 top-[26px] left-[1179px] bg-[#18181c] rounded-2xl">
            <img className="absolute w-[21px] h-5 top-2.5 left-[9px]" alt="Path" src="/img/path-16.svg" />
          </div>
          <div className="absolute w-10 h-10 top-[26px] left-[1123px] bg-[#18181c] rounded-2xl">
            <img className="absolute w-[18px] h-[15px] top-3 left-[11px]" alt="Elements" src="/img/elements.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
