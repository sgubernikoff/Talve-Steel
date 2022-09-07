import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import coils6 from "./coils6.jpg";
import coils from "./coilpic.jpg";

const slideImages = [
  {
    url: coils,
    caption: "Stainless Steel",
  },
  {
    url: coils6,
    caption: "Steel Coils",
  },
  {
    url: "https://gisp.com/wp-content/uploads/2020/12/stainless-steel-price-in-china.jpg",
    caption: "Quality Assured",
  },
];

const properties = {
  duration: 2500,
  autoplay: true,
  transitionDuration: 750,
  arrows: true,
  infinite: true,
  easing: "ease",
  indicators: (i) => <div className="indicator">{"•"}</div>,
};

const Slideshow = () => {
  return (
    <div className="slide-container">
      <Slide {...properties}>
        {slideImages.map((slideImage, index) => (
          <div className="each-slide" key={index}>
            <div
              style={{
                backgroundImage: `url(${slideImage.url})`,
                backgroundPosition: "center",
              }}
            >
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
