import React from "react";
import "./ServicesSection.css";

function ServicesSection() {
  const services = [
    {
      icon: "💊",
      title: "Pharmacy",
      description: "We provide high-quality medicines and consultation at your convenience."
    },
    {
      icon: "🩺",
      title: "Checkups",
      description: "Regular health checkups to help you stay healthy and aware."
    },
    {
      icon: "🧪",
      title: "Lab Tests",
      description: "Fast and accurate lab testing for all your diagnostic needs."
    },
    {
      icon: "🏥",
      title: "Operation",
      description: "Advanced surgical procedures with expert doctors and safe practices."
    },
    {
      icon: "🧑‍⚕️",
      title: "Expert Doctors",
      description: "Team of certified professionals from various medical specialties."
    },
    {
      icon: "🚑",
      title: "Emergency Services",
      description: "24/7 ambulance and emergency care, just a call away."
    }
  ];

  return (
    <section className="services" id="Services"data-aos="fade-up"
  data-aos-delay="200"
  data-aos-duration="1500" >
      <div className="service-container">
        <h2 className="services-title">Our Services</h2>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
