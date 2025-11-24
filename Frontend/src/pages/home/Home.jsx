import React, { useEffect, useState } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import "./Home.scss";
import "./Responsive.scss";
import logo4 from "../../assets/logo4.jpg"
import testimonial1 from "../../assets/testimonial1.jpg"
import testimonial2 from "../../assets/testimonial2.jpg"
import testimonial3 from "../../assets/testimonial3.jpg"
import WhatsAppButton from "../../components/WhatsAppButton";
import landingv1 from "../../assets/landingv1.mp4";

const Home = () => {

  const navigate = useNavigate();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing: ${email}`);
    setEmail("");
  };



  useEffect(() => {
    const counters = document.querySelectorAll(".count");
    const speed = 50; // smaller = faster

    const animateCounters = () => {
      counters.forEach((counter) => {
        const updateCount = () => {
          const target = +counter.getAttribute("data-target");
          const count = +counter.innerText;

          const increment = target / 100;

          if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(updateCount, speed);
          } else {
            counter.innerText = target;
          }
        };
        updateCount();
      });
    };

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounters();
            observer.disconnect(); // run once
          }
        });
      },
      { threshold: 0.5 }
    );

    const section = document.querySelector(".achievements-section");
    if (section) observer.observe(section);
  }, []);



  const services = [
    {
      title: "Class 1–10 Tutoring",
      desc: "Strong foundational learning for all school subjects with personalized guidance.",
      subjects: ["Mathematics", "Science", "English", "Hindi", "Social Studies"],
      icon: "fa-solid fa-graduation-cap",
      color: "#0078ff",
    },
    {
      title: "Class 11–12 Tutoring",
      desc: "Stream-based coaching for Science, Commerce, Arts, and Agriculture with expert tutors.",
      subjects: ["Science", "Commerce", "Arts", "Agriculture"],
      icon: "fa-solid fa-book-open-reader",
      color: "#005fd1",
    },
    {
      title: "Graduation Level Coaching",
      desc: "Guidance for college students in B.Com, B.Sc, B.A., and other undergraduate programs.",
      subjects: ["B.Com", "B.Sc", "B.A.", "BBA"],
      icon: "fa-solid fa-university",
      color: "#003366",
    },
    {
      title: "CA Foundation & Entrance Prep",
      desc: "Professional coaching for CA Foundation, CUET, and other competitive exams.",
      subjects: ["CA Foundation", "CUET", "Aptitude", "Reasoning"],
      icon: "fa-solid fa-briefcase",
      color: "#0066cc",
    },
  ];

  const testimonials = [
    {
      name: "Riya S.",
      feedback: "I improved my grades drastically thanks to Superior Tutor!",
      img: "/assets/testimonial1.jpg",
    },
    {
      name: "Amit K.",
      feedback: "The tutors are amazing and patient with students.",
      img: "/assets/testimonial2.jpg",
    },
    {
      name: "Priya M.",
      feedback: "I highly recommend Superior Tutor to anyone looking for quality tutoring.",
      img: "/assets/testimonial3.jpg",
    },
  ];


  const faqs = [
    { q: "What ages do you teach?", a: "We teach students from Grade 1 to 12." },
    { q: "How do I schedule a demo class?", a: "You can book a demo through our website CTA form." },
    { q: "What subjects are covered?", a: "We cover Math, Science, English, and more." },
    { q: "Can I become a tutor?", a: "Yes! Check out our 'Become a Tutor' section above." },
  ];

  const posts = [
    { title: "5 Tips to Improve Your Grades", img: "/assets/blog1.jpg" },
    { title: "How to Manage Study Time Effectively", img: "/assets/blog2.jpg" },
    { title: "Best Online Resources for Students", img: "/assets/blog3.jpg" },
  ];

  return (
    <>
     <WhatsAppButton />
      {/* ---------------- HERO SECTION ---------------- */}
      <section className="hero-section">
        <div className="overlay">
          <div className="left">
            <h1>Superior Tutor — Learn Better. Teach Better. Grow Together.</h1>
            <h2>Personalized Coaching and Home Tutoring for Every Need</h2>
            <p>
              Learning should be personal, inspiring, and impactful. Superior Tutor
              bridges the gap between students who want to learn and tutors who love
              to teach — creating a community where knowledge grows and opportunities
              shine.
            </p>
            <div className="btn-group">
              <Link to={"/contact"} className="btn secondary">Become a Tutor</Link >
              <Link to={"/contact"} className="btn primary">Join as a Student</Link >
            </div>
          </div>

          <div className="right">
            <div className="img"></div>
          </div>
        </div>
      </section>

      {/* ---------------- ABOUT SECTION ---------------- */}
      <section className="about-section">
        <div className="container">
          <div className="about-left">
            <img src={logo4} alt="About Superior Tutor" />
          </div>

          <div className="about-right">
            <h2>About Superior Tutor</h2>
            <p>
              Superior Tutor is more than just a coaching and home tutoring service —
              it's a platform built on trust, excellence, and opportunity. Whether
              you're a student striving to achieve academic success or a tutor eager
              to share your expertise, we provide the perfect space to connect,
              learn, and grow.
            </p>
            <p>
              Our approach combines personalized learning with modern teaching
              methods, ensuring every student receives the attention and support they
              deserve. Join us in shaping a smarter, more confident generation.
            </p>
            <Link to={"/about"} className="btn primary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* ---------------- WHY SUPERIOR TUTOR SECTION ---------------- */}
      <section className="why-section">
        <div className="container">
          <h2 className="section-title">Why is Superior Tutor the top choice for every parent?</h2>
          <p className="section-desc">
            Because your child deserves more than just marks. We bring learning home with personalized,
            verified, and experienced tutors who adapt to your child's unique learning style.
            We don't just teach — we track progress, share updates, and ensure consistent growth.
          </p>

          <div className="why-cards">
            <div className="why-card">
              <div className="icon">
                <i className="fas fa-user-tie"></i>
              </div>
              <h3>Experienced Tutors Only</h3>
              <p>All tutors are background-verified with a minimum of 3+ years of teaching experience.</p>
            </div>

            <div className="why-card">
              <div className="icon">
                <i className="fas fa-user-graduate"></i>
              </div>
              <h3>One-on-One Attention</h3>
              <p>Focused and personalized sessions tailored to every student's unique learning needs.</p>
            </div>

            <div className="why-card">
              <div className="icon">
                <i className="fas fa-book-open"></i>
              </div>
              <h3>Comprehensive Curriculum</h3>
              <p>
                Covers school, competitive exams, and college-level subjects with structured study materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- MORE REASONS SECTION ---------------- */}
      <section className="reasons-section">
        <div className="container">
          <h2 className="section-title">More Reasons to Choose Us</h2>

          <div className="reason-cards">
            <div className="reason-card">
              <div className="icon">
                <i className="fas fa-wallet"></i>
              </div>
              <h3>Affordable Pricing</h3>
              <p>Quality education at reasonable rates with flexible payment options.</p>
            </div>

            <div className="reason-card">
              <div className="icon">
                <i className="fas fa-calendar-check"></i>
              </div>
              <h3>Weekly Progress Reports</h3>
              <p>Regular performance updates with actionable improvement plans.</p>
            </div>

            <div className="reason-card">
              <div className="icon">
                <i className="fas fa-female"></i>
              </div>
              <h3>Female Tutors Available</h3>
              <p>Option to choose preferred tutor gender for a comfortable learning environment.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services-section">
        <div className="container">
          <h2 className="section-title">Explore Our Services</h2>
          <p className="section-subtitle">
            From school to college, Superior Tutor offers structured learning programs
            for every student’s educational journey.
          </p>

          <div className="service-grid">
            {services.map((service, index) => (
              <div className="service-card" key={index}>
                <div className="icon" style={{ color: service.color }}>
                  <i className={service.icon}></i>
                </div>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>

                <div className="subjects">
                  {service.subjects.map((subj, i) => (
                    <span key={i} className="tag">
                      {subj}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------------- PROCESS SECTION ---------------- */}
      <section className="process-section">
        <div className="container">
          <h2>How It Works</h2>
          <p className="subtitle">
            Our simple 4-step process ensures the perfect learning experience for every student.
          </p>

          <div className="process-cards">
            <div className="process-card">
              <div className="step-number">1</div>
              <h3>Submit Enquiry</h3>
              <p>
                Fill out our simple enquiry form to let us know your requirements and academic goals.
              </p>
            </div>

            <div className="process-card">
              <div className="step-number">2</div>
              <h3>Free Demo Class</h3>
              <p>
                Experience a trial session with our expert tutor before you decide to continue.
              </p>
            </div>

            <div className="process-card">
              <div className="step-number">3</div>
              <h3>Regular Classes</h3>
              <p>
                Begin your personalized learning journey with regular, structured tutoring sessions.
              </p>
            </div>

            <div className="process-card">
              <div className="step-number">4</div>
              <h3>Track Progress</h3>
              <p>
                Receive regular updates and performance reviews to ensure consistent improvement.
              </p>
            </div>
          </div>

          {/* CTA BUTTON */}
          <div className="cta-button">
            <Link to={"/contact"} className="btn primary">Book a Demo</Link>
          </div>
        </div>
      </section>

      {/* ---------------- ACHIEVEMENTS / SUCCESS SECTION ---------------- */}
      <section className="achievements-section">
        <div className="container">
          <h2>Our Achievements</h2>
          <p className="subtitle">
            We’re proud of the impact we’ve made through quality education and dedicated tutoring.
          </p>

          <div className="achievements-grid">
            <div className="achievement-card">
              <h3 className="count" data-target="5000">0</h3>
              <p>Students Taught</p>
            </div>

            <div className="achievement-card">
              <h3 className="count" data-target="800">0</h3>
              <p>Expert Tutors</p>
            </div>

            <div className="achievement-card">
              <h3 className="count" data-target="1500">0</h3>
              <p>Successful Batches</p>
            </div>

            <div className="achievement-card">
              <h3 className="count" data-target="98">0</h3>
              <p>Success Rate (%)</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------------- CALL TO ACTION / BECOME A TUTOR SECTION ---------------- */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>
            Join Superior Tutor — Empower the Next Generation
          </h2>
          <p>
            Whether you’re a passionate educator or a student eager to learn,
            Superior Tutor connects talent with opportunity. Shape futures,
            share knowledge, and grow with us.
          </p>

          <div className="cta-buttons">
            <Link to={"/contact"}
              className="btn primary"
              onClick={() => navigate("/contact")}
            >
              Book a Demo
            </Link>
            <Link to={"/contact"}
              className="btn secondary"
              onClick={() => navigate("/about")}
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
