import React from "react";
import Navbar from "./Navbar";
import TopSection from "./TopSection";
import OurServices from "./OurServices";
import FeaturesSection from "./FeaturesSection";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import OurTeam from "./OurTeam";

const Landingpage = () => {
  return (
    <div>
      <Navbar />
      <TopSection/>
      <AboutUs/>
      <OurServices/>
      <FeaturesSection/>
      <OurTeam/>
      <Testimonials/>
      <Footer/>
    </div>
  );
};

export default Landingpage;
