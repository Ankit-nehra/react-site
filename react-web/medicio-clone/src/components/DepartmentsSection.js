import React, { useState } from "react";
import "./DepartmentsSection.css";

function DepartmentsSection() {
  const departments = [
    {
      name: "Cardiology",
      description:
        "Cardiology deals with disorders of the heart. Our specialists ensure your heart stays strong.",
    },
    {
      name: "Neurology",
      description:
        "Neurology focuses on the brain and nervous system. We treat strokes, seizures, and more.",
    },
    {
      name: "Hepatology",
      description:
        "Hepatology is the study of liver diseases. Our team is skilled in managing all liver-related conditions.",
    },
    {
      name: "Pediatrics",
      description:
        "Pediatrics ensures your child’s health and wellness with expert care and gentle treatment.",
    },
    {
      name: "Eye Care",
      description:
        "Eye Care services cover everything from routine checkups to advanced surgical procedures.",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="departments" id="Departments"data-aos="fade-up"
  data-aos-delay="200"
  data-aos-duration="1500">
      <div className="container">
        <h2 className="departments-title">Departments</h2>
        <div className="tabs">
          <div className="tab-buttons">
            {departments.map((dept, index) => (
              <button
                key={index}
                className={activeTab === index ? "active" : ""}
                onClick={() => setActiveTab(index)}
              >
                {dept.name}
              </button>
            ))}
          </div>
          <div className="tab-content">
            <h3>{departments[activeTab].name}</h3>
            <p>{departments[activeTab].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DepartmentsSection;
