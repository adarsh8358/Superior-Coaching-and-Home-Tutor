import React from "react";
import "./Article.scss";
import article3 from "../../assets/article3.avif";

const Article3 = () => {
  return (
    <div className="article-page">
      <header className="article-header">
        <h1>Balancing School, Coaching, and Self-Study: A Practical Guide</h1>
        <p className="meta">By Amit Kumar • October 25, 2025</p>
        <img src={article3} alt="Balance Study Life" className="article-image" />
      </header>

      <div className="article-content">
        <p>
          Between school assignments, coaching classes, and personal study time,
          students often feel overwhelmed. The secret to managing all three is
          balance — not perfection.
        </p>
        <p>
          <strong>1️⃣ Prioritize Wisely —</strong> Identify your weak subjects
          and allocate more time to them. Focus on understanding, not memorizing.
        </p>
        <p>
          <strong>2️⃣ Plan Smartly —</strong> Create a weekly schedule that
          includes short study sessions and revision breaks.
        </p>
        <p>
          <strong>3️⃣ Rest and Recharge —</strong> Don’t underestimate the power
          of sleep and mental breaks. They fuel productivity and focus.
        </p>
        <p>
          Remember — balance isn’t about doing everything. It’s about doing what
          matters most with focus and purpose.
        </p>
      </div>
    </div>
  );
};

export default Article3;
