import React from "react";
import "./DoctorsSection.css";
import doctor1 from "../assets/doctor1.jpg";
import doctor2 from "../assets/doctor2.jpg";
import doctor3 from "../assets/doctor3.jpg";
import doctor4 from "../assets/doctor4.jpg";

function DoctorsSection() {
  const doctors = [
    {
      image: doctor1,
      name: "Dr. Walter White",
      specialty: "Chief Medical Officer",
    },
    {
      image: doctor2,
      name: "Dr. Sarah Johnson",
      specialty: "Anesthesiologist",
    },
    {
      image: doctor3,
      name: "Dr. William Anderson",
      specialty: "Cardiologist",
    },
    {
      image: doctor4,
      name: "Dr. Amanda Rich",
      specialty: "Neurosurgeon",
    },
  ];

  return (
    <section className="doctors" id="Doctors"data-aos="fade-up"
  data-aos-delay="200"
  data-aos-duration="1500">
      <div className="doctor-container">
        <h2 className="doctors-title">Our Doctors</h2>
        <div className="doctors-grid">
          {doctors.map((doc, index) => (
            <div className="doctor-card" key={index}>
              <img src={doc.image} alt={doc.name} />
              <h3>{doc.name}</h3>
              <p>{doc.specialty}</p>
              <div className="socials">
                <a href="#">🌐</a>
                <a href="#">📘</a>
                <a href="#">🐦</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DoctorsSection;
