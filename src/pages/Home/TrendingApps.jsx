import React from 'react';
import Card from '../../shared/Card';
import { Link } from 'react-router';

const TrendingApps = ({ trendingApps }) => {

    return (
        <section className='max-w-7xl mx-auto px-4 my-20'>
            <div
                className='text-center space-y-2 my-5'
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <h2 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold">Trending Apps</h2>
                <p>Explore All Trending Apps on the Market developed by us</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {trendingApps.slice(0, 8).map(data => (
                    <Card key={data.id} data={data} />
                ))}
            </div>

            <div
                className='flex justify-center my-10'
                data-aos="fade-up"
                data-aos-delay="300"
            >
                <Link
                    to="/apps"
                    className="btn btn-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white border-none cursor-pointer hover:opacity-90"
                >
                    Show All
                </Link>
            </div>

        </section>

    );
};

export default TrendingApps;