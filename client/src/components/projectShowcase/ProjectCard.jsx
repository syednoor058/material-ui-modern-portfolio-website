/* eslint-disable react/prop-types */
// import React from "react";
import { GoArrowUpRight } from "react-icons/go";
import { PiGithubLogoFill } from "react-icons/pi";
import { Link } from "react-router-dom";

export default function ProjectCard(props) {
  return (
    <div className="w-full flex relative justify-center items-center rounded overflow-hidden group cursor-pointer shadow-xl">
      <div className="w-full aspect-square">
        <img
          src={props.coverImg}
          alt=""
          className="w-full h-full group-hover:blur-[3px] duration-[600ms] object-cover"
        />
      </div>
      <div className="w-full h-full absolute bg-accentColor bg-opacity-85 p-3 sm:p-5 z-[2] translate-y-[100%] group-hover:translate-y-0 duration-[600ms] flex flex-col gap-1 sml:gap-3 xl:gap-5 items-center justify-between uppercase">
        <p className="font-titleFont text-sm sm:text-lg xl:text-xl text-titleColor font-medium">
          {props.title}
        </p>
        <div className="w-full flex flex-row justify-between items-center">
          <div className="w-full flex justify-end items-center gap-3">
            <Link
              className="aspect-square flex flex-row justify-center items-center text-[8px] sml:text-sm md:text-base text-primaryColor bg-titleColor rounded-full cursor-pointer hover:scale-[1.1] duration-[400ms] font-titleFont font-medium p-2 sm:p-3 shadow-xl"
              to={props.detailsLink}
            >
              <span className="text-base sm:text-xl md:text-2xl">
                <PiGithubLogoFill />
              </span>
            </Link>
            <Link
              className="aspect-square flex flex-row justify-center items-center text-[8px] sml:text-sm md:text-base text-primaryColor bg-titleColor rounded-full cursor-pointer hover:scale-[1.1] duration-[400ms] font-titleFont font-medium p-2 sm:p-3 shadow-xl"
              to={props.detailsLink}
            >
              <span className="text-base sm:text-xl md:text-2xl">
                <GoArrowUpRight />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
