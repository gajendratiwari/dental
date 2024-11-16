import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { DataContext } from "../context/DataContext";

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const data = useContext(DataContext); // Access the data from context

  // Check if the data is still loading or not available
  if (!data) return <p>Loading...</p>;

  // Find the service from the data using serviceId
  const service = data.find((s) => s.id === parseInt(serviceId));

  // If the service is not found
  if (!service) return <p>Service not found!</p>;

  return (
    <div className="service-detail">
      <h1>{service.name}</h1>
      <p>{service.description}</p>

      <h3>Benefits</h3>
      <ul>
        {service.benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>

      <div className="before-after">
        <h3>Before & After</h3>
        <div>
          <img src={`/path/to/images/${service.beforeImage}`} alt="Before" />
          <img src={`/path/to/images/${service.afterImage}`} alt="After" />
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
