// import React from 'react'
import ai from "../../assets/images/services/ai.webp";
import appDevelopment from "../../assets/images/services/app_development.webp";
import qa from "../../assets/images/services/bugs.webp";
import dm from "../../assets/images/services/dm.webp";
import seo from "../../assets/images/services/seo.webp";
import uiux from "../../assets/images/services/uiux.webp";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <div className="px-3 sm:px-5 md:px-10 lg:px-20 py-10 lg:py-20 font-bodyFont text-secondaryColor flex flex-col gap-7 lg:gap-16 bg-titleColor">
      <div className="w-full flex flex-col gap-1 lg:gap-3">
        <div className="uppercase text-center w-full text-xs lg:text-base leading-3">
          What I Offer
        </div>
        <div className="w-full text-center font-bold font-titleFont text-primaryColor uppercase text-xl lg:text-5xl leading-3">
          Quality Service{" "}
          <span className="lowercase font-accentFont text-accentColor font-normal text-3xl lg:text-7xl">
            delivery
          </span>
        </div>
      </div>
      <div className="w-full grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 xl:gap-10">
        <ServiceCard
          cover={appDevelopment}
          title="App Development"
          desc="Proficient in developing robust and scalable software solutions tailored to meet diverse business needs, leveraging expertise in various programming languagess."
        />
        <ServiceCard
          cover={qa}
          title="Software Testing"
          desc="Skilled in ensuring the quality and reliability of software through meticulous testing methodologies, including automated testing, to identify and resolve defects efficiently."
        />
        <ServiceCard
          cover={uiux}
          title="UI/UX Design"
          desc="Experienced in crafting intuitive and visually appealing user interfaces, with a focus on enhancing user experience through thoughtful design principles and usability."
        />
        <ServiceCard
          cover={ai}
          title="Machine Learning"
          desc="Advanced knowledge in applying machine learning algorithms to analyze data, derive insights, and develop predictive models that drive innovation and optimization."
        />
        <ServiceCard
          cover={dm}
          title="Digital Marketing"
          desc="Expertise in designing & executing comprehensive digital marketing strategies, utilizing various channels such as social media, email, & content marketing."
        />
        <ServiceCard
          cover={seo}
          title="SEO"
          desc="Proficient in optimizing website content and structure to improve visibility and ranking on search engine results pages, utilizing strategic keyword research."
        />
      </div>
    </div>
  );
}
