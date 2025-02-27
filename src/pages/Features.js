import React from "react";

const Features = () => (
  <div className="container">
    <section id="features">
      <h1>Special features</h1>
      <p>Discover the key features that make us stand out in the industry.</p>
      <button
        onClick={() => (window.location.href = "/#contact")}
        className="contact-button"
      >
        Contact Us
      </button>
    </section>
  </div>
);

export default Features;
