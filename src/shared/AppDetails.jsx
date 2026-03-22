import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { FaStar, FaThumbsUp } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import download from '../assets/icon-downloads.png';
import rating from '../assets/icon-ratings.png';
import review from '../assets/icon-review.png';
import { addToDB } from '../utility/Utility';

const AppDetails = () => {

    const { id } = useParams();
    const apps = useLoaderData();

    const appData = apps.find(app => app.id === parseInt(id));

    const {
        image,
        title,
        companyName,
        description,
        size,
        reviews,
        ratingAvg,
        downloads,
        ratings
    } = appData;

    const [installed, setInstalled] = useState(false);

    const handleInstall = (id, title) => {
        addToDB(id, title);
        setInstalled(true);
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6 md:mt-10 mb-16 md:mb-20 overflow-x-hidden">

            {/* Top Section */}
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">

                {/* App Icon */}
                <img
                    src={image}
                    alt={title}
                    className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 p-4 md:p-5 rounded-lg bg-base-100 object-contain shrink-0"
                />

                {/* Info */}
                <div className="flex-1 w-full min-w-0">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold wrap-break-word">{title}</h2>

                    <p className="text-xs sm:text-sm text-gray-500 mt-1 wrap-break-word">
                        Developed by <span className="text-primary font-medium">{companyName}</span>
                    </p>

                    {/* Stats */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 my-4">

                        <div className='flex flex-col items-center md:items-start w-[45%] sm:w-auto'>
                            <img src={download} alt="Download" className='w-5 h-5 sm:w-6 sm:h-6' />
                            <div>
                                <p className="text-xs sm:text-sm text-gray-500">Downloads</p>
                                <p className="font-bold text-sm sm:text-base">{(downloads / 1000)}K</p>
                            </div>
                        </div>

                        <div className='flex flex-col items-center md:items-start w-[45%] sm:w-auto'>
                            <img src={rating} alt="Rating" className='w-5 h-5 sm:w-6 sm:h-6' />
                            <div>
                                <p className="text-xs sm:text-sm text-gray-500">Average Rating</p>
                                <p className="font-bold text-sm sm:text-base">{ratingAvg}</p>
                            </div>
                        </div>

                        <div className='flex flex-col items-center md:items-start w-[45%] sm:w-auto'>
                            <img src={review} alt="Review" className='w-5 h-5 sm:w-6 sm:h-6' />
                            <div>
                                <p className="text-xs sm:text-sm text-gray-500">Total Reviews</p>
                                <p className="font-bold text-sm sm:text-base">{(reviews / 1000)}K</p>
                            </div>
                        </div>

                    </div>

                    {/* Install Button */}
                    <button
                        onClick={() => handleInstall(id, title)}
                        disabled={installed}
                        className={`btn w-full sm:w-auto mt-4 text-white border-none 
                            ${installed
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:from-[#5a27cc] hover:to-[#8f57e0]"
                            }`}
                    >
                        {installed ? "Installed" : `Install Now (${size} MB)`}
                    </button>
                </div>
            </div>

            {/* Ratings Section */}
            <div className="mt-8 md:mt-10">
                <h3 className="font-bold mb-4 text-lg">Ratings</h3>

                {ratings?.length > 0 && (
                    <div className="w-full h-52 sm:h-64 md:h-72 min-h-55 min-w-0">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={ratings} layout="vertical">
                                <XAxis type="number" />
                                <YAxis dataKey="name" type="category" />
                                <Tooltip />
                                <Bar dataKey="count" fill="#FF8811" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                )}
            </div>

            <div className="divider my-4 md:my-6"></div>

            {/* Description */}
            <div className="mt-6 md:mt-10">
                <h3 className="font-bold mb-2 text-lg">Description</h3>
                <p className="text-gray-600 leading-relaxed text-sm sm:text-base break-words">
                    {description}
                </p>
            </div>

        </div>
    );
};

export default AppDetails;