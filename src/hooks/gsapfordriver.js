import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
const gsapfordriver = () => {
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
            // Enable reverse on scroll
            ...extraConfig,
          },
        }
      );
    };
    createAnimation(
      ".one",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, stagger: 0.3 },
      ".container1",
      "top 80%"
    );

    createAnimation(
      ".flow",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 2, stagger: 0.3 },
      ".container",
      "top 80%"
    );
    createAnimation(
      ".flowl",
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 2, stagger: 0.3 },
      ".container",
      "top 70%"
    );
    createAnimation(
      ".flowr",
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 2, stagger: 0.3 },
      ".container",
      "top 70%"
    );
    createAnimation(
      ".utube ",
      { opacity: 0, scale: 0.92 },
      { opacity: 1,  scale:1,duration: 2 },
      ".utubec",
      "top 80%"
    );
}, []);
};


export default gsapfordriver