import React from "react";
import "./AboutSection.css";
import aboutImg from "../assets/about.jpg";

function AboutSection() {
  return (
    <section className="about">
      <div className="container">
        <div className="about-image">
          <img src={aboutImg} alt="About Us" />
        </div>
        <div className="about-content" data-aos="fade-up"
         data-aos-delay="200"
  data-aos-duration="1500">
          <h2>About Us</h2>
          <p>
            MediCio is a modern clinic with the mission to provide the best healthcare services. We are dedicated to the well-being of every patient.
          </p>
          <ul className="about-list">
            <li>✔️ Experienced Doctors</li>
            <li>✔️ Modern Equipment</li>
            <li>✔️ 24/7 Emergency Services</li>
            <li>✔️ Affordable Prices</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
