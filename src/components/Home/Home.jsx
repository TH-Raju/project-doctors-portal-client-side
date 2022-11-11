import React from 'react';
import Services from '../services/Services';
import Treatment from '../services/Treatment';
import Banner from './Banner';
import Contact from './Contact';
import InfoCards from './InfoCards';
import MakeAppoinment from './MakeAppoinment';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppoinment></MakeAppoinment>
            <Testimonial></Testimonial>
            <Contact></Contact>

        </div>
    );
};

export default Home;