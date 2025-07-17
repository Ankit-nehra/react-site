import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer"data-aos="fade-up"
  data-aos-delay="200"
  data-aos-duration="1500">
      <div className="footer-content">
        <h3>MediCio Clone</h3>
        <p>Made with ❤️ by Ankit Nehra</p>
        <div className="footer-socials">
          <a href="#"><i className="fab fa-facebook-f"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
          <a href="#"><i className="fab fa-linkedin-in"></i></a>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} MediCio. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
