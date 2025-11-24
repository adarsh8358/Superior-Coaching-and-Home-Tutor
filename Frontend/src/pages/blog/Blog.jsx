import React from "react";
import { Link } from "react-router-dom";
import "./Blog.scss";
import blog1 from "../../assets/blog1.avif";
import blog2 from "../../assets/blog2.avif";
import blog3 from "../../assets/blog3.avif";
import blog4 from "../../assets/blog4.avif";
import { Mail, BookOpen, Star } from "lucide-react";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "5 Effective Study Techniques to Boost Memory",
      img: blog1,
      link: "/article1",
      desc: "Discover powerful methods to retain more information and study smarter.",
    },
    {
      id: 2,
      title: "Balancing School & Tutoring: A Student’s Perspective",
      img: blog2,
      link: "/article2",
      desc: "How students manage their time effectively while getting extra academic support.",
    },
    {
      id: 3,
      title: "How Personalized Tutoring Builds Confidence",
      img: blog3,
      link: "/article3",
      desc: "Learn how one-on-one sessions transform hesitant learners into confident achievers.",
    },
  ];

  const faqs = [
    {
      q: "How often are new blogs published?",
      a: "We post new content every week covering study tips, motivation, and academic resources.",
    },
    {
      q: "Can I contribute a guest post?",
      a: "Yes, educators can send guest articles after approval by our editorial team.",
    },
    {
      q: "Are these blogs written by professional tutors?",
      a: "Yes, our blogs are written by experienced tutors and education experts.",
    },
  ];

  const testimonials = [
    {
      name: "Ananya Verma",
      feedback:
        "Superior Tutor blogs are so helpful! I found great time-management advice that really worked.",
    },
    {
      name: "Rahul Singh",
      feedback:
        "I love how relatable and practical each article feels. They really understand what students need.",
    },
    {
      name: "Priyanka Das",
      feedback:
        "The tips for online learning and confidence-building are game changers!",
    },
  ];

  return (
    <div className="blog-page">
      {/* ---------- HERO SECTION ---------- */}
      <section className="blog-hero">
        <h1>
          Superior Tutor <span>Blog & Insights</span>
        </h1>
        <p>
          Explore expert articles, study hacks, and motivational stories to help
          students learn smarter and succeed faster.
        </p>
      </section>

      {/* ---------- FEATURED ARTICLE ---------- */}
      <section className="featured-article">
        <img src={blog4} alt="Featured Blog" />
        <div className="featured-content">
          <h2>Featured Article: Master Your Exams with Confidence</h2>
          <p>
            Learn the best strategies from top tutors on how to prepare for exams
            effectively, reduce stress, and perform your best.
          </p>
          <Link to="/article" className="read-btn">Read Full Article</Link>
        </div>
      </section>

      {/* ---------- LATEST ARTICLES ---------- */}
      <section className="latest-articles">
        <h2>Latest Articles</h2>
        <div className="articles-grid">
          {articles.map((article) => (
            <Link key={article.id} to={article.link} className="card">
              <img src={article.img} alt={article.title} />
              <h4>{article.title}</h4>
              <p>{article.desc}</p>
              <span className="read-more">Read More →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- POPULAR TOPICS ---------- */}
      <section className="topics">
        <h2>Popular Topics</h2>
        <div className="topic-tags">
          <span>Mathematics</span>
          <span>Science</span>
          <span>Motivation</span>
          <span>Study Skills</span>
          <span>Career Tips</span>
          <span>Exams</span>
        </div>
      </section>

      {/* ---------- SUCCESS STORIES ---------- */}
      <section className="success-stories">
        <h2>What Our Readers Say</h2>
        <div className="testimonials">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <Star color="#ffcc00" fill="#ffcc00" />
              <p>"{t.feedback}"</p>
              <h4>- {t.name}</h4>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- QUICK TIPS ---------- */}
      <section className="quick-tips">
        <h2>Quick Study Tips</h2>
        <div className="tips-grid">
          <div className="tip-card">📚 Break long study sessions into chunks.</div>
          <div className="tip-card">🕒 Use Pomodoro technique for focus.</div>
          <div className="tip-card">🧠 Revise regularly instead of cramming.</div>
          <div className="tip-card">💬 Teach someone else to test your knowledge.</div>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="faq">
        <h2>Frequently Asked Questions</h2>
        {faqs.map((f, i) => (
          <div key={i} className="faq-item">
            <h4>{f.q}</h4>
            <p>{f.a}</p>
          </div>
        ))}
      </section>

      {/* ---------- FOOTER QUOTE ---------- */}
      <section className="quote">
        <BookOpen size={40} color="#0055ff" />
        <p>“Education is the most powerful weapon which you can use to change the world.”</p>
        <h4>— Nelson Mandela</h4>
      </section>
    </div>
  );
};

export default Blog;
