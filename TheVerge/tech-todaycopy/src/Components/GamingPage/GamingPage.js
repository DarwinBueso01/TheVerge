import React from 'react';
import Navbar from '../Navbar/Navbar';
import ContentHero from '../ContentHeros/GameHero/GameHero';
import Footer from '../Footer/Footer';
import GameContent from '../Content/Gamers/GameContent';
import Gaming from '../Content/Gamers/gaming';
import Carousel from '../Carousel/GamingCarousel';

const GamingPage = () => {
    return (
        <div>
            <Navbar page="gamingPage"/>
            <ContentHero />
            <Carousel />
            <GameContent />
            <Gaming />
            <Footer />
           
        </div>
    )
};

export default GamingPage;