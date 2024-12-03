import React from 'react';
import { FaRoute, FaBell, FaUserCheck, FaMapMarkedAlt, FaExclamationTriangle, FaComments, FaClipboardList } from 'react-icons/fa'; // Updated icons
import Footer from "../components/Footer";
import "locomotive-scroll/dist/locomotive-scroll.css";
import useLocomotiveScroll from '../hooks/useLocomotiveScroll';

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
    <div className="bg-gray-50 text-gray-800 font-sans" data-scroll-section>
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
     <p className="text-gray-600">Track the live location of the school bus in real-time to know exactly where your child is. Stay updated with accurate GPS tracking for a safer and more convenient commute.
     </p>
   </div>
   <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
     <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
       <FaBell className="mr-3" /> Instant Notifications
     </h3>
     <p className="text-gray-600">Stay updated with instant alerts for bus movements, including when the bus is near the pick-up point, starts its journey, reaches school, departs from school, and completes the drop-off in the evening. 
     </p>
   </div>
   <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
     <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
       <FaUserCheck className="mr-3" /> Secure Communication
     </h3>
     <p className="text-gray-600">Stay connected with timely updates and important messages from the school management or bus driver. Whether it's route changes, schedule updates, or emergency notifications, you'll be informed instantly to ensure your child's commute remains smooth and secure.
     </p>
   </div>
   <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
     <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
       <FaUserCheck className="mr-3" /> Child Attendance Updates
     </h3>
     <p className="text-gray-600">Receive detailed updates on your child’s attendance during pickup and drop-off. Get notified instantly if your child boards the bus, alights at the designated stop, or is marked absent, ensuring you stay informed about their daily commute and safety.
     </p>
   </div>
   <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
     <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
       <FaExclamationTriangle className="mr-3" /> Emergency Alerts
     </h3>
     <p className="text-gray-600">
     Receive instant notifications during emergencies, such as bus breakdowns or unexpected repairs. Stay informed about the situation in real-time, including updates on alternative arrangements, delays, or any required actions, ensuring your child’s safety and minimizing inconvenience.
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
            Receive important updates and messages from the school management or bus driver. 
            </p>
          </div>
        </div>
      </section>

      {/* YouTube Video Tutorial Section */}
      <section className="mt-16 lg:w-[80%] lg:pl-[20%] justify-center">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">Watch Our Tutorial</h2>
        <div className="flex justify-center">
          <div className="sm:h-[50vh] lg:h-[60vh] w-[80vw] rounded-lg overflow-hidden shadow-lg">
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
