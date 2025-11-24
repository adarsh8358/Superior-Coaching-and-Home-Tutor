import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import "./Footer.scss";
import logo from "../assets/logo4.jpg"; // adjust path

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Left Section */}
        <div className="footer-left">
          <img src={logo} alt="Superior Coaching" className="footer-logo" />
          <p className="footer-desc">
            Empowering students and tutors to connect, learn, and grow. Superior Coaching is where 
            quality education meets opportunity — helping learners succeed and tutors inspire.
          </p>
          <Link to="/become-tutor" className="tutor-btn">Become a Tutor</Link>
        </div>

        {/* Middle Section */}
        <div className="footer-middle">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/programs">Programs</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/blog">Blog</Link></li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="footer-right">
          <h3>Contact Info</h3>
          <p>📍 123 Learning Street, Delhi, India</p>
          <p>📞 +91 8989582466</p>
          <p>✉️ info@superiortutors.com</p>
          <div className="footer-socials">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedinIn /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Superior Coaching and Home Tutor. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
