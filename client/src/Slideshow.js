import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "https://zhengshanggroup.com/wp-content/uploads/2020/11/stainless-steel-coil.jpg",
    caption: "Stainless Steel",
  },
  {
    url: "https://gisp.com/wp-content/uploads/2020/12/stainless-steel-price-in-china.jpg",
    caption: "Steel Coils",
  },
  {
    url: "https://guptastainless.com/wp-content/uploads/2020/08/Stainless-Steel-Strips-Coils.jpg",
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
            <div style={{ backgroundImage: `url(${slideImage.url})` }}>
              <span>{slideImage.caption}</span>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slideshow;
