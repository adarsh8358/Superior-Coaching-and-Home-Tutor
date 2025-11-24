import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // <-- use NavLink
import "./Nav.scss";
import "./Responsive.scss";
import logo from "../assets/logo3.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Function to return active style
  const activeStyle = ({ isActive }) => ({
    color: isActive ? "lightcoral" : "", // light red when active
  });

  return (
    <nav className="nav-wrapper">
      <div className="nav-container">
        {/* Logo */}
        <div className="logo">
          <NavLink to="https://www.superiorcoachingtutor.com" onClick={closeMenu}>
            <img src={logo} alt="Superior Tutor" />
          </NavLink>
        </div>

        {/* Menu Icon */}
        <div className="menu-icon" onClick={toggleMenu}>
          <i className="ri-menu-line"></i>
        </div>

        {/* Navigation Links */}
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink to="/" onClick={closeMenu} style={activeStyle}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" onClick={closeMenu} style={activeStyle}>
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/tutor" onClick={closeMenu} style={activeStyle}>
              Become a Tutor
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" onClick={closeMenu} style={activeStyle}>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink to="/blog" onClick={closeMenu} style={activeStyle}>
              Blog
            </NavLink>
          </li>

          {/* Join Now Button */}
          <div className="desktop-btn">
            <NavLink to="/contact" className="join-btn" onClick={closeMenu}>
              Join Now
            </NavLink>
          </div>

          {/* Close Icon */}
          <div className="close-icon" onClick={closeMenu}>
            <i className="ri-close-line"></i>
          </div>

          {/* Social Icons */}
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="ri-facebook-circle-fill"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="ri-instagram-fill"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <i className="ri-twitter-x-fill"></i>
            </a>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
