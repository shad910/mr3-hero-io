import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';

const HomeLayout = () => {
    return (
        <div className='flex flex-col'>
            <header>
                <Navbar />
            </header>

            <main className='flex-1 bg-base-200'>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default HomeLayout;