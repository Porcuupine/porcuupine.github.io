import React from "react";

const About = () => (
  <div className="container">
    <section id="about" className="section">
      <h1>About</h1>
      <p>
        &nbsp;&nbsp;&nbsp;&nbsp; Welcome to OUR company, your trusted TV
        mounting experts! We mount TVs of all sizes, ensuring a clean and
        seamless installation for homes and businesses. Our skilled technicians
        deliver top-quality service with precision and efficiency. Whether you
        need a wall-mounted setup, an over-the-fireplace installation, or a
        custom solution, we’ve got you covered. We handle everything - from
        hardware selection to cable management - ensuring safety and
        compatibility. Customer satisfaction is our priority, offering reliable
        and affordable service. Contact us for a professional TV installation!
      </p>
      <button
        onClick={() => (window.location.href = "/#contact")}
        className="contact-button"
      >
        Learn more
      </button>
    </section>
  </div>
);

export default About;
