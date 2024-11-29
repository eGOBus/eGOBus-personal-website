import React from 'react';
import { FaRoute, FaExclamationTriangle, FaCarAlt, FaCheckCircle, FaClipboardList } from 'react-icons/fa'; // Font Awesome icons
import Footer from "../components/Footer";

const WorkingDriver = () => {
  const testimonials = [
    {
      name: "John Doe",
      feedback: "The real-time updates have made my job so much easier. I feel supported and connected at all times.",
      image: "sri.jpg",
    },
    {
      name: "Jane Smith",
      feedback: "I love the navigation tools! They save me so much time and reduce stress during busy mornings.",
      image: "kc.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 text-gray-800 font-sans ">

      {/* Header */}
      <header className="py-16 bg-gradient-to-r from-green-400 to-blue-500 text-white pt-24">
  <div className="flex flex-col items-center">
    
    <h1 className="text-4xl font-extrabold text-center mb-4">Welcome to the Driver's page!</h1>
    <p className="text-lg text-center max-w-2xl mx-auto leading-relaxed">
      Explore the key features and tools designed to enhance your work efficiency and safety.
    </p>
    <img 
      src="Driver1.png" 
      alt="Driver Page Banner" 
      className="mb-4 rounded-lg shadow-lg pt-6"
    />
  </div>
</header>


      {/* Features Section */}
      <section className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center text-gray-900 mb-8">Key Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          
          {/* GPS Navigation */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
              <FaRoute className="mr-3" /> GPS Navigation
            </h3>
            <p className="text-gray-600 mb-4">
              Our GPS Navigation system ensures drivers follow the most efficient and safe routes for each trip. With real-time traffic updates and route optimization, here's how it works:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Optimized Routes:</strong> Calculates the fastest routes...</li>
              <li><strong>Dynamic Traffic Updates:</strong> Provides real-time alerts...</li>
              <li><strong>Estimated Time of Arrival (ETA):</strong> Continuously adjusts ETA...</li>
            </ul>
          </div>

          {/* SOS Emergency Button */}
          <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-2xl transition duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-4 flex items-center">
              <FaExclamationTriangle className="mr-3" /> SOS Emergency Button
            </h3>
            <p className="text-gray-600 mb-4">
              In case of emergencies, the SOS Button ensures a rapid response by alerting authorities and providing key information in real time.
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Instant notifications to school authorities...</li>
              <li>Automatic sharing of the driver’s real-time location...</li>
              <li>Immediate connection to emergency services...</li>
            </ul>
          </div>

        </div>
      </section>

      {/* Driver Process Workflow Section */}
      <section className="container mx-auto lg:w-2/3 px-6 py-12 text-center">
        <h2 className="text-3xl font-semibold text-center justify-center text-blue-600 mb-8">Driver Process Workflow</h2>
        <div className="space-y-6">
          
          {/* Step 1: One-Time Login */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center justify-center">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center  justify-center">
              <FaCarAlt className="mr-3" /> Step 1: One-Time Login
            </h3>
            <p className="text-gray-600">Log in once using your credentials. Your session remains active until you log out manually.</p>
          </div>
          
          {/* Step 2: Trip Selection */}
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center  justify-center">
              <FaClipboardList className="mr-3" /> Step 2: Trip Selection
            </h3>
            <p className="text-gray-600">Select the assigned trip for the day from your dashboard. It includes pickup/drop-off routes and timings.</p>
          </div>
          
          {/* Step 3: Vehicle Health Monitoring */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center  justify-center">
              <FaCheckCircle className="mr-3" /> Step 3: Vehicle Health Monitoring
            </h3>
            <p className="text-gray-600">Perform pre-trip vehicle health checks like fuel, tire pressure, and safety equipment.</p>
          </div>
          
          {/* Step 4: GPS Navigation */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center  justify-center">
              <FaRoute className="mr-3" /> Step 4: GPS Navigation
            </h3>
            <p className="text-gray-600">Navigate using real-time GPS to the next stop, with traffic updates and optimal routes.</p>
          </div>
          
          {/* Step 5: Student Pickup & Attendance */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center  justify-center">
              <FaCheckCircle className="mr-3" /> Step 5: Student Pickup & Attendance
            </h3>
            <p className="text-gray-600">Mark students as "Boarded" or "Absent" and notify parents through the app.</p>
          </div>
          
          {/* Step 6: Safety and Communication */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center  justify-center">
              <FaExclamationTriangle className="mr-3" /> Step 6: Safety and Communication
            </h3>
            <p className="text-gray-600">Use in-app messaging to stay connected with management and parents. Emergency alerts with the SOS Button.</p>
          </div>

          {/* Step 7: Drop-Off Process */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center  justify-center">
              <FaCheckCircle className="mr-3" /> Step 7: Drop-Off Process
            </h3>
            <p className="text-gray-600">Verify and mark students as "Dropped Off" at each stop and notify parents.</p>
          </div>

          {/* Step 8: Post-Trip Summary */}
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 flex items-center  justify-center">
              <FaClipboardList className="mr-3" /> Step 8: Post-Trip Summary
            </h3>
            <p className="text-gray-600">Review the trip summary, including students picked up and dropped off, route completion, and attendance discrepancies.</p>
          </div>

        </div>
      </section>

      {/* Driver Testimonials Section */}
      <section className="bg-gray-100 py-12">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-8">Driver Testimonials</h2>
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

      {/* Gallery Section */}
      <section className="py-12">
        <h2 className="text-3xl font-semibold text-center text-orange-600 mb-8">Gallery</h2>
        <div className="flex flex-wrap justify-center gap-6">
          <img src="https://lh6.googleusercontent.com/proxy/LpRBGUrH45be-z3igygKVZ64YFxJ99CEmZFpeaWupypgCWNKDgnlm37PHGNfp_qly5lqx60EOrcdQy1CU27JsPI0EU2Thlw" alt="Feature 1" className="rounded-lg shadow-lg hover:scale-105 transform transition duration-300" />
          <img src="https://via.placeholder.com/150" alt="Feature 2" className="rounded-lg shadow-lg hover:scale-105 transform transition duration-300" />
          <img src="https://via.placeholder.com/150" alt="Feature 3" className="rounded-lg shadow-lg hover:scale-105 transform transition duration-300" />
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default WorkingDriver;
