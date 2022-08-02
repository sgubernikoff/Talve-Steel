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

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_opnnbkk",
        "template_qnta5tg",
        form.current,
        "WPUweZAoXmamBd_kZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  setTimeout(() => {
    showResult(false);
  }, 5000);
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
            <h3 className="align_left">999-999-9999</h3>
          </div>
          <div className="contact_text_holder_1">
            <p>We would to hear from you! What can we help you with today?</p>
          </div>

          <div className="contact_text_holder_2">
            <h4 className="h_line_height">Corporate Office</h4>
            <p>Address</p>
            <p>Address2</p>
            <p>City, State, Zip</p>
            <p>Phone Number</p>
            <p>Fax Number</p>
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
                <label>First Name *</label>
                <input
                  className="form"
                  type="text"
                  // placeholder="Your name"
                  name="firstname"
                  required
                  size={40}
                />
              </div>
              <div className="contact-form-name-input">
                <label>Last Name *</label>
                <input
                  className="form"
                  type="text"
                  // placeholder="Your name"
                  name="lastname"
                  required
                  size={40}
                />
              </div>
            </div>
            <br />
            <div className="contact-form-email-container">
              <label>Email *</label>
              <input
                className="form"
                type="email"
                // placeholder="Email"
                name="email"
                required
                size={94}
              />
            </div>
            <br />
            <div className="contact-form-email-container">
              <label>Message *</label>
              <textarea
                className="form"
                // placeholder="Your message"
                name="message"
                required
                cols={77}
                rows={15}
              />
            </div>
            <br />

            <button className="submit" type="submit">
              {" "}
              Submit{" "}
            </button>
            <div className="row">{result ? <Result /> : null}</div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
