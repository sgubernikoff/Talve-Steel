import React from "react";
import Financial from "./Financial";
import SecondaryAbout from "./SecondaryAbout";
import Slideshow from "./Slideshow";
import Testimonials from "./Testimonials";
import ContactUs from "./ContactUs";

function Home() {
  return (
    <div className="home">
      {/* <h1>Talve Metals</h1> */}
      <Slideshow />
      <SecondaryAbout />
      {/* <Financial /> */}
      {/* <Testimonials /> */}
      {/* <ContactUs /> */}
    </div>
  );
}

export default Home;
