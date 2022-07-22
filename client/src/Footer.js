import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className="footer_header">
      {/* <h1 className="cont_foot">Contact</h1> */}
      <div className="footer">
        {/* <div className="footer-quick-links">
        <h3>Quick Links</h3>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About Us</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/conversions">Conversion Chart</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div> */}

        <div className="footer-contact">
          {/* <h3>Contact Us</h3> */}
          <p>PO Box 000, 000 1st Street</p>
          <p>XXXXXXXXXXXXXX, NY 00000, USA</p>
          <p>EMAIL: xxxxxxxxxxx@gmail.com</p>
          <p>TEL: +(1)-555-555-5555</p>
          <p>FAX: +(1)-555-555-5555</p>
        </div>
        {/* <div className="footer-follow">
        <h3>Follow Us</h3>
      </div> */}
      </div>
    </div>
  );
}

export default Footer;
