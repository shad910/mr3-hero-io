import React from 'react';
import Banner from './Banner';
import Stats from './Stats';
import TrendingApps from './TrendingApps';


const Home = () => {
    return (
        <section>
            <Banner/>
            <Stats/>
            <TrendingApps />
        </section>
    );
};

export default Home;