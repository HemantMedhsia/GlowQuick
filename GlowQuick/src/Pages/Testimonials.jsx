import React, { useEffect, useState } from 'react';
import { testimonialsData } from './data'; // Import testimonials data

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, [current]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % testimonialsData.length);
  };

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 < 0 ? testimonialsData.length - 1 : prev - 1));
  };

  // Render stars for the rating
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating ? '★' : '☆'); // Fill or empty star
    }
    return stars.join(' ');
  };

  return (
    <div className="bg-[#] font-sans py-12">
      <section className="text-center">
        <h1 className="text-4xl text-[#285F74] font-bold">Testimonials</h1>
        <p className="text-gray-900 text-lg my-4 max-w-xl mx-auto">
          Hear what our customers have to say about our services and products.
        </p>

        <div className="relative w-full flex justify-center items-center py-8">
          {/* Previous Button */}
          <button
            className="absolute left-4 bg-gray-800 text-white px-4 py-2 rounded-full z-10"
            onClick={handlePrev}
          >
            Prev
          </button>

          {/* Testimonials Slider */}
          <div className="relative w-full h-full sm:w-[90%] md:w-[80%] lg:w-[70%] flex overflow-hidden">
            {testimonialsData.map((testimonial, index) => {
              const isActive = index === current;
              return (
                <div
                  key={index}
                  className={`transition-transform duration-500 ease-in-out flex-shrink-0 w-full max-w-md px-2 transform ${
                    isActive ? 'opacity-100 bg-[#285F74] rounded-full text-white scale-105' : 'opacity-60 text-black scale-90'
                  }`}
                  style={{ transform: `translateX(-${current * 100}%)` }}
                >
                  <div className="bg-none shadow-lg flex flex-col justify-center items-center rounded-lg p-6 relative">
                    {/* Profile Image */}
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full border-4 border-white"
                    />
                    <p className=" text-sm italic mt-4">"{testimonial.review}"</p>
                    <div className="mt-4">
                      <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-yellow-400">{testimonial.position}</p>
                      {/* Display rating */}
                      <p className="mt-2 text-yellow-500 text-lg">{renderStars(testimonial.rating)}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Next Button */}
          <button
            className="absolute right-4 bg-gray-800 text-white px-4 py-2 rounded-full z-10"
            onClick={handleNext}
          >
            N
          </button>
        </div>
      </section>
    </div>
  );
};

export default Testimonials;
