import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaDribbble } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { BsTelephone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <>
      {/* Footer Section Begin */}
      <footer className="bg-gray-900 text-gray-300">
        {/* Top Section */}
        <div className="bg-gray-800 py-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-center gap-6">
              {/* Logo */}
              <div className="flex-shrink-0">
                <a href="#" className="block">
                  <img
                    src="/img/nivedita-medical-best-medical-in-falakata-bengal-make-my-software-coochbehar.webp"
                    alt="Logo"
                    className="h-20 w-auto md:h-16 sm:h-12 sm:w-auto object-contain"
                  />
                </a>
              </div>

              {/* Social Media Links */}
              <div className="flex space-x-4 text-2xl sm:justify-center sm:items-center">
                <a
                  href="#"
                  className="hover:text-lime-500 transition"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="#"
                  className="hover:text-lime-500 transition"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="#"
                  className="hover:text-lime-500 transition"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="hover:text-lime-500 transition"
                  aria-label="Dribbble"
                >
                  <FaDribbble />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Section */}
        <div className="container mx-auto px-4 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Section */}
            <div>
              <h5 className="text-lg font-bold mb-4 text-lime-500">Company</h5>
              <ul className="space-y-2">
                <li>
                  <a href="/about" className="hover:text-lime-500 transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="hover:text-lime-500 transition"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="/testimonials"
                    className="hover:text-lime-500 transition"
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-lime-500 transition">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Quick Links Section */}
            <div>
              <h5 className="text-lg font-bold mb-4 text-lime-500">
                Quick Links
              </h5>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-lime-500 transition">
                    General Dentistry
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-lime-500 transition">
                    Teeth Whitening
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-lime-500 transition">
                    Dental Implants
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-lime-500 transition">
                    Tooth Extraction
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-lime-500 transition">
                    Emergency Dental Care
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Section */}
            <div>
              <h5 className="text-lg font-bold mb-4 text-lime-500">
                Contact Us
              </h5>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <IoLocationSharp className="mr-3 mt-1 text-lime-500 text-lg" />
                  <span>
                    Falakata, West Bengal-735211
                  </span>
                </li>
                <li className="flex items-center">
                  <BsTelephone className="mr-3 text-lime-500 text-lg" />
                  <a
                    href="tel:08080122519"
                    className="hover:text-lime-500 transition"
                  >
                    080801 22519
                  </a>
                </li>
                <li className="flex items-center">
                  <MdEmail className="mr-3 text-lime-500 text-lg" />
                  <a
                    href="mailto:kartikpaul@gmail.com"
                    className="hover:text-lime-500 transition"
                  >
                    kartikpaul@gmail.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Map Section */}
            <div>
              <h5 className="text-lg font-bold mb-4 text-lime-500">Find Us</h5>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3570.0040884163004!2d89.20129347542598!3d26.519992976883465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e3a42c2be5b2eb%3A0x7cd882618c26c02b!2sNIVEDITA%20MEDICAL!5e0!3m2!1sen!2sin!4v1738570667058!5m2!1sen!2sin"
                className="w-full h-40 rounded-md shadow-lg"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-gray-800 py-4">
          <div className="container mx-auto px-4 flex flex-wrap items-center justify-between text-sm text-gray-400">
            <p className="text-white">© {new Date().getFullYear()}, Falakata</p>
            <p>
              Design & Developed by &nbsp;
              <span>
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lime-500 hover:text-lime-600 transition"
                >
                  Me.
                </a>
              </span>
            </p>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="hover:text-lime-500 transition">
                  Terms & Use
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-lime-500 transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;