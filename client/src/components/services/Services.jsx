// import React from 'react'
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <div className="px-3 sm:px-5 md:px-10 lg:px-20 py-10 lg:py-20 font-bodyFont text-bodyColor flex flex-col gap-7 lg:gap-16">
      <div className="w-full flex flex-col gap-1 lg:gap-3">
        <div className="uppercase text-center w-full text-xs lg:text-base leading-3">
          What I Offer
        </div>
        <div className="w-full text-center font-bold font-titleFont text-titleColor uppercase text-xl lg:text-5xl leading-3">
          Quality Service{" "}
          <span className="lowercase font-accentFont text-accentColor font-normal text-3xl lg:text-7xl">
            delivery
          </span>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-10">
        <ServiceCard
          title="SEO"
          desc="Proficient in optimizing website content and structure to improve visibility and ranking on search engine results pages, utilizing strategic keyword research."
        />
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="w-40 lg:w-60 h-40 lg:h-60 border border-accentColor flex justify-center items-center">
            Image
          </div>
          <div className="flex flex-col gap-2 text-center">
            <div className="font-bold uppercase font-titleFont text-titleColor text-base lg:text-2xl">
              App Development
            </div>
            <div className="text-xs lg:text-base">
              Proficient in developing robust and scalable software solutions
              tailored to meet diverse business needs, leveraging expertise in
              various programming languagess.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="w-40 lg:w-60 h-40 lg:h-60 border border-accentColor flex justify-center items-center">
            Image
          </div>
          <div className="flex flex-col gap-2 text-center">
            <div className="font-bold uppercase font-titleFont text-titleColor text-base lg:text-2xl">
              Software Testing
            </div>
            <div className="text-xs lg:text-base">
              Skilled in ensuring the quality and reliability of software
              through meticulous testing methodologies, including automated
              testing, to identify and resolve defects efficiently.
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center">
          <div className="w-40 lg:w-60 h-40 lg:h-60 border border-accentColor flex justify-center items-center">
            Image
          </div>
          <div className="flex flex-col gap-2 text-center">
            <div className="font-bold uppercase font-titleFont text-titleColor text-base lg:text-2xl">
              UI/UX Design
            </div>
            <div className="text-xs lg:text-base">
              xperienced in crafting intuitive and visually appealing user
              interfaces, with a focus on enhancing user experience through
              thoughtful design principles and usability.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
