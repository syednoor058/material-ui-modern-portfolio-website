// import React from 'react'
import elearningAutoTestImg from "../../assets/images/projects_images/app_testing.webp";
import housePredImg from "../../assets/images/projects_images/house_price_pred.webp";
import portWebImg from "../../assets/images/projects_images/personal_portfolio.webp";
import preCarPredImg from "../../assets/images/projects_images/preowned_car_price_pred.webp";
import sportswearImg from "../../assets/images/projects_images/sportswear_web.webp";
import wordpressTest from "../../assets/images/projects_images/wordpress_plugins_testing.webp";
import ProjectCard from "./ProjectCard";

export default function ProjectShowcase() {
  return (
    <div className="px-3 sm:px-5 md:px-10 lg:px-20 py-10 lg:py-20 font-bodyFont text-secondaryColor flex flex-col gap-7 lg:gap-16 bg-titleColor">
      <div className="w-full flex flex-col gap-1 lg:gap-3">
        <div className="uppercase text-center w-full text-xs lg:text-base leading-3">
          Project Showcase
        </div>
        <div className="w-full text-center font-bold font-titleFont text-primaryColor uppercase text-xl lg:text-5xl leading-3">
          My Development{" "}
          <span className="lowercase font-accentFont text-accentColor font-normal text-3xl lg:text-7xl">
            Journey
          </span>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 gap-y-8 xl:gap-x-10 lg:gap-y-10 px-7 pt-5 sm:px-0">
        <ProjectCard
          cover={sportswearImg}
          title="Sportswear Web Application - (MERN Stack)"
          desc="Developed a house price prediction model using machine learning algorithms. Built a user-friendly website with React.js and FastAPI for the backend, ensuring efficient data processing and accurate predictions."
          github="https://github.com/syednoor058/kick-off"
        />
        <ProjectCard
          cover={housePredImg}
          title="House Price Prediction App - (Machine Learning)"
          desc="Developed a house price prediction model using machine learning algorithms. Built a user-friendly website with React.js and FastAPI for the backend, ensuring efficient data processing and accurate predictions."
          github="https://github.com/syednoor058/kick-off"
        />

        <ProjectCard
          cover={elearningAutoTestImg}
          title="E-Learning App QA Testing - (Automation Testing)"
          desc="Developed a house price prediction model using machine learning algorithms. Built a user-friendly website with React.js and FastAPI for the backend, ensuring efficient data processing and accurate predictions."
          github="https://github.com/syednoor058/kick-off"
        />
        <ProjectCard
          cover={preCarPredImg}
          title="Cars Price Prediction System - (Machine Learning)"
          desc="Developed a house price prediction model using machine learning algorithms. Built a user-friendly website with React.js and FastAPI for the backend, ensuring efficient data processing and accurate predictions."
          github="https://github.com/syednoor058/kick-off"
        />
        <ProjectCard
          cover={portWebImg}
          title="Personal Portfolio Website - (MERN Stack)"
          desc="Developed a house price prediction model using machine learning algorithms. Built a user-friendly website with React.js and FastAPI for the backend, ensuring efficient data processing and accurate predictions."
          github="https://github.com/syednoor058/kick-off"
        />
        <ProjectCard
          cover={wordpressTest}
          title="WordPress Plugins QA Testing - (Automation Testing)"
          desc="Developed a house price prediction model using machine learning algorithms. Built a user-friendly website with React.js and FastAPI for the backend, ensuring efficient data processing and accurate predictions."
          github="https://github.com/syednoor058/kick-off"
        />
      </div>
    </div>
  );
}
