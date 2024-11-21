import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="text-[#fcd32d] bg-black p-3 flex items-center justify-between" id="nav">
      {/* Left section (nav1) - Move it slightly more to the right */}
      <div id="nav1" className="flex items-center justify-start gap-3 p-2 ml-6">
        {/* Logo */}
        <img src="/images/Logo.png" className="w-12 h-12" alt="logo" />
        {/* "e-Go Bus" text */}
        <div className="flex flex-col items-start">
          <p className="inline items-center font-bold pt-0 text-4xl">e-Go Bus</p>
          {/* Slogan */}
          <p className="text-sm font-medium text-[#fcd32d]">Safe, Smart, On Time</p>
        </div>
      </div>
      {/* Right section (nav2) */}
      <div className="flex flex-row items-center text-lg justify-between gap-x-10 ml-auto" id="nav2">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? 'text-blue-300' : 'text-[#fcd32d]')}
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? 'text-blue-300' : 'text-[#fcd32d]')}
        >
          About us
        </NavLink>
        <NavLink
          to="/working"
          className={({ isActive }) => (isActive ? 'text-blue-300' : 'text-[#fcd32d]')}
        >
          Working
        </NavLink>
        <NavLink
          to="/apps"
          className={({ isActive }) => (isActive ? 'text-blue-300' : 'text-[#fcd32d]')}
        >
          Apps
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) => (isActive ? 'text-blue-300' : 'text-[#fcd32d]')}
        >
          Contact us
        </NavLink>
        {/* Add gap after the last element */}
        <div className="w-10"></div> {/* This adds an empty space after the last element */}
      </div>
    </div>
  );
}

export default Navbar;
