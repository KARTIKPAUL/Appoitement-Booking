const Testimonials = () => {
    return(
        <section className="latest py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Title and Button Row */}
          <div className="flex flex-wrap items-center justify-center mb-12">
            <div className="text-center w-full md:w-auto">
              {/* <h2 className="text-lg text-[#5876d6] mt-2 uppercase tracking-wide font-semibold hover:cursor-pointer text-center"></h2>
                                <h3 className="text-3xl text-[#d6589d]  hover:cursor-pointer font-semibold mt-2 text-center"></h3> */}

              <h2 className="text-lime-500 text-sm uppercase font-bold  hover:cursor-pointer text-center">
                Testimonials
              </h2>
              <span className=" text-3xl font-extrabold text-gray-800 mt-1 hover:cursor-pointer text-center">
                What Our Clients Say
              </span>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h5 className="text-xl font-semibold text-gray-800">
                <a href="#" className="hover:text-lime-600 transition">
                  “Amazing results and natural glow!”
                </a>
              </h5>
              <p className="text-gray-600 mt-4">
                The care and precision demonstrated by the team were
                exceptional. Every step of my treatment was explained
                thoroughly, and the results speak for themselves.
              </p>
              {/* Stars */}
              <div className="flex items-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa fa-star text-lime-500"></i>
                ))}
              </div>
              {/* Author Info */}
              <ul className="flex items-center space-x-4 mt-4 text-lime-500">
                <li className="flex items-center">
                  <img
                    src="/img/patient.png"
                    alt="Author"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  Nagraj Pandey
                </li>
                <li>Dec 06, 2019</li>
              </ul>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h5 className="text-xl font-semibold text-gray-800">
                <a href="#" className="hover:text-lime-600 transition">
                  “Top-notch service with visible improvements!”
                </a>
              </h5>
              <p className="text-gray-600 mt-4">
                The team at Nivedita Dental Clinic exceeded my expectations!
                Their attention to detail and personalized care gave me a smile
                that looks completely natural and radiant. I couldn’t be happier
                with the results.
              </p>
              {/* Stars */}
              <div className="flex items-center mt-4">
                {[...Array(4)].map((_, i) => (
                  <i key={i} className="fa fa-star text-lime-500"></i>
                ))}
                <i className="fa fa-star text-lime-300"></i>
              </div>
              {/* Author Info */}
              <ul className="flex items-center space-x-4 mt-4 text-lime-500">
                <li className="flex items-center">
                  <img
                    src="/img/patient.png"
                    alt="Author"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  Bhushan Kumar
                </li>
                <li>Jan 15, 2020</li>
              </ul>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white shadow-md rounded-lg p-6">
              <h5 className="text-xl font-semibold text-gray-800">
                <a href="#" className="hover:text-lime-600 transition">
                  “Fantastic experience from start to finish!”
                </a>
              </h5>
              <p className="text-gray-600 mt-4">
                From the moment I walked in, I felt at ease. The staff is
                incredibly welcoming, and the level of expertise displayed
                throughout my treatment was truly impressive.
              </p>
              {/* Stars */}
              <div className="flex items-center mt-4">
                {[...Array(5)].map((_, i) => (
                  <i key={i} className="fa fa-star text-lime-500"></i>
                ))}
              </div>
              {/* Author Info */}
              <ul className="flex items-center space-x-4 mt-4 text-lime-500">
                <li className="flex items-center">
                  <img
                    src="/img/patient.png"
                    alt="Author"
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  Sanjib Das
                </li>
                <li>Feb 20, 2020</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-5">
          <a
            href="/testimonials"
            className="bg-lime-600 text-white py-2 px-6 rounded-md hover:bg-lime-700 transition"
          >
            View all testimonials
          </a>
        </div>
      </section>
    )
}

export default Testimonials;