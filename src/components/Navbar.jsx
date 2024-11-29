import React, { useState, useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const menuRef = useRef(null); // Reference for the menu container

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    if (selectedValue) {
      navigate(`/${selectedValue}`);
      setIsMenuOpen(false);
    }
  };

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <nav className="h-[70px] md-lg:h-[80px] bg-[#fcd32d] flex justify-around items-center py-3 md-lg:px-4 px-3 rounded-b-[50px] shadow-lg fixed top-0 left-0 right-0 z-[100]">
      <NavLink to="/" className="flex items-center gap-2 ml-4" onClick={handleNavLinkClick}>
        <img src="e-GO Bus.png" className="w-12 h-12 md-lg:w-14 md-lg:h-14" alt="Logo" />
        <h1 className="text-2xl font-bold text-gray-800 md-lg:text-lg">eGO Bus</h1>
      </NavLink>

      <div onClick={toggleMenu} className="lg:hidden w-12 h-12 cursor-pointer">
        <i className="fa-solid fa-bars text-[1.5rem] pt-2 text-gray-800"></i>
      </div>

      <div
        ref={menuRef}
        className={`${
          isMenuOpen ? 'block' : 'hidden'
        } absolute top-[70px] right-5 bg-[#fcd32d] w-[90%] lg:w-auto lg:static lg:flex lg:items-center lg:gap-10 lg:py-0 py-5 lg:shadow-none shadow-lg rounded-[50px] mt-2 lg:flex-row flex flex-col font-bold text-center`}
      >
        <NavLink
          to="/"
          className="text-gray-800 lg:text-lg text-base px-5 py-2 hover:text-white duration-300 transform hover:scale-105"
          activeClassName="text-white"
          onClick={handleNavLinkClick}
        >
          Home
        </NavLink>
        <NavLink
          to="about"
          className="text-gray-800 lg:text-lg text-base px-5 py-2 hover:text-white duration-300 transform hover:scale-105"
          activeClassName="text-white"
          onClick={handleNavLinkClick}
        >
          About
        </NavLink>
        <NavLink
          to="contact"
          className="text-gray-800 lg:text-lg text-base px-5 py-2 hover:text-white duration-300 transform hover:scale-105"
          activeClassName="text-white"
          onClick={handleNavLinkClick}
        >
          Contact Us
        </NavLink>
        <NavLink
          to="apps"
          className="text-gray-800 lg:text-lg text-base px-5 py-2 hover:text-white duration-300 transform hover:scale-105"
          activeClassName="text-white"
          onClick={handleNavLinkClick}
        >
          Our Apps
        </NavLink>

        <div className="relative">
          <select
            className="text-gray-800 lg:text-lg text-base px-1 py-2 bg-[#fcd32d] border-none hover:text-white duration-300 focus:outline-none transform hover:scale-105 font-bold"
            onChange={handleSelectChange}
            defaultValue=""
          >
            <option value="" disabled>
              How it Works
            </option>
            <option value="workingDriver">For Drivers</option>
            <option value="workingParent">For Parents</option>
            <option value="workingSchool">For Management</option>
          </select>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
