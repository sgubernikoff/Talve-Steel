import React, { useState, useRef } from "react";
import contact from "./contact.png";
import emailjs from "@emailjs/browser";

const Result = () => {
  return (
    <p>Your message has been successfully sent. We will contact you soon!</p>
  );
};

function Contact() {
  const form = useRef();
  const [result, showResult] = useState(false);
  const [first, setFirst] = useState("");
  const [last, setLast] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const formData = new FormData();
  formData.append("first", first);
  formData.append("last", last);
  formData.append("email", email);
  formData.append("message", message);

  function clearFields() {
    setFirst("");
    setLast("");
    setEmail("");
    setMessage("");
  }

  const sendEmail = (e) => {
    e.preventDefault();

    fetch("/emails", {
      method: "POST",
      body: formData,
    }).then((r) => {
      if (r.ok) {
        showResult(true);
        clearFields();
        setTimeout(() => {
          showResult(false);
        }, 5000);
      }
    });
  };

  return (
    <div className="contacts">
      <div className="new_banner2">
        <div className="banner_text">
          <h4 className="subhead">CONTACT</h4>
          <h2 className="mainhead">GET IN TOUCH</h2>
        </div>
      </div>
      {/* <img className="contact_banner" src={contact} alt="contact-banner" /> */}
      <div className="contact-form-container">
        <div className="contact-form-left">
          <div className="contact_text_holder">
            <h3 className="align_left_1">Reach Us</h3>
            <h3 className="align_left">Larry: (516)-721-4603</h3>
            <h3 className="align_left">Zack: (516)-974-5707</h3>
          </div>
          <div className="contact_text_holder_1">
            <p>
              We would love to hear from you! What can we help you with today?
            </p>
          </div>

          <div className="contact_text_holder_2">
            <h4 className="h_line_height">Corporate Office</h4>
            <p>30 West 63rd Street</p>
            {/* <p>Address2</p> */}
            <p>New York, NY 10023</p>
            <p>(516)-721-4603</p>
            {/* <p>Fax Number</p> */}
          </div>
        </div>
        <div className="contact-form-right">
          <form
            // id="my-form"
            // action={FORM_ENDPOINT}
            ref={form}
            onSubmit={sendEmail}
            method="POST"
            target="_blank"
          >
            <div className="contact-form-name-container">
              <div className="contact-form-name-input">
                <label>First Name*</label>
                <input
                  className="form"
                  type="text"
                  // placeholder="Your name"
                  name="firstname"
                  required
                  size={40}
                  value={first}
                  onChange={(e) => setFirst(e.target.value)}
                />
              </div>
              <div className="contact-form-name-input">
                <label>Last Name*</label>
                <input
                  className="form"
                  type="text"
                  // placeholder="Your name"
                  name="lastname"
                  required
                  size={40}
                  value={last}
                  onChange={(e) => setLast(e.target.value)}
                />
              </div>
            </div>
            <br />
            <div className="contact-form-email-container">
              <label>Email*</label>
              <input
                className="form"
                type="email"
                // placeholder="Email"
                name="email"
                required
                size={94}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br />
            <div className="contact-form-email-container">
              <label>Message*</label>
              <textarea
                className="form"
                // placeholder="Your message"
                name="message"
                required
                cols={77}
                rows={15}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <br />

            <button className="submit" type="submit">
              {" "}
              Submit{" "}
            </button>
            <div className="row">{result ? <Result /> : null}</div>
          </form>
          {/* <p>*-Required</p> */}
        </div>
      </div>
    </div>
  );
}

export default Contact;
