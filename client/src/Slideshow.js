import React from "react";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const slideImages = [
  {
    url: "https://i0.wp.com/thenybbgroup.com/wp-content/uploads/2019/09/Photo-from-Kyle-for-Web.jpg?fit=1920%2C1200&ssl=1",
    caption: "Stainless Steel",
  },
  {
    url: "https://media.istockphoto.com/photos/cold-rolled-steel-coil-at-storage-area-in-steel-industry-picture-id636362104?k=20&m=636362104&s=612x612&w=0&h=2w4DnY8BMw9_xsCigO1tsDos1zaEUdM7Qy-U6x6sRIQ=",
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
