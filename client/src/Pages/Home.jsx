import React, { useState } from "react";
import Header from "../Layouts/Header";
import Services from "./Services";
import { Link } from "react-router-dom";
import WhyChooseUs from "./WhyChoous";
import OurTeam from "../Components/OurTeam";
import Gallery from "../Components/Gallery";
import Testimonials from "../Components/Testimonials";
import Testimonialss from "../Components/Testimonialss";
import ServicesSection from "../Components/ServicesSection";

const Home = () => {
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [serviceType, setServiceType] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the form submission logic here
    console.log({ name, email, date, serviceType });
  };
  return (
    <div className="w-full">

    {/* <!-- Consultation Section Start --> */}
      <section className="consultation py-12 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Appointment Form */}
            <div className="bg-white shadow-lg rounded-lg p-8">
              <div className="mb-6 text-center">
                <span className="text-lime-500 text-sm uppercase font-bold">
                  Request for Your
                </span>
                <h2 className="text-2xl font-extrabold text-gray-800 mt-2">
                  Appointment
                </h2>
              </div>
              <form action="#">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-white text-slate-900 w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-grean-600"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-white text-slate-900 w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-grean-600"
                />
                <div className="relative mb-4">
                  <input
                    type="text"
                    placeholder="Date"
                    className=" bg-white text-slate-900 w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-grean-600"
                  />
                  <i className="fa fa-calendar absolute right-3 top-3 text-gray-400"></i>
                </div>

                <select className="bg-white text-slate-900 w-full mb-6 p-3 border rounded-lg focus:outline-none focus:lime-2 focus:ring-lime-600">
                  <option value="">Select Type of Service</option>
                  <option value="Advanced equipment">Advanced Equipment</option>
                  <option value="Qualified doctors">Qualified Doctors</option>
                  <option value="Certified services">Certified Services</option>
                  <option value="Emergency care">Emergency Care</option>
                </select>

                <button
                  to={"/course/create"}
                  className="w-full bg-lime-600 text-white py-3 rounded-lg hover:bg-grean-700 transition duration-300"
                >
                  Book Appointment
                </button>
              </form>
            </div>

            {/* Informative Content */}
            <div className="flex flex-col justify-center space-y-8">
              {/* Welcome Message */}
              <div className="flex flex-col">
                <span className="text-lime-500 text-sm uppercase font-bold text-center">
                  Welcome to Nivedita Medical
                </span>
                <h2 className="text-3xl font-extrabold text-gray-800 mt-2 text-center">
                  Discover Exceptional{" "}
                  <span className="text-lime-500 text-center">Care</span>
                </h2>
                <p className="mt-4 text-gray-600">
                  With over 13 years of experience in cosmetic dentistry,
                  Nivedita Medical is dedicated to providing personalized and
                  transformative dental care. Our team of expert dentists
                  combines advanced techniques with a deep understanding of
                  aesthetics to craft beautiful, confident smiles.
                </p>
              </div>

              {/* Video Section */}
              <div className="relative group">
                <div
                  className="rounded-lg bg-cover bg-center h-72"
                  style={{
                    backgroundImage: `url(https://images.pexels.com/photos/11661531/pexels-photo-11661531.jpeg?auto=compress&cs=tinysrgb&w=600)`,
                  }}
                >
                  {/* <a
              href="/img/op/op1.jpg"
              className="absolute inset-0 flex items-center justify-center text-lime-500 bg-black bg-opacity-50 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300"
            >
              <i className="fa fa-play text-4xl"></i>
            </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Consultation Section End --> */}

      {/* <!-- WhyChooseus Section Start --> */}

      <WhyChooseUs />

      {/* <!-- WhyChooseus Section End --> */}

      {/* <!-- Services Section Begin --> */}

      <ServicesSection />

      {/* <!-- Services Section End --> */}

      {/* Team Section Satrt */}

      <OurTeam />

      {/* <!-- Team Section End --> */}

      {/* <!-- Gallery Begin --> */}

      <Gallery />

      {/* <!-- Gallery End --> */}

      {/* <!-- Latest News Begin --> */}

      <Testimonialss />

      {/* <!-- Latest News End --> */}
    </div>
  );
};







export default Home;
