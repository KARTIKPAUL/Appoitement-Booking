import { useState } from "react";
import toast from "react-hot-toast";
import { isValidEmail } from "../Hepler/regexMatcher";
import axiosInstance from "../Hepler/axiosIntance";
import HomeLayout from "../Layouts/HomeLayot";
import { FaPhone, FaBuilding, FaEnvelope } from "react-icons/fa";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from "react-icons/fa";

function ContactUs() {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  function handleInputChange(e) {
    const { name, value } = e.target;
    setUserInput({
      ...userInput,
      [name]: value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    if (!userInput.email || !userInput.name || !userInput.message) {
      toast.error("All Fields Are Mandatory !!");
      return;
    }
    if (!isValidEmail(userInput.email)) {
      toast.error("Email is Not Valid");
      return;
    }

    try {
      const response = axiosInstance.post("/contact", { ...userInput });
      toast.promise(response, {
        loading: "Submitting Your Message",
        success: "Submitted Message Successfully",
        error: "Failed To Submit Form",
      });
      const contactResponse = await response;
      if (contactResponse?.data?.success) {
        setUserInput({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      toast.error("Message Sending Failed");
    }
  }

  function handleScheduleConsultation(e) {
    e.preventDefault();
    // Implement consultation scheduling logic
    toast.success("Consultation request submitted!");
  }

  return (
    <HomeLayout>
      <div className="pt-20">
        <div className="text-center pt-20">
          <h2 className="text-lime-500 text-sm uppercase font-bold  hover:cursor-pointer">
            Contact Us
          </h2>

          <h3 className="text-4xl font-bold text-gray-100 hover:cursor-pointer text-center mt-2">
            Perfect Smile Starts
          </h3>
        </div>
        <div className="flex min-w-full flex-col md:min-w-7xl md:flex-row  text-white min-h-screen px-4 sm:px-6">
          {/* Left Section - Get in Touch */}
          <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-start">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-6 md:mb-8 text-center md:text-left">
              Get in Touch
            </h2>

            {/* Phone */}
            <div className="flex items-center mb-5 md:mb-6">
              <div className="bg-blue-800 p-3 md:p-4 rounded-md mr-3 md:mr-4">
                <FaPhone className="text-white text-lg md:text-xl" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold">Phone</h3>
                <p className="text-sm md:text-base">+91 6362 720 677</p>
                <p className="text-xs md:text-sm text-gray-400">
                  Mon - Sun | 9:00 AM - 7:00 PM
                </p>
              </div>
            </div>

            {/* Office */}
            <div className="flex items-center mb-5 md:mb-6">
              <div className="bg-blue-800 p-3 md:p-4 rounded-md mr-3 md:mr-4">
                <FaBuilding className="text-white text-lg md:text-xl" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold">Office</h3>
                <p className="text-sm md:text-base">
                  KodeKalp Global Technologies
                </p>
                <p className="text-xs md:text-sm text-gray-400">
                  Near Chhatrapati Sambhaji Chowk, Fulchur, Gondia-441601
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center mb-8 md:mb-12">
              <div className="bg-blue-800 p-3 md:p-4 rounded-md mr-3 md:mr-4">
                <FaEnvelope className="text-white text-lg md:text-xl" />
              </div>
              <div>
                <h3 className="text-base md:text-lg font-semibold">Email</h3>
                <p className="text-sm md:text-base">info@kodekalp.com</p>
                <p className="text-xs md:text-sm text-gray-400">
                  Typically replies within 24 hours
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4 text-center md:text-left">
                Follow Us
              </h3>
              <div className="flex gap-4 justify-center md:justify-start">
                <a
                  href="#"
                  className="text-pink-500 hover:text-pink-400 text-xl md:text-2xl"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  className="text-blue-500 hover:text-blue-400 text-xl md:text-2xl"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="#"
                  className="text-green-500 hover:text-green-400 text-xl md:text-2xl"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="#"
                  className="text-red-500 hover:text-red-400 text-xl md:text-2xl"
                >
                  <FaYoutube />
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="mt-6 md:mt-8">
              <div className="bg-white rounded-md overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.0!2d79.0!3d21.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zKodeKalp!5e0!3m2!1sen!2sin!4v1617293781716!5m2!1sen!2sin"
                  width="100%"
                  height="180"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  title="KodeKalp Office Location"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Right Section - Send a Message */}
          <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col items-center mt-6 md:mt-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-blue-400 mb-2 text-center">
              Send a Message
            </h2>
            <p className="text-center mb-4 md:mb-6 text-gray-300 text-sm md:text-base px-2">
              Have questions? We are here to help! Reach out anytime.
            </p>

            {/* Consultation Button */}
            <button
              className="w-full bg-blue-500 hover:bg-blue-600 transition-colors py-2 md:py-3 rounded-md font-semibold text-sm md:text-base mb-4 md:mb-6"
              onClick={handleScheduleConsultation}
            >
              Schedule a Free Consultation
            </button>

            <div className="relative flex items-center w-full mb-4 md:mb-6">
              <div className="flex-grow border-t border-gray-600"></div>
              <span className="px-3 md:px-4 text-gray-400 text-sm">OR</span>
              <div className="flex-grow border-t border-gray-600"></div>
            </div>

            {/* Contact Form */}
            <form className="w-full">
              {/* Full Name */}
              <div className="mb-3 md:mb-4">
                <label
                  htmlFor="name"
                  className="block mb-1 md:mb-2 text-sm md:text-base"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-gray-800 border border-gray-700 px-3 md:px-4 py-2 md:py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  id="name"
                  name="name"
                  onChange={handleInputChange}
                  value={userInput.name}
                />
              </div>

              {/* Email and Phone in a row */}
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-3 md:mb-4">
                <div className="flex-1">
                  <label
                    htmlFor="email"
                    className="block mb-1 md:mb-2 text-sm md:text-base"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full bg-gray-800 border border-gray-700 px-3 md:px-4 py-2 md:py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    id="email"
                    name="email"
                    onChange={handleInputChange}
                    value={userInput.email}
                  />
                </div>

                <div className="flex-1">
                  <label
                    htmlFor="phone"
                    className="block mb-1 md:mb-2 text-sm md:text-base"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    placeholder="+91 12345 67890"
                    className="w-full bg-gray-800 border border-gray-700 px-3 md:px-4 py-2 md:py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                    id="phone"
                    name="phone"
                    onChange={handleInputChange}
                    value={userInput.phone}
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-4 md:mb-6">
                <label
                  htmlFor="message"
                  className="block mb-1 md:mb-2 text-sm md:text-base"
                >
                  Message
                </label>
                <textarea
                  placeholder="How can we help you?"
                  className="w-full bg-gray-800 border border-gray-700 px-3 md:px-4 py-2 md:py-3 rounded-md h-32 md:h-40 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm md:text-base"
                  id="message"
                  name="message"
                  onChange={handleInputChange}
                  value={userInput.message}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-600 transition-colors py-2 md:py-3 rounded-md font-semibold text-sm md:text-base"
                onClick={onFormSubmit}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </HomeLayout>
  );
}

export default ContactUs;
