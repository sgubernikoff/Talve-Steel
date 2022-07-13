import React from "react";

function Financial() {
  return (
    <div className="financial">
      <div>
        <h1 className="whom">Financing & Payment Methods</h1>
        <div className="financial_data">
          <h2 className="methods">Accepted Payment Methods</h2>
          <p className="italics">
            Payment Terms Negotiated on a Per-Customer Basis
          </p>
          <br></br>
          <br></br>
          <p className="paytype">ACH</p>
          <p className="paytype">Check (Domestic Customers Only)</p>
          <p className="paytype">Letter of Credit</p>
          <p className="paytype">Wire</p>
          <br></br>
          <br></br>
          <div className="inquire">
            <h2 className="methods">For any financial inquires:</h2>
            <button>Contact Us</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Financial;
