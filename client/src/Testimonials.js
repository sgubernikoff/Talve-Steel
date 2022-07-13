import React from "react";
import emptystar from "./star.png";

function Testimonials() {
  const reviews = [
    { name: "James", description: "Really great service", rating: 5 },
    { name: "John", description: "Nice!", rating: 5 },
    {
      name: "Jared",
      description:
        "Really great service. Best metal I've ever used. WoooooooooW!...................................................................",
      rating: 5,
    },
  ];

  const mappedReviews = reviews.map((review) => (
    <div className="testimonial-card" key={reviews.indexOf(review)}>
      <h3 className="whom">{review.name}</h3>
      <div className="star-container">
        {[...Array(review.rating)].map((rating) => (
          <img src={emptystar} alt="star" key={reviews.indexOf(review)} />
        ))}
      </div>
      <div className="description-container">
        <p>{review.description}</p>
      </div>
    </div>
  ));

  return (
    <div>
      <div className="financial">
        <div>
          <h1 className="whom">Testimonials</h1>
          <div className="financial_data">
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
