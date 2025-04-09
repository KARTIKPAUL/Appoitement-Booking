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
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="text-lime-500 text-lg uppercase font-semibold">
            Why choose us?
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mt-2">
            Offer for you
          </h2>
        </div>

        {/* Cards Section */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Card Items */}
          {chooseUsData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-2xl transition duration-300"
            >
              <div className="flex flex-col items-center">
                {/* Icon/Image */}
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-16 h-16 mb-4"
                />
                {/* Title */}
                <h5 className="text-xl font-semibold text-gray-800 mb-2 text-center">
                  {item.title}
                </h5>
                {/* Description */}
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
