import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "https://i0.wp.com/thenybbgroup.com/wp-content/uploads/2019/09/Photo-from-Kyle-for-Web.jpg?fit=1920%2C1200&ssl=1",
    caption: "Stainless Steel",
  },
  {
    url: "https://gisp.com/wp-content/uploads/2020/12/stainless-steel-price-in-china.jpg",
    caption: "Steel Coils",
  },
  {
    url: "https://t4.ftcdn.net/jpg/04/99/11/31/360_F_499113133_fN7NwLrHBksRHN79vkzrAHFvIvhUBV6X.jpg",
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
