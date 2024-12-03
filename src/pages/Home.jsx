import React, { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Footer from "../components/Footer";
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Home = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  

  return (
    <div>
      {/* Hero Section */}
      <div className="relative bg-white md:gap-10 lg:flex lg:h-[82vh] lg:px-24 px-6 lg:py-20 pt-28 text-gray-800 md:flex-row lg:gap-0 gap-5 z-40 py-20">
        {/* Left Section */}
        <div className="left flex flex-col justify-center lg:w-1/2 w-full pt-8">
          {/* Title Section */}
          <div className="title text-6xl font-bold tracking-normal relative mb-2 mx-auto lg:text-8xl">
            <h1 className="gsap-text tracking-normal">
              e<span className="text-[#fcd32d]">GO</span> Bus
            </h1>
          </div>
          {/* Motto Section */}
          <div className="motto text-2xl font-medium tracking-wide mt-1 relative overflow-hidden">
            <p className="gsap-text lg:text-xl text-sm text-center lg:text-left">
              e-GO Bus is an innovative app crafted for parents, students, and bus drivers to make school
              commutes safer, more efficient, and less stressful. e-GO Bus delivers peace of mind by ensuring
              every school bus journey is accounted for and easy to monitor.
            </p>
            <h2 className="gsap-text text-gray-600 mt-2  text-center lg:text-left">
              <i>~ On Time, Peace Of Mind</i>
            </h2>
            <Link to="/contact">
          <button className="mt-10 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-base sm:text-lg lg:text-xl py-3 px-6 sm:px-8 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 focus:outline-none">
           Get Started Now
          </button>
        </Link>
          </div>
        </div>

        {/* Right Section with Lottie Animation */}
        <div className="md:w-1/2 w-full lg:h-auto h-56 relative flex justify-center items-center mt-8 md:mt-0">
          <Player
            src="splashScreenAnimation.json" // Your Lottie animation path
            loop
            autoplay
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>

      {/* What We Offer */}
      <div className="relative sm:mt-8 h-auto bg-[#fcd32d] px-4 pt-3 pb-16 lg:px-10 lg:rounded-t-[60px] rounded-t-[50px] lg:mt-7 z-30 flex flex-col items-center justify-center">
        {/* Heading - Root of the Page */}
        <h2 className="text-4xl md:text-3xl text-center font-bold mb-4 pt-4 w-full">What We Offer</h2>

        {/* Left and Right Sections */}
        <div className="flex flex-col lg:flex-row w-full lg:w-full gap-4 justify-center items-center">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 mt-4 items-center justify-center font-serif text-center">
            <hr className="mb-4" />
            <img src="school.png" alt="School bus" className="w-full h-auto object-cover p-4" />
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 mt-4 items-center justify-center font-serif text-center">
            <hr className="mb-4" />
            {[{
              title: "Real-Time GPS Tracking",
              description: "Offer live tracking of school buses, allowing parents and school admins to monitor the exact location of buses in real-time.",
              icon: "fa-location-pin",
            }, {
              title: "Instant Notifications",
              description: "Send alerts to parents about bus arrivals, delays, estimated times, and traffic updates, keeping them informed about their child's journey and potential delays.",
              icon: "fa-bell",
            }, {
              title: "Driver Attendance Tracking",
              description: "Enable drivers to mark attendance for each student upon boarding, helping parents and schools keep track of who is on board.",
              icon: "fa-user-check",
            }, {
              title: "Parent Communication Hub",
              description: "Provide a way for parents to communicate directly with drivers or support teams in case of changes, emergencies, or reporting absences.",
              icon: "fa-phone-alt",
            }, {
              title: "Forgotten Item Alerts",
              description: "Notify parents and students if any belongings are left on the bus, with options for retrieving them easily.",
              icon: "fa-box",
            }, {
              title: "SOS Alert for Drivers",
              description: "An emergency SOS button for drivers that instantly notifies school management of emergencies, allowing for quick response and coordination.",
              icon: "fa-exclamation-triangle",
            }].map((feature, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <i className={`fa-solid ${feature.icon} mr-2`} aria-hidden="true"></i> {feature.title}
                </h3>
                <p className="px-10 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="h-auto relative min-h-[90vh] bg-gray-800 px-6 sm:px-10 lg:rounded-t-[60px] rounded-t-[50px] flex flex-col text-white z-50 -mt-12 pb-20 flex justify-center items-center" id="howItWorks">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl mt-6 pt-10 pb-4 font-semibold mb-6 text-center">
          How It Works ?
        </h2>
        <p className="text-center px-4 sm:px-6 lg:px-0 max-w-lg text-lg sm:text-xl lg:text-2xl mb-8">
          Discover how our eGO Bus system provides tailored features and tools for parents and school management, ensuring a safe, efficient, and transparent transportation experience.
        </p>
        <p className="text-center px-4 sm:px-6 lg:px-0 max-w-lg text-lg sm:text-xl lg:text-2xl mb-12">
          Learn about our innovative solutions designed for enhanced security, real-time tracking, and easy communication.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 sm:justify-center items-center">
          <Link to="/workingParent">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-base sm:text-lg lg:text-xl py-3 px-6 sm:px-8 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 focus:outline-none">
              Features for Parents
            </button>
          </Link>
          <Link to="/workingDriver">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-base sm:text-lg lg:text-xl py-3 px-6 sm:px-8 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 focus:outline-none">
              Features for Drivers
            </button>
          </Link>
          <Link to="/workingSchool">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-base sm:text-lg lg:text-xl py-3 px-6 sm:px-8 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 focus:outline-none">
              Features for School Management
            </button>
          </Link>
        </div>
      </div>
  


            {/* Call-to-Action Section */}
      <div className="  py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Join the eGO Bus Revolution</h2>
        <p className="text-lg mb-6">
          Experience the safest and most efficient school transportation system.
        </p>
        <Link to="/about">
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-base sm:text-lg lg:text-xl py-3 px-6 sm:px-8 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 focus:outline-none">
            Learn More
          </button>
        </Link>
      </div>
{/* FAQ Section */}
<div className="bg-slate-100 text-gray-800 py-10 sm:py-20 px-8">
  <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-10">Frequently Asked Questions</h2>
  <div className="max-w-3xl mx-auto">
    {[ 
      {
        question: "Is eGO Bus available in my area?",
        answer: "eGO Bus services are expanding rapidly. Check with your school to see if it’s available.",
      },
      {
        question: "How secure is the real-time tracking?",
        answer: "We use advanced encryption and secure systems to ensure data privacy and accuracy.",
      },
      {
        question: "Can parents communicate with drivers directly?",
        answer: "Yes, parents can send messages or call drivers through the app for quick communication.",
      },
      {
        question: "How do I track my child's bus?",
        answer: "Simply open the eGO Bus app and select the live tracking option to view the real-time location of the bus on the map.",
      },
      {
        question: "Is the app available on both iOS and Android?",
        answer: "Yes, eGO Bus is available for download on both the iOS App Store and Google Play Store.",
      },
      {
        question: "What happens if my child forgets an item on the bus?",
        answer: "If an item is left behind, parents and students will receive an instant notification. You can easily arrange for the item to be retrieved or dropped off by contacting the driver through the app.",
      },
    ].map((faq, index) => (
      <details 
        key={index} 
        className="border-b border-gray-300 py-4 group"
        open={index === 0} // Default the first question to open
      >
        <summary 
          className="cursor-pointer text-lg sm:text-xl font-semibold text-gray-700 flex justify-between items-center group-hover:text-yellow-500">
          {faq.question}
          <span className="transform group-open:rotate-180 transition-transform">
            <i className="fas fa-chevron-down"></i>
          </span>
        </summary>
        <p className="mt-2 text-gray-600 pl-4 sm:pl-6">{faq.answer}</p>
      </details>
    ))}
  </div>
</div>



      <Footer />
    </div>
  );
};

export default Home;
