import React from "react";
import HomeLayout from "../Layouts/HomeLayot";
import aboutMainImage from "../assets/aboutMainImage.png";
import CarouselSlide from "../Components/CarouselSlide";
import { celebrities } from "../Components/Constants/CelebrityData";

function AboutUs() {
  return (
    <HomeLayout>
      <div className="pl-20 pt-20 flex flex-col text-white">
        <div className="flex items-center gap-5 mx-10">
          <section className="w-1/2 space-y-10">
            <h1 className="text-5xl text-yellow-500 font-semibold">
            Premium Aesthetic Treatments
            </h1>
            <p className="text-xl text-gray-200">
              We specialize in providing premium aesthetic treatments, ensuring
              you look and feel your best. Our clinic uses the latest
              technology, and our certified professionals are dedicated to
              enhancing your wellness. Discover comprehensive beauty and
              wellness treatments tailored to your needs with an expert team of
              certified professionals and personalized care.
            </p>
          </section>

          <div className="w-1/2">
            <img
              id="test1"
              alt="about main image"
              className="drop-shadow-2xl"
              src={aboutMainImage}
            />
          </div>
        </div>

        <div className="carousel w-1/2 m-auto my-16">
          {celebrities &&
            celebrities.map((celebrity) => (
              <CarouselSlide
                {...celebrity}
                key={celebrity.slideNumber}
                totalSlides={celebrities.length}
              />
            ))}
        </div>
      </div>
    </HomeLayout>
  );
}

export default AboutUs;
