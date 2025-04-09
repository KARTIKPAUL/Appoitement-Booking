const OurTeam = () => {
    return(
        <section className="py-16 bg-gray-50">
        <div className="container mx-auto">
          {/* Title Section */}
          <div className="text-center mb-12">
            <h3 className="text-sm uppercase text-lime-500 font-bold hover:cursor-pointer text-center mt-8">
              Our Team
            </h3>
            <h2 className="text-3xl font-extrabold mt-2 hover:cursor-pointer text-center mb-8 sm:mb-0 text-gray-800">
              Meet Our Expert Doctors
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Our team of highly skilled professionals is dedicated to providing
              exceptional care and expertise in their fields.
            </p>
          </div>

          {/* Team Members */}
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"> */}
          <div className="flex justify-center items-center">
            {/* Team Member */}
            <div className="team rounded-lg transition-transform transform hover:-translate-y-2">
              <div className="flex justify-center p-6">
                <img
                  className="w-64 h-64 object-cover rounded-full shadow-md"
                  src="img/team/NiveditaImage.jpg"
                  alt="Caroline Grant"
                />
              </div>
              <div className="p-6 text-center">
                <h5 className="text-xl font-semibold text-gray-800">
                  Dr. Tushar Maturkar
                </h5>
                <span className="text-sm text-lime-500 block mt-2">
                  BDS, Dental Surgeon
                </span>
                <div className="flex justify-center space-x-4 mt-4">
                  <a href="#" className="text-gray-600 hover:text-lime-500">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-lime-400">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-lime-500">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#" className="text-gray-600 hover:text-lime-500">
                    <i className="fa fa-dribbble"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default OurTeam;