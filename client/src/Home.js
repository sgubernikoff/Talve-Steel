import React from "react";
import SecondaryAbout from "./SecondaryAbout";
import Slideshow from "./Slideshow";

function Home() {
  return (
    <div className="home">
      {/* <h1>Talve Metals</h1> */}
      <Slideshow />
      <SecondaryAbout />
    </div>
  );
}

export default Home;
