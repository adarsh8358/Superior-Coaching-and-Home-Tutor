import React, { useEffect, useRef, useState } from "react";
import "./About.scss";
import about1 from "../../assets/about1.avif";
import about2 from "../../assets/about2.avif";
import about3 from "../../assets/about3.avif";
import about4 from "../../assets/about4.avif";

const About = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const [students, setStudents] = useState(0);
  const [tutors, setTutors] = useState(0);
  const [subjects, setSubjects] = useState(0);
  const statsRef = useRef(null);

  // Start counters when section becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.4 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (statsVisible) {
      const animate = (target, setter, step, limit) => {
        let count = 0;
        const interval = setInterval(() => {
          count += step;
          if (count >= limit) {
            count = limit;
            clearInterval(interval);
          }
          setter(count);
        }, 20);
      };

      animate(500, setStudents, 5, 500);
      animate(150, setTutors, 3, 150);
      animate(50, setSubjects, 1, 50);
    }
  }, [statsVisible]);

  return (
    <div className="about-page">

      {/* --- SECTION 1: HERO / STORY --- */}
      <section className="about-hero">
        <div className="about-content">
          <h1>About <span>Superior Tutor</span></h1>
          <p>
            Education is not just about grades — it’s about building curiosity,
            confidence, and lifelong learners. At <strong>Superior Tutor</strong>,
            we focus on bringing the best out of every student by combining
            expert teaching, personalized attention, and a supportive environment.
          </p>
          <p>
            Since our inception, we’ve been helping students achieve their goals —
            from board exams to competitive tests, and from school subjects to
            personality development. Our network of passionate tutors ensures
            every learner receives exactly what they need.
          </p>
        </div>
        <div className="about-image">
          <img src={about1} alt="About Superior Tutor" />
        </div>
      </section>

      {/* --- SECTION 2: MISSION --- */}
      <section className="about-mission">
        <div className="mission-image">
          <img src={about2} alt="Our Mission" />
        </div>
        <div className="mission-text">
          <h2>Our Mission & Vision</h2>
          <p>
            Our mission is to redefine the way education works in India by
            empowering students through accessible, personalized, and flexible
            learning experiences.
          </p>
          <p>
            We aim to build a platform where students and tutors collaborate
            seamlessly, making learning a joyful and impactful process.
            Our long-term vision is to become a trusted learning ecosystem
            connecting quality educators with motivated learners across the country.
          </p>
        </div>
      </section>

      {/* --- SECTION 3: WHY CHOOSE US --- */}
      <section className="about-why">
        <div className="why-text">
          <h2>Why Choose Superior Tutor?</h2>
          <p>
            Choosing the right tutoring service can make all the difference.
            Here’s why thousands of parents and students prefer Superior Tutor:
          </p>
          <ul>
            <li>Highly experienced, verified, and background-checked tutors.</li>
            <li>Personalized 1-on-1 attention to boost academic growth.</li>
            <li>Hybrid learning options — online, home, or group sessions.</li>
            <li>Affordable pricing and flexible timings for every student.</li>
            <li>Progress tracking and performance reports for parents.</li>
          </ul>
        </div>
        <div className="why-image">
          <img src={about3} alt="Our Tutors" />
        </div>
      </section>

      {/* --- SECTION 4: ACHIEVEMENTS --- */}
      <section className="about-achievements" ref={statsRef}>
        <h2>Our Achievements</h2>
        <p>
          Over the years, Superior Tutor has helped hundreds of students achieve
          academic success and develop a love for learning. Our community keeps growing every day!
        </p>
        <div className="stats">
          <div className="stat">
            <h3>{students}+</h3>
            <p>Students Taught</p>
          </div>
          <div className="stat">
            <h3>{tutors}+</h3>
            <p>Qualified Tutors</p>
          </div>
          <div className="stat">
            <h3>{subjects}+</h3>
            <p>Subjects Covered</p>
          </div>
        </div>
        <img src={about4} alt="Achievements" className="success-img" />
      </section>

    </div>
  );
};

export default About;
