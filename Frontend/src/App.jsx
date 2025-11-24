import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Tutor from "./pages/tutor/Tutor"
import Contact from "./pages/contact/Contact"
import Blog from "./pages/blog/Blog"
import Article from "./pages/article/Article"
import Article1 from "./pages/article/Article1"
import Article2 from "./pages/article/Article2"
import Article3 from "./pages/article/Article3"
import { initScrollAnimations } from "./utils/scrollAnimations";
import ScrollToTop from "./components/ScrollToTop";

// 🟩 Import Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  useEffect(() => {
    initScrollAnimations();
  }, []);

  return (
    <Router>
      <ScrollToTop />
      {/* 🟩 Global ToastContainer — outside Navbar so it stays on top of everything */}
      {/* <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
        style={{ zIndex: 100000 }}
        toastStyle={{
          background: "#4CAF50",   // ✅ green background
          color: "#fff",           // ✅ white text
          fontWeight: "bold",
          fontSize: "16px",
          borderRadius: "8px",
          zIndex: 10000,
        }}
      /> */}

      <Navbar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tutor" element={<Tutor />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/article" element={<Article />} />
          <Route path="/article1" element={<Article1 />} />
          <Route path="/article2" element={<Article2 />} />
          <Route path="/article3" element={<Article3 />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
