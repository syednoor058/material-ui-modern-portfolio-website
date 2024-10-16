/* eslint-disable react/prop-types */
// import React from "react";
import { FaStar } from "react-icons/fa6";

export default function TestimonialCard(props) {
  return (
    <div className="bg-titleColor backdrop-blur-3xl font-bodyFont text-secondaryColor rounded-xl py-5 lg:py-10 shadow-xl">
      <div className="px-5 lg:px-10 rounded-md flex flex-col gap-5 justify-center overflow-hidden bg-opacity-70">
        <div className="w-full flex flex-col gap-3 md:gap-0 md:flex-row justify-between">
          <div className="w-[75%] flex flex-row justify-between">
            <div className="w-[25%] h-auto flex justify-center items-center">
              <img src={props.img} className="object-contain rounded-[50%]" />
            </div>
            <div className="w-[70%] flex flex-col gap-1 justify-center rounded">
              <div className="text-xs lg:text-sm text-accentColor1 uppercase leading-none">
                {props.brand}
              </div>
              <div className="text-lg lg:text-xl font-titleFont whitespace-nowrap leading-none text-titleColor2">
                {props.name}
              </div>
              <div className="text-xs leading-none ">{props.pos}</div>
            </div>
          </div>
          <div className="w-[20%] flex flex-row gap-1 text-yellow-400 justify-end text-sm lg:text-base">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <div className="w-full flex flex-col gap-4">
          <div className="w-full flex flex-col gap-2">
            <div className="text-base font-titleFont text-primaryColor md:text-lg lg:text-2xl leading-none text-titleColor2 font-bold">
              {props.title}
            </div>
            <div className="text-xs text-gray-700">{props.via}</div>
          </div>
          <div className="text-xs md:text-base">{props.desc}</div>
        </div>
      </div>
    </div>
  );
}
