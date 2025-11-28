import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("Sending...");

    const form = new FormData();
    form.append("name", formData.name);
    form.append("email", formData.email);
    form.append("message", formData.message);
    form.append("access_key", "0416131b-3515-4cbe-9977-72944d599169"); // Your Web3Forms Access Key

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const data = await response.json();

      if (data.success) {
        setStatusMessage("Thank you! Your message has been sent.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatusMessage("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatusMessage("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section className="contact-section container py-5">
      <h2 className="contact-title text-center mb-5">Contact Me</h2>
      <div className="contact-content d-flex flex-column align-items-center">
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
        {statusMessage && <p className="mt-3">{statusMessage}</p>}
      </div>
    </section>
  );
};

export default Contact;

