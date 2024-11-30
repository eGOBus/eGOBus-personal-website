import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const StoryPage = () => {
  const { scrollY } = useScroll();
  const backgroundShift = useTransform(scrollY, [0, 1000], ["0%", "50%"]);

  return (
    <div className="relative">
      {/* Hero Section */}
      <section
        className="hero-section h-screen relative bg-gradient-to-b from-blue-600 to-blue-300"
        style={{
          background: "url('/images/hero-bg.svg') no-repeat center",
          backgroundSize: "cover",
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={{ backgroundPositionY: backgroundShift }}
        />
        <div className="container mx-auto text-center text-white py-40">
          <motion.h1
            className="text-6xl font-extrabold"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to E-Gobus
          </motion.h1>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
            Experience safety, transparency, and peace of mind for your child’s daily
            school commute with E-Gobus. It’s more than a bus service, it’s a complete
            solution to ensure your child’s safety and your peace of mind.
          </p>
          <motion.button
            className="mt-8 px-8 py-4 bg-white text-blue-600 font-semibold rounded-full shadow-lg hover:bg-gray-200 transition-all"
            whileHover={{ scale: 1.1 }}
          >
            Get Started
          </motion.button>
        </div>
      </section>

      {/* Storytelling Section */}
      <section className="py-16 px-6 bg-white">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            How E-Gobus Helps You
          </motion.h2>
        </div>

        {/* Scene 1 */}
        <div className="flex flex-col lg:flex-row items-center justify-center mb-12">
          <motion.img
            src="/images/morning-routine.svg"
            alt="Morning Routine"
            className="w-full lg:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          <div className="lg:ml-8 text-center lg:text-left mt-8 lg:mt-0">
            <h3 className="text-3xl font-semibold text-gray-800">
              Morning Routine, Simplified
            </h3>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Track your child’s bus in real-time, so you know exactly when to head
              to the stop. No more waiting or guessing. Just a smooth start to your day.
            </p>
          </div>
        </div>

        {/* Scene 2 */}
        <div className="flex flex-col lg:flex-row-reverse items-center justify-center mb-12">
          <motion.img
            src="/images/bus-tracking.svg"
            alt="Bus Tracking"
            className="w-full lg:w-1/2"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          <div className="lg:mr-8 text-center lg:text-left mt-8 lg:mt-0">
            <h3 className="text-3xl font-semibold text-gray-800">
              Real-Time Updates & Safety
            </h3>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Know when your child boards and alights the bus. Receive alerts for
              delays or emergencies, ensuring you're always in the loop.
            </p>
          </div>
        </div>

        {/* Scene 3 */}
        <div className="flex flex-col lg:flex-row items-center justify-center mb-12 bg-blue-50">
          <motion.img
            src="/images/peace-of-mind.svg"
            alt="Safety"
            className="w-full lg:w-1/2"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          />
          <div className="lg:ml-8 text-center lg:text-left mt-8 lg:mt-0">
            <h3 className="text-3xl font-semibold text-gray-800">
              Peace of Mind with Every Journey
            </h3>
            <p className="text-gray-600 mt-4 max-w-xl mx-auto">
              Feel confident knowing your child is always in safe hands. E-Gobus ensures
              reliable and transparent transport with built-in safety features.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Bus Simulation */}
      <section className="bg-gray-800 text-white py-16">
        <div className="container mx-auto text-center">
          <motion.h2
            className="text-4xl font-bold mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Track Your Child’s Bus in Real-Time
          </motion.h2>
          <motion.div
            className="relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img
              src="/images/bus-journey.svg"
              alt="Bus Journey"
              className="w-full"
            />
            <motion.div
              className="bus-icon absolute top-1/2 transform -translate-y-1/2"
              style={{ left: "10%" }}
              animate={{ left: "90%" }}
              transition={{ repeat: Infinity, duration: 10 }}
            >
              🚌
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section bg-blue-600 text-white py-16 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Join E-Gobus Today!
        </h2>
        <p className="text-lg mb-8">
          Empower your child's commute with safety, transparency, and convenience.
          Sign up today and ensure a smarter way to travel.
        </p>
        <motion.button
          className="mt-4 px-12 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-200 transition"
          whileHover={{ scale: 1.1 }}
        >
          Get Started
        </motion.button>
      </section>
    </div>
  );
};

export default StoryPage;
