import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "https://i0.wp.com/thenybbgroup.com/wp-content/uploads/2019/09/Photo-from-Kyle-for-Web.jpg?fit=1920%2C1200&ssl=1",
    caption: "Steel",
  },
  {
    url: "https://metrosteelusa.com/wp-content/uploads/2021/11/metal-pipes-2021-09-24-03-51-48-utc-scaled-e1635867365662.jpg",
    caption: "Onyx",
  },
  {
    url: "https://www.metalcenternews.com/images/featured/8d69bce2474d26d_c8a7ea71_da0d184f.jpg",
    caption: "Market Influence",
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
