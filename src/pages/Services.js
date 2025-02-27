import React from "react";

const Services = () => (
  <div className="container">
    <section id="services">
      <h1>Our services include</h1>
      <p>We specialize in business solutions, consulting, and contracting.</p>
      <button
        onClick={() => (window.location.href = "/#contact")}
        className="contact-button"
      >
        Contact Us
      </button>
    </section>
  </div>
);

export default Services;
