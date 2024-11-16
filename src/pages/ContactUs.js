import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate name (letters and spaces only, minimum 2 characters)
    if (!formData.name || !/^[a-zA-Z\s]{2,}$/.test(formData.name)) {
      newErrors.name = "Please enter a valid name with at least 2 letters.";
    }

    // Validate email format
    if (
      !formData.email ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    // Validate phone number (10-15 digits)
    if (!formData.phone || !/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number (10-15 digits).";
    }

    // Validate message (not empty)
    if (!formData.message || formData.message.trim().length < 10) {
      newErrors.message = "Please enter a message with at least 10 characters.";
    }

    setErrors(newErrors);

    // If there are no errors, return true
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Submitted Form Data:", formData);
      alert("Thank you for getting in touch! We will respond shortly.");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="contact-us-container">
      <h1>Contact Us</h1>

      <div className="contact-details">
        <div className="get-in-touch">
          <h2>Get in Touch</h2>
          <p>
            We’re here to assist you with your dental needs. Feel free to reach
            out!
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              {errors.name && <p className="error">{errors.name}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              {errors.phone && <p className="error">{errors.phone}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              {errors.message && <p className="error">{errors.message}</p>}
            </div>
            <button type="submit" className="submit-button">
              Submit
            </button>
          </form>
        </div>

        {/* Opening Hours Section */}
        <div class="opening-hours">
          <h2>Talchowk Dental</h2>
          <h2>Opening Hours</h2>
          <ul>
            <li>Monday: 8:00 AM – 5:30 PM</li>
            <li>Tuesday: 8:00 AM – 6:30 PM</li>
            <li>Wednesday: 8:00 AM – 5:30 PM</li>
            <li>Thursday: 8:00 AM – 6:30 PM</li>
            <li>Friday: 8:00 AM – 5:30 PM</li>
            <li>Saturday: Closed</li>
          </ul>
        </div>
      </div>

      {/* Follow Us Section */}
      <div className="follow-us">
        <h2>Follow Us</h2>
        <p>Stay connected through our social media channels:</p>
        <div className="social-icons">
          <a
            h
            href="https://www.facebook.com/p/Talchowk-dental-clinic-100063912786101/"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.instagram.com/nawaraj113/"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="contact-info">
        <h2>Contact Information</h2>
        <p>
          <strong>Address:</strong> Talchowk Dental Clinic, Talchowk, Pokhara
        </p>
        <p>
          <strong>Call Us:</strong>{" "}
          <a href="tel:+9779856085530">+977 9856085530</a>
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <a href="mailto:info@talchowkdental.com">info@talchowkdental.com</a>
        </p>

        {/* Map Section */}
        <div className="map">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14236.51424834733!2d84.0571669!3d28.1628933!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3995bd8244f6e6cd%3A0xab92a0e5911d5164!2sTal%20Chowk!5e0!3m2!1sen!2sau!4v1697475639105!5m2!1sen!2sau"
            width="100%"
            height="400"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
