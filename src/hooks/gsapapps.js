import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const gsapapps = () => {
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
      ".hero-img",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.2, stagger: 0.3 },
      ".hero-section",
      "top 80%"
    );
}, []);
};

export default gsapapps