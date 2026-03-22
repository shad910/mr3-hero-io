import React from 'react';
import { FaStar } from 'react-icons/fa';
import { FiDownload } from "react-icons/fi";
import { Link } from 'react-router';


const Card = ({ data }) => {

  const formatNumbers = (num) => {
    if (num >= 1000000) return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
    if (num >= 1000) return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'k';
    return num;
  };

  return (
    <Link to={`/apps-details/${data.id}`} className="group relative w-full bg-base-100 rounded-lg border border-base-100 p-4 shadow-sm transition-all duration-700 ease-in-out hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-hidden">

      <div className="relative aspect-square overflow-hidden rounded-lg bg-[#FAFAFA] mb-4">
        <img
          src={data.image}
          alt={data.title}
          className="w-full h-full  "
          onError={(e) => { e.target.src = 'https://via.placeholder.com/300?text=App+Icon'; }}
        />
      </div>

      <div className="space-y-1 mb-4">
        <h3 className=" font-bold text-lg leading-tight truncate transition-colors duration-500 group-hover:text-[#632EE3]">
          {data.title}
        </h3>
        <p className="text-gray-400 text-xs font-medium uppercase tracking-wider">{data.companyName}</p>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-lg text-xs font-bold">
          <FiDownload size={12} />
          <span>{formatNumbers(data.downloads)}</span>
        </div>

        <div className="flex items-center gap-1.5 bg-amber-50 text-amber-500 px-2.5 py-1 rounded-lg text-xs font-bold">
          <FaStar size={12} />
          <span>{data.ratingAvg}</span>
        </div>
      </div>

      <div className="absolute bottom-0 left-1/2 w-0 h-0.75 bg-linear-to-r from-[#632EE3] to-[#9F62F2] transition-all duration-700 ease-in-out -translate-x-1/2 group-hover:w-full" />
    </Link>
  );
};

export default Card;