import React from "react";
import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact" id="contacts"data-aos="fade-up"
  data-aos-delay="200"
  data-aos-duration="1500">
      <div className="contactContainer">
        <h2 className="contact-title">Contact Us</h2>

        <div className="contact-grid">
          {/* Contact Info */}
          <div className="contact-info">
            <p><strong>Address:</strong> A108 Adam Street, New York, NY 535022</p>
            <p><strong>Email:</strong> info@example.com</p>
            <p><strong>Phone:</strong> +1 5589 55488 55</p>
          </div>

          {/* Contact Form */}
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" required />
            <textarea placeholder="Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>

        {/* Google Map Embed */}
        <div className="map-container">
          <iframe
            title="clinic-map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3481.2914119291207!2d76.8928829!3d29.3004429!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390dc3b5533b6d9f%3A0x1b563db61bcc0195!2sGEETA%20UNIVERSITY%2C%20NAULTHA%2C%20PANIPAT!5e0!3m2!1sen!2sin!4v1721203722564!5m2!1sen!2sin"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
