import React from 'react';
// Importing necessary icons from react-icons library
import { FaDesktop, FaLock, FaSignInAlt, FaChartBar, FaDatabase, FaBell, FaEdit, FaMobileAlt, FaBusAlt, FaSearch, FaExclamationTriangle, FaRoute, FaUserCheck, FaMapMarkedAlt, FaClipboardList } from 'react-icons/fa';
import "locomotive-scroll/dist/locomotive-scroll.css";
import Footer from "../components/Footer";
import gsapfordriver from '../hooks/gsapfordriver';

const WorkingSchool = () => {
  gsapfordriver();
  const testimonials = [
    {
      name: "Principal Sharma",
      feedback:
        "The E-Gobus system has revolutionized our transportation management. Real-time tracking and automated attendance save hours of manual effort daily!",
      image: "principal.jpg",
    },
    {
      name: "Mrs. Mehta",
      feedback:
        "Parents feel so reassured knowing exactly where their children are. Communication has never been smoother between management and families.",
      image: "parent.jpg",
    },
    {
      name: "Transport Manager Raj",
      feedback:
        "Route optimization features have significantly reduced fuel costs and streamlined scheduling. An excellent tool for modern schools!",
      image: "manager.jpg",
    },
  ];

  return (
    <div className=" bg-gray-50 text-gray-800 font-sans" data-scroll-section>
      {/* Header */}
      <header className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="flex flex-col items-center">
          <h1 className=" text-4xl font-extrabold text-center mb-4 pt-10">
            School Bus Management 
          </h1>
          <p className="text-lg text-center max-w-2xl mx-auto leading-relaxed">
            Efficiently manage your school bus fleet, ensure safety compliance, and stay connected with parents all in one platform.
          </p>
        </div>
      </header>

      {/* Features Section */}
      <section className="container1 mx-auto px-6 py-12">
        <h2 className="one text-3xl font-semibold text-center text-blue-600 mb-8">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Feature Cards */}
          <div className="one bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <div className="flex flex-col items-center">
              <FaRoute className="text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-blue-600 text-center">
                Fleet Management
              </h3>
            </div>
            <p className="text-gray-600">
              Manage all school buses, routes, and schedules efficiently from a centralized system.
            </p>
          </div>
          <div className="one bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <div className="flex flex-col items-center">
              <FaUserCheck className="text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-blue-600 text-center">
                Attendance Tracking
              </h3>
            </div>
            <p className="one text-gray-600">
              Automate and monitor student attendance during pickups and drop-offs for better accountability.
            </p>
          </div>
          <div className="one bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <div className="flex flex-col items-center">
              <FaMapMarkedAlt className="text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-blue-600 text-center">
                Route Optimization
              </h3>
            </div>
            <p className="text-gray-600">
              Plan and adjust bus routes to save fuel, reduce travel time, and ensure timely operations.
            </p>
          </div>
          <div className="one bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <div className="flex flex-col items-center">
              <FaClipboardList className="text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-blue-600 text-center">
                Real-Time Monitoring
              </h3>
            </div>
            <p className="text-gray-600">
              Track all buses in real-time to ensure smooth operations and immediate responses to issues.
            </p>
          </div>
          <div className="one bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <div className="flex flex-col items-center">
              <FaBell className="text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-blue-600 text-center">
                Parent Communication
              </h3>
            </div>
            <p className="text-gray-600">
              Keep parents informed with announcements, updates, or alerts directly through the app.
            </p>
          </div>
          <div className="one bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <div className="flex flex-col items-center">
              <FaExclamationTriangle className="text-3xl mb-4" />
              <h3 className="text-xl font-semibold text-blue-600 text-center">
                Safety Compliance
              </h3>
            </div>
            <p className="text-gray-600">
              Ensure all buses meet safety standards, including GPS tracking, seat belts, and emergency protocols.
            </p>
          </div>
        </div>
      </section>

    {/* Process Flow Section */}
<section className="container mx-auto px-6 py-12">
  <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">Management Process Flow</h2>

  <div className="flex flex-wrap lg:flex-nowrap">
    {/* Left Section: Website Process Flow */}
    <div className="w-full lg:w-1/2 p-6">
      <h3 className="text-2xl font-semibold text-blue-600 flex items-center justify-center mb-4">
        <FaDesktop className="text-2xl mr-3" />
        Website Process Flow
      </h3>
      <div className="space-y-6">
        {/* Step 1: Credential Collection */}
        <div className="flowl bg-white shadow-md rounded-lg p-6 flex flex-col items-center">
          <h4 className="text-xl font-semibold text-gray-900 flex flex-col items-center">
            <FaLock className="text-2xl mb-2" />
            <span>Step 1: Credential Collection</span>
          </h4>
          <p className="text-gray-600">
            Collect login credentials from the school administration to access the E-Gobus website.
          </p>
        </div>

        {/* Step 2: Login & Benefits */}
        <div className="flowl bg-white shadow-md rounded-lg p-6">
          <h4 className="text-xl font-semibold text-gray-900 flex flex-col items-center">
            <FaSignInAlt className="text-2xl mb-2" />
            <span>Step 2: Login & Benefits</span>
          </h4>
          <p className="text-gray-600">
            Login to the website and gain access to all E-Gobus features, including bus management and communication tools.
          </p>
        </div>

        {/* Step 3: Dashboard Analytics */}
        <div className="flowl bg-white shadow-md rounded-lg p-6">
          <h4 className="text-xl font-semibold text-gray-900 flex flex-col items-center">
            <FaChartBar className="text-2xl mb-2" />
            <span>Step 3: Dashboard Analytics</span>
          </h4>
          <p className="text-gray-600">
            View insights such as total buses, active buses, trips, and student attendance through the dashboard.
          </p>
        </div>

        {/* Step 4: Data Management */}
        <div className="flowl bg-white shadow-md rounded-lg p-6">
          <h4 className="text-xl font-semibold text-gray-900 flex flex-col items-center">
            <FaDatabase className="text-2xl mb-2" />
            <span>Step 4: Data Management</span>
          </h4>
          <p className="text-gray-600">
            Manage data related to students, buses, drivers, and trips. Use bulk upload for quick updates.
          </p>
        </div>

        {/* Step 5: Push Notification */}
        <div className="flowl bg-white shadow-md rounded-lg p-6">
          <h4 className="text-xl font-semibold text-gray-900 flex flex-col items-center">
            <FaBell className="text-2xl mb-2" />
            <span>Step 5: Push Notification</span>
          </h4>
          <p className="text-gray-600">
            Send notifications to drivers, parents, or both based on specific events or updates.
          </p>
        </div>

        {/* Step 6: Detail Updates */}
        <div className="flowl bg-white shadow-md rounded-lg p-6">
          <h4 className="text-xl font-semibold text-gray-900 flex flex-col items-center">
            <FaEdit className="text-2xl mb-2" />
            <span>Step 6: Detail Updates</span>
          </h4>
          <p className="text-gray-600">
            Manage and update information for buses, drivers, students, and trips directly through the website interface for accuracy.
          </p>
        </div>
      </div>
    </div>

    {/* Right Section: Mobile App Process Flow */}
    <div className="w-full lg:w-1/2 p-6">
      <h3 className="text-2xl font-semibold text-blue-600 flex items-center justify-center mb-4">
        <FaMobileAlt className="text-2xl mr-3" />
        Mobile App Process Flow
      </h3>
      <div className="space-y-6">
        {/* Step 1: Login */}
        <div className="flowr bg-white shadow-md rounded-lg p-6">
          <h4 className="text-xl font-semibold text-gray-900 flex flex-col items-center">
            <FaSignInAlt className="text-2xl mb-2" />
            <span>Step 1: Login</span>
          </h4>
          <p className="text-gray-600">
            Use credentials to log in to the mobile app and access all real-time features.
          </p>
        </div>

        {/* Step 2: Fleet Management */}
        <div className="flowr bg-white shadow-md rounded-lg p-6">
          <h4 className="text-xl font-semibold text-gray-900 flex flex-col items-center">
            <FaBusAlt className="text-2xl mb-2" />
            <span>Step 2: Fleet Management</span>
          </h4>
          <p className="text-gray-600">
            Monitor the locations of all school buses in real-time to track their progress, enhance operational efficiency, and ensure they reach their destinations on time.
          </p>
        </div>

        {/* Step 3: Bus Trip Notifications */}
        <div className="flowr bg-white shadow-md rounded-lg p-6">
          <h4 className="text-xl font-semibold text-gray-900 flex flex-col items-center">
            <FaBell className="text-2xl mb-2" />
            <span>Step 3: Bus Trip Notifications</span>
          </h4>
          <p className="text-gray-600">
            Configure notifications to inform school management when the school bus starts and ends its trip, ensuring timely updates and enhanced operational oversight.
          </p>
        </div>

        {/* Step 4: Search Functionality */}
        <div className="flowr bg-white shadow-md rounded-lg p-6">
          <h4 className="text-xl font-semibold text-gray-900 flex flex-col items-center">
            <FaSearch className="text-2xl mb-2" />
            <span>Step 4: Search Functionality</span>
          </h4>
          <p className="text-gray-600">
            Effortlessly search for students, buses, or drivers within the app, ensuring quick access to relevant information and improving operational management.
          </p>
        </div>

        {/* Step 5: Push Notification */}
        <div className="flowr bg-white shadow-md rounded-lg p-6">
          <h4 className="text-xl font-semibold text-gray-900 flex flex-col items-center">
            <FaBell className="text-2xl mb-2" />
            <span>Step 5: Push Notification</span>
          </h4>
          <p className="text-gray-600">
            Send instant notifications to parents, drivers, or school staff for important updates.
          </p>
        </div>

        {/* Step 6: Incident Management (SOS for Drivers) */}
        <div className="flowr bg-white shadow-md rounded-lg p-6">
          <h4 className="text-xl font-semibold text-gray-900 flex flex-col items-center">
            <FaExclamationTriangle className="text-2xl mb-2" />
            <span>Step 6: Incident Management (SOS for Drivers)</span>
          </h4>
          <p className="text-gray-600">
            When drivers activate the SOS feature, incidents such as breakdowns or emergencies are logged. Admins receive immediate notifications for prompt action and resolution.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>



        {/* YouTube Video Tutorial Section */}
      <section className="utubec mt-16 lg:w-[80%] lg:pl-[20%] justify-center">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">Watch Our Tutorial</h2>
        <div className="flex justify-center">
          <div className="utube sm:h-[50vh] lg:h-[60vh] w-[80vw] ounded-lg overflow-hidden shadow-lg">
            <iframe
              src="https://www.youtube.com/embed/abcd1234" // Replace with the actual video ID
              width="100%"
              height="100%"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              tabIndex="0"
              title="YouTube Tutorial"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Parent Testimonials */}
      <section className="bg-gray-100 py-12">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">Parent Testimonials</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 max-w-xs text-center hover:shadow-2xl transform transition duration-300 hover:scale-105"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <p className="font-bold text-lg">{testimonial.name}</p>
              <p className="text-gray-600 mt-2">{testimonial.feedback}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WorkingSchool;
