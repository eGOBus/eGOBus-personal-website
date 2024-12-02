import React from 'react';
import Footer from "../components/Footer"; // Ensure correct path

const About = () => {
  return (
    <>
  {/* Hero Section */}
  <div className="mt-10 min-h-screen bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
  <div className="text-center mb-12">
    <img 
      src="about.jpg" 
      alt="pic" 
      className="w-full h-[300px] object-fit rounded-lg shadow-md"
    />
  </div>

  <h2 className="text-xl font-bold text-gray-900 sm:text-2xl md:text-3xl text-center lg:pt-10">
    Your Gateway to Peace of Mind
  </h2>
  <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-relaxed text-gray-700">
    e-GO Bus is your reliable companion for smarter, safer, and more efficient school commutes. 
    Our platform leverages real-time vehicle tracking to provide parents and school authorities 
    with instant updates about the bus’s location. Whether you’re wondering if your child made it on board 
    or need to plan a timely pickup, e-GO Bus ensures you stay informed every step of the way.
  </p>
</div>


      {/* Who We Are Section */}
      <div className="h-min-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-3xl font-semibold text-gray-900">Who We Are</h3>
          <p className="mt-6 text-lg">
  e-GO Bus is the creation of three passionate and dedicated individuals: <strong>Goli Shivaprasad Reddy</strong>, <strong>Kakurala Srisailam</strong>, and <strong>Kattoju Krishna Chaitanya</strong>.The idea for e-GO Bus comes from a deep personal understanding of the challenges that students, parents, and schools face with school transportation.</p>
            <p className="mt-6 text-lg "> Founders Shivaprasad and Srisailam experienced these challenges firsthand during their school days. The uncertainty of bus timings, missed pickups, and lack of communication caused unnecessary stress and anxiety for both students and their families. This experience motivated them to find a solution.</p>
            <p className="mt-6 text-lg ">Recognizing the need for a modern solution, they began brainstorming ways to leverage technology to address these problems. As the idea developed, Krishna Chaitanya joined the team, bringing his technical expertise to turn their vision into a tangible product. Together, this trio combined their skills and experiences, resulting in the birth of e-GO Bus.</p>
            <p className="mt-6 text-lg ">At e-GO Bus, we are more than just a tech startup—we are a team with a shared vision to create a safer, smarter, and more reliable school transportation system. Our mission is simple: to ensure safe and stress-free commutes for students, while providing parents and school authorities with the tools to stay informed and in control. By using real-time tracking, proactive communication, and intuitive features, we aim to make school transportation predictable, less stressful, and safer for all.
            </p>
            <p className="mt-6 text-lg ">We believe that school transportation should no longer be a source of uncertainty. Our goal is to provide peace of mind to parents, enhance operational efficiency for schools, and ensure that students can travel with confidence. With cutting-edge technology, we’re building a service that empowers families, schools, and communities.

</p>
        </div>
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
    <div className="text-center">
      <img
        src="goli2.jpg"
        alt="Goli Shivaprasad Reddy"
        className="w-40 h-40 rounded-full mx-auto object-cover shadow-md"
      />
      <h4 className="mt-4 text-xl font-semibold text-gray-900">Goli Shivaprasad Reddy</h4>
      <p className="">Co-Founder </p>
    </div>
    <div className="text-center">
      <img
        src="sri3.jpg"
        alt="Kakurala Srisailam"
        className="w-40 h-40 rounded-full mx-auto object-fit shadow-md"
      />
      <h4 className="mt-4 text-xl font-semibold text-gray-900">Kakurala Srisailam</h4>
      <p className="">Co-Founder </p>
    </div>
    <div className="text-center">
      <img
        src="kc.jpg"
        alt="Kattoju Krishna Chaitanya"
        className="w-40 h-40 rounded-full mx-auto object-cover shadow-md"
      />
      <h4 className="mt-4 text-xl font-semibold text-gray-900">Kattoju Krishna Chaitanya</h4>
      <p className="">Co-Founder </p>
    </div>
  </div>
  </div>

{/* Why Use e-GO Bus Section */}
<div className="min-h-screen bg-yellow-400 py-12 px-4 sm:px-6 lg:px-8">
  <div className="text-center">
    <h2 className="text-4xl font-bold text-gray-900 sm:text-5xl">Why Choose e-GO Bus?</h2>
    <p className="mt-6 text-lg text-gray-800">
      As a parent, ensuring your child’s safety during their school commute is a top priority. e-GO Bus is 
      designed to address the most common concerns about school transportation, providing peace of mind 
      through real-time information and seamless communication.
    </p>
  </div>

  {/* Questions and Image Section */}
  <div className="mt-10 flex flex-col md:flex-row md:space-x-6">
    {/* Questions List */}
    <div className="w-full md:w-1/2 mt-6 space-y-4">
      <h3 className="text-2xl font-semibold text-gray-800">
        Here’s how e-GO Bus answers your key questions:
      </h3>
      <ul className="text-lg space-y-3 list-disc list-inside">
        <li>Is the bus delayed due to traffic or weather conditions?</li>
        <li>Has my child safely boarded the bus?</li>
        <li>Where is the bus right now?</li>
        <li>Has the bus picked up or dropped off my child?</li>
        <li>Is the bus following the regular route, or has there been a change?</li>
        <li>Are there any incidents or emergencies involving the bus?</li>
        <li>Has the bus reached the school yet?</li>
        <li>Has my child left any personal items on the bus?</li>
        <li>Can I contact the driver directly to inquire about forgotten items?</li>
      </ul>
    </div>

    {/* Image Section */}
    <div className="w-full md:w-1/2 mt-6 flex justify-center">
      <img 
        src="e-GO Bus.png" 
        alt="A safe and secure school bus illustration" 
        className="rounded-lg shadow-lg w-full max-w-[400px] object-contain"
      />
    </div>
  </div>

  {/* Additional Information */}
  <p className="mt-6 text-lg text-gray-800">
    With e-GO Bus, these uncertainties are a thing of the past. Our platform ensures you have the 
    information you need at your fingertips, offering features that make school commutes worry-free:
  </p>

  {/* Features Section */}
  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <div className="p-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 shadow-lg rounded-lg transition-transform transform hover:scale-105">
      <h4 className="text-xl font-bold text-indigo-600">Real-Time Location Tracking</h4>
      <p className="mt-4 text-gray-800">
        Know exactly where the bus is and when it will arrive at your stop—eliminating unnecessary waiting 
        or last-minute rushing.
      </p>
    </div>
    <div className="p-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 shadow-lg rounded-lg transition-transform transform hover:scale-105">
      <h4 className="text-xl font-bold text-indigo-600">Instant Notifications</h4>
      <p className="mt-4 text-gray-800">
        Receive timely alerts about delays, arrivals, and departures to stay informed and prepared.
      </p>
    </div>
    <div className="p-6 bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 shadow-lg rounded-lg transition-transform transform hover:scale-105">
      <h4 className="text-xl font-bold text-indigo-600">Coordinated Pickups</h4>
      <p className="mt-4 text-gray-800">
        If you're unavailable, easily arrange for someone else to pick up your child with the assurance of 
        up-to-date bus information.
      </p>
    </div>
  </div>

  <p className="mt-8 text-lg text-gray-800">
    At e-GO Bus, we’re committed to removing the stress from school commutes, so you can focus on your 
    day with confidence, knowing your child’s safety and punctuality are always prioritized. Choose e-GO 
    Bus for a smarter, safer, and more reliable school transportation experience.
  </p>
</div>

    {/* How Did It All Start Section */}
<div className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-7xl mx-auto text-center">
    <h3 className="text-3xl font-semibold text-gray-900">How Did It All Start?</h3>
    <p className="mt-6 text-lg">
      The idea for e-GO Bus was born out of frustration with the inefficiencies of traditional school bus systems. As students, Goli Shivaprasad and Srisailam experienced firsthand the challenges and uncertainties of relying on school buses.
    </p>
    <p className="mt-6 text-lg">
      One memorable day, Goli found himself waiting at the bus stop, anxiously checking the time and wondering when the bus would arrive. He questioned: Is the bus running late due to traffic? Has my child gotten on board? The lack of answers left him frustrated—and that’s when the idea struck: why not create a system to track the school buses in real time?
    </p>
    <p className="mt-6 text-lg">
      Shivaprasad, Srisailam, and Krishna, using their own student experiences, began brainstorming ways to solve this problem. They envisioned a platform offering real-time updates about bus locations and estimated arrival times. Their goal was to create a simple, reliable solution that could seamlessly integrate into daily routines.
    </p>
    <p className="mt-6 text-lg">
      As the project evolved, they realized the problem wasn’t just about waiting—it was the unpredictability caused by traffic, weather, or unexpected delays. This is when the concept of e-GO Bus truly came to life, offering real-time tracking, instant updates, and efficient communication for everyone involved.
    </p>
    <p className="mt-6 text-lg">
      After months of development, testing, and refining, e-GO Bus was born—a smart, student-centered solution designed to eliminate the stress and uncertainty of school commutes.
    </p>
    {/* Add an image */}
    <div className="mt-8">
      <img
        src="busabout.png"
        alt="Team brainstorming for e-GO Bus project"
        className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
      />
    </div>
  </div>
</div>


      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default About;
