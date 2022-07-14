import React from "react";
import emptystar from "./star.png";

function TestimonialCard({ review }) {
  return (
    <div className="testimonial-card" key={review.id}>
      <h3 className="whom">{review.name}</h3>
      <div className="star-container">
        {[...Array(review.rating)].map((rating) => (
          <img src={emptystar} alt="star" key={review.id} />
        ))}
      </div>
      <div className="description-container">
        <p className="test_text">{review.description}</p>
      </div>
    </div>
  );
}

export default TestimonialCard;
