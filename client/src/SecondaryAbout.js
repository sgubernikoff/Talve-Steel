import React from "react";

function SecondaryAbout() {
  return (
    <div className="sec_about">
      <h1 className="who">Who We Are</h1>
      <div className="para_hold">
        <div className="paragraph">
          <p>
            Dai Ichi USA, Ltd. has a tradition that is over 50 years in the
            Steel business. The Gelbart family's first foray in steel was in the
            1960's exporting carbon steel and stainless steel to Asia, South
            America, Europe and the Middle East. In the early 1970’s the focus
            of the business changed to stainless steel, specializing in grades
            for the kitchen equipment, automotive trim, pipe and tubing as well
            as automotive exhaust systems. With this change also came
            distribution in North America. The business flourished through the
            dynamic relationships that were built with the producers and
            customers.
          </p>
           {" "}
          <p>
            Over the years, Dai Ichi USA, Ltd. has solidified these
            relationships which have been built on the integrity of the officers
            and staff. Today, with distribution locations world wide and offices
            in strategic locations, Dai Ichi has continued to serve the needs of
            our customers throughout the world.
          </p>
        </div>
      </div>
      <img
        className="citygif"
        src={
          "https://images.unsplash.com/photo-1609627016501-b862497c7294?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8c3RlZWwlMjBzdHJ1Y3R1cmV8ZW58MHx8MHx8&w=1000&q=80"
        }
        alt="steel"
      />
    </div>
  );
}

export default SecondaryAbout;
