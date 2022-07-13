import React from "react";
import steelwork from "./steelwork.jpeg";

function ContactUs() {
  return (
    <div className="financial">
      <div>
        <h1 className="whom">Contact Information</h1>
        <div className="contact">
          <div className="contactUs1">
            <img src={steelwork} alt="steel worker" />
          </div>
          <div className="contactUs2">
            <h1>Talve Metals</h1>
            <p>TEL: +(1)-555-555-5555</p>
            <p>FAX: +(1)-555-555-5555</p>
            <div>
              <p>Address</p>
              <p>PO Box 000, 000 1st Street</p>
              <p>XXXXXXXXXXXXXX, NY 00000, USA</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
