import React, { useState } from "react";
import { getStoredApps, removeFromDB, sortByDownloads } from "../../utility/Utility";
import { useLoaderData } from "react-router";
import { FaStar } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

const Installation = () => {
  const apps = useLoaderData();
  const storedIds = getStoredApps().map(id => parseInt(id));
  const installedApps = apps.filter(app => storedIds.includes(app.id));
  const [sortedApps, setSortedApps] = useState(installedApps);

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

      <div className="text-center mb-8">
        <h2 className="text-2xl sm:text-2xl md:text-3xl font-bold">
          Your Installed Apps
        </h2>
        <p className="text-gray-500 text-sm mt-2">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2 sm:gap-0">
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

      <div className="space-y-4">
        {sortedApps.map(app => (
          <div
            key={app.id}
            className="flex flex-col sm:flex-row sm:items-center justify-between bg-base-100 p-4 rounded-lg shadow-sm gap-4 sm:gap-0"
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

                <div className="flex  sm:items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-500 mt-1">
                  <span className="flex items-center gap-1 text-green-500 font-medium">
                    <FiDownload size={12} /> {app.downloads / 1000000}M
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
        <div className="text-center py-10 text-gray-500">
          No Installed Apps Found
        </div>
      )}
    </section>
  );
};

export default Installation;