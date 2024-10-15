// import React from 'react'

import { GoArrowUpRight } from "react-icons/go";
import { RxGithubLogo } from "react-icons/rx";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function ProjectCard({ cover, title, desc, github }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="w-full flex justify-center items-center">
        <img className="rounded-sm" src={cover} alt={title} />
      </div>
      <div className="flex flex-col gap-3">
        <div className="font-titleFont text-xl lg:text-2xl font-semibold text-titleColor">
          {title}
        </div>
        <div className="text-xs lg:text-base">{desc}</div>
        <div className="flex flex-row gap-3">
          <div className="px-3 py-2 uppercase bg-accentColor text-titleColor rounded-sm flex justify-center items-center gap-2 leading-3">
            View Details
            <span>
              <GoArrowUpRight />
            </span>
          </div>
          <Link
            to={github}
            className="px-3 py-2 border-accentColor border rounded-sm text-accentColor uppercase flex justify-center items-center gap-2 leading-3"
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
