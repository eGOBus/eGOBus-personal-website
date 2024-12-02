import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import Footer from "../components/Footer";
const Home = () => {

  return (
    <>
    <div className="relative bg-white flex items-center justify-between min-h-screen lg:gap-10 px-6 lg:px-24 py-10 text-gray-800">
  {/* Left Section */}
  <div className="flex flex-col justify-center lg:w-1/2 w-full pt-8">
    {/* Title Section */}
    <div className="title text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-normal mb-2 mx-auto">
      <h1 className="gsap-text tracking-normal">
        e<span className="text-[#fcd32d]">GO</span> Bus
      </h1>
    </div>
    {/* Motto Section */}
    <div className="motto text-sm sm:text-base md:text-xl lg:text-2xl font-medium tracking-wide mt-1 relative overflow-hidden">
      <p className="gsap-text text-center lg:text-left">
        e-GO Bus is an innovative app crafted for parents, students, and bus drivers to make school
        commutes safer, more efficient, and less stressful. e-GO Bus delivers peace of mind by ensuring
        every school bus journey is accounted for and easy to monitor.
      </p>
      <h2 className="gsap-text text-gray-600 mt-2 text-center lg:text-left">
        <i>~ On Time, Peace Of Mind</i>
      </h2>
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
      <div className="relative sm:mt-8 h-auto bg-[#fcd32d] px-4 pt-3 pb-16 lg:px-10 lg:rounded-t-[60px] rounded-t-[50px] lg:mt-7 z-30 flex flex-col lg:flex-row lg:gap-3 gap-1">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 mt-4 items-center justify-center font-serif text-center lg:text-left" id="offerSection">
          <h2 className="text-2xl text-center font-bold mb-4 pt-4">What We Offer</h2>
          <hr />
          <img src="school.png" alt="School bus" className="w-full h-auto object-cover p-4" />
        </div>
        {/* Right Section: Features */}
        <div className="w-full lg:w-1/2 lg:mt-16 mt-3 px-5 flex flex-col justify-center overflow-y-auto" id="featuresSection">
          {[
            {
              title: "Real-Time GPS Tracking",
              description: "Offer live tracking of school buses, allowing parents and school admins to monitor the exact location of buses in real-time.",
              icon: "fa-location-pin",
            },
            {
              title: "Instant Notifications",
              description: "Send alerts to parents about bus arrivals, delays, estimated times, and traffic updates, keeping them informed about their child's journey and potential delays.",
              icon: "fa-bell",
            },
            {
              title: "Driver Attendance Tracking",
              description: "Enable drivers to mark attendance for each student upon boarding, helping parents and schools keep track of who is on board.",
              icon: "fa-user-check",
            },
            {
              title: "Parent Communication Hub",
              description: "Provide a way for parents to communicate directly with drivers or support teams in case of changes, emergencies, or reporting absences.",
              icon: "fa-phone-alt",
            },
            {
              title: "Forgotten Item Alerts",
              description: "Notify parents and students if any belongings are left on the bus, with options for retrieving them easily.",
              icon: "fa-box",
            },
            {
              title: "SOS Alert for Drivers",
              description: "An emergency SOS button for drivers that instantly notifies school management of emergencies, allowing for quick response and coordination.",
              icon: "fa-exclamation-triangle",
            },
          ].map((feature, index) => (
            <div key={index} className="mb-4">
              <h3 className="text-xl font-semibold mb-3 flex items-center">
                <i className={`fa-solid ${feature.icon} mr-2`}></i> {feature.title}
              </h3>
              <p className="px-10 text-sm">{feature.description}</p>
            </div>
          ))}
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
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-base sm:text-lg lg:text-xl py-3 px-6 sm:px-8 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 focus:outline-none">
            Features for Parents
          </button>
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-base sm:text-lg lg:text-xl py-3 px-6 sm:px-8 rounded-lg hover:from-yellow-500 hover:to-yellow-700 transition-all duration-200 focus:outline-none">
            Features for School Management
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="carousel-container">
        <div className="carousel">
          {["Slide 1", "Slide 2", "Slide 3"].map((slide, index) => (
            <div key={index} className="carousel-item">
              <img src={`https://via.placeholder.com/600x400?text=${slide}`} alt={slide} />
            </div>
          ))}
        </div>
        <button className="carousel-btn prev">&#10094;</button>
        <button className="carousel-btn next">&#10095;</button>
      </div>

      {/* Why Choose Us Section */}
      <div className="h-auto -mt-14 min-h-[90vh] bg-gray-900 px-6 sm:px-10 lg:rounded-t-[60px] rounded-t-[50px] flex flex-col text-white items-center justify-center relative z-50" id="thirdPage">
        <h2 className="text-4xl sm:text-5xl lg:text-7xl mt-6 pt-10 pb-4 font-semibold mb-6 text-center">
          Why Choose Us ?
        </h2>
        <p className="text-center px-4 sm:px-6 lg:px-0 max-w-lg text-lg sm:text-xl lg:text-2xl mb-8">
          Our eGO Bus system offers unmatched safety, convenience, and transparency for school transportation, giving parents and school management peace of mind.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white text-base sm:text-lg lg:text-xl py-3 px-6 sm:px-8 rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all duration-200 focus:outline-none">
            Explore Features
          </button>
          <button className="bg-gradient-to-r from-blue-400 to-blue-600 text-white text-base sm:text-lg lg:text-xl py-3 px-6 sm:px-8 rounded-lg hover:from-blue-500 hover:to-blue-700 transition-all duration-200 focus:outline-none">
            Contact Us
          </button>
        </div>
      </div>
    
    <Footer/>
    </>
  );
};

export default Home;
