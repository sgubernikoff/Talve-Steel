import React from "react";
import TestimonialCard from "./TestimonialCard";

function Testimonials() {
  const reviews = [
    { id: 1, name: "James", description: "Really great service", rating: 5 },
    { id: 2, name: "John", description: "Nice!", rating: 5 },
    {
      id: 3,
      name: "Jared",
      description: "Really great service. Best metal I've ever used. WooooW!",
      rating: 5,
    },
  ];

  const mappedReviews = reviews.map((review) => (
    <TestimonialCard review={review} />
  ));

  return (
    <div className="testy">
      <div className="testimonial">
        <div>
          {/* <h1 className="whom">Testimonials</h1> */}
          <div className="testimonial_data">
            {/* <h2 className="whom">
              See what our customers have to say about us:
            </h2> */}
            <div className="testimonials-container">{mappedReviews}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
