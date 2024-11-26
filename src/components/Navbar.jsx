import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigate function

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(`/${selectedValue}`); // Navigate to the selected value route
    }
  };

  return (
    <nav className="lg:h-[90px] h-[70px] w-full bg-[#fcd32d] flex justify-between py-3 lg:rounded-b-[60px] shadow-lg rounded-b-[50px] fixed lg:px-10 px-3 z-[100]">
      {/* Logo and Title */}
      <NavLink to="/">
        <div className="flex items-center gap-2 ml-4">
          <img src="e-GO Bus.png" className="lg:w-16 w-12 lg:h-16 h-12" alt="Logo" />
          <h1 className="lg:text-4xl text-2xl font-bold text-gray-800">eGO Bus</h1>
        </div>
      </NavLink>

      {/* Menu Icon */}
      <div onClick={toggleMenu} className="lg:hidden w-12 lg:h-16 h-12 cursor-pointer">
        <i className="fa-solid fa-bars text-[1.5rem] pt-1 text-gray-800 mt-2"></i>
      </div>

      {/* Dropdown and Menu */}
      <div
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-[70px] right-0 bg-[#fcd32d] w-[90%] lg:w-auto lg:static lg:flex lg:items-center lg:gap-10 lg:py-0 py-5 lg:shadow-none shadow-lg rounded-[50px] mi-4 mr-4 lg:rounded-b-none mt-2 lg:flex-row flex flex-col font-bold text-center`}
      >
        <NavLink
          to="/"
          className="text-gray-800 lg:text-lg text-base px-5 py-2 hover:text-white duration-200"
          activeClassName="text-white"
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          className="text-gray-800 lg:text-lg text-base px-5 py-2 hover:text-white duration-200"
          activeClassName="text-white"
        >
          About
        </NavLink>
        <NavLink
          to="contact"
          className="text-gray-800 lg:text-lg text-base px-5 py-2 hover:text-white duration-200"
          activeClassName="text-white"
        >
          Contact Us
        </NavLink>
        <NavLink
          to="apps"
          className="text-gray-800 lg:text-lg text-base px-5 py-2 hover:text-white duration-200"
          activeClassName="text-white"
        >
          Our Apps
        </NavLink>

        {/* How it Works Dropdown using Select */}
        <div className="relative">
          <select
            className="text-gray-800 lg:text-lg text-base px-5 py-2 bg-[#fcd32d] border-none hover:text-white duration-200 focus:outline-none"
            onChange={handleSelectChange} // Handle select change
            defaultValue=""
          >
            <option value="workingDriver">Working Driver</option>
            <option value="workingParent">Working Parent</option>
            <option value="workingSchool">Working School</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
