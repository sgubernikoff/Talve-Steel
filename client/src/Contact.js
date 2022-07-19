import React from "react";
import contact from "./contact.jpeg";

function Contact() {
  return (
    <div className="contacts">
      <img className="contact_banner" src={contact} alt="contact-banner" />
      <div className="contact-form-container">
        <div className="contact-form-left"></div>
        <div className="contact-form-right">
          <form
            id="my-form"
            // action={FORM_ENDPOINT}
            // onSubmit={handleSubmit}
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
                  name="name"
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
                  name="name"
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
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
