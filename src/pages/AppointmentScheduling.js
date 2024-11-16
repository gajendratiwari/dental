import React, { useState, useContext } from "react";
import { DataContext } from "../components/context/DataContext";
import Button from "../components/Button/button";

const AppointmentForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    serviceType: "",
  });
  const [errors, setErrors] = useState({});
  const data = useContext(DataContext);

  if (!data) return <div>Loading...</div>;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    // Validate name (should contain only letters and spaces)
    if (!formData.name || !/^[a-zA-Z\s]+$/.test(formData.name)) {
      newErrors.name = "Please enter a valid name.";
    }

    // Validate email format
    if (
      !formData.email ||
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email.";
    }

    // Validate phone number (example validation for 10 digits)
    if (!formData.phone || !/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a 10-digit phone number.";
    }

    // Ensure a service type is selected
    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service type.";
    }

    // Ensure a date is selected and is not in the past
    if (!formData.date || new Date(formData.date) < new Date()) {
      newErrors.date = "Please select a valid date.";
    }

    // Ensure a time is selected
    if (!formData.time) {
      newErrors.time = "Please select a preferred time.";
    }

    setErrors(newErrors);

    // If there are no errors, the form is valid
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        // Make the API call to the Netlify serverless function
        const response = await fetch("/.netlify/functions/send-email", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert("Your appointment request has been submitted and emailed!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            date: "",
            time: "",
            serviceType: "",
          });
        } else {
          alert("Failed to send email. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Error occurred while sending email.");
      }
    }
  };

  return (
    <div className="appointment-page">
      <div className="why-book-with-us">
        <h3>Why Book With Us?</h3>
        <p>
          Our professional team is dedicated to providing top-notch service to
          make your experience unforgettable.
        </p>
        <ul>
          <li>Experienced Staff</li>
          <li>Quality Service</li>
          <li>Comfortable Environment</li>
          <li>Flexible Appointment Times</li>
        </ul>
      </div>
      <div className="appointment-form-container">
        <h2>Book an Appointment</h2>
        <form className="appointment-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
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
            <label htmlFor="phone">Phone Number</label>
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
            <label htmlFor="serviceType">Type of Appointment</label>
            <select
              id="serviceType"
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              required
            >
              <option value="">Select a Service</option>
              {data.map((service) => (
                <option key={service.id} value={service.name}>
                  {service.name}
                </option>
              ))}
            </select>
            {errors.serviceType && (
              <p className="error">{errors.serviceType}</p>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="date">Preferred Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
            {errors.date && <p className="error">{errors.date}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="time">Preferred Time</label>
            <input
              type="time"
              id="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
            {errors.time && <p className="error">{errors.time}</p>}
          </div>
          <Button type="submit" size="large">
            Book an Appointment
          </Button>
        </form>
      </div>
    </div>
  );
};

export default AppointmentForm;
