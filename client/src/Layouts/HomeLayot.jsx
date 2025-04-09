import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram, FaDribbble } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Footer from "../Components/Footer";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Slices/authSlice";

function HomeLayout({ children }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state?.auth?.isLoggedIn);
  const role = useSelector((state) => state?.auth?.role);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  async function handleLogout(e) {
    e.preventDefault();
    const res = await dispatch(logout());
    if (res?.payload?.success) navigate("/");
  }

  return (
    <div className="min-h-[90vh]">
      
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
            <Link to="/">
              <NavLink to="/">
                <img src="/img/logo.png" alt="Logo" className="h-12" />
              </NavLink>
            </Link>
            <button onClick={toggleMenu} className="text-2xl text-gray-800">
              <FiX />
            </button>
          </div>
          <nav className="mt-8">
            <ul className="space-y-4">
              {isLoggedIn && role === "ADMIN" && (
                <li>
                  <Link
                    to="/admin/dashboard"
                    className="block py-2 px-4 text-gray-800 hover:bg-lime-500 rounded-md transition"
                    onClick={toggleMenu}
                  >
                    Admin Dashboard
                  </Link>
                </li>
              )}
              {isLoggedIn && role === "ADMIN" && (
                <li>
                  <Link
                    to="/admin/dashboard"
                    className="block py-2 px-4 text-gray-800 hover:bg-lime-500 rounded-md transition"
                    onClick={toggleMenu}
                  >
                    Doctor Dashboard
                  </Link>
                </li>
              )}
              {isLoggedIn && role === "ADMIN" && (
                <li>
                  <Link
                    to="/course/create"
                    className="block py-2 px-4 text-gray-800 hover:bg-lime-500 rounded-md transition"
                    onClick={toggleMenu}
                  >
                    Create New Opd
                  </Link>
                </li>
              )}
              <li>
                <Link
                  to="/courses"
                  className="block py-2 px-4 text-gray-800 hover:bg-lime-500 rounded-md transition"
                  onClick={toggleMenu}
                >
                  All Appointments
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 px-4 text-gray-800 hover:bg-lime-500 rounded-md transition"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block py-2 px-4 text-gray-800 hover:bg-lime-500 rounded-md transition"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="block py-2 px-4 text-gray-800 hover:bg-lime-500 rounded-md transition"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
          <div className="mt-8">
            {!isLoggedIn ? (
              <>
                <Link
                  to="/login"
                  className="block py-2 px-4 bg-violet-500 text-white text-center rounded-md hover:bg-violet-600 transition"
                  onClick={toggleMenu}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block py-2 px-4 mt-4 bg-pink-500 text-white text-center rounded-md hover:bg-pink-600 transition"
                  onClick={toggleMenu}
                >
                  Signup
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/user/profile"
                  className="block py-2 px-4 bg-violet-500 text-white text-center rounded-md hover:bg-violet-600 transition"
                  onClick={toggleMenu}
                >
                  Profile
                </Link>
                <button
                  onClick={(e) => {
                    handleLogout(e);
                    toggleMenu();
                  }}
                  className="block w-full py-2 px-4 mt-4 bg-red-500 text-white text-center rounded-md hover:bg-red-600 transition"
                >
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Header Section */}
      <header className="bg-white text-gray-800 shadow-md fixed w-full z-50">
        {/* Top Bar */}
        <div className="container mx-auto px-6 py-2 hidden justify-between items-center lg:flex border-b-2">
          <div className="flex items-center space-x-8">
            <div className="text-sm flex items-center space-x-2 text-gray-600">
              <BsTelephone className="text-lime-600" />
              <span>+91 80167 17777</span>
            </div>
            <div className="text-sm flex items-center space-x-2 text-gray-600">
              <IoLocationSharp className="text-lime-600" />
              <span>Falakata, West Bengal-735211</span>
            </div>
          </div>
          <div className="space-x-4 flex ">
            <a
              target="_blank"
              href="https://www.facebook.com/niveditamedical/"
              className="text-[#1877F2] hover:text-[#145DBF] hover:scale-110 duration-200 transition"
            >
              <FaFacebook />
            </a>

            <a
              target="_blank"
              href="https://www.instagram.com/niveditacentre/"
              className="text-pink-500 hover:text-pink-600 hover:scale-110 duration-200 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Main Navigation */}
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div>
           
            <Link to="/">
              <img
                src="/img/nivedita-medical-best-medical-in-falakata-bengal-make-my-software-coochbehar.webp"
                alt="Logo"
                className="h-12 w-12 text-3xl font-bold"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            {isLoggedIn && role === "ADMIN" && (
              <Link
                to="/admin/dashboard"
                className=" font-semibold text-gray-800 hover:text-lime-600 duration-200 transition"
              >
                Admin Dashboard
              </Link>
            )}
            {isLoggedIn && role === "ADMIN" && (
              <Link
                to="/admin/dashboard"
                className=" font-semibold text-gray-800 hover:text-lime-600 duration-200 transition"
              >
                Doctor Dashboard
              </Link>
            )}
            {isLoggedIn && role === "ADMIN" && (
              <Link
                to="/course/create"
                className=" font-semibold text-gray-800 hover:text-lime-600 duration-200 transition"
              >
                Create New Opd
              </Link>
            )}
            <Link
              to="/courses"
              className=" font-semibold text-gray-800 hover:text-lime-600 duration-200 transition"
            >
              All Appointments
            </Link>
            <Link
              to="/about"
              className=" font-semibold text-gray-800 hover:text-lime-600 duration-200 transition"
            >
              About
            </Link>
            <Link
              to="/services"
              className=" font-semibold text-gray-800 hover:text-lime-600 duration-200 transition"
            >
              Services
            </Link>
            <Link
              to="/contact"
              className=" font-semibold text-gray-800 hover:text-lime-600 duration-200 transition"
            >
              Contact
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:block">
            {!isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link
                  to="/login"
                  className="px-5 py-2 border border-violet-500 font-bold hover:text-white text-black rounded-full hover:bg-violet-600 duration-200 transition"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-5 py-2 border border-pink-500 font-bold hover:text-white text-black rounded-full hover:bg-pink-600 duration-200 transition"
                >
                  Signup
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  to="/user/profile"
                  className="px-5 py-2 border border-violet-500 font-bold hover:text-white text-black rounded-full hover:bg-violet-600 duration-200 transition"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="px-5 py-2 border border-red-500 font-bold hover:text-white text-black rounded-full hover:bg-red-600 duration-200 transition"
                >
                  Logout
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-800 text-2xl">
              <FiMenu />
            </button>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="pt-32 pb-12 px-4 md:px-6 container mx-auto">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default HomeLayout;
