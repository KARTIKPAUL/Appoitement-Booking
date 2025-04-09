import React from "react";
import HomeLayout from "../Layouts/HomeLayot";
import { Link } from "react-router-dom";
import homePageMainImage from "../assets/homePageMainImage.png";
import aboutMainImage from "../assets/aboutMainImage.png";
import Home from "./Home";
import Header from "../Layouts/Header";

function HomePage() {
  return (
    <HomeLayout>
      
      
      <div className="flex bg-gray-100 items-center justify-center">
        <div className="text-white flex items-center justify-center gap-10 mx-16 h-[90vh]"></div>
        <div className="w-1/2 space-y-6">
          <h1 className="text-5xl font-semibold">
          Welcome to Our  &nbsp;
            <span className="text-yellow-500 font-bold">Aesthetic of Perfection</span>
          </h1>
          <p className="text-xl text-gray-800">
          Experience premium treatments and personalized care that elevate your wellness journey. Your beauty and confidence, redefined.
          </p>

          <div className="space-x-6">
          {/* /course/create */}
            <Link to="/course/create">
              <button className="border bg-yellow-500 px-5 py-3 rounded-md text-white font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                Book Appoitements
              </button>
            </Link>
            <Link to="/contact">
              <button className="border border-yellow-500 px-5 py-3 bg-gray-800 rounded-md text-white font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <img src={homePageMainImage} alt="HomePagePic" />
        </div>
      </div>
      <Home />
    </HomeLayout>
  );
}

export default HomePage;
