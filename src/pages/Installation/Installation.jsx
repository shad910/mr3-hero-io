import React, { useState, useEffect } from "react";
import AOS from "aos";
import { getStoredApps, removeFromDB, sortByDownloads } from "../../utility/Utility";
import { Link, useLoaderData } from "react-router";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import error from "../../assets/App-Error.png"

const Installation = () => {
  const apps = useLoaderData();
  const storedIds = getStoredApps().map(id => parseInt(id));
  const installedApps = apps.filter(app => storedIds.includes(app.id));
  const [sortedApps, setSortedApps] = useState(installedApps);

  useEffect(() => {
    AOS.refresh();
  }, []);

  const handleSort = (type) => {
    const sorted = sortByDownloads(installedApps, type);
    setSortedApps(sorted);
  };

  const handleUninstall = (id, title) => {
    removeFromDB(id, title);
    const updatedApps = sortedApps.filter(app => app.id !== id);
    setSortedApps(updatedApps);
  }

  return (
    <section className="max-w-7xl mx-auto px-4 mt-10 mb-20">

      {/* Section Title */}
      <div
        className="text-center mb-8"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">
          Your Installed Apps
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      {/* Sorting Bar */}
      <div
        className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <p className="text-[#001931] text-sm font-medium">
          {sortedApps.length} Apps Found
        </p>

        <select
          className="select select-sm border border-gray-300 w-full sm:w-auto"
          onChange={(e) => handleSort(e.target.value)}
        >
          <option value="">Sort By Downloads</option>
          <option value="high-to-low">High → Low</option>
          <option value="low-to-high">Low → High</option>
        </select>
      </div>

      {/* Installed Apps List */}
      <div className="space-y-4">
        {sortedApps.map((app, index) => (
          <div
            key={app.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between bg-base-100 p-4 rounded-lg shadow-sm gap-4 sm:gap-0"
            data-aos="fade-up"
            data-aos-delay={100 + index * 100}
          >
            <div className="flex items-center gap-4">
              {/* Image */}
              <img
                src={app.image}
                alt={app.title}
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg bg-gray-100 object-contain"
              />

              {/* Info */}
              <div>
                <h3 className="font-semibold text-sm sm:text-base md:text-base">
                  {app.title}
                </h3>

                <div className="flex sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 mt-1">
                  <span className="flex items-center gap-1 text-green-500 font-medium">
                    <FiDownload size={12} /> {(app.downloads / 1000000).toFixed(1)}M
                  </span>
                  <span className="flex items-center gap-1 text-orange-500">
                    <FaStar size={12} /> {app.ratingAvg}
                  </span>
                  <span>{app.size} MB</span>
                </div>
              </div>
            </div>

            {/* Button */}
            <button
              onClick={() => handleUninstall(app.id, app.title)}
              className="btn btn-sm btn-success text-white border-none w-full sm:w-auto"
            >
              Uninstall
            </button>
          </div>
        ))}
      </div>

      {/* If Empty */}
      {sortedApps.length === 0 && (
        <div
          className="flex flex-col items-center justify-center text-center py-8"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            src={error}
            alt="No App Found"
            className="w-64 md:w-80 mb-6"
          />
          <h3 className="text-xl md:text-2xl font-bold text-[#001931]">
            Oops! App Not Found
          </h3>
          <p className="text-sm text-gray-500 mt-2 max-w-md">
            The app you’re looking for isn’t available in our system. Try searching for another app or check back later.
          </p>
          <Link to="/apps"
            className="btn btn-sm mt-4 bg-[#632EE3] text-white hover:bg-[#5324c7]"
          >
            Go Back
          </Link>
        </div>
      )}

    </section>
  );
};

export default Installation;