import React from "react";
import talvesteel from "./talvesteel.jpg";

function SecondaryAbout() {
  return (
    <div className="sec_about">
      <h1 className="who">Who We Are</h1>
      <div className="para_hold">
        <div className="paragraph">
          <p>
            The core of our business is our customers. Our promise has always
            been to work harder and smarter to bring our customers the best
            quality and most reliable materials in the industry, and our
            reputation has been built on meeting that promise – day in and day
            out. By keeping our eye on the customer, we’ve been able to create
            an effective approach to buying and selling steel that results in
            discounted pricing combined with top-level service.
          </p>
           {" "}
          <p>
            And it’s that commitment that drives us to create long-standing and
            valuable relationships with domestic mills and in overseas markets
            to offer a reliable and extensive supply chain of prime, excess, and
            secondary steel for your needs. When you’re looking to buy steel or
            sell steel, we’re positioned to give you the best price while
            meeting your supply needs.
          </p>
        </div>
      </div>
      <img className="citygif" src={talvesteel} alt="steel" />
    </div>
  );
}

export default SecondaryAbout;
