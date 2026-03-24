import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Aos from 'aos';
import Card from '../../shared/Card';
import error from '../../assets/App-Error.png'

const Apps = () => {

    const [apps, setApps] = useState([]);
    const [search, setSearch] = useState('');

    const data = useLoaderData();

    useEffect(() => {
        Aos.refresh();
        setApps(data);
    }, [data]);

    const filteredApps = apps.filter(app =>
        app.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <section className='max-w-7xl px-4 mx-auto mb-20'>

            <div 
                className='text-center space-y-2.5 my-10'
                data-aos="fade-up"
                data-aos-delay="100"
            >
                <h2 className='text-4xl font-bold'>Our All Applications</h2>
                <p className='text-[#627382]'>
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>

            <div 
                className='my-8 flex justify-between items-center flex-wrap gap-4'
                data-aos="fade-up"
                data-aos-delay="200"
            >
                <h5 className='text-[#001931] text-sm font-medium'>
                    ({filteredApps.length}) Apps Found
                </h5>

                <label className="input input-bordered flex items-center gap-2">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input
                        type="search"
                        name='search'
                        placeholder="Search Apps"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        className="grow"
                    />
                </label>
            </div>

            {filteredApps.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {filteredApps.map(app => (
                        <Card key={app.id} data={app} />
                    ))}
                </div>
            ) : (
                <div 
                    className="flex flex-col items-center justify-center text-center py-10">
                    <img
                        src={error}
                        alt="No App Found"
                        className="w-64 md:w-80 mb-6"
                    />
                    <h3 className="text-xl md:text-2xl font-bold text-[#001931]">
                        OPPS!! APP NOT FOUND
                    </h3>
                    <p className="text-sm text-gray-500 mt-2 max-w-md">
                        The app you are requesting is not found on our system. Please try another apps.
                    </p>
                    <button
                        onClick={() => setSearch('')}
                        className="btn btn-sm mt-4 bg-[#632EE3] text-white hover:bg-[#5324c7]"
                    >
                        Go Back
                    </button>
                </div>
            )}

        </section>
    );
};

export default Apps;