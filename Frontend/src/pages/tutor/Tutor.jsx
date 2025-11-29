import React, { useEffect, useState } from "react";
import "./Tutor.scss";
import tutor from "../../assets/tutor.avif";

const Tutor = () => {
  const [students, setStudents] = useState(0);
  const [tutors, setTutors] = useState(0);

  // Number counter effect
  useEffect(() => {
    let startStudents = 0;
    let startTutors = 0;
    const endStudents = 500;
    const endTutors = 150;
    const duration = 2000;
    const interval = 20;
    const stepStudents = endStudents / (duration / interval);
    const stepTutors = endTutors / (duration / interval);

    const timer = setInterval(() => {
      startStudents += stepStudents;
      startTutors += stepTutors;
      if (startStudents >= endStudents && startTutors >= endTutors) {
        clearInterval(timer);
      } else {
        setStudents(Math.floor(startStudents));
        setTutors(Math.floor(startTutors));
      }
    }, interval);
  }, []);

  return (
    <div className="become-tutor">
      {/* ---------------- HERO ---------------- */}
      <section className="tutor-hero">
        <div className="tutor-hero-content">
          <h1>
            Become a <span>Superior Tutor</span>
          </h1>
          <p>
            Join our growing community of passionate educators who believe in
            empowering students to achieve academic success. Superior Tutor
            offers flexibility, tools, and support to teach effectively — while
            shaping bright futures every day.
          </p>
          <ul>
            <li>🌟 Work with motivated students across multiple subjects.</li>
            <li>💼 Flexible hours that fit your schedule.</li>
            <li>🎯 Get recognized for your impact and expertise.</li>
          </ul>
          <a href="#apply-form" className="cta-btn">
            Apply Now
          </a>
        </div>

        <div className="tutor-hero-image">
          <img src={tutor} alt="Become a Tutor" />
        </div>
      </section>

      {/* ---------------- BENEFITS ---------------- */}
      <section className="benefits">
        <h2>Why Join Superior Tutor?</h2>
        <p className="benefits-desc">
          We value passionate educators who want to make a difference. As a
          Superior Tutor, you’ll enjoy rewarding experiences that enhance both
          your career and your students’ success.
        </p>

        <div className="benefit-cards">
          <div className="card">
            <h3>Flexible Schedule</h3>
            <p>Set your availability and work from the comfort of your home.</p>
          </div>
          <div className="card">
            <h3>Attractive Pay</h3>
            <p>
              Earn competitive rates and bonuses based on your teaching
              performance.
            </p>
          </div>
          <div className="card">
            <h3>Verified Students</h3>
            <p>
              We connect you only with students genuinely seeking tutoring help.
            </p>
          </div>
          <div className="card">
            <h3>Career Growth</h3>
            <p>
              Build your reputation, gain reviews, and expand your teaching
              portfolio.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- HOW IT WORKS ---------------- */}
      <section className="how-it-works">
        <h2>How It Works</h2>
        <div className="steps">
          <div className="step">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0066ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4Z" />
                <path d="M6 20v-2a4 4 0 0 1 4-4h0a4 4 0 0 1 4 4v2" />
              </svg>
            </div>
            <h3>1. Register as a Tutor</h3>
            <p>
              Submit your profile and teaching details. Our team will verify
              your expertise and background.
            </p>
          </div>

          <div className="step">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0066ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="18" height="12" x="3" y="8" rx="2" ry="2" />
                <path d="M7 8V6a5 5 0 0 1 10 0v2" />
              </svg>
            </div>
            <h3>2. Start Teaching</h3>
            <p>
              Once approved, begin teaching students based on your preferred
              subjects and timing.
            </p>
          </div>

          <div className="step">
            <div className="icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="60"
                height="60"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#0066ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
            </div>
            <h3>3. Earn & Grow</h3>
            <p>
              Receive timely payments and continuous growth opportunities with
              our support system.
            </p>
          </div>
        </div>
      </section>

      {/* ---------------- STATS ---------------- */}
      <section className="tutor-stats">
        <div className="stat">
          <h2>{students}+</h2>
          <p>Happy Students</p>
        </div>
        <div className="stat">
          <h2>{tutors}+</h2>
          <p>Professional Tutors</p>
        </div>
        <div className="stat">
          <h2>50+</h2>
          <p>Subjects Covered</p>
        </div>
      </section>

      {/* ---------------- APPLY FORM ---------------- */}
      <section id="apply-form" className="apply-form">
        <h2>Apply to Become a Tutor</h2>
        <p>Fill out this form and we’ll reach out to you soon.</p>

        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc-l7wsbtmn8R2yffiR4dTigCeJ4KcG34a5n9LST9G_bYmDeg/viewform?embedded=true" width="640" height="959" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>


        {/* <form>
          <div className="form-group">
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
          </div>
          <div className="form-group">
            <input type="tel" placeholder="Mobile Number" required />
            <input type="text" placeholder="Subjects You Teach" required />
          </div>
          <textarea
            placeholder="Tell us about your teaching experience"
            required
          ></textarea>
          <button type="submit" className="cta-btn">
            Submit Application
          </button>
        </form> */}

      </section>
    </div>
  );
};

export default Tutor;
