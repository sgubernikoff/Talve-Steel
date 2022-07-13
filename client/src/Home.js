import React from "react";
import Financial from "./Financial";
import SecondaryAbout from "./SecondaryAbout";
import Slideshow from "./Slideshow";

function Home() {
  return (
    <div className="home">
      {/* <h1>Talve Metals</h1> */}
      <Slideshow />
      <SecondaryAbout />
      <Financial />
    </div>
  );
}

export default Home;
