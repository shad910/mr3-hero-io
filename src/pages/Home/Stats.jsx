import React from "react";

const Stats = () => {
  return (
    <div 
      data-aos="fade-up"
      className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-16 px-4 text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Title */}
        <h2 
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-2xl md:text-4xl font-bold mb-10"
        >
          Trusted By Millions, Built For You
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Downloads */}
          <div 
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <p className="text-sm opacity-80 mb-2">Total Downloads</p>
            <h3 className="text-3xl md:text-5xl font-bold">
              29.6M
            </h3>
            <p className="text-xs mt-2 opacity-70">
              21% More Than Last Month
            </p>
          </div>

          {/* Reviews */}
          <div 
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <p className="text-sm opacity-80 mb-2">Total Reviews</p>
            <h3 className="text-3xl md:text-5xl font-bold">
              906K
            </h3>
            <p className="text-xs mt-2 opacity-70">
              46% More Than Last Month
            </p>
          </div>

          {/* Active Apps */}
          <div 
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <p className="text-sm opacity-80 mb-2">Active Apps</p>
            <h3 className="text-3xl md:text-5xl font-bold">
              132+
            </h3>
            <p className="text-xs mt-2 opacity-70">
              31 More Will Launch
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Stats;