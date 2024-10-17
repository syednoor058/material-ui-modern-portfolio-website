// import React from "react";
import appTesting from "../../assets/images/projects_images/app_testing.webp";
import housePred from "../../assets/images/projects_images/house_price_pred.webp";
import hungryShaed from "../../assets/images/projects_images/hungry_shaed.webp";
import movieSuggest from "../../assets/images/projects_images/movie_sugges_sys.webp";
import personalPortfolio from "../../assets/images/projects_images/personal_portfolio.webp";
import carPricePred from "../../assets/images/projects_images/preowned_car_price_pred.webp";
import sportswearWeb from "../../assets/images/projects_images/sportswear_web.webp";
import pluginsTesting from "../../assets/images/projects_images/wordpress_plugins_testing.webp";
import ProjectCard from "./ProjectCard";

export default function Project() {
  return (
    <div id="projects">
      <div className="bg-darkBG3 w-full pt-10 px-3 pb-10 md:px-10 lg:px-20 lg:pb-20 overflow-hidden flex flex-col gap-5 lg:gap-10 font-bodyFont text-secondaryColor">
        <div>
          <div className="w-full flex flex-col gap-5 lg:gap-10">
            <div>
              <p className="uppercase text-xs md:text-base text-center text-secondaryColor flex flex-row gap-2 justify-center items-center leading-none">
                <div className="h-[1px] w-8 bg-accentColor mb-1"></div>
                Portfolio
                <div className="h-[1px] w-8 bg-accentColor mb-1"></div>
              </p>
            </div>
            <div className="flex flex-col-reverse gap-5 lgl:gap-0 lgl:flex-row-reverse justify-between items-center">
              <div className="w-full text-sm md:text-base text-secondaryColor">
                Welcome to my project portfolio, where creativity meets
                functionality. Here, you will find a curated selection of my
                most significant works, showcasing my expertise in front-end and
                back-end development with UI/UX design, Machine Learning,
                software manual or automation testing, and more.
              </div>
              <p className="w-full text-3xl sml:text-5xl md:text-6xl lg:text-5xl xl:text-6xl uppercase font-bold text-center text-primaryColor leading-none font-titleFont">
                My Development{" "}
                <span className="font-accentFont ps-2 lowercase text-5xl sml:text-7xl md:text-8xl font-normal text-accentColor">
                  journey
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-5 justify-center items-center">
          <ProjectCard
            coverImg={sportswearWeb}
            title="Sportswear E-Commerce Web Application - (MERN Stack)"
            detailsLink="/house-price-prediction-project"
          />
          <ProjectCard
            coverImg={housePred}
            title="House Price Prediction System - (Machine Learning)"
            detailsLink="/house-price-prediction-project"
          />
          <ProjectCard
            coverImg={hungryShaed}
            title="Food Delivery Web Application - (MERN Stack)"
            detailsLink="/house-price-prediction-project"
          />
          <ProjectCard
            coverImg={movieSuggest}
            title="Movie Recommendation System - (Machine Learning)"
            detailsLink="/house-price-prediction-project"
          />
          <ProjectCard
            coverImg={appTesting}
            title="E-Learning Application Automation Testing - (Selenium)"
            detailsLink="/house-price-prediction-project"
          />
          <ProjectCard
            coverImg={personalPortfolio}
            title="Personal Portfolio Website - (React JS)"
            detailsLink="/house-price-prediction-project"
          />
          <ProjectCard
            coverImg={carPricePred}
            title="Pre-Owned Car Price Prediction System - (Machine Learning)"
          />
          <ProjectCard
            coverImg={pluginsTesting}
            title="WordPress Plug-Ins Automation Testing - (PlayWright)"
            detailsLink="/house-price-prediction-project"
          />
        </div>
      </div>
    </div>
  );
}
