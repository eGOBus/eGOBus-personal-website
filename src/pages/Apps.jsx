import React from "react";
import Footer from "../components/Footer";
import { FaGooglePlay, FaApple,FaBus } from 'react-icons/fa';
import gsapapps from "../hooks/gsapapps";

function Apps() {
  gsapapps();
  
  // Sections for the App
  const appSections = [
    {
      title: "Parents",
      description:
        "This is the app that suits the parent's use. SMS notifications or Online App notifications are sent instantly to parents.",
      image: "path/to/parents-image.png", // Replace with actual image path
    },
    {
      title: "School",
      description:
        "This is the app designed for school authorities. SMS notifications or Online App notifications are sent instantly to parents.",
      image: "path/to/school-image.png", // Replace with actual image path
    },
    {
      title: "Driver",
      description:
        "This is the app created for the use of drivers. It is very easy to use and lets the driver instantly update the whereabouts.",
      image: "path/to/driver-image.png", // Replace with actual image path
    },
    {
      title: "Features",
      description:
        "Our app is packed with features helpful to parents, school authorities, and school bus drivers.",
      image: "path/to/features-image.png", // Replace with actual image path
    },
  ];

  // Sections for the Website
  const websiteSections = [
    {
      title: "Excel Data Uploading",
      description:
        "Easily upload bulk student data using Excel files in the specified format. This feature saves time and reduces the workload for school management.",
      image: "form.png", // Replace with the actual image path
    },
    {
      title: "Real-Time Tracking",
      description:
        "Monitor school bus locations in real time to ensure the safety and security of students during their commute.",
      image: "path/to/tracking-image.png", // Replace with the actual image path
    },
    {
      title: "Parent Notifications",
      description:
        "Send instant notifications to parents via SMS or the app to update them about schedules, delays, or arrivals.",
      image: "path/to/notifications-image.png", // Replace with the actual image path
    },
    {
      title: "Driver App Integration",
      description:
        "A dedicated app for drivers to update trip details and ensure seamless communication with school authorities.",
      image: "path/to/driver-app-image.png", // Replace with the actual image path
    },
  ];

  return (
    <div 
     className="min-h-screen bg-gray-100 text-gray-800 flex flex-col overflow-x-hidden" data-scroll-container>
       <header className="bg-zinc-700 text-black pt-8 pb-4 relative">
        <div className="max-w-5xl mt-10 mx-auto text-center relative ">
          {/* Marquee container */}
          <div className="flex items-center space-x-4  animate-marquee">
            {/* School bus image */}
            <img
              src="bushead.png" // Replace with your school bus image path
              alt="School Bus"
              className="w-16 h-auto"
            />
            {/* Welcome Text */}
            <h1 className=" text-4xl font-bold text-white  whitespace-nowrap">
  Welcome to e-GO Bus
</h1>
</div>
        </div>
      </header>

      {/* Introduction Section */}
      <section className="hero-section  py-12 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="hero-text text-3xl font-bold text-yellow-500 mb-6">
            Two Applications, One Goal
          </h2>
          <p className="hero-text1 text-gray-600 text-lg mb-8">
            We offer two robust applications tailored to meet the needs of schools, parents, and drivers:
          </p>
          <div className="grid gap-12 md:grid-cols-2">
            {/* Mobile App Section */}
            <div className="mobile-section bg-gray-100 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-yellow-500">Mobile App</h3>
              <p className="text-gray-600 mt-4">
                A user-friendly mobile application designed for parents, school authorities, and drivers to stay updated on bus schedules, locations, and notifications.
              </p>
              <div className="mt-6 flex justify-center space-x-4">
                  {/* Google Play Icon */}
            <a href="https://play.google.com" target="_blank" rel="noopener noreferrer">
              <FaGooglePlay className="text-yellow-500 text-3xl" />
            </a>
            {/* App Store Icon */}
            <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
              <FaApple className="text-yellow-500 text-3xl" />
            </a>
              </div>
            </div>

            {/* Web App Section */}
            <div className="mobile-section1 bg-gray-100 shadow-lg rounded-lg p-6">
              <h3 className="text-xl font-semibold text-yellow-500">Web Application</h3>
              <p className="text-gray-600 mt-4">
                A powerful web-based platform for schools to manage students, drivers, and bus schedules seamlessly with bulk data upload and other advanced features.
              </p>
              <div className="mt-6 text-center">
                <a
                  href="https://yourwebsite.com" // Replace with your website URL
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Features */}
      <section className="Features py-12 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="head text-3xl font-bold text-center text-yellow-600 mb-8">
            Explore Our App
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            {appSections.map((section, index) => (
              <div
                key={index}
                className="app bg-gray-50 shadow-lg rounded-lg overflow-hidden flex flex-col items-center text-center"
              >
                <img
                  src={section.image}
                  alt={`${section.title} illustration`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-yellow-500">
                    {section.title}
                  </h3>
                  <p className="text-gray-600 mt-4">{section.description}</p>
                  <button className="mt-6 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Website Features */}
      <section className="Website py-12 bg-white text-gray-300">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="head text-3xl font-bold text-center text-yellow-400 mb-8">
            Website Features
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            {websiteSections.map((section, index) => (
              <div
                key={index}
                className="web bg-gray-50 shadow-lg rounded-lg overflow-hidden flex flex-col items-center text-center"
              >
                <img
                  src={section.image}
                  alt={`${section.title} illustration`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-yellow-300">
                    {section.title}
                  </h3>
                  <p className="text-black mt-4">{section.description}</p>
                  {/* {section.title === "Excel Data Uploading" && (
                    <button className="mt-6 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none">
                      Learn More
                    </button>
                  )} */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Apps;
