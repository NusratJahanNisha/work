import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import ChooseUs from '../ChooseUs/ChooseUs';
import Footer from '../Footer/Footer';
import HomeBanner from '../HomeBanner/HomeBanner';
import HomeNavbar from '../HomeNavbar/HomeNavbar';
import Sarvice from '../Sarvice/Sarvice';
import TrainingProgram from '../TrainingProgram/TrainingProgram';


const HomePage = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Sarvice></Sarvice>
            <AboutUs></AboutUs>
            <TrainingProgram></TrainingProgram>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;