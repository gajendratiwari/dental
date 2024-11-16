import { useState } from "react";

function PatientTestimonial() {
  const [index, setIndex] = useState(0);

  const testimonials = [
    {
      text: "The care I received was amazing. The doctors and staff were so friendly and helpful!",
      author: "Sailendra Tiwari",
      photo: "/images/patientstestimonial/sailendra.JPG",
    },
    {
      text: "I felt completely at ease during my treatment. Highly recommend this clinic!",
      author: "Anil Devkota",
      photo: "/images/patientstestimonial/anil.JPG",
    },
    {
      text: "The facilities were top-notch, and I felt very comfortable throughout my stay.",
      author: "Rajani Sapkota",
      photo: "/images/patientstestimonial/rajani.JPG",
    },
    {
      text: "Professional staff and a wonderful experience. Thank you for everything!",
      author: "Prashant Gurung",
      photo: "/images/patientstestimonial/prashant.JPG",
    },
  ];

  const nextSlide = () => {
    setIndex((prevIndex) => (prevIndex + 2) % testimonials.length);
  };

  const prevSlide = () => {
    setIndex(
      (prevIndex) => (prevIndex - 2 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="patient-testimonial">
      <div className="patient-testimonial__container">
        <h2 className="patient-testimonial__heading">What Our Patients Say</h2>
        <div className="patient-testimonial__testimonials">
          {testimonials.slice(index, index + 2).map((testimonial, i) => (
            <div key={i} className="patient-testimonial__testimonial-item">
              <img
                src={testimonial.photo}
                alt={testimonial.author}
                className="patient-testimonial__photo"
              />
              <p className="patient-testimonial__text">"{testimonial.text}"</p>
              <h3 className="patient-testimonial__author">
                - {testimonial.author}
              </h3>
            </div>
          ))}
        </div>
        <button
          className="patient-testimonial__arrow patient-testimonial__arrow--left"
          onClick={prevSlide}
        >
          &#10094;
        </button>
        <button
          className="patient-testimonial__arrow patient-testimonial__arrow--right"
          onClick={nextSlide}
        >
          &#10095;
        </button>
      </div>
    </section>
  );
}

export default PatientTestimonial;
