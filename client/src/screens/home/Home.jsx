// import React from "react";
import Hero from "../../components/hero/Hero";
import Insights from "../../components/insights/Insights";
import ProjectShowcase from "../../components/projectShowcase/ProjectShowcase";
import Services from "../../components/services/Services";

export default function Home() {
  return (
    <div className="absolute bg-titleColor">
      <Hero />
      <Insights />
      <Services />
      <ProjectShowcase />
    </div>
  );
}
