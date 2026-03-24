import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import app from "../../assets/banner.png";

const Banner = () => {
  return (
    <div className="bg-base-200 pt-15 px-4">
      <div className="max-w-7xl mx-auto text-center">

        {/* Heading */}
        <h1 
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-3xl md:text-5xl font-bold text-gray-800"
        >
          We Build{" "}
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive
          </span> Apps
        </h1>

        {/* Description */}
        <p 
          data-aos="fade-up"
          data-aos-delay="200"
          className="mt-4 text-sm md:text-base text-gray-500 max-w-2xl mx-auto"
        >
          At HERO10, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting. Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        {/* Buttons */}
        <div 
          data-aos="zoom-in"
          data-aos-delay="400"
          className="flex justify-center gap-4 mt-6 flex-wrap"
        >
          <a
            href="https://play.google.com/store/games?hl=en"
            target="_blank"
            className="btn btn-sm md:btn-md bg-white text-black border border-gray-300 hover:bg-gray-100"
          >
            <FaGooglePlay size={20} className="text-green-500" />
            Google Play
          </a>

          <a
            href="https://www.apple.com/app-store/"
            target="_blank"
            className="btn btn-sm md:btn-md bg-white text-black border border-gray-300 hover:bg-gray-100"
          >
            <FaApple size={20} className="text-black" />
            App Store
          </a>
        </div>

        {/* Image Section */}
        <div 
          data-aos="fade-up"
          data-aos-delay="600"
          className="mt-12 flex justify-center"
        >
          <img
            src={app}
            alt="App Preview"
            className="w-9/12 h-full"
          />
        </div>

      </div>
    </div>
  );
};

export default Banner;