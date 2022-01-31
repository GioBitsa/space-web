import React from 'react';
import HomeContent from '../components/HomeContent';
import Navbar from '../components/Navbar';
import Page from '../components/Page';



const Home = () => {

    return (
        <>
            <Page src={"home"} />
            <Navbar active={1} />
            <HomeContent />
        </>
    )
}

export default Home;
