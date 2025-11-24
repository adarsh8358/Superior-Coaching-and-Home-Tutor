import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initScrollAnimations = () => {
  // Hero section fade-in
  gsap.from(".hero-section .hero-left", {
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top 80%",
    },
    x: -50,
    opacity: 0,
    duration: 1,
  });

  gsap.from(".hero-section .hero-right", {
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top 80%",
    },
    x: 50,
    opacity: 0,
    duration: 1,
  });

  // About section fade-up
  gsap.from(".about-section .about-container", {
    scrollTrigger: {
      trigger: ".about-section",
      start: "top 80%",
    },
    y: 50,
    opacity: 0,
    duration: 1,
  });

  // Program cards stagger
  gsap.from(".program-card", {
    scrollTrigger: {
      trigger: ".programs-section",
      start: "top 85%",
    },
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
  });

  // Get Involved section
  gsap.from(".getinvolved-section .getinvolved-left", {
    scrollTrigger: {
      trigger: ".getinvolved-section",
      start: "top 80%",
    },
    x: -50,
    opacity: 0,
    duration: 1,
  });

  // Contact form animation
  gsap.from(".contact-section .contact-container", {
    scrollTrigger: {
      trigger: ".contact-section",
      start: "top 85%",
    },
    scale: 0.9,
    opacity: 0,
    duration: 1,
  });
};
