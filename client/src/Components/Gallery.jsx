const Gallery = () => {
    return(
        <section className="gallery bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center flex-col text-center">
            <h2 className="text-lime-500 text-sm uppercase font-bold hover:cursor-pointer text-center">
              Photo Gallery
            </h2>
            <span className="text-3xl font-extrabold text-gray-800 mt-1 hover:cursor-pointer text-center mb-12">
              <span className="hidden sm:inline">
                This is our special collected album in previous year
              </span>
              <span className="inline sm:hidden">
                This is our collected album
              </span>
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-lg shadow-lg cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {/* <a
                  href={image.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-lg font-medium bg-gray-900 px-4 py-2 rounded shadow hover:bg-gray-700"
                >
                  View Full
                </a> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}

export default Gallery;



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