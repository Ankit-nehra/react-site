import React, { useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="navbar">
      <div className="container">
        <h1 className="logo">
          <img src={logo} alt="Logo" />
        </h1>
        <button className="menu-toggle" onClick={toggleNavbar}>
          ☰
        </button>
        <nav className={isOpen ? "nav open" : "nav"}>
          <ul className="nav-links">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#Services">Services</a></li>
            <li><a href="#Departments">Departments</a></li>
            <li><a href="#Doctors">Doctors</a></li>
            <li><a href="#Gallery">Gallery</a></li>
            <li><a href="#contacts">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
