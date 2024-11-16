import React from "react";
import photo from "../assets/images/nawaraj.JPG";

const AboutUs = () => {
  return (
    <div className="about-us">
      <section className="intro">
        <h1>Welcome to Talchowk Dental Clinic</h1>
        <p>
          At Talchowk dental clinic, we are dedicated to providing exceptional
          dental care in a warm, welcoming environment. Our mission is to
          promote the oral health and well-being of our community, one smile at
          a time.
        </p>
      </section>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to deliver personalized, top-quality dental services
          that exceed our patients' expectations. We believe in creating lasting
          relationships built on trust, care, and professionalism.
        </p>
      </section>

      <section className="values">
        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Compassion:</strong> We care deeply about our patients and
            prioritize their comfort and needs.
          </li>
          <li>
            <strong>Excellence:</strong> We uphold the highest standards in
            dental care and continuously strive for improvement.
          </li>
          <li>
            <strong>Integrity:</strong> We believe in honesty, transparency, and
            ethical practices in everything we do.
          </li>
        </ul>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="team-member">
            <img src={photo} alt="Nawaraj Tiwari" />
            <h3>Nawaraj Tiwari</h3>
            <p>Lead Dentist</p>
            <p>
              Nawaraj Tiwari specializes in preventive and restorative dentistry
              with over 10 years of experience.
            </p>
          </div>
        </div>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <ul>
          <li>General Checkup</li>
          <li>Emergency Care</li>
          <li>Specialized Treatments</li>
        </ul>
      </section>

      <section className="contact">
        <h2>Contact Us</h2>
        <p>
          Have questions or need to schedule an appointment? Reach out to us at{" "}
          <a href="mailto:info@talchowkdental.com">info@talchowkdental.com</a>
          <br />
          or call us at <a href="tel:+1234567890">+977 9856085530</a>.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
