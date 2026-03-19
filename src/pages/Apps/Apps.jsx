import React from 'react';
import { useLoaderData } from 'react-router';
import Card from '../../shared/Card';

const Apps = () => {

    const apps = useLoaderData();


    return (
        <section className='max-w-7xl mx-auto mb-20'>
            <div className='text-center space-y-2.5 my-10'>
                <h2 className='text-4xl font-bold'>Our All Applications</h2>
                <p className='text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>
            </div>

            <div className='my-8 flex justify-between items-center'>
                <h5 className='text-[#001931] text-lg font-semibold'>({apps.length}) Apps Found</h5>
                <label className="input">
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
                    />
                </label>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
                {
                    apps.map(app => (
                        <Card key={app.id} data={app} />
                    ))
                }
            </div>
        </section>
    );
};

export default Apps;