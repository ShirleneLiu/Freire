"use client";

// page.tsx
import { Group } from "@/app/components/Group";
import Link from 'next/link';


export default function Home() {
  return (
    <main className="flex-1 p-4 w-full bg-black text-white min-h-screen">
      {/* <div>
        <Tabs communities={communities} />
      </div> */}
      <div className="bg-black flex flex-row justify-center w-full">
        <div className="bg-black w-[1440px] h-[4942px] relative">
          <div className="absolute w-[1440px] h-[1281px] top-[-30px] left-0">
            <img className="absolute w-[1227px] h-[847px] top-[30px] left-[107px]" alt="Group" src="/img/group-95.png" />
            <img className="absolute w-[1440px] h-[474px] top-[807px] left-0" alt="Subtract" src="/img/subtract.svg" />
            <div className="absolute w-[538px] h-[538px] top-0 left-[451px] rounded-[269px] [background:radial-gradient(50%_50%_at_50%_50%,rgb(34.15,34.15,40.37)_0%,rgba(34.15,34.15,40.37,0)_100%)]" />
            <p className="absolute top-[198px] left-[233px] [font-family:'Poppins',Helvetica] font-semibold text-white text-[64px] text-center tracking-[0] leading-[80px]">
              {" "}
              Decentralized Empowerment <br />
              Tool For Communities
            </p>
            <p className="absolute w-[577px] top-[376px] left-[432px] [font-family:'Poppins',Helvetica] font-normal text-[#9e9e9e] text-lg text-center tracking-[0] leading-7">
              Every contributor receives their reputation which empowers them without relying on a centralized authority.
            </p>
            <div className="flex w-[103px] items-center justify-center gap-2.5 px-7 py-3 absolute top-[469px] left-[676px] rounded-[5px] [background:linear-gradient(180deg,rgb(255,151.94,151.94)_0%,rgb(128.41,83.94,255)_100%)]">
              <Link href="/communities">
                <div className="relative w-[60px] mt-[-1.00px] ml-[-6.50px] mr-[-6.50px] [font-family:'Poppins',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-5 cursor-pointer">
                  Explore
                </div>
              </Link>
            </div>
            <div className="absolute w-[866px] h-[553px] top-[581px] left-[287px] bg-[#131415] rounded-[28px]" />
            <div className="absolute w-[246px] h-[460px] top-[624px] left-[340px] bg-[#222228] rounded-[20px]" />
            <div className="absolute w-[231px] h-[217px] top-[624px] left-[614px] bg-[#222228] rounded-[20px]" />
            <div className="absolute w-[231px] h-[217px] top-[867px] left-[614px] bg-[#222228] rounded-[20px]" />
            <div className="absolute w-[230px] h-[328px] top-[624px] left-[873px] bg-[#222228] rounded-[20px]" />
            <div className="absolute w-[230px] h-[103px] top-[978px] left-[873px] bg-[#222228] rounded-[20px]" />
            <div className="absolute w-24 h-24 top-[333px] left-[1223px] rounded-[48px] blur-[20px] [background:radial-gradient(50%_50%_at_50%_50%,rgb(73.31,73.31,85)_0%,rgb(20.19,20.19,20.19)_100%)]" />
            <div className="absolute w-16 h-16 top-[100px] left-[656px] rounded-[32px] blur-[20px] [background:radial-gradient(50%_50%_at_50%_50%,rgb(73.31,73.31,85)_0%,rgb(20.19,20.19,20.19)_100%)]" />
            <div className="absolute w-[130px] h-[130px] top-[430px] left-[122px] rounded-[65px] blur-[30px] [background:radial-gradient(50%_50%_at_50%_50%,rgb(73.31,73.31,85)_0%,rgb(20.19,20.19,20.19)_100%)]" />
            <div className="absolute w-48 h-[54px] top-[693px] left-[893px]">
              <img
                className="absolute w-[42px] h-[42px] top-0 left-0 object-cover"
                alt="Ellipse"
                src="/img/ellipse-4-4.png"
              />
              <div className="absolute w-[106px] h-5 top-[11px] left-[59px]">
                <div className="absolute w-[74px] h-1.5 top-0 left-0 bg-[#313139] rounded-[33px]" />
                <div className="absolute w-6 h-1.5 top-0 left-[82px] bg-[#313139] rounded-[33px]" />
                <div className="absolute w-6 h-1.5 top-3.5 left-[46px] bg-[#313139] rounded-[33px]" />
                <div className="absolute w-9 h-1.5 top-3.5 left-0 bg-[#313139] rounded-[33px]" />
              </div>
              <img className="w-48 top-[53px] left-0 absolute h-px object-cover" alt="Line" src="/img/line-14-3.svg" />
            </div>
            <div className="absolute w-48 h-[54px] top-[752px] left-[893px]">
              <img
                className="absolute w-[42px] h-[42px] top-0 left-0 object-cover"
                alt="Ellipse"
                src="/img/ellipse-4-1.png"
              />
              <div className="absolute w-[106px] h-5 top-[11px] left-[59px]">
                <div className="absolute w-[74px] h-1.5 top-0 left-0 bg-[#313139] rounded-[33px]" />
                <div className="absolute w-6 h-1.5 top-0 left-[82px] bg-[#313139] rounded-[33px]" />
                <div className="absolute w-6 h-1.5 top-3.5 left-[46px] bg-[#313139] rounded-[33px]" />
                <div className="absolute w-9 h-1.5 top-3.5 left-0 bg-[#313139] rounded-[33px]" />
              </div>
              <img className="w-48 top-[53px] left-0 absolute h-px object-cover" alt="Line" src="/img/line-14-3.svg" />
            </div>
            <div className="absolute w-48 h-[54px] top-[811px] left-[893px]">
              <img
                className="absolute w-[42px] h-[42px] top-0 left-0 object-cover"
                alt="Ellipse"
                src="/img/ellipse-4-2.png"
              />
              <div className="absolute w-[106px] h-5 top-[11px] left-[59px]">
                <div className="absolute w-[74px] h-1.5 top-0 left-0 bg-[#313139] rounded-[33px]" />
                <div className="absolute w-6 h-1.5 top-0 left-[82px] bg-[#313139] rounded-[33px]" />
                <div className="absolute w-6 h-1.5 top-3.5 left-[46px] bg-[#313139] rounded-[33px]" />
                <div className="absolute w-9 h-1.5 top-3.5 left-0 bg-[#313139] rounded-[33px]" />
              </div>
              <img className="w-48 top-[53px] left-0 absolute h-px object-cover" alt="Line" src="/img/line-14-3.svg" />
            </div>
            <div className="absolute w-48 h-[54px] top-[870px] left-[893px]">
              <img
                className="absolute w-[42px] h-[42px] top-0 left-0 object-cover"
                alt="Ellipse"
                src="/img/ellipse-4-3.png"
              />
              <div className="absolute w-[106px] h-5 top-[11px] left-[59px]">
                <div className="absolute w-[74px] h-1.5 top-0 left-0 bg-[#313139] rounded-[33px]" />
                <div className="absolute w-6 h-1.5 top-0 left-[82px] bg-[#313139] rounded-[33px]" />
                <div className="absolute w-6 h-1.5 top-3.5 left-[46px] bg-[#313139] rounded-[33px]" />
                <div className="absolute w-9 h-1.5 top-3.5 left-0 bg-[#313139] rounded-[33px]" />
              </div>
              <img className="w-48 top-[53px] left-0 absolute h-px object-cover" alt="Line" src="/img/line-14-3.svg" />
            </div>
            <div className="absolute w-5 h-5 top-[649px] left-[1065px] bg-[#313139] rounded-[5px]" />
            <div className="absolute w-48 h-[155px] top-[649px] left-[634px]">
              <div className="relative h-[155px]">
                <img className="absolute w-[111px] h-[111px] top-11 left-10" alt="Vector" src="/img/vector.svg" />
                <img className="absolute w-[92px] h-[92px] top-[53px] left-[49px]" alt="Vector" src="/img/vector-1.svg" />
                <img className="absolute w-[110px] h-[110px] top-11 left-10" alt="Vector" src="/img/vector-2.svg" />
                <div className="absolute w-48 h-[113px] top-0 left-0">
                  <div className="absolute w-[120px] h-[113px] top-0 left-0">
                    <div className="absolute w-[74px] h-1.5 top-0 left-0 bg-[#313139] rounded-[33px]" />
                    <div className="absolute w-6 h-1.5 top-0 left-[82px] bg-[#313139] rounded-[33px]" />
                    <div className="absolute w-6 h-1.5 top-3.5 left-[46px] bg-[#313139] rounded-[33px]" />
                    <div className="absolute w-9 h-1.5 top-3.5 left-0 bg-[#313139] rounded-[33px]" />
                    <div className="absolute w-[43px] h-[30px] top-[83px] left-[77px]">
                      <div className="relative h-[30px]">
                        <div className="w-6 h-1.5 top-4 -left-0.5 rounded-[33px] rotate-[46.36deg] absolute bg-[#313139]" />
                        <div className="absolute w-9 h-1.5 top-3 left-2.5 bg-[#313139] rounded-[33px] -rotate-45" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute w-5 h-5 top-0 left-[172px] bg-[#313139] rounded-[5px]" />
                </div>
              </div>
            </div>
            <div className="absolute w-[214px] h-[184px] top-[752px] left-[879px] rotate-[-180.00deg] [background:linear-gradient(180deg,rgb(34.15,34.15,40.37)_0%,rgba(34.15,34.15,40.37,0)_100%)]" />
            <div className="absolute w-[146px] h-5 top-[735px] left-[369px]">
              <div className="absolute w-[106px] h-5 top-0 left-10">
                <div className="absolute w-[74px] h-1.5 top-0 left-0 bg-[#313139] rounded-[33px]" />
                <div className="absolute w-6 h-1.5 top-0 left-[82px] bg-[#313139] rounded-[33px]" />
                <div className="absolute w-6 h-1.5 top-3.5 left-[46px] bg-[#313139] rounded-[33px]" />
                <div className="absolute w-9 h-1.5 top-3.5 left-0 bg-[#313139] rounded-[33px]" />
              </div>
              <div className="w-5 h-5 top-0 left-0 rounded-[5px] absolute bg-[#313139]" />
            </div>
            <div className="absolute w-[146px] h-5 top-[823px] left-[369px]">
              <div className="absolute w-[106px] h-5 top-0 left-10">
                <div className="absolute w-[74px] h-1.5 top-0 left-0 bg-[#313139] rounded-[33px]" />
                <div className="absolute w-6 h-1.5 top-0 left-[82px] bg-[#313139] rounded-[33px]" />
                <div className="absolute w-6 h-1.5 top-3.5 left-[46px] bg-[#313139] rounded-[33px]" />
                <div className="absolute w-9 h-1.5 top-3.5 left-0 bg-[#313139] rounded-[33px]" />
              </div>
              <div className="w-5 h-5 top-0 left-0 rounded-[5px] absolute bg-[#313139]" />
            </div>
            <div className="absolute w-[146px] h-5 top-[867px] left-[369px]">
              <div className="absolute w-[106px] h-5 top-0 left-10">
                <div className="absolute w-[74px] h-1.5 top-0 left-0 bg-[#313139] rounded-[33px]" />
                <div className="absolute w-6 h-1.5 top-0 left-[82px] bg-[#313139] rounded-[33px]" />
                <div className="absolute w-6 h-1.5 top-3.5 left-[46px] bg-[#313139] rounded-[33px]" />
                <div className="absolute w-9 h-1.5 top-3.5 left-0 bg-[#313139] rounded-[33px]" />
              </div>
              <div className="w-5 h-5 top-0 left-0 rounded-[5px] absolute bg-[#313139]" />
            </div>
            <div className="absolute w-[146px] h-5 top-[911px] left-[369px]">
              <div className="absolute w-[106px] h-5 top-0 left-10">
                <div className="absolute w-[74px] h-1.5 top-0 left-0 bg-[#313139] rounded-[33px]" />
                <div className="absolute w-6 h-1.5 top-0 left-[82px] bg-[#313139] rounded-[33px]" />
                <div className="absolute w-6 h-1.5 top-3.5 left-[46px] bg-[#313139] rounded-[33px]" />
                <div className="absolute w-9 h-1.5 top-3.5 left-0 bg-[#313139] rounded-[33px]" />
              </div>
              <div className="w-5 h-5 top-0 left-0 rounded-[5px] absolute bg-[#313139]" />
            </div>
            <div className="absolute w-[106px] h-[81px] top-[975px] left-[409px]">
              <img
                className="absolute w-[42px] h-[42px] top-0 left-8 object-cover"
                alt="Ellipse"
                src="/img/ellipse-4-4.png"
              />
              <div className="absolute w-[106px] h-5 top-[61px] left-0">
                <div className="absolute w-14 h-1.5 top-0 left-0 bg-[#313139] rounded-[33px]" />
                <div className="absolute w-[42px] h-1.5 top-0 left-16 bg-[#313139] rounded-[33px]" />
                <div className="absolute w-[62px] h-1.5 top-3.5 left-[22px] bg-[#313139] rounded-[33px]" />
              </div>
            </div>
            <img
              className="absolute w-6 h-10 top-[646px] left-[450px]"
              alt="Freire white"
              src="/img/freire-white-1.svg"
            />
            <img
              className="w-[184px] top-[701px] left-[369px] absolute h-px object-cover"
              alt="Line"
              src="/img/line-15.svg"
            />
            <div className="absolute w-[146px] h-5 top-[779px] left-[369px]">
              <div className="absolute w-[106px] h-5 top-0 left-10">
                <div className="absolute w-[74px] h-1.5 top-0 left-0 bg-[#313139] rounded-[33px]" />
                <div className="absolute w-6 h-1.5 top-0 left-[82px] bg-[#313139] rounded-[33px]" />
                <div className="absolute w-6 h-1.5 top-3.5 left-[46px] bg-[#313139] rounded-[33px]" />
                <div className="absolute w-9 h-1.5 top-3.5 left-0 bg-[#313139] rounded-[33px]" />
              </div>
              <div className="w-5 h-5 top-0 left-0 rounded-[5px] absolute bg-[#313139]" />
            </div>
            <img className="absolute w-[172px] h-[93px] top-[960px] left-[644px]" alt="Group" src="/img/group-132.png" />
            <div className="absolute w-48 h-5 top-[892px] left-[638px]">
              <div className="absolute w-[106px] h-5 top-0 left-0">
                <div className="absolute w-[74px] h-1.5 top-0 left-0 bg-[#313139] rounded-[33px]" />
                <div className="absolute w-6 h-1.5 top-0 left-[82px] bg-[#313139] rounded-[33px]" />
                <div className="absolute w-6 h-1.5 top-3.5 left-[46px] bg-[#313139] rounded-[33px]" />
                <div className="absolute w-9 h-1.5 top-3.5 left-0 bg-[#313139] rounded-[33px]" />
              </div>
              <div className="absolute w-5 h-5 top-0 left-[172px] bg-[#313139] rounded-[5px]" />
            </div>
            <img className="w-48 top-[929px] left-[638px] absolute h-px object-cover" alt="Line" src="/img/line-16.svg" />


            <div className="absolute h-px top-[658px] left-[896px] [font-family:'Poppins',Helvetica] font-semibold text-[#313138] text-xl text-center tracking-[0] leading-[0.1px]">
              Contributors
            </div>
            <div className="flex w-[149px] items-center justify-center gap-2.5 px-7 py-3 absolute top-[1012px] left-[914px] rounded-[5px] [background:linear-gradient(180deg,rgb(255,151.94,151.94)_0%,rgb(128.41,83.94,255)_100%)]">
              <Link href="/communities">
                <div className="relative w-32 mt-[-1.00px] ml-[-17.50px] mr-[-17.50px] [font-family:'Poppins',Helvetica] font-normal text-white text-sm text-center tracking-[0] leading-5">
                  Claim Reputation
                </div>
              </Link>
            </div>
          </div>
          <div className="absolute w-[678px] h-[678px] top-[2141px] left-[130px]">
            <img className="absolute w-[678px] h-[678px] top-0 left-0" alt="Group" src="/img/icon-cosmos.svg" />
          </div>
          <div className="absolute w-[354px] h-[371px] top-[1612px] left-[925px]">
            <div className="absolute w-[354px] h-[371px] top-0 left-0">
              <div className="relative w-[350px] h-[371px] bg-[#17171b] rounded-[20px]">
                <p className="absolute w-[303px] top-60 left-6 [font-family:'Poppins',Helvetica] font-normal text-[#9e9e9e] text-sm text-center tracking-[0] leading-7">
                  The reputation data also provides insights for other platforms and applications,  facilitating talent
                  discovery and contributing meaningfully to society.
                </p>
                <div className="absolute w-[104px] h-[104px] top-[50px] left-[123px] bg-[#222228] rounded-[30px]" />
                <div className="absolute top-[193px] left-[94px] [font-family:'Poppins',Helvetica] font-semibold text-white text-xl text-center tracking-[0] leading-8 whitespace-nowrap">
                  A Data Business
                </div>
              </div>
            </div>
            <div className="absolute w-[104px] h-[104px] top-[50px] left-[123px] bg-[#222228] rounded-[30px]" />
            <img className="absolute w-11 h-[43px] top-20 left-[153px]" alt="Group" src="/img/group-267.png" />
          </div>
          <div className="absolute w-[1440px] h-[921px] top-[2945px] left-0">
            <div className="absolute w-[1440px] h-[725px] top-0 left-0 bg-[#17171b]" />
            <p className="absolute top-[111px] left-[406px] [font-family:'Poppins',Helvetica] font-semibold text-white text-5xl text-center tracking-[0] leading-[64px]">
              DAOs &amp; Communities We <br />
              Collaborate With
            </p>
            <div className="absolute w-40 h-[92px] top-[310px] left-[165px] bg-black rounded-[10px]" />
            <div className="absolute w-40 h-[92px] top-[310px] left-[355px] bg-black rounded-[10px]" />
            <div className="absolute w-40 h-[92px] top-[310px] left-[545px] bg-black rounded-[10px]" />
            <div className="absolute w-40 h-[92px] top-[310px] left-[735px] bg-black rounded-[10px]" />
            <div className="absolute w-40 h-[92px] top-[310px] left-[925px] bg-black rounded-[10px]" />
            <div className="absolute w-40 h-[92px] top-[310px] left-[1115px] bg-black rounded-[10px]" />
            <div className="absolute w-[1110px] h-[425px] top-[496px] left-[165px] rounded-[40px] [background:linear-gradient(180deg,rgb(255,151.94,151.94)_0%,rgb(128.41,83.94,255)_100%)]" />
            <div className="absolute top-[594px] left-[226px] [font-family:'Poppins',Helvetica] font-normal text-white text-xl text-center tracking-[0] leading-8 whitespace-nowrap">
              Love our Our Tool?
            </div>
            <div className="inline-flex items-start gap-2.5 px-7 py-3 absolute top-[805px] left-[225px] bg-black rounded-[5px]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
                Let’s Start !
              </div>
            </div>
            <img className="absolute w-[82px] h-[35px] top-[339px] left-[204px]" alt="Group" src="/img/group-274.png" />
            <img className="absolute w-[95px] h-[25px] top-[343px] left-[389px]" alt="Group" src="/img/group-96.png" />
            <img className="absolute w-[105px] h-[21px] top-[345px] left-[572px]" alt="Group" src="/img/group-97.png" />
            <img className="absolute w-[85px] h-[19px] top-[347px] left-[769px]" alt="Group" src="/img/group-98.png" />
            <img className="absolute w-[70px] h-[25px] top-[344px] left-[970px]" alt="Group" src="/img/group-99.png" />
            <img className="absolute w-[70px] h-6 top-[344px] left-[1159px]" alt="Group" src="/img/group-100.png" />
            <img className="absolute w-[554px] h-[369px] top-[533px] left-[721px]" alt="Frame" src="/img/frame.svg" />
            <p className="absolute w-[574px] top-[638px] left-[225px] [font-family:'Poppins',Helvetica] font-semibold text-white text-5xl tracking-[0] leading-[65px]">
              Start to Create Your Community Channel
            </p>
          </div>
          <div className="absolute top-[1427px] left-[165px] [font-family:'Poppins',Helvetica] font-semibold text-white text-5xl text-center tracking-[0] leading-[80px] whitespace-nowrap">
            Feature Boxes
          </div>
          <p className="absolute w-[577px] top-[1512px] left-[165px] [font-family:'Poppins',Helvetica] font-normal text-[#9e9e9e] text-lg tracking-[0] leading-7">
            Build an open contributor reputation system derives from concept of liquid participatory democracy.
          </p>
          <div className="absolute w-[350px] h-[371px] top-[1612px] left-[165px] bg-[#17171b] rounded-[20px]">
            <p className="absolute w-[303px] top-[239px] left-6 [font-family:'Poppins',Helvetica] font-normal text-[#9e9e9e] text-sm text-center tracking-[0] leading-7">
              Integrating&nbsp;&nbsp;cross-platform data within the community, including GitHub, Notion and others, allows
              for contributions to be automatically recorded.
            </p>
            <div className="absolute w-[104px] h-[104px] top-[50px] left-[123px] bg-[#222228] rounded-[30px]">
              <img className="absolute w-11 h-[45px] top-[29px] left-[30px]" alt="Group" src="/img/group.png" />
            </div>
            <div className="absolute top-48 left-[66px] [font-family:'Poppins',Helvetica] font-semibold text-white text-xl text-center tracking-[0] leading-8 whitespace-nowrap">
              A Reputation Resume
            </div>
          </div>
          <div className="absolute w-[350px] h-[371px] top-[1612px] left-[545px] bg-[#17171b] rounded-[20px]">
            <p className="absolute w-[303px] top-[239px] left-6 [font-family:'Poppins',Helvetica] font-normal text-[#9e9e9e] text-sm text-center tracking-[0] leading-7">
              Using contributor reputation to determine community governance makes the process more democratic,
              transparent, fair, and efficient.
            </p>
            <div className="absolute w-[104px] h-[104px] top-[50px] left-[123px] bg-[#222228] rounded-[30px]">
              <img className="absolute w-[45px] h-[46px] top-[29px] left-[31px]" alt="Group" src="/img/group-1.png" />
            </div>
            <div className="absolute top-48 left-[79px] [font-family:'Poppins',Helvetica] font-semibold text-white text-xl text-center tracking-[0] leading-8 whitespace-nowrap">
              A Governance Tool
            </div>
          </div>
          <div className="flex w-[408px] items-start gap-2.5 px-7 py-3 absolute top-[4135px] left-[735px] bg-[#18181c] rounded-[5px]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#9e9e9e] text-sm tracking-[0] leading-5 whitespace-nowrap">
              Your Email
            </div>
          </div>
          <div className="flex w-[408px] items-start gap-2.5 px-7 py-3 absolute top-[4197px] left-[735px] bg-[#18181c] rounded-[5px]">
            <div className="relative w-fit mt-[-1.00px] leading-5 [font-family:'Poppins',Helvetica] font-normal text-[#9e9e9e] text-sm tracking-[0] whitespace-nowrap">
              Name
            </div>
          </div>
          <div className="flex w-[408px] h-[156px] items-start gap-2.5 px-7 py-3 absolute top-[4259px] left-[735px] bg-[#18181c] rounded-[5px]">
            <p className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-[#9e9e9e] text-sm tracking-[0] leading-5 whitespace-nowrap">
              Anything you want to tell us.
            </p>
          </div>
          <div className="absolute top-[3960px] left-[735px] [font-family:'Poppins',Helvetica] font-semibold text-white text-5xl text-center tracking-[0] leading-[80px] whitespace-nowrap">
            Get In Touch
          </div>
          <p className="absolute w-[503px] top-[4040px] left-[735px] [font-family:'Poppins',Helvetica] font-normal text-[#9e9e9e] text-lg tracking-[0] leading-7">
            If you are interested in Freire, <br />
            feel free to reach out!
          </p>
          <div className="inline-flex items-start gap-2.5 px-7 py-3 absolute top-[4433px] left-[735px] rounded-[5px] [background:linear-gradient(180deg,rgb(255,151.94,151.94)_0%,rgb(128.41,83.94,255)_100%)]">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
              Get in Touch
            </div>
          </div>
          <p className="absolute w-[443px] top-[2301px] left-[832px] [font-family:'Poppins',Helvetica] font-semibold text-white text-5xl tracking-[0] leading-[64px]">
            Integrate cross-platform data in one.
          </p>
          <p className="absolute w-[385px] top-[2517px] left-[832px] [font-family:'Poppins',Helvetica] font-normal text-[#9e9e9e] text-lg tracking-[0] leading-7">
            Every contributor receives their reputation which empowers them without relying on a centralized authority.
          </p>
          <div className="inline-flex items-start gap-2.5 px-7 py-3 absolute top-[2630px] left-[830px] rounded-[5px] [background:linear-gradient(180deg,rgb(255,151.94,151.94)_0%,rgb(128.41,83.94,255)_100%)]">
            <Link href="/communities">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Poppins',Helvetica] font-normal text-white text-sm tracking-[0] leading-5 whitespace-nowrap">
                Check My Reputation Resume
              </div>
            </Link>
          </div>
          <Group className="!absolute !left-0 !top-[4582px]" />
          <div className="absolute w-[582px] h-[628px] top-[3933px] left-[108px]">
            <img className="absolute w-[542px] h-[542px] top-7 left-[22px]" alt="Group" src="/img/group-133.png" />
            <div className="absolute w-24 h-24 top-[532px] left-[486px] rounded-[48px] blur-[20px] [background:radial-gradient(50%_50%_at_50%_50%,rgb(73.31,73.31,85)_0%,rgb(20.19,20.19,20.19)_100%)]" />
            <div className="absolute w-16 h-16 top-0 left-0 rounded-[32px] blur-[20px] [background:radial-gradient(50%_50%_at_50%_50%,rgb(73.31,73.31,85)_0%,rgb(20.19,20.19,20.19)_100%)]" />
          </div>
        </div>
      </div>
    </main>
  );
}
