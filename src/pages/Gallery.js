import React from "react";

const Gallery = () => (
  <div className="container">
    <section id="gallery">
      <h1>Gallery</h1>
      <p>Explore our work and see the results we deliver for our clients.</p>
      <button
        onClick={() => (window.location.href = "/#contact")}
        className="contact-button"
      >
        Get started here
      </button>
    </section>
  </div>
);

export default Gallery;
