import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const testimonials = [
  {
    name: "Sreshtha Majumdar",
    feedback: "The care and precision demonstrated by the team were  exceptional. Every step of my treatment was explained thoroughly, and the results speak for themselves.",
    image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 5,
  },
  {
    name: "Ganesh Barman",
    feedback: "The team at Nivedita Dental Clinic exceeded my expectations!  Their attention to detail and personalized care gave me a smile that looks completely natural and radiant. I couldn’t be happier  with the results.",
    image: "https://images.pexels.com/photos/4475024/pexels-photo-4475024.jpeg?auto=compress&cs=tinysrgb&w=600",
    rating: 4,
  },
  {
    name: "Haris Barman",
    feedback: "From the moment I walked in, I felt at ease. The staff is  incredibly welcoming, and the level of expertise displayed  throughout my treatment was truly impressive.",
    image: "https://images.pexels.com/photos/6260921/pexels-photo-6260921.jpeg?auto=compress&cs=tinysrgb&w=600",
    
    rating: 4,
  },
  
];

const Testimonialss = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "ease-in-out",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          speed: 800
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          speed: 600
        },
      },
    ],
  };

  const renderStars = (rating) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-300"}>★</span>
      ));
  };

  return (
    <div className="px-6 bg-gradient-to-b from-primary-black to-gray-900 py-16 md:px-20 lg:px-40">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-600 text-center mb-10 uppercase tracking-wide">
          What Our Customers Say
          <div className="mt-2 h-1 w-20 bg-orange-500 mx-auto rounded-full" />
        </h1>

        <div className="-mx-4">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-4 focus:outline-none">
                <div className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center gap-5 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 h-[400px]"> {/* Fixed height */}
                  <div className="relative">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover ring-4 ring-orange-500/20"
                    />
                    <div className="absolute bottom-0 right-0 bg-orange-500 text-white rounded-full px-2 py-1 text-xs font-bold">
                      {testimonial.rating}.0
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-gray-800 text-center">
                    {testimonial.name}
                  </h2>
                  <p className="text-gray-600 text-center leading-relaxed overflow-y-auto flex-1"> {/* Scrollable content */}
                    "{testimonial.feedback}"
                  </p>
                  <div className="mt-2 flex gap-1 text-xl">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};



export default Testimonialss;