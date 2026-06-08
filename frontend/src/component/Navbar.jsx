import React, { useState } from "react";
import logo from "../assets/logo.png";
import { NavLink } from "react-router-dom";
// Imported standard menu icons for mobile toggle functionality
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  // State hook to handle opening/closing mobile overlay menu drawer
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative mb-4 pt-5 px-4 md:px-10 lg:pl-35 h-25 flex items-center justify-between lg:justify-start lg:gap-24 navbar z-50">
      
      {/* LOGO */}
      <img src={logo} alt="" className="h-14 md:h-19" />

      {/* MOBILE HAMBURGER BUTTON (Hidden on Desktop screens) */}
      <div className="lg:hidden text-2xl text-[#92DB82] cursor-pointer" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* DESKTOP LINKS (Hidden on Mobile screens, visible on 'lg:' viewports) */}
      <div className="hidden lg:flex gap-10 font-medium">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-black" : "text-[#92DB82]"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-black" : "text-[#92DB82]"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/services"
          className={({ isActive }) =>
            isActive ? "text-black" : "text-[#92DB82]"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-black" : "text-[#92DB82]"
          }
        >
          Contact
        </NavLink>
      </div>

      {/* MOBILE DRAWER OVERLAY (Triggers only when isOpen is true on small screens) */}
      <div
        className={`fixed top-25 left-0 w-full bg-white shadow-md border-t border-gray-100 flex flex-col gap-6 p-6 transition-all duration-300 ease-in-out lg:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <NavLink
          to="/"
          onClick={() => setIsOpen(false)} // Closes the drawer when a link is tapped
          className={({ isActive }) =>
            isActive ? "text-black text-lg font-semibold" : "text-[#92DB82] text-lg"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive ? "text-black text-lg font-semibold" : "text-[#92DB82] text-lg"
          }
        >
          About Us
        </NavLink>
        <NavLink
          to="/services"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive ? "text-black text-lg font-semibold" : "text-[#92DB82] text-lg"
          }
        >
          Services
        </NavLink>
        <NavLink
          to="/contact"
          onClick={() => setIsOpen(false)}
          className={({ isActive }) =>
            isActive ? "text-black text-lg font-semibold" : "text-[#92DB82] text-lg"
          }
        >
          Contact
        </NavLink>
      </div>

    </div>
  );
};

export default Navbar;