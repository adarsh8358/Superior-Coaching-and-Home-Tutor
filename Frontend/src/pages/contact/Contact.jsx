import React, { useEffect, useState } from "react";
import "./Contact.scss";
import { Mail, Phone, MapPin, Send, Instagram, Facebook, Linkedin, Twitter, X } from "lucide-react";

const Contact = () => {
  const [branches, setBranches] = useState(0);
  const [clients, setClients] = useState(0);

  // number counter animation
  useEffect(() => {
    let startBranches = 0;
    let startClients = 0;
    const endBranches = 15;
    const endClients = 1200;
    const duration = 2000;
    const interval = 20;
    const stepB = endBranches / (duration / interval);
    const stepC = endClients / (duration / interval);

    const timer = setInterval(() => {
      startBranches += stepB;
      startClients += stepC;
      if (startBranches >= endBranches && startClients >= endClients) {
        clearInterval(timer);
      } else {
        setBranches(Math.floor(startBranches));
        setClients(Math.floor(startClients));
      }
    }, interval);
  }, []);

  return (
    <div className="contact-page">
      {/* ----------- HERO ----------- */}
      <section className="contact-hero">
        <h1>Get in Touch with <span>Superior Tutor</span></h1>
        <p>
          Have questions, want to enroll, or interested in becoming a tutor?
          We're here to help! Reach out to us anytime — we love hearing from you.
        </p>
      </section>

      {/* ----------- CONTACT INFO ----------- */}
      {/* <section className="contact-info">
        <div className="info-card">
          <Mail size={40} className="icon" />
          <h3>Email</h3>
          <p>support@sssuperiorassociates.com</p>
        </div>
        <div className="info-card">
          <Phone size={40} className="icon" />
          <h3>Phone</h3>
          <p>+91 98765 43210</p>
        </div>
        <div className="info-card">
          <MapPin size={40} className="icon" />
          <h3>Address</h3>
          <p>Bhopal, Madhya Pradesh, India</p>
        </div>
      </section> */}

      <section className="contact-info">
        <div className="info-card" onClick={() => window.location.href = "mailto:support@sssuperiorassociates.com"}>
          <Mail size={40} className="icon" />
          <h3>Email</h3>
          <p className="clickable">superior@gmail.com</p>
        </div>

        <div className="info-card" onClick={() => window.location.href = "tel:+919876543210"}>
          <Phone size={40} className="icon" />
          <h3>Phone</h3>
          <p className="clickable">+91 98765 43210</p>
        </div>

        <div className="info-card">
          <MapPin size={40} className="icon" />
          <h3>Address</h3>
          <p>Bhopal, Madhya Pradesh, India</p>
        </div>
      </section>


      {/* ----------- CONTACT FORM ----------- */}
      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <p>We’ll get back to you as soon as possible.</p>

        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc4y9VEezdsjaX1sQRtUreswL-vRD_MYztT6VFlXY5YG9_iRw/viewform?embedded=true" width="640" height="1031" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>

        {/* <form>
          <div className="form-row">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="form-row">
            <input type="tel" placeholder="Mobile Number" required />
            <input type="text" placeholder="Subject" />
          </div>
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit" className="send-btn">
            <Send size={18} /> Send Message
          </button>
        </form> */}
      </section>

      {/* ----------- STATS SECTION ----------- */}
      <section className="contact-stats">
        <div className="stat">
          <h2>{branches}+</h2>
          <p>Active Branches</p>
        </div>
        <div className="stat">
          <h2>{clients}+</h2>
          <p>Happy Students & Parents</p>
        </div>
      </section>

      {/* ----------- SOCIALS ----------- */}
      <section className="contact-socials">
        <h2>Follow Us</h2>
        <div className="social-icons">
          <a href="#" aria-label="Instagram">
            <Instagram size={28} />
          </a>
          <a href="#" aria-label="Facebook">
            <Facebook size={28} />
          </a>
          <a href="#" aria-label="LinkedIn">
            <Linkedin size={28} />
          </a>
          <a href="#" aria-label="Twitter">
            <Twitter size={28} />
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
