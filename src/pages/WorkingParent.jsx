import React from 'react';
import { FaRoute, FaBell, FaUserCheck, FaMapMarkedAlt, FaExclamationTriangle, FaComments, FaClipboardList } from 'react-icons/fa'; // Updated icons
import Footer from "../components/Footer";

const WorkingParent = () => {
  const testimonials = [
    {
      name: "Anita",
      feedback: "E-Gobus has transformed how I manage my mornings. I feel at ease knowing my child is safe.",
      image: "parent1.jpg",
    },
    {
      name: "Rajesh",
      feedback: "Real-time tracking and notifications have made my life stress-free. Highly recommend it!",
      image: "parent2.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="py-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white pt-24">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-extrabold text-center mb-4">
            Welcome to the Parent's Page!
          </h1>
          <p className="text-lg text-center max-w-2xl mx-auto leading-relaxed">
            Discover how E-Gobus ensures your child’s safety, simplifies your day, and keeps you informed at every step.
          </p>
          <img 
            src="ParentBanner.png" 
            alt="Parent Page Banner" 
            className="mb-4 rounded-lg shadow-lg pt-6"
          />
        </div>
      </header>
       {/* Features Section */}
 <section className="container mx-auto px-6 py-12">
 <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">Key Features</h2>
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
   <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
     <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
       <FaMapMarkedAlt className="mr-3" /> Real-Time Tracking
     </h3>
     <p className="text-gray-600">
       Monitor the live location of the school bus to know exactly where your child is.
     </p>
   </div>
   <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
     <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
       <FaBell className="mr-3" /> Instant Notifications
     </h3>
     <p className="text-gray-600">
       Receive alerts for bus arrivals, delays, route changes, and when your child boards or deboards.
     </p>
   </div>
   <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
     <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
       <FaUserCheck className="mr-3" /> Secure Communication
     </h3>
     <p className="text-gray-600">
       Easily contact the school or bus driver through the app for any queries or concerns.
     </p>
   </div>
   <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
     <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
       <FaUserCheck className="mr-3" /> Child Attendance Updates
     </h3>
     <p className="text-gray-600">
       Get updates on whether your child was present or absent during pickup or drop-off.
     </p>
   </div>
   <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
     <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
       <FaExclamationTriangle className="mr-3" /> Emergency Alerts
     </h3>
     <p className="text-gray-600">
       Be immediately notified in case of emergencies, like breakdowns or delays.
     </p>
   </div>
 </div>
</section>

      {/* Parent Process Workflow */}
      <section className="container mx-auto lg:w-2/3 px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">
          Parent Process Workflow
        </h2>
        <div className="space-y-6">
          {/* Step 1 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 flex flex-col sm:flex-row items-center justify-center">
              <FaClipboardList className="text-2xl mb-2 sm:mb-0 sm:mr-3" />
              Step 1: Collect Credentials (Only Once) and Login
            </h3>
            <p className="text-gray-600">
              Obtain your login credentials from the school management and use them to access the app.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 flex flex-col sm:flex-row items-center justify-center">
              <FaMapMarkedAlt className="text-2xl mb-2 sm:mb-0 sm:mr-3" />
              Step 2: Track the Bus
            </h3>
            <p className="text-gray-600">
              Use the live GPS tracking feature to monitor your child’s commute in real-time.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 flex flex-col sm:flex-row items-center justify-center">
              <FaBell className="text-2xl mb-2 sm:mb-0 sm:mr-3" />
              Step 3: Instant Notifications
            </h3>
            <p className="text-gray-600">
              Receive alerts for bus arrivals, delays, route changes, and more.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 flex flex-col sm:flex-row items-center justify-center">
              <FaUserCheck className="text-2xl mb-2 sm:mb-0 sm:mr-3" />
              Step 4: Attendance Alert
            </h3>
            <p className="text-gray-600">
              Receive notifications when your child boards or deboards the bus.
            </p>
          </div>

          {/* Step 5 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 flex flex-col sm:flex-row items-center justify-center">
              <FaExclamationTriangle className="text-2xl mb-2 sm:mb-0 sm:mr-3" />
              Step 5: Item Missing Alert
            </h3>
            <p className="text-gray-600">
              Be notified immediately if your child reports a missing item.
            </p>
          </div>

          {/* Step 6 */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 flex flex-col sm:flex-row items-center justify-center">
              <FaComments className="text-2xl mb-2 sm:mb-0 sm:mr-3" />
              Step 6: Secure Communication
            </h3>
            <p className="text-gray-600">
              Easily contact the school or bus driver for any queries or concerns.
            </p>
          </div>
        </div>
      </section>

      {/* YouTube Video Tutorial Section */}
      <section className="mt-16 lg:w-[80%] lg:pl-[20%] justify-center">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">Watch Our Tutorial</h2>
        <div className="flex justify-center">
          <div className="h-[400px] w-[80vw] sm: h-[20vh] rounded-lg overflow-hidden shadow-lg">
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

export default WorkingParent;
