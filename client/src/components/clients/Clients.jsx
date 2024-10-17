// import React from 'react'
import Marquee from "react-fast-marquee";
import interAid from "../../assets/images/brand_images/interaid.png";
import kickOff from "../../assets/images/brand_images/kick_off.png";
import puppetBrush from "../../assets/images/brand_images/puppetbrush.png";
import qahaf from "../../assets/images/brand_images/qahaf.png";
import quantumQube from "../../assets/images/brand_images/quantum_qube.png";
import sweetCake from "../../assets/images/brand_images/sweet_cake.png";

export default function Clients() {
  return (
    <div className="w-full relative py-8 lg:py-16">
      <div className="relative py-10 bg-gray-950 lg:py-20 px-3 sm:px-5 md:px-10 lg:px-20 font-bodyFont shadow-xl shadow-gray-1000 z-10 flex flex-col gap-7 lg:gap-10">
        <p className="uppercase text-xs md:text-base text-center flex flex-row gap-2 justify-center items-center leading-none text-titleColor">
          <div className="h-[1px] w-8 bg-accentColor mb-1"></div>
          Brand Partners
          <div className="h-[1px] w-8 bg-accentColor mb-1"></div>
        </p>
        <Marquee
          autoFill={true}
          speed={100}
          direction="left"
          className="hover:cursor-pointer"
        >
          <div className="flex justify-center items-center">
            <img
              className="w-[100px] md:w-[200px] mx-1 md:mx-4"
              src={interAid}
              alt="inter-aid"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              className="w-[100px] md:w-[200px] mx-1 md:mx-4"
              src={sweetCake}
              alt="inter-aid"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              className="w-[100px] md:w-[200px] mx-1 md:mx-4"
              src={qahaf}
              alt="inter-aid"
            />
          </div>

          <div className="flex justify-center items-center">
            <img
              className="w-[100px] md:w-[200px] mx-1 md:mx-4"
              src={quantumQube}
              alt="inter-aid"
            />
          </div>

          <div className="flex justify-center items-center">
            <img
              className="w-[100px] md:w-[200px] mx-1 md:mx-4"
              src={puppetBrush}
              alt="inter-aid"
            />
          </div>

          <div className="flex justify-center items-center">
            <img
              className="w-[100px] md:w-[200px] mx-1 md:mx-4"
              src={kickOff}
              alt="inter-aid"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
}
