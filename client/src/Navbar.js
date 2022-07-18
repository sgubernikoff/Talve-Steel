import React from "react";
import { NavLink } from "react-router-dom";
import mocklogo from "./mocklogo.png";

function Navbar() {
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  return (
    <div id="navbar">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />

      <img src={mocklogo} />
      <div className="topnav" id="myTopnav">
        <NavLink onClick={myFunction} to="/">
          Home
        </NavLink>
        <NavLink onClick={myFunction} to="/about">
          About Us
        </NavLink>
        <NavLink onClick={myFunction} to="/products">
          Products
        </NavLink>
        <NavLink onClick={myFunction} to="/conversions">
          Conversion Chart
        </NavLink>
        <NavLink onClick={myFunction} to="/contact">
          Contact
        </NavLink>

        <a to="javascript:void(0);" className="icon" onClick={myFunction}>
          <i className="fa fa-bars"></i>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
