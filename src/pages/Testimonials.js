import React from "react";

const Testimonials = () => (
  <div className="container">
    <section id="testimonials">
      <h1>Customer reviews</h1>
      <p>Read what our clients have to say about working with us!</p>
      <button
        onClick={() => (window.location.href = "/#contact")}
        className="contact-button"
      >
        Contact Us
      </button>
    </section>
  </div>
);

export default Testimonials;
