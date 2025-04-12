

import React from "react";
import HomeLayout from "../Layouts/HomeLayot";

const Services = () => {
  return (

    <HomeLayout>
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 px-4">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16 mt-5 pt-20">
          <span className="inline-block text-lg font-semibold text-blue-600 mb-4 tracking-wide uppercase relative before:content-[''] before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-16 before:h-1 before:bg-lime-500">
            Our Special Services
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6 relative z-10">
            Perfect Smile Starts
            <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-blue-600">
              With Healthy Teeth
            </span>
          </h2>
        </div>

        {/* Services Section */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out p-8 overflow-hidden"
            >
              {/* Hover effect background */}
              <div className="absolute inset-0 bg-gradient-to-br from-lime-100/50 to-blue-100/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative flex flex-col items-center text-center">
                {/* Icon Container */}
                <div className="mb-6 relative">
                  <div className="absolute inset-0 bg-lime-500/10 blur-[20px] rounded-full" />
                  <div className="bg-blue-100 p-4 rounded-full mb-4 transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Animated underline */}
                <div className="w-12 h-1 bg-lime-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-0 right-0 -bottom-24 h-48 bg-gradient-to-t from-white/50 to-transparent pointer-events-none" />
      </div>
    </section>
    </HomeLayout>
  );
}
 export default Services;




// Service data array for easy maintenance
const servicesData = [
  {
    title: "Preventive Care",
    description:
      "Routine checkups, cleanings, and exams to maintain your oral health and prevent dental issues.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12 text-gray-800"
      >
        <path d="M12 1v5M15 4H9m6-3a3 3 0 0 1 6 0v2a3 3 0 0 1-6 0zm-6 0a3 3 0 0 0-6 0v2a3 3 0 0 0 6 0zm1 14a6 6 0 1 1-12 0v-3a6 6 0 1 1 12 0v3z" />
      </svg>
    ),
  },
  {
    title: "Restorative Dentistry",
    description:
      "Treatments such as fillings, crowns, bridges, and implants to restore the function and appearance of your teeth.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12 text-gray-800"
      >
        <path d="M12 2a5 5 0 0 1 5 5v2a4 4 0 0 1-4 4h-2a4 4 0 0 1-4-4V7a5 5 0 0 1 5-5z" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
  },
  {
    title: "Cosmetic Dentistry",
    description:
      "Enhance your smile with teeth whitening, veneers, bonding, and other cosmetic procedures tailored to your needs.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12 text-gray-800"
      >
        <path d="M12 3c3 0 6 2 6 5v6c0 2-1 4-4 4H10c-3 0-4-2-4-4V8c0-3 3-5 6-5z" />
        <path d="M10 10h4m-2-2v4" />
      </svg>
    ),
  },
  {
    title: "Orthodontics",
    description:
      "Straighten your teeth and improve your bite with braces, Invisalign, and other orthodontic solutions.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12 text-gray-800"
      >
        <rect x="4" y="8" width="16" height="8" rx="2" ry="2" />
        <path d="M8 12h8m-2 0a2 2 0 1 1-4 0" />
      </svg>
    ),
  },
  {
    title: "Emergency Care",
    description:
      "Prompt and effective treatment for dental emergencies such as toothaches, broken teeth, and more.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12 text-gray-800"
      >
        <path d="M12 1v22M5 7h14m-7 8v2" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: "Pediatric Dentistry",
    description:
      "Specialized dental care for children to ensure healthy smiles from an early age.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-12 h-12 text-gray-800"
      >
        <circle cx="12" cy="5" r="3" />
        <path d="M5 22v-7a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v7z" />
      </svg>
    ),
  },
  // {
  //   title: "Smile Makeovers",
  //   description:
  //     "Comprehensive smile design solutions to enhance your appearance and confidence.",
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       className="w-12 h-12 text-gray-800"
  //     >
  //       <circle cx="12" cy="12" r="10" />
  //       <path d="M8 16c1.5 2 4.5 2 6 0m-7-6h.01m10-.01h.01" />
  //     </svg>
  //   ),
  // },
  // {
  //   title: "Sedation Dentistry",
  //   description:
  //     "Comfortable dental care with sedation options for stress-free experiences.",
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       className="w-12 h-12 text-gray-800"
  //     >
  //       <path d="M9 3L7.67 8H2l5 3.6L4.67 17 9 13.4 13.33 17 12 11.6 17 8h-5.67L15 3h-6z" />
  //     </svg>
  //   ),
  // },
  // {
  //   title: "Oral Surgery",
  //   description:
  //     "Professional care for complex cases, including wisdom teeth extraction and more.",
  //   icon: (
  //     <svg
  //       xmlns="http://www.w3.org/2000/svg"
  //       viewBox="0 0 24 24"
  //       fill="none"
  //       stroke="currentColor"
  //       strokeWidth="2"
  //       strokeLinecap="round"
  //       strokeLinejoin="round"
  //       className="w-12 h-12 text-gray-800"
  //     >
  //       <path d="M8 2h8l1.5 10h-11L8 2z" />
  //       <path d="M6.5 12h11L14 22h-4z" />
  //     </svg>
  //   ),
  // },
];




