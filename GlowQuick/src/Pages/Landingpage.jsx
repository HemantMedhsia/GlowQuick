import React from "react";
import Navbar from "./Navbar";
import TopSection from "./TopSection";
import OurServices from "./OurServices";
import FeaturesSection from "./FeaturesSection";
import Testimonials from "./Testimonials";

const Landingpage = () => {
  return (
    <div>
      <Navbar />
      <TopSection/>
      <OurServices/>
      <FeaturesSection/>
      <Testimonials/>
    </div>
  );
};

export default Landingpage;
