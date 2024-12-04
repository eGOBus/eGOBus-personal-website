import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const useGSAP_home = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const createAnimation = (selector, from, to, trigger, start, extraConfig = {}) => { 
      gsap.fromTo(
        selector,
        from,
        {
          ...to,
          scrollTrigger: {
            trigger,
            start,
            toggleActions: "play reverse play reverse", // Enable reverse on scroll
            ...extraConfig,
          },
        }
      );
    };

    // Hero Section Animation
    createAnimation(
      ".gsap-text",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.3 },
      ".hero-section",
      "top 80%"
    );

    // Offer Section Animations
    createAnimation(
      ".gsap-offer-title",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1 },
      ".offer-section",
      "top 70%"
    );

    createAnimation(
      ".gsap-offer-item",
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.2 },
      ".offer-section",
      "top 70%"
    );
    createAnimation(
      ".image",
      { opacity: 0, scale: 0.9,y:50 },
      { opacity: 1, scale: 1,y:0, duration: 0.5, stagger: 0.2 },
      ".offer-section",
      "top 70%"
    );

    createAnimation(
      ".right",
      { opacity: 0, x:200 },
      { opacity: 1, x: 0, duration: 1.2, stagger: 0.3 },
      ".hero-section",
      "top 80%"
    );

    // "How It Works" Section
    createAnimation(
      ".gsap-how-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      ".how-it-works-section",
      "top 80%"
    );

    createAnimation(
      ".gsap-how-text",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2 },
      ".how-it-works-section",
      "top 80%"
    );

    createAnimation(
      ".how-it-works-section button",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.3 },
      ".how-it-works-section",
      "top 80%"
    );
   


    // Call-to-Action Section
    createAnimation(
      ".cta-title",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      ".cta-section",
      "top 80%"
    );

    createAnimation(
      ".cta-description",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.2 },
      ".cta-section",
      "top 80%"
    );

    createAnimation(
      ".cta-button",
      { opacity: 0, scale: 0.8 },
      { opacity: 1, scale: 1, duration: 0.8, delay: 0.4 },
      ".cta-section",
      "top 80%"
    );

    // FAQ Section Animation
    createAnimation(
      ".gsap-faq-title",
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1 },
      ".faq-section",
      "top 80%"
    );

    createAnimation(
      ".faq-item",
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.2 },
      ".faq-section",
      "top 70%"
    );

    // Footer Animation
    createAnimation(
      ".gsap-footer",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 },
      ".footer",
      "top 90%"
    );

    // Smooth Entry for Background Sections
    createAnimation(
      ".gsap-bg",
      { opacity: 0 },
      { opacity: 1, duration: 2 },
      ".hero-section",
      "top top",
      { end: "bottom top", scrub: true }
    );
  }, []);
};

export default useGSAP_home;
