import React from 'react';
import Banner from '../banner/Banner';
import Success from '../success/Success';
import AboutSection from '../aboutSection/AboutSection';
import { Outlet } from 'react-router-dom';
import VocabSchool from '../vocabSchool/VocabSchool';
import { Helmet } from 'react-helmet-async';

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    assignment-9 | Home
                </title>
            </Helmet>
            <div className='w-11/12 mx-auto'>
                <Banner></Banner>
                <AboutSection></AboutSection>
                <Success></Success>
                <Outlet></Outlet>
                <VocabSchool></VocabSchool>
            </div>
        </div>
    );
};

export default Home;