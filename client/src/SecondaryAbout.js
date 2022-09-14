import React, { useRef, useEffect } from "react";
import talvesteel from "./talvesteel.jpg";
import map from "./map.png";
import coils5 from "./coils5.jpg";

function SecondaryAbout() {
  const who = useRef(null);
  const what = useRef(null);
  const where = useRef(null);
  const why = useRef(null);
  const whoP = useRef(null);
  const whatP = useRef(null);
  const whereP = useRef(null);
  const whyP = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) who.current.classList.add("fade-in");
    });
    observer.observe(who.current);
    // const observer2 = new IntersectionObserver((entries) => {
    //   if (entries[0].isIntersecting) what.current.classList.add("fade-in");
    // });
    // observer2.observe(what.current);
    const observer3 = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) where.current.classList.add("fade-in");
    });
    observer3.observe(where.current);
    const observer4 = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) why.current.classList.add("fade-in");
    });
    observer4.observe(why.current);
    const observer5 = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) whoP.current.classList.add("fade-up");
    });
    observer5.observe(whoP.current);
    // const observer6 = new IntersectionObserver((entries) => {
    //   if (entries[0].isIntersecting) whatP.current.classList.add("fade-up");
    // });
    // observer6.observe(whatP.current);
    const observer7 = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) whereP.current.classList.add("fade-up");
    });
    observer7.observe(whereP.current);
    const observer8 = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) whyP.current.classList.add("fade-up");
    });
    observer8.observe(whyP.current);
  }, []);

  return (
    <div className="sec_about">
      <h1 className="who" ref={who}>
        Who Are We?
      </h1>
      <div className="para_hold" ref={whoP}>
        <div className="paragraph">
          <p>
            Anchor Stainless specializes in stainless steel distribution. The
            company was founded in 2021 by Larry and Zack Talve. Together they
            bring experience, understanding, and passion to the industry. Larry
            has 35 years of industry experience and expertise while Zack brings
            a strong background in sales and entrepreneurship. Please check out
            our <a href="/about">'About'</a> section to learn even more about
            us!
          </p>
          {/* <p>
            Anchor Stainless, a stainless steel distribution company, was
            founded in 2022 with the goal of providing customers throughout the
            United States with quality material at competitive prices. Anchor
            Stainless stocks type 304L, 316L, and type 400 stainless with
            thickness running from .010” to .125”.
          </p>
          <br />
          <p>
            In addition, we have the capability to provide slitting and
            polishing services through our domestic and overseas partners. We
            pride ourselves on providing seamless customer service and holding
            nothing but exceptional quality products for our customers. Anchor
            Stainless’s office is based in Manhattan and our warehouse is
            located in Baltimore.
          </p> */}
        </div>
      </div>
      <img className="citygif" src={coils5} alt="steel" />
      {/* <h1 className="who" ref={what}>
        What We Do?
      </h1>
      <div className="para_hold" ref={whatP}>
        <div className="paragraph">
          <p>
            Here at Anchor Stainless we are committed to excellence in
            everything we do. Whether it be customer service or our steel coils
            we can gaurantee you will only ever experience the utmost in
            quality. In terms of products, we stock type 304L, 316L, and type
            400 stainless with thickness running from .010” to .125”. For a full
            list of available products please check out our{" "}
            <a href="/products">'Products'</a> page. In addition to the steel
            coils, we have the capability to provide slitting and polishing
            services through our domestic and overseas partners.
          </p>
        </div>
      </div> */}
      <h1 className="who" ref={where}>
        Where Are We?
      </h1>
      <div className="map-container3" ref={whereP}>
        <div className="map-container2">
          <a
            href="https://www.google.com/maps/place/30+W+63rd+St.,+New+York,+NY+10023/@40.7707681,-73.981731,17z/data=!3m1!4b1!4m5!3m4!1s0x89c258f594685643:0x3e387653861d49d8!8m2!3d40.7707681!4d-73.981731"
            target="_blank"
            rel="noreferrer"
          >
            <img src={map} alt="map" />
          </a>
          <div style={{ width: "100%" }}>
            <p>
              Our corportate office is located at 30 W 63rd St in Manhattan, NY.
              Our warehouse is located in Baltimore, MD.
            </p>
          </div>
        </div>
      </div>
      <br />
      <h1 className="who" ref={why}>
        Why Choose Us?
      </h1>
      <div className="para_hold" ref={whyP}>
        <div className="paragraph">
          <p>
            Our commitment is to excellence in both customer service and product
            quality. We work with our individual clients to satisfy their
            specific needs and requirements. Flexible payment terms and
            logistics allow us to serve clients throughout the entire US market.
            Our warehouse, which is located in Baltimore, allows us to serve
            clients throughout the United States. Please navigate to our{" "}
            <a href="/contact">'Contact'</a> page to get in touch.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SecondaryAbout;
