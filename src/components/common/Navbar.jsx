import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const getNavLinkClass = (isActive) => {
  return isActive
    ? "py-2 bg-accents rounded-lg"
    : "hover:bg-accents py-2 transition-all rounded-lg";
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="flex justify-between items-center px-8 py-7 shadow-lg bg-gray-200">
        <div>
          <h1 className="font-semibold text-md sm:text-lg md:text-2xl text-center">
            <span className="text-accents">Ruang</span>Nganggur
          </h1>
        </div>

        <button
          className="lg:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <nav className="hidden lg:flex items-center justify-between">
          <ul className="flex justify-between gap-x-8">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                <span className="px-4 py-3 text-sm tracking-widest font-medium">
                  About Us
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/job-listing"
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                <span className="px-4 py-3 text-sm tracking-widest font-medium">
                  Job Listing
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/applicant-list"
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                <span className="px-4 py-3 text-sm tracking-widest font-medium">
                  Applicant List
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="hidden lg:flex gap-x-3 items-center">
          <a
            href="/auth/login"
            className="text-xs md:text-sm lg:text-sm font-medium px-8 py-2 btn-primary rounded-md"
          >
            Login
          </a>
          <a
            href="/auth/register"
            className="text-xs md:text-sm lg:text-sm font-medium px-8 py-2 btn-accent rounded-md"
          >
            Sign Up
          </a>
        </div>
      </div>

      <div
        className={`lg:hidden z-10 fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300`}
      >
        <button
          className="absolute top-6 right-6 text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          <FaTimes />
        </button>
      </div>
    </>
  );
};

export default Navbar;
