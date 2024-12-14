import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const getNavLinkClass = (isActive) => {
  return isActive
    ? "py-1 bg-accents rounded-lg"
    : "hover:bg-accents py-1 transition-all rounded-lg";
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
                to="/applicant-list"
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                <span className="px-4 py-3 text-sm tracking-widest font-medium">
                  Applicant List
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
          </ul>
        </nav>

        <div className="hidden lg:flex gap-x-4 items-center">
          <a
            href="/auth/login"
            className="text-xs md:text-sm lg:text-sm font-medium btn-primary rounded-md"
          >
            Login
          </a>
          <a
            href="/auth/register"
            className="text-xs md:text-sm lg:text-sm font-medium px-8 py-3 btn-accent rounded-md"
          >
            Sign In
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

        <nav className="mt-20">
          <div className="flex justify-between p-4 gap-x-4">
            <button className="text-xs md:text-sm font-medium btn-primary rounded-md w-3/4">
              Login
            </button>
            <button className="text-xs md:text-sm font-medium btn-accent rounded-md w-3/4">
              Sign In
            </button>
          </div>
          <ul className="flex flex-col items-left gap-y-6">
            <li>
              <NavLink
                to="/"
                onClick={toggleMenu}
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                <span className="px-4 py-3 text-sm tracking-widest font-medium">
                  Home
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/applicant-list"
                onClick={toggleMenu}
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                <span className="px-4 py-3 text-sm tracking-widest font-medium">
                  Applicant List
                </span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/job-listing"
                onClick={toggleMenu}
                className={({ isActive }) => getNavLinkClass(isActive)}
              >
                <span className="px-4 py-3 text-sm tracking-widest font-medium">
                  Job Posting
                </span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
