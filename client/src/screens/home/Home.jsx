// import React from "react";
import Clients from "../../components/clients/Clients";
import Hero from "../../components/hero/Hero";
import Insights from "../../components/insights/Insights";
import ProjectShowcase from "../../components/projectShowcase/ProjectShowcase";
import Services from "../../components/services/Services";
import Testimonials from "../../components/testimonials/Testimonials";

export default function Home() {
  return (
    <div className="absolute bg-titleColor">
      <Hero />
      <Insights />
      <Services />
      <ProjectShowcase />
      <Clients />
      <Testimonials />
    </div>
  );
}
