import React from "react";
import "./Article.scss";
import article2 from "../../assets/article2.avif";

const Article2 = () => {
  return (
    <div className="article-page">
      <header className="article-header">
        <h1>How One-on-One Tutoring Improves Student Confidence</h1>
        <p className="meta">By Riya Sharma • October 18, 2025</p>
        <img src={article2} alt="Tutoring Benefits" className="article-image" />
      </header>

      <div className="article-content">
        <p>
          Confidence is a key part of academic success. When students work
          one-on-one with a tutor, they not only understand concepts better but
          also start believing in their own potential.
        </p>
        <p>
          Personalized tutoring creates a safe learning environment where
          students can ask questions freely and make mistakes without judgment.
        </p>
        <p>
          A dedicated tutor identifies individual learning styles, adjusts
          teaching speed, and gives immediate feedback. This builds both
          academic understanding and self-assurance.
        </p>
        <p>
          With time, students begin to see progress — and every small success
          reinforces their confidence. That’s the power of one-on-one tutoring!
        </p>
      </div>
    </div>
  );
};

export default Article2;
