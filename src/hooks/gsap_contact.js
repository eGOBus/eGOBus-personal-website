import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const gsap_contact = () => {
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
        createAnimation(
          ".hero-text",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1.2, stagger: 0.3 },
          ".hero-section",
          "top 80%"
        );
        createAnimation(
          ".contact ",
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, delay:0.5 ,duration: 1.5, stagger: 0.3 },
          ".hero-section",
          "top 75%"
        );
        createAnimation(
          ".map-container ",
          { opacity: 0, scale: 0.92 },
          { opacity: 1,  scale:1,duration: 2 },
          ".map-container",
          "top 80%"
        );
    }, []);
};

export default gsap_contact