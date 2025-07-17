import React from "react";
import "./HeroSection.css";
import heroImg from "../assets/hero-img.jpg"; // We'll add this image next

function HeroSection() {
  return (
    <section className="hero"data-aos="fade-up"
  data-aos-delay="200"
  data-aos-duration="1500">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Welcome to MediCio</h1>
          <p>
            We are here to provide the best medical care for you and your family.
            Trust us for your health and wellness.
          </p>
          <a href="#" className="hero-button">Make an Appointment</a>
        </div>
        <div className="hero-image">
          <img src={heroImg} alt="Doctors" />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
