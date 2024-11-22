import React from 'react';
import { Loader } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Experience } from "../components/Experience";
import { UI } from "../components/UI";

function Home() {
  return (
    <>
      {/* Main Section */}
      <div
        id="main"
        className="bg-zinc-800 text-white flex flex-col md:flex-row h-auto md:h-screen w-full overflow-hidden"
      >
        {/* Left Section */}
        <div
          id="left-part"
          className="w-full md:w-1/2 h-auto p-10 md:p-20 lg:p-[4%] flex flex-col justify-center items-start"
        >
          <h1 className="font-semibold text-left text-4xl md:text-5xl lg:text-6xl leading-tight">
            e-Go Bus
          </h1>
          <h3 className="font-semibold text-left text-xl md:text-2xl mt-2 leading-snug">
            The Smart Way to Monitor School Commutes!
          </h3>
          <p className="text-sm md:text-base text-left mt-4 leading-relaxed">
            e-GO Bus is an essential mobile app designed to keep parents and
            school authorities connected and informed. With real-time GPS
            tracking and instant notifications, you’ll always know the location
            and status of your child’s school bus. Get alerts on arrivals,
            pickups, delays, and even report absences with a tap. Friendly and
            easy to navigate, e-GO Bus also features attendance monitoring,
            forgotten item notifications, and accurate arrival estimates that
            consider current traffic conditions. Your child's safe commute is
            just a glance away with e-GO Bus—your partner for peace of mind on
            every school day.
          </p>
        </div>

        {/* Right Section */}
        <div
          id="img"
          className="w-full md:w-1/2 flex items-center justify-center p-4 overflow-hidden"
        >
          <img
            src="images/school-bus-monitoring-app.png"
            alt="School bus monitoring app"
            className="w-3/4 md:w-2/3 max-h-[400px] object-cover rounded-md shadow-lg"
          />
        </div>
      </div>

      {/* Interactive Canvas Section */}
      <div className="w-full h-[500px] md:h-screen relative overflow-hidden">
        <UI />
        <Loader />
        <Canvas
          shadows
          camera={{
            position: [-0.5, 1, window.innerWidth > 800 ? 4 : 9],
            fov: 45,
          }}
        >
          <group position-y={0}>
            <Suspense fallback={null}>
              <Experience />
            </Suspense>
          </group>
        </Canvas>
      </div>

      {/* Footer or Additional Section */}
      <div className="w-full h-auto py-16 bg-yellow-400 flex items-center justify-center">
        <p className="text-xl md:text-2xl font-bold text-black text-center px-6">
          Your child’s safety is our priority.
        </p>
      </div>
    </>
  );
}

export default Home;
