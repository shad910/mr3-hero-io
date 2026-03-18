import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar';

const HomeLayout = () => {
    return (
        <div className='flex flex-col'>
            <header>
                <Navbar />
            </header>

            <main className='flex-1'>
                <Outlet />
            </main>

            <footer></footer>
        </div>
    );
};

export default HomeLayout;