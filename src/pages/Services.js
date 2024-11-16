import React, { useContext } from "react";
import { DataContext } from "../components/context/DataContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/button";

const ServicesPage = () => {
  const navigate = useNavigate();
  const data = useContext(DataContext);

  if (!data) return <div>Loading...</div>;

  return (
    <div className="services-page">
      <h1>Our Services</h1>
      <p className="intro">
        Not only do we provide a broad range of treatment options to make our
        clinic convenient and easily accessed by all, we offer high quality
        dental care at affordable rates while giving our patients better and
        more flexible payment plans to choose from.
      </p>
      <div className="services-list">
        {data.map((service) => (
          <div key={service.id} className="service-overview">
            <img src={service.thumbnail} alt={service.name} />
            <h2>{service.name}</h2>
            <p>{service.description}</p>
            <Button
              type="primary"
              size="small"
              onClick={() => navigate(`/services/${service.id}`)}
            >
              More
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesPage;
