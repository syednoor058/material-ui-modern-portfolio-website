// import React from 'react'
import CallIcon from "@mui/icons-material/Call";
import DownloadIcon from "@mui/icons-material/Download";
import heroImg from "../../assets/images/hero_image.png";

export default function Hero() {
  return (
    <div className="w-full font-bodyFont md:h-screen bg-primaryColor text-bodyColor px-3 sm:px-5 md:px-10 lg:px-20 pt-20">
      <div className="w-full h-full flex flex-col md:flex-row gap-7">
        <div className="w-full xl:w-[60%] h-full flex items-center">
          <div className="flex flex-col gap-3">
            <div className="font-accentFont text-2xl md:text-5xl">
              Hi there,
            </div>
            <div className="text-2xl md:text-5xl text-titleColor leading-none font-titleFont">
              I am{" "}
              <span className="text-3xl lg:text-6xl leading-none font-bold text-accentColor font-titleFont uppercase">
                Shaed Noor
              </span>
            </div>
            <div className="text-2xl md:text-5xl text-titleColor font-titleFont leading-none">
              An Expert <span className="">Full Stack Developer.</span>
            </div>
            <div className="pt-2 md:pt-5 text-sm md:text-base">
              Dynamic, motivated, hardworking, keen about the changes in the
              dynamic world of computer science technology. I want to export my
              potential & acquire knowledge & skills in my profession as
              required by an organization to achieve the target & develop the
              best performance.
            </div>
            <div className="flex flex-row gap-5 pt-2 md:pt-5">
              <button className="transform bg-accentColor hover:bg-titleColor hover:text-accentColor hover:scale-[1.1] duration-500 rounded-sm px-3 py-2 shadow-md uppercase text-xs md:text-base flex justify-center items-center gap-2">
                <span>
                  <DownloadIcon fontSize="small" />
                </span>
                Download Resume
              </button>
              <button className="text-accentColor hover:border-titleColor hover:text-titleColor duration-500 rounded-sm shadow-md px-3 py-2 hover:scale-[1.1] uppercase border border-accentColor text-xs md:text-base flex justify-center items-center gap-2">
                <span>
                  <CallIcon fontSize="small" />
                </span>
                Contact Me
              </button>
            </div>
          </div>
        </div>
        <div className="w-full xl:w-[40%] h-full flex items-end justify-center">
          <img
            className="w-[60%] lg:w-full"
            src={heroImg}
            alt="shaed_noor_picture"
          />
        </div>
      </div>
    </div>
  );
}
