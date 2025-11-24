import React from "react";
import "./Article.scss";

// ✅ Import your images
import article1 from "../../assets/article1.avif";
import article2 from "../../assets/article2.avif";
import article3 from "../../assets/article3.avif";

const Article = () => {
  return (
    <div className="articles-container">
      {/* ===== Article 1 ===== */}
      <div className="article-page">
        <header className="article-header">
          <h1>5 Proven Study Techniques That Boost Memory Retention</h1>
          <p className="meta">By Superior Tutors Team • October 12, 2025</p>
          <img src={article1} alt="Study Techniques" className="article-image" />
        </header>

        <div className="article-content">
          <p>
            Learning effectively isn’t about studying longer — it’s about
            studying smarter. These five research-backed techniques can help
            students retain knowledge faster and more effectively.
          </p>
          <p>
            <strong>1️⃣ Spaced Repetition —</strong> Review material at increasing
            intervals. This method strengthens memory over time.
          </p>
          <p>
            <strong>2️⃣ Active Recall —</strong> Test yourself instead of reading
            passively. Recall-based learning has 2× better retention.
          </p>
          <p>
            <strong>3️⃣ Mind Mapping —</strong> Visualize ideas and their
            relationships. It helps in long-term comprehension.
          </p>
          <p>
            <strong>4️⃣ Pomodoro Technique —</strong> Study for 25 minutes, rest
            for 5. Keeps your focus sharp and prevents burnout.
          </p>
          <p>
            <strong>5️⃣ Teach What You Learn —</strong> Explaining to others
            improves clarity and confidence.
          </p>
          <p>
            Success in academics is built on habits — consistency and curiosity
            lead to mastery!
          </p>
        </div>
      </div>

      {/* ===== Article 2 ===== */}
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

      {/* ===== Article 3 ===== */}
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
    </div>
  );
};

export default Article;
