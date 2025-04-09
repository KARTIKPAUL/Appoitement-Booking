import React, { useState } from "react";
import Header from "../Layouts/Header";
import Services from "./Services";
import { Link } from "react-router-dom";
import WhyChooseUs from "./WhyChoous";
import OurTeam from "../Components/OurTeam";
import Gallery from "../Components/Gallery";
import Testimonials from "../Components/Testimonials";

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
    <>

      {/* <section
        className="hero spad bg-cover bg-center relative py-20 flex items-center justify-center w-full"
        style={{
          backgroundImage: "url(https://images.pexels.com/photos/11661531/pexels-photo-11661531.jpeg?auto=compress&cs=tinysrgb&w=600)",
          minHeight: "calc(100vh - 2rem)", 
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center", 
        }}
      >
       
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        
        <div className="container mx-auto relative z-10 text-lime-600 text-center px-4">
          
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-2xl sm:text-6xl font-extrabold leading-tight text-gray-300">
              <span className="text-lime-500">Welcome to Our &nbsp;</span>{" "}
              <br />
              Aesthetic of Perfection
            </h1>

            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed">
              Experience premium treatments and personalized care that elevate
              your wellness journey. Your beauty and confidence, redefined.
            </p>

        
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="/services"
                className="px-5 py-2 bg-lime-600 text-white font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all hover:shadow-2xl"
              >
                Explore Our Services
              </a>
              <a
                href="/contact"
                className="px-5 py-2 bg-gray-300 text-gray-800 font-semibold rounded-full shadow-lg transform hover:scale-105 transition-all hover:shadow-2xl"
              >
                Book an Appointment
              </a>
            </div>
          </div>
        </div>
      </section> */}

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

                <Link
                  to={"/course/create"}
                  className="w-full px-28 bg-lime-600 text-white py-3 rounded-lg hover:bg-grean-700 transition duration-300"
                >
                  Book Appointment
                </Link>
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

      <Services />

      {/* <!-- Services Section End --> */}

      {/* Team Section Satrt */}

      <OurTeam />

      {/* <!-- Team Section End --> */}

      {/* <!-- Gallery Begin --> */}

      <Gallery />

      {/* <!-- Gallery End --> */}

      {/* <!-- Latest News Begin --> */}

      <Testimonials />

      {/* <!-- Latest News End --> */}
    </>
  );
};

const images = [
  { src: "/img/op/op8.jpg", alt: "Gallery Image 1" },
  { src: "/img/op/op5.jpg", alt: "Gallery Image 2" },
  { src: "/img/op/op3.jpg", alt: "Gallery Image 3" },
  { src: "/img/op/op7.jpg", alt: "Gallery Image 2" },
  { src: "/img/op/op2.jpg", alt: "Gallery Image 5" },
  { src: "/img/op/op6.jpg", alt: "Gallery Image 6" },
  { src: "/img/op/op4.jpg", alt: "Gallery Image 7" },
  { src: "/img/op/op1.jpg", alt: "Gallery Image 3" },
];

const chooseUsData = [
  {
    title: "Advanced Equipment",
    description:
      "We use the latest state-of-the-art dental technology to ensure precise diagnostics and effective treatments, making your visit comfortable and efficient.",
    icon: "/img/icons/ci-1.png",
  },
  {
    title: "Qualified Doctors",
    description:
      "Our team of experienced and skilled dental professionals are dedicated to providing the highest level of care, tailoring treatments to your specific needs.",
    icon: "img/icons/ci-2.png",
  },
  {
    title: "Certified Services",
    description:
      "We adhere to the highest standards in dental care, offering services backed by certifications and a commitment to quality and safety for all our patients.",
    icon: "img/icons/ci-3.png",
  },
  {
    title: "Emergency Care",
    description:
      "Dental emergencies can happen at any time. We're here to provide fast, reliable emergency dental care whenever you need it most.",
    icon: "img/icons/injection.png",
  },
  {
    title: "Affordable Treatment Options",
    description:
      "We offer cost-effective dental solutions without compromising on quality.",
    icon: "img/icons/pay.png",
  },
  {
    title: "Patient-Centered Approach",
    description:
      "From the moment you step into our clinic, your comfort and satisfaction are our top priority.",
    icon: "img/icons/patient.png",
  },
];

const teamData = [
  {
    name: "Caroline Grant",
    role: "Plastic Surgeon",
    image: "img/team/team-1.jpg",
    socials: [
      { icon: "fa-facebook", link: "#" },
      { icon: "fa-twitter", link: "#" },
      { icon: "fa-instagram", link: "#" },
      { icon: "fa-dribbble", link: "#" },
    ],
  },
  {
    name: "Dr. Maria Angel",
    role: "Plastic Surgeon",
    image: "img/team/team-2.jpg",
    socials: [
      { icon: "fa-facebook", link: "#" },
      { icon: "fa-twitter", link: "#" },
      { icon: "fa-instagram", link: "#" },
      { icon: "fa-dribbble", link: "#" },
    ],
  },
  {
    name: "Nathan Mullins",
    role: "Plastic Surgeon",
    image: "img/team/team-3.jpg",
    socials: [
      { icon: "fa-facebook", link: "#" },
      { icon: "fa-twitter", link: "#" },
      { icon: "fa-instagram", link: "#" },
      { icon: "fa-dribbble", link: "#" },
    ],
  },
];

export default Home;
