// export default Header;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Slices/authSlice";

const Header = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const role = useSelector((state) => state?.auth?.role);

  async function handleLogout(e) {
    e.preventDefault();
    const res = await dispatch(logout());
    if (res?.payload?.success) navigate("/");
  }

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      {/* Overlay for the Offcanvas Menu */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-40 transition-opacity ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleMenu}
      ></div>

      {/* Offcanvas Menu */}
      <div
        className={`fixed top-0 right-0 w-64 bg-white shadow-xl h-full z-50 transform transition-transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } w-full`}
      >
        <div className="p-6 flex-col justify-center items-center">
          <div className="flex justify-between items-center">
            <NavLink to="/">
              <img src="/img/logo.png" alt="Logo" className="h-12" />
            </NavLink>
            <button onClick={toggleMenu} className="text-2xl text-gray-800">
              <i className="fa fa-times"></i>
            </button>
          </div>
          <nav className="mt-8">
            <ul className="space-y-4">
              <li>
                <NavLink
                  to="/"
                  exact
                  activeClassName="text-white bg-pink-600"
                  className="block py-2 px-4 text-gray-800 hover:bg-lime-500 rounded-md transition"
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  activeClassName="text-white bg-pink-600"
                  className="block py-2 px-4 text-gray-800 hover:bg-lime-500 rounded-md transition"
                  onClick={toggleMenu}
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  activeClassName="text-white bg-pink-600"
                  className="block py-2 px-4 text-gray-800 hover:bg-lime-500 rounded-md transition"
                  onClick={toggleMenu}
                >
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/testimonials"
                  activeClassName="text-white bg-pink-600"
                  className="block py-2 px-4 text-gray-800 hover:bg-lime-500 rounded-md transition"
                  onClick={toggleMenu}
                >
                  Testimonials
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  activeClassName="text-white bg-pink-600"
                  className="block py-2 px-4 text-gray-800 hover:bg-lime-500 rounded-md transition"
                  onClick={toggleMenu}
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="mt-8">
            <a
              href="#"
              className="block py-2 px-4 bg-lime-400 text-gray-800 text-center rounded-md hover:bg-lime-700 transition"
            >
              Make an Appointment
            </a>
            <NavLink
              to="/#"
              className="block py-2 px-4 mt-4 bg-lime-500 text-white text-center rounded-md hover:bg-lime-700 transition"
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>

      {/* Header Section */}
      <header className="bg-white text-gray-800 shadow-md">
        <div className="container mx-auto px-6 py-2 hidden justify-between items-center lg:flex border-b-2">
          <div className="flex items-center space-x-8">
            <div className="text-sm flex items-center space-x-2 text-gray-600">
              <i className="fa fa-phone text-lime-600"></i>
              <span>08080122519</span>
            </div>
            <div className="text-sm flex items-center space-x-2 text-gray-600">
              <i className="fa fa-map-marker-alt text-lime-600"></i>
              <span>
                Angur Bagicha Rd, Gajanan Colony, Teachers Colony, Gondia,
                Maharashtra - 441614
              </span>
            </div>
          </div>
          <div className="space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-lime-600 duration-200 transition"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-lime-600 duration-200 transition"
            >
              <i className="fa fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-lime-600 duration-200 transition"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-lime-600 duration-200 transition"
            >
              <i className="fa fa-dribbble"></i>
            </a>
          </div>
        </div>

        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div>
            <NavLink to="/">
              <img src="/img/logo.png" alt="Logo" className="h-16" />
            </NavLink>
          </div>
          <nav className="hidden lg:flex space-x-12">
            <NavLink
              to="/"
              exact
              activeClassName="text-lime-600"
              className="text-lg font-semibold text-gray-800 hover:text-lime-600 duration-200 transition"
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              activeClassName="text-lime-600"
              className="text-lg font-semibold text-gray-800 hover:text-lime-600 duration-200 transition"
            >
              About
            </NavLink>
            <NavLink
              to="/services"
              activeClassName="text-lime-600"
              className="text-lg font-semibold text-gray-800 hover:text-lime-600 duration-200 transition"
            >
              Services
            </NavLink>

            <NavLink
              to="/testimonials"
              activeClassName="text-lime-600"
              className="text-lg font-semibold text-gray-800 hover:text-lime-600 duration-200 transition"
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/contact"
              activeClassName="text-lime-600"
              className="text-lg font-semibold text-gray-800 hover:text-lime-600 duration-200 transition"
            >
              Contact
            </NavLink>
          </nav>

          {/* Desktop Login Button */}
          <NavLink
            to="/#"
            activeClassName="text-pink-600"
            className="hidden lg:inline-block px-5 py-2 mb-2 bg-lime-500 font-bold text-white text-xl rounded-full hover:bg-lime-600 duration-200 focus:ring-lime-300"
          >
            Login
          </NavLink>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-800 text-xl">
              <i className="fa fa-bars"></i>
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
