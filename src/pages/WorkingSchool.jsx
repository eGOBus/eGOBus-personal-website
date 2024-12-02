import React from 'react';
import { 
  FaRoute, FaUserCheck, FaMapMarkedAlt, 
  FaExclamationTriangle, FaBell, FaClipboardList, 
  FaDesktop, FaMobileAlt 
} from 'react-icons/fa'; 
import Footer from "../components/Footer";

const WorkingSchool = () => {
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
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-extrabold text-center mb-4 pt-10">
            School Bus Management 
          </h1>
          <p className="text-lg text-center max-w-2xl mx-auto leading-relaxed">
            Efficiently manage your school bus fleet, ensure safety compliance, and stay connected with parents all in one platform.
          </p>
        </div>
      </header>

      {/* Features Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Feature Cards */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
              <FaRoute className="mr-3" /> Fleet Management
            </h3>
            <p className="text-gray-600">
              Manage all school buses, routes, and schedules efficiently from a centralized system.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
              <FaUserCheck className="mr-3" /> Attendance Tracking
            </h3>
            <p className="text-gray-600">
              Automate and monitor student attendance during pickups and drop-offs for better accountability.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
              <FaMapMarkedAlt className="mr-3" /> Route Optimization
            </h3>
            <p className="text-gray-600">
              Plan and adjust bus routes to save fuel, reduce travel time, and ensure timely operations.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
              <FaClipboardList className="mr-3" /> Real-Time Monitoring
            </h3>
            <p className="text-gray-600">
              Track all buses in real-time to ensure smooth operations and immediate responses to issues.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
              <FaBell className="mr-3" /> Parent Communication
            </h3>
            <p className="text-gray-600">
              Keep parents informed with announcements, updates, or alerts directly through the app.
            </p>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
              <FaExclamationTriangle className="mr-3" /> Safety Compliance
            </h3>
            <p className="text-gray-600">
              Ensure all buses meet safety standards, including GPS tracking, seat belts, and emergency protocols.
            </p>
          </div>
        </div>
      </section>

      {/* Process Flow Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">E-Gobus Process Flow</h2>

        <div className="flex flex-wrap lg:flex-nowrap">
          {/* Left Section: Website Process Flow */}
          <div className="w-full lg:w-1/2 p-6">
            <h3 className="text-2xl font-semibold text-blue-600 flex items-center mb-4">
              <FaDesktop className="text-2xl mr-3" />
              Website Process Flow
            </h3>
            <div className="space-y-6">
              {/* Step 1: Credential Collection */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900">Step 1: Credential Collection</h4>
                <p className="text-gray-600">
                  Collect login credentials from the school administration to access the E-Gobus website.
                </p>
              </div>

              {/* Step 2: Login & Benefits */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900">Step 2: Login & Benefits</h4>
                <p className="text-gray-600">
                  Login to the website and gain access to all E-Gobus features, including bus management and communication tools.
                </p>
              </div>

              {/* Step 3: Dashboard Analytics */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900">Step 3: Dashboard Analytics</h4>
                <p className="text-gray-600">
                  View insights such as total buses, active buses, trips, and student attendance through the dashboard.
                </p>
              </div>

              {/* Step 4: Data Management */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900">Step 4: Data Management</h4>
                <p className="text-gray-600">
                  Manage data related to students, buses, drivers, and trips. Use bulk upload for quick updates.
                </p>
              </div>

              {/* Step 5: Detail Updates */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900">Step 5: Detail Updates</h4>
                <p className="text-gray-600">
                  Update the details for buses, drivers, students, and trips through the website interface.
                </p>
              </div>

              {/* Step 6: Notifications */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900">Step 6: Notifications</h4>
                <p className="text-gray-600">
                  Send notifications to drivers, parents, or both based on specific events or updates.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section: Mobile App Process Flow */}
          <div className="w-full lg:w-1/2 p-6">
            <h3 className="text-2xl font-semibold text-blue-600 flex items-center mb-4">
              <FaMobileAlt className="text-2xl mr-3" />
              Mobile App Process Flow
            </h3>
            <div className="space-y-6">
              {/* Step 1: Login */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900">Step 1: Login</h4>
                <p className="text-gray-600">
                  Use credentials to log in to the mobile app and access all real-time features.
                </p>
              </div>

              {/* Step 2: Bus Tracking */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900">Step 2: Bus Tracking</h4>
                <p className="text-gray-600">
                  Track all bus locations in real-time to monitor their progress and ensure timely arrivals.
                </p>
              </div>

              {/* Step 3: Notification Sending */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900">Step 3: Notification Sending</h4>
                <p className="text-gray-600">
                  Send instant notifications to parents, drivers, or school staff for important updates.
                </p>
              </div>

              {/* Step 4: Search Functionality */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900">Step 4: Search Functionality</h4>
                <p className="text-gray-600">
                  Search for specific entities such as students, buses, or drivers directly within the app.
                </p>
              </div>

              {/* Step 5: Bus Status */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900">Step 5: Bus Status</h4>
                <p className="text-gray-600">
                  View bus statuses (active, in transit, completed) and terminate buses if needed.
                </p>
              </div>

              {/* Step 6: Additional Notifications */}
              <div className="bg-white shadow-md rounded-lg p-6">
                <h4 className="text-xl font-semibold text-gray-900">Step 6: Additional Notifications</h4>
                <p className="text-gray-600">
                  Customize notifications such as sending reminders or alerts for upcoming trips or emergencies.
                </p>
              </div>
            </div>
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
