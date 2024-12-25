import React from "react";
import AboutImg from "../assets/Images/AboutImg.jpg";

const AboutUs = () => {
  return (
    <div className="bg-[#cfe5ed] text-gray-800">
      <section className="bg-gradient-to-r from-[#cfe5ed] py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#285F74] mb-8">
            Our Core Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Customer First */}
            <div className="p-8 bg-white shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#285F74] text-white flex items-center justify-center rounded-full">
                  <i className="fas fa-user text-2xl"></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#285F74] mb-2">
                Customer First
              </h3>
              <p className="text-gray-600">
                We prioritize customer satisfaction by providing easy,
                accessible, and fast services.
              </p>
            </div>

            {/* Innovation */}
            <div className="p-8 bg-white shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#00c2d1] text-white flex items-center justify-center rounded-full">
                  <i className="fas fa-lightbulb text-2xl"></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#285F74] mb-2">
                Innovation
              </h3>
              <p className="text-gray-600">
                We continuously improve our platform to ensure the best
                experience for users and barbers alike.
              </p>
            </div>

            {/* Quality */}
            <div className="p-8 bg-white shadow-lg rounded-lg transform hover:scale-105 transition duration-300">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-[#00c2d1] text-white flex items-center justify-center rounded-full">
                  <i className="fas fa-check-circle text-2xl"></i>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-[#285F74] mb-2">
                Quality
              </h3>
              <p className="text-gray-600">
                Our focus on quality ensures that every interaction on GlowQuick
                is seamless and reliable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="bg-gradient-to-r from-[#285F74] via-teal-900 to-[#285F74] text-white py-20 bg-cover bg-center bg-blend-overlay"
        style={{
          backgroundImage: `url(${AboutImg})`,
        }}
      >
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4">
            About
            <h1 className="text-8xl font-bold mb-4">
              <span className="text-[#00c2d1] text-7xl">Glow</span>
              <span className="text-[#285F74] text-6xl">Quick</span>
            </h1>
          </h1>
          <p className="text-lg max-w-2xl mx-auto">
            At GlowQuick, we revolutionize the way you experience haircuts and
            grooming services. Say goodbye to long queues and hello to seamless
            appointments.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
