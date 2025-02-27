import React, { useState } from "react";
import "../styles/ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="contact-form">
      {formSubmitted ? (
        <div className="success-message">
          <h2>Thank you for reaching out!</h2>
          <p>We will get back to you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {["name", "email", "phone", "message"].map((field) => (
            <div className="form-group" key={field}>
              <label htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              {field === "message" ? (
                <textarea
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              ) : (
                <input
                  type={field === "email" ? "email" : "text"}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="input-field"
                  required
                />
              )}
            </div>
          ))}
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
