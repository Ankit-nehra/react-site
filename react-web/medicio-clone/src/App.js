import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import AppointmentForm from "./components/AppointmentForm";
import DepartmentsSection from "./components/DepartmentsSection";
import DoctorsSection from "./components/DoctorsSection";
import FAQSection from "./components/FAQSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";


import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true,     // animate only once while scrolling
  });
}, []);

  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AppointmentForm />
      <DepartmentsSection />
      <DoctorsSection />
     <ImageSlider />

      <FAQSection />
      <ContactSection />
      <Footer />
    </>
  );
}

export default App;
