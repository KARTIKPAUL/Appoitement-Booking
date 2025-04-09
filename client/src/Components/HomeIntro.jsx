import { Link } from "react-router-dom";
import homePageMainImage from "../assets/homePageMainImage.png";

const HomeIntro = () => {
  return (
    
    <div className="flex min-h-screen flex-col md:flex-row bg-gray-100 items-center justify-center md:px-16 px-4  pt-20 md:pt-16 pb-8 md:pb-0"> {/* Added pt-20 for mobile */}
      {/* Text Content Section */}
      <div className="md:w-1/2 w-full space-y-6 order-2 md:order-1 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Welcome to Our &nbsp;
          <span className="text-yellow-500 font-bold">
            Aesthetic of Perfection
          </span>
        </h1>
        
        <p className="text-base md:text-xl text-gray-800 md:pr-8">
          Experience premium treatments and personalized care that elevate your
          wellness journey. Your beauty and confidence, redefined.
        </p>

        <div className="flex flex-col md:flex-row gap-3 md:space-x-6 md:space-y-0 space-y-3 justify-center md:justify-start">
          <Link to="/course/create" className="w-full md:w-auto">
            <button className="w-full md:w-auto border bg-yellow-500 px-5 py-3 rounded-md text-white font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
              Book Appointments
            </button>
          </Link>
          
          <Link to="/contact" className="w-full md:w-auto">
            <button className="w-full md:w-auto border border-yellow-500 px-5 py-3 bg-gray-800 rounded-md text-white font-semibold text-lg cursor-pointer hover:bg-yellow-600 transition-all ease-in-out duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 w-full flex justify-center items-center order-1 md:order-2 mb-8 md:mb-0">
        <img 
          src={homePageMainImage} 
          alt="HomePagePic" 
          className="max-w-xs md:max-w-lg w-full h-auto"
        />
      </div>
    </div>
    
  );
};

export default HomeIntro;