import React from "react";
import vd1 from "../assets/Vedio/vd1.mp4";
import vd2 from "../assets/Vedio/vd2.mp4";
import vd3 from "../assets/Vedio/vd3.mp4";
import Button1 from "../Common/Button1/Button1";

const TopSection = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        loop
        muted
      >
        <source
          src={vd2} // Replace with your video URL
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Black Shade Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Content Over Video */}
      <div className="relative z-10 text-white flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-8xl font-bold mb-4">
            Streamline Your Day with <span className="text-[#00c2d1] text-9xl">Glow</span><spa className="text-[#285F74] text-8xl">Quick</spa>
          </h1>
          <p className="text-xl mb-6 font-extralight">
            Tired of waiting in long queues? GlowQuick helps you book
            appointments effortlessly and skip the wait at barber shops and
            beyond.
          </p>
          {/* <div className="w-[37%] h-full bg-none flex justify-center items-center">
            <h1 className="text-[13rem] font-bold text-teal-500 tracking-widest outline-text leading-none transform">
              YOUR PATH
            </h1>
          </div> */}
          <Button1 name={"Get your frist Appointment"} />
        </div>
      </div>
    </div>
  );
};

export default TopSection;
