// import React from 'react'
import { useState } from "react";
import CountUp from "react-countup";
import { FaRegClock } from "react-icons/fa6";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { RiCustomerService2Fill } from "react-icons/ri";
import ScrollTrigger from "react-scroll-trigger";

export default function Insights() {
  const [counter, setCounter] = useState(false);
  return (
    <ScrollTrigger
      onEnter={() => setCounter(true)}
      onExit={() => setCounter(false)}
    >
      <div className="bg-gray-950 mb-10 py-5 lg:py-10 px-3 mx-3 sm:mx-5 md:mx-10 lg:mx-20 rounded-2xl sm:px-5 md:px-10 lg:px-20 font-bodyFont text-bodyColor shadow shadow-accentColor">
        <div className="w-full grid grid-cols-3 gap-5">
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-5 items-center justify-center">
            <div className="text-accentColor text-2xl md:text-4xl xl:text-6xl">
              <FaRegClock />
            </div>
            <div className="flex flex-col gap-1 xl:gap-2 justify-center items-center">
              <div className="font-bold text-xl md:text-3xl xl:text-5xl font-titleFont">
                {counter && (
                  <CountUp start={0} end={2} duration={2} delay={0}></CountUp>
                )}
                +
              </div>
              <div className="text-xs md:text-base text-center leading-none">
                Years of Experience
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-5 items-center justify-center">
            <div className="text-accentColor text-2xl md:text-4xl xl:text-6xl">
              <RiCustomerService2Fill />
            </div>
            <div className="flex flex-col gap-1 xl:gap-2 justify-center items-center">
              <div className="font-bold text-xl md:text-3xl xl:text-5xl font-titleFont">
                {counter && (
                  <CountUp start={0} end={6} duration={3} delay={0}></CountUp>
                )}
              </div>
              <div className="text-xs md:text-base text-center leading-none">
                Clients Served
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2 md:gap-4 lg:gap-5 items-center justify-center">
            <div className="text-accentColor text-2xl md:text-4xl xl:text-6xl">
              <IoMdCheckmarkCircleOutline />
            </div>
            <div className="flex flex-col gap-1 xl:gap-2 justify-center items-center">
              <div className="font-bold text-xl md:text-3xl xl:text-5xl font-titleFont">
                {counter && (
                  <CountUp start={0} end={11} duration={4} delay={0}></CountUp>
                )}
              </div>
              <div className="text-xs md:text-base text-center leading-none">
                Projects Completed
              </div>
            </div>
          </div>
        </div>
      </div>
    </ScrollTrigger>
  );
}
