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

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 px-4">
      <div className="mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <span className="inline-block text-lg font-semibold text-blue-600 mb-4 tracking-wide uppercase relative before:content-[''] before:absolute before:-bottom-2 before:left-1/2 before:-translate-x-1/2 before:w-16 before:h-1 before:bg-lime-500">
            Why Choose Us?
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mt-4 mb-6 relative z-10">
            Exceptional Care, <br className="hidden sm:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-500 to-blue-600">
              Extraordinary Results
            </span>
          </h2>
        </div>

        {/* Cards Section */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {chooseUsData.map((item, index) => (
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
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-20 h-20 mb-4 transition-transform duration-300 group-hover:scale-110"
                  />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {item.description}
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
  );
};

export default WhyChooseUs;
