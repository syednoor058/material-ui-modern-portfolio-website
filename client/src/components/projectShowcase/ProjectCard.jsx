// import React from 'react'

import { GoArrowUpRight } from "react-icons/go";
import { RxGithubLogo } from "react-icons/rx";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ProjectCard({ cover, title, desc, github }) {
  return (
    <div className="flex flex-col gap-2 sm:gap-5 group shadow-xl relative shadow-gray-300 overflow-hidden">
      <div className="relative w-full flex justify-center items-center">
        <img
          className="rounded group-hover:scale-[1.1] duration-700"
          src={cover}
          alt={title}
        />
      </div>
      <div className="w-full flex flex-col justify-between absolute p-5 bg-gray-950 bg-opacity-80 backdrop-blur-[3px] top-0 bottom-[0] translate-y-[100%] group-hover:translate-y-0 duration-700">
        <div className="flex flex-col gap-3">
          <div className="font-titleFont text-lg lg:text-2xl font-semibold text-titleColor">
            {title}
          </div>
          <div className="text-sm lg:text-base text-bodyColor">{desc}</div>
        </div>
        <div className="flex flex-row gap-3 font-titleFont">
          <div className="px-3 text-xs sm:text-base py-2 uppercase bg-accentColor text-titleColor rounded-sm flex justify-center items-center gap-2 leading-3 shadow-xl">
            View Details
            <span>
              <GoArrowUpRight />
            </span>
          </div>
          <Link
            to={github}
            className="px-3 py-2 text-xs sm:text-base border-accentColor border rounded-sm text-accentColor uppercase flex justify-center items-center gap-2 leading-3 shadow-xl hover:scale-[1.1] duration-300"
          >
            Github{" "}
            <span>
              <RxGithubLogo />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
