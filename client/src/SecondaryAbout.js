import React from "react";
import talvesteel from "./talvesteel.jpg";

function SecondaryAbout() {
  return (
    <div className="sec_about">
      <h1 className="who">Who are we?</h1>
      <div className="para_hold">
        <div className="paragraph">
          <p>
            Anchor Stainless, a stainless steel distribution company, was
            founded in 2022 with the goal of providing customers throughout the
            United States with quality material at competitive prices. Anchor
            Stainless stocks type 304L, 316L, and type 400 stainless with
            thickness running from .010” to .125”. In addition, we have the
            capability to provide slitting and polishing services through our
            domestic and overseas partners. We pride ourselves on providing
            seamless customer service and holding nothing but exceptional
            quality products for our customers. Anchor Stainless’s office is
            based in Manhattan and our warehouse is located in Baltimore.
          </p>
        </div>
      </div>
      <img className="citygif" src={talvesteel} alt="steel" />
    </div>
  );
}

export default SecondaryAbout;
