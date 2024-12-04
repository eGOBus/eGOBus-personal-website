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
      ".hero-text",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.2, stagger: 0.3 },
      ".hero-section",
      "top 80%"
    );
    createAnimation(
      ".hero-text1",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.3 },
      ".hero-section",
      "top 80%"
    );
    createAnimation(
      ".mobile-section",
      { opacity: 0, scale: 0.9 },
      { opacity: 1,  scale:1,duration: 2 },
      ".hero-section",
      "top 75%"
    );
    createAnimation(
      ".mobile-section1",
      { opacity: 0, scale: 0.9 },
      { opacity: 1,  scale:1,duration: 2 },
      ".hero-section",
      "top 70%"
    );
    createAnimation(
      ".head",
      { opacity: 0,y:50 },
      { opacity: 1,y:0, scale:1,duration: 1.2 },
      ".Features",
      "top 60%"
    );
    createAnimation(
      ".app",
      { opacity: 0,scale:0.9 },
      { opacity: 1, scale:1,duration: 1.2 ,stagger: 0.3 },
      ".Features",
      "top 60%"
    );
    createAnimation(
      ".head",
      { opacity: 0,y:50 },
      { opacity: 1,y:0, scale:1,duration: 1.2 },
      ".Website",
      "top 60%"
    );
    createAnimation(
      ".web",
      { opacity: 0,scale:0.9 },
      { opacity: 1, scale:1,duration: 1.2 ,stagger: 0.3 },
      ".Website",
      "top 60%"
    );
},
 []);
};

export default gsapapps