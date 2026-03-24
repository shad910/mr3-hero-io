import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import Aos from 'aos';
import Banner from './Banner';
import Stats from './Stats';
import TrendingApps from './TrendingApps';


const Home = () => {

    const [trendingApps, setTrendingApps] = useState([]);
    const data = useLoaderData();

    useEffect(() => {
        Aos.refresh();
        setTrendingApps(data);
    }, [data]);

    return (
        <section>
            <Banner />
            <Stats />
            <TrendingApps trendingApps={trendingApps} />
        </section>
    );
};

export default Home;