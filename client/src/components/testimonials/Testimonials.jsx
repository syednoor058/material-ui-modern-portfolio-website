// import React from 'react'
import rituImg from "../../assets/images/testimonials/rhitu.webp";
import TestimonialCard from "./TestimonialCard";

export default function Testimonials() {
  //   const [dotActive, setDotActive] = useState(0);
  return (
    <div className="px-10 sm:px-5 md:px-10 lg:px-20 py-10 font-bodyFont text-bodyColor flex flex-col gap-7 lg:gap-16 bg-accentColor overflow-hidden">
      <div className="w-full flex flex-col gap-1 lg:gap-3">
        <div className="uppercase text-center w-full text-xs lg:text-base leading-3">
          Testimonials
        </div>
        <div className="w-full text-center font-bold font-titleFont text-titleColor uppercase text-xl lg:text-5xl leading-3">
          Clients success{" "}
          <span className="lowercase font-accentFont text-primaryColor font-normal text-3xl lg:text-7xl">
            Insights
          </span>
        </div>
      </div>
      <TestimonialCard
        img={rituImg}
        brand="Rhitu Dental Care"
        name="Rhituparna Das"
        pos="Owner"
        title="Social Media Marketing"
        via="via Facebook (May, 2022 - April, 2023)"
        desc="The digital marketing campaign for our dental care clinic was a game-changer. Increased patient inquiries and appointments. Highly professional and results-driven service!"
      />
      <TestimonialCard
        img={rituImg}
        brand="Rhitu Dental Care"
        name="Rhituparna Das"
        pos="Owner"
        title="Social Media Marketing"
        via="via Facebook (May, 2022 - April, 2023)"
        desc="The digital marketing campaign for our dental care clinic was a game-changer. Increased patient inquiries and appointments. Highly professional and results-driven service!"
      />
      <TestimonialCard
        img={rituImg}
        brand="Rhitu Dental Care"
        name="Rhituparna Das"
        pos="Owner"
        title="Social Media Marketing"
        via="via Facebook (May, 2022 - April, 2023)"
        desc="The digital marketing campaign for our dental care clinic was a game-changer. Increased patient inquiries and appointments. Highly professional and results-driven service!"
      />
      <TestimonialCard
        img={rituImg}
        brand="Rhitu Dental Care"
        name="Rhituparna Das"
        pos="Owner"
        title="Social Media Marketing"
        via="via Facebook (May, 2022 - April, 2023)"
        desc="The digital marketing campaign for our dental care clinic was a game-changer. Increased patient inquiries and appointments. Highly professional and results-driven service!"
      />
    </div>
  );
}
