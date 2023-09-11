import React from "react";

const ContactMe = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me</span>
        </h2>

        <form method="POST" action="https://formspree.io/f/mzblvpdq">
          <div className="input-box">
            <input
              required
              type="text"
              placeholder="Full Name"
              autoComplete="off"
              name="name"
            />
            <input
              required
              type="email"
              placeholder="Email Address"
              autoComplete="off"
              name="email"
            />
          </div>
          <div className="input-box">
            <input
              required
              type="number"
              placeholder="Mobile Number"
              autoComplete="off"
              name="number"
            />
            <input
              required
              type="text"
              placeholder="Email Subject"
              autoComplete="off"
              name="subject"
            />
          </div>
          <textarea
            required
            name="email body"
            cols="30"
            rows="10"
            placeholder="Your messege"
            autoComplete="off"
          ></textarea>
          <input type="submit" value="Send Message" className="btn" />
        </form>
      </section>
    </>
  );
};

export default ContactMe;
