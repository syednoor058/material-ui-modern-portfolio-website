// import React from 'react'

import ProjectCard from "./ProjectCard";

export default function ProjectShowcase() {
  return (
    <div className="px-3 sm:px-5 md:px-10 lg:px-20 py-10 lg:py-20 font-bodyFont text-bodyColor flex flex-col gap-7 lg:gap-16 bg-secondaryColor">
      <div className="w-full flex flex-col gap-1 lg:gap-3">
        <div className="uppercase text-center w-full text-xs lg:text-base leading-3">
          Project Showcase
        </div>
        <div className="w-full text-center font-bold font-titleFont text-titleColor uppercase text-xl lg:text-5xl leading-3">
          My Development{" "}
          <span className="lowercase font-accentFont text-accentColor font-normal text-3xl lg:text-7xl">
            Journey
          </span>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
        <ProjectCard />
      </div>
    </div>
  );
}
