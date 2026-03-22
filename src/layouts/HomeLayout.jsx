import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import Loading from '../shared/Loading';

const HomeLayout = () => {

    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);

    return (
        <div className='flex flex-col'>
            <header>
                <Navbar />
            </header>

            <main className='flex-1 bg-base-200'>
                {isNavigating && <Loading />}
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
};

export default HomeLayout;