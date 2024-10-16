// import React from 'react'
import interAid from "../../assets/images/brand_images/interaid.png";
import kickOff from "../../assets/images/brand_images/kick_off.png";
import puppetBrush from "../../assets/images/brand_images/puppetbrush.png";
import qahaf from "../../assets/images/brand_images/qahaf.png";
import quantumQube from "../../assets/images/brand_images/quantum_qube.png";
import sweetCake from "../../assets/images/brand_images/sweet_cake.png";

export default function Clients() {
  return (
    <div className="w-full relative py-10 lg:py-20">
      <div className="w-full h-1/2 bg-titleColor absolute top-0 z-0"></div>
      <div className="relative bg-gray-950 py-5 lg:py-10 px-3 mx-3 sm:mx-5 md:mx-10 lg:mx-20 rounded-3xl sm:px-5 md:px-10 lg:px-20 font-bodyFont text-secondaryColor shadow-xl shadow-gray-700 z-10">
        <div className="w-full text-center font-bold font-titleFont text-titleColor uppercase text-xl lg:text-5xl leading-3">
          Honorable{" "}
          <span className="lowercase font-accentFont text-accentColor font-normal text-3xl lg:text-7xl">
            Clients
          </span>
        </div>
        <div className="w-full grid grid-cols-3 md:grid-cols-4 pt-10 gap-5 justify-center items-center">
          <div className="flex justify-center items-center">
            <img
              className="w-[70px] md:w-[150px]"
              src={interAid}
              alt="inter-aid"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              className="w-[70px] md:w-[150px]"
              src={qahaf}
              alt="inter-aid"
            />
          </div>

          <div className="flex justify-center items-center">
            <img
              className="w-[70px] md:w-[150px]"
              src={quantumQube}
              alt="inter-aid"
            />
          </div>

          <div className="flex justify-center items-center">
            <img
              className="w-[70px] md:w-[150px]"
              src={sweetCake}
              alt="inter-aid"
            />
          </div>
          <div className="flex justify-center items-center">
            <img
              className="w-[70px] md:w-[150px]"
              src={puppetBrush}
              alt="inter-aid"
            />
          </div>

          <div className="flex justify-center items-center">
            <img
              className="w-[70px] md:w-[150px]"
              src={kickOff}
              alt="inter-aid"
            />
          </div>
        </div>
      </div>

      <div className="w-full h-1/2 bg-accentColor absolute bottom-0 z-0"></div>
    </div>
  );
}
