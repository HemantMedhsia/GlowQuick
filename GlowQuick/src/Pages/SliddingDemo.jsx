import React, { useEffect, useState } from "react";
import img1 from "../assets/Images/mainImg.jpg";
import { imgDAta } from "./data";

const SliddingDemo = () => {
    const [current, setCurrent] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        handleNext();
      }, 2000);
      return () => clearInterval(interval);
    }, [current]);
  
    const handleNext = () => {
      setCurrent((prev) => (prev + 1) % imgDAta.length);
    };
  
    const handlePrev = () => {
      setCurrent((prev) => (prev - 1 < 0 ? imgDAta.length - 1 : prev - 1));
    };
  
    const getTransformStyle = (position) => {
      switch (position) {
        case 0: // Leftmost
          return { scale: 0.7, opacity: 0.3, zIndex: 1 };
        case 1: // Second from left
          return { scale: 0.85, opacity: 0.6, zIndex: 3 };
        case 2: // Center (biggest)
          return { scale: 1.2, opacity: 1, zIndex: 5 };
        case 3: // Second from right
          return { scale: 0.85, opacity: 0.6, zIndex: 3 };
        case 4: // Rightmost
          return { scale: 0.7, opacity: 0.3, zIndex: 1 };
        default:
          return { scale: 0.5, opacity: 0.2, zIndex: 0 };
      }
    };
  
    const getVisibleImages = () => {
      const visible = [];
      for (let i = -2; i <= 2; i++) {
        visible.push((current + i + imgDAta.length) % imgDAta.length);
      }
      return visible;
    };
  
    return (
      <div
        className="bg-black text-white font-sans bg-cover"
      >
        <section className="text-center py-1">
          <h1 className="text-4xl font-bold">Testimonials</h1>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Lorem ipsum is placeholder text for the app description. Available on
            Google Play and App Store.
          </p>
  
          <div className="w-full flex justify-center items-center py-8 relative">
            <button
              className="absolute left-4 bg-white text-black px-4 py-2 rounded-full z-10"
              onClick={handlePrev}
            >
              Prev
            </button>
            <div className="relative w-full sm:w-[90%] md:w-[80%] lg:w-[70%] pt-32 h-[600px] overflow-hidden flex justify-center items-center">
              {getVisibleImages().map((index, position) => {
                const { scale, opacity, zIndex } = getTransformStyle(position);
  
                return (
                  <div
                    key={index}
                    className="absolute h-full transition-transform duration-1000 ease-in-out"
                    style={{
                      transform: `translateX(${
                        (position - 2) * 120
                      }%) scale(${scale})`,
                      zIndex,
                      opacity,
                    }}
                  >
                    <img
                      src={imgDAta[index].url}
                      alt={`Slide ${index + 1}`}
                      className="w-48 h-fit object-cover"
                    />
                  </div>
                );
              })}
            </div>
            <button
              className="absolute right-4 bg-white text-black px-4 py-2 rounded-full z-10"
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </section>
      </div>
    );
}

export default SliddingDemo