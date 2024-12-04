import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const gsap_about = () => {
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
            ".Who-we-are-text",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, stagger: 0.3 },
            ".Who-We-Are-Section",
            "top 80%"
          );
          createAnimation(
            ".para ",
            {  opacity: 0, y: 50  },
            {  opacity: 1, y: 0, delay: 0.5, duration: 1.5, stagger: 0.3 },
            ".Who-We-Are-Section",
            "top 70%"
          );
        //   createAnimation(
        //     ".pics ",
        //     { opacity: 0, x: 50 },
        //     { opacity: 1, x: 0, duration:3, delay:1,stagger: 0.3 },
        //     ".Who-We-Are-Section",
        //     "top 50%"
        //   );
//Why-Use-e-GOBus-Section
        createAnimation(
            ".head",
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, stagger: 0.3 },
            ".Why-Use-e-GOBus-Section",
            "top 80%"
          );
          createAnimation(
            ".Questions",
            { opacity: 0, x: -100 },
            { opacity: 1, x: 0, duration: 1.2, stagger: 0.3 },
            ".Why-Use-e-GOBus-Section",
            "top 75%"
          );
          createAnimation(
            ".Question",
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1, stagger: 0.3 },
            ".Why-Use-e-GOBus-Section",
            "top 75%"
          );
          createAnimation(
            ".image",
            { opacity: 0, x: 50 },
            { opacity: 1, x: 0,duration: 2},
            ".Why-Use-e-GOBus-Section",
            "top 70%"
          );
          createAnimation(
            ".Features ",
            { opacity: 0, scale: 0.92 },
            { opacity: 1,  scale:1,duration: 2 },
            ".Why-Use-e-GOBus-Section",
            "top 65%"
          );
          createAnimation(
            ".last-text",
            { opacity: 0, x: -50 },
            { opacity: 1, x: 0, duration: 1.3, stagger: 0.3 },
            ".Why-Use-e-GOBus-Section",
            "top 60%"
          );
          createAnimation(
            ".paras ",
            {  opacity: 0, y: 50  },
            {  opacity: 1, y: 0, delay: 0.5, duration: 1.5, stagger: 0.3 },
            ".How-Did-It-All-Start",
            "top 70%"
          );
    }, []);
};

export default gsap_about

