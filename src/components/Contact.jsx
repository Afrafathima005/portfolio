import "../styles/global.css";
import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-heading">Contact Me</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required></textarea>
        <button type="submit" className="contact-btn">Send</button>
      </form>
    </section>
  );
};

export default Contact;
