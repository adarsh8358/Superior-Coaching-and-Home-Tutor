import React from "react";
import "./Article.scss";
import article1 from "../../assets/article1.avif";

const Article1 = () => {
  return (
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
  );
};

export default Article1;
