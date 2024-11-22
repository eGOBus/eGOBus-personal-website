import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <div className="text-[#fcd32d] bg-black p-3 flex items-center justify-between " id="nav">
      {/* Left section (nav1) - Logo and title */}
      <div id="nav1" className="flex items-center gap-3 p-2 ml-4">
        {/* Logo */}
        <img src="/images/Logo.png" className="w-10 h-10 md:w-12 md:h-12" alt="logo" />
        {/* "e-Go Bus" text */}
        <div className="flex flex-col items-start">
          <p className="font-bold text-2xl md:text-4xl">e-Go Bus</p>
          {/* Slogan */}
          <p className="text-xs md:text-sm font-medium text-[#fcd32d]">
            Safe, Smart, On Time
          </p>
        </div>
      </div>

      {/* Right section (nav2) - Navigation links */}
      <div
        className="hidden md:flex flex-row items-center text-sm md:text-lg gap-x-5 md:gap-x-10 ml-auto mr-8"
        id="nav2"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? 'text-blue-300' : 'text-[#fcd32d]'
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? 'text-blue-300' : 'text-[#fcd32d]'
          }
        >
          About us
        </NavLink>
        <NavLink
          to="/working"
          className={({ isActive }) =>
            isActive ? 'text-blue-300' : 'text-[#fcd32d]'
          }
        >
          Working
        </NavLink>
        <NavLink
          to="/apps"
          className={({ isActive }) =>
            isActive ? 'text-blue-300' : 'text-[#fcd32d]'
          }
        >
          Apps
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? 'text-blue-300' : 'text-[#fcd32d]'
          }
        >
          Contact us
        </NavLink>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="flex md:hidden">
        <button
          className="text-[#fcd32d] text-2xl"
          aria-label="Open navigation menu"
        >
          ☰
        </button>
      </div>
    </div>
  );
}

export default Navbar;
