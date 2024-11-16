import Button from "../components/Button/button";
import AppointmentForm from "./AppointmentScheduling";
import PatientTestimonial from "./Testimonials";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="home-container">
      <div className="home-container__items">
        {/* Hero Section */}
        <section className="hero">
          <div className="hero__content">
            <h1>Welcome to Talchowk dental clinic</h1>
            <p>
              Your health is our top priority. We provide the best care for you
              and your loved ones.
            </p>
            <Button
              type="primary"
              size="large"
              onClick={() => navigate("/appointments")}
            >
              Book an Appointment
            </Button>
          </div>
        </section>

        {/* Service Overview Section */}
        <section className="service-overview">
          <div className="service-overview__container">
            <h2 className="service-overview__heading">Our Services</h2>
            <div className="service-overview__services">
              <div className="service-overview__services-item">
                <h3>General Checkup</h3>
                <p>Comprehensive health checkups for all ages.</p>
                <Button
                  type="primary"
                  size="small"
                  onClick={() => navigate("/services")}
                >
                  More
                </Button>
              </div>
              <div className="service-overview__services-item">
                <h3>Emergency Care</h3>
                <p>24/7 emergency services for critical care.</p>
                <Button
                  type="primary"
                  size="small"
                  onClick={() => navigate("/services")}
                >
                  More
                </Button>
              </div>
              <div className="service-overview__services-item">
                <h3>Specialized Treatments</h3>
                <p>Specialized treatments for a range of conditions.</p>
                <Button
                  type="primary"
                  size="small"
                  onClick={() => navigate("/services")}
                >
                  More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section className="about-us">
          <div className="about-us__container">
            <h2 className="about-us__heading">About Us</h2>
            <p className="about-us__text">
              We are a team of experienced doctors and medical professionals
              dedicated to providing the best health care. Our clinic has been
              serving the community for over 20 years with compassion and
              expertise.
            </p>
            <Button
              type="primary"
              size="large"
              onClick={() => navigate("/about")}
            >
              More
            </Button>
          </div>
        </section>

        {/* Patient Testimonial Section */}
        <section className="patient-testimonial">
          <PatientTestimonial />
        </section>

        {/* Appointment Section */}
        <section className="appointment" id="appointment">
          <AppointmentForm />
        </section>
      </div>
    </div>
  );
}

export default HomePage;
